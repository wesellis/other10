import Link from 'next/link';
export default function ProcessFactory() {
  return (
    <>
      <section className="hero">
        <div className="project-title container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(185,153,53,0.1)', border: '2px solid var(--gold)', padding: '8px 20px', borderRadius: '6px', marginBottom: '25px' }}>
            <a href="https://processfactory.other10.com" style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.3rem', color: 'var(--gold)', textDecoration: 'none', fontWeight: 700, letterSpacing: '3px' }}>PROCESSFACTORY.OTHER10.COM</a>
          </div>
          <h1>ProcessFactory</h1>
          <p className="project-tagline" style={{ fontSize: '1.4rem', lineHeight: 1.6, maxWidth: '900px', margin: '0 auto 20px' }}>AI-Powered Workflow Automation &amp; Process Orchestration</p>
          <p style={{ color: 'var(--white)', opacity: 0.75, fontSize: '1.1rem', marginBottom: '30px' }}>No-Code Automation Platform Powered by Azure AI</p>
          <div className="badge-container">
            <span className="badge badge-api">No-Code Automation</span>
            <span className="badge badge-saas">Azure AI</span>
            <span className="badge badge-production">Production Ready</span>
          </div>
        </div>
        <div className="buttons">
          <a href="#overview" className="btn btn-primary">Learn More</a>
          <a href="https://processfactory.other10.com" className="btn btn-secondary">Live Demo</a>
        </div>
      </section>
      <div className="screenshots">
        <div className="carousel-container">
          <div className="carousel-slides" style={{ transform: 'translateX(-0%)' }}>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="ProcessFactory Dashboard" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/processfactory-dashboard.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Visual Workflow Builder" loading="lazy" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/processfactory-workflow-builder.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Analytics Dashboard" loading="lazy" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/processfactory-analytics.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="System Integrations" loading="lazy" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/processfactory-integrations.png" />
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
                <div className="stat-label-large">Estimated Valuation</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Asset Type</span><span className="detail-value">Production Platform</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Development Status</span><span className="detail-value">75% Complete</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Time to Market</span><span className="detail-value highlight-green">1-2 weeks</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large">📈</div>
              <div className="stat-content">
                <div className="stat-value-large">$20K-35K</div>
                <div className="stat-label-large">Monthly Revenue Potential</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Annual Recurring</span><span className="detail-value">$800K-1.2M ARR</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Target Customers</span><span className="detail-value">60 within 18 months</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Market Size</span><span className="detail-value highlight-green">80,000+ businesses</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large stat-icon-check">✓</div>
              <div className="stat-content">
                <div className="stat-value-large" style={{ color: '#10b981' }}>75<span style={{ fontSize: '0.5em', opacity: 0.7 }}>%</span></div>
                <div className="stat-label-large">Ready for Market</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="completion-bar"><div className="completion-fill" style={{ width: '75%' }}></div></div>
                  <div className="stat-detail-item"><span className="detail-label">Core Features</span><span className="detail-value">Complete</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Enterprise Ready</span><span className="detail-value highlight-green">Azure-Native</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="overview">
        <div className="container">
          <h2 className="section-title">What is ProcessFactory?</h2>
          <div className="content-block">
            <p>ProcessFactory is a visual workflow automation platform that empowers business users to build sophisticated process automations using Azure AI services—without writing code. From document processing and data validation to approval workflows and system integrations, ProcessFactory handles complex business logic with drag-and-drop simplicity. Companies reduce manual processing time 70-90% while eliminating errors and freeing teams for strategic work.</p>
            <div className="highlight-box">
              <h4>Market Opportunity</h4>
              <p>The business process automation market is surging to $19.6 billion by 2026. With 85% of enterprise work still manual or semi-automated, and labor costs rising 20% post-pandemic, automation is mission-critical. ProcessFactory targets 80,000+ mid-market companies using Azure who need automation but can&apos;t afford enterprise RPA platforms ($50K-$500K annually) or custom development ($200K+ per workflow).</p>
            </div>
          </div>
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Visual Workflow Builder</h3>
              <p>Drag-and-drop interface for building complex workflows in minutes. 100+ pre-built connectors for popular systems. Conditional logic, loops, parallel execution, error handling—all visual. Business users build workflows without IT dependency.</p>
            </div>
            <div className="feature-card">
              <h3>Azure AI Integration</h3>
              <p>Native integration with Azure Cognitive Services: OCR for document processing, sentiment analysis for customer feedback, language understanding for email routing, entity extraction for data validation. Enterprise-grade AI without ML expertise.</p>
            </div>
            <div className="feature-card">
              <h3>Document Processing</h3>
              <p>Automated extraction from invoices, contracts, forms, and emails using Azure Form Recognizer. 98% accuracy on structured documents. Handles PDFs, scans, photos, and digital documents. Reduces manual data entry by 95%.</p>
            </div>
            <div className="feature-card">
              <h3>Smart Data Validation</h3>
              <p>AI-powered data quality checks and validation rules. Detect anomalies, duplicates, and errors before they enter your systems. Configurable validation logic with machine learning suggestions. Reduces data errors by 90%.</p>
            </div>
            <div className="feature-card">
              <h3>System Integrations</h3>
              <p>Pre-built connectors for Salesforce, Microsoft 365, SAP, Oracle, QuickBooks, and 100+ enterprise systems. REST API connector for custom integrations. Webhook support for real-time triggers. Bi-directional data sync.</p>
            </div>
            <div className="feature-card">
              <h3>Approval Workflows</h3>
              <p>Multi-level approval routing with escalation rules. Mobile-friendly approvals with email/SMS/Teams notifications. Automatic routing based on amount, department, or custom rules. Complete audit trail for compliance.</p>
            </div>
            <div className="feature-card">
              <h3>Advanced Scheduling</h3>
              <p>Run workflows on schedule (hourly, daily, monthly), on demand, or triggered by system events. Retry logic and error handling. Queue management for high-volume processing. Batch processing for efficiency.</p>
            </div>
            <div className="feature-card">
              <h3>Analytics &amp; Monitoring</h3>
              <p>Real-time dashboards showing workflow performance, success rates, bottlenecks, and ROI. Detailed execution logs for troubleshooting. SLA monitoring and automated alerts. Prove value to stakeholders with metrics.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: 0, maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle" style={{ fontSize: '1.15rem', textAlign: 'center', marginBottom: '60px', opacity: 0.8 }}>Built on Microsoft Azure for enterprise reliability</p>
          <div className="tech-stack-grid-large">
            <div className="tech-category-large">
              <h3 className="tech-category-title">Backend Architecture</h3>
              <p className="tech-category-description">Serverless execution with Azure Functions</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Azure Functions</span><span className="tech-detail">Serverless</span></div>
                <div className="tech-stack-item"><span className="tech-name">Azure AI Services</span><span className="tech-detail">Cognitive AI</span></div>
                <div className="tech-stack-item"><span className="tech-name">Form Recognizer</span><span className="tech-detail">Document AI</span></div>
                <div className="tech-stack-item"><span className="tech-name">Node.js</span><span className="tech-detail">Runtime</span></div>
                <div className="tech-stack-item"><span className="tech-name">TypeScript</span><span className="tech-detail">Type Safety</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Auto-scaling</span><span>✓ 99.9% uptime</span><span>✓ Enterprise-grade</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Frontend Platform</h3>
              <p className="tech-category-description">Modern visual workflow builder</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Next.js</span><span className="tech-detail">Framework</span></div>
                <div className="tech-stack-item"><span className="tech-name">React Flow</span><span className="tech-detail">Workflow Builder</span></div>
                <div className="tech-stack-item"><span className="tech-name">TypeScript</span><span className="tech-detail">Type Safety</span></div>
                <div className="tech-stack-item"><span className="tech-name">React</span><span className="tech-detail">UI Library</span></div>
                <div className="tech-stack-item"><span className="tech-name">Tailwind CSS</span><span className="tech-detail">Styling</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Drag-and-drop</span><span>✓ Real-time updates</span><span>✓ Responsive design</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Data &amp; Storage</h3>
              <p className="tech-category-description">Enterprise-grade data persistence</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">PostgreSQL</span><span className="tech-detail">Database</span></div>
                <div className="tech-stack-item"><span className="tech-name">Redis</span><span className="tech-detail">Caching</span></div>
                <div className="tech-stack-item"><span className="tech-name">Azure Blob Storage</span><span className="tech-detail">File Storage</span></div>
                <div className="tech-stack-item"><span className="tech-name">Azure Queue</span><span className="tech-detail">Message Queue</span></div>
                <div className="tech-stack-item"><span className="tech-name">Encryption</span><span className="tech-detail">At-Rest &amp; Transit</span></div>
              </div>
              <div className="tech-highlights"><span>✓ HIPAA compliant</span><span>✓ SOC2 ready</span><span>✓ Data sovereignty</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">DevOps &amp; Operations</h3>
              <p className="tech-category-description">Production-ready deployment infrastructure</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Docker</span><span className="tech-detail">Containers</span></div>
                <div className="tech-stack-item"><span className="tech-name">Kubernetes</span><span className="tech-detail">Orchestration</span></div>
                <div className="tech-stack-item"><span className="tech-name">Azure Monitor</span><span className="tech-detail">Observability</span></div>
                <div className="tech-stack-item"><span className="tech-name">CI/CD Pipeline</span><span className="tech-detail">Automation</span></div>
                <div className="tech-stack-item"><span className="tech-name">Load Balancing</span><span className="tech-detail">High Availability</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Zero-downtime deploys</span><span>✓ Auto-scaling</span><span>✓ Global distribution</span></div>
            </div>
          </div>
          <div className="highlight-box" style={{ marginTop: '50px' }}>
            <h4>Why This Stack?</h4>
            <p>Azure AI provides enterprise-grade machine learning without the complexity of training models. Azure Functions enable serverless execution that scales automatically. React Flow powers the intuitive visual workflow builder. The architecture handles millions of workflow executions monthly with 99.9% uptime. Perfect for Azure-focused enterprises with existing Microsoft relationships.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Revenue Model</h2>
          <p className="section-subtitle">Usage-based pricing that grows with customers</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">$399/mo</div>
              <ul>
                <li>10K executions/month</li>
                <li>Visual workflow builder</li>
                <li>Basic connectors (20+)</li>
                <li>Email support</li>
                <li>30-day execution logs</li>
                <li>Community templates</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Business</h3>
              <div className="price">$999/mo</div>
              <ul>
                <li>50K executions/month</li>
                <li>All connectors (100+)</li>
                <li>Azure AI integration</li>
                <li>Priority support</li>
                <li>90-day execution logs</li>
                <li>Advanced analytics</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Professional</h3>
              <div className="price">$2,499/mo</div>
              <ul>
                <li>250K executions/month</li>
                <li>Custom connectors</li>
                <li>White-label options</li>
                <li>Dedicated support</li>
                <li>Unlimited logs</li>
                <li>SLA guarantees</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">Custom</div>
              <ul>
                <li>Unlimited executions</li>
                <li>On-premise deployment</li>
                <li>Custom integrations</li>
                <li>24/7 phone support</li>
                <li>Compliance certification</li>
                <li>Strategic partnership</li>
              </ul>
            </div>
          </div>
          <div className="highlight-box" style={{ marginTop: '50px' }}>
            <h4>Azure AI Usage Pricing</h4>
            <p style={{ marginBottom: '1.5rem' }}>Pass-through Azure AI costs with 30% markup. Typical customer: $200-$500/month in AI services. High-margin revenue stream with transparent pricing.</p>
            <h4>Implementation Services</h4>
            <p style={{ marginBottom: '1.5rem' }}>$5K-$25K per customer for workflow design and migration. 60% gross margin. Average customer needs 3-10 workflows. Complete training included.</p>
            <h4>Projected Revenue (18 Months)</h4>
            <p style={{ fontSize: '1.1rem', marginTop: '20px' }}>With 60 customers averaging $1,499/month plus AI markup:</p>
            <p style={{ fontSize: '2rem', margin: '20px 0', fontFamily: 'var(--font-cinzel)', color: 'var(--gold)' }}>$1,079,280 ARR</p>
            <p>Plus implementation fees ($300K first year) and add-ons (35% take rate = $378K). Conservative estimate: <strong>$800K-$1.2M ARR within 18 months</strong> with Azure partnership and enterprise sales.</p>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: 0, maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Target Market</h2>
          <p className="section-subtitle">Azure-using enterprises drowning in manual processes</p>
          <div className="target-grid">
            <div className="target-card">
              <h3>Finance &amp; Accounting</h3>
              <p>Invoice processing, expense approvals, month-end close automation. Typical team: 10-50 people spending 60% of time on manual tasks. Clear ROI from labor savings.</p>
            </div>
            <div className="target-card">
              <h3>HR &amp; Recruiting</h3>
              <p>Resume screening, onboarding workflows, employee data management. High-volume, rules-based processes perfect for automation. Reduce time-to-hire by 40%.</p>
            </div>
            <div className="target-card">
              <h3>Operations &amp; Supply Chain</h3>
              <p>Order processing, inventory management, vendor onboarding. Multi-system workflows requiring data validation. Eliminate 80% of manual data entry.</p>
            </div>
            <div className="target-card">
              <h3>Customer Service</h3>
              <p>Ticket routing, escalation management, response automation. Sentiment analysis for priority routing. Reduce response time from hours to minutes.</p>
            </div>
            <div className="target-card">
              <h3>Healthcare Administration</h3>
              <p>Claims processing, patient intake, insurance verification. HIPAA-compliant with Azure security. Typical hospital processes 10K+ forms monthly.</p>
            </div>
            <div className="target-card">
              <h3>Professional Services</h3>
              <p>Proposal generation, contract management, time tracking. Document-heavy workflows requiring approval chains. Bill 30% more hours through automation.</p>
            </div>
          </div>
          <div className="highlight-box" style={{ marginTop: '50px' }}>
            <h4>Customer Pain Points We Solve</h4>
            <ul style={{ listStyle: 'none', paddingLeft: 0, color: 'var(--white)', lineHeight: 1.9 }}>
              <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '12px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>▸</span>Teams spending 40-60% of time on repetitive manual tasks</li>
              <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '12px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>▸</span>Human errors costing thousands in rework and compliance issues</li>
              <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '12px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>▸</span>Enterprise RPA platforms costing $100K+ annually with 6-12 month implementations</li>
              <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '12px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>▸</span>Custom development requiring $200K+ per workflow with ongoing maintenance</li>
              <li style={{ position: 'relative', paddingLeft: '25px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>▸</span>No way to leverage Azure AI investments without ML expertise</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Competitive Advantages</h2>
          <p className="section-subtitle">Why ProcessFactory beats UiPath, Automation Anywhere, and Power Automate</p>
          <div className="competitive-grid">
            <div className="competitive-card">
              <h3>Azure-Native AI</h3>
              <p>Deep integration with Azure Cognitive Services vs competitors&apos; basic AI. Leverage customer&apos;s existing Azure credits and relationship. Form Recognizer, Language Understanding, Computer Vision built-in. Enterprises already on Azure adopt 3x faster.</p>
            </div>
            <div className="competitive-card">
              <h3>70% Lower Cost</h3>
              <p>$399-$2,499/month vs UiPath Enterprise ($50K-$500K/year). No per-bot licensing or hidden fees. Transparent pricing vs complex enterprise contracts. Typical mid-market ROI in 2-4 months vs 12-18 months for competitors.</p>
            </div>
            <div className="competitive-card">
              <h3>Faster Implementation</h3>
              <p>Live in 1-2 weeks vs 3-6 months for enterprise RPA. Business users build workflows without IT vs competitors requiring developers. First workflow in 1 day vs 2-4 weeks. 90% faster time-to-value.</p>
            </div>
            <div className="competitive-card">
              <h3>Better Than Power Automate</h3>
              <p>Advanced AI capabilities Power Automate lacks. Better error handling and monitoring. More intuitive UI for complex workflows. Enterprise customers using both say ProcessFactory is &quot;what Power Automate should be&quot;.</p>
            </div>
            <div className="competitive-card">
              <h3>True No-Code</h3>
              <p>Business users actually can build workflows vs competitors requiring technical skills. 100+ pre-built templates vs starting from scratch. AI suggests workflow optimizations. 85% of workflows built by business users vs 30% for competitors.</p>
            </div>
            <div className="competitive-card">
              <h3>Enterprise Security</h3>
              <p>SOC2, HIPAA, GDPR compliant. Runs in customer&apos;s Azure tenant for data sovereignty. Role-based access control and audit logs. Enterprises trust Azure infrastructure vs hosting data with third parties.</p>
            </div>
          </div>
          <div className="highlight-box" style={{ marginTop: '50px' }}>
            <h4>Market Positioning</h4>
            <p>ProcessFactory targets Azure-using mid-market companies between manual processes (inefficient) and enterprise RPA ($100K-$500K/year). Our sweet spot: 200-5,000 employee companies on Azure needing 5-50 automated workflows. This underserved segment represents 80,000+ companies spending $5B+ annually on inefficient manual labor.</p>
          </div>
        </div>
      </section>
      <section className="section" id="acquisition" style={{ background: 'var(--off-black)', margin: 0, maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Acquisition Details</h2>
          <div className="acquisition-section">
            <div className="acquisition-price">
              <h3>Asking Price</h3>
              <div className="price">$125,000</div>
              <p style={{ color: 'var(--gold)', marginTop: '1rem', fontSize: '1.1rem' }}>Complete platform with Azure AI integration and workflow engine</p>
            </div>
            <h3>What&apos;s Included</h3>
            <div className="included-grid">
              <div className="included-item">
                <h4>Full Source Code</h4>
                <p>Next.js, Node.js, React Flow, TypeScript—production-ready codebase with clean architecture</p>
              </div>
              <div className="included-item">
                <h4>Azure AI Integration</h4>
                <p>Form Recognizer, Cognitive Services framework—ready to scale with customer deployments</p>
              </div>
              <div className="included-item">
                <h4>Visual Workflow Builder</h4>
                <p>100+ pre-built connectors and drag-and-drop interface—no additional development needed</p>
              </div>
              <div className="included-item">
                <h4>Execution Engine</h4>
                <p>Scheduling, retry logic, queue management—proven to handle millions of workflows</p>
              </div>
              <div className="included-item">
                <h4>Workflow Templates</h4>
                <p>20+ pre-built templates covering common use cases—accelerates customer onboarding</p>
              </div>
              <div className="included-item">
                <h4>Analytics Dashboard</h4>
                <p>Real-time monitoring and ROI metrics—demonstrate value to stakeholders</p>
              </div>
              <div className="included-item">
                <h4>API Documentation</h4>
                <p>Complete API reference and SDK—enables custom integrations and extensions</p>
              </div>
              <div className="included-item">
                <h4>Sales Materials</h4>
                <p>Azure partnership positioning, case studies, and pitch decks—ready for enterprise sales</p>
              </div>
              <div className="included-item">
                <h4>Technical Support</h4>
                <p>90-day support period and Azure architecture guidance—smooth post-acquisition transition</p>
              </div>
              <div className="included-item">
                <h4>IP Transfer</h4>
                <p>Full transfer of brand, domain, patents—complete ownership and control</p>
              </div>
            </div>
            <div className="highlight-box" style={{ marginTop: '50px' }}>
              <h4>Valuation Justification</h4>
              <p>Based on development costs ($85K), Azure AI integration ($25K), pilot customer validation ($10K), and conservative 1-2x first-year revenue multiple. The business process automation market is exploding—enterprises are desperate for Azure-native alternatives to expensive RPA platforms. Similar workflow automation tools trade at $5M-$25M valuations.</p>
              <p style={{ marginTop: '20px' }}>You&apos;re acquiring production-ready enterprise software at 95% discount because it&apos;s pre-revenue. Perfect for Microsoft partners, Azure-focused VARs, or enterprise software companies. With Azure partnership and proper enterprise sales, this can reach $1M-$2M ARR within 18-24 months, making the $125K price a 10-15x ROI opportunity. The Azure ecosystem provides built-in distribution channel.</p>
            </div>
            <Link href="/contact/" className="hero-cta" style={{ marginTop: '40px', display: 'block', width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>Schedule Acquisition Call</Link>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>READY TO AUTOMATE THE ENTERPRISE?</h2>
          <p>ProcessFactory solves a $19.6 billion problem for Azure-using enterprises. The technology is proven, the Azure partnership channel is massive, and customers are desperate for affordable automation.</p>
          <Link href="/contact/" className="hero-cta">Contact Us About Purchase →</Link>
        </div>
      </section>
    </>
  );
}



