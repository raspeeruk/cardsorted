import Link from "next/link";

const enquiryHref =
  "mailto:hq@rogergroup.xyz?subject=CardSorted.com%20acquisition%20enquiry";

export default function HomePage() {
  return (
    <main>
      <div className="shell">
        <header className="masthead">
          <Link className="wordmark" href="/" aria-label="CardSorted.com home">
            Card<span>Sorted</span><b>.</b>
          </Link>
          <p className="availability"><i />Available for acquisition</p>
        </header>

        <section className="hero" aria-labelledby="page-title">
          <div className="hero-copy">
            <p className="eyebrow">A category-defining name for what comes next</p>
            <h1 id="page-title">
              Put every card<br />
              <em>in its place.</em>
            </h1>
            <p className="lead">
              CardSorted.com is a crisp, memorable .com for a card-comparison
              product, rewards optimiser, wallet app or consumer-finance brand.
            </p>
            <a className="cta" href={enquiryHref}>
              Discuss the domain <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="card-stack" aria-hidden="true">
            <div className="card card-back"><span>CS</span></div>
            <div className="card card-mid"><span>•••• 2046</span></div>
            <div className="card card-front">
              <div className="chip" />
              <p>CARD<span>SORTED</span></p>
              <small>THE RIGHT NAME, IN HAND</small>
            </div>
          </div>
        </section>

        <section className="ledger" aria-label="Acquisition details">
          <article>
            <p className="number">01</p>
            <h2>The name</h2>
            <p>
              Two familiar words make the proposition instantly legible. The
              domain is registered until 6 April 2027; auto-renewal is off.
            </p>
          </article>
          <article>
            <p className="number">02</p>
            <h2>The scope</h2>
            <p>
              Enquiries are invited for CardSorted.com. Source code would be
              considered only under a separate agreement and technical review.
            </p>
          </article>
          <article>
            <p className="number">03</p>
            <h2>The boundary</h2>
            <p>
              No subscriber, contact, analytics or other personal data is
              included. Only assets expressly named in a signed agreement transfer.
            </p>
          </article>
        </section>

        <footer>
          <p>Former comparison product retired · 28 August 2026</p>
          <a href={enquiryHref}>hq@rogergroup.xyz</a>
        </footer>
      </div>
    </main>
  );
}
