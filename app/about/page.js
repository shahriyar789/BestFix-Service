import { T } from '@/components/LangProvider';
import Icon from '@/components/Icon';
import { PageHero, SectionHeading, CtaBand } from '@/components/ui';
import { whyUs } from '@/lib/data';

export const metadata = {
  title: 'About BestFix',
  description: 'BestFix is a Lahore home appliance repair service with trained technicians, clear pricing and service warranty.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={{ en: 'About us', ur: 'ہمارے بارے میں' }}
        title={{ en: 'Lahore’s home appliance repair service', ur: 'لاہور کی ہوم اپلائنس ریپیئر سروس' }}
      />

      <section className="section">
        <div className="container-x max-w-3xl space-y-5 text-navy/80">
          {/* Apni asal kahani yahan likhen: kab shuru kiya, kitni team, kitne saal ka tajurba */}
          <p>
            <T
              v={{
                en: 'BestFix is a Lahore-based repair service for home appliances. We send trained technicians to your door, tell you the cost before any repair, and stand behind our work with a service warranty.',
                ur: 'بیسٹ فکس لاہور میں گھریلو اپلائنسز کی مرمت کی سروس ہے۔ ہم تربیت یافتہ ٹیکنیشن آپ کے دروازے پر بھیجتے ہیں، مرمت سے پہلے خرچہ بتاتے ہیں اور اپنے کام پر سروس وارنٹی دیتے ہیں۔',
              }}
            />
          </p>
          <p>
            <T
              v={{
                en: 'We repair air conditioners, fridges and freezers, washing machines and dryers, microwaves and ovens, dishwashers and geysers, for both local and imported brands.',
                ur: 'ہم ایئر کنڈیشنر، فریج اور فریزر، واشنگ مشین اور ڈرائر، مائیکروویو اور اوون، ڈش واشر اور گیزر کی مرمت کرتے ہیں، مقامی اور درآمد شدہ دونوں برانڈز کی۔',
              }}
            />
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-x">
          <SectionHeading title={{ en: 'How we work', ur: 'ہمارا کام کرنے کا طریقہ' }} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <div key={i} className="card">
                <span className="icon-circle"><Icon name={w.icon} className="h-5 w-5" /></span>
                <h3 className="mt-3 font-bold">
                  <T v={w.title} />
                </h3>
                <p className="mt-1 text-sm text-navy/70">
                  <T v={w.text} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
