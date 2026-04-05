// ============================================================================
// Content Loader — CardSorted
// ============================================================================
// Reads AI-generated JSON content at build time. Falls back gracefully when
// content hasn't been generated yet (pages still render with programmatic data).
// ============================================================================

import fs from "fs";
import path from "path";
import type { CardContent, CategoryContent, ComparisonContent } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "src/lib/content/generated");

function loadJson<T>(subdir: string, slug: string): T | null {
  try {
    const filePath = path.join(CONTENT_DIR, subdir, `${slug}.json`);
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function getCardContent(slug: string): CardContent | null {
  return loadJson<CardContent>("cards", slug);
}

export function getCategoryContent(slug: string): CategoryContent | null {
  return loadJson<CategoryContent>("categories", slug);
}

export function getComparisonContent(slug: string): ComparisonContent | null {
  return loadJson<ComparisonContent>("comparisons", slug);
}
