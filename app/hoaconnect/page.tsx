export default function HoaConnect() {
  return (
    <>
      <section className="hero">
        <div className="project-title container" style={{ textAlign: 'center' }}>
          <h1>HOA Connect</h1>
          <p className="project-tagline" style={{ fontSize: '1.4rem', lineHeight: 1.6, maxWidth: '900px', margin: '0 auto 20px' }}>Community Management Platform with Voting, Announcements, and Resident Portal for HOAs</p>
          <p style={{ color: 'var(--white)', opacity: 0.75, fontSize: '1.1rem', marginBottom: '30px' }}>FastAPI Backend + Next.js 15 Frontend for Modern HOA Management</p>
          <div className="badge-container">
            <span className="badge badge-saas">HOA Management</span>
            <span className="badge badge-api">Community Portal</span>
            <span className="badge badge-development">30% Complete</span>
          </div>
        </div>
        <div className="buttons">
          <a href="#overview" className="btn btn-primary">Learn More</a>
        </div>
      </section>
      <div className="screenshots">
        <div className="carousel-container">
          <div className="carousel-slides" style={{ transform: 'translateX(-0%)' }}>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="HOA Connect Dashboard" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/hoaconnect-dashboard.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Resident Portal" loading="lazy" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/hoaconnect-residents.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Voting System" loading="lazy" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/hoaconnect-voting.png" />
            </div>
          </div>
          <button className="carousel-nav carousel-prev" aria-label="Previous slide">‹</button>
          <button className="carousel-nav carousel-next" aria-label="Next slide">›</button>
          <div className="carousel-indicators">
            <div className="carousel-dot active" aria-label="Go to slide 1"></div>
            <div className="carousel-dot " aria-label="Go to slide 2"></div>
            <div className="carousel-dot " aria-label="Go to slide 3"></div>
          </div>
        </div>
      </div>
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid-enhanced">
            <div className="stat-card-enhanced">
              <div className="stat-icon-large">💰</div>
              <div className="stat-content">
                <div className="stat-value-large">$25K–$40K</div>
                <div className="stat-label-large">Asking Price</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Asset Type</span><span className="detail-value">30% Complete Platform</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Code Base</span><span className="detail-value">742 LOC Backend</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Time to Launch</span><span className="detail-value highlight-green">60–100 hours</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large">📈</div>
              <div className="stat-content">
                <div className="stat-value-large">$5K+ MRR</div>
                <div className="stat-label-large">Year 1 Target</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Annual Recurring</span><span className="detail-value">$60K ARR</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Target HOAs</span><span className="detail-value">50 communities</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Avg Revenue/HOA</span><span className="detail-value highlight-green">$100/month</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large stat-icon-check">✓</div>
              <div className="stat-content">
                <div className="stat-value-large" style={{ color: '#10b981' }}>30<span style={{ fontSize: '0.5em', opacity: 0.7 }}>%</span></div>
                <div className="stat-label-large">Complete</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="completion-bar"><div className="completion-fill" style={{ width: '30%' }}></div></div>
                  <div className="stat-detail-item"><span className="detail-label">Backend Code</span><span className="detail-value">742 lines FastAPI</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Remaining Work</span><span className="detail-value highlight-green">60–100 hours</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="overview">
        <div className="container">
          <h2 className="section-title">What is HOA Connect?</h2>
          <div className="content-block">
            <p>HOA Connect is a modern community management platform designed specifically for Homeowners Associations (HOAs). The platform streamlines community governance with online voting, announcements, resident portals, and assessment tracking. Built with FastAPI 0.104.1 backend and Next.js 15.5.4 frontend, the project is 30% complete with core infrastructure in place.</p>
            <p>The platform addresses the pain points of traditional HOA management by digitizing voting processes, centralizing community communications, and providing residents with 24/7 access to important documents and information. With 742 lines of backend code already written, the foundation includes authentication, database models, and API endpoints for core features.</p>
            <div className="highlight-box">
              <h4>Market Opportunity</h4>
              <p>There are over 365,000 HOAs in the United States managing 27.1 million homes and 75.5 million residents. The HOA management software market is growing rapidly as communities seek to modernize operations and improve resident engagement. Most existing solutions are expensive ($200-500/month) or outdated, creating opportunities for affordable, modern platforms.</p>
            </div>
            <p>HOA Connect targets small-to-medium HOAs (50-500 homes) that need professional tools without enterprise pricing. The platform will offer tiered pricing starting at $99/month, making it accessible to communities that currently rely on spreadsheets, email chains, and manual voting processes.</p>
          </div>
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Online Voting System</h3>
              <p>Secure digital voting for board elections, bylaw amendments, and community decisions. Ballot creation and management, real-time vote tracking, automatic result tallying, and voter verification. Eliminates the need for paper ballots and in-person meetings while ensuring transparency and security.</p>
            </div>
            <div className="feature-card">
              <h3>Community Announcements</h3>
              <p>Centralized communication hub for HOA board announcements, maintenance schedules, event notifications, and emergency alerts. Email and SMS notifications ensure residents stay informed. Categorized announcements with read receipts and comment threads for community engagement.</p>
            </div>
            <div className="feature-card">
              <h3>Resident Portal</h3>
              <p>Self-service portal where residents can view and pay assessments, access community documents (bylaws, CC&amp;Rs, meeting minutes), submit maintenance requests, and update contact information. 24/7 access reduces administrative burden on HOA boards and management companies.</p>
            </div>
            <div className="feature-card">
              <h3>Assessment Management</h3>
              <p>Track monthly/quarterly assessments, special assessments, and payment status. Automated payment reminders, late fee calculations, and payment history. Integration with Stripe for online payments. Generate financial reports for board meetings and annual audits.</p>
            </div>
            <div className="feature-card">
              <h3>Document Library</h3>
              <p>Centralized repository for governing documents, architectural guidelines, meeting minutes, financial reports, and vendor contracts. Version control and access permissions ensure proper document management. Searchable archive makes it easy to find historical information.</p>
            </div>
            <div className="feature-card">
              <h3>Meeting Management</h3>
              <p>Schedule board meetings and annual general meetings with agenda creation, RSVP tracking, and meeting minutes. Post-meeting summaries and action items. Virtual meeting integration for remote participation. Compliance with state laws for notice requirements and quorum tracking.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: 0, maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle" style={{ fontSize: '1.15rem', textAlign: 'center', marginBottom: '60px', opacity: 0.8 }}>742 lines of FastAPI backend with Next.js 15 frontend</p>
          <div className="tech-stack-grid-large">
            <div className="tech-category-large">
              <h3 className="tech-category-title">Backend Architecture</h3>
              <p className="tech-category-description">FastAPI with PostgreSQL for high-performance HOA management</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">FastAPI</span><span className="tech-detail">v0.104.1</span></div>
                <div className="tech-stack-item"><span className="tech-name">Python Backend</span><span className="tech-detail">742 LOC</span></div>
                <div className="tech-stack-item"><span className="tech-name">PostgreSQL</span><span className="tech-detail">Primary Database</span></div>
                <div className="tech-stack-item"><span className="tech-name">SQLAlchemy ORM</span><span className="tech-detail">Database Models</span></div>
                <div className="tech-stack-item"><span className="tech-name">Pydantic</span><span className="tech-detail">Data Validation</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Async/await support</span><span>✓ RESTful API design</span><span>✓ Type-safe validation</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Frontend Platform</h3>
              <p className="tech-category-description">Modern, responsive interface built with Next.js 15</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Next.js</span><span className="tech-detail">v15.5.4</span></div>
                <div className="tech-stack-item"><span className="tech-name">React</span><span className="tech-detail">v19 (Latest)</span></div>
                <div className="tech-stack-item"><span className="tech-name">TypeScript</span><span className="tech-detail">Type Safety</span></div>
                <div className="tech-stack-item"><span className="tech-name">Tailwind CSS</span><span className="tech-detail">Styling</span></div>
                <div className="tech-stack-item"><span className="tech-name">Responsive Design</span><span className="tech-detail">Mobile-First</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Server-side rendering</span><span>✓ SEO optimized</span><span>✓ Progressive web app</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Payments &amp; Auth</h3>
              <p className="tech-category-description">Secure payment processing and user authentication</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Stripe Integration</span><span className="tech-detail">Payment Gateway</span></div>
                <div className="tech-stack-item"><span className="tech-name">JWT Auth</span><span className="tech-detail">Secure Tokens</span></div>
                <div className="tech-stack-item"><span className="tech-name">OAuth 2.0</span><span className="tech-detail">SSO Support</span></div>
                <div className="tech-stack-item"><span className="tech-name">Bcrypt</span><span className="tech-detail">Password Hashing</span></div>
                <div className="tech-stack-item"><span className="tech-name">RBAC</span><span className="tech-detail">Role-Based Access</span></div>
              </div>
              <div className="tech-highlights"><span>✓ PCI compliant</span><span>✓ Secure by default</span><span>✓ Multi-role support</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Deployment &amp; Infrastructure</h3>
              <p className="tech-category-description">Cloud-ready deployment with modern DevOps practices</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Docker</span><span className="tech-detail">Containerization</span></div>
                <div className="tech-stack-item"><span className="tech-name">Vercel</span><span className="tech-detail">Frontend Hosting</span></div>
                <div className="tech-stack-item"><span className="tech-name">Railway/Render</span><span className="tech-detail">Backend Hosting</span></div>
                <div className="tech-stack-item"><span className="tech-name">GitHub Actions</span><span className="tech-detail">CI/CD Pipeline</span></div>
                <div className="tech-stack-item"><span className="tech-name">PostgreSQL Cloud</span><span className="tech-detail">Managed Database</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Auto-scaling</span><span>✓ Global CDN</span><span>✓ Automated deploys</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Revenue Model</h2>
          <p className="section-subtitle">Affordable pricing for HOAs of all sizes</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">$99/mo</div>
              <ul>
                <li>Up to 50 homes</li>
                <li>Online voting</li>
                <li>Announcements</li>
                <li>Document library</li>
                <li>Basic reporting</li>
                <li>Email support</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Professional</h3>
              <div className="price">$199/mo</div>
              <ul>
                <li>Up to 200 homes</li>
                <li>Assessment management</li>
                <li>Online payments</li>
                <li>Maintenance requests</li>
                <li>Advanced reporting</li>
                <li>Priority support</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">$399/mo</div>
              <ul>
                <li>Up to 500 homes</li>
                <li>White-label options</li>
                <li>Custom integrations</li>
                <li>Dedicated support</li>
                <li>Training sessions</li>
                <li>API access</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Management Co.</h3>
              <div className="price">Custom</div>
              <ul>
                <li>Unlimited communities</li>
                <li>Multi-tenant admin</li>
                <li>Bulk operations</li>
                <li>Revenue sharing</li>
                <li>Custom features</li>
                <li>Dedicated account rep</li>
              </ul>
            </div>
          </div>
          <div className="highlight-box">
            <h4>Revenue Projections</h4>
            <p style={{ marginBottom: '1.5rem', opacity: 0.95 }}>Conservative estimates based on HOA management market dynamics:</p>
            <p><strong>Year 1 - Foundation (50 HOAs):</strong><br />50 HOAs @ $100/mo average = $5K MRR = $60K ARR<br /><span style={{ color: 'var(--gold)' }}>Focus on local communities, word-of-mouth growth</span></p>
            <p><strong>Year 2 - Expansion (150 HOAs):</strong><br />150 HOAs @ $120/mo average = $18K MRR = $216K ARR<br /><span style={{ color: 'var(--gold)' }}>Partner with property management companies</span></p>
            <p><strong>Year 3 - Scale (400 HOAs):</strong><br />400 HOAs @ $140/mo average = $56K MRR = $672K ARR<br /><span style={{ color: 'var(--gold)' }}>Multi-state presence, management company partnerships</span></p>
            <p style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(185,153,53,0.3)' }}><strong>The Value Proposition:</strong> Most HOAs spend 10-20 hours/month on administrative tasks (voting coordination, payment tracking, document management). At $50/hour board member time value, that&apos;s $500-1,000/month in volunteer labor. HOA Connect at $99-199/month saves money while providing better tools and resident satisfaction.</p>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: 0, maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Target Market</h2>
          <p className="section-subtitle">365,000+ HOAs managing 75.5 million residents in the US</p>
          <div className="target-grid">
            <div className="target-card">
              <h3>Small HOAs (50-150 homes)</h3>
              <p>Volunteer-run boards struggling with manual processes. Currently using email chains, Google Sheets, and paper voting. Need affordable solution under $150/month. Pain: Time-consuming administrative work, low resident engagement, difficulty tracking payments. Annual market: $150M+ (150K HOAs × $100/mo average).</p>
            </div>
            <div className="target-card">
              <h3>Medium HOAs (150-500 homes)</h3>
              <p>Part-time administrators or small management companies. Using outdated software or juggling multiple tools. Budget $200-400/month for comprehensive solution. Pain: Disconnected systems, poor reporting, resident complaints about lack of transparency. Annual market: $300M+ (125K HOAs × $200/mo average).</p>
            </div>
            <div className="target-card">
              <h3>Property Management Companies</h3>
              <p>Companies managing 10-100+ HOAs needing white-label solution. Want to provide value-added services to clients while reducing operational costs. Pay per-HOA with bulk discounts. Pain: High software costs, time spent on routine tasks, client retention. Potential for managing thousands of communities through partnerships.</p>
            </div>
            <div className="target-card">
              <h3>HOA Boards Seeking Modernization</h3>
              <p>Tech-savvy board members pushing for digital transformation. Frustrated with poor resident participation in meetings and voting. Want to improve communication and transparency. Often have budget approved but need right solution. Pain: Low voter turnout, resident complaints, difficulty enforcing rules.</p>
            </div>
            <div className="target-card">
              <h3>Master-Planned Communities</h3>
              <p>Larger communities with multiple sub-associations. Need hierarchical structure and complex rule management. Budget for comprehensive solutions. Often have full-time staff. Pain: Coordinating multiple boards, maintaining consistency, resident database management. Premium pricing tier opportunity.</p>
            </div>
            <div className="target-card">
              <h3>Condo Associations</h3>
              <p>High-density urban and suburban condominiums. Similar needs to HOAs but often with larger budgets. Regular board meetings and frequent voting. Need robust document management for complex building operations. Strong demand for online payment systems due to higher assessment amounts.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Competitive Advantages</h2>
          <div className="competitive-grid">
            <div className="competitive-card">
              <h3>Affordable Modern Solution</h3>
              <p>Most HOA management software costs $200-500/month with outdated interfaces. HOA Connect offers modern Next.js 15 frontend at $99-199/month, making professional tools accessible to small HOAs. Our mobile-first design and intuitive UX reduce training time and increase resident adoption.</p>
            </div>
            <div className="competitive-card">
              <h3>Purpose-Built for HOAs</h3>
              <p>Unlike generic community platforms or over-engineered property management suites, HOA Connect focuses specifically on HOA governance needs: voting, announcements, assessments, and document management. No bloat, no unnecessary features, just what HOA boards need to operate effectively.</p>
            </div>
            <div className="competitive-card">
              <h3>Resident Engagement Focus</h3>
              <p>Most solutions are admin-focused with poor resident experiences. HOA Connect prioritizes resident portal UX to increase participation in voting, meetings, and community discussions. Higher engagement means better governance and reduced board conflicts. Mobile app ensures accessibility.</p>
            </div>
            <div className="competitive-card">
              <h3>Fast Implementation</h3>
              <p>Competitors require weeks of setup and training. HOA Connect has streamlined onboarding: import resident data via CSV, customize community settings, and launch in 2-3 days. Pre-built templates for bylaws, voting ballots, and announcements accelerate time-to-value.</p>
            </div>
            <div className="competitive-card">
              <h3>Modern Technology Stack</h3>
              <p>Built with FastAPI and Next.js 15 instead of legacy PHP/jQuery solutions. Real-time updates via WebSockets, mobile-responsive design, and cloud-native architecture. This means better performance, security, and user experience compared to 10-year-old platforms still in market.</p>
            </div>
            <div className="competitive-card">
              <h3>Management Company Partnership Model</h3>
              <p>White-label capabilities and bulk pricing make HOA Connect attractive to property management companies. Revenue-sharing model aligns incentives. One management company partnership can bring 20-100 HOAs at once, accelerating customer acquisition while reducing sales costs.</p>
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
              <div className="price">$25,000-$40,000</div>
              <p style={{ color: 'var(--gold)', marginTop: '1rem', fontSize: '1.1rem' }}>30% Complete - Foundation Ready</p>
            </div>
            <h3>What&apos;s Included</h3>
            <div className="included-grid">
              <div className="included-item">
                <h4>742 Lines Backend Code</h4>
                <p>FastAPI 0.104.1 with core API endpoints, authentication system, database models (Users, HOAs, Residents, Votes, Announcements, Assessments), SQLAlchemy ORM integration, and Pydantic validation schemas.</p>
              </div>
              <div className="included-item">
                <h4>Next.js 15 Frontend Setup</h4>
                <p>Project scaffolding with Next.js 15.5.4 and React 19. TypeScript configuration, routing structure, component architecture planned. Tailwind CSS setup for styling. Responsive design framework ready for development.</p>
              </div>
              <div className="included-item">
                <h4>Database Schema</h4>
                <p>Complete PostgreSQL schema design for multi-tenant HOA management. Tables for users, communities, residents, voting, announcements, documents, assessments, and payments. Relationships and indexes defined.</p>
              </div>
              <div className="included-item">
                <h4>Authentication System</h4>
                <p>JWT-based auth with bcrypt password hashing. User registration, login, password reset flows. Role-based access control (Board Member, Property Manager, Resident). Session management and token refresh logic.</p>
              </div>
              <div className="included-item">
                <h4>API Endpoints Foundation</h4>
                <p>RESTful API structure with endpoints for user management, HOA CRUD operations, resident directory, and basic voting functionality. FastAPI automatic documentation via Swagger/OpenAPI.</p>
              </div>
              <div className="included-item">
                <h4>Development Environment</h4>
                <p>Docker configuration for local development. PostgreSQL and Redis containers. Environment variable management. Git repository with commit history showing development progress.</p>
              </div>
              <div className="included-item">
                <h4>Technical Documentation</h4>
                <p>API documentation, database schema diagrams, architecture overview, and development roadmap. Setup instructions for local development environment.</p>
              </div>
              <div className="included-item">
                <h4>Business Documentation</h4>
                <p>Market analysis, competitive research, pricing strategy, customer personas, and go-to-market plan. Feature specifications and user stories for remaining development.</p>
              </div>
            </div>
            <div className="highlight-box">
              <h4>Valuation Justification</h4>
              <p style={{ marginBottom: '1.5rem' }}><strong>Asking Price: $25,000-$40,000</strong></p>
              <p style={{ marginBottom: '1rem' }}>This valuation reflects the <strong>30% complete</strong> state with working foundation:</p>
              <ul style={{ margin: '1rem 0', paddingLeft: '1.5rem', lineHeight: 1.9 }}>
                <li>742 lines of production-ready FastAPI backend code</li>
                <li>Database schema designed and implemented</li>
                <li>Authentication system working</li>
                <li>Next.js 15 frontend scaffolding in place</li>
                <li>Market research and business plan completed</li>
                <li>Development environment configured</li>
              </ul>
              <p style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(185,153,53,0.3)' }}><strong>The Completion Path:</strong></p>
              <p>Remaining 70% of development requires 60-100 hours of focused work: Complete voting system UI (15h), finish assessment management (12h), build resident portal (18h), implement document library (10h), add announcement system (8h), integrate Stripe payments (12h), testing and bug fixes (15-25h). Total investment to launch-ready: 2-3 weeks full-time.</p>
              <p style={{ marginTop: '1rem' }}>At 50 HOAs paying $100/month average, you reach $60K ARR. Standard SaaS valuation of 3-5x ARR = $180K-300K. That&apos;s a <strong>4.5-7.5x return</strong> on $40K investment within 12 months of completing development and executing go-to-market.</p>
              <p style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(185,153,53,0.3)' }}><strong>Why This Opportunity Exists:</strong></p>
              <p>The foundation is solid but requires dedicated focus to complete. The seller has validated the market opportunity and built the core infrastructure but lacks time to finish development while managing other projects. This creates opportunity for a developer or entrepreneur to complete the build and capture an underserved market.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Development Roadmap</h2>
          <div className="content-block">
            <h3 style={{ color: 'var(--gold)', marginBottom: '25px' }}>Remaining Work (60-100 hours)</h3>
            <div className="highlight-box" style={{ marginBottom: '30px' }}>
              <h4>Phase 1: Core Features (35-45 hours)</h4>
              <ul style={{ lineHeight: 1.9, marginLeft: '1.5rem' }}>
                <li><strong>Voting System UI (15h):</strong> Ballot creation wizard, vote casting interface, real-time results dashboard, voter verification flow</li>
                <li><strong>Assessment Management (12h):</strong> Payment tracking, invoice generation, late fee automation, payment history views</li>
                <li><strong>Document Library (10h):</strong> File upload/download, categorization, version control, permissions management</li>
                <li><strong>Announcements (8h):</strong> Post creation, category filters, email notification triggers, comment threads</li>
              </ul>
            </div>
            <div className="highlight-box" style={{ marginBottom: '30px' }}>
              <h4>Phase 2: Payments &amp; Portal (25-30 hours)</h4>
              <ul style={{ lineHeight: 1.9, marginLeft: '1.5rem' }}>
                <li><strong>Stripe Integration (12h):</strong> Payment processing, subscription management, webhook handling, PCI compliance</li>
                <li><strong>Resident Portal (18h):</strong> Dashboard, profile management, payment interface, document access, maintenance requests</li>
              </ul>
            </div>
            <div className="highlight-box">
              <h4>Phase 3: Polish &amp; Launch (15-25 hours)</h4>
              <ul style={{ lineHeight: 1.9, marginLeft: '1.5rem' }}>
                <li><strong>Testing &amp; QA (10-15h):</strong> Unit tests, integration tests, end-to-end testing, security audit</li>
                <li><strong>UI/UX Polish (5-10h):</strong> Design refinement, mobile optimization, accessibility improvements, error handling</li>
              </ul>
            </div>
            <p style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(185,153,53,0.1)', borderLeft: '4px solid var(--gold)', borderRadius: '4px' }}><strong style={{ color: 'var(--gold)' }}>Timeline:</strong> With focused development, the platform can be launch-ready in 2-3 weeks. First pilot HOA could be onboarded within 4 weeks of purchase, providing immediate validation and feedback for further refinement.</p>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>READY TO ACQUIRE HOA CONNECT?</h2>
          <p>A 30% complete HOA management platform with solid foundation and clear path to market. Contact us to discuss acquisition details.</p>
          <a href="/contact/" className="hero-cta">Contact Us →</a>
        </div>
      </section>
    </>
  );
}
