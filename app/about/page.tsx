import type { Metadata } from 'next';
import { CTASection } from '@/src/components/CTASection';
import { Hero } from '@/src/components/Hero';
import { SiteFrame } from '@/src/components/SiteFrame';

export const metadata: Metadata = {
  title: 'About | Matdan KSA',
  description: 'Independent expertise, established experience and local understanding.',
};

export default function AboutPage() {
  return (
    <SiteFrame>
      <main>
        <Hero
          title="About Matdan KSA"
          description="Established expertise. Independent perspective. Clear advice."
          image="about-hero.jpg"
          imageAlt="Matdan KSA engineering team image placeholder"
          compact
        />
        <section className="about-content">
          <div className="shell about-grid">
            <div><p className="eyebrow">Established expertise</p><h2>Since 1962</h2></div>
            <div>
              <h3>Independent approach</h3>
              <p>Matdan KSA brings disciplined technical judgment to marine, engineering, risk and loss-adjusting assignments. Our role is simple: understand the facts, communicate clearly and help clients act with confidence.</p>
              <h3>Global experience. Local understanding.</h3>
              <p>International professional standards are matched with practical knowledge of the Saudi market and its operating environments.</p>
            </div>
          </div>
        </section>
        <CTASection />
      </main>
    </SiteFrame>
  );
}
