import Link from 'next/link';
import { industries } from '@/src/data/industries';

export function IndustryStrip() {
  return (
    <section className="industry-strip">
      <div className="shell">
        <p className="eyebrow">Industries we serve</p>
        <div className="industry-list">
          {industries.map((industry, index) => (
            <div key={industry}>
              <Link href="/industries">{industry}</Link>
              {index < industries.length - 1 && <i aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
