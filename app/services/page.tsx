import Link from 'next/link';
export default function ServicesPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>OUR SERVICES</h1>
          <p>From concept to deployment, we deliver comprehensive digital solutions that combine elegant design with powerful technology. Every service is tailored to your unique business needs.</p>
        </div>
      </section>
      <section className="services-section">
        <div className="container">
          <div className="service-card">
            <div className="service-image">
              <span>Web design mockup example</span>
              <span className="dimensions">600x600px</span>
            </div>
            <div className="service-content">
              <div className="service-number">Service 01</div>
              <h3>Custom Web Design</h3>
              <p>Bespoke website design that captures your brand&apos;s essence while delivering exceptional user experiences. We create visually stunning, responsive websites tailored to your aesthetic preferences and business goals.</p>
              <ul className="service-features">
                <li>Custom design systems and brand aesthetics</li>
                <li>Responsive design across all devices</li>
                <li>Custom typography and color systems</li>
                <li>Performance-optimized assets</li>
                <li>SEO-friendly architecture</li>
              </ul>
              <Link href="/contact/" className="service-cta">Start Your Project</Link>
            </div>
          </div>
          <div className="service-card">
            <div className="service-image">
              <span>SaaS platform dashboard</span>
              <span className="dimensions">600x600px</span>
            </div>
            <div className="service-content">
              <div className="service-number">Service 02</div>
              <h3>Enterprise SaaS Development</h3>
              <p>Full-stack SaaS application development from architecture to deployment. We build scalable, secure platforms that handle millions of transactions with enterprise-grade reliability.</p>
              <ul className="service-features">
                <li>Next.js / React frontend development</li>
                <li>FastAPI / Python backend systems</li>
                <li>Multi-tenant architecture</li>
                <li>API design and integration</li>
                <li>Cloud infrastructure (AWS, Azure, DO)</li>
              </ul>
              <Link href="/contact/" className="service-cta">Discuss Your Platform</Link>
            </div>
          </div>
          <div className="service-card">
            <div className="service-image">
              <span>UI/UX design screens</span>
              <span className="dimensions">600x600px</span>
            </div>
            <div className="service-content">
              <div className="service-number">Service 03</div>
              <h3>UI/UX Design</h3>
              <p>User interface and experience design focused on usability without sacrificing aesthetic beauty. We create intuitive interfaces that users love to interact with.</p>
              <ul className="service-features">
                <li>User research and persona development</li>
                <li>Wireframing and prototyping</li>
                <li>Design system creation</li>
                <li>Usability testing and iteration</li>
                <li>Accessibility compliance (WCAG)</li>
              </ul>
              <Link href="/contact/" className="service-cta">Enhance Your UX</Link>
            </div>
          </div>
          <div className="service-card">
            <div className="service-image">
              <span>AI/ML integration visualization</span>
              <span className="dimensions">600x600px</span>
            </div>
            <div className="service-content">
              <div className="service-number">Service 04</div>
              <h3>AI Integration &amp; Automation</h3>
              <p>Leverage artificial intelligence to automate processes, extract insights, and enhance your applications. From invoice reconciliation to data validation, we make AI practical.</p>
              <ul className="service-features">
                <li>OpenAI and LangChain integration</li>
                <li>Custom ML model development</li>
                <li>Document processing automation</li>
                <li>Natural language interfaces</li>
                <li>Predictive analytics systems</li>
              </ul>
              <Link href="/contact/" className="service-cta">Explore AI Solutions</Link>
            </div>
          </div>
          <div className="service-card">
            <div className="service-image">
              <span>API security dashboard</span>
              <span className="dimensions">600x600px</span>
            </div>
            <div className="service-content">
              <div className="service-number">Service 05</div>
              <h3>API Development &amp; Security</h3>
              <p>Secure, scalable API design and implementation with comprehensive authentication, rate limiting, and monitoring. We build APIs that power modern applications safely.</p>
              <ul className="service-features">
                <li>RESTful and GraphQL APIs</li>
                <li>JWT and OAuth2 authentication</li>
                <li>Rate limiting and throttling</li>
                <li>API documentation (OpenAPI/Swagger)</li>
                <li>Real-time threat detection</li>
              </ul>
              <Link href="/contact/" className="service-cta">Secure Your APIs</Link>
            </div>
          </div>
          <div className="service-card">
            <div className="service-image">
              <span>DevOps pipeline diagram</span>
              <span className="dimensions">600x600px</span>
            </div>
            <div className="service-content">
              <div className="service-number">Service 06</div>
              <h3>DevOps &amp; Cloud Infrastructure</h3>
              <p>Complete infrastructure management from deployment pipelines to monitoring. We ensure your applications run reliably 24/7 with minimal downtime and optimal performance.</p>
              <ul className="service-features">
                <li>CI/CD pipeline setup (GitHub Actions)</li>
                <li>Container orchestration (Docker, K8s)</li>
                <li>Server management and optimization</li>
                <li>Monitoring and alerting (PM2, CloudWatch)</li>
                <li>Backup and disaster recovery</li>
              </ul>
              <Link href="/contact/" className="service-cta">Optimize Infrastructure</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">OUR PROCESS</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>DISCOVERY</h3>
              <p>We begin by understanding your business, goals, users, and technical requirements through detailed consultation.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>DESIGN</h3>
              <p>Our designers create wireframes and high-fidelity mockups, iterating based on your feedback until perfect.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>DEVELOPMENT</h3>
              <p>Our engineers build your solution using best practices, clean code, and modern technologies with regular updates.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>TESTING</h3>
              <p>Rigorous QA ensures every feature works flawlessly across devices, browsers, and edge cases before launch.</p>
            </div>
            <div className="process-step">
              <div className="step-number">05</div>
              <h3>LAUNCH</h3>
              <p>We deploy your solution to production with proper monitoring, ensuring a smooth transition to live operations.</p>
            </div>
            <div className="process-step">
              <div className="step-number">06</div>
              <h3>SUPPORT</h3>
              <p>Ongoing maintenance, updates, and support keep your application running optimally as your business grows.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>READY TO TRANSFORM YOUR BUSINESS?</h2>
          <p>Let&apos;s discuss how our expertise can help you build exceptional digital products that drive real results. Schedule a consultation to explore partnership opportunities.</p>
          <Link href="/contact/" className="hero-cta">Start Your Project →</Link>
        </div>
      </section>
    </>
  );
}



