import { PrimaryButton } from './PrimaryButton';

export function CTASection() {
  return (
    <section className="cta-section">
      <div className="shell cta-inner">
        <div>
          <h2>Let’s solve what matters.</h2>
          <p>Speak with our experts to see how we can help.</p>
        </div>
        <PrimaryButton />
      </div>
    </section>
  );
}
