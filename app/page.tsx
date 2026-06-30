import Link from 'next/link';
const projects = [
  {
    slug: 'shiftswappro',
    name: 'ShiftSwapPro',
    logo: 'SHIFTSWAPPRO',
    status: '98% COMPLETE',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop&sat=-100',
    description:
      'AI-powered workforce scheduling & shift management platform. FastAPI backend + Next.js 14 & React Native. 3,700+ LOC docs, production ready with deployment guides. 98% complete, targeting $400K-600K ARR.',
    tags: ['FastAPI', 'React Native', 'AI Scheduling', 'Production Ready'],
  },
  {
    slug: 'trustpilot',
    name: 'TrustPilot AI',
    logo: 'TRUSTPILOT AI',
    status: '95% COMPLETE',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&sat=-100',
    description:
      'Enterprise data quality platform with autonomous AI agents. 155 TypeScript files, $499-$4,999 pricing tiers. 95% complete with comprehensive audit trail and compliance features.',
    tags: ['Next.js 14', 'OpenAI GPT-4', 'LangChain', 'Enterprise'],
  },
  {
    slug: 'gymflow',
    name: 'GymFlow',
    logo: 'GYMFLOW',
    status: '90% COMPLETE',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop&sat=-100',
    description:
      'Gym management SaaS with member CRM, class booking, and payments. Node.js + Next.js 14 + React Native. 90% revenue ready, targeting $22K-$35K MRR from 40K+ gyms.',
    tags: ['Next.js 14', 'React Native', 'Stripe', 'Mobile Apps'],
  },
  {
    slug: 'gatekeeper',
    name: 'G8KEPR.com',
    logo: 'G8KEPR.COM',
    status: '85% COMPLETE',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&sat=-100',
    description:
      'Enterprise API security platform with real AI threat detection. 34,000+ LOC (21,547 Python + 12,399 TypeScript). 85% complete, 90% cheaper than Kong/Apigee at $99-999/mo.',
    tags: ['FastAPI', 'Next.js 15', 'NumPy ML', 'API Gateway'],
  },
  {
    slug: 'bidmaster',
    name: 'BidMaster',
    logo: 'BIDMASTER',
    status: '80% COMPLETE',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop&sat=-100',
    description:
      'Construction bid management with AI takeoff tools. FastAPI + Next.js + React Native. 80% complete, targeting 200,000+ contractors with $30K MRR potential.',
    tags: ['FastAPI', 'Next.js', 'AI Takeoff', 'Construction'],
  },
  {
    slug: 'processfactory',
    name: 'ProcessFactory',
    logo: 'PROCESSFACTORY',
    status: '75% COMPLETE',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&sat=-100',
    description:
      'AI-powered workflow automation with Azure AI integration. Visual workflow builder + document processing. 75% complete, targeting $20K-35K MRR from 80,000+ businesses.',
    tags: ['Azure Functions', 'Next.js', 'React Flow', 'No-Code'],
  },
  {
    slug: 'azurecopilot',
    name: 'AzureCopilot',
    logo: 'AZURECOPILOT',
    status: '65% COMPLETE',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&sat=-100',
    description:
      'AI-powered Azure infrastructure management with 6 LangChain agents (GPT-4). 255 source files, 65% complete. Components working, needs 2-3 days integration.',
    tags: ['LangChain', 'FastAPI', 'React 18', 'Azure SDK'],
  },
  {
    slug: 'matchrecon',
    name: 'MatchRecon.com',
    logo: 'MATCHRECON.COM',
    status: '100% COMPLETE',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&sat=-100',
    description:
      'AI-powered invoice reconciliation platform LIVE at matchrecon.com. 47,000+ LOC, Tesseract OCR, multi-format support. Beta program active with 50% discount.',
    tags: ['Next.js 15', 'TypeScript', 'OCR', 'Live Platform'],
  },
  {
    slug: 'wastetracker',
    name: 'WasteTracker',
    logo: 'WASTETRACKER',
    status: '45% COMPLETE',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop&sat=-100',
    description:
      'Restaurant waste reduction analytics platform. FastAPI + Next.js 14 + ML framework. 45% complete, targeting 660K+ restaurants with $14K-22K MRR. Never deployed.',
    tags: ['FastAPI', 'Next.js 14', 'Analytics', 'Restaurant Tech'],
  },
  {
    slug: 'ultra64',
    name: 'Ultra64',
    logo: 'ULTRA64',
    status: '35% COMPLETE',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop&sat=-100',
    description:
      'Retro gaming marketplace concept. Next.js 14 + React Native + Node.js. 35% complete (concept/prototype stage). Targeting collectors & retro gaming enthusiasts.',
    tags: ['Next.js 14', 'React Native', 'Marketplace', 'Prototype'],
  },
  {
    slug: 'hoaconnect',
    name: 'HOA Connect',
    logo: 'HOA CONNECT',
    status: '30% COMPLETE',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop&sat=-100',
    description:
      'Community management with voting & resident portal. FastAPI 0.104.1 (742 lines) + Next.js 15.5.4. 30% complete, targeting 365,000+ HOAs managing 75.5M residents.',
    tags: ['FastAPI 0.104', 'Next.js 15', 'Voting System', 'Community'],
  },
  {
    slug: 'microtool',
    name: 'MicroTool Desktop',
    logo: 'MICROTOOL DESKTOP',
    status: '30% COMPLETE',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop&sat=-100',
    description:
      'Desktop utility marketplace ($5/app). Next.js 14 marketplace + 262 app directories. 30% complete - marketplace exists but utilities need 760-1,170 hours.',
    tags: ['Next.js 14', 'Python', 'Paddle', 'Desktop Apps'],
  },
  {
    slug: 'prismverify',
    name: 'PrismVerify',
    logo: 'PRISMVERIFY',
    status: '100% COMPLETE',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop&sat=-100',
    description:
      'Automated security assessment platform. Next.js 14 + Prisma + NextAuth. MVP complete with 11 pages, targeting $1.23M ARR from 100,000+ businesses.',
    tags: ['Next.js 14', 'Prisma', 'Security', 'Pentesting'],
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="container">
            <div className="hero-label">Enterprise Think Tank</div>
            <h1>
              BUILDING THE FUTURE
              <span className="highlight">OF ENTERPRISE SOFTWARE</span>
            </h1>
            <p className="subtitle">
              Innovation Lab • SaaS Development • Honest Assessment
            </p>
            <p>
              We build SaaS platforms solving real enterprise challenges—from
              AI-powered reconciliation to identity verification. Our portfolio
              includes 3 live platforms, several production-ready projects, and
              honest assessments of what&apos;s complete vs. in-development.
            </p>
            <Link href="/contact/" className="hero-cta">
              Explore Partnership Opportunities
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>13</h3>
              <p>Active Projects</p>
            </div>
            <div className="stat-item">
              <h3>2 Live</h3>
              <p>Deployed Platforms</p>
            </div>
            <div className="stat-item">
              <h3>5</h3>
              <p>Production Ready</p>
            </div>
            <div className="stat-item">
              <h3>9 Years</h3>
              <p>Development Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="container">
          <h2 className="section-title">Project Portfolio</h2>
          <div className="portfolio-grid">
            {projects.map((p) => (
              <Link key={p.slug} href={`/${p.slug}/`} className="project-card">
                <span className="status">{p.status}</span>
                <div
                  className="project-image"
                  style={{
                    background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${p.image}) center/cover`,
                  }}
                >
                  <div className="project-logo">{p.logo}</div>
                </div>
                <div className="project-content">
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="tech-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <span className="project-link primary">View Project →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>PARTNER WITH PROVEN TECHNOLOGY</h2>
          <p>
            Explore acquisition opportunities, strategic partnerships, or
            white-label licensing for market-ready enterprise platforms.
          </p>
          <Link href="/contact/" className="hero-cta">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </>
  );
}



