import Link from 'next/link';

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
};

const posts: BlogPost[] = [
  {
    slug: "api-security-monitor-mode",
    title: "Why Monitor Mode is G8KEPR's Secret Weapon Against API Threats",
    date: "November 10, 2025",
    category: "Technology",
    excerpt: "Most API security platforms operate on a simple principle: block threats or allow traffic. It's binary, reactive, and often catastrophic when policies are misconfigured.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=500&fit=crop&sat=-100",
  },
  {
    slug: "bootstrap-to-exit",
    title: "From Side Project to $600K Valuation: The G8KEPR Story",
    date: "November 10, 2025",
    category: "Strategy",
    excerpt: "G8KEPR started as a weekend project to solve our own API security headaches. Eighteen months later, it's a $400K-$600K valuation platform serving enterprise customers, generating recurring revenue, and disrupting competitors charging 10x our price.",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&h=500&fit=crop&sat=-100",
  },
  {
    slug: "construction-bidding-waste",
    title: "BidMaster: How We're Eliminating $50K in Lost Bids Per Year",
    date: "November 10, 2025",
    category: "Product",
    excerpt: "Construction companies lose an average of $50,000-$75,000 annually to missed bid deadlines, pricing errors, and disorganized subcontractor management. In an industry where margins average 3-5%, that's catastrophic waste.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=500&fit=crop&sat=-100",
  },
  {
    slug: "gatekeeper-vs-kong",
    title: "How G8KEPR Beats Kong & Apigee at 90% Less Cost",
    date: "November 10, 2025",
    category: "Product",
    excerpt: "The enterprise API gateway market is dominated by legacy players charging premium prices for features that should be standard. Kong Enterprise costs $5,000+ per month.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&sat=-100",
  },
  {
    slug: "gym-tech-disruption",
    title: "Why GymFlow is Killing the Legacy Gym Software Industry",
    date: "November 10, 2025",
    category: "Product",
    excerpt: "Legacy gym management software was built in the early 2000s and hasn't evolved. Mindbody charges $329/month with rigid contracts.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop&sat=-100",
  },
  {
    slug: "healthcare-scheduling-nightmare",
    title: "ShiftSwapPro: Solving the $9B Healthcare Staffing Crisis",
    date: "November 10, 2025",
    category: "Product",
    excerpt: "Healthcare facilities spend $9 billion annually on agency nurses to cover shift gaps. Overtime costs add another $3.8 billion.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=500&fit=crop&sat=-100",
  },
  {
    slug: "identity-verification-future",
    title: "PrismVerify vs. Jumio: Real-Time Verification Without the Price Tag",
    date: "November 10, 2025",
    category: "Technology",
    excerpt: "Identity verification providers like Jumio charge $1-3 per verification. Onfido costs $0.50-$2.50.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&sat=-100",
  },
  {
    slug: "invoice-ai-revolution",
    title: "How MatchRecon's AI Cuts Invoice Processing Time by 95%",
    date: "November 10, 2025",
    category: "Product",
    excerpt: "Finance teams spend an average of 12 hours per week manually reconciling invoices with purchase orders and receipts.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop&sat=-100",
  },
  {
    slug: "mvp-validation",
    title: "From Idea to Revenue in 90 Days: The Lean MVP Framework",
    date: "November 10, 2025",
    category: "Strategy",
    excerpt: "Last year, we helped a fintech startup go from whiteboard sketch to $12,000 in validated revenue in exactly 87 days. No venture funding.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop&sat=-100",
  },
  {
    slug: "other10-portfolio-strategy",
    title: "Building 10 SaaS Products Simultaneously: The Other10 Strategy",
    date: "November 10, 2025",
    category: "Strategy",
    excerpt: "Most SaaS founders focus on a single product. They pour years into one idea, one market, one bet.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&sat=-100",
  },
  {
    slug: "restaurant-waste-savings",
    title: "WasteTracker Saves Restaurants $25K-75K Annually",
    date: "November 10, 2025",
    category: "Product",
    excerpt: "Restaurants waste 4-10% of food purchased\u2014$25,000-$75,000 annually for an average full-service restaurant. This waste destroys profitability in an industry where net margins average just 3-5%.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop&sat=-100",
  },
  {
    slug: "retro-gaming-market",
    title: "Ultra64: Building a Trusted Marketplace in a $200B Gaming Market",
    date: "November 10, 2025",
    category: "Product",
    excerpt: "The retro gaming market is booming. Sealed copies of classic games sell for six figures.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop&sat=-100",
  },
  {
    slug: "minimalist-web-design",
    title: "Why Minimalist Design Wins: Lessons from Stripe, Linear, and Vercel",
    date: "November 9, 2025",
    category: "Design",
    excerpt: "Open Stripe's homepage, Linear's app interface, or Vercel's dashboard and you'll notice something immediately: space. Not empty space\u2014intentional, purposeful space that lets content breathe and guides your attention exactly where it needs to go.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop&sat=-100",
  },
  {
    slug: "saas-pricing-strategies",
    title: "The Psychology of SaaS Pricing: Why $99 Works Better Than $100",
    date: "November 8, 2025",
    category: "SaaS",
    excerpt: "When we rebuilt our pricing page last quarter, we made a decision that seemed trivial: changing our mid-tier plan from $100/month to $99/month. The result?",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&sat=-100",
  },
  {
    slug: "art-deco-revival",
    title: "The Art Deco Revival in Modern Web Design",
    date: "January 15, 2025",
    category: "Design",
    excerpt: "The roaring twenties gave us jazz, flappers, and one of the most distinctive design movements in history: Art Deco.",
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=500",
  },
];

export default function BlogIndex() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="container">
            <div className="hero-label">Insights</div>
            <h1>
              INSIGHTS &amp; <span className="highlight">PERSPECTIVES</span>
            </h1>
            <p className="subtitle">
              Deep dives on enterprise SaaS strategy, API security, product
              economics, and design—lessons from building a portfolio of
              production-grade platforms.
            </p>
          </div>
        </div>
      </section>
      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="blog-card">
                <div className="blog-card-image" style={{ backgroundImage: `url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <span className="blog-read-more">Read More &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
