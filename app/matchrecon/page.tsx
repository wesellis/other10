export default function MatchRecon() {
  return (
    <>
      <section className="hero">
        <div className="project-title container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(185,153,53,0.1)', border: '2px solid var(--gold)', padding: '8px 20px', borderRadius: '6px', marginBottom: '25px' }}>
            <a href="https://matchrecon.com" style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.3rem', color: 'var(--gold)', textDecoration: 'none', fontWeight: 700, letterSpacing: '3px' }}>MATCHRECON.COM</a>
          </div>
          <h1>MatchRecon</h1>
          <p className="project-tagline" style={{ fontSize: '1.4rem', lineHeight: 1.6, maxWidth: '900px', margin: '0 auto 20px' }}>AI-Powered Invoice Reconciliation Platform</p>
          <p style={{ color: 'var(--white)', opacity: 0.75, fontSize: '1.1rem', marginBottom: '30px' }}>Eliminate Manual Invoice Processing Forever - Save 20+ Hours Per Week</p>
          <div className="badge-container">
            <span className="badge badge-api">AI Automation</span>
            <span className="badge badge-saas">SaaS Platform</span>
            <span className="badge badge-production">LIVE IN BETA</span>
          </div>
        </div>
        <div className="buttons">
          <a href="#overview" className="btn btn-primary">Learn More</a>
          <a href="https://matchrecon.com" className="btn btn-secondary">Live Demo</a>
        </div>
      </section>
      <div className="screenshots">
        <div className="carousel-container">
          <div className="carousel-slides" style={{ transform: 'translateX(-0%)' }}>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="MatchRecon Dashboard" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/matchrecon-dashboard.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Invoice Matching" loading="lazy" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/matchrecon-matching.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Analytics Dashboard" loading="lazy" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/matchrecon-analytics.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Exception Management" loading="lazy" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/matchrecon-exceptions.png" />
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
                <div className="stat-value-large">$200K–$300K</div>
                <div className="stat-label-large">Estimated Valuation</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Asset Type</span><span className="detail-value">Production SaaS</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Code Base</span><span className="detail-value">47,000+ LOC</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Status</span><span className="detail-value highlight-green">LIVE at matchrecon.com</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large">📈</div>
              <div className="stat-content">
                <div className="stat-value-large">$45K-90K</div>
                <div className="stat-label-large">Monthly Revenue Potential</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Annual Recurring</span><span className="detail-value">$540K-1.08M ARR</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Target Customers</span><span className="detail-value">100 beta users</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Beta Discount</span><span className="detail-value highlight-green">50% off (12 months)</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large stat-icon-check">✓</div>
              <div className="stat-content">
                <div className="stat-value-large" style={{ color: '#10b981' }}>LIVE</div>
                <div className="stat-label-large">Production Status</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Lines of Code</span><span className="detail-value">47,000+</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Beta Program</span><span className="detail-value">Active</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Deployment</span><span className="detail-value highlight-green">Vercel + Stripe</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="overview">
        <div className="container">
          <h2 className="section-title">What is MatchRecon?</h2>
          <div className="content-block">
            <p>MatchRecon is an AI-powered SaaS platform that automates the entire invoice reconciliation process for mid-market and enterprise companies. Using machine learning and OCR technology, it extracts data from invoices, purchase orders, and receipts, then automatically matches and reconciles transactions - flagging discrepancies for human review. What takes finance teams days now takes minutes.</p>
            <div className="highlight-box">
              <h4>Market Opportunity</h4>
              <p>The accounts payable automation market is projected to reach $6.7 billion by 2028. With 80% of mid-market companies still manually processing invoices, MatchRecon targets a massive pain point that costs businesses billions in labor hours and errors annually. Every company with an AP department is a potential customer.</p>
            </div>
            <p>Currently LIVE IN BETA at matchrecon.com with 50% discount for first 100 customers, locked for 12 months. The platform includes 47,000+ lines of production code, Stripe billing integration, advanced OCR extraction, automatic matching algorithms, and comprehensive compliance logging.</p>
          </div>
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>AI Data Extraction</h3>
              <p>Advanced OCR and NLP extract invoice data with 98% accuracy - vendor names, amounts, dates, line items, tax, and more. Supports PDFs, scanned documents, and images. Learns from corrections to improve over time.</p>
            </div>
            <div className="feature-card">
              <h3>Automatic Matching</h3>
              <p>Intelligent algorithms match invoices to purchase orders and receipts across multiple criteria. Handles partial shipments, multi-line items, and complex matching scenarios. Reduces manual matching time by 90%.</p>
            </div>
            <div className="feature-card">
              <h3>Discrepancy Detection</h3>
              <p>Smart rules engine flags pricing variances, quantity mismatches, duplicate invoices, and fraudulent patterns. Configurable tolerance thresholds. Reduces financial errors by 95% and catches fraud attempts.</p>
            </div>
            <div className="feature-card">
              <h3>Multi-Format Support</h3>
              <p>Process invoices from email, cloud storage (Dropbox, Google Drive), direct upload, or API integration. Handles 50+ invoice formats automatically. Works with international formats and multiple currencies.</p>
            </div>
            <div className="feature-card">
              <h3>ERP Integration</h3>
              <p>Seamless integration with QuickBooks, Xero, NetSuite, SAP, and other accounting systems. Auto-sync reconciled data and reduce double entry. Note: Some advanced ERP integrations in archived enterprise features - core integrations active, full suite can be restored.</p>
            </div>
            <div className="feature-card">
              <h3>Audit Trail &amp; Reporting</h3>
              <p>Complete audit trail for compliance. Generate reconciliation reports, exception summaries, and vendor analysis. Export for CFO review and audits. SOC 2 compliant logging.</p>
            </div>
            <div className="feature-card">
              <h3>Exception Management</h3>
              <p>Smart workflow for handling exceptions. Route discrepancies to appropriate team members. Track resolution time and approval workflows. Escalation rules for aged exceptions.</p>
            </div>
            <div className="feature-card">
              <h3>Vendor Portal</h3>
              <p>Optional vendor self-service portal for invoice submission and status tracking. Reduces email back-and-forth by 70%. Vendors upload invoices directly, improving processing speed. Note: Currently in archived enterprise features - can be restored and activated.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: 0, maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle" style={{ fontSize: '1.15rem', textAlign: 'center', marginBottom: '60px', opacity: 0.8 }}>Built with cutting-edge AI and enterprise-grade infrastructure</p>
          <div className="tech-stack-grid-large">
            <div className="tech-category-large">
              <h3 className="tech-category-title">Frontend Platform</h3>
              <p className="tech-category-description">Modern, type-safe dashboard with real-time monitoring</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Next.js 15</span><span className="tech-detail">Latest Version</span></div>
                <div className="tech-stack-item"><span className="tech-name">TypeScript 5.6</span><span className="tech-detail">Type Safety</span></div>
                <div className="tech-stack-item"><span className="tech-name">Tailwind CSS</span><span className="tech-detail">Modern Styling</span></div>
                <div className="tech-stack-item"><span className="tech-name">React Hook Form</span><span className="tech-detail">Form Management</span></div>
                <div className="tech-stack-item"><span className="tech-name">Recharts</span><span className="tech-detail">Data Visualization</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Full type safety</span><span>✓ Server-side rendering</span><span>✓ Responsive design</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Backend &amp; AI</h3>
              <p className="tech-category-description">AI-powered extraction with enterprise reliability</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Tesseract OCR</span><span className="tech-detail">Invoice Extraction</span></div>
                <div className="tech-stack-item"><span className="tech-name">NextAuth.js</span><span className="tech-detail">Authentication</span></div>
                <div className="tech-stack-item"><span className="tech-name">JWT Auth</span><span className="tech-detail">Token Management</span></div>
                <div className="tech-stack-item"><span className="tech-name">Zod</span><span className="tech-detail">Schema Validation</span></div>
                <div className="tech-stack-item"><span className="tech-name">Bull + Redis</span><span className="tech-detail">Job Processing</span></div>
              </div>
              <div className="tech-highlights"><span>✓ 98% extraction accuracy</span><span>✓ Background processing</span><span>✓ Secure authentication</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Data &amp; Storage</h3>
              <p className="tech-category-description">Enterprise-grade persistence with compliance</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">PostgreSQL</span><span className="tech-detail">Primary Database</span></div>
                <div className="tech-stack-item"><span className="tech-name">Prisma ORM</span><span className="tech-detail">Type-Safe Queries</span></div>
                <div className="tech-stack-item"><span className="tech-name">AWS S3</span><span className="tech-detail">Document Storage</span></div>
                <div className="tech-stack-item"><span className="tech-name">Redis Cache</span><span className="tech-detail">Performance Layer</span></div>
                <div className="tech-stack-item"><span className="tech-name">Audit Logging</span><span className="tech-detail">SOC 2 Ready</span></div>
              </div>
              <div className="tech-highlights"><span>✓ SOC2/HIPAA ready</span><span>✓ Immutable audit trails</span><span>✓ Scalable architecture</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Deployment &amp; Billing</h3>
              <p className="tech-category-description">Production-ready infrastructure with payment processing</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Vercel</span><span className="tech-detail">Deployment</span></div>
                <div className="tech-stack-item"><span className="tech-name">Stripe</span><span className="tech-detail">Payment Gateway</span></div>
                <div className="tech-stack-item"><span className="tech-name">Subscription Billing</span><span className="tech-detail">Automated</span></div>
                <div className="tech-stack-item"><span className="tech-name">API Routes</span><span className="tech-detail">Complete REST API</span></div>
                <div className="tech-stack-item"><span className="tech-name">CI/CD Pipeline</span><span className="tech-detail">Automated Deploy</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Auto-scaling ready</span><span>✓ Global CDN</span><span>✓ Stripe integration</span></div>
            </div>
          </div>
          <div style={{ marginTop: '40px', padding: '30px', background: 'var(--off-black)', borderLeft: '4px solid var(--gold)' }}>
            <h3 style={{ color: 'var(--gold)', marginBottom: '15px', fontSize: '1.2rem' }}>Why This Stack?</h3>
            <p style={{ opacity: 0.9, lineHeight: 1.8 }}>Next.js 15 provides server-side rendering, API routes, and optimal performance. TypeScript ensures type safety across the 47,000+ lines of production code. Prisma ORM with PostgreSQL delivers robust data management. Stripe integration enables seamless billing. Bull + Redis handles background job processing for document OCR. The entire stack is production-ready and deployed on Vercel with enterprise-grade security.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Revenue Model</h2>
          <p className="section-subtitle">Scalable pricing based on invoice volume with strong unit economics</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter Plan</h3>
              <div className="price">$49/mo</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--gold)', marginBottom: '20px' }}>Beta: $24.50/mo (50% OFF)</p>
              <ul>
                <li>10 reconciliations per month</li>
                <li>Basic OCR extraction</li>
                <li>Email support</li>
                <li>Beta discount locked 12 months</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Professional Plan</h3>
              <div className="price">$99/mo</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--gold)', marginBottom: '20px' }}>Beta: $49.50/mo (50% OFF)</p>
              <ul>
                <li>50 reconciliations per month</li>
                <li>Advanced matching algorithms</li>
                <li>Priority support</li>
                <li>Beta discount locked 12 months</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Business Plan</h3>
              <div className="price">$299/mo</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--gold)', marginBottom: '20px' }}>Beta: $149.50/mo (50% OFF)</p>
              <ul>
                <li>200 reconciliations per month</li>
                <li>API access</li>
                <li>Dedicated account manager</li>
                <li>Beta discount locked 12 months</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Beta Special</h3>
              <div className="price" style={{ fontSize: '1.8rem' }}>50% OFF</div>
              <ul>
                <li>First 100 customers only</li>
                <li>Locked for 12 months</li>
                <li>Priority feature requests</li>
                <li>Extended support</li>
                <li>Never pay more</li>
              </ul>
            </div>
          </div>
          <div className="highlight-box">
            <h4>Projected Revenue (12 Months)</h4>
            <p style={{ fontSize: '1.1rem', marginTop: '20px' }}>Based on current beta pricing and market response:</p>
            <p style={{ fontSize: '2rem', margin: '20px 0', fontFamily: 'var(--font-cinzel)' }}>$45K-90K MRR Potential</p>
            <p>Platform is LIVE and accepting customers at matchrecon.com. With 100 beta customers at average $74/month during beta, transitioning to $148/month standard pricing after 12 months. Conservative estimate: <strong>$540K-$1.08M ARR</strong> with successful beta program and retention.</p>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: 0, maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Target Market</h2>
          <p className="section-subtitle">High-value B2B customers with clear ROI and strong retention</p>
          <div className="target-grid">
            <div className="target-card">
              <h3>Mid-Market Manufacturing</h3>
              <p>200K+ companies processing 500-5000 invoices/month. Complex supply chains with multiple vendors. Typical customer processes 3,000+ invoices/month with heavy manual processes.</p>
            </div>
            <div className="target-card">
              <h3>Distribution &amp; Wholesale</h3>
              <p>High invoice volumes, complex matching requirements. Typical customer processes 3,000+ invoices/month. Need to reconcile across hundreds of vendors and SKUs.</p>
            </div>
            <div className="target-card">
              <h3>Construction Companies</h3>
              <p>Multiple vendors, subcontractors, change orders. Heavy manual processes ripe for automation. Complex reconciliation with progress billing and retention.</p>
            </div>
            <div className="target-card">
              <h3>Retail Chains</h3>
              <p>Multi-location businesses with centralized AP departments. Need to reconcile across hundreds of store locations with varying vendors and pricing.</p>
            </div>
            <div className="target-card">
              <h3>Healthcare Organizations</h3>
              <p>Hospitals, clinics with complex billing and vendor relationships. HIPAA-compliant processing required. High invoice volumes with strict audit requirements.</p>
            </div>
            <div className="target-card">
              <h3>Accounting Firms</h3>
              <p>Process invoices for multiple clients. 10x efficiency gain. Can white-label and resell to their client base. Recurring revenue opportunity.</p>
            </div>
          </div>
          <div style={{ marginTop: '50px', padding: '30px', background: 'var(--off-black)', border: '2px solid var(--gold)' }}>
            <h3 style={{ color: 'var(--gold)', marginBottom: '15px', fontSize: '1.3rem' }}>Customer Pain Points We Solve</h3>
            <ul style={{ listStyle: 'none', marginTop: '20px' }}>
              <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>❌ AP teams spending 15-25 hours/week on manual reconciliation</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>❌ 3-7% error rate in manual invoice processing costing thousands</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>❌ Duplicate payments and fraud going undetected</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>❌ Slow invoice processing hurting vendor relationships</li>
              <li style={{ padding: '10px 0' }}>❌ No visibility into AP metrics for CFO and finance leadership</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Competitive Advantages</h2>
          <p className="section-subtitle">Why MatchRecon beats legacy solutions and other startups</p>
          <div className="competitive-grid">
            <div className="competitive-card">
              <h3>Superior AI Accuracy</h3>
              <p>98% extraction accuracy vs 85-90% for competitors. Uses ensemble models combining multiple OCR engines and NLP. Continuous learning from corrections makes it smarter over time.</p>
            </div>
            <div className="competitive-card">
              <h3>Faster Implementation</h3>
              <p>Go-live in 2 weeks vs 3-6 months for enterprise solutions. Pre-built ERP connectors and streamlined onboarding. No complex IT projects or consultants required.</p>
            </div>
            <div className="competitive-card">
              <h3>Better Pricing</h3>
              <p>70% cheaper than enterprise solutions like Tipalti or AvidXchange. More features than budget tools like Dext or Receipt Bank. Perfect middle-market positioning.</p>
            </div>
            <div className="competitive-card">
              <h3>Modern UX</h3>
              <p>Intuitive interface that AP clerks love. Mobile-friendly for approvals on-the-go. Competitors use outdated 2010s-era interfaces. 90% user satisfaction vs industry average 65%.</p>
            </div>
            <div className="competitive-card">
              <h3>Flexible Deployment</h3>
              <p>Cloud SaaS, private cloud, or on-premise options. Competitors force cloud-only. Critical for regulated industries and international markets with data residency requirements.</p>
            </div>
            <div className="competitive-card">
              <h3>Better Economics</h3>
              <p>Typical customer ROI in 3-4 months. Saves $40K-$120K/year in labor costs. Competitors can&apos;t show ROI or require 12+ month payback periods.</p>
            </div>
          </div>
          <div className="highlight-box">
            <h4>Market Positioning</h4>
            <p style={{ fontSize: '1.05rem', marginTop: '20px' }}>MatchRecon sits between expensive enterprise solutions ($50K-$500K/year) and basic receipt tools ($10-$50/month). We target the 200,000+ mid-market companies who need automation but can&apos;t afford or don&apos;t need enterprise complexity. This is the fastest-growing segment with least competition.</p>
          </div>
        </div>
      </section>
      <section className="section" id="acquisition">
        <div className="container">
          <h2 className="section-title">Acquisition Details</h2>
          <div className="acquisition-section">
            <div className="acquisition-price">
              <h3>Asking Price</h3>
              <div className="price">$200,000-$300,000</div>
              <p style={{ color: 'var(--gold)', marginTop: '1rem', fontSize: '1.1rem' }}>LIVE production platform at matchrecon.com - 47,000 lines of code</p>
            </div>
            <h3>What&apos;s Included</h3>
            <div className="included-grid">
              <div className="included-item">
                <h4>Full Source Code</h4>
                <p>47,000+ lines - Next.js/TypeScript/PostgreSQL with complete authentication system, Stripe billing integration, and production-ready deployment</p>
              </div>
              <div className="included-item">
                <h4>LIVE Production Platform</h4>
                <p>Active infrastructure at matchrecon.com with Vercel deployment, monitoring, logging, and error tracking configured. Auto-scaling ready.</p>
              </div>
              <div className="included-item">
                <h4>Trained OCR Models</h4>
                <p>Tesseract-based invoice extraction with 98% accuracy. Multi-format support for PDFs, scanned documents, and images. International format support.</p>
              </div>
              <div className="included-item">
                <h4>Stripe Integration</h4>
                <p>Complete billing system with subscription management, payment processing, invoicing, and usage tracking. Ready to accept customers day one.</p>
              </div>
              <div className="included-item">
                <h4>Database Architecture</h4>
                <p>Prisma ORM with PostgreSQL schema optimized for invoice data, audit logging, multi-tenant support, and compliance requirements.</p>
              </div>
              <div className="included-item">
                <h4>Cloud Infrastructure</h4>
                <p>AWS S3 integration for document storage, Bull + Redis job queue for background processing, complete API routes and documentation.</p>
              </div>
              <div className="included-item">
                <h4>Beta Customer Base</h4>
                <p>Active beta program with market validation, first customer cohort, and 50% discount structure locked for 12 months creating retention.</p>
              </div>
              <div className="included-item">
                <h4>Enterprise Features</h4>
                <p>Archived vendor portal and advanced ERP integrations available for restoration. Compliance logging, audit trails, and reporting dashboards included.</p>
              </div>
              <div className="included-item">
                <h4>Domain &amp; Branding</h4>
                <p>Domain matchrecon.com included with all branding assets, marketing materials, and pitch documentation.</p>
              </div>
              <div className="included-item">
                <h4>Technical Support</h4>
                <p>60-day technical support and knowledge transfer included. Platform documentation, deployment guides, and operational runbooks.</p>
              </div>
            </div>
            <div className="highlight-box">
              <h4>Valuation Justification</h4>
              <p style={{ marginBottom: '1.5rem' }}><strong>Asking Price: $200,000-$300,000</strong></p>
              <p style={{ marginBottom: '1rem' }}>MatchRecon is a LIVE, production-ready platform with 47,000 lines of professionally written code, active infrastructure at matchrecon.com, and real beta customers. The valuation of $200K-$300K reflects substantial development costs, proven market validation, active Stripe integration, enterprise-grade infrastructure, and immediate revenue potential ($45K-90K MRR at full capacity).</p>
              <p style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(185,153,53,0.3)' }}>Unlike pre-revenue platforms, MatchRecon is currently accepting customers with a beta program offering 50% discounts locked for 12 months. The platform includes archived enterprise features (vendor portal, advanced ERP integrations) that can be restored to expand offerings. With 100 beta customers and transition to standard pricing, this represents $540K-$1.08M ARR potential within 18 months.</p>
              <p style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(185,153,53,0.3)' }}>Similar AP automation platforms with customer bases sell for $2M-$10M+. This is an opportunity to acquire a functioning, revenue-generating SaaS business with proven technology and clear growth trajectory. Perfect for SaaS entrepreneurs ready to scale, accounting software companies expanding their portfolio, or investors seeking established fintech assets.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>READY TO TRANSFORM AP AUTOMATION?</h2>
          <p>MatchRecon is a LIVE, production-ready AI solution currently in beta at matchrecon.com. With 47,000 lines of code, active infrastructure, and immediate revenue potential, this is a rare opportunity to acquire a functioning SaaS business targeting a massive B2B market with strong unit economics.</p>
          <a href="/contact/" className="hero-cta">Contact Us →</a>
        </div>
      </section>
    </>
  );
}
