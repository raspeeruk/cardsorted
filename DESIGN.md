# CardSorted — Design Brief

## Aesthetic Direction

**Plastic Quarterly** — a literary financial quarterly that treats credit cards as editorial subjects and the *numbers* as monumental typography. Magazine-grade asymmetric layout, oversized chiseled numerals, paper-grain texture, hairline editorial rules. Not Bloomberg. Not NerdWallet. A printed quarterly that cared too much about the dollars to set them small.

## Target Audience

US adults choosing their next credit card. They've already seen NerdWallet and Bankrate. They're tired of pastel buttons, friendly stock photos, and "Get Started" CTAs. They want authority — and they're old enough to remember when financial publications looked like books.

## Typography

| Role | Font | Weights | Why |
|------|------|---------|-----|
| Display / Heading | **Boldonse** | 400 | Brand-new Google serif. Chunky condensed cuts that read like a 1970s annual-report cover. Unmistakable. |
| Body | **STIX Two Text** | 400 / 500 / 600 | Scholarly journal serif with old-style figures. Book-grade legibility. |
| Mono / Data | **Reddit Mono** | 400 / 500 / 700 | Modern proportional-feeling monospace. Sharp counters. Avoids the IBM Plex / JetBrains cliché. |

**Scale**: Body 17px → H2 36px → H1 64–96px → MONUMENTAL numerals 120–280px. The score selector renders the digits at 120px+ on desktop. The card APRs on review pages can hit 200px.

**Old-style figures** are enabled on body copy via `font-feature-settings: "onum"` so numbers descend below the baseline like proper book typography. Tabular figures (`tnum`) are forced inside data tables.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `surface` | `#F4ECE0` | Page background — warm aged paper, never pure cream |
| `surface-deep` | `#EADFCB` | Section dividers, sunken panels |
| `surface-card` | `#FBF6EC` | Elevated cards, raised paper |
| `ink` | `#1A1411` | Primary text — almost-black warm coffee, never pure black |
| `ink-mid` | `#5A4E3F` | Secondary text |
| `ink-fade` | `#9A8F7E` | Tertiary, captions, mono labels |
| `rule` | `#D6C9B2` | Hairline rules, borders |
| `accent` | `#F26B1D` | Tangerine accent — used for one word per heading and Apply CTAs |
| `accent-deep` | `#A8390A` | Hover states, ink-deep accent |
| `oxblood` | `#5C1A1A` | Editorial flourish — pull-quote rules, "Verdict" labels |

**Banned**: pure white `#FFF`, pure black `#000`, dot grids, shadow blurs > 8px, Tailwind `gray-` colors.

## Layout Rules

- **Hero**: Asymmetric editorial split. Left = oversized 4-line H1 set ragged-right with one word in tangerine, masthead label above. Right = the score selector framed as "ENTER YOUR DIGIT" with five massive Boldonse numerals (580 / 650 / 700 / 720 / 750+).
- **Category section**: Magazine grid — one featured 2:1 lead category card on top, then 6 smaller cards below in an asymmetric 3+3 arrangement. No equal 4-col grids.
- **Top picks**: Numbered editorial list 01–05. Each row = giant rank numeral (Boldonse, 96px) on the left, card details in the middle, mono APR strip on the right, single hairline rule between rows. Like a Pitchfork annual top 50 spread.
- **"How it works" section**: REMOVED. Replaced with a *Letter from the Editors* — a serif essay signed by the three personas (CFP, CFA, AFC). Magazine editor's note pattern.
- **Card review pages**: Magazine feature layout. Editorial dateline label → masthead title → giant APR numeral feature → editorial body. Sidebar uses "FACTSHEET" newsroom panel.
- **Spacing**: Generous. 96px section padding minimum on desktop. Section dividers are hairline `1px` rules, not blocks of color.
- **Texture**: Subtle warm paper grain via inline SVG noise on body background and sunken panels.

## Component Patterns

- **MonumentalNumber**: Reusable display for any number (score, APR, rank, fee). Renders in Boldonse at 96–280px depending on context.
- **EditorialRule**: Horizontal hairline `rule` color, full container width, 1px height. Replaces cards-with-borders pattern.
- **MastheadLabel**: Reddit Mono uppercase at 11px tracked +0.18em. Sits above section H2s. Acts as the "kicker" in magazine terms.
- **FAQ**: No accordion borders. Each Q uses oxblood serif H3, A in body serif. Hairline rule between, generous vertical rhythm.
- **AffiliateDisclosure**: Sunken `surface-deep` panel with oxblood "Disclosure" masthead label. Looks like a printed footnote.

## Banned Patterns

- Center-aligned hero with two CTAs
- Equal-width 4-column card grids
- Standard "How it works" 1-2-3 step blocks
- "Get Started" / "Learn More" generic buttons
- Generic Tailwind gray (`gray-50`, `gray-200`) — must use custom `surface` / `rule` / `ink` tokens
- Card components with `border` + `shadow-md` + `hover:shadow-lg`
- Dot grids (overused fintech pattern)
- Purple gradients (everywhere already)

## Reference Mood

- *Monocle* magazine spreads (asymmetry, masthead labels, editorial restraint)
- *The New York Times Magazine* covers when they go all-type
- 1970s annual reports (Massimo Vignelli's IBM era — chunky type, hairlines)
- *Apartamento* magazine editorial pages (paper, restraint, scholarly serifs)

## Unique Hook

**The Score Foundry hero.** The five credit score buttons aren't buttons — they're typographic monuments. Each digit is set at 96–140px in Boldonse, positioned in an asymmetric vertical stack on the right of the hero. Hovering enlarges and dims the others. The rest of the homepage feels like it grew out of those numerals.

If someone screenshots one of our card review pages, they'll see a 200px Boldonse APR numeral as the visual centerpiece — and they'll know instantly which site this is.
