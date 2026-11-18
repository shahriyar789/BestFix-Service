import { T } from '@/components/LangProvider';
import { PageHero } from '@/components/ui';
import BookingForm from '@/components/BookingForm';

export const metadata = {
  title: 'Book a Repair Service in Lahore',
  description: 'Book an appliance repair technician in Lahore online in one minute. Same-day visits, price before repair.',
  alternates: { canonical: '/booking' },
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow={{ en: 'Booking', ur: 'بکنگ' }}
        title={{ en: 'Book your repair in one minute', ur: 'ایک منٹ میں اپنی مرمت بک کریں' }}
        text={{
          en: 'Tell us the appliance, the problem and your area. We will call to confirm the time.',
          ur: 'اپلائنس، مسئلہ اور اپنا علاقہ بتائیں۔ ہم وقت کی تصدیق کے لیے کال کریں گے۔',
        }}
      />
      <section className="section">
        <div className="container-x max-w-3xl">
          <BookingForm />
          <p className="mt-6 text-center text-sm text-navy/60">
            <T
              v={{
                en: 'Prefer to talk? Use the call or WhatsApp button on this page.',
                ur: 'بات کرنا چاہتے ہیں؟ اس صفحے پر کال یا واٹس ایپ بٹن استعمال کریں۔',
              }}
            />
          </p>
        </div>
      </section>
    </>
  );
}
