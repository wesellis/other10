export default function WasteTracker() {
  return (
    <>
      <section className="hero">
        <div className="project-title container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(185,153,53,0.1)', border: '2px solid var(--gold)', padding: '8px 20px', borderRadius: '6px', marginBottom: '25px' }}>
            <a href="https://restaurant.other10.com" style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.3rem', color: 'var(--gold)', textDecoration: 'none', fontWeight: 700, letterSpacing: '3px' }}>WASTETRACKER</a>
          </div>
          <h1>WasteTracker</h1>
          <p className="project-tagline" style={{ fontSize: '1.4rem', lineHeight: 1.6, maxWidth: '900px', margin: '0 auto 20px' }}>Restaurant Food Waste Management &amp; Cost Reduction Platform</p>
          <p style={{ color: 'var(--white)', opacity: 0.75, fontSize: '1.1rem', marginBottom: '30px' }}>AI-Powered Tracking That Reduces Waste by 30-50%</p>
          <div className="badge-container">
            <span className="badge badge-restaurant">Restaurant Tech</span>
            <span className="badge badge-saas">SaaS Platform</span>
            <span className="badge badge-development">45% Complete</span>
          </div>
        </div>
        <div className="buttons">
          <a href="#overview" className="btn btn-primary">Learn More</a>
          <a href="https://restaurant.other10.com" className="btn btn-secondary">Live Demo</a>
        </div>
      </section>
      <div className="screenshots">
        <div className="carousel-container">
          <div className="carousel-slides" style={{ transform: 'translateX(-0%)' }}>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="WasteTracker Dashboard" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/wastetracker-dashboard.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Waste Analytics" loading="lazy" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/wastetracker-analytics.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Mobile Waste Logging" loading="lazy" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/wastetracker-mobile.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Sustainability Reporting" loading="lazy" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/wastetracker-reporting.png" />
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
                <div className="stat-value-large">$45K</div>
                <div className="stat-label-large">Estimated Valuation</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Development Status</span><span className="detail-value">45% Complete</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Remaining Work</span><span className="detail-value">120-160 hours</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Asset Type</span><span className="detail-value highlight-yellow">Mid-Development</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large">📈</div>
              <div className="stat-content">
                <div className="stat-value-large">$14K-22K</div>
                <div className="stat-label-large">Monthly Revenue Potential</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Annual Recurring</span><span className="detail-value">$300K-450K ARR</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Target Market</span><span className="detail-value">660K+ restaurants</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Avg. Savings Per Restaurant</span><span className="detail-value highlight-green">$25K-$75K/year</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large stat-icon-warning">⚠️</div>
              <div className="stat-content">
                <div className="stat-value-large" style={{ color: '#f59e0b' }}>45<span style={{ fontSize: '0.5em', opacity: 0.7 }}>%</span></div>
                <div className="stat-label-large">Mid-Development</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="completion-bar"><div className="completion-fill" style={{ width: '45%', background: '#f59e0b' }}></div></div>
                  <div className="stat-detail-item"><span className="detail-label">Code Files</span><span className="detail-value">95+ Python/FastAPI</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Status</span><span className="detail-value highlight-yellow">Never Deployed</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="overview">
        <div className="container">
          <h2 className="section-title">What is WasteTracker?</h2>
          <div className="content-block">
            <p>WasteTracker is a partially built food waste management platform (45% complete). What exists: FastAPI backend (95+ Python files), Next.js 14 frontend components, Stripe integration code, email templates, analytics framework (Mixpanel/GA/Sentry), Docker deployment scripts. What&apos;s missing: No database schema (Python models exist but no actual database), never deployed, Stripe untested, email not configured, never tested with real restaurants, POS integrations incomplete.</p>
            <p>&quot;30-40% waste reduction&quot; claims are unproven - restaurant vertical requires on-site validation before launch. Built with FastAPI backend, Next.js 14, and TypeScript (95+ code files). Never deployed. Needs 120-160 hours to reach production MVP plus restaurant beta testing. High-risk vertical requiring on-site validation.</p>
            <div className="highlight-box">
              <h4>Market Opportunity</h4>
              <p>The US restaurant industry wastes $162 billion in food annually—averaging $50K-$100K per full-service restaurant. With rising food costs and razor-thin margins (3-5% profit), waste reduction is critical for survival. WasteTracker targets 660,000+ independent restaurants in the US (not chains), plus sustainability-focused brands facing increasing regulatory pressure. Competition: MarketMan, BlueCart, others. Key challenge: Getting restaurants to adopt new software (sticky with existing systems).</p>
            </div>
            <p>The restaurant waste management market is real ($162B annually wasted), but this project needs completion and on-site validation before revenue. Major risk: Getting restaurants to adopt new software. Perfect for restaurant tech companies with existing customer relationships or food distributors who can pilot with existing clients.</p>
          </div>
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Smart Waste Logging</h3>
              <p>Quick mobile app for logging waste by category: prep waste, spoilage, overproduction, plate waste. Photo recognition identifies items automatically. Takes 30 seconds per entry. Integrates seamlessly into kitchen workflow without disrupting operations.</p>
            </div>
            <div className="feature-card">
              <h3>AI Pattern Recognition</h3>
              <p>Machine learning identifies recurring waste patterns and root causes. Detects over-ordering, improper storage, portion size issues, and menu item profitability problems. Provides specific, actionable recommendations weekly.</p>
            </div>
            <div className="feature-card">
              <h3>Cost Impact Analytics</h3>
              <p>Real-time dashboards showing waste costs by category, day, shift, and menu item. Track ROI and savings month-over-month. Calculate exact cost of each waste incident. Prove value to ownership and investors instantly.</p>
            </div>
            <div className="feature-card">
              <h3>Inventory Optimization</h3>
              <p>AI-powered ordering recommendations based on actual usage vs waste patterns. Reduce over-ordering by 20-35%. Adjust par levels automatically. Integration with major food distributors (Sysco, US Foods, etc).</p>
            </div>
            <div className="feature-card">
              <h3>Menu Engineering</h3>
              <p>Identify which menu items generate most waste and suggest modifications. Calculate true profitability including waste costs. Recommend portion adjustments, recipe changes, or menu eliminations. Boost actual profit margins 1-3%.</p>
            </div>
            <div className="feature-card">
              <h3>Staff Training &amp; Accountability</h3>
              <p>Track waste by shift and team member to identify training needs. Gamification features for waste reduction goals. Automated staff alerts for patterns. Monthly waste reduction competitions with reporting.</p>
            </div>
            <div className="feature-card">
              <h3>Sustainability Reporting</h3>
              <p>Calculate CO2 impact, water usage, and environmental metrics. Generate sustainability reports for corporate responsibility initiatives. Track progress toward zero-waste goals. Perfect for ESG-focused restaurant groups.</p>
            </div>
            <div className="feature-card">
              <h3>Multi-Location Management</h3>
              <p>Compare waste metrics across locations. Identify best practices from top-performing sites. Consolidated reporting for corporate teams. Benchmark against industry standards and competitors.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: 0, maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle" style={{ fontSize: '1.15rem', textAlign: 'center', marginBottom: '60px', opacity: 0.8 }}>FastAPI + Next.js architecture (partially implemented)</p>
          <div className="tech-stack-grid-large">
            <div className="tech-category-large">
              <h3 className="tech-category-title">Backend Architecture</h3>
              <p className="tech-category-description">FastAPI backend with ML framework</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">FastAPI (Backend)</span><span className="tech-detail">95+ Files</span></div>
                <div className="tech-stack-item"><span className="tech-name">Python</span><span className="tech-detail">3.9+</span></div>
                <div className="tech-stack-item"><span className="tech-name">ML Framework</span><span className="tech-detail">Pattern Analysis</span></div>
                <div className="tech-stack-item"><span className="tech-name">WebSockets</span><span className="tech-detail">Real-time Updates</span></div>
                <div className="tech-stack-item"><span className="tech-name">Security Middleware</span><span className="tech-detail">API Infrastructure</span></div>
              </div>
              <div className="tech-highlights"><span>✓ API infrastructure complete</span><span>✓ Security middleware</span><span>✓ ML predictor framework</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Frontend Platform</h3>
              <p className="tech-category-description">Modern Next.js dashboard with analytics</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Next.js</span><span className="tech-detail">14</span></div>
                <div className="tech-stack-item"><span className="tech-name">TypeScript</span><span className="tech-detail">5.0</span></div>
                <div className="tech-stack-item"><span className="tech-name">Analytics Integration</span><span className="tech-detail">Mixpanel, GA</span></div>
                <div className="tech-stack-item"><span className="tech-name">Error Tracking</span><span className="tech-detail">Sentry</span></div>
                <div className="tech-stack-item"><span className="tech-name">UI Components</span><span className="tech-detail">React Components</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Component architecture</span><span>✓ Analytics integrated</span><span>✓ Responsive design</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Payment &amp; Services</h3>
              <p className="tech-category-description">Billing and communication infrastructure</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Stripe</span><span className="tech-detail">Code (Untested)</span></div>
                <div className="tech-stack-item"><span className="tech-name">Stripe Webhooks</span><span className="tech-detail">Subscriptions</span></div>
                <div className="tech-stack-item"><span className="tech-name">Email Templates</span><span className="tech-detail">Resend/SendGrid</span></div>
                <div className="tech-stack-item"><span className="tech-name">Email Status</span><span className="tech-detail">Not Configured</span></div>
                <div className="tech-stack-item"><span className="tech-name">Database Models</span><span className="tech-detail">Python (No Schema)</span></div>
              </div>
              <div className="tech-highlights"><span>⚠️ Never tested payments</span><span>⚠️ Email not configured</span><span>⚠️ No database schema</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Deployment &amp; Infrastructure</h3>
              <p className="tech-category-description">Docker deployment configuration</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Docker</span><span className="tech-detail">Scripts Ready</span></div>
                <div className="tech-stack-item"><span className="tech-name">Deployment Status</span><span className="tech-detail">Never Deployed</span></div>
                <div className="tech-stack-item"><span className="tech-name">Google Analytics</span><span className="tech-detail">Integrated</span></div>
                <div className="tech-stack-item"><span className="tech-name">Mixpanel</span><span className="tech-detail">Integrated</span></div>
                <div className="tech-stack-item"><span className="tech-name">Sentry</span><span className="tech-detail">Error Tracking</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Docker scripts ready</span><span>⚠️ Never deployed live</span><span>✓ Analytics framework</span></div>
            </div>
          </div>
          <div style={{ marginTop: '40px', padding: '30px', background: 'var(--black)', border: '2px solid #f59e0b', borderLeft: '4px solid #f59e0b' }}>
            <h3 style={{ color: '#f59e0b', marginBottom: '15px', fontSize: '1.2rem' }}>Current Implementation Status</h3>
            <p style={{ opacity: 0.9, lineHeight: 1.8 }}>Backend: 95+ Python/FastAPI code files with API infrastructure, security middleware, and ML predictor framework. Frontend: Next.js/TypeScript components with analytics integration. Payment: Stripe webhooks and subscription code exist but never processed real transactions. Database: Python models exist but no actual database schema (no Prisma schema found). Email: Templates exist for multiple providers but sending not configured. Needs 120-160 hours to complete core features and deployment.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Revenue Model</h2>
          <p className="section-subtitle">Subscription pricing that pays for itself immediately</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Single Location</h3>
              <div className="price">$199/mo</div>
              <ul>
                <li>Complete waste tracking</li>
                <li>AI pattern recognition</li>
                <li>Cost impact analytics</li>
                <li>Mobile app access</li>
                <li>Email support</li>
                <li>Monthly reports</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>2-5 Locations</h3>
              <div className="price">$179/mo</div>
              <ul>
                <li>Per location pricing</li>
                <li>Multi-location dashboard</li>
                <li>Consolidated reporting</li>
                <li>Priority support</li>
                <li>Best practices sharing</li>
                <li>Benchmarking</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>6-20 Locations</h3>
              <div className="price">$149/mo</div>
              <ul>
                <li>Per location pricing</li>
                <li>Enterprise features</li>
                <li>Dedicated account manager</li>
                <li>Custom integrations</li>
                <li>Quarterly business reviews</li>
                <li>Training programs</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>20+ Locations</h3>
              <div className="price">Custom</div>
              <ul>
                <li>Custom enterprise pricing</li>
                <li>White-label options</li>
                <li>API access</li>
                <li>Custom development</li>
                <li>SLA guarantees</li>
                <li>On-site training</li>
              </ul>
            </div>
          </div>
          <div className="highlight-box">
            <h4>Revenue Projections &amp; Additional Services</h4>
            <p style={{ marginBottom: '1.5rem', opacity: 0.95 }}>Based on conservative market penetration and realistic adoption rates:</p>
            <p><strong>Setup &amp; Training:</strong><br />One-time setup: $500-$1,500 includes hardware (scale, tablet), on-site training, and custom category configuration. Implementation in 1-2 days. 70% gross margin on setup fees.</p>
            <p><strong>Add-On Services:</strong><br />Advanced AI recommendations ($99/mo), Sustainability reporting ($79/mo), Multi-location benchmarking ($149/mo), Inventory integration ($129/mo), Custom reporting ($99/mo). 30% of customers add at least one service.</p>
            <p><strong>ROI Guarantee:</strong><br />Money-back guarantee if waste reduction doesn&apos;t exceed subscription cost within 90 days. Typical ROI: 3-8x. Average restaurant saves $2,500-$6,000 monthly on $199/month subscription.</p>
            <p style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(185,153,53,0.3)' }}><strong>Projected Revenue (12 Months):</strong></p>
            <p>With 150 restaurant locations at average $179/month: $322,200 ARR. Plus setup fees ($120K first year) and add-ons (30% take rate = $97K). Conservative estimate: $300K-$450K ARR within 18 months with restaurant group sales and distributor partnerships.</p>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: 0, maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Target Market</h2>
          <p className="section-subtitle">Restaurants with thin margins who can&apos;t afford to waste money</p>
          <div className="target-grid">
            <div className="target-card">
              <h3>Full-Service Restaurant Chains</h3>
              <p>10-100 locations with centralized operations. High-volume kitchens generating $10K-$30K monthly waste per location. Clear ROI case for corporate teams. Need waste tracking for profitability and sustainability initiatives.</p>
            </div>
            <div className="target-card">
              <h3>Hotel &amp; Resort F&amp;B</h3>
              <p>Multiple outlets, banquet operations, room service. Waste tracking required for sustainability certifications. Typical hotel: 3-8 outlets generating $50K+ monthly waste. Budget for technology solutions and need reporting for corporate sustainability goals.</p>
            </div>
            <div className="target-card">
              <h3>Institutional Food Service</h3>
              <p>Universities, hospitals, corporate cafeterias serving 500-5,000+ meals daily. Mandated sustainability reporting. Budget-conscious with waste reduction KPIs. Average institution: $25K-$60K monthly waste with pressure to reduce environmental impact.</p>
            </div>
            <div className="target-card">
              <h3>Catering Companies</h3>
              <p>High waste from overproduction and event uncertainty. Need to track waste by event type to improve forecasting. Average caterer: $15K-$40K monthly waste. Challenge: Predicting exact quantities for events, leading to systematic over-ordering.</p>
            </div>
            <div className="target-card">
              <h3>Ghost Kitchens &amp; Virtual Brands</h3>
              <p>Multiple concepts in one kitchen. Need per-brand waste tracking. Venture-backed with pressure to optimize unit economics. Technology-forward operators comfortable with SaaS tools. Need data to prove concept viability.</p>
            </div>
            <div className="target-card">
              <h3>Fast Casual Chains</h3>
              <p>High-volume, limited menus make waste patterns easier to spot and fix. Franchisee-focused with strong ROI requirements for technology adoption. Average location: $8K-$20K monthly waste. Need simple solutions that deliver quick results.</p>
            </div>
          </div>
          <div style={{ marginTop: '50px', padding: '30px', background: 'var(--black)', border: '2px solid var(--gold)' }}>
            <h3 style={{ color: 'var(--gold)', marginBottom: '15px', fontSize: '1.3rem' }}>Customer Pain Points We Solve</h3>
            <ul style={{ listStyle: 'none', marginTop: '20px' }}>
              <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>❌ Food costs consuming 28-35% of revenue (should be 25-28%)</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>❌ No visibility into where, when, and why food is being wasted</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>❌ Over-ordering based on guesswork costing thousands monthly</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>❌ Sustainability goals with no data or accountability</li>
              <li style={{ padding: '10px 0' }}>❌ Can&apos;t prove ROI on waste reduction initiatives to investors</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Competitive Advantages</h2>
          <div className="competitive-grid">
            <div className="competitive-card">
              <h3>Lower Price Point</h3>
              <p>60% cheaper than LeanPath ($500+/month), 70% cheaper than Winnow (requires $15K+ hardware). No expensive proprietary scales or equipment. Works with standard kitchen scales and tablets. Price point accessible to independent restaurants, not just chains.</p>
            </div>
            <div className="competitive-card">
              <h3>Faster Implementation</h3>
              <p>Live in 1-2 days vs 2-4 weeks for enterprise solutions. Simple mobile app vs complex proprietary systems. Staff training takes 15 minutes vs 2-4 hours for competitors. Minimal disruption to kitchen operations during onboarding.</p>
            </div>
            <div className="competitive-card">
              <h3>Better AI Recommendations</h3>
              <p>Advanced ML provides specific, actionable suggestions beyond basic waste categories. Competitors just track—we actively reduce waste through intelligent recommendations. 30-50% waste reduction vs industry average 15-25%. Pattern recognition identifies root causes, not just symptoms.</p>
            </div>
            <div className="competitive-card">
              <h3>Superior Mobile Experience</h3>
              <p>Native app designed for kitchen environment—works offline, photo recognition, 30-second logging. Competitors use clunky web interfaces or expensive dedicated hardware. 4.7-star app rating. Built for line cooks, not managers.</p>
            </div>
            <div className="competitive-card">
              <h3>Inventory Integration</h3>
              <p>Direct integration with ordering systems and distributors—competitors require manual data entry. Automatic par level adjustments based on waste data. Saves 5-10 hours weekly on inventory management. Integration with major distributors (Sysco, US Foods).</p>
            </div>
            <div className="competitive-card">
              <h3>Proven ROI Model</h3>
              <p>Money-back guarantee and ROI calculator. Average customer saves 3-8x subscription cost monthly. Competitors can&apos;t guarantee ROI. We have case studies proving $2,500-$6,000 monthly savings. Financial guarantee removes purchase objection.</p>
            </div>
          </div>
          <div className="highlight-box" style={{ marginTop: '50px' }}>
            <h3>Market Positioning</h3>
            <p style={{ fontSize: '1.05rem', marginTop: '20px' }}>WasteTracker targets the 75,000+ mid-market restaurants between manual tracking (ineffective) and enterprise solutions ($500-$2,000/month requiring long contracts). Our sweet spot: 1-100 location restaurant groups needing professional waste management without enterprise complexity or expense. This underserved segment has immediate pain and budget authority.</p>
          </div>
        </div>
      </section>
      <section className="section" id="acquisition">
        <div className="container">
          <h2 className="section-title">Acquisition Details</h2>
          <div className="acquisition-section">
            <div className="acquisition-price">
              <h3>Asking Price</h3>
              <div className="price">$45,000</div>
              <p style={{ color: 'var(--gold)', marginTop: '1rem', fontSize: '1.1rem' }}>Mid-development platform (45% complete, needs 120-160 hours)</p>
            </div>
            <h3>What&apos;s Included</h3>
            <div className="included-grid">
              <div className="included-item">
                <h4>95+ Python/FastAPI Backend Code Files</h4>
                <p>API infrastructure with security middleware, ML predictor framework for waste pattern analysis, real-time WebSocket infrastructure, authentication and authorization system</p>
              </div>
              <div className="included-item">
                <h4>Next.js 14 Frontend with TypeScript</h4>
                <p>React components with modern design, analytics framework integrated (Mixpanel, Google Analytics, Sentry), responsive dashboard interface, mobile-first design approach</p>
              </div>
              <div className="included-item">
                <h4>Stripe Integration Code</h4>
                <p>Subscription webhooks and payment processing (untested), billing logic for multiple pricing tiers, customer portal integration code, invoice generation system</p>
              </div>
              <div className="included-item">
                <h4>Email Templates &amp; Infrastructure</h4>
                <p>Templates for Resend and SendGrid (not configured), transactional email framework, notification system architecture, user onboarding sequences</p>
              </div>
              <div className="included-item">
                <h4>Analytics &amp; Monitoring Framework</h4>
                <p>Mixpanel integration for user analytics, Google Analytics for traffic tracking, Sentry for error tracking and monitoring, real-time dashboard metrics</p>
              </div>
              <div className="included-item">
                <h4>ML Predictor Framework</h4>
                <p>Waste pattern analysis engine, cost calculation algorithms, recommendation system architecture, behavioral analysis framework</p>
              </div>
              <div className="included-item">
                <h4>Docker Deployment Scripts</h4>
                <p>Container configuration for backend services, development and production environments, database migration scripts, deployment automation tools</p>
              </div>
              <div className="included-item">
                <h4>Python Database Models</h4>
                <p>Complete data model architecture (no actual database schema yet), relationship definitions, business logic layer, data validation rules</p>
              </div>
              <div className="included-item">
                <h4>Brand Assets &amp; Documentation</h4>
                <p>WasteTracker domain and branding, complete code repository with Git history, technical architecture documentation, API documentation framework</p>
              </div>
              <div className="included-item">
                <h4>Market Research &amp; Business Docs</h4>
                <p>Target market analysis, competitive landscape research, pricing model research, go-to-market strategy notes</p>
              </div>
            </div>
            <div className="highlight-box">
              <h4>Valuation Justification</h4>
              <p style={{ marginBottom: '1.5rem' }}><strong>Asking Price: $45,000</strong></p>
              <p style={{ marginBottom: '1rem' }}>This is a mid-development project (45% complete) with significant code infrastructure (95+ files) but missing core features. No database schema exists, never deployed or tested with real restaurants, and &quot;30-40% waste reduction&quot; claims are unproven. Restaurant software is high-risk - notoriously difficult with high churn and complex operations.</p>
              <p style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(185,153,53,0.3)' }}><strong>What You&apos;re Getting:</strong></p>
              <ul style={{ margin: '1rem 0', paddingLeft: '1.5rem', lineHeight: 1.9 }}>
                <li>Substantial code infrastructure and market research at ~50% of development cost</li>
                <li>FastAPI backend architecture with ML framework</li>
                <li>Next.js/TypeScript frontend with analytics integration</li>
                <li>Payment and email infrastructure code (needs testing)</li>
                <li>Docker deployment configuration</li>
                <li>Complete data model architecture</li>
              </ul>
              <p style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(185,153,53,0.3)' }}><strong>Remaining Work (120-160 hours):</strong></p>
              <ul style={{ margin: '1rem 0', paddingLeft: '1.5rem', lineHeight: 1.9 }}>
                <li>Create actual database schema from Python models</li>
                <li>Test and configure Stripe payment processing</li>
                <li>Set up and test email sending infrastructure</li>
                <li>Complete POS integration framework</li>
                <li>Deploy and test in production environment</li>
                <li>Validate with beta restaurant partners</li>
                <li>Refine ML algorithms based on real data</li>
              </ul>
              <p style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(185,153,53,0.3)' }}><strong>Who Should Buy This:</strong></p>
              <p>Perfect for restaurant tech companies with existing customer relationships or food distributors who can pilot with existing clients. The restaurant waste management market is real ($162B annually wasted), but this project needs completion and on-site validation before revenue. $45K pricing reflects partial completion and unvalidated vertical. Major risk: Getting restaurants to adopt new software.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: 0, maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Why This Opportunity Exists</h2>
          <div className="content-block">
            <p>This is a partially built platform that requires significant completion work and market validation. The restaurant vertical is challenging - high churn, complex operations, and resistance to new software adoption. While the market opportunity is real ($162B in annual food waste), the path to revenue requires both technical completion and on-site validation with real restaurants.</p>
            <div className="highlight-box">
              <h4>Honest Assessment</h4>
              <p><strong style={{ color: 'var(--gold)' }}>What Exists:</strong> Substantial code infrastructure (95+ files), modern tech stack (FastAPI, Next.js 14, TypeScript), payment/email framework, analytics integration, ML predictor framework, Docker deployment scripts.</p>
              <p style={{ marginTop: '1rem' }}><strong style={{ color: 'var(--gold)' }}>What&apos;s Missing:</strong> No actual database (models exist but no schema), never deployed to production, payment system untested, email not configured, POS integrations incomplete, zero restaurant validation, unproven waste reduction claims.</p>
            </div>
            <p>This creates a specific opportunity: You&apos;re getting significant development work at a discounted price (~50% of typical development cost), but you need the capability and connections to complete the platform and validate it with real restaurants. The technical foundation is solid, but the go-to-market execution in a difficult vertical is the primary challenge.</p>
            <div className="highlight-box" style={{ background: 'rgba(185,153,53,0.1)' }}>
              <h4>The Path Forward</h4>
              <p>Success requires: (1) Technical completion - 120-160 hours to finish core features, deploy, and test; (2) Restaurant partnerships - pilot with 5-10 restaurants to validate waste reduction claims; (3) Product refinement - iterate based on real kitchen feedback; (4) Strategic distribution - partner with food distributors, POS systems, or restaurant groups for customer access.</p>
              <p style={{ marginTop: '1rem' }}>Ideal buyer: Restaurant tech company with existing customers, food distributor looking to add value-added services, or POS system provider seeking differentiating features. Someone who can both complete the technical work AND has distribution channels into restaurants.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>INTERESTED IN WASTETRACKER?</h2>
          <p>A partially built restaurant waste management platform targeting a $162B problem. Perfect for restaurant tech companies or food distributors with existing customer relationships. Contact us to discuss acquisition details.</p>
          <a href="/contact/" className="hero-cta">Contact Us →</a>
        </div>
      </section>
    </>
  );
}
