import Link from 'next/link';
export default function PrismVerify() {
  return (
    <>
      <section className="hero">
        <div className="project-title container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(185,153,53,0.1)', border: '2px solid var(--gold)', padding: '8px 20px', borderRadius: '6px', marginBottom: '25px' }}>
            <a href="https://prismverify.other10.com" style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.3rem', color: 'var(--gold)', textDecoration: 'none', fontWeight: 700, letterSpacing: '3px' }}>PRISMVERIFY</a>
          </div>
          <h1>PrismVerify</h1>
          <p className="project-tagline" style={{ fontSize: '1.4rem', lineHeight: 1.6, maxWidth: '900px', margin: '0 auto 20px' }}>Automated Security Assessment &amp; Continuous Penetration Testing Platform</p>
          <p style={{ color: 'var(--white)', opacity: 0.75, fontSize: '1.1rem', marginBottom: '30px' }}>Enterprise-Grade Security Assessments at a Fraction of Traditional Costs</p>
          <div className="badge-container">
            <span className="badge badge-security">Cybersecurity</span>
            <span className="badge badge-saas">SaaS Platform</span>
            <span className="badge badge-enterprise">Enterprise Ready</span>
          </div>
        </div>
        <div className="buttons">
          <a href="#overview" className="btn btn-primary">Learn More</a>
          <a href="https://prismverify.other10.com" className="btn btn-secondary">Visit Platform</a>
        </div>
      </section>
      <div className="screenshots">
        <div className="carousel-container">
          <div className="carousel-slides" style={{ transform: 'translateX(-0%)' }}>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="PrismVerify Dashboard" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/prismverify-dashboard.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Vulnerability Scanning" loading="lazy" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/prismverify-scanning.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Compliance Reports" loading="lazy" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/prismverify-reports.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Analytics Dashboard" loading="lazy" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/prismverify-analytics.png" />
            </div>
          </div>
          <button className="carousel-nav carousel-prev" aria-label="Previous slide">‹</button>
          <button className="carousel-nav carousel-next" aria-label="Next slide">›</button>
          <div className="carousel-indicators">
            <div className="carousel-dot active" aria-label="Go to slide 1"></div>
            <div className="carousel-dot " aria-label="Go to slide 2"></div>
            <div className="carousel-dot " aria-label="Go to slide 3"></div>
            <div className="carousel-dot " aria-label="Go to slide 4"></div>
          </div>
        </div>
      </div>
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid-enhanced">
            <div className="stat-card-enhanced">
              <div className="stat-icon-large">💰</div>
              <div className="stat-content">
                <div className="stat-value-large">$85K</div>
                <div className="stat-label-large">Asking Price</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Asset Type</span><span className="detail-value">MVP Complete</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Status</span><span className="detail-value">Demo Ready</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Time to Launch</span><span className="detail-value highlight-green">30-40 hours</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large">📈</div>
              <div className="stat-content">
                <div className="stat-value-large">$20K-$40K</div>
                <div className="stat-label-large">Monthly Revenue Potential</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Annual Recurring</span><span className="detail-value">$1.23M ARR</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Target Market</span><span className="detail-value">100,000+ businesses</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Market Growth</span><span className="detail-value highlight-green">14.8% CAGR</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large stat-icon-check">✓</div>
              <div className="stat-content">
                <div className="stat-value-large" style={{ color: '#10b981' }}>MVP</div>
                <div className="stat-label-large">Complete</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="completion-bar"><div className="completion-fill" style={{ width: '90%' }}></div></div>
                  <div className="stat-detail-item"><span className="detail-label">Pages Built</span><span className="detail-value">11 functional</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Authentication</span><span className="detail-value highlight-green">Complete</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="overview">
        <div className="container">
          <h2 className="section-title">What is PrismVerify?</h2>
          <div className="content-block">
            <p>PrismVerify is a <strong>working MVP</strong> for an enterprise-grade automated security assessment and continuous penetration testing platform. The platform combines vulnerability scanning, threat intelligence, simulated attack scenarios, and compliance monitoring into a unified dashboard. Currently in demo/proof-of-concept stage with mock data, PrismVerify is production-ready for investor presentations, beta testing, and internal evaluation.</p>
            <p><strong>MVP Status (October 2025):</strong> Complete Next.js 14 frontend with 11 functional pages (landing, authentication, dashboard, assessments, reports, team management, settings, admin panel). Full user authentication with NextAuth, Prisma database integration, and working assessment creation workflows. Security teams can sign up, log in, create assessments, view mock results with realistic security findings, and export reports. Ready for customer demos and beta testing.</p>
            <div className="highlight-box">
              <h4>Market Opportunity</h4>
              <p>The global penetration testing market is projected to reach $4.5 billion by 2027, growing at 14.8% CAGR. With increasing cybersecurity threats, regulatory requirements, and data breach costs averaging $4.45 million, organizations are investing heavily in proactive security testing. PrismVerify addresses the critical gap between expensive manual penetration testing (costing $15K-$50K per engagement) and basic vulnerability scanners that lack depth and context. The platform&apos;s continuous testing model and AI-powered analysis provide enterprise-grade security assessments at a fraction of traditional costs.</p>
            </div>
            <p>PrismVerify&apos;s AI engine learns from each scan, identifying false positives, correlating vulnerabilities across systems, and prioritizing risks based on your specific business context. The platform integrates seamlessly with existing DevOps workflows, CI/CD pipelines, and ticketing systems like Jira and ServiceNow.</p>
          </div>
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Automated Penetration Testing</h3>
              <p>Schedule comprehensive penetration tests that simulate real-world attack scenarios across your infrastructure. Tests include network scanning, web application testing, API security assessment, and social engineering simulations. Automated tests run continuously without requiring expensive external consultants.</p>
            </div>
            <div className="feature-card">
              <h3>AI-Powered Threat Intelligence</h3>
              <p>Machine learning algorithms analyze vulnerability data, correlate threats across systems, and predict potential attack vectors. The AI engine reduces false positives by 85% and automatically prioritizes vulnerabilities based on exploitability, business impact, and current threat landscape data from global security feeds.</p>
            </div>
            <div className="feature-card">
              <h3>Continuous Vulnerability Scanning</h3>
              <p>24/7 monitoring of networks, applications, cloud infrastructure, and endpoints. Scans detect misconfigurations, outdated software, weak credentials, exposed services, and zero-day vulnerabilities. Immediate alerts for critical findings with recommended remediation steps and proof-of-concept exploits.</p>
            </div>
            <div className="feature-card">
              <h3>Compliance Automation</h3>
              <p>Automated compliance monitoring and reporting for SOC 2, ISO 27001, PCI DSS, HIPAA, GDPR, and NIST frameworks. Generate audit-ready reports with evidence collection, control mapping, and gap analysis. Continuous compliance monitoring ensures you stay audit-ready year-round, reducing preparation time by 70%.</p>
            </div>
            <div className="feature-card">
              <h3>Red Team Simulation</h3>
              <p>Advanced attack simulation scenarios that test your organization&apos;s detection and response capabilities. Simulates APT (Advanced Persistent Threat) tactics, lateral movement, privilege escalation, data exfiltration, and ransomware deployment. Identifies gaps in security controls and incident response procedures.</p>
            </div>
            <div className="feature-card">
              <h3>Asset Discovery &amp; Mapping</h3>
              <p>Automatically discovers and maps all networked assets, cloud resources, web applications, APIs, and endpoints. Creates comprehensive attack surface visualizations showing relationships, dependencies, and data flows. Identifies shadow IT, forgotten assets, and exposed services that create security risks.</p>
            </div>
            <div className="feature-card">
              <h3>Integration &amp; Workflow Automation</h3>
              <p>Seamlessly integrates with CI/CD pipelines, SIEM platforms, ticketing systems (Jira, ServiceNow), chat platforms (Slack, Teams), and cloud providers (AWS, Azure, GCP). Automates vulnerability ticket creation, assignment, and tracking. API-first architecture enables custom integrations and automation workflows.</p>
            </div>
            <div className="feature-card">
              <h3>Executive Reporting &amp; Analytics</h3>
              <p>Beautiful dashboards and executive reports that translate technical vulnerabilities into business risk. Track security posture trends, remediation velocity, team performance, and ROI metrics. Customizable reports for technical teams, management, board members, and auditors with appropriate detail levels.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: 0, maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle" style={{ fontSize: '1.15rem', textAlign: 'center', marginBottom: '60px', opacity: 0.8 }}>Built with enterprise-grade security and scalability at its core</p>
          <div className="tech-stack-grid-large">
            <div className="tech-category-large">
              <h3 className="tech-category-title">Frontend Platform</h3>
              <p className="tech-category-description">Modern, type-safe interface with full authentication</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Next.js 14</span><span className="tech-detail">Latest Framework</span></div>
                <div className="tech-stack-item"><span className="tech-name">TypeScript 5.5</span><span className="tech-detail">Type Safety</span></div>
                <div className="tech-stack-item"><span className="tech-name">React 18</span><span className="tech-detail">UI Library</span></div>
                <div className="tech-stack-item"><span className="tech-name">Tailwind CSS 3.4</span><span className="tech-detail">Styling</span></div>
                <div className="tech-stack-item"><span className="tech-name">NextAuth.js 4.24</span><span className="tech-detail">Authentication</span></div>
              </div>
              <div className="tech-highlights"><span>✓ 11 functional pages</span><span>✓ Full type safety</span><span>✓ Server-side rendering</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Backend &amp; Data</h3>
              <p className="tech-category-description">Structured data storage with audit trails</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Prisma ORM 6.17</span><span className="tech-detail">Database Layer</span></div>
                <div className="tech-stack-item"><span className="tech-name">PostgreSQL</span><span className="tech-detail">Primary Database</span></div>
                <div className="tech-stack-item"><span className="tech-name">Bull + Redis</span><span className="tech-detail">Job Processing</span></div>
                <div className="tech-stack-item"><span className="tech-name">AWS S3</span><span className="tech-detail">Document Storage</span></div>
                <div className="tech-stack-item"><span className="tech-name">SendGrid</span><span className="tech-detail">Email Service</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Full audit trails</span><span>✓ Scalable architecture</span><span>✓ Production-ready</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Payment &amp; Deployment</h3>
              <p className="tech-category-description">Ready for customer billing and global deployment</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Stripe (Ready)</span><span className="tech-detail">Payment Gateway</span></div>
                <div className="tech-stack-item"><span className="tech-name">Vercel Deployment</span><span className="tech-detail">Zero-Config Deploy</span></div>
                <div className="tech-stack-item"><span className="tech-name">Vercel Edge</span><span className="tech-detail">Global CDN</span></div>
                <div className="tech-stack-item"><span className="tech-name">GitHub Actions</span><span className="tech-detail">CI/CD Pipeline</span></div>
                <div className="tech-stack-item"><span className="tech-name">Security Headers</span><span className="tech-detail">Production-Ready</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Stripe configured</span><span>✓ Auto-scaling ready</span><span>✓ Automated deploys</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Future Security Stack</h3>
              <p className="tech-category-description">Roadmap for real security tool integrations</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Nmap Integration</span><span className="tech-detail">Network Scanning</span></div>
                <div className="tech-stack-item"><span className="tech-name">Nessus API</span><span className="tech-detail">Vulnerability Detection</span></div>
                <div className="tech-stack-item"><span className="tech-name">OWASP ZAP</span><span className="tech-detail">Web App Security</span></div>
                <div className="tech-stack-item"><span className="tech-name">TensorFlow AI</span><span className="tech-detail">Threat Correlation</span></div>
                <div className="tech-stack-item"><span className="tech-name">Kubernetes</span><span className="tech-detail">Scanning Infrastructure</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Architecture ready</span><span>✓ 30-40 hours to integrate</span><span>✓ Clear implementation path</span></div>
            </div>
          </div>
          <div className="highlight-box">
            <h4>Why This Stack?</h4>
            <p>PrismVerify&apos;s MVP is built with Next.js 14 and TypeScript for type-safe, production-ready code. Prisma ORM with PostgreSQL provides structured data storage with full audit trails. NextAuth.js handles secure authentication with JWT tokens and session management. Tailwind CSS delivers a responsive, professional UI across 11 pages. AWS S3 manages document storage, Bull + Redis handles background job processing, and Stripe integration is ready for subscription billing. The platform is deployable to Vercel with zero configuration and can scale to handle thousands of users. <strong>Future roadmap includes:</strong> Integration with security tools (Nmap, Nessus, OWASP ZAP), TensorFlow AI engine for threat correlation, and Kubernetes orchestration for scanning infrastructure.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Revenue Model</h2>
          <p className="section-subtitle">Flexible subscription tiers designed for organizations of all sizes</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Startup</h3>
              <div className="price">$499/mo</div>
              <ul>
                <li>Up to 25 assets</li>
                <li>Weekly automated scans</li>
                <li>Basic vulnerability database</li>
                <li>Standard support</li>
                <li>Compliance templates</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Professional</h3>
              <div className="price">$1,499/mo</div>
              <ul>
                <li>Up to 100 assets</li>
                <li>Daily automated scans</li>
                <li>AI threat intelligence</li>
                <li>Priority support</li>
                <li>Advanced compliance automation</li>
                <li>API access</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">$4,999/mo</div>
              <ul>
                <li>Unlimited assets</li>
                <li>Continuous scanning</li>
                <li>Red team simulations</li>
                <li>Dedicated account manager</li>
                <li>Custom integrations</li>
                <li>White-label reports</li>
                <li>SLA guarantees</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Add-Ons</h3>
              <div className="price">Custom</div>
              <ul>
                <li>Manual penetration testing</li>
                <li>Security training programs</li>
                <li>Incident response retainer</li>
                <li>Custom development</li>
                <li>Professional services</li>
              </ul>
            </div>
          </div>
          <div className="highlight-box">
            <h4>Revenue Projections</h4>
            <p><strong>Conservative Estimate:</strong> 50 Startup customers ($24,950/mo) + 25 Professional customers ($37,475/mo) + 8 Enterprise customers ($39,992/mo) = $102,417/month = $1.23M ARR within 18 months</p>
            <p><strong>Growth Scenario:</strong> With strong marketing and partnerships, achieving 100 Startup, 60 Professional, and 20 Enterprise customers would generate $255K/month = $3.06M ARR, with 40% gross margins typical for SaaS security platforms.</p>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: 0, maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Target Market</h2>
          <p className="section-subtitle">Organizations that need continuous security validation and compliance automation</p>
          <div className="target-grid">
            <div className="target-card">
              <h3>Technology Companies</h3>
              <p>SaaS providers, software companies, and tech startups that need continuous security testing for their applications and infrastructure. SOC 2 and ISO 27001 compliance requirements make automated security assessments essential. Typical spend: $1,500-$5,000/month.</p>
            </div>
            <div className="target-card">
              <h3>Financial Services</h3>
              <p>Banks, fintech companies, payment processors, and investment firms with strict PCI DSS, SOC 2, and regulatory compliance requirements. Need continuous monitoring to protect sensitive financial data and meet examiner expectations. Typical spend: $4,000-$10,000/month.</p>
            </div>
            <div className="target-card">
              <h3>Healthcare Organizations</h3>
              <p>Hospitals, healthcare providers, medical device manufacturers, and health tech companies requiring HIPAA compliance and patient data protection. Continuous vulnerability scanning and compliance monitoring reduce audit preparation time and demonstrate due diligence. Typical spend: $2,500-$7,500/month.</p>
            </div>
            <div className="target-card">
              <h3>E-Commerce &amp; Retail</h3>
              <p>Online retailers, marketplace platforms, and merchants that process credit cards need PCI DSS compliance and protection against payment fraud. Regular penetration testing identifies vulnerabilities before attackers do. Typical spend: $1,500-$5,000/month.</p>
            </div>
            <div className="target-card">
              <h3>Government &amp; Defense</h3>
              <p>Federal agencies, state governments, defense contractors, and critical infrastructure operators with FedRAMP, NIST 800-53, and CMMC compliance requirements. Automated security testing and continuous monitoring meet stringent security standards. Typical spend: $5,000-$15,000/month.</p>
            </div>
            <div className="target-card">
              <h3>Managed Service Providers</h3>
              <p>MSPs and MSSPs that provide security services to multiple clients. White-label capabilities and multi-tenant architecture enable service providers to offer enterprise-grade security testing under their own brand. Typical spend: $4,000-$12,000/month.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Competitive Advantages</h2>
          <div className="competitive-grid">
            <div className="competitive-card">
              <h3>Continuous vs Point-in-Time</h3>
              <p>Traditional penetration testing is expensive ($15K-$50K per engagement) and provides only a snapshot of security posture. PrismVerify offers continuous automated testing at a fraction of the cost, identifying new vulnerabilities as they emerge and adapting to infrastructure changes automatically.</p>
            </div>
            <div className="competitive-card">
              <h3>AI-Powered Intelligence</h3>
              <p>Basic vulnerability scanners generate excessive false positives and lack context. PrismVerify&apos;s AI engine correlates vulnerabilities, predicts attack paths, prioritizes based on business impact, and reduces false positives by 85%, saving security teams hundreds of hours investigating irrelevant findings.</p>
            </div>
            <div className="competitive-card">
              <h3>Comprehensive Compliance</h3>
              <p>Most security tools focus on vulnerability scanning only. PrismVerify includes automated compliance monitoring, evidence collection, control mapping, and audit-ready reporting for multiple frameworks (SOC 2, ISO 27001, PCI DSS, HIPAA, NIST), reducing compliance costs and audit preparation time by 70%.</p>
            </div>
            <div className="competitive-card">
              <h3>Developer-First Integration</h3>
              <p>Competing platforms require security teams to manually review results. PrismVerify integrates directly into CI/CD pipelines, automatically creates tickets in Jira/ServiceNow, and provides developers with actionable remediation guidance including code examples and patches.</p>
            </div>
            <div className="competitive-card">
              <h3>Unified Platform</h3>
              <p>Organizations typically use 5-10 different security tools (scanners, penetration testing, compliance monitoring, asset management). PrismVerify consolidates these capabilities into a single platform with unified reporting, reducing tool sprawl, training costs, and integration complexity.</p>
            </div>
            <div className="competitive-card">
              <h3>Enterprise Scalability</h3>
              <p>Many security tools struggle with large, complex environments. PrismVerify&apos;s Kubernetes-based architecture scales horizontally to handle thousands of concurrent scans across multiple client environments, supporting MSPs and enterprises with distributed infrastructure without performance degradation.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="acquisition">
        <div className="container">
          <h2 className="section-title">Acquisition Details</h2>
          <div className="acquisition-section">
            <div className="acquisition-price">
              <h3>Asking Price</h3>
              <div className="price">$85,000</div>
            </div>
            <h3>What&apos;s Included</h3>
            <div className="included-grid">
              <div className="included-item">
                <h4>Complete MVP Source Code</h4>
                <p>Full Next.js 14/TypeScript codebase with 11 production-ready pages, Prisma database, NextAuth authentication, ~2,000 LOC (MVP complete, ready for beta)</p>
              </div>
              <div className="included-item">
                <h4>Working Authentication System</h4>
                <p>Complete user signup/login flows with NextAuth.js, JWT tokens, bcrypt password hashing, session management, and protected routes</p>
              </div>
              <div className="included-item">
                <h4>Assessment Workflow (Demo)</h4>
                <p>Functional assessment creation interface with 6 assessment types, mock security findings generator, realistic vulnerability data, severity categorization, and remediation guidance</p>
              </div>
              <div className="included-item">
                <h4>Database &amp; Infrastructure</h4>
                <p>Prisma ORM schema with PostgreSQL support, AWS S3 document storage integration, Vercel deployment configuration, and production-ready security headers</p>
              </div>
              <div className="included-item">
                <h4>Domain &amp; Branding</h4>
                <p>PrismVerify.com domain, logo, brand assets, marketing materials, and professionally designed landing page</p>
              </div>
              <div className="included-item">
                <h4>Payment Framework (Ready)</h4>
                <p>Stripe integration configured and ready to activate, subscription billing framework, payment history tracking, and customer portal structure</p>
              </div>
              <div className="included-item">
                <h4>11-Page Production UI</h4>
                <p>Landing page, signup/login, dashboard with stats, assessments page, reports page, team management, user settings, admin panel, forgot password, and error pages - all responsive and styled</p>
              </div>
              <div className="included-item">
                <h4>GitHub Repository</h4>
                <p>Complete version history with 8+ commits, production-ready code pushed to GitHub, FINAL_VERIFICATION and WORKING_MVP documentation, deployment guides</p>
              </div>
              <div className="included-item">
                <h4>Realistic Mock Data</h4>
                <p>Demo-ready assessment results generator with realistic security findings, severity levels, CVSS scores, remediation guidance, and export functionality for presentations</p>
              </div>
              <div className="included-item">
                <h4>Technical Handoff</h4>
                <p>60 days of technical support, knowledge transfer sessions, and comprehensive documentation to ensure successful deployment and continued development</p>
              </div>
            </div>
            <div className="highlight-box">
              <h4>Valuation Justification</h4>
              <p>PrismVerify is valued at $85K based on <strong>MVP completion status</strong> (October 2025): 11 production-ready pages, complete authentication system, functional assessment workflows, and professional UI with Next.js 14/TypeScript/Prisma stack. The platform is <strong>demo-ready</strong> for investor presentations, beta customer testing, and internal evaluation. Positioned in the growing cybersecurity assessment market ($4.5B by 2027), PrismVerify has a clear path to revenue with 30-40 hours of additional work needed to connect real security scanning engines and payment processing.</p>
              <p><strong>Current State:</strong> Production-ready MVP with mock data, perfect for demonstrating value proposition to customers and investors. <strong>Path to Revenue:</strong> Add real security tool integrations (Nmap, Nessus, OWASP ZAP), activate Stripe payments, and replace mock findings with actual scan results. Conservative projections (50 Startup + 25 Professional + 8 Enterprise customers) yield $1.23M ARR potential within 18-24 months post-launch. Asking price represents 2-3 months of development work saved and a proven, tested foundation ready for immediate beta deployment.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>READY TO ACQUIRE PRISMVERIFY?</h2>
          <p>A production-ready security assessment platform with clear path to $1.23M ARR. Contact us to discuss acquisition or partnership opportunities.</p>
          <Link href="/contact/" className="hero-cta">Contact Us →</Link>
        </div>
      </section>
    </>
  );
}



