"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#how-we-help", label: "How we help" },
  { href: "/#why-join-us", label: "Why join us" },
  { href: "/#our-clubs", label: "Our clubs" },
  { href: "/#our-team", label: "Our team" },
  { href: "/news", label: "News" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <img
            src="/logo/wow-icon.png"
            alt="WOW Football Group"
            className="logo-mark-img"
            width={600}
            height={179}
          />
          <span className="logo-descriptor">Football Group</span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/become-an-investor" className="btn btn-primary nav-cta">
          Become an investor
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav className="nav-mobile" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/join-us" onClick={() => setOpen(false)}>
            Join the network
          </Link>
          <Link href="/become-an-investor" onClick={() => setOpen(false)}>
            Become an investor
          </Link>
        </nav>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M0 1H18M0 6H18M0 11H18" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
