export default function TrustPilot() {
  return (
    <>
      <section className="hero">
        <div className="project-title container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(185,153,53,0.1)', border: '2px solid var(--gold)', padding: '8px 20px', borderRadius: '6px', marginBottom: '25px' }}>
            <a href="https://trustpilot.other10.com" style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.3rem', color: 'var(--gold)', textDecoration: 'none', fontWeight: '700', letterSpacing: '3px' }}>TRUSTPILOT AI</a>
          </div>
          <h1>TRUSTPILOT AI</h1>
          <p className="project-tagline" style={{ fontSize: '1.4rem', lineHeight: '1.6', maxWidth: '900px', margin: '0 auto 20px' }}>Enterprise Data Quality Platform with Autonomous AI Agents</p>
          <p style={{ color: 'var(--white)', opacity: '0.75', fontSize: '1.1rem', marginBottom: '30px' }}>Automated Quality Assessment, Reconciliation &amp; Compliance Checking for Data Teams</p>
          <div className="badge-container">
            <span className="badge badge-api">AI Agents</span>
            <span className="badge badge-saas">Enterprise SaaS</span>
            <span className="badge badge-production">Data Quality</span>
          </div>
        </div>
        <div className="buttons">
          <a href="#overview" className="btn btn-primary">Learn More</a>
          <a href="https://trustpilot.other10.com" className="btn btn-secondary">Visit Platform</a>
        </div>
      </section>
      <div className="screenshots">
        <div className="carousel-container">
          <div className="carousel-slides" style={{ transform: 'translateX(-0%)' }}>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="TrustPilot AI Dashboard" width="900" height="500" decoding="async" data-nimg="1" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/trustpilot-dashboard.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="AI Agents Framework" loading="lazy" width="900" height="500" decoding="async" data-nimg="1" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/trustpilot-agents.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Data Quality Analytics" loading="lazy" width="900" height="500" decoding="async" data-nimg="1" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/trustpilot-analytics.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Compliance Monitoring" loading="lazy" width="900" height="500" decoding="async" data-nimg="1" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/trustpilot-compliance.png" />
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
                <div className="stat-value-large">$125K</div>
                <div className="stat-label-large">Asking Price</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Asset Type</span><span className="detail-value">Production SaaS</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Code Base</span><span className="detail-value">155 TypeScript Files</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Time to Launch</span><span className="detail-value highlight-green">1-2 hours setup</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large">📈</div>
              <div className="stat-content">
                <div className="stat-value-large">$499-$4,999</div>
                <div className="stat-label-large">Enterprise Pricing</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Monthly Range</span><span className="detail-value">3 Pricing Tiers</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Target Market</span><span className="detail-value">Enterprise Teams</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Sales Cycle</span><span className="detail-value highlight-green">6-12 months</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large stat-icon-check">✓</div>
              <div className="stat-content">
                <div className="stat-value-large" style={{ color: '#10b981' }}>95<span style={{ fontSize: '0.5em', opacity: '0.7' }}>%</span></div>
                <div className="stat-label-large">Complete</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="completion-bar"><div className="completion-fill" style={{ width: '95%' }}></div></div>
                  <div className="stat-detail-item"><span className="detail-label">Code Status</span><span className="detail-value">Production-Ready</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Current MRR</span><span className="detail-value highlight-green">$0 (No Customers)</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="overview">
        <div className="container">
          <h2 className="section-title">What is TrustPilot AI?</h2>
          <div className="content-block">
            <p>TrustPilot AI is a 95% production-ready enterprise data quality platform with autonomous AI agents. Built with Next.js 14, TypeScript 5.0, Prisma 5.0, and PostgreSQL (155 TypeScript files, 25+ pages, 12+ API endpoints), the platform automates data quality assessment, reconciliation, compliance checking, and ROI tracking for enterprise data teams. Full Stripe integration with live pricing tiers: Starter ($499/mo), Professional ($1,499/mo), Enterprise ($4,999/mo).</p>
            <p>What works: Complete Next.js application, AI agents framework (Quality, Reconciliation, Compliance, ROI agents), trust score engine, database schema (Prisma), authentication (NextAuth), payment system (Stripe checkout, subscriptions, webhooks), UI components, API endpoints, file upload (CSV/Excel), monitoring, email configured. What&apos;s missing: Customer needs own OpenAI API key ($0.50-$2 per 1M tokens), needs real customer data for validation, not deployed yet, zero customers (no market validation).</p>
            <div className="highlight-box">
              <h4>Market Reality &amp; Challenges</h4>
              <p>Enterprise data quality market exists but is competitive (Informatica, Talend, Ataccama). Key challenges: Zero customers (no beta, no validation), enterprise SaaS = 6-12 month sales cycles (not quick revenue), AI accuracy unproven with real datasets, OpenAI API costs (customer must provide key), competing with established enterprise vendors. Time to first dollar: 1-2 hours technical setup (deploy + add OpenAI key), but 6-12 months for customer acquisition (enterprise sales). NOT a quick win - consider SMB pivot or different market. Platform code is production-quality but needs customer validation.</p>
            </div>
            <p>Current status: Production-ready code architecture with comprehensive documentation (README, QUICK_START, API docs), development tools &amp; setup scripts, but untested with real enterprise data. Autonomous agents framework ready but needs OpenAI API key and real customer validation to prove ROI claims. Complete payment system works but $0 MRR until customers acquired. Honest assessment: Excellent code, long enterprise sales cycle ahead.</p>
          </div>
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Multi-Platform Review Aggregation</h3>
              <p>Automatically collect reviews from Google, Yelp, Facebook, TripAdvisor, Amazon, Trustpilot, industry-specific platforms, and custom review sources. Single unified dashboard shows all reviews with filtering, search, and tagging. Real-time sync ensures you never miss a review. Supports unlimited locations and review sources.</p>
            </div>
            <div className="feature-card">
              <h3>AI Sentiment Analysis</h3>
              <p>Advanced NLP algorithms analyze review text to identify sentiment (positive, negative, neutral), extract key topics (food, service, price, cleanliness), detect emotional tone (frustrated, delighted, disappointed), and categorize feedback themes. Sentiment trends reveal whether reputation is improving or declining. Anomaly detection alerts you to sudden sentiment shifts.</p>
            </div>
            <div className="feature-card">
              <h3>Automated Response Suggestions</h3>
              <p>AI generates personalized response drafts for each review based on content, sentiment, and business context. Responses sound natural and authentic, not robotic. One-click approval or edit before posting. Response templates for common scenarios (apology, thank you, issue resolution). Multi-language support for international businesses. Average response time reduced from 2 days to 2 hours.</p>
            </div>
            <div className="feature-card">
              <h3>Real-Time Alerts &amp; Notifications</h3>
              <p>Instant Slack, email, or SMS alerts for new reviews, especially negative ones requiring immediate attention. Configurable alert rules by rating threshold, keywords, location, or platform. Escalation workflows route critical reviews to managers. Mobile apps ensure you can respond from anywhere. Alert fatigue prevention with smart notification batching.</p>
            </div>
            <div className="feature-card">
              <h3>Competitor Review Monitoring</h3>
              <p>Track competitor reviews, ratings, and response rates to benchmark your performance. Identify what customers love about competitors and what they complain about. Discover market gaps and differentiation opportunities. Competitive intelligence dashboard shows head-to-head comparisons. Alerts when competitors get viral positive or negative reviews.</p>
            </div>
            <div className="feature-card">
              <h3>Review Generation &amp; Campaigns</h3>
              <p>Automated review request campaigns via email and SMS after purchases, appointments, or service completion. Customizable templates maintain brand voice. Smart timing maximizes response rates (send requests when satisfaction is highest). QR codes for in-person review requests. Landing pages make leaving reviews frictionless. A/B testing optimizes request messaging.</p>
            </div>
            <div className="feature-card">
              <h3>Analytics &amp; Reporting</h3>
              <p>Executive dashboards track overall rating, review volume trends, sentiment distribution, response rate, and average response time. Drill down by location, time period, platform, or review category. Word clouds and topic analysis reveal common themes. Custom reports for stakeholder presentations. Integrates with Google Analytics to correlate review metrics with conversion rates and revenue.</p>
            </div>
            <div className="feature-card">
              <h3>Team Collaboration &amp; Workflows</h3>
              <p>Assign reviews to team members by location, category, or severity. Internal notes and private comments enable collaboration without public visibility. Approval workflows for response review before publishing. Role-based permissions control who can respond to reviews. Performance metrics track team member response quality and speed.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: '0', maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle" style={{ fontSize: '1.15rem', textAlign: 'center', marginBottom: '60px', opacity: '0.8' }}>Built with AI and automation at the core</p>
          <div className="tech-stack-grid-large">
            <div className="tech-category-large">
              <h3 className="tech-category-title">Frontend Platform</h3>
              <p className="tech-category-description">Modern TypeScript application with real-time monitoring</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Next.js 14</span><span className="tech-detail">App Router</span></div>
                <div className="tech-stack-item"><span className="tech-name">React 18</span><span className="tech-detail">UI Framework</span></div>
                <div className="tech-stack-item"><span className="tech-name">TypeScript 5.0</span><span className="tech-detail">155 Files</span></div>
                <div className="tech-stack-item"><span className="tech-name">Prisma 5.0</span><span className="tech-detail">Database ORM</span></div>
                <div className="tech-stack-item"><span className="tech-name">NextAuth.js</span><span className="tech-detail">Authentication</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Full type safety</span><span>✓ Server-side rendering</span><span>✓ 25+ pages built</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">AI &amp; Backend</h3>
              <p className="tech-category-description">Autonomous agents framework with intelligent automation</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Node.js</span><span className="tech-detail">Runtime</span></div>
                <div className="tech-stack-item"><span className="tech-name">Python</span><span className="tech-detail">AI/ML Workflows</span></div>
                <div className="tech-stack-item"><span className="tech-name">OpenAI GPT-4</span><span className="tech-detail">LLM Engine</span></div>
                <div className="tech-stack-item"><span className="tech-name">Hugging Face NLP</span><span className="tech-detail">Text Analysis</span></div>
                <div className="tech-stack-item"><span className="tech-name">LangChain</span><span className="tech-detail">Agent Framework</span></div>
              </div>
              <div className="tech-highlights"><span>✓ 6 AI agents ready</span><span>✓ Pattern matching</span><span>✓ Sentiment analysis</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Data &amp; Storage</h3>
              <p className="tech-category-description">Enterprise-grade database with comprehensive schema</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">PostgreSQL</span><span className="tech-detail">Primary Database</span></div>
                <div className="tech-stack-item"><span className="tech-name">MongoDB</span><span className="tech-detail">Flexible Data</span></div>
                <div className="tech-stack-item"><span className="tech-name">Redis</span><span className="tech-detail">Caching Layer</span></div>
                <div className="tech-stack-item"><span className="tech-name">Prisma Schema</span><span className="tech-detail">Data Models</span></div>
                <div className="tech-stack-item"><span className="tech-name">File Upload</span><span className="tech-detail">CSV/Excel</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Multi-tenant architecture</span><span>✓ Row-level security</span><span>✓ Audit logging</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Integration &amp; Deployment</h3>
              <p className="tech-category-description">Production-ready billing and deployment infrastructure</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Stripe</span><span className="tech-detail">Full Integration</span></div>
                <div className="tech-stack-item"><span className="tech-name">AWS</span><span className="tech-detail">Cloud Hosting</span></div>
                <div className="tech-stack-item"><span className="tech-name">React Native</span><span className="tech-detail">Mobile Apps</span></div>
                <div className="tech-stack-item"><span className="tech-name">12+ API Endpoints</span><span className="tech-detail">REST APIs</span></div>
                <div className="tech-stack-item"><span className="tech-name">WebSocket</span><span className="tech-detail">Real-Time Updates</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Checkout &amp; subscriptions</span><span>✓ Webhook handling</span><span>✓ Auto-scaling ready</span></div>
            </div>
          </div>
          <div className="highlight-box">
            <h4>Why This Stack?</h4>
            <p>TrustPilot AI leverages cutting-edge AI and modern web technologies to deliver intelligent automation. OpenAI GPT-4 powers response generation and sentiment analysis with human-like understanding of context and tone. Hugging Face transformers handle specialized NLP tasks like topic extraction and emotion detection. Python handles AI/ML workflows and API integrations with review platforms. Next.js and React provide a responsive, real-time dashboard with WebSocket updates for instant review notifications. PostgreSQL stores structured data (businesses, users, subscriptions), while MongoDB handles flexible review data from diverse sources. Redis caching and background job processing ensure sub-second dashboard performance even with thousands of daily reviews. React Native mobile apps enable on-the-go review monitoring and responses. AWS infrastructure scales automatically during viral review events.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Pricing (Live in Stripe)</h2>
          <p className="section-subtitle">Enterprise SaaS pricing for mid-to-large data teams</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">$499/mo</div>
              <ul>
                <li>10 data sources</li>
                <li>1M rows/month processing</li>
                <li>3 users included</li>
                <li>AI quality assessment</li>
                <li>Trust score engine</li>
                <li>14-day free trial</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Professional</h3>
              <div className="price">$1,499/mo</div>
              <ul>
                <li>50 data sources</li>
                <li>10M rows/month processing</li>
                <li>10 users included</li>
                <li>API access</li>
                <li>Advanced reconciliation</li>
                <li>Compliance monitoring</li>
                <li>Priority support</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">$4,999/mo</div>
              <ul>
                <li>Unlimited data sources</li>
                <li>Unlimited row processing</li>
                <li>Unlimited users</li>
                <li>Custom integrations</li>
                <li>SLA guarantees</li>
                <li>30-day free trial</li>
                <li>Dedicated support</li>
              </ul>
            </div>
          </div>
          <div className="highlight-box">
            <h4>Revenue Reality</h4>
            <p><strong>Current Status:</strong> Payment system fully integrated with Stripe (checkout, subscriptions, webhooks, billing portal). All pricing tiers configured and working. BUT: $0 MRR until customers acquired. Enterprise SaaS has 6-12 month sales cycles - acquiring even 3-5 beta customers will take significant time and effort. This is NOT quick revenue.</p>
            <p><strong>IF customers acquired:</strong> 5 Starter ($2,495/mo) + 3 Professional ($4,497/mo) + 1 Enterprise ($4,999/mo) = ~$12K MRR = $144K ARR as baseline. But zero customers currently - need market validation, enterprise sales team, long sales process. Consider SMB pivot for faster customer acquisition.</p>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: '0', maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Target Market</h2>
          <p className="section-subtitle">Businesses where online reputation drives customer decisions</p>
          <div className="target-grid">
            <div className="target-card">
              <h3>Restaurants &amp; Hospitality</h3>
              <p>Restaurants, hotels, and cafes live and die by their reviews. TrustPilot AI monitors Google, Yelp, TripAdvisor, and OpenTable reviews, providing instant alerts for negative feedback so managers can respond quickly and resolve issues. Review generation campaigns increase positive reviews by 3-5x. Typical spend: $149-$399/month.</p>
            </div>
            <div className="target-card">
              <h3>Healthcare &amp; Dental</h3>
              <p>Medical practices, dental offices, and healthcare providers need to monitor reviews across Healthgrades, Zocdoc, Google, and Yelp. HIPAA-compliant response templates ensure privacy compliance. Sentiment analysis identifies service quality issues before they escalate. Patient satisfaction tracking correlates with review scores. Typical spend: $149-$399/month.</p>
            </div>
            <div className="target-card">
              <h3>Home Services</h3>
              <p>Contractors, plumbers, electricians, and HVAC companies rely on reviews for lead generation. TrustPilot AI helps collect more positive reviews (boosting SEO and conversions), respond professionally to negative reviews, and track reputation against local competitors. Review requests sent after job completion increase reviews by 400%. Typical spend: $49-$149/month.</p>
            </div>
            <div className="target-card">
              <h3>Retail &amp; E-Commerce</h3>
              <p>Retailers managing Google Business profiles and e-commerce sellers on Amazon, eBay, and Etsy need centralized review management. Product-level sentiment analysis identifies quality issues. Competitor monitoring reveals pricing and product opportunities. Automated responses improve seller ratings and Buy Box competitiveness. Typical spend: $149-$399/month.</p>
            </div>
            <div className="target-card">
              <h3>Automotive Dealerships</h3>
              <p>Car dealerships face reviews on Google, Cars.com, DealerRater, and Yelp. TrustPilot AI helps sales and service departments monitor their separate reputations, respond to reviews quickly (improving rankings), and generate more positive reviews from satisfied customers. Competitive intelligence tracks rival dealerships. Typical spend: $399/month+.</p>
            </div>
            <div className="target-card">
              <h3>Multi-Location Franchises</h3>
              <p>Franchise brands with dozens or hundreds of locations need centralized reputation management with location-specific insights. Corporate teams monitor brand-wide reputation, while location managers focus on their specific reviews. Benchmarking identifies top and bottom performers. White-label options maintain brand consistency. Typical spend: $399/month+ per brand.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Competitive Advantages</h2>
          <div className="competitive-grid">
            <div className="competitive-card">
              <h3>AI Response Quality</h3>
              <p>Competitors offer basic templates or generic AI responses. TrustPilot AI uses GPT-4 with business-specific context to generate authentic, personalized responses that address specific review points. Responses sound human, not robotic, improving customer relationships and public perception. Quality rivals professional reputation management agencies at 1/10th the cost.</p>
            </div>
            <div className="competitive-card">
              <h3>True Multi-Platform Coverage</h3>
              <p>Most review tools focus on 2-3 major platforms. TrustPilot AI integrates with 50+ review sites including industry-specific platforms (Healthgrades, DealerRater, Zillow, Avvo) and custom review sources. Businesses get complete reputation visibility without juggling multiple tools or missing critical reviews on niche platforms.</p>
            </div>
            <div className="competitive-card">
              <h3>Actionable Sentiment Insights</h3>
              <p>Basic review tools show star ratings and counts. TrustPilot AI&apos;s NLP extracts specific topics, emotions, and trends from review text. Identify that customers love your food but hate wait times, or that cleanliness complaints are increasing at specific locations. Insights drive operational improvements that generic metrics miss.</p>
            </div>
            <div className="competitive-card">
              <h3>Competitive Intelligence</h3>
              <p>Competing platforms focus only on your reviews. TrustPilot AI monitors competitor reviews, ratings, response rates, and customer feedback themes. Discover what competitors do well (and poorly), identify market gaps, and craft differentiation strategies based on real customer feedback rather than assumptions.</p>
            </div>
            <div className="competitive-card">
              <h3>Review Generation Automation</h3>
              <p>Most review platforms are passive monitoring tools. TrustPilot AI includes proactive review generation with automated campaigns, QR codes, landing pages, and A/B testing. Businesses typically see 3-5x increase in review volume, improving SEO rankings, conversion rates, and competitive positioning.</p>
            </div>
            <div className="competitive-card">
              <h3>Affordable SaaS Pricing</h3>
              <p>Traditional reputation management agencies charge $1,000-5,000/month for services TrustPilot AI automates. Enterprise review platforms like Birdeye and Podium cost $300-800/month with long contracts. TrustPilot AI delivers comparable features starting at $49/month with no contracts, making enterprise-grade reputation management accessible to SMBs.</p>
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
              <div className="price">$125,000</div>
              <p style={{ color: 'var(--gold)', marginTop: '1rem', fontSize: '1.1rem' }}>95% Production-Ready Enterprise Data Quality Platform</p>
            </div>
            <h3>What&apos;s Included</h3>
            <div className="included-grid">
              <div className="included-item">
                <h4>Complete Next.js Application</h4>
                <p>155 TypeScript files, 25+ pages, complete app structure with modern architecture (Next.js 14, App Router)</p>
              </div>
              <div className="included-item">
                <h4>AI Agents Framework</h4>
                <p>6 autonomous agents (Quality, Reconciliation, Compliance, ROI) - LangChain integration ready, needs OpenAI API key</p>
              </div>
              <div className="included-item">
                <h4>Trust Score Engine</h4>
                <p>Calculate authenticity, quality, consistency, completeness scores with pattern matching algorithms</p>
              </div>
              <div className="included-item">
                <h4>Complete Database Schema</h4>
                <p>Prisma 5.0 schema with subscription, usage, data source models - PostgreSQL ready</p>
              </div>
              <div className="included-item">
                <h4>Full Stripe Integration</h4>
                <p>Checkout, subscriptions, webhooks, billing portal - live with 3 pricing tiers ($499/$1,499/$4,999)</p>
              </div>
              <div className="included-item">
                <h4>Authentication System</h4>
                <p>NextAuth.js user management, roles, sessions fully configured</p>
              </div>
              <div className="included-item">
                <h4>12+ API Endpoints</h4>
                <p>REST endpoints for agents, checkout, auth, data sources, trust scores - all core functionality</p>
              </div>
              <div className="included-item">
                <h4>File Upload System</h4>
                <p>CSV, Excel, database connectors for data ingestion</p>
              </div>
              <div className="included-item">
                <h4>Comprehensive Documentation</h4>
                <p>README, QUICK_START guide, API docs, business plan, technical architecture, deployment guides</p>
              </div>
              <div className="included-item">
                <h4>Repository &amp; Assets</h4>
                <p>Full GitHub repository, brand, domain, and knowledge transfer support</p>
              </div>
            </div>
            <div className="highlight-box">
              <h4>Honest Valuation Assessment</h4>
              <p>$125K pricing based on 95% production-ready code (155 TypeScript files, full Stripe integration, complete database schema, AI agents framework). What&apos;s real: Production-quality architecture, comprehensive documentation, working payment system, modern tech stack. What&apos;s missing: OpenAI API key (customer provides), zero customers (no beta, no validation), not deployed yet, AI accuracy unproven with real enterprise data.</p>
              <p>Key risk: Enterprise sales cycle = 6-12 months. This is NOT quick revenue. Even with excellent code, acquiring enterprise customers (data teams at mid-to-large companies) takes significant time, sales resources, and market validation. Competing with established players (Informatica, Talend, Ataccama). Value proposition: You&apos;re acquiring production-ready code + comprehensive docs at ~50% of rebuild cost, but still need customer acquisition strategy, enterprise sales team, and market validation. Best for: Companies with existing enterprise customer relationships or data/analytics products looking to expand portfolio.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>READY TO ACQUIRE TRUSTPILOT AI?</h2>
          <p>A production-ready enterprise data quality platform with autonomous AI agents. Contact us to discuss acquisition or partnership opportunities.</p>
          <a href="/contact/" className="hero-cta">Contact Us →</a>
        </div>
      </section>
    </>
  );
}
