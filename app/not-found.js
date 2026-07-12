import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 style={{ marginTop: "1rem" }}>Offside.</h1>
        <p className="lede">That page doesn&rsquo;t exist. Let&rsquo;s get you back onside.</p>
        <div className="hero-actions">
          <Link href="/" className="btn btn-primary">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
