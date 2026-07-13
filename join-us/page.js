import NetworkingForm from "../../components/NetworkingForm";

export const metadata = {
  title: "Join the Network | WOW Football Group",
  description:
    "Join WOW Football Group's WhatsApp football networking group and connect with our multi-club advisory network.",
};

export default function JoinUsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Join us</span>
          <h1 style={{ marginTop: "1rem" }}>Join our football networking group.</h1>
          <p className="lede">
            We&rsquo;re building a WhatsApp group connecting people working across global
            football — club officials, federation staff, agents and operators. Tell us a
            little about yourself and we&rsquo;ll send an invite.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="form-layout">
            <div>
              <h2 style={{ maxWidth: "18ch" }}>What to expect</h2>
              <ul className="info-list">
                <li>Direct access to club officials and operators across the global game.</li>
                <li>Early word on opportunities within our partner club network.</li>
                <li>A focused group — no spam, no noise, just football people talking football.</li>
              </ul>
              <p className="form-note" style={{ marginTop: "2rem" }}>
                Prefer to email directly? Reach us at{" "}
                <a href="mailto:contact@wowfootball.group">contact@wowfootball.group</a>.
              </p>
            </div>

            <NetworkingForm />
          </div>
        </div>
      </section>
    </>
  );
}
