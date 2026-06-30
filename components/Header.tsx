'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
          <Link href="/" className="logo">
            <Image
              alt="Other10 Logo"
              width={200}
              height={50}
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/Other10-Logo-WHT-V1.png`}
            />
          </Link>
          <nav className="main-nav hidden md:flex">
            <Link href="/">Portfolio</Link>
            <Link href="/services/">Capabilities</Link>
            <Link href="/pricing/">Investment</Link>
            <Link href="/about/">About</Link>
            <Link href="/blog/">Insights</Link>
            <Link href="/contact/" className="nav-cta">Partner With Us</Link>
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
          <Link href="/" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link href="/services/" onClick={() => setMenuOpen(false)}>Capabilities</Link>
          <Link href="/pricing/" onClick={() => setMenuOpen(false)}>Investment</Link>
          <Link href="/about/" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/blog/" onClick={() => setMenuOpen(false)}>Insights</Link>
          <Link href="/contact/" onClick={() => setMenuOpen(false)}>Partner With Us</Link>
        </nav>
      )}
    </header>
  );
}
