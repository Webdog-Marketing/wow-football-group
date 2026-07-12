import Link from "next/link";
import TacticsHero from "../components/TacticsHero";
import { DigitalIcon, CommercialIcon, SportingIcon } from "../components/PillarIcons";
import { team } from "../data/team";
import { clubs } from "../data/clubs";

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Multi-club football advisory</span>
            <h1>
              We help ambitious clubs <em>punch above their weight</em>.
            </h1>
            <p className="lede">
              WOW Football Group brings global football expertise — digital, commercial and
              sporting — to clubs with heritage and ambition. You keep your identity. We help
              you compete like a much bigger club.
            </p>
            <div className="hero-actions">
              <Link href="/join-us" className="btn btn-primary">
                Join the network
              </Link>
              <Link href="/become-an-investor" className="btn btn-outline">
                Become an investor
              </Link>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="num">3</span>
                <span className="label">Pillars of support</span>
              </div>
              <div className="hero-stat">
                <span className="num">Global</span>
                <span className="label">Network reach</span>
              </div>
              <div className="hero-stat">
                <span className="num">01</span>
                <span className="label">Shared playbook</span>
              </div>
            </div>
          </div>

          <TacticsHero />
        </div>
      </section>

      {/* ---------- MANIFESTO ---------- */}
      <section className="section" id="manifesto">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Our manifesto</span>
              <h2 style={{ marginTop: "1rem", maxWidth: "18ch" }}>
                Built for the clubs the game underestimates.
              </h2>
            </div>
            <p className="lede">
              WOW Football Group partners with ambitious, community-rooted clubs and brings
              them the operating knowledge of the modern global game — on the pitch and off
              it. Not a takeover. A partnership, built around your club&rsquo;s realistic next
              level, so you can compete like a far bigger organisation without losing what
              makes you yours.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- HOW WE CAN HELP ---------- */}
      <section className="section on-paper-dim" id="how-we-help">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">How we can help</span>
              <h2 style={{ marginTop: "1rem" }}>Three pillars. One plan.</h2>
            </div>
            <p className="lede">
              Every club we work with gets a plan built across all three areas — because
              digital, commercial and sporting progress reinforce each other.
            </p>
          </div>

          <div className="pillar-grid">
            <article className="pillar">
              <DigitalIcon />
              <span className="pillar-tag">Digital transformation</span>
              <h3>Build the foundations top clubs take for granted</h3>
              <p>
                From ticketing to content to fan data, we help clubs put the right digital
                tools in place — so every matchday, sale and supporter interaction works
                harder for the club.
              </p>
            </article>

            <article className="pillar">
              <CommercialIcon />
              <span className="pillar-tag">Commercial growth</span>
              <h3>Open doors a standalone club can&rsquo;t reach alone</h3>
              <p>
                We connect clubs to sponsorship, partnerships and new revenue streams through
                our network of brands, agencies and rights holders across the global game.
              </p>
            </article>

            <article className="pillar">
              <SportingIcon />
              <span className="pillar-tag">Sporting excellence</span>
              <h3>Sharpen what happens on the grass</h3>
              <p>
                Scouting, recruitment, coaching pathways and performance analysis — proven
                methods from federations and clubs worldwide, applied to your squad.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- WHY JOIN US ---------- */}
      <section className="section on-dark pitch-texture" id="why-join-us">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Why join us</span>
              <h2 style={{ marginTop: "1rem" }}>Your heritage. Our network.</h2>
            </div>
            <p className="lede">
              By joining WOW Football Group, your club gains a partner, not a parent company.
            </p>
          </div>

          <div className="reasons-list">
            <div className="reason-row">
              <span className="tag">Retain</span>
              <h3>Keep your identity — your name, colours, history and ownership stay yours.</h3>
            </div>
            <div className="reason-row">
              <span className="tag">Access</span>
              <h3>
                Gain hands-on expertise from federations, agencies and clubs across the
                global game.
              </h3>
            </div>
            <div className="reason-row">
              <span className="tag">Connect</span>
              <h3>Join a network of partner clubs sharing knowledge and opportunities.</h3>
            </div>
            <div className="reason-row">
              <span className="tag">Progress</span>
              <h3>
                Get a plan built around your club&rsquo;s realistic next level — not a generic
                playbook.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- OUR CLUBS ---------- */}
      <section className="section" id="our-clubs">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Our clubs</span>
              <h2 style={{ marginTop: "1rem" }}>Our partner clubs</h2>
            </div>
            <p className="lede">
              We&rsquo;re building our network of partner clubs. Details of each partnership
              will appear here as they&rsquo;re confirmed.
            </p>
          </div>

          <div className="club-grid">
            {clubs.map((club) => (
              <div className="club-card" key={club.name}>
                <div className="club-badge">
                  {club.crestUrl ? (
                    <img src={club.crestUrl} alt={`${club.name} crest`} />
                  ) : (
                    <span>{club.placeholder ? "?" : club.name.slice(0, 2).toUpperCase()}</span>
                  )}
                </div>
                <h3>{club.name}</h3>
                <span className="club-meta">
                  {club.location} · {club.tier}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- OUR TEAM ---------- */}
      <section className="section on-dark" id="our-team">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Our team</span>
              <h2 style={{ marginTop: "1rem" }}>Our team</h2>
            </div>
            <p className="lede">
              Combined expertise across football operations, commercial development and
              global federation building.
            </p>
          </div>

          <div className="team-grid">
            {team.map((person) => (
              <div className="team-card" key={person.name}>
                <div className="team-avatar">{person.initials}</div>
                <div>
                  <h3>{person.name}</h3>
                  <span className="team-role">{person.role}</span>
                </div>
                <a
                  className="team-linkedin"
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon /> LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="cta-band">
        <div className="container">
          <h2>Your club deserves WOW Football Group.</h2>
          <div className="actions">
            <Link href="/join-us" className="btn btn-outline">
              Join the network
            </Link>
            <Link href="/become-an-investor" className="btn btn-outline">
              Become an investor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M4.98 3.5C4.98 4.88 3.89 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8.5 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8 21.5 10.35 21.5 13.7V23h-4v-8.4c0-2-.04-4.57-2.78-4.57-2.79 0-3.22 2.18-3.22 4.43V23h-4V8z"
        fill="currentColor"
      />
    </svg>
  );
}
