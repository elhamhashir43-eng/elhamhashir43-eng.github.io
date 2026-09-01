import Link from 'next/link';
import { Arrow } from './Arrow';

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
