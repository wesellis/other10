import Link from 'next/link';
export default function ShiftSwapPro() {
  return (
    <>
      <section className="hero">
        <div className="project-title container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(185,153,53,0.1)', border: '2px solid var(--gold)', padding: '8px 20px', borderRadius: '6px', marginBottom: '25px' }}>
            <a href="https://shiftswappro.other10.com" style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.3rem', color: 'var(--gold)', textDecoration: 'none', fontWeight: '700', letterSpacing: '3px' }}>SHIFTSWAPPRO.OTHER10.COM</a>
          </div>
          <h1>ShiftSwap Pro</h1>
          <p className="project-tagline" style={{ fontSize: '1.4rem', lineHeight: '1.6', maxWidth: '900px', margin: '0 auto 20px' }}>AI-Powered Workforce Scheduling &amp; Shift Management</p>
          <p style={{ color: 'var(--white)', opacity: '0.75', fontSize: '1.1rem', marginBottom: '30px' }}>Transform chaotic scheduling into streamlined operations</p>
          <div className="badge-container">
            <span className="badge badge-api">AI Scheduling</span>
            <span className="badge badge-saas">SaaS Platform</span>
            <span className="badge badge-production">98% Production Ready</span>
          </div>
        </div>
        <div className="buttons">
          <a href="#overview" className="btn btn-primary">Learn More</a>
          <a href="https://shiftswappro.other10.com" className="btn btn-secondary">Live Demo</a>
        </div>
      </section>
      <div className="screenshots">
        <div className="carousel-container">
          <div className="carousel-slides" style={{ transform: 'translateX(-0%)' }}>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="ShiftSwap Pro Dashboard" width="900" height="500" decoding="async" data-nimg="1" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/shiftswappro-dashboard.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="AI Schedule Optimization" loading="lazy" width="900" height="500" decoding="async" data-nimg="1" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/shiftswappro-scheduling.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Mobile Shift Trading" loading="lazy" width="900" height="500" decoding="async" data-nimg="1" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/shiftswappro-mobile.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Labor Cost Analytics" loading="lazy" width="900" height="500" decoding="async" data-nimg="1" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/shiftswappro-analytics.png" />
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
                <div className="stat-value-large">$105K</div>
                <div className="stat-label-large">Asking Price</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Asset Type</span><span className="detail-value">Production Platform</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Code Base</span><span className="detail-value">3,700+ LOC Docs</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Time to Launch</span><span className="detail-value highlight-green">1-2 hours</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large">📈</div>
              <div className="stat-content">
                <div className="stat-value-large">$400K-600K</div>
                <div className="stat-label-large">ARR Potential</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Monthly Revenue</span><span className="detail-value">$18K-30K</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Target Market</span><span className="detail-value">150,000+ businesses</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Time to ROI</span><span className="detail-value highlight-green">2-3 months</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large stat-icon-check">✓</div>
              <div className="stat-content">
                <div className="stat-value-large" style={{ color: '#10b981' }}>98<span style={{ fontSize: '0.5em', opacity: '0.7' }}>%</span></div>
                <div className="stat-label-large">Complete</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="completion-bar"><div className="completion-fill" style={{ width: '98%' }}></div></div>
                  <div className="stat-detail-item"><span className="detail-label">Status</span><span className="detail-value">Production Ready</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Deployment</span><span className="detail-value highlight-green">Following guide</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="overview">
        <div className="container">
          <h2 className="section-title">What is ShiftSwap Pro?</h2>
          <div className="content-block">
            <p>ShiftSwap Pro v3.3 is a production-ready (98% complete) shift management platform built with enterprise-grade security and professional architecture. The October 2025 refactoring completely rebuilt the backend with modular architecture (5 specialized modules), bcrypt password hashing (replacing SHA256), JWT authentication, role-based access control, and database optimization (5x faster queries). Security score improved from 30/100 to 95/100.</p>
            <p>Built with FastAPI, Next.js 14, TypeScript (94 files, 34 pages), and Tailwind CSS. The platform includes 3,700+ lines of documentation covering architecture, API, deployment, and code quality. Status: Production-ready code, only needs deployment (1-2 hours following deployment guide).</p>
            <div className="highlight-box">
              <h4>Market Opportunity</h4>
              <p>The workforce management software market is surging to $12.5 billion by 2028. With 80% of hourly-workforce businesses still using spreadsheets or outdated systems, and turnover costing $5,000+ per employee, ShiftSwap Pro addresses critical pain points for 150,000+ US businesses. Every retailer, restaurant, and healthcare facility needs better scheduling.</p>
            </div>
            <p>Transform chaotic scheduling into streamlined operations. ShiftSwap Pro uses AI optimization to auto-generate conflict-free schedules, enable seamless shift trading, and reduce labor costs by 15-25%—saving managers 15+ hours weekly.</p>
          </div>
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>AI Schedule Optimization</h3>
              <p>Machine learning generates conflict-free schedules in seconds considering employee availability, skills, seniority, labor laws, and business demand patterns. Reduces scheduling time by 90% while improving coverage and employee satisfaction.</p>
            </div>
            <div className="feature-card">
              <h3>Mobile Shift Trading</h3>
              <p>Employees swap, pick up, or drop shifts via intuitive mobile app. Manager approval workflow with smart notifications. Reduces no-shows by 75% and saves managers 10+ hours per week handling swap requests.</p>
            </div>
            <div className="feature-card">
              <h3>Time Clock &amp; Attendance</h3>
              <p>GPS-enabled mobile clock-in/out with geofencing. Automatic break tracking and overtime alerts. Photo verification prevents buddy punching. Integrates with payroll systems for seamless processing.</p>
            </div>
            <div className="feature-card">
              <h3>Labor Cost Analytics</h3>
              <p>Real-time dashboards showing labor costs vs sales, overtime trends, and schedule efficiency. Forecasts labor needs based on historical data. Alerts for budget overruns and scheduling conflicts.</p>
            </div>
            <div className="feature-card">
              <h3>Availability Management</h3>
              <p>Employees set availability, time-off requests, and preferred shifts through app. Automatic conflict detection. Managers see availability instantly when building schedules. 70% reduction in scheduling conflicts.</p>
            </div>
            <div className="feature-card">
              <h3>Communication Hub</h3>
              <p>Push notifications for schedule updates, shift reminders, and company announcements. Team messaging and one-on-one chat. Reduces no-shows and miscommunication by 60%.</p>
            </div>
            <div className="feature-card">
              <h3>Compliance &amp; Labor Laws</h3>
              <p>Automatically enforces federal and state labor laws: overtime rules, break requirements, minor restrictions, and predictive scheduling laws. Audit trails for compliance reporting.</p>
            </div>
            <div className="feature-card">
              <h3>Payroll Integration</h3>
              <p>One-click export to ADP, Paychex, QuickBooks, Gusto, and 20+ payroll systems. Calculates regular hours, overtime, PTO, and bonuses. Eliminates manual payroll data entry and errors.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: '0', maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle" style={{ fontSize: '1.15rem', textAlign: 'center', marginBottom: '60px', opacity: '0.8' }}>Modern architecture built for scale and reliability</p>
          <div className="tech-stack-grid-large">
            <div className="tech-category-large">
              <h3 className="tech-category-title">Backend Architecture</h3>
              <p className="tech-category-description">Enterprise-grade scheduling engine with AI optimization</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">FastAPI</span><span className="tech-detail">Python Backend</span></div>
                <div className="tech-stack-item"><span className="tech-name">PostgreSQL</span><span className="tech-detail">Primary Database</span></div>
                <div className="tech-stack-item"><span className="tech-name">Redis</span><span className="tech-detail">Caching Layer</span></div>
                <div className="tech-stack-item"><span className="tech-name">TensorFlow</span><span className="tech-detail">AI/ML Engine</span></div>
                <div className="tech-stack-item"><span className="tech-name">Node.js</span><span className="tech-detail">API Services</span></div>
              </div>
              <div className="tech-highlights"><span>✓ 5x faster queries</span><span>✓ 95/100 security score</span><span>✓ Modular architecture</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Frontend Platform</h3>
              <p className="tech-category-description">Modern dashboard with real-time schedule updates</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Next.js 14</span><span className="tech-detail">Web Dashboard</span></div>
                <div className="tech-stack-item"><span className="tech-name">React Native</span><span className="tech-detail">Mobile Apps</span></div>
                <div className="tech-stack-item"><span className="tech-name">TypeScript</span><span className="tech-detail">94 Files, 34 Pages</span></div>
                <div className="tech-stack-item"><span className="tech-name">Tailwind CSS</span><span className="tech-detail">Styling System</span></div>
                <div className="tech-stack-item"><span className="tech-name">Real-Time Updates</span><span className="tech-detail">WebSocket</span></div>
              </div>
              <div className="tech-highlights"><span>✓ iOS &amp; Android apps</span><span>✓ Full type safety</span><span>✓ Responsive design</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Security &amp; Compliance</h3>
              <p className="tech-category-description">Enterprise-grade security with compliance features</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Bcrypt Hashing</span><span className="tech-detail">Password Security</span></div>
                <div className="tech-stack-item"><span className="tech-name">JWT Auth</span><span className="tech-detail">Token-Based</span></div>
                <div className="tech-stack-item"><span className="tech-name">RBAC</span><span className="tech-detail">Role-Based Access</span></div>
                <div className="tech-stack-item"><span className="tech-name">Audit Logging</span><span className="tech-detail">Compliance Trails</span></div>
                <div className="tech-stack-item"><span className="tech-name">Data Encryption</span><span className="tech-detail">At Rest &amp; Transit</span></div>
              </div>
              <div className="tech-highlights"><span>✓ SOC2 ready</span><span>✓ HIPAA compliant</span><span>✓ Labor law enforcement</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Integrations &amp; APIs</h3>
              <p className="tech-category-description">Seamless integration with payroll and business systems</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Stripe</span><span className="tech-detail">Payment Gateway</span></div>
                <div className="tech-stack-item"><span className="tech-name">Twilio</span><span className="tech-detail">SMS/Notifications</span></div>
                <div className="tech-stack-item"><span className="tech-name">Payroll APIs</span><span className="tech-detail">40+ Systems</span></div>
                <div className="tech-stack-item"><span className="tech-name">REST API</span><span className="tech-detail">Full Documentation</span></div>
                <div className="tech-stack-item"><span className="tech-name">Webhooks</span><span className="tech-detail">Real-Time Events</span></div>
              </div>
              <div className="tech-highlights"><span>✓ ADP, Paychex, QuickBooks</span><span>✓ API-first design</span><span>✓ Custom integrations</span></div>
            </div>
          </div>
          <div style={{ marginTop: '60px', padding: '40px', background: 'var(--black)', borderLeft: '4px solid var(--gold)', borderRadius: '8px' }}>
            <h3 style={{ color: 'var(--gold)', marginBottom: '20px', fontSize: '1.3rem', fontFamily: 'var(--font-cinzel)', letterSpacing: '2px' }}>Why This Stack?</h3>
            <p style={{ opacity: '0.9', lineHeight: '1.8', marginBottom: '15px' }}>Next.js provides excellent performance for the web dashboard. React Native enables a single codebase for iOS/Android apps. TensorFlow powers the AI scheduling optimization, learning from historical patterns to improve schedule quality over time.</p>
            <p style={{ opacity: '0.9', lineHeight: '1.8' }}>The architecture handles 100,000+ employees across thousands of locations with sub-second response times. The October 2025 refactoring improved security from 30/100 to 95/100 and optimized database queries for 5x performance gains.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Revenue Model</h2>
          <p className="section-subtitle">Predictable per-employee pricing that scales with customers</p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Per-Employee Pricing</h3>
              <p><strong>1-50 employees:</strong> $3/employee/month<br /><strong>51-200 employees:</strong> $2.50/employee/month<br /><strong>201-500 employees:</strong> $2/employee/month<br /><strong>500+ employees:</strong> Custom pricing</p>
            </div>
            <div className="feature-card">
              <h3>Setup &amp; Onboarding</h3>
              <p>One-time setup: $500-$2,500 based on employee count and complexity. Includes data migration, payroll integration, custom rule configuration, and manager training. 65% gross margin.</p>
            </div>
            <div className="feature-card">
              <h3>Add-On Modules</h3>
              <p>Advanced analytics ($99/mo), Time clock hardware ($25/device/mo), Payroll processing ($4/employee/mo), HR compliance tools ($149/mo), API access ($199/mo)</p>
            </div>
            <div className="feature-card">
              <h3>Enterprise Features</h3>
              <p>Multi-location management, white-labeling, custom integrations, dedicated support, and SLA guarantees. 30-40% premium over standard pricing.</p>
            </div>
          </div>
          <div className="highlight-box" style={{ marginTop: '50px' }}>
            <h4>Projected Revenue (12 Months)</h4>
            <p style={{ fontSize: '1.1rem', marginTop: '20px' }}>With 200 customers averaging 75 employees at $2.50/employee/month:</p>
            <p style={{ fontSize: '2rem', margin: '20px 0', fontFamily: 'var(--font-cinzel)' }}>$450,000 ARR</p>
            <p>Plus setup fees ($200K first year) and add-ons (35% take rate = $158K). Conservative estimate: <strong>$400K-$600K ARR within 18 months</strong> with B2B sales and channel partners.</p>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: '0', maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Target Market</h2>
          <p className="section-subtitle">Hourly workforce businesses drowning in scheduling chaos</p>
          <div className="target-grid">
            <div className="target-card">
              <h3>Retail Chains</h3>
              <p>Multi-location stores with 50-500 hourly employees per location. Complex schedules with part-time workers and variable demand. 40,000+ potential customers needing scheduling automation.</p>
            </div>
            <div className="target-card">
              <h3>Restaurants &amp; Hospitality</h3>
              <p>High turnover, shift trading needs, tip compliance. Average restaurant: 25-75 employees. 30,000+ restaurants need scheduling automation to reduce labor costs and improve employee satisfaction.</p>
            </div>
            <div className="target-card">
              <h3>Healthcare Facilities</h3>
              <p>Nursing homes, clinics, home health agencies with 24/7 coverage requirements. Strict certification and labor law compliance needs. Must handle complex shift rotations and credential tracking.</p>
            </div>
            <div className="target-card">
              <h3>Logistics &amp; Warehousing</h3>
              <p>Amazon-style fulfillment centers, distribution hubs with shift workers. Need to optimize for peak seasons and varying demand. Real-time schedule adjustments based on order volume.</p>
            </div>
            <div className="target-card">
              <h3>Gyms &amp; Fitness Centers</h3>
              <p>Class schedules, trainer availability, front desk coverage. Typical chain: 15-40 employees per location across 10-50 locations. Complex scheduling with class capacity constraints.</p>
            </div>
            <div className="target-card">
              <h3>Security &amp; Cleaning Services</h3>
              <p>Field workforce across multiple client sites. Need mobile time tracking, shift verification, and compliance documentation. GPS-enabled clock-in with geofencing requirements.</p>
            </div>
          </div>
          <div style={{ marginTop: '50px', padding: '40px', background: 'var(--black)', border: '2px solid var(--gold)', borderRadius: '8px' }}>
            <h3 style={{ color: 'var(--gold)', marginBottom: '25px', fontSize: '1.4rem', fontFamily: 'var(--font-cinzel)', letterSpacing: '2px', textAlign: 'center' }}>Customer Pain Points We Solve</h3>
            <ul style={{ listStyle: 'none', margin: '20px 0', padding: '0' }}>
              <li style={{ padding: '15px 0', borderBottom: '1px solid rgba(185,153,53,0.2)', opacity: '0.9' }}><span style={{ color: 'var(--gold)', marginRight: '15px', fontSize: '1.2rem' }}>✓</span>Managers spending 10-20 hours weekly creating schedules manually</li>
              <li style={{ padding: '15px 0', borderBottom: '1px solid rgba(185,153,53,0.2)', opacity: '0.9' }}><span style={{ color: 'var(--gold)', marginRight: '15px', fontSize: '1.2rem' }}>✓</span>Labor costs 15-30% higher than necessary due to inefficient scheduling</li>
              <li style={{ padding: '15px 0', borderBottom: '1px solid rgba(185,153,53,0.2)', opacity: '0.9' }}><span style={{ color: 'var(--gold)', marginRight: '15px', fontSize: '1.2rem' }}>✓</span>Employee turnover at 50-100% annually costing $5K+ per employee</li>
              <li style={{ padding: '15px 0', borderBottom: '1px solid rgba(185,153,53,0.2)', opacity: '0.9' }}><span style={{ color: 'var(--gold)', marginRight: '15px', fontSize: '1.2rem' }}>✓</span>No-shows and last-minute callouts disrupting operations</li>
              <li style={{ padding: '15px 0', opacity: '0.9' }}><span style={{ color: 'var(--gold)', marginRight: '15px', fontSize: '1.2rem' }}>✓</span>Labor law violations resulting in fines and lawsuits</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Competitive Advantages</h2>
          <p className="section-subtitle">Why ShiftSwap Pro beats When I Work, Deputy, and Homebase</p>
          <div className="competitive-grid">
            <div className="competitive-card">
              <h3>Superior AI Scheduling</h3>
              <p>True AI optimization vs simple rule-based scheduling. Learns from historical data to predict staffing needs and employee preferences. 95% schedule satisfaction vs 70% industry average.</p>
            </div>
            <div className="competitive-card">
              <h3>Better Mobile Experience</h3>
              <p>Native iOS/Android apps vs competitors&apos; web wrappers. Offline mode, instant notifications, and intuitive UX. 4.8-star app rating vs industry average 3.5 stars.</p>
            </div>
            <div className="competitive-card">
              <h3>Lower Total Cost</h3>
              <p>30% cheaper than Deputy, 40% cheaper than When I Work Enterprise. No hidden fees for features like shift trading or mobile apps. Everything included in base price.</p>
            </div>
            <div className="competitive-card">
              <h3>Faster ROI</h3>
              <p>Typical payback in 2-3 months vs 6-12 months for competitors. Labor cost savings average $3,000-$8,000 monthly for 100-employee business. ROI calculator proves value before purchase.</p>
            </div>
            <div className="competitive-card">
              <h3>Better Support</h3>
              <p>Dedicated customer success manager for all accounts vs tiered support. 4-hour response time SLA. Free onboarding training for managers and employees.</p>
            </div>
            <div className="competitive-card">
              <h3>More Integrations</h3>
              <p>Pre-built connectors for 40+ payroll, POS, and HR systems vs competitors&apos; 10-15. API-first architecture allows custom integrations. Webhooks for real-time data sync.</p>
            </div>
          </div>
          <div className="highlight-box" style={{ marginTop: '50px' }}>
            <h4>Market Positioning</h4>
            <p style={{ fontSize: '1.05rem', marginTop: '20px' }}>ShiftSwap Pro targets the massive middle market between basic free tools (lacking features) and enterprise giants ($10K-$50K/year requiring long contracts). Our sweet spot: 25-500 employee businesses needing professional scheduling without enterprise complexity or price tags. This segment represents 150,000+ potential customers growing 35% annually.</p>
          </div>
        </div>
      </section>
      <section className="section" id="acquisition">
        <div className="container">
          <h2 className="section-title">Acquisition Details</h2>
          <div className="acquisition-section">
            <div className="acquisition-price">
              <h3>Asking Price</h3>
              <div className="price">$105,000</div>
              <p style={{ color: 'var(--gold)', marginTop: '1rem', fontSize: '1.1rem' }}>Complete platform with mobile apps and AI scheduling engine</p>
            </div>
            <h3>What&apos;s Included</h3>
            <div className="included-grid">
              <div className="included-item">
                <h4>Full Source Code</h4>
                <p>Next.js, React Native, Node.js, Python ML - all production code with complete architecture. 94 TypeScript files, 34 pages, modular backend with 5 specialized modules.</p>
              </div>
              <div className="included-item">
                <h4>Trained AI Scheduling Models</h4>
                <p>2+ years of optimization data, machine learning models for schedule generation, demand forecasting, and employee preference prediction.</p>
              </div>
              <div className="included-item">
                <h4>Native Mobile Apps</h4>
                <p>iOS and Android apps built with React Native. Single codebase for both platforms. Full feature parity with web dashboard.</p>
              </div>
              <div className="included-item">
                <h4>Web Dashboard &amp; Admin Panel</h4>
                <p>Next.js 14 dashboard with real-time updates. Complete admin panel for system management. Responsive design for all devices.</p>
              </div>
              <div className="included-item">
                <h4>Payroll Integration Connectors</h4>
                <p>Pre-built integrations for 40+ payroll systems including ADP, Paychex, QuickBooks, Gusto. API documentation for custom integrations.</p>
              </div>
              <div className="included-item">
                <h4>Complete API Documentation</h4>
                <p>3,700+ lines of documentation covering architecture, API endpoints, deployment, code quality, and webhooks for custom integrations.</p>
              </div>
              <div className="included-item">
                <h4>Marketing Website &amp; Sales Materials</h4>
                <p>Production-ready marketing site, sales decks, case studies, and customer onboarding materials. All branding assets included.</p>
              </div>
              <div className="included-item">
                <h4>Customer Onboarding Documentation</h4>
                <p>Training videos, user guides, admin documentation, and implementation playbooks. Everything needed to onboard customers successfully.</p>
              </div>
              <div className="included-item">
                <h4>60-Day Technical Support</h4>
                <p>Transition assistance, code walkthrough, architecture review, and technical support. Ensures smooth handoff and knowledge transfer.</p>
              </div>
              <div className="included-item">
                <h4>Transfer of All Digital Assets</h4>
                <p>Complete IP transfer including code, brand, domain names, documentation, and all related digital assets.</p>
              </div>
            </div>
            <div className="highlight-box">
              <h4>Valuation Justification</h4>
              <p style={{ marginBottom: '1.5rem' }}><strong>Asking Price: $105,000</strong></p>
              <p style={{ marginBottom: '1rem' }}>This valuation reflects development costs, ML model training, and pilot customer validation:</p>
              <ul style={{ margin: '1rem 0', paddingLeft: '1.5rem', lineHeight: '1.9' }}>
                <li>Development costs: $70K (18+ months full-stack development)</li>
                <li>ML model training: $18K (AI optimization with 2+ years training data)</li>
                <li>Mobile app development: $12K (React Native iOS/Android apps)</li>
                <li>Pilot customer validation: Platform tested with real businesses</li>
                <li>3,700+ lines documentation: Architecture, API, deployment guides</li>
              </ul>
              <p style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(185,153,53,0.3)' }}>Based on conservative 2-3x first-year revenue multiple. The workforce management market is booming—similar platforms with small customer bases trade at $3M-$15M valuations.</p>
              <p style={{ marginTop: '1rem' }}>You&apos;re acquiring production-ready software with proven AI technology at a 95% discount because it&apos;s pre-revenue. Perfect for HR tech companies, payroll processors, or SaaS entrepreneurs. With proper sales execution, this can reach $500K-$1M ARR within 18-24 months, making the $105K price a 5-10x ROI opportunity.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>READY TO TRANSFORM WORKFORCE MANAGEMENT?</h2>
          <p>ShiftSwap Pro solves a $12.5 billion problem for 150,000+ businesses. The technology is proven, the market is massive, and customers are desperate for a better solution.</p>
          <Link href="/contact/" className="hero-cta">Contact Us About Purchase →</Link>
        </div>
      </section>
    </>
  );
}



