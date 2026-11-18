import { notFound } from 'next/navigation';
import { T } from '@/components/LangProvider';
import { PageHero, SectionHeading, ServiceCard, FaqList, CtaBand } from '@/components/ui';
import BookingForm from '@/components/BookingForm';
import { areas, services, faqs, getArea } from '@/lib/data';

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const a = getArea(params.slug);
  if (!a) return {};
  return {
    title: `Appliance Repair in ${a.name.en}, Lahore`,
    description: `Home repair for AC, fridge, washing machine, microwave, oven, dishwasher and geyser in ${a.name.en}, Lahore. Same-day visits, price before repair.`,
    alternates: { canonical: `/areas/${a.slug}` },
  };
}

export default function AreaPage({ params }) {
  const area = getArea(params.slug);
  if (!area) notFound();

  return (
    <>
      <PageHero
        eyebrow={{ en: 'Service area', ur: 'سروس کا علاقہ' }}
        title={{
          en: `Appliance repair in ${area.name.en}, Lahore`,
          ur: `${area.name.ur}، لاہور میں اپلائنس ریپیئر`,
        }}
        text={{
          en: `Technicians reach ${area.name.en} for same-day AC, fridge, washing machine, microwave, oven, dishwasher and geyser repair.`,
          ur: `ٹیکنیشن ${area.name.ur} میں اسی دن اے سی، فریج، واشنگ مشین، مائیکروویو، اوون، ڈش واشر اور گیزر کی مرمت کے لیے پہنچتے ہیں۔`,
        }}
      />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-extrabold">
              <T v={{ en: 'What we repair here', ur: 'یہاں ہم کیا ٹھیک کرتے ہیں' }} />
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {services.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
          <aside className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <h2 className="mb-4 text-xl font-extrabold">
                <T v={{ en: 'Book a technician', ur: 'ٹیکنیشن بک کریں' }} />
              </h2>
              <BookingForm defaultArea={area.slug} />
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

      <CtaBand />
    </>
  );
}
