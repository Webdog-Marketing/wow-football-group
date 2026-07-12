export const metadata = {
  title: "Cookie Policy | WOW Football Group",
  description: "How WOW Football Group uses cookies on wowfootball.group.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1 style={{ marginTop: "1rem" }}>Cookie Policy</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <p className="legal-updated">
              Last updated: [add date]. Update this page once you confirm exactly which
              cookies or analytics tools you&rsquo;re using — this is a starting template, not
              legal advice.
            </p>

            <h2>What are cookies</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website.
              They&rsquo;re widely used to make websites work, work more efficiently, and to
              provide reporting information.
            </p>

            <h2>How we use cookies</h2>
            <p>wowfootball.group currently uses cookies for the following purposes:</p>
            <ul>
              <li>
                <strong>Essential cookies</strong> — required for the website to function
                correctly (for example, remembering your cookie preferences).
              </li>
              <li>
                <strong>Analytics cookies</strong> — help us understand how visitors use our
                site, so we can improve it. [Update once an analytics tool, e.g. Vercel
                Analytics or Google Analytics, is confirmed.]
              </li>
            </ul>

            <h2>Managing cookies</h2>
            <p>
              Most web browsers let you control cookies through their settings. You can
              usually find these settings in the &ldquo;options&rdquo; or
              &ldquo;preferences&rdquo; menu of your browser. Blocking some types of cookies
              may affect your experience of the site.
            </p>

            <h2>Third-party cookies</h2>
            <p>
              We may use third-party services (such as analytics providers) that set their
              own cookies. We don&rsquo;t control these cookies — please refer to the
              relevant third party&rsquo;s own cookie policy for more information.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy as our use of cookies changes. The &ldquo;last
              updated&rdquo; date at the top of this page reflects the most recent changes.
            </p>

            <h2>Contact us</h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a href="mailto:contact@wowfootball.group">contact@wowfootball.group</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
