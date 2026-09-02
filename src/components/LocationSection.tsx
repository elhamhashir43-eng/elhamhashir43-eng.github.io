export function LocationSection() {
  return (
    <section className="location-section" aria-labelledby="location-heading">
      <div className="shell location-grid">
        <div className="location-copy">
          <p className="eyebrow">Our location</p>
          <h2 id="location-heading">Find us in Riyadh.</h2>
          <span className="gold-rule" aria-hidden="true" />
          <p>Kingdom Centre, King Fahd Road<br />Al Olaya, Riyadh, Saudi Arabia</p>
          <a
            className="location-link"
            href="https://www.google.com/maps/search/?api=1&query=Kingdom+Centre+Riyadh+Saudi+Arabia"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="location-map">
          <iframe
            title="Matdan KSA demo location in Riyadh"
            src="https://www.google.com/maps?q=Kingdom%20Centre%2C%20Riyadh%2C%20Saudi%20Arabia&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
