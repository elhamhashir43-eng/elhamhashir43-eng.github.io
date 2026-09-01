import { CTASection } from './CTASection';
import { Hero } from './Hero';
import { Arrow } from './Arrow';
import type { Service } from '@/src/data/services';

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <main>
      <Hero
        title={service.title}
        description={service.shortDescription}
        image={service.heroImage}
        imageAlt={`${service.title} services image placeholder`}
        compact
      />
      <section className="page-intro">
        <div className="shell intro-grid">
          <p className="eyebrow">{service.eyebrow}</p>
          <span aria-hidden="true" />
          <p>{service.intro}</p>
        </div>
      </section>
      <section className="what-we-do">
        <div className="shell">
          <p className="eyebrow">What we do</p>
          <div className="text-rows">
            {service.items.map((item) => (
              <div className="text-row" key={item}><h2>{item}</h2><Arrow /></div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
