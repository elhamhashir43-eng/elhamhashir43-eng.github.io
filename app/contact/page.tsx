import type { Metadata } from 'next';
import { ContactForm } from '@/src/components/ContactForm';
import { SiteFrame } from '@/src/components/SiteFrame';
import { siteConfig } from '@/src/config/site';

export const metadata: Metadata = {
  title: 'Contact | Matdan KSA',
  description: 'Speak with Matdan KSA about marine, engineering, risk and loss-adjusting services.',
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <main className="contact-page">
        <section className="simple-hero">
          <div className="shell"><p className="eyebrow">Contact</p><h1>Let’s talk.</h1><p>Tell us what matters. Our team will help you find the right expertise.</p></div>
        </section>
        <section className="contact-section">
          <div className="shell contact-grid">
            <aside>
              <p className="eyebrow">Contact information</p>
              <h2>{siteConfig.location}</h2>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <p>We welcome enquiries relating to marine, engineering, risk, valuation and loss-adjusting assignments.</p>
            </aside>
            <ContactForm />
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
