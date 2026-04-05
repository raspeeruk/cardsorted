export interface Category {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  popularCards: string[];
}

export const categories: Category[] = [
  {
    slug: "cash-back",
    name: "Cash Back",
    description:
      "Earn a percentage of every purchase back as cash rewards. The simplest way to save money on everyday spending.",
    longDescription:
      "Cash back credit cards return a percentage of your spending as statement credits, direct deposits, or checks. Unlike points or miles, cash back has a clear, fixed value — no transfer partners or redemption charts to decode. The best cash back cards offer flat-rate earnings on all purchases or bonus rates in rotating or fixed categories like groceries, gas, and dining. Many come with no annual fee, making them a straightforward win for anyone who pays their balance in full each month.",
    icon: "💵",
    metaTitle: "Best Cash Back Credit Cards April 2026 | CardSorted",
    metaDescription:
      "Compare the top cash back credit cards for 2026. Earn up to 5% back on everyday purchases with no annual fee options available.",
    popularCards: [
      "chase-freedom-unlimited",
      "citi-double-cash",
      "discover-it-cash-back",
      "wells-fargo-active-cash",
      "capital-one-quicksilver",
    ],
  },
  {
    slug: "travel",
    name: "Travel",
    description:
      "Earn points and miles on every purchase to fund flights, hotels, and experiences. Built for frequent travelers and trip planners alike.",
    longDescription:
      "Travel credit cards reward your spending with points or miles redeemable for flights, hotel stays, car rentals, and more. Premium travel cards include perks like airport lounge access, Global Entry credits, and trip delay insurance that can offset annual fees many times over. Transfer partners let you move points to airline and hotel loyalty programs at outsized value. Whether you fly twice a year or twice a month, the right travel card turns routine spending into your next trip.",
    icon: "✈️",
    metaTitle: "Best Travel Credit Cards April 2026 | CardSorted",
    metaDescription:
      "Find the best travel credit cards of 2026. Earn points, miles, and perks like lounge access and travel insurance.",
    popularCards: [
      "chase-sapphire-preferred",
      "capital-one-venture-x",
      "amex-platinum",
      "chase-sapphire-reserve",
    ],
  },
  {
    slug: "no-annual-fee",
    name: "No Annual Fee",
    description:
      "Strong rewards and useful perks without paying a yearly fee. Keep more of what you earn.",
    longDescription:
      "No annual fee credit cards deliver genuine value without the recurring cost that eats into your rewards. The best options in this category still offer competitive cash back rates, sign-up bonuses, and benefits like purchase protection and extended warranties. They suit people who want a simple, low-maintenance card that earns rewards on autopilot. For many cardholders, a well-chosen no-fee card outperforms premium cards once you subtract the annual fee from the equation.",
    icon: "🆓",
    metaTitle: "Best No Annual Fee Credit Cards April 2026 | CardSorted",
    metaDescription:
      "Top no annual fee credit cards ranked for 2026. Earn rewards and cash back without paying a yearly fee.",
    popularCards: [
      "chase-freedom-unlimited",
      "discover-it-cash-back",
      "capital-one-quicksilver",
      "citi-double-cash",
      "wells-fargo-active-cash",
    ],
  },
  {
    slug: "balance-transfer",
    name: "Balance Transfer",
    description:
      "Move existing debt to a card with 0% intro APR and pay it down faster. Cut interest costs and simplify payments.",
    longDescription:
      "Balance transfer credit cards offer an introductory 0% APR period — typically 15 to 21 months — so every dollar you pay goes toward principal, not interest. Moving a high-interest balance to one of these cards can save hundreds or even thousands in finance charges. Most charge a one-time transfer fee of 3-5%, which is still far cheaper than months of double-digit interest. The key is having a payoff plan that clears the balance before the promotional period ends and the regular APR kicks in.",
    icon: "🔄",
    metaTitle: "Best Balance Transfer Credit Cards April 2026 | CardSorted",
    metaDescription:
      "Compare balance transfer cards with 0% intro APR for up to 21 months. Pay down debt faster and save on interest.",
    popularCards: [
      "citi-diamond-preferred",
      "wells-fargo-reflect",
      "discover-it-cash-back",
      "chase-freedom-unlimited",
    ],
  },
  {
    slug: "rewards",
    name: "Rewards",
    description:
      "Maximize the value of every dollar spent with flexible points programs. Redeem for travel, cash, gift cards, or statement credits.",
    longDescription:
      "Rewards credit cards earn points on your spending that can be redeemed across multiple categories — travel, cash back, gift cards, merchandise, and more. The most valuable rewards cards use transferable points currencies like Chase Ultimate Rewards, Amex Membership Rewards, or Capital One Miles, giving you flexibility to get outsized value through airline and hotel transfer partners. Bonus multipliers on dining, travel, groceries, and streaming stack up quickly for cardholders who route their spending strategically.",
    icon: "🏆",
    metaTitle: "Best Rewards Credit Cards April 2026 | CardSorted",
    metaDescription:
      "Find the best rewards credit cards of 2026. Earn flexible points on every purchase with top sign-up bonuses.",
    popularCards: [
      "amex-gold",
      "chase-sapphire-preferred",
      "capital-one-venture",
      "citi-premier",
    ],
  },
  {
    slug: "gas",
    name: "Gas",
    description:
      "Earn elevated rewards at the pump with cards that offer 3-5% back on fuel purchases. Save on every fill-up.",
    longDescription:
      "Gas credit cards offer boosted earnings at gas stations, typically 3% to 5% back per dollar spent on fuel. Some cards make gas a permanent bonus category, while others rotate it in on a quarterly basis. With fuel prices volatile and commuters spending $2,000-$4,000 a year at the pump, the right gas card can return $60 to $200 annually on fuel alone. Many of these cards also earn well on other everyday categories, making them strong all-around options for drivers.",
    icon: "⛽",
    metaTitle: "Best Gas Credit Cards April 2026 | CardSorted",
    metaDescription:
      "Top gas credit cards that earn 3-5% back at the pump. Compare the best cards for fuel savings in 2026.",
    popularCards: [
      "citi-custom-cash",
      "amex-blue-cash-preferred",
      "wells-fargo-autograph",
      "chase-freedom-flex",
    ],
  },
  {
    slug: "groceries",
    name: "Groceries",
    description:
      "Earn 3-6% back at supermarkets with cards built for grocery shoppers. Turn your weekly shop into real rewards.",
    longDescription:
      "Grocery credit cards reward one of your largest recurring expenses with elevated earning rates of 3% to 6% at U.S. supermarkets. The average American household spends over $5,000 a year on groceries, so a card earning 6% in this category can return $300 or more annually. Some cards include grocery earnings as a permanent benefit, while others cap it at a spending threshold. Pairing a strong grocery card with a separate everyday card is one of the most effective two-card wallet strategies.",
    icon: "🛒",
    metaTitle: "Best Grocery Credit Cards April 2026 | CardSorted",
    metaDescription:
      "Compare the best credit cards for groceries in 2026. Earn up to 6% back at supermarkets on your weekly shop.",
    popularCards: [
      "amex-blue-cash-preferred",
      "amex-gold",
      "capital-one-savor-one",
      "chase-freedom-flex",
    ],
  },
  {
    slug: "dining",
    name: "Dining",
    description:
      "Earn 3-4x points or 3-4% cash back at restaurants, takeout, and food delivery. Rewards that keep up with your appetite.",
    longDescription:
      "Dining credit cards boost your earnings at restaurants, cafes, bars, and food delivery services. Top options earn 3x to 4x points or 3-4% cash back on dining purchases, turning meals out and takeout orders into meaningful rewards. Many dining-focused cards also perform well in adjacent categories like groceries and streaming, making them excellent primary cards for food-oriented spenders. With Americans spending an average of $3,500 a year on dining out, the right card in this category more than justifies itself.",
    icon: "🍽️",
    metaTitle: "Best Dining Credit Cards April 2026 | CardSorted",
    metaDescription:
      "Best credit cards for dining and restaurants in 2026. Earn up to 4x points on meals out, takeout, and delivery.",
    popularCards: [
      "amex-gold",
      "capital-one-savor-one",
      "chase-sapphire-preferred",
      "wells-fargo-autograph",
    ],
  },
  {
    slug: "hotel",
    name: "Hotel",
    description:
      "Earn free nights, elite status, and hotel loyalty points faster. Ideal for travelers with a preferred hotel chain.",
    longDescription:
      "Hotel credit cards accelerate your path to free nights and elite status within major loyalty programs like Marriott Bonvoy, Hilton Honors, IHG One Rewards, and World of Hyatt. Co-branded hotel cards earn bonus points on stays at their chain and often on everyday categories like dining and gas. Elite status perks — room upgrades, late checkout, free breakfast — can add hundreds of dollars in value per trip. An annual free night certificate alone can offset the card's fee, making these cards a strong pick for anyone with 5+ hotel stays a year.",
    icon: "🏨",
    metaTitle: "Best Hotel Credit Cards April 2026 | CardSorted",
    metaDescription:
      "Compare the top hotel credit cards for 2026. Earn free nights, elite status, and bonus points at Marriott, Hilton, and more.",
    popularCards: [
      "chase-marriott-bonvoy-boundless",
      "chase-ihg-one-rewards-premier",
      "amex-hilton-honors-aspire",
      "amex-hilton-honors-surpass",
    ],
  },
  {
    slug: "airline",
    name: "Airline",
    description:
      "Earn miles faster, get free checked bags, and unlock priority boarding with your preferred airline's co-branded card.",
    longDescription:
      "Airline credit cards are co-branded with carriers like Delta, United, Southwest, American, and Alaska, earning miles in that airline's loyalty program on every purchase. The most immediate value comes from perks like free checked bags, priority boarding, and in-flight discounts — benefits that pay for the annual fee after just a few flights. Bonus miles on airline purchases and everyday spending categories add up fast, and sign-up bonuses often cover a round-trip domestic flight. These cards work best for travelers loyal to a single airline or alliance.",
    icon: "🛫",
    metaTitle: "Best Airline Credit Cards April 2026 | CardSorted",
    metaDescription:
      "Best airline credit cards of 2026. Earn miles, get free checked bags, and enjoy priority boarding on every flight.",
    popularCards: [
      "amex-delta-skymiles-gold",
      "chase-united-explorer",
      "chase-southwest-priority",
      "boa-alaska-airlines",
    ],
  },
  {
    slug: "student",
    name: "Student",
    description:
      "Build credit history while earning rewards on everyday spending. Designed for college students with limited or no credit history.",
    longDescription:
      "Student credit cards are specifically designed for college students and young adults who are building credit for the first time. These cards have more lenient approval requirements and typically come with no annual fee, making them accessible entry points into the credit system. Many student cards still earn competitive cash back on purchases and offer educational tools to help track spending and monitor credit score changes. Starting with a student card and using it responsibly builds the credit history you need for better cards, auto loans, and apartment rentals after graduation.",
    icon: "🎓",
    metaTitle: "Best Student Credit Cards April 2026 | CardSorted",
    metaDescription:
      "Top student credit cards for 2026. Build credit and earn rewards with cards designed for college students.",
    popularCards: [
      "discover-it-student-cash-back",
      "capital-one-quicksilver-student",
      "chase-freedom-rise",
      "boa-customized-cash-students",
    ],
  },
  {
    slug: "secured",
    name: "Secured",
    description:
      "Rebuild or establish credit with a refundable security deposit. A stepping stone to unsecured cards and better rates.",
    longDescription:
      "Secured credit cards require a refundable security deposit that typically sets your credit limit, reducing the issuer's risk and making approval possible even with poor or no credit history. They report to all three major credit bureaus, so consistent on-time payments build your credit score over time. The best secured cards now offer cash back rewards and automatic graduation to unsecured cards once you demonstrate responsible usage. Think of a secured card as a short-term tool — most cardholders graduate to a better card within 6 to 12 months of responsible use.",
    icon: "🔒",
    metaTitle: "Best Secured Credit Cards April 2026 | CardSorted",
    metaDescription:
      "Compare the best secured credit cards for 2026. Rebuild credit with a refundable deposit and earn rewards.",
    popularCards: [
      "discover-it-secured",
      "capital-one-platinum-secured",
      "boa-customized-cash-students",
    ],
  },
  {
    slug: "business",
    name: "Business",
    description:
      "Earn rewards on business expenses, access higher credit limits, and keep personal and business spending separate.",
    longDescription:
      "Business credit cards help entrepreneurs, freelancers, and small business owners earn rewards on the expenses they already have — advertising, shipping, office supplies, internet, and travel. Many business cards offer higher credit limits and sign-up bonuses than consumer cards, plus features like employee cards with spending controls, detailed expense reports, and integration with accounting software. Business card activity typically does not appear on your personal credit report, keeping your utilization ratio clean. From sole proprietors to growing teams, the right business card turns operational costs into travel and cash rewards.",
    icon: "💼",
    metaTitle: "Best Business Credit Cards April 2026 | CardSorted",
    metaDescription:
      "Best business credit cards for 2026. Earn rewards on expenses, access high limits, and separate business spending.",
    popularCards: [
      "chase-ink-business-preferred",
      "chase-ink-business-cash",
      "capital-one-spark-cash-plus",
      "chase-ink-business-unlimited",
    ],
  },
  {
    slug: "premium",
    name: "Premium",
    description:
      "Luxury perks, airport lounge access, concierge services, and the highest earning rates. For heavy spenders who maximize every benefit.",
    longDescription:
      "Premium credit cards charge annual fees of $400 to $700 but deliver a suite of benefits that can return multiples of that cost. Airport lounge access through Priority Pass, Centurion Lounges, or Capital One Lounges saves money and upgrades the travel experience. Statement credits for airline incidentals, hotel bookings, dining, and services like Clear or Global Entry offset the fee further. These cards earn at the highest rates in travel and dining categories, and their travel insurance, purchase protection, and concierge services provide a safety net that cheaper cards simply do not. The math works best for travelers spending $30,000 or more annually.",
    icon: "👑",
    metaTitle: "Best Premium Credit Cards April 2026 | CardSorted",
    metaDescription:
      "Compare premium credit cards with lounge access, concierge, and top-tier rewards. Worth the annual fee in 2026?",
    popularCards: [
      "amex-platinum",
      "chase-sapphire-reserve",
      "capital-one-venture-x",
      "us-bank-altitude-reserve",
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategories(): Category[] {
  return categories;
}
