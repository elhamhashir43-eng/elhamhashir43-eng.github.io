import type { Metadata } from 'next';
import { SiteFrame } from '@/src/components/SiteFrame';

export const metadata: Metadata = { title: 'Terms of Use | Matdan KSA' };

export default function TermsPage() {
  return <SiteFrame><main className="legal-page"><div className="shell"><p className="eyebrow">Legal</p><h1>Terms of Use</h1><p>This prototype contains placeholder terms. Matdan KSA’s approved terms of use should be added here before public launch.</p></div></main></SiteFrame>;
}
