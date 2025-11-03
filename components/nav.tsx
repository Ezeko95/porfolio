'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/lib/i18n-context';
import { cn } from '@/lib/utils';

export function Nav() {
  const pathname = usePathname();
  const { t } = useI18n();

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/projects', label: t.nav.projects },
    { href: '/skills', label: t.nav.skills },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href
              ? "text-foreground"
              : "text-muted-foreground"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
