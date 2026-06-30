import Link from 'next/link';
export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>ABOUT OTHER10</h1>
          <p>Since 2016, we&apos;ve been crafting exceptional digital experiences from the heart of Charlottesville, Virginia. A boutique studio dedicated to timeless design and cutting-edge technology.</p>
        </div>
      </section>
      <section className="content-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <span>Photo of Charlottesville studio</span>
              <span className="dimensions">600x600px</span>
            </div>
            <div className="story-content">
              <h3>OUR STORY</h3>
              <p>Founded in <span className="highlight">August 2016</span> in the historic city of <span className="highlight">Charlottesville, Virginia</span>, OTHER10 began with a singular vision: to create digital experiences that combine aesthetic excellence with uncompromising technical sophistication.</p>
              <p>What started as a passion for clean, purposeful design has evolved into a full-service boutique studio specializing in enterprise SaaS platforms and premium web applications. We&apos;ve grown organically, never compromising our commitment to quality over quantity.</p>
            </div>
          </div>
          <div className="story-grid">
            <div className="story-content">
              <h3>OUR PHILOSOPHY</h3>
              <p>We believe great software is <span className="highlight">both art and engineering</span>. Every project we undertake reflects our dedication to timeless design principles—inspired by the geometric precision of Art Deco—married with modern development practices.</p>
              <p>Our approach is deliberate and considered. We don&apos;t chase trends; we create lasting solutions that serve businesses for years to come. From the first wireframe to final deployment, every detail matters.</p>
            </div>
            <div className="story-image">
              <span>Photo of design process / workspace</span>
              <span className="dimensions">600x600px</span>
            </div>
          </div>
          <h2 className="section-title">OUR TEAM</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <span>Team member headshot</span>
                <span className="dimensions">600x600px</span>
              </div>
              <div className="team-content">
                <h3>Lead Developer</h3>
                <p className="team-role">Full-Stack Architecture</p>
                <p>Specializing in enterprise SaaS architecture, React ecosystems, and scalable backend systems. Over a decade of experience building mission-critical applications.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <span>Team member headshot</span>
                <span className="dimensions">600x600px</span>
              </div>
              <div className="team-content">
                <h3>Design Director</h3>
                <p className="team-role">UI/UX &amp; Brand Strategy</p>
                <p>Leading our visual direction with expertise in user experience design, brand identity, and interface systems that balance beauty with functionality.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <span>Team member headshot</span>
                <span className="dimensions">600x600px</span>
              </div>
              <div className="team-content">
                <h3>DevOps Engineer</h3>
                <p className="team-role">Infrastructure &amp; Security</p>
                <p>Managing cloud infrastructure, deployment pipelines, and security protocols. Ensuring our applications run reliably at scale with enterprise-grade security.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">OUR VALUES</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">◆</div>
              <h3>CRAFTSMANSHIP</h3>
              <p>Every line of code, every pixel, every interaction is crafted with meticulous attention to detail. We take pride in our work.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">◆</div>
              <h3>INTEGRITY</h3>
              <p>We build lasting relationships through honest communication, transparent pricing, and delivering exactly what we promise.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">◆</div>
              <h3>INNOVATION</h3>
              <p>While respecting timeless design principles, we constantly explore new technologies and methodologies to serve our clients better.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">◆</div>
              <h3>EXCELLENCE</h3>
              <p>Good enough isn&apos;t in our vocabulary. We strive for excellence in everything we create, from enterprise platforms to landing pages.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>LET&apos;S BUILD SOMETHING EXCEPTIONAL</h2>
          <p>Ready to partner with a team that values craftsmanship as much as you do? Let&apos;s discuss your project and explore how we can bring your vision to life.</p>
          <Link href="/contact/" className="hero-cta">Begin Your Project →</Link>
        </div>
      </section>
    </>
  );
}



