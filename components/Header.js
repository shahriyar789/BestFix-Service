'use client';

import Link from 'next/link';
import { useState } from 'react';
import { T, useLang } from '@/components/LangProvider';
import Icon from '@/components/Icon';
import { site, telLink } from '@/lib/site';

const nav = [
  { href: '/services', label: { en: 'Services', ur: 'خدمات' } },
  { href: '/#brands', label: { en: 'Brands', ur: 'برانڈز' } },
  { href: '/areas', label: { en: 'Service area', ur: 'سروس کے علاقے' } },
  { href: '/about', label: { en: 'About', ur: 'ہمارے بارے میں' } },
  { href: '/contact', label: { en: 'Contact', ur: 'رابطہ' } },
];

export function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white">
        <Icon name="wrench" className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <span className="leading-none">
        <span className={`font-display text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
          BEST<span className={light ? 'text-brand-light' : 'text-brand'}>FIX</span>
        </span>
        <span className={`mt-1 block text-[9px] font-semibold uppercase tracking-[0.25em] ${light ? 'text-white/60' : 'text-ink-muted'}`}>
          Appliance Repair
        </span>
      </span>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  const promo = site.promo;

  return (
    <header className="sticky top-0 z-40">
      {promo?.text && (
        <div className="bg-night-2 px-4 py-2 text-center text-xs text-white">
          <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <Icon name="tag" className="h-3.5 w-3.5" />
            <span className="font-bold uppercase tracking-wider">
              <T v={promo.label} />
            </span>
            <span className="text-white/85">
              <T v={promo.text} />
            </span>
            {promo.code && (
              <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[11px]">Code {promo.code}</span>
            )}
          </span>
        </div>
      )}

      <div className="border-b border-line bg-cream/95 backdrop-blur">
        <div className="container-x flex h-[72px] items-center justify-between gap-4">
          <Link href="/" onClick={() => setOpen(false)} aria-label="BestFix home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 text-[14px] font-medium text-ink/80 lg:flex">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="transition hover:text-brand">
                <T v={n.label} />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <span className="hidden items-center gap-1.5 rounded-full border border-line bg-paper px-3.5 py-2 text-[13px] font-medium md:inline-flex">
              <Icon name="map-pin" className="h-4 w-4 text-brand" />
              <T v={{ en: 'Lahore', ur: 'لاہور' }} />
            </span>

            <a href={telLink} className="hidden items-center gap-2 text-[13px] font-medium xl:inline-flex" dir="ltr">
              <Icon name="phone" className="h-4 w-4" />
              {site.phoneDisplay}
            </a>

            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
              className="rounded-full border border-line bg-paper px-3.5 py-2 text-xs font-semibold hover:border-brand/40"
              aria-label="Change language"
            >
              {lang === 'en' ? 'اردو' : 'English'}
            </button>

            <Link href="/booking" className="btn-primary hidden !py-3 sm:inline-flex">
              <T v={{ en: 'Book a service', ur: 'سروس بک کریں' }} />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-paper lg:hidden"
              aria-label="Menu"
              aria-expanded={open}
            >
              <Icon name={open ? 'close' : 'menu'} />
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-line bg-cream lg:hidden">
            <div className="container-x flex flex-col gap-1 py-4">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-ink/5"
                >
                  <T v={n.label} />
                </Link>
              ))}
              <Link href="/booking" onClick={() => setOpen(false)} className="btn-primary mt-2">
                <T v={{ en: 'Book a service', ur: 'سروس بک کریں' }} />
              </Link>
              <a href={telLink} className="btn-ghost mt-2" dir="ltr">
                <Icon name="phone" className="h-4 w-4" /> {site.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
