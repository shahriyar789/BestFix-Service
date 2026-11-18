import Link from 'next/link';
import { T } from '@/components/LangProvider';
import Icon from '@/components/Icon';
import { Logo } from '@/components/Header';
import { site, telLink } from '@/lib/site';
import { services, areas, brands, footerTrust } from '@/lib/data';

const colTitle = 'text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45';
const colLink = 'text-sm text-white/85 transition hover:text-white';

export default function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="container-x pt-14">
        {/* Trust cards */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {footerTrust.map((t, i) => (
            <div key={i} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-night-2 p-4">
              <span className="icon-circle !h-10 !w-10">
                <Icon name={t.icon} className="h-[18px] w-[18px]" />
              </span>
              <div>
                <div className="text-sm font-semibold">
                  <T v={t.title} />
                </div>
                <div className="text-xs text-white/50">
                  <T v={t.text} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brands panel */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <p className={colTitle}>
            <T v={{ en: 'Brands we service', ur: 'جن برانڈز کی ہم سروس کرتے ہیں' }} />
          </p>
          <ul className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4 rounded-2xl bg-paper px-6 py-6 text-ink" dir="ltr">
            {brands.map((b) => (
              <li key={b} className="font-display text-lg font-extrabold uppercase tracking-wide text-ink/70">
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Columns */}
        <div className="mt-12 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/80">
              <T
                v={{
                  en: 'Same-day appliance repair across Lahore. AC, fridges, washing machines, microwaves, ovens, dishwashers and geysers. Up-front pricing, service warranty.',
                  ur: 'پورے لاہور میں اپلائنسز کی اسی دن مرمت۔ اے سی، فریج، واشنگ مشین، مائیکروویو، اوون، ڈش واشر اور گیزر۔ پہلے سے قیمت، سروس وارنٹی۔',
                }}
              />
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
              <Icon name="wrench" className="h-3.5 w-3.5" /> <T v={{ en: 'Same-day · Book early', ur: 'اسی دن · جلدی بک کریں' }} />
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-white/85">
              <li>
                <a href={telLink} className="inline-flex items-center gap-2" dir="ltr">
                  <Icon name="phone" className="h-4 w-4" /> {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2" dir="ltr">
                  <Icon name="mail" className="h-4 w-4" /> {site.email}
                </a>
              </li>
              <li className="flex gap-2">
                <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0" />
                <T v={site.address} />
              </li>
              <li className="flex gap-2">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0" />
                <T v={site.hours} />
              </li>
            </ul>
          </div>

          <div>
            <h3 className={colTitle}>
              <T v={{ en: 'Services', ur: 'خدمات' }} />
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={colLink}>
                    <T v={s.name} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={colTitle}>
              <T v={{ en: 'Brands', ur: 'برانڈز' }} />
            </h3>
            <ul className="mt-5 space-y-3" dir="ltr">
              {brands.slice(0, 10).map((b) => (
                <li key={b}>
                  <Link href="/#brands" className={colLink}>
                    {b}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#brands" className="text-sm text-white/55 hover:text-white">
                  <T v={{ en: 'All brands serviced →', ur: 'تمام برانڈز ←' }} />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={colTitle}>
              <T v={{ en: 'Service area & company', ur: 'سروس کے علاقے اور کمپنی' }} />
            </h3>
            <ul className="mt-5 space-y-3">
              {areas.slice(0, 10).map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className={colLink}>
                    <T v={a.name} />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="text-sm text-white/55 hover:text-white">
                  <T v={{ en: 'All areas →', ur: 'تمام علاقے ←' }} />
                </Link>
              </li>
            </ul>
            <h3 className={`${colTitle} mt-8`}>
              <T v={{ en: 'Company', ur: 'کمپنی' }} />
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: '/about', l: { en: 'About', ur: 'ہمارے بارے میں' } },
                { href: '/booking', l: { en: 'Booking', ur: 'بکنگ' } },
                { href: '/contact', l: { en: 'Contact', ur: 'رابطہ' } },
              ].map((x) => (
                <li key={x.href}>
                  <Link href={x.href} className={colLink}>
                    <T v={x.l} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-white/10 py-6 text-xs text-white/45">
        <div className="container-x space-y-2">
          <p>
            © {new Date().getFullYear()} BestFix.{' '}
            <T v={{ en: 'All rights reserved.', ur: 'جملہ حقوق محفوظ ہیں۔' }} />
          </p>
          <p className="max-w-3xl">
            <T
              v={{
                en: 'BestFix is an independent repair service and is not affiliated with or authorized by any appliance manufacturer. All brand names are used only to identify the products we service.',
                ur: 'بیسٹ فکس ایک آزاد ریپیئر سروس ہے اور کسی اپلائنس بنانے والی کمپنی سے وابستہ یا اس کی مجاز نہیں۔ تمام برانڈ نام صرف ان مصنوعات کی نشاندہی کے لیے استعمال ہوتے ہیں جن کی ہم سروس کرتے ہیں۔',
              }}
            />
          </p>
        </div>
      </div>
    </footer>
  );
}
