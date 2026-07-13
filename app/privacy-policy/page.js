export const metadata = {
  title: "Privacy Policy | WOW Football Group",
  description: "How WOW Football Group collects, uses and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1 style={{ marginTop: "1rem" }}>Privacy Policy</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <p className="legal-updated">
              Last updated: [add date]. Replace the placeholder sections below with reviewed,
              accurate details before publishing — this is a starting template, not legal
              advice.
            </p>

            <h2>Who we are</h2>
            <p>
              WOW Football Group (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a
              multi-club football advisory group. This policy explains how we collect, use
              and protect personal data when you visit wowfootball.group or contact us
              directly. If you have any questions, email{" "}
              <a href="mailto:contact@wowfootball.group">contact@wowfootball.group</a>.
            </p>

            <h2>Information we collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li>Contact details you submit through our investor enquiry form (name, email, phone, organisation, message).</li>
              <li>Contact details you submit through our networking group signup form (name, email, club/organisation, role, WhatsApp number).</li>
              <li>Any information you send us by email.</li>
              <li>Basic technical data collected automatically when you browse our site (see our Cookie Policy).</li>
            </ul>

            <h2>How we use your information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to enquiries submitted through our forms or by email.</li>
              <li>Add you to our WhatsApp football networking group, if you&rsquo;ve requested this.</li>
              <li>Evaluate and follow up on investment enquiries.</li>
              <li>Maintain and improve our website.</li>
              <li>Comply with our legal obligations.</li>
            </ul>

            <h2>Legal basis for processing</h2>
            <p>
              Where UK/EU data protection law applies, we rely on your consent (for example,
              when you submit a form) and our legitimate interests in responding to enquiries
              and operating our business.
            </p>

            <h2>Where your data is stored</h2>
            <p>
              Form submissions are stored in Airtable, our database provider, and may be
              accessed by WOW Football Group team members to respond to your enquiry. We do
              not sell your personal data.
            </p>

            <h2>How long we keep your data</h2>
            <p>
              We keep enquiry and networking group data for as long as reasonably necessary to
              respond to you and maintain our records, after which it is deleted or
              anonymised.
            </p>

            <h2>Your rights</h2>
            <p>
              Depending on where you live, you may have the right to access, correct, delete
              or object to our use of your personal data. To exercise these rights, email{" "}
              <a href="mailto:contact@wowfootball.group">contact@wowfootball.group</a>.
            </p>

            <h2>Third parties</h2>
            <p>
              We use third-party service providers — including Airtable (data storage),
              Vercel (website hosting), Google Tag Manager (tag and analytics management)
              and email delivery providers — to operate our website and respond to
              enquiries. These providers process data on our behalf under their own privacy
              and security terms. See our <a href="/cookie-policy">Cookie Policy</a> for more
              on how Google Tag Manager is used.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The &ldquo;last updated&rdquo; date
              at the top of this page will reflect the most recent changes.
            </p>

            <h2>Contact us</h2>
            <p>
              If you have questions about this policy, email{" "}
              <a href="mailto:contact@wowfootball.group">contact@wowfootball.group</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
