import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetail } from '@/src/components/ServiceDetail';
import { SiteFrame } from '@/src/components/SiteFrame';
import { getService, services } from '@/src/data/services';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} Services | Matdan KSA`,
    description: service.intro,
    openGraph: { title: `${service.title} Services | Matdan KSA`, description: service.intro, images: [] },
    twitter: { title: `${service.title} Services | Matdan KSA`, description: service.intro, images: [] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return <SiteFrame><ServiceDetail service={service} /></SiteFrame>;
}
