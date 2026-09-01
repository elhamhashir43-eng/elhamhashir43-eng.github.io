import type { Metadata } from 'next';
import { Arrow } from '@/src/components/Arrow';
import { CTASection } from '@/src/components/CTASection';
import { Hero } from '@/src/components/Hero';
import { SiteFrame } from '@/src/components/SiteFrame';
import { industries } from '@/src/data/industries';

export const metadata: Metadata = {
  title: 'Industries | Matdan KSA',
  description: 'Experience across complex assets and operating environments.',
};

export default function IndustriesPage() {
  return (
    <SiteFrame>
      <main>
        <Hero
          title="Industries"
          description="Experience across complex assets and operating environments."
          image="industries-hero.jpg"
          imageAlt="Industrial and marine operating environment image placeholder"
          compact
        />
        <section className="what-we-do industry-directory">
          <div className="shell">
            <p className="eyebrow">Sectors we serve</p>
            <div className="text-rows">
              {industries.map((industry) => <div className="text-row" key={industry}><h2>{industry}</h2><Arrow /></div>)}
            </div>
          </div>
        </section>
        <CTASection />
      </main>
    </SiteFrame>
  );
}
