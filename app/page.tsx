import { CTASection } from '@/src/components/CTASection';
import { Hero } from '@/src/components/Hero';
import { IndustryStrip } from '@/src/components/IndustryStrip';
import { LocationSection } from '@/src/components/LocationSection';
import { ServiceOverview } from '@/src/components/ServiceOverview';
import { SiteFrame } from '@/src/components/SiteFrame';

export default function Home() {
  return (
    <SiteFrame>
      <main>
        <Hero
          title={<>Independent expertise.<br />The complete picture.</>}
          description={<>Trusted advisory and risk solutions for the<br className="desktop-break" /> marine, offshore and engineering sectors.</>}
          image="home-hero.jpg"
          imageAlt="Offshore platform and support vessel image placeholder"
        />

        <section className="heritage">
          <div className="shell heritage-grid">
            <div><p className="eyebrow">Since</p><strong>1962</strong><span className="short-rule" /></div>
            <i aria-hidden="true" />
            <p>For over six decades, Matdan KSA has delivered independent expertise and insight that help our clients make confident decisions and protect what matters.</p>
          </div>
        </section>

        <section className="expertise-section">
          <div className="shell">
            <p className="eyebrow">Our expertise</p>
            <ServiceOverview />
          </div>
        </section>

        <IndustryStrip />
        <LocationSection />
        <CTASection />
      </main>
    </SiteFrame>
  );
}
