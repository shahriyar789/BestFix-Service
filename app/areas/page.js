import Link from 'next/link';
import { T } from '@/components/LangProvider';
import { PageHero, CtaBand } from '@/components/ui';
import { areas } from '@/lib/data';

export const metadata = {
  title: 'Areas We Serve in Lahore',
  description:
    'BestFix provides home appliance repair in DHA, Gulberg, Johar Town, Model Town, Bahria Town, Wapda Town, Cantt and more areas of Lahore.',
  alternates: { canonical: '/areas' },
};

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow={{ en: 'Service areas', ur: 'سروس کے علاقے' }}
        title={{ en: 'Appliance repair across Lahore', ur: 'پورے لاہور میں اپلائنس ریپیئر' }}
        text={{
          en: 'Select your area to see how we serve your neighbourhood. Not listed? Call us, we cover most of Lahore.',
          ur: 'اپنا علاقہ منتخب کریں۔ فہرست میں نہیں؟ ہمیں کال کریں، ہم لاہور کے زیادہ تر حصے کو کور کرتے ہیں۔',
        }}
      />
      <section className="section">
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <Link
              key={a.slug}
              href={`/areas/${a.slug}`}
              className="card flex items-center justify-between transition hover:border-accent/50"
            >
              <span className="font-bold">
                <T v={a.name} />
              </span>
              <span className="text-accent">→</span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
