'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="header-info">
            <div className="header-info-left">
              <span>Enterprise Innovation Lab</span>
              <span className="separator">|</span>
              <span>Charlottesville, VA</span>
              <span className="separator">|</span>
              <span>Since 2016</span>
            </div>
            <a href="mailto:hello@other10.com">hello@other10.com</a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header-main flex items-center justify-between">
          <a href="/" className="logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Other10 Logo"
              width={200}
              height={50}
              src="/images/Other10-Logo-WHT-V1.png"
            />
          </a>
          <nav className="main-nav hidden md:flex">
            <a href="/">Portfolio</a>
            <a href="/services/">Capabilities</a>
            <a href="/pricing/">Investment</a>
            <a href="/about/">About</a>
            <a href="/blog/">Insights</a>
            <a href="/contact/" className="nav-cta">
              Partner With Us
            </a>
          </nav>
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-other10-gold text-2xl"
          >
            ☰
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="mobile-nav md:hidden">
          <a href="/" onClick={() => setMenuOpen(false)}>
            Portfolio
          </a>
          <a href="/services/" onClick={() => setMenuOpen(false)}>
            Capabilities
          </a>
          <a href="/pricing/" onClick={() => setMenuOpen(false)}>
            Investment
          </a>
          <a href="/about/" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="/blog/" onClick={() => setMenuOpen(false)}>
            Insights
          </a>
          <a href="/contact/" onClick={() => setMenuOpen(false)}>
            Partner With Us
          </a>
        </nav>
      )}
    </header>
  );
}
