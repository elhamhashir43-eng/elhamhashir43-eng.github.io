import { services } from '@/src/data/services';
import { Arrow } from './Arrow';
import { SiteLink as Link } from './SiteLink';

export function ServiceOverview({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className={`service-overview${detailed ? ' service-overview-detailed' : ''}`}>
      {services.map((service) => (
        <article className="service-row" key={service.slug}>
          <h2><Link href={`/expertise/${service.slug}`}>{service.title}</Link></h2>
          <p>{service.shortDescription}</p>
          {detailed ? (
            <ul>
              {service.items.slice(0, 3).map((item) => (
                <li key={item}><Link href={`/expertise/${service.slug}`}>{item}<Arrow /></Link></li>
              ))}
            </ul>
          ) : (
            <Link className="row-arrow" href={`/expertise/${service.slug}`} aria-label={`Explore ${service.title}`}><Arrow /></Link>
          )}
        </article>
      ))}
    </div>
  );
}
