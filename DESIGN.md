# CardSorted — Design Brief

## Aesthetic: Financial Wire

Think Bloomberg terminal meets premium editorial publication. Data-dense, authoritative, warm. Not another pastel fintech clone.

## Typography

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Heading | Bricolage Grotesque | 700–800 | H1–H6, nav, CTAs |
| Body | Newsreader | 400–500 | Paragraphs, descriptions |
| Data/Mono | IBM Plex Mono | 400–600 | APRs, credit scores, fees, rewards rates |

**Size jumps**: Body 16px → H2 28px → H1 48–60px (3x+). Weight contrast: body 400, headings 800.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| brand (tangerine) | `#f97316` | CTAs, accent links, highlights — 10% |
| brand-dark | `#ea580c` | Hover states |
| brand-light | `#fff7ed` | Bonus callout backgrounds |
| surface (warm bone) | `#faf5ef` | Page background — 60% |
| surface-dark | `#f0ebe3` | Card backgrounds, section dividers |
| ink (charcoal stone) | `#292524` | Primary text — 30% |
| ink-light | `#57534e` | Secondary text, descriptions |
| ink-lighter | `#a8a29e` | Tertiary text, captions |
| ink-faint | `#d6d3d1` | Borders, rules |

**No pure white or black.** Warm bone background, charcoal stone text.

## Layout Patterns

- **Hero**: Dot-grid texture background, centered heading with mono data badge, credit score quick-select chips
- **Card listings**: Full-width bordered cards (not equal-width grids), rank numbers in mono, stats in data font
- **Comparison tables**: Alternating row backgrounds (surface/white), bold feature headers, dual CTA row
- **Category grid**: 4-col on desktop, icon-led cards with hover border shift
- **Footer**: Dark ink background, 4-column links, disclosure text

## Component Patterns

- **CardTable row**: Left-aligned card info with stats strip (fee, APR, rewards, score), right-aligned CTA button
- **Score filter bar**: Horizontal chip row with mono numbers, active state = brand fill
- **Affiliate disclosure**: Surface-dark box with heading text, always below card listings
- **Breadcrumbs**: Slash-separated, last item non-linked
- **FAQ accordion**: Bordered cards with chevron toggle

## Differentiation

This design is distinct from all 24 existing portfolio sites:
- **Not** the dark fintech look (Texas Loan, Quidzu)
- **Not** the Swiss modernist look (AI Course London)
- **Not** the brutalist look (AuditBrief)
- **Not** editorial magazine (Zero to AI)
- **Unique**: Warm tones + tangerine accent + editorial serif body + geometric sans headings + mono data font

## Screenshot Test

Side-by-side with any other portfolio site, CardSorted reads as a financial data publication — warm, authoritative, data-dense — not a tech startup or design agency.
