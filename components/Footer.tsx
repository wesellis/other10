import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <Image
                alt="Other10 Logo"
                width={140}
                height={35}
                style={{ height: '35px', width: 'auto' }}
                src="/images/Other10-Logo-WHT-V1.png"
              />
            </div>
            <p className="footer-tagline">
              Enterprise Innovation Lab &amp; SaaS Accelerator
            </p>
            <p className="footer-location">
              Charlottesville, Virginia • Since 2016
            </p>
          </div>
          <div className="footer-links-group">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><Link href="/about/">About Us</Link></li>
                <li><Link href="/">Portfolio</Link></li>
                <li><Link href="/pricing/">Investment</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><Link href="/privacy/">Privacy Policy</Link></li>
                <li><Link href="/terms/">Terms of Service</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:hello@other10.com">hello@other10.com</a></li>
                <li><a href="mailto:partnerships@other10.com">partnerships@other10.com</a></li>
                <li><Link href="/contact/">Get in Touch</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 OTHER10. All Rights Reserved.</p>
          <p>Engineering Tomorrow&apos;s Enterprise Solutions</p>
        </div>
      </div>
    </footer>
  );
}
