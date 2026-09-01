import type { Metadata } from 'next';
import { SiteFrame } from '@/src/components/SiteFrame';

export const metadata: Metadata = { title: 'Privacy Policy | Matdan KSA' };

export default function PrivacyPage() {
  return <SiteFrame><main className="legal-page"><div className="shell"><p className="eyebrow">Legal</p><h1>Privacy Policy</h1><p>This prototype contains placeholder policy content. Matdan KSA’s approved privacy notice should be added here before public launch.</p></div></main></SiteFrame>;
}
