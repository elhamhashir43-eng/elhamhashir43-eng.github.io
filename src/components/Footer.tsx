import { siteConfig } from '@/src/config/site';
import { services } from '@/src/data/services';
import { SiteLink as Link } from './SiteLink';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link className="brand brand-light" href="/">
            <span className="brand-name">{siteConfig.companyName}</span>
            <span className="brand-line">Marine <i /> Engineering <i /> Risk</span>
          </Link>
          <span className="footer-rule" />
          <p>Independent expertise.<br />The complete picture.</p>
          <div className="social-links" aria-label="Social links">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href={`mailto:${siteConfig.email}`} aria-label="Email">@</a>
          </div>
        </div>

        <div>
          <h2>Quick Links</h2>
          <Link href="/about">About</Link>
          <Link href="/expertise">Expertise</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h2>Expertise</h2>
          {services.map((service) => (
            <Link href={`/expertise/${service.slug}`} key={service.slug}>{service.title}</Link>
          ))}
        </div>
        <div>
          <h2>Contact</h2>
          <p>{siteConfig.location}</p>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="shell">
          <p>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
          <div><Link href="/privacy">Privacy Policy</Link><i /><Link href="/terms">Terms of Use</Link></div>
        </div>
      </div>
    </footer>
  );
}
