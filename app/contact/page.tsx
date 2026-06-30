export default function ContactPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>GET IN TOUCH</h1>
          <p>Interested in acquiring a platform or exploring partnership opportunities? Let&apos;s discuss how we can work together.</p>
        </div>
      </section>
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="info-item">
                <div className="info-label">Location</div>
                <div className="info-value">Charlottesville, Virginia<br />United States</div>
              </div>
              <div className="info-item">
                <div className="info-label">Email</div>
                <div className="info-value"><a href="mailto:hello@other10.com">hello@other10.com</a><br /><a href="mailto:partnerships@other10.com">partnerships@other10.com</a></div>
              </div>
              <div className="info-item">
                <div className="info-label">Business Hours</div>
                <div className="info-value">Monday - Friday: 9:00 AM - 6:00 PM EST<br />Saturday - Sunday: By Appointment</div>
              </div>
              <div className="info-item">
                <div className="info-label">Response Time</div>
                <div className="info-value">We typically respond to all inquiries within 24 hours during business days. For urgent matters, please indicate &quot;URGENT&quot; in your message subject.</div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" id="name" className="form-input" required name="name" defaultValue="" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" id="email" className="form-input" required name="email" defaultValue="" />
                </div>
                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company (Optional)</label>
                  <input type="text" id="company" className="form-input" name="company" defaultValue="" />
                </div>
                <div className="form-group">
                  <label htmlFor="service" className="form-label">Service Interest</label>
                  <select id="service" name="service" className="form-select" required defaultValue="">
                    <option value="">Select a service...</option>
                    <option value="Project Acquisition">Project Acquisition</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="White-Label Licensing">White-Label Licensing</option>
                    <option value="Custom Development">Custom Development</option>
                    <option value="Technical Consultation">Technical Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget" className="form-label">Project Budget (Optional)</label>
                  <select id="budget" name="budget" className="form-select" defaultValue="">
                    <option value="">Select a range...</option>
                    <option value="Under $50K">Under $50K</option>
                    <option value="$50K - $150K">$50K - $150K</option>
                    <option value="$150K - $300K">$150K - $300K</option>
                    <option value="$300K - $500K">$300K - $500K</option>
                    <option value="Over $500K">Over $500K</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Project Details</label>
                  <textarea id="message" name="message" className="form-textarea" required placeholder="Tell us about your project, goals, timeline, and any specific requirements..."></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">OUR LOCATION</h2>
          <div className="map-placeholder">
            <span>Map of Charlottesville, VA studio location</span>
            <span className="dimensions">1200x500px (or embed Google Maps)</span>
          </div>
        </div>
      </section>
    </>
  );
}
