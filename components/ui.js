import Link from 'next/link';
import { T } from '@/components/LangProvider';
import Icon from '@/components/Icon';
import { site, waLink, telLink } from '@/lib/site';
import { faqIcons } from '@/lib/data';

/** Do-rang heading: pehla hissa ink, `accent` hissa brand blue */
export function Heading({ as: Tag = 'h2', lead, title, accent, className = '', accentClass = 'text-brand' }) {
  return (
    <Tag className={`font-display font-extrabold leading-[1.08] tracking-tight ${className}`}>
      {lead && (
        <>
          <span className={accentClass}>
            <T v={lead} />
          </span>{' '}
        </>
      )}
      <T v={title} />
      {accent && (
        <>
          {' '}
          <span className={accentClass}>
            <T v={accent} />
          </span>
        </>
      )}
    </Tag>
  );
}

export function SectionHeading({ eyebrow, title, accent, text, center = true, dark = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className={`eyebrow ${dark ? '!text-brand-light' : ''}`}>
          <T v={eyebrow} />
        </p>
      )}
      <Heading
        title={title}
        accent={accent}
        className={`mt-3 text-3xl sm:text-[2.75rem] ${dark ? 'text-white' : 'text-ink'}`}
        accentClass={dark ? 'text-brand-light' : 'text-brand'}
      />
      {text && (
        <p className={`mt-4 text-[1.02rem] leading-relaxed ${dark ? 'text-white/70' : 'text-ink-soft'}`}>
          <T v={text} />
        </p>
      )}
    </div>
  );
}

/** Photo ya placeholder. site.images.* ma path likhen to asal photo aa jati ha. */
export function Photo({ src, alt = '', className = '', style, children }) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={`h-full w-full object-cover ${className}`} style={style} loading="lazy" />
    );
  }
  return (
    <div
      className={`relative grid h-full w-full place-items-center overflow-hidden bg-[radial-gradient(120%_120%_at_20%_10%,#2f6fb5_0%,#004894_45%,#0d1721_100%)] text-white ${className}`}
      style={style}
      role="img"
      aria-label={alt || 'Photo placeholder'}
    >
      <div className="absolute inset-0 opacity-20 [background:repeating-linear-gradient(135deg,transparent_0_14px,rgba(255,255,255,.18)_14px_15px)]" />
      <div className="relative text-center">
        <Icon name="wrench" className="mx-auto h-12 w-12 opacity-90" strokeWidth={1.4} />
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">Your photo here</p>
      </div>
      {children}
    </div>
  );
}

export function ServiceCard({ service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-paper p-5 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-card"
    >
      <span className="icon-circle !h-14 !w-14">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-display text-[1.05rem] font-extrabold leading-tight">
        <T v={service.name} />
      </h3>
      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-soft">
        <T v={service.short} />
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="chip" dir="ltr">
          {site.currency} {service.priceFrom.toLocaleString('en-PK')}+
        </span>
        <Icon name="arrow-up-right" className="h-4 w-4 text-ink/50 transition group-hover:text-brand" />
      </div>
    </Link>
  );
}

export function FaqList({ items }) {
  return (
    <div className="space-y-3">
      {items.map((f, i) => (
        <details key={i} className="group rounded-3xl border border-line bg-paper px-4 py-3 open:shadow-card">
          <summary className="flex cursor-pointer list-none items-center gap-3 text-[15px] font-semibold">
            <span className="icon-circle-soft">
              <Icon name={faqIcons[i % faqIcons.length]} className="h-4 w-4" />
            </span>
            <span className="flex-1">
              <T v={f.q} />
            </span>
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line transition group-open:rotate-180">
              <Icon name="chevron-down" className="h-4 w-4" />
            </span>
          </summary>
          <p className="px-1 pb-2 pt-3 text-sm leading-relaxed text-ink-soft sm:ps-[3.25rem]">
            <T v={f.a} />
          </p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({ title, accent, text }) {
  return (
    <section className="bg-cream">
      <div className="container-x py-16">
        <div className="relative overflow-hidden rounded-[28px] border border-line bg-paper p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-soft/80 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow">
                <T v={{ en: 'Book today', ur: 'آج ہی بک کریں' }} />
              </p>
              <Heading
                title={title || { en: 'Book your repair online', ur: 'اپنی مرمت آن لائن بک کریں' }}
                accent={accent || { en: 'in 90 seconds.', ur: 'صرف 90 سیکنڈ میں۔' }}
                className="mt-3 text-3xl text-ink sm:text-4xl"
                accentClass="text-ink"
              />
              <p className="mt-4 max-w-md text-[15px] text-ink-soft">
                <T
                  v={
                    text || {
                      en: 'Tell us what is broken and pick a time. Same-day visits when you book early.',
                      ur: 'بتائیں کیا خراب ہے اور وقت چنیں۔ جلدی بک کرنے پر اسی دن وزٹ۔',
                    }
                  }
                />
              </p>
            </div>
            <div className="space-y-3 lg:ps-10">
              <Link href="/booking" className="btn-primary w-full !rounded-xl !py-4">
                <T v={{ en: 'Start booking', ur: 'بکنگ شروع کریں' }} />
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
              <a href={telLink} className="btn-ghost w-full !rounded-xl !py-4" dir="ltr">
                <Icon name="phone" className="h-4 w-4" /> Call {site.phoneDisplay}
              </a>
              <a
                href={waLink('Hello BestFix, I need a repair service.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full !rounded-xl !py-4 bg-[#25D366] text-white hover:opacity-90"
              >
                WhatsApp
              </a>
              <p className="text-xs text-ink-muted">
                <T v={site.hours} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, lead, title, accent, text }) {
  return (
    <section className="border-b border-line bg-[linear-gradient(100deg,#faf3e9_0%,#f3f0eb_60%,#e8ecee_100%)]">
      <div className="container-x py-14 sm:py-20">
        {eyebrow && (
          <p className="eyebrow">
            <T v={eyebrow} />
          </p>
        )}
        <Heading as="h1" lead={lead} title={title} accent={accent} className="mt-3 max-w-3xl text-3xl text-ink sm:text-5xl" />
        {text && (
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
            <T v={text} />
          </p>
        )}
      </div>
    </section>
  );
}

/** Scrolling brand-name strip (reference ke marquee jaisa) */
export function BrandMarquee({ items }) {
  const styles = [
    'font-display font-extrabold tracking-tight',
    'font-serif italic font-bold',
    'font-sans font-semibold uppercase tracking-[0.2em]',
    'font-display font-black uppercase',
  ];
  const row = items.map((b, i) => (
    <span key={b} className={`mx-8 whitespace-nowrap text-2xl text-ink/60 ${styles[i % styles.length]}`}>
      {b}
    </span>
  ));
  return (
    <div className="overflow-hidden py-6" dir="ltr" aria-hidden="true">
      <div className="marquee-track" style={{ '--marquee-duration': '34s' }}>
        {row}
        {row}
      </div>
    </div>
  );
}
