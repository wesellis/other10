import Link from 'next/link';
export default function AzureCopilot() {
  return (
    <>
      <section className="hero">
        <div className="project-title container" style={{ textAlign: 'center' }}>
          <h1>AzureAI-Copilot</h1>
          <p className="project-tagline" style={{ fontSize: '1.4rem', lineHeight: '1.6', maxWidth: '900px', margin: '0 auto 20px' }}>AI-Powered Azure Infrastructure Management with Natural Language Control</p>
          <p style={{ color: 'var(--white)', opacity: '0.75', fontSize: '1.1rem', marginBottom: '30px' }}>Control Your Entire Azure Environment Through Conversational AI</p>
          <div className="badge-container">
            <span className="badge badge-api">AIOps Platform</span>
            <span className="badge badge-saas">Azure Integration</span>
            <span className="badge badge-production">65% Complete</span>
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
              <img alt="AzureAI-Copilot Dashboard" width="900" height="500" decoding="async" data-nimg="1" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/azurecopilot-placeholder.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="AI Agent Interface" loading="lazy" width="900" height="500" decoding="async" data-nimg="1" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/azurecopilot-placeholder.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Resource Management" loading="lazy" width="900" height="500" decoding="async" data-nimg="1" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/azurecopilot-placeholder.png" />
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
              <div className="stat-icon-large">⚙️</div>
              <div className="stat-content">
                <div className="stat-value-large">65<span style={{ fontSize: '0.5em', opacity: '0.7' }}>%</span></div>
                <div className="stat-label-large">Complete</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Source Files</span><span className="detail-value">255 files</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Status</span><span className="detail-value">Working components</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Time to 90%</span><span className="detail-value highlight-green">2-3 days</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large">🤖</div>
              <div className="stat-content">
                <div className="stat-value-large">6 Agents</div>
                <div className="stat-label-large">LangChain AI</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">AI Framework</span><span className="detail-value">LangChain 0.3.36</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Model</span><span className="detail-value">GPT-4 Integration</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Control</span><span className="detail-value highlight-green">Natural language</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large">☁️</div>
              <div className="stat-content">
                <div className="stat-value-large">Azure SDK</div>
                <div className="stat-label-large">Full Integration</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Services</span><span className="detail-value">9 Azure packages</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Coverage</span><span className="detail-value">Compute, Network, Storage</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Additional</span><span className="detail-value highlight-green">Monitor, KeyVault, Cosmos</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="overview">
        <div className="container">
          <h2 className="section-title">What is AzureAI-Copilot?</h2>
          <div className="content-block">
            <p>AzureAI-Copilot is an AI-powered Azure infrastructure management platform that lets you control your entire Azure environment using natural language commands. Built with LangChain, GPT-4, and the Azure SDK, it&apos;s currently 65-75% complete with working frontend and backend components that need integration.</p>
            <p>The platform features 6 specialized AI agents (Infrastructure, Incident, Cost Optimization, Compliance, Predictive, Resource) that understand natural language requests and execute Azure operations automatically. With FastAPI backend, React 18 frontend, and comprehensive Azure SDK integration, the foundation is solid—but components aren&apos;t fully wired together yet.</p>
            <div className="highlight-box">
              <h4>Current Status: Honest Assessment</h4>
              <p>This is a well-engineered foundation with 255 source files, 60+ dependencies, and many individual components proven to work. However, it&apos;s a collection of finished pieces that aren&apos;t assembled yet. You CAN run the frontend and backend separately with mock data. You CANNOT yet discover real Azure resources or have customers use it. Time to customer-ready: 2-4 weeks with focused integration work.</p>
            </div>
            <p>The tech stack is enterprise-grade: Node.js with Express/Fastify, Python 3.11+ with FastAPI, React 18 with TypeScript, Azure SDKs for all services (Compute, Network, Storage, Monitor, Cosmos, KeyVault), LangChain 0.3.x for AI orchestration, PostgreSQL/Redis for data, and Socket.io for real-time updates. The architecture is sound and scalable.</p>
          </div>
          <h2 className="section-title">What&apos;s Actually Built</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>6 Specialized AI Agents</h3>
              <p>InfrastructureAgent (VM/storage/network ops), IncidentAgent (diagnostics &amp; remediation), CostOptimizationAgent (savings analysis), ComplianceAgent (policy checking), PredictiveAgent (forecasting), and ResourceAgent (CRUD operations). All built with LangChain, defined but not fully load-tested.</p>
            </div>
            <div className="feature-card">
              <h3>Natural Language Processing</h3>
              <p>Intent classification routes commands to appropriate agents. Conversation context memory maintains session state. Tool calling executes Azure operations. Full audit logging of all commands. GPT-4 integration via Azure OpenAI SDK for advanced understanding.</p>
            </div>
            <div className="feature-card">
              <h3>Frontend Dashboard (90% Complete)</h3>
              <p>React 18 with TypeScript strict mode. 13 full pages (Dashboard, Resources, Costs, Incidents, Compliance, Team, Billing, etc.). 100+ reusable components with dark mode support. Responsive design, WCAG 2.1 AA accessibility. 50-60 KB gzipped bundle. 100+ passing unit tests.</p>
            </div>
            <div className="feature-card">
              <h3>FastAPI Backend (70% Complete)</h3>
              <p>30+ endpoints across 3 API versions. JWT authentication working and tested. CSRF protection functional. Rate limiting (5 login attempts/min, 100 general req/min). Azure SDK integration points defined for all services. Celery background tasks configured.</p>
            </div>
            <div className="feature-card">
              <h3>Azure SDK Integration</h3>
              <p>Full SDK coverage: azure-mgmt-resource (resource management), azure-mgmt-compute (VMs), azure-mgmt-network (networking), azure-mgmt-storage (storage), azure-monitor-query (monitoring), azure-cosmos (database), azure-keyvault-secrets (secrets), azure-mgmt-costmanagement (cost analysis).</p>
            </div>
            <div className="feature-card">
              <h3>Security Layer (95% Complete)</h3>
              <p>JWT generation and validation tested and working. Rate limiting blocks repeated attacks (verified). CSRF tokens generated and validated (verified). Authorization with RBAC defined. Input validation and XSS prevention. Request size limiting and trusted hosts middleware.</p>
            </div>
            <div className="feature-card">
              <h3>Database &amp; Caching</h3>
              <p>PostgreSQL primary database with async driver. SQLAlchemy ORM v2.0+. Alembic migrations framework. Redis caching with 30 min TTL. Models for Users, Organizations, Subscriptions, Resources, Costs, Incidents, Compliance, Commands. Schema exists but not fully exercised.</p>
            </div>
            <div className="feature-card">
              <h3>ML &amp; Forecasting</h3>
              <p>Linear regression for cost forecasting. Threshold detection for anomaly identification. Resource utilization clustering. Cost pattern analysis. Scikit-learn, Pandas, NumPy stack for data processing. Models defined but need real Azure data to train.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: '0', maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle" style={{ fontSize: '1.15rem', textAlign: 'center', marginBottom: '60px', opacity: '0.8' }}>255 source files, 60+ direct dependencies</p>
          <div className="tech-stack-grid-large">
            <div className="tech-category-large">
              <h3 className="tech-category-title">Backend Architecture</h3>
              <p className="tech-category-description">High-performance AI orchestration with Azure integration</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Python 3.11+</span><span className="tech-detail">Core Language</span></div>
                <div className="tech-stack-item"><span className="tech-name">FastAPI 0.116.0</span><span className="tech-detail">Async Framework</span></div>
                <div className="tech-stack-item"><span className="tech-name">LangChain 0.3.36</span><span className="tech-detail">AI Orchestration</span></div>
                <div className="tech-stack-item"><span className="tech-name">OpenAI GPT-4</span><span className="tech-detail">Natural Language</span></div>
                <div className="tech-stack-item"><span className="tech-name">Azure SDK</span><span className="tech-detail">9 Packages</span></div>
              </div>
              <div className="tech-highlights"><span>✓ 30+ API endpoints</span><span>✓ JWT authentication</span><span>✓ 6 AI agents</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Frontend Platform</h3>
              <p className="tech-category-description">Modern, type-safe dashboard with real-time monitoring</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">React 18.2.0</span><span className="tech-detail">UI Framework</span></div>
                <div className="tech-stack-item"><span className="tech-name">TypeScript</span><span className="tech-detail">Strict Mode</span></div>
                <div className="tech-stack-item"><span className="tech-name">Vite</span><span className="tech-detail">Build Tool</span></div>
                <div className="tech-stack-item"><span className="tech-name">Tailwind CSS</span><span className="tech-detail">Styling</span></div>
                <div className="tech-stack-item"><span className="tech-name">Socket.io</span><span className="tech-detail">Real-time Updates</span></div>
              </div>
              <div className="tech-highlights"><span>✓ 13 full pages</span><span>✓ 100+ components</span><span>✓ 100+ unit tests</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Data &amp; Performance</h3>
              <p className="tech-category-description">Enterprise-grade persistence with async capabilities</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">PostgreSQL</span><span className="tech-detail">Primary Database</span></div>
                <div className="tech-stack-item"><span className="tech-name">SQLAlchemy 2.0</span><span className="tech-detail">Async ORM</span></div>
                <div className="tech-stack-item"><span className="tech-name">Redis 5.0</span><span className="tech-detail">Caching Layer</span></div>
                <div className="tech-stack-item"><span className="tech-name">Celery</span><span className="tech-detail">Background Tasks</span></div>
                <div className="tech-stack-item"><span className="tech-name">Alembic</span><span className="tech-detail">Migrations</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Async driver</span><span>✓ 30 min cache TTL</span><span>✓ Full audit logs</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Azure Integration</h3>
              <p className="tech-category-description">Comprehensive Azure SDK coverage for full control</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Compute</span><span className="tech-detail">VM Management</span></div>
                <div className="tech-stack-item"><span className="tech-name">Network</span><span className="tech-detail">Networking</span></div>
                <div className="tech-stack-item"><span className="tech-name">Storage</span><span className="tech-detail">Blob &amp; Files</span></div>
                <div className="tech-stack-item"><span className="tech-name">Monitor</span><span className="tech-detail">Metrics &amp; Logs</span></div>
                <div className="tech-stack-item"><span className="tech-name">KeyVault, Cosmos</span><span className="tech-detail">Secrets &amp; Data</span></div>
              </div>
              <div className="tech-highlights"><span>✓ 9 SDK packages</span><span>✓ Full API coverage</span><span>✓ Cost management</span></div>
            </div>
          </div>
          <div className="highlight-box" style={{ marginTop: '60px' }}>
            <h4>Why This Stack?</h4>
            <p>FastAPI delivers async performance with Python 3.11+. React 18 provides modern frontend architecture with strict TypeScript. LangChain orchestrates AI agents while Azure SDKs integrate every service (Compute, Network, Storage, Monitor, KeyVault, Cosmos, Cost Management). PostgreSQL handles data with async driver, Redis manages caching and sessions. Socket.io enables real-time updates. Celery handles background tasks (resource sync, anomaly detection, compliance scans). The stack is enterprise-grade but components aren&apos;t fully wired together yet.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">What&apos;s Working vs What&apos;s Missing</h2>
          <p className="section-subtitle">Honest breakdown of 65% completion status</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '40px' }}>
            <div style={{ background: 'rgba(0,150,0,0.05)', border: '2px solid rgba(0,200,0,0.3)', borderRadius: '8px', padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'rgba(0,255,0,0.8)', fontSize: '1.6rem', marginBottom: '25px', letterSpacing: '2px' }}>✓ What&apos;s Working</h3>
              <ul style={{ lineHeight: '2', opacity: '0.9', listStyle: 'none', paddingLeft: '0' }}>
                <li style={{ marginBottom: '15px', position: 'relative', paddingLeft: '25px' }}><span style={{ position: 'absolute', left: '0', color: 'rgba(0,255,0,0.8)' }}>▸</span><strong style={{ color: 'var(--gold)' }}>6 AI Agents Built:</strong> Infrastructure, Incident, Cost, Compliance, Predictive, Resource agents all defined with LangChain</li>
                <li style={{ marginBottom: '15px', position: 'relative', paddingLeft: '25px' }}><span style={{ position: 'absolute', left: '0', color: 'rgba(0,255,0,0.8)' }}>▸</span><strong style={{ color: 'var(--gold)' }}>React 18 Dashboard:</strong> Complete UI with components, routing, state management, dark mode, responsive design</li>
                <li style={{ marginBottom: '15px', position: 'relative', paddingLeft: '25px' }}><span style={{ position: 'absolute', left: '0', color: 'rgba(0,255,0,0.8)' }}>▸</span><strong style={{ color: 'var(--gold)' }}>FastAPI Backend:</strong> RESTful API with async endpoints, WebSocket support, error handling, logging</li>
                <li style={{ marginBottom: '15px', position: 'relative', paddingLeft: '25px' }}><span style={{ position: 'absolute', left: '0', color: 'rgba(0,255,0,0.8)' }}>▸</span><strong style={{ color: 'var(--gold)' }}>Azure SDK Integration:</strong> 9 Azure packages installed (Compute, Network, Storage, Monitor, KeyVault, Cosmos, Cost Management, Resource Management, Identity)</li>
                <li style={{ marginBottom: '15px', position: 'relative', paddingLeft: '25px' }}><span style={{ position: 'absolute', left: '0', color: 'rgba(0,255,0,0.8)' }}>▸</span><strong style={{ color: 'var(--gold)' }}>Database Layer:</strong> PostgreSQL schemas defined, SQLAlchemy models, AsyncPG driver, migration setup</li>
                <li style={{ marginBottom: '15px', position: 'relative', paddingLeft: '25px' }}><span style={{ position: 'absolute', left: '0', color: 'rgba(0,255,0,0.8)' }}>▸</span><strong style={{ color: 'var(--gold)' }}>100+ Passing Tests:</strong> Vitest + React Testing Library suite covering major components</li>
                <li style={{ marginBottom: '15px', position: 'relative', paddingLeft: '25px' }}><span style={{ position: 'absolute', left: '0', color: 'rgba(0,255,0,0.8)' }}>▸</span><strong style={{ color: 'var(--gold)' }}>Real-time Features:</strong> Socket.io for live updates, Celery for background tasks, Redis caching</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(200,0,0,0.05)', border: '2px solid rgba(200,0,0,0.3)', borderRadius: '8px', padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'rgba(255,100,100,0.9)', fontSize: '1.6rem', marginBottom: '25px', letterSpacing: '2px' }}>✗ What&apos;s Missing</h3>
              <ul style={{ lineHeight: '2', opacity: '0.9', listStyle: 'none', paddingLeft: '0' }}>
                <li style={{ marginBottom: '15px', position: 'relative', paddingLeft: '25px' }}><span style={{ position: 'absolute', left: '0', color: 'rgba(255,100,100,0.9)' }}>▸</span><strong style={{ color: 'var(--gold)' }}>Frontend-Backend Connection:</strong> API integration incomplete, components use mock data</li>
                <li style={{ marginBottom: '15px', position: 'relative', paddingLeft: '25px' }}><span style={{ position: 'absolute', left: '0', color: 'rgba(255,100,100,0.9)' }}>▸</span><strong style={{ color: 'var(--gold)' }}>Azure Authentication:</strong> Service Principal/Managed Identity not configured, can&apos;t query real Azure</li>
                <li style={{ marginBottom: '15px', position: 'relative', paddingLeft: '25px' }}><span style={{ position: 'absolute', left: '0', color: 'rgba(255,100,100,0.9)' }}>▸</span><strong style={{ color: 'var(--gold)' }}>Agent-to-Azure Flow:</strong> LangChain agents exist but aren&apos;t executing real Azure SDK calls</li>
                <li style={{ marginBottom: '15px', position: 'relative', paddingLeft: '25px' }}><span style={{ position: 'absolute', left: '0', color: 'rgba(255,100,100,0.9)' }}>▸</span><strong style={{ color: 'var(--gold)' }}>Real-time Dashboard:</strong> Socket.io configured but not streaming actual Azure metrics</li>
                <li style={{ marginBottom: '15px', position: 'relative', paddingLeft: '25px' }}><span style={{ position: 'absolute', left: '0', color: 'rgba(255,100,100,0.9)' }}>▸</span><strong style={{ color: 'var(--gold)' }}>End-to-End Testing:</strong> No integration tests with real Azure resources</li>
                <li style={{ marginBottom: '15px', position: 'relative', paddingLeft: '25px' }}><span style={{ position: 'absolute', left: '0', color: 'rgba(255,100,100,0.9)' }}>▸</span><strong style={{ color: 'var(--gold)' }}>Production Deployment:</strong> No CI/CD pipeline, not hosted anywhere</li>
                <li style={{ marginBottom: '15px', position: 'relative', paddingLeft: '25px' }}><span style={{ position: 'absolute', left: '0', color: 'rgba(255,100,100,0.9)' }}>▸</span><strong style={{ color: 'var(--gold)' }}>Documentation:</strong> Setup guides incomplete, no customer-facing docs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: '0', maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Path to Production</h2>
          <p className="section-subtitle">2-3 days of focused integration work to reach 90% customer-ready</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(400px,1fr))', gap: '30px', marginTop: '50px' }}>
            <div style={{ background: 'var(--black)', border: '2px solid var(--gold)', borderRadius: '8px', padding: '35px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ background: 'var(--gold)', color: 'var(--black)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '700' }}>1</div>
                <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--gold)', fontSize: '1.3rem', letterSpacing: '1px' }}>Wire Frontend to Backend</h3>
              </div>
              <p style={{ opacity: '0.85', lineHeight: '1.8', marginBottom: '15px' }}><strong style={{ color: 'var(--gold)' }}>Time: 4-6 hours</strong></p>
              <p style={{ opacity: '0.85', lineHeight: '1.8' }}>Connect React frontend to FastAPI backend. Configure API endpoints, CORS, authentication flow. Ensure frontend can call backend and display responses. Test basic navigation and data flow.</p>
            </div>
            <div style={{ background: 'var(--black)', border: '2px solid var(--gold)', borderRadius: '8px', padding: '35px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ background: 'var(--gold)', color: 'var(--black)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '700' }}>2</div>
                <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--gold)', fontSize: '1.3rem', letterSpacing: '1px' }}>Connect to Real Azure</h3>
              </div>
              <p style={{ opacity: '0.85', lineHeight: '1.8', marginBottom: '15px' }}><strong style={{ color: 'var(--gold)' }}>Time: 6-10 hours</strong></p>
              <p style={{ opacity: '0.85', lineHeight: '1.8' }}>Configure Azure authentication (Service Principal or Managed Identity). Test Azure SDK queries to discover VMs, storage accounts, networks. Implement resource listing and basic operations. Verify credentials work across all 9 Azure services.</p>
            </div>
            <div style={{ background: 'var(--black)', border: '2px solid var(--gold)', borderRadius: '8px', padding: '35px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ background: 'var(--gold)', color: 'var(--black)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '700' }}>3</div>
                <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--gold)', fontSize: '1.3rem', letterSpacing: '1px' }}>Test AI Agents End-to-End</h3>
              </div>
              <p style={{ opacity: '0.85', lineHeight: '1.8', marginBottom: '15px' }}><strong style={{ color: 'var(--gold)' }}>Time: 8-12 hours</strong></p>
              <p style={{ opacity: '0.85', lineHeight: '1.8' }}>Send natural language commands through LangChain agents. Test each agent (Infrastructure, Incident, Cost, Compliance, Predictive, Resource) with real Azure data. Fix prompt engineering issues. Validate GPT-4 response parsing.</p>
            </div>
            <div style={{ background: 'var(--black)', border: '2px solid var(--gold)', borderRadius: '8px', padding: '35px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ background: 'var(--gold)', color: 'var(--black)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '700' }}>4</div>
                <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--gold)', fontSize: '1.3rem', letterSpacing: '1px' }}>Implement Azure AD Auth</h3>
              </div>
              <p style={{ opacity: '0.85', lineHeight: '1.8', marginBottom: '15px' }}><strong style={{ color: 'var(--gold)' }}>Time: 6-8 hours</strong></p>
              <p style={{ opacity: '0.85', lineHeight: '1.8' }}>Replace basic auth with Azure AD OAuth. Configure app registration, redirect URIs, scopes. Implement token refresh. Test login flow and role-based access control. Ensure multi-tenant support if needed.</p>
            </div>
            <div style={{ background: 'var(--black)', border: '2px solid var(--gold)', borderRadius: '8px', padding: '35px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ background: 'var(--gold)', color: 'var(--black)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '700' }}>5</div>
                <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--gold)', fontSize: '1.3rem', letterSpacing: '1px' }}>Deploy to Cloud</h3>
              </div>
              <p style={{ opacity: '0.85', lineHeight: '1.8', marginBottom: '15px' }}><strong style={{ color: 'var(--gold)' }}>Time: 4-6 hours</strong></p>
              <p style={{ opacity: '0.85', lineHeight: '1.8' }}>Deploy frontend to Vercel/Netlify. Deploy backend to Azure App Service or Railway. Configure environment variables, database connections, domain setup. Set up basic monitoring and logging. Test production deployment.</p>
            </div>
            <div style={{ background: 'var(--black)', border: '2px solid var(--gold)', borderRadius: '8px', padding: '35px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ background: 'var(--gold)', color: 'var(--black)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '700' }}>6</div>
                <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--gold)', fontSize: '1.3rem', letterSpacing: '1px' }}>Polish &amp; Document</h3>
              </div>
              <p style={{ opacity: '0.85', lineHeight: '1.8', marginBottom: '15px' }}><strong style={{ color: 'var(--gold)' }}>Time: 4-6 hours</strong></p>
              <p style={{ opacity: '0.85', lineHeight: '1.8' }}>Write README with setup instructions. Document API endpoints. Create deployment guide. Add error messages and loading states. Fix obvious UI/UX issues. Record demo video showing natural language commands working.</p>
            </div>
          </div>
          <div className="highlight-box" style={{ marginTop: '50px' }}>
            <h4>Total Time: 36-54 Hours (2-3 Work Days)</h4>
            <p>This assumes a developer familiar with React, Python, and Azure. The components are built—this is integration and configuration work, not ground-up development. After this sprint, you&apos;ll have a functional demo that can discover Azure resources and execute natural language commands.</p>
            <p style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(185,153,53,0.3)' }}><strong>Beyond 90%:</strong> Production hardening (error handling, edge cases, security audit, performance optimization, comprehensive documentation) adds another 80-120 hours. But 90% is enough for internal demos, POC deployments, or showing to early design partners.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Competitive Landscape</h2>
          <p className="section-subtitle">AIOps market dominated by enterprise players with expensive solutions</p>
          <div className="competitive-grid">
            <div className="competitive-card">
              <h3>Datadog ($18-23/host/month)</h3>
              <p>Market leader in infrastructure monitoring with APM, log management, and security. Strong on observability but weak on AI-powered automation. No natural language control. Requires manual dashboard configuration and alert setup. Companies pay $5K-50K+/month at scale. Focus is monitoring, not autonomous operations.</p>
            </div>
            <div className="competitive-card">
              <h3>New Relic ($99-349/user/month)</h3>
              <p>APM and observability platform with basic anomaly detection. Limited to monitoring and alerting—no infrastructure control or autonomous remediation. Pricing gets expensive with team scale. Natural language interface doesn&apos;t exist. Strong brand but aging platform.</p>
            </div>
            <div className="competitive-card">
              <h3>PagerDuty ($21-41/user/month)</h3>
              <p>Incident response and on-call management. Focuses on alerting and escalation workflows, not root cause analysis or automated remediation. No infrastructure discovery or AI agents. Solves notification problems, not operational problems. Integrates with monitoring tools but doesn&apos;t replace them.</p>
            </div>
            <div className="competitive-card">
              <h3>Azure Monitor (Included with Azure)</h3>
              <p>Built-in Azure monitoring with metrics, logs, and basic alerts. Free but limited—no AI insights, no natural language, manual configuration required. Good for basic observability but lacks advanced automation. Requires Azure-specific knowledge and portal navigation.</p>
            </div>
            <div className="competitive-card">
              <h3>Dynatrace ($69+/host/month)</h3>
              <p>Enterprise APM with AI-powered root cause analysis (Davis AI). Expensive at scale ($50K-500K annual contracts). Complex to set up and manage. Natural language queries limited. Strong on monitoring but not operational automation. Target market is Fortune 500.</p>
            </div>
            <div className="competitive-card">
              <h3>AI Assistant Tools (ChatGPT, GitHub Copilot)</h3>
              <p>General-purpose AI assistants can help with Azure questions but lack direct infrastructure integration. No ability to execute commands, discover resources, or automate operations. Require manual copy-paste of commands to Azure portal/CLI. Not purpose-built for Azure ops.</p>
            </div>
          </div>
          <div className="highlight-box" style={{ marginTop: '40px' }}>
            <h4>The Gap AzureAI-Copilot Fills</h4>
            <p>Monitoring tools (Datadog, New Relic) show you what&apos;s happening but don&apos;t act. Incident tools (PagerDuty) notify people but don&apos;t fix problems. AI assistants understand language but can&apos;t touch infrastructure. AzureAI-Copilot combines natural language understanding with direct Azure control—a conversational AI that actually executes operations.</p>
            <p style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(185,153,53,0.3)' }}><strong>Market Reality:</strong> This is a crowded $25B+ market (AIOps + monitoring + incident management). Success requires either (1) niche positioning for Azure-only shops, (2) enterprise sales to prove ROI vs. Datadog, or (3) building integrations for AWS/GCP to expand addressable market. Currently Azure-only limits TAM significantly.</p>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>INTERESTED IN AZUREAI-COPILOT?</h2>
          <p>A well-engineered foundation with 255 source files and 6 AI agents. Needs 2-3 days of integration work to connect components. Contact us to discuss acquisition or partnership opportunities.</p>
          <Link href="/contact/" className="hero-cta">Contact Us →</Link>
        </div>
      </section>
    </>
  );
}



