// ============================================================================
// Guide Content — CardSorted
// ============================================================================

export interface GuideSection {
  heading: string;
  content: string; // HTML content
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  readingTime: string;
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
}

export const guides: Guide[] = [
  {
    slug: "how-credit-scores-work",
    title: "How Credit Scores Work: A Complete Guide",
    description:
      "Understand FICO and VantageScore models, what factors affect your score, and how to improve it before applying for a credit card.",
    category: "Credit Basics",
    author: "Rachel Torres, CFP",
    readingTime: "8 min read",
    sections: [
      {
        heading: "What Is a Credit Score?",
        content:
          "<p>A credit score is a three-digit number (typically 300–850) that represents your creditworthiness. Lenders, including credit card issuers, use it to decide whether to approve your application and what interest rate to offer.</p><p>The two main scoring models are <strong>FICO</strong> (used by 90% of lenders) and <strong>VantageScore</strong>. While they differ slightly in methodology, both evaluate similar factors.</p>",
      },
      {
        heading: "The Five Factors That Determine Your Score",
        content:
          '<ul><li><strong>Payment History (35%)</strong> — Whether you pay on time. Even one 30-day late payment can drop your score 60–100 points.</li><li><strong>Credit Utilization (30%)</strong> — How much of your available credit you use. Keep it under 30%, ideally under 10%.</li><li><strong>Length of Credit History (15%)</strong> — How long your accounts have been open. Older is better.</li><li><strong>Credit Mix (10%)</strong> — Having different types of credit (cards, auto loans, mortgage) helps.</li><li><strong>New Credit (10%)</strong> — Each application creates a "hard inquiry" that temporarily lowers your score.</li></ul>',
      },
      {
        heading: "Credit Score Ranges Explained",
        content:
          "<ul><li><strong>800–850: Exceptional</strong> — Best rates on everything. Approval is nearly guaranteed.</li><li><strong>740–799: Very Good</strong> — Most premium cards are within reach.</li><li><strong>670–739: Good</strong> — Most mainstream cards available. Rates may be higher.</li><li><strong>580–669: Fair</strong> — Limited options. Consider secured or starter cards.</li><li><strong>300–579: Poor</strong> — Secured cards and credit-builder loans are your best path forward.</li></ul>",
      },
      {
        heading: "How to Improve Your Score Before Applying",
        content:
          "<ol><li><strong>Pay every bill on time.</strong> Set up autopay for at least the minimum.</li><li><strong>Lower your utilization.</strong> Pay down balances or request credit limit increases.</li><li><strong>Don't close old accounts.</strong> They help your average age of credit.</li><li><strong>Limit applications.</strong> Each hard inquiry stays on your report for 2 years.</li><li><strong>Check your reports for errors.</strong> Dispute anything inaccurate at annualcreditreport.com.</li></ol>",
      },
    ],
    faqs: [
      {
        question: "How often does my credit score update?",
        answer:
          "Credit scores typically update every 30–45 days when your creditors report new information to the bureaus. Major events like paying off a balance or a late payment can cause faster changes.",
      },
      {
        question: "Does checking my own credit score lower it?",
        answer:
          "No. Checking your own score is a 'soft inquiry' and has zero impact. Only applications for new credit (hard inquiries) can temporarily lower your score.",
      },
      {
        question: "What credit score do I need for a credit card?",
        answer:
          "It depends on the card. Secured cards accept scores as low as 300. Most mainstream cards require 670+. Premium cards like the Amex Platinum typically require 740+.",
      },
    ],
  },
  {
    slug: "best-time-to-apply-for-credit-card",
    title: "When Is the Best Time to Apply for a Credit Card?",
    description:
      "Timing matters. Learn when your approval odds are highest and how to prepare your credit profile before applying.",
    category: "Strategy",
    author: "David Chen, CFA",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Why Timing Your Application Matters",
        content:
          "<p>Every credit card application results in a hard inquiry that temporarily lowers your score. Applying at the wrong time — when your utilization is high or you've recently opened other accounts — can mean rejection and a score hit with nothing to show for it.</p>",
      },
      {
        heading: "The Ideal Window",
        content:
          "<p>Apply when these conditions align:</p><ul><li><strong>Utilization under 10%.</strong> This is reported to bureaus mid-cycle, so pay down balances a few days before your statement closes.</li><li><strong>No other applications in the last 6 months.</strong> Multiple recent inquiries signal desperation to lenders.</li><li><strong>Stable income.</strong> Many issuers ask for annual income on the application.</li><li><strong>Clean recent payment history.</strong> No late payments in the last 12 months.</li></ul>",
      },
      {
        heading: "Chase 5/24 Rule and Issuer-Specific Rules",
        content:
          "<p>Chase automatically rejects applicants who have opened 5 or more credit cards (from any issuer) in the past 24 months. This is the most well-known issuer restriction, but others exist:</p><ul><li><strong>Amex</strong> — Once-per-lifetime signup bonus rule per card.</li><li><strong>Citi</strong> — 48-month rule: no bonus if you've had the same card in 48 months.</li><li><strong>Capital One</strong> — Generally limits you to 2 of their cards.</li></ul>",
      },
      {
        heading: "Seasonal Considerations",
        content:
          "<p>Credit card issuers sometimes increase signup bonuses during competitive periods (Q4 holiday season, early Q1). While you shouldn't time your application solely on bonuses, it's worth checking if a card you're interested in has a historically elevated offer.</p>",
      },
    ],
    faqs: [
      {
        question: "How long should I wait between credit card applications?",
        answer:
          "A good rule of thumb is 3–6 months between applications. This allows time for hard inquiry impacts to diminish and for new accounts to age slightly.",
      },
      {
        question: "Can I apply for two cards on the same day?",
        answer:
          "Sometimes yes — some issuers will combine hard inquiries if you apply the same day. This works with some Amex cards. But it's risky and can result in both applications being denied.",
      },
    ],
  },
  {
    slug: "maximize-credit-card-rewards",
    title: "How to Maximize Credit Card Rewards Without Overspending",
    description:
      "A practical framework for earning more points, cash back, and miles from your everyday spending without changing your budget.",
    category: "Rewards Strategy",
    author: "Rachel Torres, CFP",
    readingTime: "7 min read",
    sections: [
      {
        heading: "The Cardinal Rule: Never Spend to Earn",
        content:
          "<p>The fastest way to lose money on credit card rewards is to spend more than you normally would just to earn points. A 2% cash back card earning $20/month is worthless if you overspent by $200 to get there. The goal is to redirect existing spending to maximize returns.</p>",
      },
      {
        heading: "Map Your Spending to the Right Cards",
        content:
          "<p>Most people spend in 3–5 primary categories. Audit your last 3 months of bank statements and identify your top categories:</p><ul><li><strong>Groceries</strong> — Amex Gold (4x), Blue Cash Preferred (6%)</li><li><strong>Dining</strong> — Amex Gold (4x), Capital One SavorOne (3%)</li><li><strong>Gas</strong> — Citi Custom Cash (5%), Chase Freedom Flex (rotating)</li><li><strong>Travel</strong> — Chase Sapphire Reserve (3x), Capital One Venture X (2x + credits)</li><li><strong>Everything Else</strong> — Citi Double Cash (2%), Chase Freedom Unlimited (1.5%)</li></ul>",
      },
      {
        heading: "The Two-Card Strategy",
        content:
          "<p>You don't need 10 cards to optimize. A simple two-card setup covers most people:</p><ol><li><strong>Category card</strong> — A card with high rates in your top 1–2 spending categories.</li><li><strong>Flat-rate card</strong> — A no-fee 1.5–2% card for everything else.</li></ol><p>This captures 80% of the value with 20% of the complexity.</p>",
      },
      {
        heading: "Signup Bonuses: The Biggest Opportunity",
        content:
          "<p>A single signup bonus can be worth more than a year of regular spending rewards. The Chase Sapphire Preferred's 60,000-point bonus is worth $750 in travel — you'd need to spend $50,000 at 1.5% cash back to earn the same amount organically.</p><p>Target 2–3 signup bonuses per year from cards you actually want to keep.</p>",
      },
    ],
    faqs: [
      {
        question: "Are credit card points worth the effort?",
        answer:
          "For most people, yes. If you already use credit cards for everyday purchases, optimizing for the right card costs nothing extra and can easily earn $500–2,000/year in rewards.",
      },
      {
        question: "Should I pay an annual fee for better rewards?",
        answer:
          "Only if the rewards exceed the fee. Calculate your expected earnings in the card's bonus categories and subtract the annual fee. If the net is positive, the fee card is worth it.",
      },
      {
        question: "What's better — cash back or travel points?",
        answer:
          "Cash back is simpler and more flexible. Travel points can offer higher value (1.5–2 cents per point) but require more effort to maximize. If you fly or stay in hotels frequently, points usually win.",
      },
    ],
  },
  {
    slug: "balance-transfer-guide",
    title: "Balance Transfer Credit Cards: How They Work and When to Use Them",
    description:
      "Learn how balance transfers can save you hundreds in interest, the fees involved, and how to pick the right 0% APR card.",
    category: "Debt Management",
    author: "Nina Patel, AFC",
    readingTime: "7 min read",
    sections: [
      {
        heading: "What Is a Balance Transfer?",
        content:
          "<p>A balance transfer moves existing credit card debt from one card to another — usually one offering a 0% introductory APR. This lets you pay down principal without accumulating interest for 12–21 months, depending on the card.</p>",
      },
      {
        heading: "How Much Can You Actually Save?",
        content:
          "<p>If you owe $5,000 at 24% APR and transfer it to a 0% card for 18 months:</p><ul><li>Without transfer: ~$1,800 in interest over 18 months (minimum payments).</li><li>With transfer: $150–250 balance transfer fee (3–5%). That's $1,550+ saved.</li></ul><p>The math is clear — but only if you commit to paying it off during the intro period.</p>",
      },
      {
        heading: "Top Balance Transfer Cards",
        content:
          "<ul><li><strong>Citi Diamond Preferred</strong> — 0% intro APR for 21 months on balance transfers.</li><li><strong>Wells Fargo Reflect</strong> — 0% intro APR for up to 21 months.</li><li><strong>Chase Freedom Unlimited</strong> — 0% intro APR for 15 months plus ongoing 1.5% cash back.</li></ul>",
      },
      {
        heading: "Pitfalls to Avoid",
        content:
          "<ol><li><strong>Don't miss a payment.</strong> One late payment can void your intro APR.</li><li><strong>Have a payoff plan.</strong> Divide the balance by the number of intro months and pay that amount.</li><li><strong>Don't add new spending.</strong> Use a different card for purchases. New charges may accrue interest immediately.</li><li><strong>Watch the revert rate.</strong> After the intro period, the APR jumps to 18–28%.</li></ol>",
      },
    ],
    faqs: [
      {
        question: "Does a balance transfer hurt your credit score?",
        answer:
          "The hard inquiry may lower your score by 5–10 points initially. But reducing your utilization by spreading debt across more available credit usually improves your score within a few months.",
      },
      {
        question: "Can I transfer a balance from the same bank?",
        answer:
          "Usually no. Most issuers don't allow balance transfers between their own cards. You'll need to transfer to a card from a different bank.",
      },
      {
        question: "What happens if I don't pay off the balance in time?",
        answer:
          "The regular APR kicks in on the remaining balance — typically 18–28%. You won't owe back-interest on what you already paid, but the remaining amount will start accruing interest immediately.",
      },
    ],
  },
  {
    slug: "secured-credit-cards-explained",
    title: "Secured Credit Cards: Your Path to Building Credit from Scratch",
    description:
      "Secured cards are the best way to build or rebuild credit when you have no history or a low score. Here's how to use them effectively.",
    category: "Credit Building",
    author: "Nina Patel, AFC",
    readingTime: "6 min read",
    sections: [
      {
        heading: "What Is a Secured Credit Card?",
        content:
          "<p>A secured credit card requires a refundable security deposit — typically $200–500 — that becomes your credit limit. Because the deposit reduces the issuer's risk, secured cards accept applicants with no credit history or very low scores (300+).</p><p>In every other way, they work like regular credit cards: you make purchases, receive a statement, and pay your bill. Your payment history is reported to all three major credit bureaus.</p>",
      },
      {
        heading: "How to Use a Secured Card to Build Credit",
        content:
          "<ol><li><strong>Use it for one small recurring charge</strong> (like a streaming subscription).</li><li><strong>Set up autopay for the full balance.</strong> This ensures on-time payments (35% of your score).</li><li><strong>Keep utilization under 10%.</strong> On a $200 limit, that means keeping the balance under $20 at statement close.</li><li><strong>Wait 6–12 months.</strong> Most issuers will upgrade you to an unsecured card and refund your deposit.</li></ol>",
      },
      {
        heading: "Best Secured Cards Right Now",
        content:
          "<ul><li><strong>Discover it Secured</strong> — Earns 2% cash back on gas/restaurants (up to $1,000/quarter) and 1% on everything else. Discover matches all cash back in the first year.</li><li><strong>Capital One Platinum Secured</strong> — $49–200 deposit for a $200 credit line. Reports to all 3 bureaus.</li></ul>",
      },
      {
        heading: "When to Graduate",
        content:
          "<p>After 6–12 months of responsible use, your score should be in the 650+ range. At that point, you can apply for a regular unsecured card with better rewards. Don't close the secured card immediately — keep it open to maintain your credit history length.</p>",
      },
    ],
    faqs: [
      {
        question: "Do I get my deposit back from a secured card?",
        answer:
          "Yes. Your deposit is fully refundable. You'll get it back when you close the account (as long as your balance is $0) or when the issuer upgrades you to an unsecured card.",
      },
      {
        question: "How long does it take to build credit with a secured card?",
        answer:
          "Most people see meaningful score improvement within 6–12 months of responsible use. Factors include on-time payments, low utilization, and having no other negative marks on your report.",
      },
    ],
  },
  {
    slug: "annual-fee-worth-it",
    title: "Is Paying a Credit Card Annual Fee Worth It?",
    description:
      "The breakeven math on annual fee cards. When the fee pays for itself — and when you should stick with no-fee options.",
    category: "Strategy",
    author: "David Chen, CFA",
    readingTime: "5 min read",
    sections: [
      {
        heading: "The Simple Breakeven Test",
        content:
          "<p>An annual fee card is worth it if the total value of its benefits exceeds the fee. Benefits include: rewards earned, signup bonus (year 1), statement credits, lounge access, travel protections, and any other perks you'd actually use.</p><p><strong>Formula:</strong> (Annual rewards earned + Annual credits used + Perks valued) - Annual fee = Net value</p>",
      },
      {
        heading: "Example: Chase Sapphire Preferred ($95/year)",
        content:
          "<p>If you spend $2,000/month on dining and travel:</p><ul><li>Dining: $800/month × 3x points = 28,800 points/year</li><li>Travel: $500/month × 2x points = 12,000 points/year</li><li>Everything else: $700/month × 1x = 8,400 points/year</li><li>Total: 49,200 points × $0.0125 value = ~$615 in travel value</li><li><strong>Net value after $95 fee: $520/year</strong></li></ul>",
      },
      {
        heading: "When to Skip the Annual Fee",
        content:
          "<ul><li><strong>Low spending volume.</strong> If you spend under $1,000/month, a 2% flat-rate no-fee card likely beats a premium card.</li><li><strong>You won't use the perks.</strong> Lounge access is worth $0 if you never fly. Statement credits for specific merchants only count if you'd shop there anyway.</li><li><strong>You carry a balance.</strong> Interest charges will dwarf any rewards earned. Pay off your balance first, then worry about rewards optimization.</li></ul>",
      },
    ],
    faqs: [
      {
        question: "Should I close a card to avoid the annual fee?",
        answer:
          "First, call the issuer and ask for a retention offer. Many will waive or reduce the fee to keep you. If they won't, ask to downgrade to a no-fee version of the card to preserve your credit history.",
      },
      {
        question: "What's the most expensive credit card annual fee?",
        answer:
          "The Amex Centurion (Black Card) has a $5,000 annual fee plus a $10,000 initiation fee. Among widely available cards, the Amex Platinum at $695 is the most expensive.",
      },
    ],
  },
  {
    slug: "credit-card-application-tips",
    title: "How to Get Approved for a Credit Card: 8 Tips That Actually Work",
    description:
      "Increase your approval odds with these straightforward strategies. What issuers look for and how to present a strong application.",
    category: "Credit Basics",
    author: "Rachel Torres, CFP",
    readingTime: "6 min read",
    sections: [
      {
        heading: "What Issuers Actually Look At",
        content:
          "<p>Beyond your credit score, issuers evaluate:</p><ul><li><strong>Income.</strong> Higher income = higher likelihood of approval and larger credit limits.</li><li><strong>Existing relationship.</strong> Having a checking account or other cards with the issuer helps.</li><li><strong>Recent applications.</strong> Too many recent inquiries signals risk.</li><li><strong>Current debt-to-income ratio.</strong> High existing debt relative to income is a red flag.</li></ul>",
      },
      {
        heading: "8 Approval Tips",
        content:
          "<ol><li><strong>Check if you're pre-qualified.</strong> Most issuers offer soft-pull pre-qualification tools on their websites.</li><li><strong>Apply for the right card for your score.</strong> Don't apply for the Amex Platinum with a 650 score.</li><li><strong>Pay down existing balances first.</strong> Lower utilization across all your cards helps.</li><li><strong>Include all income.</strong> You can include household income, part-time work, and investment income.</li><li><strong>Wait 6 months between applications.</strong> Space out your applications.</li><li><strong>Freeze Experian if strategic.</strong> Some issuers only pull one bureau — research which.</li><li><strong>Call reconsideration.</strong> If denied, call the issuer's reconsideration line within 30 days.</li><li><strong>Start with the issuer you bank with.</strong> Existing customers get preferential treatment.</li></ol>",
      },
    ],
    faqs: [
      {
        question: "How many credit cards is too many?",
        answer:
          "There's no universal limit, but having 5+ cards in the last 24 months will trigger Chase's 5/24 rule and may concern other issuers. 2–3 cards is manageable for most people.",
      },
      {
        question: "What should I do if I get denied?",
        answer:
          "Wait for the denial letter (required by law), which explains the reasons. Call the reconsideration line to discuss your application. If the denial stands, address the issues and wait 6 months before reapplying.",
      },
    ],
  },
  {
    slug: "foreign-transaction-fees",
    title: "Foreign Transaction Fees: Which Cards Charge Them and Which Don't",
    description:
      "Don't lose 3% on every international purchase. Here's how foreign transaction fees work and the best no-FTF cards for travelers.",
    category: "Travel",
    author: "David Chen, CFA",
    readingTime: "5 min read",
    sections: [
      {
        heading: "What Are Foreign Transaction Fees?",
        content:
          "<p>A foreign transaction fee (FTF) is a surcharge — typically 3% — added to any purchase made in a foreign currency or processed through a foreign bank. This includes:</p><ul><li>Purchases made abroad (restaurants, hotels, shops).</li><li>Online purchases from non-US merchants (even from home).</li><li>ATM withdrawals in foreign currencies.</li></ul>",
      },
      {
        heading: "Cards That Don't Charge Foreign Transaction Fees",
        content:
          "<p>Most travel-focused and premium cards waive FTFs. Notable no-FTF cards include:</p><ul><li><strong>Chase Sapphire Preferred/Reserve</strong></li><li><strong>Capital One Venture/Venture X/Quicksilver</strong> (Capital One has no FTFs across all consumer cards)</li><li><strong>Amex Gold/Platinum/Green</strong></li><li><strong>Discover</strong> (no FTFs on any card, but limited international acceptance)</li></ul>",
      },
      {
        heading: "Cards That Do Charge Foreign Transaction Fees",
        content:
          "<p>Many cash back and entry-level cards charge FTFs. Always check before traveling:</p><ul><li>Most Wells Fargo cards (except Autograph Journey)</li><li>Most Bank of America cards (except Premium Rewards/Travel Rewards)</li><li>Many Citi cards (except Premier/Prestige)</li></ul>",
      },
    ],
    faqs: [
      {
        question: "Does Visa or Mastercard charge foreign transaction fees?",
        answer:
          "The networks (Visa, Mastercard, Amex) charge a 1% international assessment fee. The remaining 2% is added by the issuing bank. Cards with 'no foreign transaction fee' absorb both charges.",
      },
      {
        question: "Is it better to pay in local currency or USD abroad?",
        answer:
          "Always pay in the local currency. When merchants offer to convert to USD (Dynamic Currency Conversion), they use a worse exchange rate, often adding 3–7% to the cost.",
      },
    ],
  },
  {
    slug: "credit-card-churning",
    title: "Credit Card Churning: What It Is and Whether You Should Do It",
    description:
      "Some people open credit cards just for the signup bonus and move on. Here's how churning works, the risks, and whether it's right for you.",
    category: "Advanced Strategy",
    author: "David Chen, CFA",
    readingTime: "7 min read",
    sections: [
      {
        heading: "What Is Credit Card Churning?",
        content:
          "<p>Churning is the practice of repeatedly opening credit cards to earn signup bonuses, meeting the minimum spend requirement, then either downgrading or closing the card. Experienced churners can earn $5,000–10,000+ in annual travel value.</p>",
      },
      {
        heading: "How Churning Works",
        content:
          "<ol><li>Open a card with a valuable signup bonus (e.g., 60,000 points after $4,000 spend in 3 months).</li><li>Meet the minimum spend through normal spending or pre-paying bills.</li><li>Earn the bonus.</li><li>Either keep the card (if the ongoing rewards justify the fee) or downgrade to a no-fee version.</li><li>Wait 3–6 months, repeat with a different card.</li></ol>",
      },
      {
        heading: "The Risks",
        content:
          "<ul><li><strong>Score impact.</strong> Multiple hard inquiries and new accounts lower your average age of credit.</li><li><strong>Issuer blacklists.</strong> Chase 5/24, Amex once-per-lifetime rules, and other restrictions limit churning potential.</li><li><strong>Overspending temptation.</strong> Meeting minimum spend requirements can lead to buying things you don't need.</li><li><strong>Complexity.</strong> Tracking multiple cards, payment dates, annual fees, and bonus deadlines requires serious organization.</li></ul>",
      },
      {
        heading: "Should You Churn?",
        content:
          "<p>Churning makes sense if you:</p><ul><li>Have excellent credit (740+) and can absorb score fluctuations.</li><li>Are disciplined about spending and paying in full.</li><li>Don't plan to apply for a mortgage or auto loan in the next 12–24 months.</li><li>Enjoy the hobby aspect of tracking and optimizing.</li></ul><p>If any of these don't apply, stick to a simple 2–3 card strategy instead.</p>",
      },
    ],
    faqs: [
      {
        question: "Is credit card churning legal?",
        answer:
          "Yes, churning is completely legal. However, it may violate card issuer terms of service, and issuers can close accounts or claw back bonuses if they suspect gaming behavior.",
      },
      {
        question: "How much can you make from churning?",
        answer:
          "Active churners typically earn $3,000–10,000 per year in travel value or cash back through signup bonuses. The exact amount depends on the cards available and your ability to meet minimum spend requirements.",
      },
    ],
  },
  {
    slug: "credit-utilization-explained",
    title: "Credit Utilization: The Factor That Can Swing Your Score 100+ Points",
    description:
      "Your credit utilization ratio is the second-biggest factor in your score. Learn how to optimize it and when it's reported.",
    category: "Credit Basics",
    author: "Nina Patel, AFC",
    readingTime: "5 min read",
    sections: [
      {
        heading: "What Is Credit Utilization?",
        content:
          "<p>Credit utilization is the percentage of your available credit that you're currently using. If you have a $10,000 credit limit and a $3,000 balance, your utilization is 30%.</p><p>It's calculated both per-card and across all cards (aggregate utilization). Both matter, but aggregate utilization has a larger impact on your score.</p>",
      },
      {
        heading: "The Target Numbers",
        content:
          "<ul><li><strong>Under 30%:</strong> The commonly cited threshold. Going above this starts hurting your score.</li><li><strong>Under 10%:</strong> The sweet spot for the best possible score impact.</li><li><strong>1–3%:</strong> Slightly better than 0%. Having a small balance shows you're actively using credit.</li><li><strong>0%:</strong> Not harmful, but some scoring models prefer to see at least some activity.</li></ul>",
      },
      {
        heading: "When Is Utilization Reported?",
        content:
          "<p>Most issuers report your balance to the credit bureaus on your <strong>statement closing date</strong> — not your due date. This means even if you pay in full every month, a high statement balance will show high utilization.</p><p><strong>The fix:</strong> Pay down your balance a few days before your statement closes. This is especially useful before applying for a new card or loan.</p>",
      },
      {
        heading: "Quick Utilization Hacks",
        content:
          "<ol><li><strong>Request a credit limit increase.</strong> Same balance, higher limit = lower utilization.</li><li><strong>Make multiple payments per month.</strong> Pay mid-cycle to keep the statement balance low.</li><li><strong>Don't close old cards.</strong> They provide available credit that keeps your utilization ratio down.</li><li><strong>Open a new card (strategically).</strong> More total credit = lower aggregate utilization.</li></ol>",
      },
    ],
    faqs: [
      {
        question: "Does utilization have memory?",
        answer:
          "No. Utilization has no history in your credit score — it only reflects your current balances. If your utilization drops from 80% to 5% this month, your score responds immediately. This makes it the fastest lever for score improvement.",
      },
      {
        question: "Should I leave a small balance to build credit?",
        answer:
          "A common myth. You do NOT need to carry a balance or pay interest to build credit. Simply using the card and paying the full statement balance each month builds credit just as effectively — without costing you interest.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
