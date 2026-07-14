import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo">
              <LogoMark />
              WOW Football Group
            </span>
            <p style={{ maxWidth: "34ch", fontSize: "0.92rem" }}>
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
            <div style={{ marginTop: "1.25rem" }}>
              <a
                className="social-icon"
                href="https://www.linkedin.com/company/wow-football-group/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow WOW Football Group on LinkedIn"
              >
                <LinkedInIcon />
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

function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="14.5" stroke="#E6BC4A" strokeWidth="1.2" />
      <path d="M16 3.5V28.5M3.5 16H28.5" stroke="#E6BC4A" strokeWidth="0.6" opacity="0.5" />
      <path d="M16 9L20.5 12.2L18.8 17.5H13.2L11.5 12.2L16 9Z" stroke="#E6BC4A" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
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
