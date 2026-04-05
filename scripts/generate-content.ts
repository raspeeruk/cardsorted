#!/usr/bin/env tsx
// ============================================================================
// Content Generator — CardSorted
// ============================================================================
// Generates rich AI content for all page types using Claude Haiku.
// Run: ANTHROPIC_API_KEY=sk-... npx tsx scripts/generate-content.ts [--type cards|categories|comparisons]
// Resume: skips files that already exist in src/lib/content/generated/
// Cost: ~$0.30 for all 155 pages (Haiku 3.5)
// ============================================================================

import fs from "fs";
import path from "path";
import { cards } from "../src/lib/data/cards";
import { getAllCategories } from "../src/lib/data/categories";
import { getComparisonPairs } from "../src/lib/data/comparisons";
import { getCardBySlug } from "../src/lib/data/cards";

const API_KEY = process.env.ANTHROPIC_API_KEY;
if (!API_KEY) {
  console.error("ERROR: Set ANTHROPIC_API_KEY environment variable");
  process.exit(1);
}

const MODEL = "claude-haiku-4-5-20251001";
const CONTENT_DIR = path.join(process.cwd(), "src/lib/content/generated");
const RATE_LIMIT_MS = 200; // 200ms between calls (~5 req/sec)

// ============================================================================
// Anthropic API
// ============================================================================

async function callClaude(system: string, user: string, maxTokens = 2048): Promise<string> {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": API_KEY!,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: maxTokens,
      system,
      messages: [{ role: "user", content: user }],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API error ${res.status}: ${err}`);
  }

  const data = await res.json();
  return data.content[0].text;
}

function parseJson<T>(raw: string): T {
  let jsonStr = raw.trim();
  // Strip opening code fence (```json or ```)
  if (jsonStr.startsWith("```")) {
    jsonStr = jsonStr.replace(/^```(?:json)?\s*\n?/, "");
  }
  // Strip closing code fence
  if (jsonStr.endsWith("```")) {
    jsonStr = jsonStr.replace(/\n?```\s*$/, "");
  }
  // Handle truncated JSON — if it doesn't end with }, try to fix
  jsonStr = jsonStr.trim();
  if (!jsonStr.endsWith("}") && !jsonStr.endsWith("]")) {
    // Find the last complete property
    const lastBrace = jsonStr.lastIndexOf("}");
    if (lastBrace > 0) {
      // Trim to last complete object and close any open arrays/objects
      jsonStr = jsonStr.substring(0, lastBrace + 1);
      // Count unclosed brackets
      const opens = (jsonStr.match(/\[/g) || []).length;
      const closes = (jsonStr.match(/\]/g) || []).length;
      for (let i = 0; i < opens - closes; i++) jsonStr += "]";
      const openBraces = (jsonStr.match(/\{/g) || []).length;
      const closeBraces = (jsonStr.match(/\}/g) || []).length;
      for (let i = 0; i < openBraces - closeBraces; i++) jsonStr += "}";
    }
  }
  return JSON.parse(jsonStr);
}

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

function exists(subdir: string, slug: string): boolean {
  return fs.existsSync(path.join(CONTENT_DIR, subdir, `${slug}.json`));
}

function save(subdir: string, slug: string, data: unknown) {
  const dir = path.join(CONTENT_DIR, subdir);
  ensureDir(dir);
  fs.writeFileSync(path.join(dir, `${slug}.json`), JSON.stringify(data, null, 2));
}

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

// ============================================================================
// Card Review Content
// ============================================================================

const CARD_SYSTEM = `You are an expert financial journalist writing credit card reviews for CardSorted.com. Write in a direct, authoritative tone — like a Bloomberg reporter covering personal finance. Use data, not fluff. Never use exclamation marks. Never start with "Looking for" or "If you're looking for."

Return ONLY raw JSON (no markdown, no code fences, no backticks). Schema:
{
  "summary": "2-3 sentence card overview with key stats",
  "body": "800-1200 word HTML review. Use ONLY simple tags: <h2>, <h3>, <p>, <ul>, <li>. NO attributes, NO class names, NO style tags. Escape all quotes in JSON. Cover: overview, rewards breakdown, fee analysis, approval odds, how to maximize value, who should skip it.",
  "pros": ["4-6 specific pros with numbers"],
  "cons": ["3-5 honest cons"],
  "bestFor": "One sentence: Best for [specific person who should get this card]",
  "expertVerdict": "2-3 sentence final take — would you recommend it?",
  "faqs": [{"question": "...", "answer": "2-3 sentence answer"}] // exactly 5
}`;

async function generateCardContent() {
  const dir = "cards";
  let generated = 0;
  let skipped = 0;

  for (const card of cards) {
    if (exists(dir, card.slug)) {
      skipped++;
      continue;
    }

    const prompt = `Write a comprehensive review for the ${card.name} credit card.

Card data:
- Issuer: ${card.issuer} (${card.network})
- Annual fee: $${card.annualFee}
- APR: ${card.aprMin}%–${card.aprMax}%
- Rewards: ${card.rewardsRate} (${card.rewardsType})
- Bonus categories: ${card.bonusCategories.map((b) => `${b.category}: ${b.rate}`).join(", ") || "None"}
- Signup bonus: ${card.signupBonus || "None"}${card.signupBonusValue ? ` (${card.signupBonusValue})` : ""}
- Credit score: ${card.creditScoreMin}–${card.creditScoreMax}
- Foreign transaction fee: ${card.foreignTransactionFee ? "Yes (3%)" : "None"}
- Intro APR: ${card.introAprPurchase || "None"} (purchases), ${card.introAprBalance || "None"} (balance transfers)
- Key features: ${card.keyFeatures.join("; ")}

Write an authoritative, data-driven review. Include specific dollar breakdowns and spending scenarios. Be honest about drawbacks.`;

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const raw = await callClaude(CARD_SYSTEM, prompt, 4096);
        const content = parseJson(raw);
        save(dir, card.slug, content);
        generated++;
        process.stdout.write(`\r  Cards: ${generated} generated, ${skipped} skipped`);
        await sleep(RATE_LIMIT_MS);
        break;
      } catch (err) {
        if (attempt === 3) {
          console.error(`\n  FAILED [${card.slug}] after 3 attempts: ${err}`);
        } else {
          console.error(`\n  RETRY [${card.slug}] attempt ${attempt}: ${err}`);
          await sleep(1000);
        }
      }
    }
  }

  console.log(`\n  Cards: ${generated} generated, ${skipped} skipped (total: ${cards.length})`);
}

// ============================================================================
// Category Content
// ============================================================================

const CATEGORY_SYSTEM = `You are an expert financial journalist writing category guides for CardSorted.com. Write in a direct, authoritative tone. Never use exclamation marks.

Return ONLY raw JSON (no markdown, no code fences, no backticks). Schema:
{
  "intro": "150-200 word HTML category overview using <p> tags",
  "buyingGuide": "300-500 word HTML buying guide using <h3>, <p>, <ul>, <li> tags. Cover: what to look for, common mistakes, how to compare, red flags.",
  "faqs": [{"question": "...", "answer": "2-3 sentence answer"}] // exactly 5
}`;

async function generateCategoryContent() {
  const categories = getAllCategories();
  const dir = "categories";
  let generated = 0;
  let skipped = 0;

  for (const cat of categories) {
    if (exists(dir, cat.slug)) {
      skipped++;
      continue;
    }

    const catCards = cards.filter((c) => c.categories.includes(cat.slug));
    const topCards = catCards.slice(0, 5).map((c) => `${c.name} ($${c.annualFee}/yr, ${c.rewardsRate})`).join("; ");

    const prompt = `Write a buying guide for the "${cat.name}" credit card category.

Category: ${cat.name}
Description: ${cat.longDescription}
Number of cards: ${catCards.length}
Top cards in this category: ${topCards}
Fee range: $${Math.min(...catCards.map((c) => c.annualFee))}–$${Math.max(...catCards.map((c) => c.annualFee))}
Score range: ${Math.min(...catCards.map((c) => c.creditScoreMin))}–${Math.max(...catCards.map((c) => c.creditScoreMax))}

Write a practical buying guide that helps someone choose the right ${cat.name.toLowerCase()} card. Be specific about what features matter and what to avoid.`;

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const raw = await callClaude(CATEGORY_SYSTEM, prompt, 2000);
        const content = parseJson(raw);
        save(dir, cat.slug, content);
        generated++;
        process.stdout.write(`\r  Categories: ${generated} generated, ${skipped} skipped`);
        await sleep(RATE_LIMIT_MS);
        break;
      } catch (err) {
        if (attempt === 3) {
          console.error(`\n  FAILED [${cat.slug}] after 3 attempts: ${err}`);
        } else {
          await sleep(1000);
        }
      }
    }
  }

  console.log(`\n  Categories: ${generated} generated, ${skipped} skipped (total: ${categories.length})`);
}

// ============================================================================
// Comparison Content
// ============================================================================

const COMPARISON_SYSTEM = `You are an expert financial journalist writing credit card comparisons for CardSorted.com. Be direct and opinionated — make a clear recommendation. Never use exclamation marks.

Return ONLY raw JSON (no markdown, no code fences, no backticks). Schema:
{
  "intro": "150-200 word comparison overview (plain text, not HTML)",
  "verdict": "2-3 sentence verdict — which card wins and why",
  "chooseAIf": ["3-4 specific reasons to choose card A"],
  "chooseBIf": ["3-4 specific reasons to choose card B"],
  "faqs": [{"question": "...", "answer": "2-3 sentence answer"}] // exactly 5
}`;

async function generateComparisonContent() {
  const pairs = getComparisonPairs();
  const dir = "comparisons";
  let generated = 0;
  let skipped = 0;

  for (const pair of pairs) {
    if (exists(dir, pair.slug)) {
      skipped++;
      continue;
    }

    const cardA = getCardBySlug(pair.cardASlug);
    const cardB = getCardBySlug(pair.cardBSlug);
    if (!cardA || !cardB) continue;

    const prompt = `Compare these two credit cards and give a clear recommendation:

CARD A: ${cardA.name}
- Issuer: ${cardA.issuer} (${cardA.network})
- Annual fee: $${cardA.annualFee}
- APR: ${cardA.aprMin}%–${cardA.aprMax}%
- Rewards: ${cardA.rewardsRate}
- Bonus categories: ${cardA.bonusCategories.map((b) => `${b.category}: ${b.rate}`).join(", ") || "None"}
- Signup bonus: ${cardA.signupBonus || "None"}
- Score required: ${cardA.creditScoreMin}+
- Key features: ${cardA.keyFeatures.join("; ")}

CARD B: ${cardB.name}
- Issuer: ${cardB.issuer} (${cardB.network})
- Annual fee: $${cardB.annualFee}
- APR: ${cardB.aprMin}%–${cardB.aprMax}%
- Rewards: ${cardB.rewardsRate}
- Bonus categories: ${cardB.bonusCategories.map((b) => `${b.category}: ${b.rate}`).join(", ") || "None"}
- Signup bonus: ${cardB.signupBonus || "None"}
- Score required: ${cardB.creditScoreMin}+
- Key features: ${cardB.keyFeatures.join("; ")}

Give a clear, opinionated comparison. Include specific spending scenarios (e.g., "If you spend $500/month on dining..."). Make a recommendation.`;

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const raw = await callClaude(COMPARISON_SYSTEM, prompt, 2000);
        const content = parseJson(raw);
        save(dir, pair.slug, content);
        generated++;
        process.stdout.write(`\r  Comparisons: ${generated} generated, ${skipped} skipped`);
        await sleep(RATE_LIMIT_MS);
        break;
      } catch (err) {
        if (attempt === 3) {
          console.error(`\n  FAILED [${pair.slug}] after 3 attempts: ${err}`);
        } else {
          await sleep(1000);
        }
      }
    }
  }

  console.log(`\n  Comparisons: ${generated} generated, ${skipped} skipped (total: ${pairs.length})`);
}

// ============================================================================
// Main
// ============================================================================

async function main() {
  const typeArg = process.argv.find((a) => a.startsWith("--type="))?.split("=")[1];
  const types = typeArg ? [typeArg] : ["cards", "categories", "comparisons"];

  console.log(`CardSorted Content Generator`);
  console.log(`Model: ${MODEL}`);
  console.log(`Types: ${types.join(", ")}`);
  console.log(`Output: ${CONTENT_DIR}`);
  console.log("");

  if (types.includes("cards")) {
    console.log("Generating card reviews...");
    await generateCardContent();
  }

  if (types.includes("categories")) {
    console.log("Generating category guides...");
    await generateCategoryContent();
  }

  if (types.includes("comparisons")) {
    console.log("Generating comparisons...");
    await generateComparisonContent();
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
