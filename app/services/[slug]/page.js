import Link from 'next/link';
import { notFound } from 'next/navigation';
import { T } from '@/components/LangProvider';
import { PageHero, SectionHeading, FaqList, CtaBand, ServiceCard } from '@/components/ui';
import BookingForm from '@/components/BookingForm';
import { services, areas, brands, faqs, getService } from '@/lib/data';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: `${s.name.en} in Lahore`,
    description: `${s.short.en} Home service in Lahore. Price before repair. Book online or on WhatsApp.`,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default function ServicePage({ params }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={{ en: 'Service', ur: 'سروس' }}
        title={{ en: `${service.name.en} in Lahore`, ur: `لاہور میں ${service.name.ur}` }}
        text={service.intro}
      />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-extrabold">
              <T v={{ en: 'Problems we fix', ur: 'ہم کون سی خرابیاں ٹھیک کرتے ہیں' }} />
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.problems.map((p, i) => (
                <li key={i} className="flex gap-3 rounded-xl border border-navy/10 p-4 text-sm">
                  <span className="text-accent">✔</span>
                  <span>
                    <T v={p} />
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-accent-soft p-6">
              <h3 className="font-bold">
                <T v={{ en: 'Pricing', ur: 'قیمت' }} />
              </h3>
              <p className="mt-2 text-sm text-navy/80">
                <T
                  v={{
                    en: `Inspection fee: ${site.currency} ${site.inspectionFee}. Typical repairs start from ${site.currency} ${service.priceFrom.toLocaleString('en-PK')}. The final cost depends on the fault and parts, and you approve it before work starts.`,
                    ur: `انسپیکشن فیس: ${site.currency} ${site.inspectionFee}۔ عام مرمت ${site.currency} ${service.priceFrom.toLocaleString('en-PK')} سے شروع ہوتی ہے۔ حتمی خرچہ خرابی اور پارٹس پر منحصر ہے اور کام شروع ہونے سے پہلے آپ کی منظوری سے طے ہوتا ہے۔`,
                  }}
                />
              </p>
            </div>

            <h3 className="mt-10 text-xl font-bold">
              <T v={{ en: 'Brands we repair', ur: 'جن برانڈز کی ہم مرمت کرتے ہیں' }} />
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {brands.map((b) => (
                <li key={b} className="rounded-full border border-navy/15 px-4 py-1.5 text-sm font-medium">
                  {b}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-bold">
              <T v={{ en: 'Available in', ur: 'دستیاب علاقے' }} />
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="inline-block rounded-full bg-navy/5 px-4 py-1.5 text-sm font-medium hover:bg-accent hover:text-white"
                  >
                    <T v={a.name} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <h2 className="mb-4 text-xl font-extrabold">
                <T v={{ en: 'Book this service', ur: 'یہ سروس بک کریں' }} />
              </h2>
              <BookingForm defaultService={service.slug} />
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-x">
          <SectionHeading title={{ en: 'Frequently asked questions', ur: 'اکثر پوچھے گئے سوالات' }} />
          <div className="mt-8">
            <FaqList items={faqs.slice(0, 4)} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading title={{ en: 'Other services', ur: 'دیگر خدمات' }} />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
