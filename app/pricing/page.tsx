export default function PricingPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>INVESTMENT IN EXCELLENCE</h1>
          <p>Premium web design and SaaS development services tailored to your business needs. Transparent pricing for exceptional results.</p>
        </div>
      </section>
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>CONSULTATION</h3>
              <div className="price">$2,500 <span>/ session</span></div>
              <ul className="pricing-features">
                <li>Strategic Planning Session</li>
                <li>Technical Architecture Review</li>
                <li>UX/UI Design Consultation</li>
                <li>Technology Stack Recommendations</li>
                <li>Detailed Project Roadmap</li>
                <li>Cost &amp; Timeline Estimates</li>
              </ul>
              <a href="/contact/" className="pricing-cta">Schedule Session</a>
            </div>
            <div className="pricing-card">
              <h3>WEB DESIGN</h3>
              <div className="price">$15K <span>starting</span></div>
              <ul className="pricing-features">
                <li>Custom Design System</li>
                <li>Responsive Multi-Page Website</li>
                <li>Brand Identity Integration</li>
                <li>SEO Optimization</li>
                <li>Performance Tuning</li>
                <li>Content Management System</li>
                <li>3 Months Support</li>
              </ul>
              <a href="/contact/" className="pricing-cta">Get Quote</a>
            </div>
            <div className="pricing-card featured">
              <span className="featured-badge">MOST POPULAR</span>
              <h3>SAAS PLATFORM</h3>
              <div className="price">$75K <span>starting</span></div>
              <ul className="pricing-features">
                <li>Full-Stack Development</li>
                <li>Custom UI/UX Design</li>
                <li>Database Architecture</li>
                <li>API Development</li>
                <li>Authentication &amp; Security</li>
                <li>Cloud Infrastructure Setup</li>
                <li>6 Months Support &amp; Updates</li>
              </ul>
              <a href="/contact/" className="pricing-cta">Discuss Project</a>
            </div>
          </div>
          <div className="enterprise-tier">
            <div className="enterprise-header">
              <h3>ENTERPRISE SOLUTIONS</h3>
              <div className="price">$150K+ <span style={{ fontSize: '1rem', opacity: '0.7' }}>/ Custom Quote</span></div>
              <p>Mission-critical platforms engineered for scale, security, and performance. Dedicated teams delivering enterprise-grade solutions with comprehensive support and strategic partnership.</p>
            </div>
            <div className="enterprise-features-grid">
              <div className="enterprise-feature-category">
                <h4>Platform Development</h4>
                <ul>
                  <li>Multi-Tenant Architecture</li>
                  <li>Microservices Design</li>
                  <li>Event-Driven Systems</li>
                  <li>Real-Time Data Processing</li>
                  <li>Advanced Caching Strategies</li>
                  <li>Database Sharding &amp; Replication</li>
                  <li>Message Queue Implementation</li>
                  <li>GraphQL &amp; REST API Design</li>
                </ul>
              </div>
              <div className="enterprise-feature-category">
                <h4>Security &amp; Compliance</h4>
                <ul>
                  <li>SOC 2 Compliance Planning</li>
                  <li>GDPR &amp; CCPA Implementation</li>
                  <li>Advanced Encryption (AES-256)</li>
                  <li>OAuth 2.0 &amp; SSO Integration</li>
                  <li>Role-Based Access Control</li>
                  <li>Security Audit &amp; Penetration Testing</li>
                  <li>DDoS Protection &amp; WAF</li>
                  <li>Automated Vulnerability Scanning</li>
                </ul>
              </div>
              <div className="enterprise-feature-category">
                <h4>DevOps &amp; Infrastructure</h4>
                <ul>
                  <li>Kubernetes Orchestration</li>
                  <li>Docker Containerization</li>
                  <li>CI/CD Pipeline (GitHub Actions)</li>
                  <li>Infrastructure as Code (Terraform)</li>
                  <li>Multi-Region Deployment</li>
                  <li>Auto-Scaling &amp; Load Balancing</li>
                  <li>AWS/Azure/GCP Configuration</li>
                  <li>99.9% Uptime SLA</li>
                </ul>
              </div>
              <div className="enterprise-feature-category">
                <h4>Integrations &amp; APIs</h4>
                <ul>
                  <li>Salesforce Integration</li>
                  <li>Microsoft 365 &amp; Azure AD</li>
                  <li>Slack &amp; Teams Connectors</li>
                  <li>Payment Gateway Setup (Stripe)</li>
                  <li>Webhook Management</li>
                  <li>Third-Party API Orchestration</li>
                  <li>Custom Integration Development</li>
                  <li>API Documentation (OpenAPI)</li>
                </ul>
              </div>
              <div className="enterprise-feature-category">
                <h4>Analytics &amp; Monitoring</h4>
                <ul>
                  <li>Real-Time Dashboards</li>
                  <li>Custom Reporting Engine</li>
                  <li>Application Performance Monitoring</li>
                  <li>Error Tracking (Sentry)</li>
                  <li>Log Aggregation &amp; Analysis</li>
                  <li>Business Intelligence Integration</li>
                  <li>User Behavior Analytics</li>
                  <li>Automated Alerting System</li>
                </ul>
              </div>
              <div className="enterprise-feature-category">
                <h4>Support &amp; Partnership</h4>
                <ul>
                  <li>Dedicated Project Manager</li>
                  <li>Technical Account Manager</li>
                  <li>24/7 Critical Support</li>
                  <li>Quarterly Strategy Reviews</li>
                  <li>Priority Bug Fixes (4hr SLA)</li>
                  <li>12 Months Post-Launch Support</li>
                  <li>Knowledge Base Development</li>
                  <li>Team Training &amp; Onboarding</li>
                </ul>
              </div>
            </div>
            <div className="enterprise-cta-container">
              <p>Schedule a consultation to discuss your enterprise requirements and receive a custom proposal.</p>
              <a href="/contact/" className="enterprise-cta">Contact Enterprise Sales →</a>
            </div>
          </div>
          <div className="retainer-box">
            <h3>RETAINER SERVICES</h3>
            <p>Ongoing development, maintenance, and support services available from <strong>$8,000/month</strong></p>
            <a href="/contact/" className="pricing-cta">Inquire About Retainers</a>
          </div>
        </div>
      </section>
    </>
  );
}
