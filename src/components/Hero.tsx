import type { CSSProperties } from 'react';
import { PrimaryButton } from './PrimaryButton';

type HeroProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  compact?: boolean;
};

export function Hero({ title, description, image, imageAlt, compact = false }: HeroProps) {
  const style = { '--hero-image': `url('/images/${image}')` } as CSSProperties;

  return (
    <section className={`hero${compact ? ' hero-compact' : ''}`}>
      <div className="shell hero-grid">
        <div className="hero-copy">
          <h1>{title}</h1>
          <span className="gold-rule" aria-hidden="true" />
          <p>{description}</p>
          <PrimaryButton />
        </div>
        <div className="hero-media" style={style} role="img" aria-label={imageAlt} />
      </div>
    </section>
  );
}
