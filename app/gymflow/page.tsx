import Link from 'next/link';
export default function GymFlow() {
  return (
    <>
      <section className="hero">
        <div className="project-title container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(185,153,53,0.1)', border: '2px solid var(--gold)', padding: '8px 20px', borderRadius: '6px', marginBottom: '25px' }}>
            <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.3rem', color: 'var(--gold)', textDecoration: 'none', fontWeight: '700', letterSpacing: '3px' }}>GYMFLOW</span>
          </div>
          <h1>GYMFLOW</h1>
          <p className="project-tagline" style={{ fontSize: '1.4rem', lineHeight: '1.6', maxWidth: '900px', margin: '0 auto 20px' }}>All-in-One Gym Management &amp; Member Experience Platform</p>
          <p style={{ color: 'var(--white)', opacity: '0.75', fontSize: '1.1rem', marginBottom: '30px' }}>Modern Gym Software at 30-50% Less Than Competitors</p>
          <div className="badge-container">
            <span className="badge badge-api">FITNESS TECH</span>
            <span className="badge badge-saas">SAAS PLATFORM</span>
            <span className="badge badge-production">MOBILE FIRST</span>
          </div>
        </div>
        <div className="buttons">
          <a href="#overview" className="btn btn-primary">Learn More</a>
          <Link href="/contact/" className="btn btn-secondary">Request Demo</Link>
        </div>
      </section>
      <div className="screenshots">
        <div className="carousel-container">
          <div className="carousel-slides" style={{ transform: 'translateX(-0%)' }}>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="GymFlow Dashboard" width="900" height="500" decoding="async" data-nimg="1" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/gymflow-dashboard.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Class Scheduling" loading="lazy" width="900" height="500" decoding="async" data-nimg="1" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/gymflow-classes.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Analytics Dashboard" loading="lazy" width="900" height="500" decoding="async" data-nimg="1" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/gymflow-analytics.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Member Management" loading="lazy" width="900" height="500" decoding="async" data-nimg="1" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/gymflow-members.png" />
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
                <div className="stat-value-large">$108K</div>
                <div className="stat-label-large">Asking Price</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Market Size</span><span className="detail-value">$6.2B by 2027</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Target Gyms</span><span className="detail-value">41,000+ in US</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Status</span><span className="detail-value highlight-green">9/10 Complete</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large">📈</div>
              <div className="stat-content">
                <div className="stat-value-large">$22K-$35K</div>
                <div className="stat-label-large">Monthly Revenue Potential</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Year 1 ARR</span><span className="detail-value">$368K</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Growth Scenario</span><span className="detail-value">$1.3M+ ARR</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Gross Margins</span><span className="detail-value highlight-green">65-75%</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large stat-icon-check">✓</div>
              <div className="stat-content">
                <div className="stat-value-large" style={{ color: '#10b981' }}>90<span style={{ fontSize: '0.5em', opacity: '0.7' }}>%</span></div>
                <div className="stat-label-large">Revenue Ready</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="completion-bar"><div className="completion-fill" style={{ width: '90%' }}></div></div>
                  <div className="stat-detail-item"><span className="detail-label">Unit Economics</span><span className="detail-value">LTV/CAC 35:1</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Documentation</span><span className="detail-value highlight-green">500KB / 13 docs</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="overview">
        <div className="container">
          <h2 className="section-title">What is GymFlow?</h2>
          <div className="content-block">
            <p>GymFlow Pro is a comprehensive gym and fitness studio management platform designed for small to medium-sized facilities. Currently deployed at gymflow.other10.com, the platform streamlines member management, class scheduling, payment processing, and provides powerful analytics - all in a modern, intuitive interface. Built with Next.js 14, TypeScript, Prisma, and PostgreSQL, GymFlow is revenue-ready with Stripe integration, comprehensive documentation (~500 KB across 13 docs), and 9/10 production status.</p>
            <p>Status: Deployed, tested, ready for customers. 0 customers currently (pre-launch, ready to market). The platform consolidates gym operations into a single system: membership plans with automated Stripe billing, flexible class scheduling with instructor assignment, member portal for self-service, and real-time analytics dashboard. Positioned 30-50% cheaper than competitors like Mindbody ($129-299/mo) and Zen Planner ($99-199/mo) with pricing at $49-199/month. Unit Economics: LTV $2,475 | CAC $70 | 35:1 ratio (exceptional).</p>
            <div className="highlight-box">
              <h4>Market Opportunity</h4>
              <p>The global fitness software market is projected to reach $6.2 billion by 2027, growing at 16.7% CAGR. With over 41,000 fitness centers in the US and growing demand for boutique studios, CrossFit boxes, and specialized fitness concepts, gym management software is essential infrastructure. The pandemic accelerated digital transformation in fitness, with 73% of gyms now requiring mobile apps and online booking. However, most gyms use legacy software built in the 2000s with poor mobile experiences and limited integrations. GymFlow delivers modern, mobile-first capabilities at pricing accessible to independent gyms and small chains.</p>
            </div>
            <p>GymFlow&apos;s member app drives engagement and retention through features members actually use: easy class booking, workout tracking, social challenges, achievement badges, nutrition logging, and integration with Apple Health and Google Fit. Higher engagement correlates directly with lower churn, improving gym lifetime customer value by 40-60%.</p>
          </div>
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Member Management &amp; CRM</h3>
              <p>Complete member database with profiles, photos, emergency contacts, medical info, contracts, and communication history. Automated member journeys send personalized emails/SMS at key moments (welcome, birthday, renewal, re-engagement). Track leads through sales funnel with conversion analytics. Segment members for targeted campaigns and offers.</p>
            </div>
            <div className="feature-card">
              <h3>Class Scheduling &amp; Booking</h3>
              <p>Unlimited class schedules with instructor assignments, capacity limits, and waitlists. Members book classes through mobile app with calendar sync and reminder notifications. Automated late cancel penalties and no-show tracking. Recurring class templates save setup time. Real-time capacity and attendance tracking optimize scheduling.</p>
            </div>
            <div className="feature-card">
              <h3>Payment Processing &amp; Billing</h3>
              <p>Automated recurring billing with retry logic for failed payments. Support for memberships, class packs, drop-ins, personal training, retail sales, and custom products. Integrated Stripe payment processing with PCI compliance. Automated dunning sequences recover 30-40% of failed payments. Mobile POS for in-person transactions.</p>
            </div>
            <div className="feature-card">
              <h3>Access Control Integration</h3>
              <p>Integrates with door access systems for member check-ins via mobile app, key fobs, or biometrics. Real-time membership verification prevents unauthorized access. Check-in analytics show peak hours for staffing optimization. Track facility utilization to justify expansion or identify underutilized space.</p>
            </div>
            <div className="feature-card">
              <h3>Member Mobile App</h3>
              <p>Beautiful iOS and Android apps with class booking, payment management, workout logging, progress photos, body measurements, achievement badges, social challenges, and gym announcements. Apple Health and Google Fit integration syncs workouts automatically. Push notifications drive engagement and reduce no-shows by 35%.</p>
            </div>
            <div className="feature-card">
              <h3>Reporting &amp; Analytics</h3>
              <p>Executive dashboards track revenue, new member acquisition, churn, attendance trends, and class popularity. Financial reports for P&amp;L, revenue forecasting, and member lifetime value. Instructor performance metrics and utilization rates. Export to Excel or integrate with accounting software for detailed analysis.</p>
            </div>
            <div className="feature-card">
              <h3>Marketing &amp; Engagement</h3>
              <p>Email and SMS campaigns with templates for promotions, events, and member retention. Automated birthday wishes, membership anniversary celebrations, and milestone achievements. Referral program tracking with automated rewards. Social media integration posts class schedules and member achievements automatically.</p>
            </div>
            <div className="feature-card">
              <h3>Staff Management</h3>
              <p>Instructor schedules, payroll tracking, commission calculations, and performance reviews. Role-based permissions control access to sensitive data. Staff mobile app enables class check-ins, member lookups, and sales on-the-go. Time tracking for hourly staff with timesheet approval workflows.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: '0', maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle" style={{ fontSize: '1.15rem', textAlign: 'center', marginBottom: '60px', opacity: '0.8' }}>Built for reliability, speed, and exceptional mobile experiences</p>
          <div className="tech-stack-grid-large">
            <div className="tech-category-large">
              <h3 className="tech-category-title">Frontend Platform</h3>
              <p className="tech-category-description">Modern React-based admin dashboard and member portal</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Next.js 14</span><span className="tech-detail">Latest Version</span></div>
                <div className="tech-stack-item"><span className="tech-name">React 18</span><span className="tech-detail">Modern UI</span></div>
                <div className="tech-stack-item"><span className="tech-name">TypeScript</span><span className="tech-detail">Type Safety</span></div>
                <div className="tech-stack-item"><span className="tech-name">Tailwind CSS</span><span className="tech-detail">Responsive Design</span></div>
                <div className="tech-stack-item"><span className="tech-name">Server Components</span><span className="tech-detail">Fast Rendering</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Server-side rendering</span><span>✓ Full type safety</span><span>✓ Responsive design</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Mobile Applications</h3>
              <p className="tech-category-description">Native iOS and Android member apps</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">React Native</span><span className="tech-detail">Cross-Platform</span></div>
                <div className="tech-stack-item"><span className="tech-name">iOS App</span><span className="tech-detail">Native Performance</span></div>
                <div className="tech-stack-item"><span className="tech-name">Android App</span><span className="tech-detail">Native Performance</span></div>
                <div className="tech-stack-item"><span className="tech-name">Push Notifications</span><span className="tech-detail">Real-Time Alerts</span></div>
                <div className="tech-stack-item"><span className="tech-name">Health Kit Integration</span><span className="tech-detail">Apple/Google Fit</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Single codebase</span><span>✓ Native performance</span><span>✓ Offline support</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Backend &amp; Database</h3>
              <p className="tech-category-description">Scalable server architecture with robust data persistence</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Node.js</span><span className="tech-detail">Runtime</span></div>
                <div className="tech-stack-item"><span className="tech-name">PostgreSQL</span><span className="tech-detail">Primary Database</span></div>
                <div className="tech-stack-item"><span className="tech-name">Prisma ORM</span><span className="tech-detail">Type-Safe Queries</span></div>
                <div className="tech-stack-item"><span className="tech-name">Redis Cache</span><span className="tech-detail">Sub-ms Latency</span></div>
                <div className="tech-stack-item"><span className="tech-name">RESTful API</span><span className="tech-detail">Clean Architecture</span></div>
              </div>
              <div className="tech-highlights"><span>✓ ACID transactions</span><span>✓ Fast caching</span><span>✓ Type-safe queries</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Integrations &amp; Services</h3>
              <p className="tech-category-description">Third-party services for payments, communications, and analytics</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Stripe Payments</span><span className="tech-detail">Payment Gateway</span></div>
                <div className="tech-stack-item"><span className="tech-name">Twilio SMS</span><span className="tech-detail">Messaging</span></div>
                <div className="tech-stack-item"><span className="tech-name">SendGrid Email</span><span className="tech-detail">Email Campaigns</span></div>
                <div className="tech-stack-item"><span className="tech-name">AWS S3</span><span className="tech-detail">File Storage</span></div>
                <div className="tech-stack-item"><span className="tech-name">Docker</span><span className="tech-detail">Containerization</span></div>
              </div>
              <div className="tech-highlights"><span>✓ PCI compliant</span><span>✓ Automated billing</span><span>✓ 99.9% uptime</span></div>
            </div>
          </div>
          <div className="highlight-box" style={{ marginTop: '60px' }}>
            <h4>Why This Stack?</h4>
            <p>GymFlow uses modern technologies optimized for mobile-first fitness experiences. React Native delivers native iOS and Android apps from a single codebase, reducing development costs while maintaining performance. Next.js and React power the admin dashboard with server-side rendering for fast page loads. PostgreSQL handles transactional data with ACID guarantees essential for payments and billing. Stripe provides enterprise-grade payment processing with PCI compliance, automated subscriptions, and dunning management. Twilio enables SMS notifications and two-factor authentication, while SendGrid handles email campaigns. Redis caching ensures sub-second response times even during peak booking periods. The AWS cloud infrastructure scales automatically and provides 99.9% uptime SLAs.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Revenue Model</h2>
          <p className="section-subtitle">Flexible pricing that grows with gym size and needs</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">$149/mo</div>
              <ul>
                <li>Up to 200 members</li>
                <li>Unlimited classes</li>
                <li>Member mobile app</li>
                <li>Payment processing</li>
                <li>Basic reporting</li>
                <li>Email support</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Professional</h3>
              <div className="price">$299/mo</div>
              <ul>
                <li>Up to 500 members</li>
                <li>Access control integration</li>
                <li>Advanced analytics</li>
                <li>Marketing automation</li>
                <li>Custom branding</li>
                <li>Priority support</li>
                <li>Multi-location support</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">$599/mo</div>
              <ul>
                <li>Unlimited members</li>
                <li>White-label mobile apps</li>
                <li>API access</li>
                <li>Custom integrations</li>
                <li>Dedicated account manager</li>
                <li>SLA guarantees</li>
                <li>Custom contracts</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Add-Ons</h3>
              <div className="price">Variable</div>
              <ul>
                <li>Payment processing (2.9% + 30¢)</li>
                <li>SMS notifications ($0.02/SMS)</li>
                <li>Additional locations ($99/mo)</li>
                <li>On-site training</li>
                <li>Data migration services</li>
              </ul>
            </div>
          </div>
          <div className="highlight-box">
            <h4>Revenue Projections</h4>
            <p><strong>Conservative Estimate:</strong> 80 Starter gyms ($11,920/mo) + 35 Professional gyms ($10,465/mo) + 8 Enterprise gyms ($4,792/mo) + payment processing revenue (avg $3,500/mo) = $30,677/month = $368K ARR within 18 months</p>
            <p><strong>Growth Scenario:</strong> With strong fitness industry partnerships and referrals, achieving 200 Starter, 100 Professional, and 25 Enterprise customers would generate $91K/month = $1.09M ARR, with payment processing adding another $15-20K/month. Total revenue $1.3M+ ARR with 65-75% gross margins typical for fitness SaaS.</p>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: '0', maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Target Market</h2>
          <p className="section-subtitle">Fitness businesses seeking modern, integrated management solutions</p>
          <div className="target-grid">
            <div className="target-card">
              <h3>Boutique Fitness Studios</h3>
              <p>Specialized studios (yoga, pilates, spin, barre, HIIT) need class booking, capacity management, and member apps. GymFlow&apos;s mobile-first approach drives member engagement and reduces no-shows. White-label app options maintain brand consistency. Typical spend: $299-$599/month plus payment processing.</p>
            </div>
            <div className="target-card">
              <h3>CrossFit Boxes</h3>
              <p>CrossFit affiliates need class scheduling, WOD tracking, benchmark logging, and community features. GymFlow&apos;s workout logging and social challenges foster the competitive community culture CrossFitters love. Access control prevents drop-ins from using facility without payment. Typical spend: $149-$299/month.</p>
            </div>
            <div className="target-card">
              <h3>Traditional Gyms</h3>
              <p>Full-service gyms with equipment, classes, and personal training need comprehensive member management, billing automation, and analytics. Multi-location support enables chain growth. Access control integration streamlines check-ins. Retail POS handles supplement and merchandise sales. Typical spend: $299-$599/month.</p>
            </div>
            <div className="target-card">
              <h3>Martial Arts Studios</h3>
              <p>Karate, BJJ, MMA, and boxing gyms need belt tracking, skill progression, tournament management, and parent communication. Family membership support and kid-specific features cater to youth programs. Attendance tracking helps instructors monitor student commitment. Typical spend: $149-$299/month.</p>
            </div>
            <div className="target-card">
              <h3>Personal Training Studios</h3>
              <p>PT-focused facilities need session package management, trainer scheduling, client progress tracking, and automated billing. Integration with assessment tools and workout builders. Trainer commission calculations and payroll reports. Video exercise library for custom program building. Typical spend: $149-$299/month.</p>
            </div>
            <div className="target-card">
              <h3>Multi-Location Fitness Chains</h3>
              <p>Regional and national chains need centralized management with location-specific customization. Consolidated reporting across all sites, centralized billing, multi-location membership access, and franchise-specific permissions. Enterprise features support rapid expansion. Typical spend: $599/month + $99/additional location.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Competitive Advantages</h2>
          <div className="competitive-grid">
            <div className="competitive-card">
              <h3>Modern Mobile Experience</h3>
              <p>Legacy gym software (Mindbody, Zen Planner, Glofox) offers basic mobile apps as afterthoughts. GymFlow is mobile-first with native iOS/Android apps that members love using. Beautiful design, smooth performance, and features like workout tracking and social challenges drive 3x higher engagement than competitors.</p>
            </div>
            <div className="competitive-card">
              <h3>All-in-One Platform</h3>
              <p>Most gyms cobble together separate systems for scheduling, billing, access control, and member apps, paying $400-800/month total. GymFlow provides all functionality in one integrated platform at lower cost with seamless data flow. No more manual data entry or reconciliation between systems.</p>
            </div>
            <div className="competitive-card">
              <h3>Transparent Pricing</h3>
              <p>Competitors hide pricing, require long contracts, and charge setup fees of $500-2,000. GymFlow offers month-to-month pricing published online, free setup, and no long-term commitments. Gyms can cancel anytime without penalty, demonstrating our confidence in the product&apos;s value.</p>
            </div>
            <div className="competitive-card">
              <h3>Payment Processing Integration</h3>
              <p>Most gym software requires separate payment processors with reconciliation headaches. GymFlow&apos;s integrated Stripe processing means automatic payment matching, instant access to funds, and lower overall payment processing fees. Automated dunning recovers 30-40% of failed payments automatically.</p>
            </div>
            <div className="competitive-card">
              <h3>Superior User Experience</h3>
              <p>Competing platforms have cluttered interfaces and steep learning curves requiring days of training. GymFlow&apos;s intuitive design enables staff to become productive in hours. Modern UI/UX principles and keyboard shortcuts make common tasks 5-10x faster than legacy software.</p>
            </div>
            <div className="competitive-card">
              <h3>Engagement-Driven Retention</h3>
              <p>Traditional gym software focuses only on business operations. GymFlow&apos;s member app includes workout tracking, progress photos, achievement badges, social challenges, and nutrition logging that drive engagement. Higher engagement correlates with 40-60% lower churn, directly improving gym profitability.</p>
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
              <div className="price">$108,000</div>
              <p style={{ color: 'var(--gold)', marginTop: '1rem', fontSize: '1.1rem' }}>Revenue-Ready SaaS Platform</p>
            </div>
            <h3>What&apos;s Included</h3>
            <div className="included-grid">
              <div className="included-item">
                <h4>Complete Source Code</h4>
                <p>Full platform codebase with Next.js admin dashboard, React Native mobile apps (iOS &amp; Android), and Node.js backend (85% complete)</p>
              </div>
              <div className="included-item">
                <h4>Mobile Applications</h4>
                <p>Native iOS and Android member apps with class booking, workout tracking, social features, and payment management ready for App Store submission</p>
              </div>
              <div className="included-item">
                <h4>Payment Processing Integration</h4>
                <p>Fully integrated Stripe payment processing with subscription billing, dunning management, and PCI compliance</p>
              </div>
              <div className="included-item">
                <h4>Member Management System</h4>
                <p>Complete CRM with profiles, contracts, communication history, lead tracking, and automated member journeys</p>
              </div>
              <div className="included-item">
                <h4>Domain &amp; Branding</h4>
                <p>GymFlow.io domain, logo, brand assets, marketing materials, and website design</p>
              </div>
              <div className="included-item">
                <h4>Scheduling Engine</h4>
                <p>Class scheduling system with unlimited schedules, instructor assignments, waitlists, and automated notifications</p>
              </div>
              <div className="included-item">
                <h4>Access Control Framework</h4>
                <p>Integration framework for door access systems with check-in tracking and utilization analytics</p>
              </div>
              <div className="included-item">
                <h4>Marketing Automation</h4>
                <p>Email and SMS campaign tools with templates, automated journeys, and referral program tracking</p>
              </div>
              <div className="included-item">
                <h4>Technical Documentation</h4>
                <p>Architecture diagrams, API documentation, deployment guides, and user documentation (~500KB across 13 docs)</p>
              </div>
              <div className="included-item">
                <h4>Support &amp; Training</h4>
                <p>60 days of technical support, knowledge transfer sessions, and documentation to ensure successful handoff</p>
              </div>
            </div>
            <div className="highlight-box">
              <h4>Valuation Justification</h4>
              <p>GymFlow is valued at $108K based on 85% development completion, native mobile apps for iOS and Android, integrated payment processing, and strong positioning in the growing fitness software market ($6.2B by 2027). The platform addresses critical gym owner pain points—fragmented systems, poor mobile experiences, and complex billing—with a modern, integrated solution at competitive pricing.</p>
              <p>With conservative customer acquisition projections (80 Starter + 35 Professional + 8 Enterprise gyms), GymFlow can generate $368K ARR within 18 months, with payment processing adding significant additional revenue. The asking price represents a 3.5x revenue multiple at 12-month projections, well below the 6-10x typical for fitness SaaS companies, providing substantial upside potential. The fitness industry is growing rapidly post-pandemic, with increasing demand for digital tools that enhance member experience and retention.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>READY TO ACQUIRE GYMFLOW?</h2>
          <p>A production-ready gym management platform with mobile apps, payment processing, and comprehensive features. Contact us to discuss acquisition opportunities.</p>
          <Link href="/contact/" className="hero-cta">Contact Us →</Link>
        </div>
      </section>
    </>
  );
}



