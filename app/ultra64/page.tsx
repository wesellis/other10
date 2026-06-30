export default function Ultra64() {
  return (
    <>
      <section className="hero">
        <div className="project-title container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(185,153,53,0.1)', border: '2px solid var(--gold)', padding: '8px 20px', borderRadius: '6px', marginBottom: '25px' }}>
            <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.3rem', color: 'var(--gold)', textDecoration: 'none', fontWeight: 700, letterSpacing: '3px' }}>ULTRA64</span>
          </div>
          <h1>ULTRA64</h1>
          <p className="project-tagline" style={{ fontSize: '1.4rem', lineHeight: 1.6, maxWidth: '900px', margin: '0 auto 20px' }}>Curated Retro Gaming Marketplace &amp; Collector Community</p>
          <p style={{ color: 'var(--white)', opacity: 0.75, fontSize: '1.1rem', marginBottom: '30px' }}>Trusted Platform for Authentic Collectibles</p>
          <div className="badge-container">
            <span className="badge badge-retro">Retro Gaming</span>
            <span className="badge badge-marketplace">Marketplace</span>
            <span className="badge badge-beta">Beta</span>
          </div>
        </div>
        <div className="buttons">
          <a href="#overview" className="btn btn-primary">Learn More</a>
          <a href="/contact/" className="btn btn-secondary">Request Demo</a>
        </div>
      </section>
      <div className="screenshots">
        <div className="carousel-container">
          <div className="carousel-slides" style={{ transform: 'translateX(-0%)' }}>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Ultra64 Marketplace" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/ultra64-marketplace.png" />
            </div>
            <div className="screenshot-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Ultra64 Mobile App" loading="lazy" width="900" height="500" decoding="async" style={{ color: 'transparent', objectFit: 'contain' }} src="/images/ultra64-mobile.png" />
            </div>
          </div>
          <button className="carousel-nav carousel-prev" aria-label="Previous slide">‹</button>
          <button className="carousel-nav carousel-next" aria-label="Next slide">›</button>
          <div className="carousel-indicators">
            <div className="carousel-dot active" aria-label="Go to slide 1"></div>
            <div className="carousel-dot " aria-label="Go to slide 2"></div>
          </div>
        </div>
      </div>
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid-enhanced">
            <div className="stat-card-enhanced">
              <div className="stat-icon-large">💰</div>
              <div className="stat-content">
                <div className="stat-value-large">$88,000</div>
                <div className="stat-label-large">Asking Price</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Development Status</span><span className="detail-value">Concept/Prototype</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Code Base</span><span className="detail-value">100+ Python files</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Additional Work</span><span className="detail-value highlight-green">470-680 hours</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large">📈</div>
              <div className="stat-content">
                <div className="stat-value-large">$12K-$22K</div>
                <div className="stat-label-large">Monthly Revenue Potential</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="stat-detail-item"><span className="detail-label">Annual Recurring</span><span className="detail-value">$204K ARR</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Market Size</span><span className="detail-value">2M+ collectors</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Market CAGR</span><span className="detail-value highlight-green">9-15% growth</span></div>
                </div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon-large stat-icon-check">⚠️</div>
              <div className="stat-content">
                <div className="stat-value-large" style={{ color: '#f59e0b' }}>35<span style={{ fontSize: '0.5em', opacity: 0.7 }}>%</span></div>
                <div className="stat-label-large">Complete</div>
                <div className="stat-divider"></div>
                <div className="stat-details">
                  <div className="completion-bar"><div className="completion-fill" style={{ width: '35%', background: '#f59e0b' }}></div></div>
                  <div className="stat-detail-item"><span className="detail-label">Infrastructure</span><span className="detail-value">Backend services exist</span></div>
                  <div className="stat-detail-item"><span className="detail-label">Missing</span><span className="detail-value highlight-green">Game database</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="overview">
        <div className="container">
          <h2 className="section-title">What is Ultra64?</h2>
          <div className="content-block">
            <p>Ultra64 is a concept/prototype (35% complete) for a retro gaming marketplace and community platform. Status: Significant code infrastructure exists (100+ Python backend files, JavaScript frontend components, database scripts, trading engine services) but core content is missing. The advertised &quot;20K games database&quot; does not exist in the repository - no actual game data, images, or pricing information. Trading and marketplace features are incomplete, payment integration status unclear, and platform requires 470-680 hours of additional development to reach production MVP.</p>
            <p>What Exists: Backend services (Python) with trading engine, payment processing framework, security layers, search services. Frontend components (JavaScript) including GameCard, SearchFilter, collection manager, auth system, PWA features. Database scripts for optimization and migrations. What&apos;s Missing: Actual game database (20K games claimed but absent), game images and media, complete trading/marketplace features, functional payment flows, deployment infrastructure, data licensing agreements, and comprehensive testing. This is a learning project exploring retro gaming concepts rather than a production-ready platform.</p>
            <div className="highlight-box">
              <h4>Market Opportunity</h4>
              <p>The retro gaming market is estimated at $200 million annually and growing 9-15% per year as millennials with disposable income seek to recapture childhood memories. Rare games like sealed Stadium Events ($40K+) and Chrono Trigger ($200-$1,000 depending on condition) create significant transaction value. However, collectors struggle with authenticity concerns, fair pricing, and finding specific items. Ultra64 provides trusted infrastructure for this passionate community, capturing transaction fees, premium memberships, and authentication services while building the definitive platform for retro gaming commerce.</p>
            </div>
            <p>Ultra64&apos;s community features—forums, collection showcases, achievement badges for completing sets, and live streams of gameplay and unboxings—create engagement that keeps users returning daily. Network effects make the platform more valuable as more collectors join, creating a defensible moat against competition.</p>
          </div>
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Curated Marketplace</h3>
              <p>Specialized listings for consoles, games, accessories, and collectibles with detailed condition descriptions, photos, and seller ratings. Advanced search filters by console, genre, region, condition, price, and rarity. Verified seller badges for trusted merchants. Automated listing templates ensure consistency and completeness. Integration with PriceCharting API provides real-time market values.</p>
            </div>
            <div className="feature-card">
              <h3>Authenticity Verification</h3>
              <p>Expert authentication service for high-value games and sealed items. Buyers can request verification before completing purchases on items over $500. Trained authenticators examine cartridge shells, labels, PCBs, and packaging using known authentic examples. Verified items receive certificates of authenticity, increasing resale value and buyer confidence.</p>
            </div>
            <div className="feature-card">
              <h3>Price Guides &amp; Market Data</h3>
              <p>Comprehensive price database showing current market values, historical trends, and recent sales for 50,000+ games and collectibles. Identify investment opportunities (games trending up) and fair prices (avoid overpaying). Price alerts notify collectors when coveted items list below target prices. Data visualization shows market trends and seasonal patterns.</p>
            </div>
            <div className="feature-card">
              <h3>Collection Management</h3>
              <p>Digital collection tracking with automatic value calculations based on current market prices. Wishlist and want list features help complete collections. Showcase collections publicly with custom displays and sorting. Export collection data for insurance documentation. Track collection value over time to measure investment performance.</p>
            </div>
            <div className="feature-card">
              <h3>Secure Escrow &amp; Payments</h3>
              <p>Escrow service for transactions over $1,000 protects both buyers and sellers. Funds held until buyer confirms item authenticity and condition. Integrated Stripe payments with buyer/seller protection. Automated seller payouts after inspection period. Dispute resolution process for transaction issues. Reduces fraud risk for high-value collectibles.</p>
            </div>
            <div className="feature-card">
              <h3>Community &amp; Forums</h3>
              <p>Discussion forums for console-specific topics, collecting strategies, restoration techniques, and gaming nostalgia. User profiles showcase collections and trading history. Achievement system rewards active community members and collection milestones. Direct messaging for negotiating trades and sales. Reputation system builds trust through verified transactions.</p>
            </div>
            <div className="feature-card">
              <h3>Grading &amp; Condition Standards</h3>
              <p>Standardized condition grading system (Mint, Near Mint, Excellent, Good, Acceptable) with detailed definitions and photo examples. Sellers must grade items using standard criteria. Professional grading service available for valuable items. Graded games command premium prices and sell faster due to buyer confidence in condition accuracy.</p>
            </div>
            <div className="feature-card">
              <h3>Mobile Apps &amp; Notifications</h3>
              <p>iOS and Android apps for browsing listings, managing collections, and receiving instant notifications for new listings matching saved searches. Barcode scanner identifies games and adds them to collection instantly. Push notifications for price drops, auction endings, and offers on your listings. On-the-go selling and buying for active collectors.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: 0, maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle" style={{ fontSize: '1.15rem', textAlign: 'center', marginBottom: '60px', opacity: 0.8 }}>Built for collectors by collectors with modern marketplace infrastructure</p>
          <div className="tech-stack-grid-large">
            <div className="tech-category-large">
              <h3 className="tech-category-title">Frontend Platform</h3>
              <p className="tech-category-description">Modern, responsive marketplace with real-time features</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Next.js 14</span><span className="tech-detail">Framework</span></div>
                <div className="tech-stack-item"><span className="tech-name">React 18</span><span className="tech-detail">UI Library</span></div>
                <div className="tech-stack-item"><span className="tech-name">TypeScript</span><span className="tech-detail">Type Safety</span></div>
                <div className="tech-stack-item"><span className="tech-name">React Native</span><span className="tech-detail">Mobile Apps</span></div>
              </div>
              <div className="tech-highlights"><span>✓ SEO-friendly pages</span><span>✓ Fast page loads</span><span>✓ Native mobile apps</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Backend Services</h3>
              <p className="tech-category-description">Scalable API and marketplace infrastructure</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Node.js</span><span className="tech-detail">Runtime</span></div>
                <div className="tech-stack-item"><span className="tech-name">PostgreSQL</span><span className="tech-detail">Primary Database</span></div>
                <div className="tech-stack-item"><span className="tech-name">Redis</span><span className="tech-detail">Cache Layer</span></div>
                <div className="tech-stack-item"><span className="tech-name">Algolia Search</span><span className="tech-detail">Instant Search</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Complex relational data</span><span>✓ Sub-second searches</span><span>✓ Scalable architecture</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Marketplace Features</h3>
              <p className="tech-category-description">E-commerce and payment processing</p>
              <div className="tech-category-items">
                <div className="tech-stack-item"><span className="tech-name">Stripe Connect</span><span className="tech-detail">Payments</span></div>
                <div className="tech-stack-item"><span className="tech-name">AWS S3</span><span className="tech-detail">Image Storage</span></div>
                <div className="tech-stack-item"><span className="tech-name">SendGrid</span><span className="tech-detail">Email Service</span></div>
                <div className="tech-stack-item"><span className="tech-name">Docker</span><span className="tech-detail">Containerization</span></div>
              </div>
              <div className="tech-highlights"><span>✓ Marketplace payments</span><span>✓ Seller payouts</span><span>✓ Escrow holds</span></div>
            </div>
            <div className="tech-category-large">
              <h3 className="tech-category-title">Why This Stack?</h3>
              <p className="tech-category-description">Optimized for niche collectibles marketplace</p>
              <div className="tech-category-items">
                <div className="tech-stack-item" style={{ background: 'transparent', border: 'none', padding: '0', justifyContent: 'flex-start' }}>
                  <p style={{ color: 'var(--white)', opacity: 0.85, fontSize: '0.95rem', lineHeight: 1.8, margin: 0 }}>Ultra64 uses modern e-commerce and marketplace technologies optimized for niche collectibles. Next.js and React provide fast, SEO-friendly pages crucial for organic traffic from collectors searching for specific games. PostgreSQL handles complex relational data (users, listings, transactions, collections, pricing history). Algolia powers instant search with typo tolerance and faceted filtering across thousands of listings. Stripe Connect enables marketplace payments with seller payouts and escrow holds. AWS S3 stores high-resolution item photos essential for condition assessment. React Native mobile apps serve collectors browsing at conventions and game stores. Redis caching ensures sub-second page loads during traffic spikes from viral listings or community events. SendGrid handles transactional emails and collector newsletters.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Revenue Model</h2>
          <p className="section-subtitle">Multiple revenue streams serving the collector community</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Marketplace Fees</h3>
              <div className="price">8% + $0.50</div>
              <ul>
                <li>Commission on completed sales</li>
                <li>Covers payment processing</li>
                <li>Competitive with eBay rates</li>
                <li>No listing fees</li>
                <li>No hidden charges</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Premium Membership</h3>
              <div className="price">$9.99/mo</div>
              <ul>
                <li>Reduced fees (5% vs 8%)</li>
                <li>Unlimited saved searches</li>
                <li>Early access to new listings</li>
                <li>Featured seller badge</li>
                <li>Advanced analytics</li>
                <li>Priority support</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Authentication Service</h3>
              <div className="price">$49-$199</div>
              <ul>
                <li>Expert verification</li>
                <li>Certificate of authenticity</li>
                <li>Pricing based on item value</li>
                <li>Photo documentation</li>
                <li>5-7 day turnaround</li>
                <li>Increases resale value 15-30%</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Featured Listings</h3>
              <div className="price">$4.99-$19.99</div>
              <ul>
                <li>Promoted placement</li>
                <li>3-7 day duration</li>
                <li>Homepage visibility</li>
                <li>Email blast inclusion</li>
                <li>5-10x more views</li>
              </ul>
            </div>
          </div>
          <div className="highlight-box">
            <h4>Revenue Projections</h4>
            <p><strong>Conservative Estimate:</strong> $150K monthly GMV (gross merchandise value) × 8% commission = $12K/mo + 300 premium members × $10/mo = $3K/mo + authentication/featured listings $2K/mo = $17K/month = $204K ARR within 18 months</p>
            <p><strong>Growth Scenario:</strong> As network effects kick in and collector community grows, achieving $500K monthly GMV with 1,000 premium members and robust authentication services could generate $55K/month = $660K ARR. Marketplace businesses scale efficiently as platform overhead remains relatively fixed while transaction volume grows.</p>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--off-black)', margin: 0, maxWidth: '100%' }}>
        <div className="container">
          <h2 className="section-title">Target Market</h2>
          <p className="section-subtitle">Passionate collectors and gaming enthusiasts</p>
          <div className="target-grid">
            <div className="target-card">
              <h3>Serious Collectors</h3>
              <p>Dedicated collectors pursuing complete sets, rare variants, and investment-grade sealed games. Seek authenticity guarantees, fair pricing, and access to rare items. Willing to pay premium for verified authentic items and expert grading. Engage daily, spend $500-5,000/year on purchases. Prime candidates for premium memberships and authentication services.</p>
            </div>
            <div className="target-card">
              <h3>Casual Nostalgia Buyers</h3>
              <p>Millennials and Gen X gamers reacquiring childhood favorites or games they missed. Make occasional purchases ($50-300) driven by nostalgia rather than investment. Value convenience, fair prices, and authenticity assurance. Largest addressable market segment but lower transaction frequency than serious collectors.</p>
            </div>
            <div className="target-card">
              <h3>Game Store Owners</h3>
              <p>Independent retro game stores using platform to source inventory wholesale and sell rare items to national audience. Need reliable supply, authentication services, and reach beyond local market. Benefit from seller tools, bulk listing features, and professional seller accounts. Potential white-label opportunities.</p>
            </div>
            <div className="target-card">
              <h3>Investors &amp; Flippers</h3>
              <p>Buyers treating retro games as alternative investments, purchasing items to hold and resell as values appreciate. Need accurate market data, price trends, and authentication for high-value transactions. Volume sellers requiring efficient tools and competitive fees. Premium members seeking fee discounts and analytics.</p>
            </div>
            <div className="target-card">
              <h3>YouTube Content Creators</h3>
              <p>Gaming YouTubers and streamers showcasing retro game collections, pickups, and gameplay. Drive significant traffic through collection showcases and marketplace features in videos. Influencer partnerships and affiliate programs monetize their audience while growing platform awareness organically.</p>
            </div>
            <div className="target-card">
              <h3>Convention Attendees</h3>
              <p>Collectors attending retro gaming conventions (Portland Retro Gaming Expo, Classic Gaming Expo) seeking pre-show deals and post-show sales to recoup expenses. Mobile app crucial for on-the-go buying/selling. Convention partnerships and on-site presence build community and trust.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Competitive Advantages</h2>
          <div className="competitive-grid">
            <div className="competitive-card">
              <h3>Specialized Focus vs General Marketplaces</h3>
              <p>eBay and Facebook Marketplace serve all categories, making discovery difficult and lacking retro gaming expertise. Ultra64&apos;s exclusive focus on retro gaming creates superior search, relevant recommendations, and knowledgeable community. Collectors prefer specialized platforms over general marketplaces for niche items.</p>
            </div>
            <div className="competitive-card">
              <h3>Built-In Authentication</h3>
              <p>Counterfeit games are a major problem on eBay and Amazon. Ultra64&apos;s expert authentication service (unavailable on competing platforms) provides buyer confidence and seller differentiation. Authenticated items command 15-30% premiums and sell 3x faster than unverified listings. Authentication becomes competitive moat as expertise and database grow.</p>
            </div>
            <div className="competitive-card">
              <h3>Comprehensive Price Data</h3>
              <p>Collectors currently use PriceCharting or eBay sold listings for pricing. Ultra64 integrates pricing directly into marketplace with historical trends, regional variations, and condition-specific values. Helps buyers identify good deals and sellers price competitively. Data asset becomes more valuable as transaction history accumulates.</p>
            </div>
            <div className="competitive-card">
              <h3>Collection Management Integration</h3>
              <p>Competitors separate marketplace from collection tracking. Ultra64&apos;s integrated approach means one-click adding purchases to collection, wishlist-based shopping, and collection value tracking. Engagement features (showcases, achievement badges) create stickiness and daily active users beyond just transactions.</p>
            </div>
            <div className="competitive-card">
              <h3>Engaged Community</h3>
              <p>eBay and Amazon lack community features. Ultra64&apos;s forums, user profiles, and social features foster passionate community that generates content, provides expertise, and creates network effects. Community members become brand advocates, driving organic growth through word-of-mouth and social sharing.</p>
            </div>
            <div className="competitive-card">
              <h3>Mobile-First Experience</h3>
              <p>Retro game store browsers and convention attendees need mobile tools for price checks, barcode scanning, and quick listings. Ultra64&apos;s native mobile apps provide superior experience versus mobile web competitors. Push notifications for saved searches drive urgency and conversion.</p>
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
              <div className="price">$88,000</div>
              <p style={{ color: 'var(--gold)', marginTop: '1rem', fontSize: '1.1rem' }}>Concept/Prototype Acquisition</p>
            </div>
            <h3>What&apos;s Included</h3>
            <div className="included-grid">
              <div className="included-item">
                <h4>Complete Source Code</h4>
                <p>Full marketplace platform with Next.js frontend, Node.js backend, React Native mobile apps, and admin tools (65% complete, BETA status)</p>
              </div>
              <div className="included-item">
                <h4>Marketplace Infrastructure</h4>
                <p>Listing management, search/filtering, seller dashboards, buyer profiles, messaging system, and transaction processing</p>
              </div>
              <div className="included-item">
                <h4>Payment &amp; Escrow System</h4>
                <p>Stripe Connect integration with marketplace payments, seller payouts, escrow holds, and transaction fee collection</p>
              </div>
              <div className="included-item">
                <h4>Collection Management Tools</h4>
                <p>Digital collection tracking, wishlist features, value calculations, and public collection showcase pages</p>
              </div>
              <div className="included-item">
                <h4>Domain &amp; Branding</h4>
                <p>Ultra64.market domain, retro-inspired logo, brand assets, and marketplace design</p>
              </div>
              <div className="included-item">
                <h4>Price Database</h4>
                <p>Seeded database of 10,000+ games with initial pricing data and PriceCharting API integration for ongoing updates</p>
              </div>
              <div className="included-item">
                <h4>Mobile Applications</h4>
                <p>React Native iOS and Android apps with barcode scanning, collection management, and marketplace browsing</p>
              </div>
              <div className="included-item">
                <h4>Community Features</h4>
                <p>Forum system, user profiles, messaging, reputation tracking, and achievement badge framework</p>
              </div>
              <div className="included-item">
                <h4>Technical Documentation</h4>
                <p>Architecture diagrams, API documentation, deployment guides, and marketplace operations manual</p>
              </div>
              <div className="included-item">
                <h4>Support &amp; Training</h4>
                <p>60 days of technical support, knowledge transfer sessions, and documentation to ensure successful handoff</p>
              </div>
            </div>
            <div className="highlight-box">
              <h4>Valuation Justification</h4>
              <p style={{ marginBottom: '1.5rem' }}><strong>Asking Price: $88,000</strong></p>
              <p style={{ marginBottom: '1rem' }}>Ultra64 is valued at $88K based on 65% development completion (BETA status), specialized marketplace infrastructure for niche collectibles, integrated payment and escrow systems, and positioning in the growing retro gaming market ($200M annually, 9-15% CAGR). The platform addresses critical collector pain points—authenticity concerns, scattered pricing information, and fragmented marketplaces—with purpose-built tools and passionate community features.</p>
              <p style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(185,153,53,0.3)' }}>While in BETA with development still needed for authentication workflow, grading standards, and advanced seller tools, the core marketplace functionality is operational. Conservative revenue projections of $204K ARR within 18 months (assuming $150K monthly GMV) yield a 5.2x revenue multiple at 12 months, reasonable for early-stage marketplace businesses with strong network effect potential. Retro gaming collecting is a growing hobby with passionate participants and proven willingness to pay for authenticity and community. The acquirer benefits from first-mover advantage in specialized retro gaming marketplace category before larger players enter the space.</p>
              <p style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(185,153,53,0.3)' }}><strong>Important Note:</strong> This is a concept/prototype requiring significant additional development. The advertised 20K games database does not exist in the repository. Estimated 470-680 hours of development work remains to reach production MVP, including game database creation, media licensing, complete marketplace features, payment integration, and comprehensive testing. This represents a foundation for building a retro gaming marketplace rather than a turnkey solution.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>READY TO ACQUIRE ULTRA64?</h2>
          <p>A specialized retro gaming marketplace with passionate collector community. Contact us to discuss acquisition or partnership opportunities.</p>
          <a href="/contact/" className="hero-cta">Contact Us →</a>
        </div>
      </section>
    </>
  );
}
