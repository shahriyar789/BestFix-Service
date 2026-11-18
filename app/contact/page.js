import { T } from '@/components/LangProvider';
import { PageHero } from '@/components/ui';
import BookingForm from '@/components/BookingForm';
import { site, telLink, waLink } from '@/lib/site';

export const metadata = {
  title: 'Contact BestFix Lahore',
  description: 'Call, WhatsApp or book online. BestFix home appliance repair in Lahore.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={{ en: 'Contact', ur: 'رابطہ' }}
        title={{ en: 'Talk to BestFix', ur: 'بیسٹ فکس سے بات کریں' }}
        text={{
          en: 'Call, message on WhatsApp or send a booking request. We reply fast.',
          ur: 'کال کریں، واٹس ایپ پر پیغام بھیجیں یا بکنگ کی درخواست بھیجیں۔ ہم جلد جواب دیتے ہیں۔',
        }}
      />
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <a href={telLink} className="card block hover:border-accent/50">
              <div className="text-sm font-semibold text-navy/60">
                <T v={{ en: 'Call us', ur: 'کال کریں' }} />
              </div>
              <div className="mt-1 text-xl font-extrabold" dir="ltr">
                📞 {site.phoneDisplay}
              </div>
            </a>
            <a href={waLink('Hello BestFix')} target="_blank" rel="noopener noreferrer" className="card block hover:border-accent/50">
              <div className="text-sm font-semibold text-navy/60">WhatsApp</div>
              <div className="mt-1 text-xl font-extrabold" dir="ltr">
                💬 {site.phoneDisplay}
              </div>
            </a>
            <a href={`mailto:${site.email}`} className="card block hover:border-accent/50">
              <div className="text-sm font-semibold text-navy/60">Email</div>
              <div className="mt-1 break-all text-lg font-bold" dir="ltr">
                ✉️ {site.email}
              </div>
            </a>
            <div className="card">
              <div className="text-sm font-semibold text-navy/60">
                <T v={{ en: 'Hours & location', ur: 'اوقات اور مقام' }} />
              </div>
              <p className="mt-1 text-sm">
                🕘 <T v={site.hours} />
              </p>
              <p className="mt-1 text-sm">
                📍 <T v={site.address} />
              </p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
