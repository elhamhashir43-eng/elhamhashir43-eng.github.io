'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { PrimaryButton } from './PrimaryButton';
import { SiteLink as Link } from './SiteLink';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/expertise', label: 'Expertise', dropdown: true },
  { href: '/industries', label: 'Industries', dropdown: true },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Matdan KSA home" onClick={() => setOpen(false)}>
          <span className="brand-name">Matdan KSA</span>
          <span className="brand-line">Marine <i /> Engineering <i /> Risk</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              className={`nav-link${isActive(link.href) ? ' is-active' : ''}`}
              href={link.href}
              key={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}{link.dropdown && <span aria-hidden="true">⌄</span>}
            </Link>
          ))}
        </nav>

        <PrimaryButton compact />
        <button
          className={`menu-toggle${open ? ' is-open' : ''}`}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
        </button>
      </div>

      <div className={`mobile-menu${open ? ' is-open' : ''}`} id="mobile-menu">
        <nav className="shell" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.label}<span aria-hidden="true">→</span>
            </Link>
          ))}
          <PrimaryButton />
        </nav>
      </div>
    </header>
  );
}
