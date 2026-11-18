import { PageHero, ServiceCard, CtaBand } from '@/components/ui';
import { services } from '@/lib/data';

export const metadata = {
  title: 'Appliance Repair Services in Lahore',
  description:
    'AC, fridge, freezer, washing machine, microwave, oven, dishwasher and geyser repair at your home in Lahore. Book online or on WhatsApp.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={{ en: 'Services', ur: 'خدمات' }}
        title={{ en: 'Appliance repair services in Lahore', ur: 'لاہور میں اپلائنس ریپیئر سروسز' }}
        text={{
          en: 'Choose your appliance to see common faults, starting prices and how to book.',
          ur: 'اپنا اپلائنس منتخب کریں اور عام خرابیاں، ابتدائی قیمتیں اور بکنگ کا طریقہ دیکھیں۔',
        }}
      />
      <section className="section">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
