import type { Metadata } from 'next';
import { CTASection } from '@/src/components/CTASection';
import { Hero } from '@/src/components/Hero';
import { IndustryStrip } from '@/src/components/IndustryStrip';
import { ServiceOverview } from '@/src/components/ServiceOverview';
import { SiteFrame } from '@/src/components/SiteFrame';

export const metadata: Metadata = {
  title: 'Expertise | Matdan KSA',
  description: 'Focused engineering, marine, risk survey, valuation and loss-adjusting services.',
};

export default function ExpertisePage() {
  return (
    <SiteFrame>
      <main>
        <Hero
          title="Expertise."
          description={<>Focused advisory, survey and<br className="desktop-break" /> loss-adjusting services.</>}
          image="expertise-hero.jpg"
          imageAlt="Marine terminal and industrial vessel image placeholder"
          compact
        />
        <section className="expertise-directory">
          <div className="shell"><ServiceOverview detailed /></div>
        </section>
        <IndustryStrip />
        <CTASection />
      </main>
    </SiteFrame>
  );
}
