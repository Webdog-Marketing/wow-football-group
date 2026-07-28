import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/logo/wow-lockup.png"
              alt="WOW Football Group"
              className="footer-logo-img"
              width={1400}
              height={643}
            />
            <p style={{ maxWidth: "34ch", fontSize: "0.92rem", marginTop: "1.25rem" }}>
              A multi-club football advisory group. Global expertise, local heritage —
              helping ambitious clubs punch above their weight.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><Link href="/#how-we-help">How we help</Link></li>
              <li><Link href="/#why-join-us">Why join us</Link></li>
              <li><Link href="/#our-clubs">Our clubs</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/become-an-investor">Become an investor</Link></li>
              <li><Link href="/join-us">Join the network</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get in touch</h4>
            <ul>
              <li><a href="mailto:team@wowfootball.group">team@wowfootball.group</a></li>
            </ul>
            <div className="social-row" style={{ marginTop: "1.25rem" }}>
              <a
                className="social-icon"
                href="https://www.linkedin.com/company/wow-football-group/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow WOW Football Group on LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                className="social-icon"
                href="https://x.com/WOWFootballGrp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow WOW Football Group on X"
              >
                <XIcon />
              </a>
              <a
                className="social-icon"
                href="https://www.instagram.com/WOWFootballGroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow WOW Football Group on Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                className="social-icon"
                href="https://www.tiktok.com/@wow.football7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow WOW Football Group on TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} WOW Football Group. All rights reserved.</span>
          <div className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
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

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24H16.1l-5.44-7.12-6.23 7.12H1.11l7.73-8.84L.7 2.25h6.9l4.92 6.51 5.72-6.51Zm-1.16 17.52h1.83L7.02 4.13H5.06l12.02 15.64Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="1.5" y="1.5" width="21" height="21" rx="5.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.85" cy="6.15" r="1.15" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M16.6 2h-3.3v13.2c0 1.5-1.2 2.75-2.75 2.75a2.75 2.75 0 0 1 0-5.5c.28 0 .55.04.8.12V9.2a6.1 6.1 0 0 0-.8-.05A6.05 6.05 0 0 0 4.5 15.2 6.05 6.05 0 0 0 10.55 21.25 6.05 6.05 0 0 0 16.6 15.2V8.4a8.2 8.2 0 0 0 4.9 1.6V6.7a4.9 4.9 0 0 1-4.9-4.7Z"
        fill="currentColor"
      />
    </svg>
  );
}
