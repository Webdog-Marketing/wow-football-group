import InvestorForm from "../../components/InvestorForm";

export const metadata = {
  title: "Become an Investor | WOW Football Group",
  description:
    "Invest in WOW Football Group's multi-club advisory network and help ambitious clubs punch above their weight.",
};

export default function BecomeInvestorPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Become an investor</span>
          <h1 style={{ marginTop: "1rem" }}>Back the network behind the network.</h1>
          <p className="lede">
            We&rsquo;re building the advisory group that helps ambitious clubs compete on a
            bigger stage. If you want to be part of that, we&rsquo;d like to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="form-layout">
            <div>
              <h2 style={{ maxWidth: "16ch" }}>Why invest with WOW Football Group</h2>
              <ul className="info-list">
                <li>A team with direct experience across federation building, kit supply and club operations.</li>
                <li>A model built on genuine club partnerships, not one-off transactions.</li>
                <li>Early access to a growing network of partner clubs across multiple markets.</li>
                <li>Straightforward, direct communication — every enquiry gets a personal response.</li>
              </ul>
              <p className="form-note" style={{ marginTop: "2rem" }}>
                Prefer to email directly? Reach us at{" "}
                <a href="mailto:team@wowfootball.group">team@wowfootball.group</a>.
              </p>
            </div>

            <InvestorForm />
          </div>
        </div>
      </section>
    </>
  );
}
