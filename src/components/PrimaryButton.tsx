import { Arrow } from './Arrow';
import { SiteLink as Link } from './SiteLink';

type PrimaryButtonProps = {
  href?: string;
  children?: React.ReactNode;
  compact?: boolean;
};

export function PrimaryButton({ href = '/contact', children = 'Request Consultation', compact = false }: PrimaryButtonProps) {
  return (
    <Link className={`button${compact ? ' button-small' : ''}`} href={href}>
      {children}<Arrow />
    </Link>
  );
}
