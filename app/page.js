import Link from 'next/link';
import { T } from '@/components/LangProvider';
import Icon from '@/components/Icon';
import { Heading, SectionHeading, ServiceCard, FaqList, CtaBand, Photo, BrandMarquee } from '@/components/ui';
import { site, telLink } from '@/lib/site';
import {
  services,
  areas,
  brands,
  steps,
  whyUs,
  faqs,
  reviews,
  quickFacts,
  aboutChecks,
  bookingSteps,
} from '@/lib/data';

const HEX = 'polygon(25% 4%, 75% 4%, 100% 50%, 75% 96%, 25% 96%, 0% 50%)';

function ReviewCard({ r }) {
  return (
    <figure className="flex flex-col rounded-2xl border border-line bg-paper p-5">
      <div className="flex items-center gap-1 text-star">
        {Array.from({ length: r.rating }).map((_, i) => (
          <Icon key={i} name="star" className="h-4 w-4" />
        ))}
      </div>
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
        <T v={r.text} />
      </blockquote>
      <figcaption className="mt-4 border-t border-line pt-3 text-xs text-ink-muted">
        {r.name}
        {r.area ? ` · ${r.area}` : ''}
      </figcaption>
    </figure>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-[linear-gradient(100deg,#faf3e9_0%,#f3f0eb_55%,#e5e9ea_100%)]">
        <div className="container-x grid items-center gap-10 pb-10 pt-10 lg:grid-cols-[1.05fr_1fr] lg:pt-14">
          <div>
            <p className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-medium">
              <Icon name="map-pin" className="h-3.5 w-3.5 text-brand" />
              <T v={{ en: 'Lahore / Pakistan', ur: 'لاہور / پاکستان' }} />
            </p>
            <Heading
              as="h1"
              lead={{ en: 'SAME-DAY', ur: 'اسی دن' }}
              title={{ en: 'appliance repair in Lahore.', ur: 'اپلائنس ریپیئر لاہور میں۔' }}
              className="mt-5 text-[2.6rem] sm:text-[3.4rem]"
            />

            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
              <T
                v={{
                  en: 'Skilled local technicians. Up-front pricing. A written warranty on every repair. We get the diagnosis right, so the repair holds.',
                  ur: 'ماہر مقامی ٹیکنیشن۔ پہلے سے قیمت۔ ہر مرمت پر تحریری وارنٹی۔ ہم خرابی کی صحیح تشخیص کرتے ہیں تاکہ مرمت پائیدار رہے۔',
                }}
              />
            </p>

            <ul className="mt-6 flex flex-wrap gap-2.5">
              {[
                { i: 'award', t: { en: 'Trained technicians', ur: 'تربیت یافتہ ٹیکنیشن' } },
                { i: 'shield', t: { en: 'Service warranty', ur: 'سروس وارنٹی' } },
                { i: 'tag', t: { en: 'Price before repair', ur: 'مرمت سے پہلے قیمت' } },
              ].map((b, i) => (
                <li key={i} className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-3.5 py-2 text-xs font-semibold">
                  <Icon name={b.i} className="h-4 w-4 text-brand" />
                  <T v={b.t} />
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/booking" className="btn-primary !py-4 !pe-7">
                <Icon name="calendar" className="h-4 w-4" />
                <T v={{ en: 'Book Same Day Service', ur: 'اسی دن سروس بک کریں' }} />
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
              <a href={telLink} className="inline-flex items-center gap-3 rounded-2xl border border-line bg-paper px-4 py-2.5 hover:border-brand/40" dir="ltr">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft text-brand">
                  <Icon name="phone" className="h-[18px] w-[18px]" />
                </span>
                <span className="leading-tight">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-ink-muted">Call now</span>
                  <span className="block text-sm font-extrabold">{site.phoneDisplay}</span>
                </span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="h-[340px] overflow-hidden rounded-[28px] shadow-card sm:h-[420px]">
              <Photo src={site.images.hero} alt="Appliance repair technician at work" />
            </div>
            <div className="absolute -bottom-5 end-4 w-[78%] rounded-2xl bg-night p-4 text-white shadow-card sm:end-6 sm:w-[68%]">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-ink">
                  <Icon name="check" className="h-5 w-5" strokeWidth={2.4} />
                </span>
                <p className="text-sm font-semibold leading-snug">
                  <T
                    v={{
                      en: 'Local repair experts, serving homes across Lahore.',
                      ur: 'مقامی ریپیئر ماہرین، لاہور بھر کے گھروں کے لیے۔',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick facts bar */}
        <div className="container-x pb-10">
          <ul className="grid gap-4 rounded-2xl border border-line bg-paper px-5 py-4 shadow-card sm:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((f, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="icon-circle-soft">
                  <Icon name={f.icon} className="h-[18px] w-[18px]" />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-bold">
                    <T v={f.title} />
                  </span>
                  <span className="block text-[11px] text-ink-muted">
                    <T v={f.text} />
                  </span>
                </span>
              </li>
            ))}
          </ul>

          {reviews.length > 0 && (
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {reviews.slice(0, 3).map((r, i) => (
                <ReviewCard key={i} r={r} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="relative overflow-hidden bg-cream">
        <div className="container-x grid items-center gap-12 pb-24 pt-16 lg:grid-cols-2 lg:pt-24">
          <div>
            <p className="eyebrow">
              <T v={{ en: 'About BestFix', ur: 'بیسٹ فکس کے بارے میں' }} />
            </p>
            <Heading
              title={{ en: 'Professional repair for', ur: 'پیشہ ورانہ مرمت' }}
              accent={{ en: "your home's appliances.", ur: 'آپ کے گھر کے اپلائنسز کے لیے۔' }}
              className="mt-3 text-3xl sm:text-[2.75rem]"
            />
            <p className="mt-5 max-w-lg text-[1.02rem] leading-relaxed text-ink-soft">
              <T
                v={{
                  en: 'We serve homes across Lahore. Our technicians know the major local and imported brands inside out, and every repair comes with a service warranty.',
                  ur: 'ہم لاہور بھر کے گھروں کو سروس دیتے ہیں۔ ہمارے ٹیکنیشن بڑے مقامی اور درآمد شدہ برانڈز کو اچھی طرح جانتے ہیں، اور ہر مرمت سروس وارنٹی کے ساتھ آتی ہے۔',
                }}
              />
            </p>
            <ul className="mt-6 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
              {aboutChecks.map((c, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                    <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.6} />
                  </span>
                  <T v={c} />
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col items-start gap-4">
              <a href={telLink} className="inline-flex items-center gap-3 rounded-full bg-brand py-2 pe-6 ps-2 text-white shadow-pill" dir="ltr">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand">
                  <Icon name="phone" className="h-[18px] w-[18px]" />
                </span>
                <span className="leading-tight">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/80">Open 7 days a week</span>
                  <span className="block text-sm font-extrabold">Call {site.phoneDisplay}</span>
                </span>
              </a>
              <Link href="/booking" className="btn-primary !py-4">
                <T v={{ en: 'Book Same Day Service', ur: 'اسی دن سروس بک کریں' }} />
              </Link>
            </div>
          </div>

          {/* Hexagon photos */}
          <div className="relative mx-auto h-[420px] w-full max-w-[460px]">
            <div className="absolute end-0 top-0 h-[250px] w-[290px] bg-brand-soft" style={{ clipPath: HEX }} />
            <div className="absolute start-0 top-6 h-[260px] w-[300px]" style={{ clipPath: HEX }}>
              <Photo src={site.images.about1} alt="Technician" />
            </div>
            <div className="absolute bottom-0 end-0 h-[240px] w-[280px]" style={{ clipPath: HEX }}>
              <Photo src={site.images.about2} alt="Repaired kitchen" />
            </div>
            <div className="absolute bottom-6 start-2 flex items-center gap-2.5 rounded-xl border border-line bg-paper px-4 py-3 shadow-card">
              <Icon name="shield" className="h-5 w-5 text-brand" />
              <span className="leading-tight">
                <span className="block text-sm font-extrabold">
                  <T v={{ en: 'Service warranty', ur: 'سروس وارنٹی' }} />
                </span>
                <span className="block text-[10px] uppercase tracking-wider text-ink-muted">
                  <T v={{ en: 'On every repair', ur: 'ہر مرمت پر' }} />
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="relative pb-6 text-center">
          <p className="text-sm text-ink-soft">
            <T v={{ en: 'Want to see what we service?', ur: 'دیکھنا چاہتے ہیں ہم کیا ٹھیک کرتے ہیں؟' }} />{' '}
            <Link href="/services" className="font-semibold text-brand">
              <T v={{ en: 'Browse all our services →', ur: 'تمام خدمات دیکھیں ←' }} />
            </Link>
          </p>
          <div className="watermark mt-2 text-center" dir="ltr" aria-hidden="true">
            LAHORE
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="curve-t section bg-paper">
        <div className="container-x">
          <SectionHeading
            eyebrow={{ en: 'Our services', ur: 'ہماری خدمات' }}
            title={{ en: 'Pick the appliance.', ur: 'اپلائنس چنیں۔' }}
            accent={{ en: "We'll bring the parts.", ur: 'پارٹس ہم لائیں گے۔' }}
            text={{
              en: `${services.length} specialty repair services, with common spare parts on our vans. Most jobs are finished on the first visit.`,
              ur: `${services.length} خصوصی ریپیئر سروسز، عام اسپیئر پارٹس ہماری وین میں۔ زیادہ تر کام پہلے ہی وزٹ میں مکمل ہو جاتے ہیں۔`,
            }}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
            <div className="flex flex-col justify-between rounded-2xl bg-brand p-6 text-white">
              <div>
                <h3 className="font-display text-xl font-extrabold leading-tight">
                  <T v={{ en: 'Need something else? Just ask.', ur: 'کچھ اور چاہیے؟ بس پوچھیں۔' }} />
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-white/85">
                  <T
                    v={{
                      en: 'Water dispenser, cooking range, small appliances: tell us what is broken and we will handle the rest.',
                      ur: 'واٹر ڈسپنسر، کوکنگ رینج، چھوٹے اپلائنسز: بتائیں کیا خراب ہے، باقی ہم سنبھال لیں گے۔',
                    }}
                  />
                </p>
              </div>
              <div className="mt-6 text-center">
                <a href={telLink} className="inline-flex items-center gap-2 text-sm font-bold" dir="ltr">
                  <Icon name="phone" className="h-4 w-4" /> Call us now
                </a>
                <Link href="/services" className="mt-2 block text-xs text-white/80 underline-offset-2 hover:underline">
                  <T v={{ en: 'See all services →', ur: 'تمام خدمات ←' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY US (dark card) ===== */}
      <section className="curve-t bg-cream py-16 sm:py-24">
        <div className="container-x">
          <div className="rounded-[28px] bg-night p-8 text-white sm:p-14">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <Heading
                title={{ en: 'Fast, friendly, and', ur: 'تیز، دوستانہ اور' }}
                accent={{ en: 'guaranteed.', ur: 'گارنٹی کے ساتھ۔' }}
                className="text-3xl sm:text-[2.75rem]"
                accentClass="text-brand-light"
              />
              <p className="max-w-md text-[15px] leading-relaxed text-white/70">
                <T
                  v={{
                    en: 'Whatever the brand, whatever the model, including the premium appliances that need a specialist.',
                    ur: 'برانڈ کوئی بھی ہو، ماڈل کوئی بھی ہو، بشمول وہ پریمیم اپلائنسز جنہیں ماہر کی ضرورت ہوتی ہے۔',
                  }}
                />
              </p>
            </div>
            <ul className="mt-12 grid gap-x-12 gap-y-9 md:grid-cols-2">
              {whyUs.map((w, i) => (
                <li key={i} className="flex gap-4">
                  <span className="icon-circle !h-11 !w-11">
                    <Icon name={w.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-extrabold">
                      <T v={w.title} />
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-white/65">
                      <T v={w.text} />
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="curve-t relative overflow-hidden bg-paper py-16 sm:py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div className="relative mx-auto h-[340px] w-[340px] sm:h-[400px] sm:w-[400px]">
            <div className="h-full w-full overflow-hidden rounded-full border-[6px] border-white shadow-card">
              <Photo src={site.images.technician} alt="Our support team" />
            </div>
            <div className="absolute -bottom-2 start-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 shadow-card rtl:translate-x-1/2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-600 text-white">
                <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="text-xs font-bold">
                <T v={{ en: 'Trained technicians', ur: 'تربیت یافتہ ٹیکنیشن' }} />
              </span>
            </div>
          </div>

          <div>
            <Heading
              title={{ en: 'From first call to a repair that', ur: 'پہلی کال سے ایسی مرمت تک جو' }}
              accent={{ en: 'holds.', ur: 'پائیدار رہے۔' }}
              className="text-3xl sm:text-[2.6rem]"
            />
            <ol className="mt-8 space-y-7">
              {steps.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="icon-circle-soft !bg-brand !text-white">
                    <Icon name={['phone', 'calendar', 'tag'][i]} className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                      <T v={{ en: `Step 0${i + 1}`, ur: `مرحلہ 0${i + 1}` }} />
                    </p>
                    <h3 className="mt-1 font-display text-lg font-extrabold">
                      <T v={s.title} />
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      <T v={s.text} />
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="watermark -mb-6 mt-10 text-end" dir="ltr" aria-hidden="true">
          PROCESS
        </div>
      </section>

      {/* ===== BOOKING STEPS (dark) ===== */}
      <section className="curve-t bg-night py-16 text-white sm:py-24">
        <div className="container-x">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow !text-brand-light">
                <T v={{ en: 'Book online', ur: 'آن لائن بک کریں' }} />
              </p>
              <Heading
                title={{ en: 'The 3-step booking that', ur: 'تین مراحل کی بکنگ جو' }}
                accent={{ en: 'takes ninety seconds.', ur: 'نوے سیکنڈ لیتی ہے۔' }}
                className="mt-3 max-w-xl text-3xl sm:text-[2.75rem]"
                accentClass="text-brand-light"
              />
              <p className="mt-4 text-white/70">
                <T
                  v={{
                    en: "Pick what's broken, when you need us and your address, and we take it from there.",
                    ur: 'بتائیں کیا خراب ہے، کب چاہیے اور آپ کا پتہ، باقی ہم سنبھال لیتے ہیں۔',
                  }}
                />
              </p>
            </div>
            <Link href="/booking" className="btn-primary !py-4 shrink-0">
              <T v={{ en: 'Start booking', ur: 'بکنگ شروع کریں' }} />
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {bookingSteps.map((s, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-night-2 p-6">
                <div className="font-display text-3xl font-extrabold text-brand-light" dir="ltr">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-lg font-extrabold">
                  <T v={s.title} />
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                  <T v={s.text} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRANDS ===== */}
      <section id="brands" className="curve-t bg-sand py-16 sm:py-24">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">
                <T v={{ en: 'Brand specialists', ur: 'برانڈ اسپیشلسٹ' }} />
              </p>
              <Heading
                title={{ en: 'Specialists in the brands', ur: 'ان برانڈز کے ماہر' }}
                accent={{ en: 'Lahore uses every day.', ur: 'جو لاہور میں روز استعمال ہوتے ہیں۔' }}
                className="mt-3 text-3xl sm:text-[2.6rem]"
              />
            </div>
            <p className="text-[15px] leading-relaxed text-ink-soft">
              <T
                v={{
                  en: 'Local and imported brands need the right parts, the right tools and hands-on experience. We bring all three.',
                  ur: 'مقامی اور درآمد شدہ برانڈز کے لیے درست پارٹس، درست اوزار اور عملی تجربہ چاہیے۔ ہم تینوں لاتے ہیں۔',
                }}
              />
            </p>
          </div>
        </div>
        <div className="mt-8">
          <BrandMarquee items={brands} />
        </div>
        <div className="container-x">
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3 lg:grid-cols-5" dir="ltr">
            {brands.map((b) => (
              <li key={b} className="border-b border-ink/15 py-3 text-sm font-semibold">
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-cream px-6 py-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                <T v={{ en: 'Commercial & food service', ur: 'کمرشل اور فوڈ سروس' }} />
              </p>
              <p className="mt-1 max-w-xl text-[13px] text-ink-soft">
                <T
                  v={{
                    en: 'We service commercial units too: restaurant fridges, display chillers, bakery ovens and office water dispensers.',
                    ur: 'ہم کمرشل یونٹس بھی ٹھیک کرتے ہیں: ریسٹورنٹ فریج، ڈسپلے چلر، بیکری اوون اور دفتری واٹر ڈسپنسر۔',
                  }}
                />
              </p>
            </div>
            <Link href="/contact" className="btn-ghost shrink-0 !py-2.5 text-xs">
              <T v={{ en: 'Ask us →', ur: 'ہم سے پوچھیں ←' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== AREAS ===== */}
      <section className="curve-t bg-cream py-16 sm:py-24">
        <div className="container-x">
          <p className="eyebrow">
            <T v={{ en: 'Service area', ur: 'سروس کے علاقے' }} />
          </p>
          <Heading
            title={{ en: `${areas.length}+ areas across`, ur: `${areas.length}+ علاقے،` }}
            accent={{ en: 'Lahore, and growing.', ur: 'پورے لاہور میں، اور بڑھتے ہوئے۔' }}
            className="mt-3 max-w-2xl text-3xl sm:text-[2.6rem]"
          />
          <p className="mt-4 max-w-xl text-[15px] text-ink-soft">
            <T
              v={{
                en: 'From DHA and Gulberg to Johar Town and Bahria Town: same-day visits when you book early.',
                ur: 'ڈی ایچ اے اور گلبرگ سے جوہر ٹاؤن اور بحریہ ٹاؤن تک: جلدی بک کریں تو اسی دن وزٹ۔',
              }}
            />
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/areas/${a.slug}`}
                  className="flex items-center gap-3 rounded-full border border-line bg-[#f9f1e6] py-2.5 pe-5 ps-2.5 text-sm font-bold transition hover:border-brand/40 hover:bg-paper"
                >
                  <span className="icon-circle-soft !h-9 !w-9">
                    <Icon name="map-pin" className="h-4 w-4" />
                  </span>
                  <T v={a.name} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== REVIEWS (sirf jab asal reviews data ma hon) ===== */}
      {reviews.length > 0 && (
        <section className="curve-t relative overflow-hidden bg-cream pb-16 pt-6 sm:pb-24">
          <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="eyebrow">
                <T v={{ en: 'Customer feedback', ur: 'گاہکوں کی رائے' }} />
              </p>
              <Heading
                title={{ en: 'Reviews on', ur: 'آزاد پلیٹ فارمز پر' }}
                accent={{ en: 'independent platforms.', ur: 'ہمارے ریویوز۔' }}
                className="mt-3 text-3xl sm:text-[2.6rem]"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reviews.map((r, i) => (
                <ReviewCard key={i} r={r} />
              ))}
            </div>
          </div>
          <div className="watermark mt-6 text-start" dir="ltr" aria-hidden="true">
            TRUSTED
          </div>
        </section>
      )}

      {/* ===== FAQ ===== */}
      <section className="curve-t bg-paper py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <span className="icon-circle-soft !h-12 !w-12 !rounded-2xl">
              <Icon name="help" className="h-5 w-5" />
            </span>
            <p className="eyebrow mt-3">
              <T v={{ en: 'Common questions', ur: 'عام سوالات' }} />
            </p>
            <Heading
              title={{ en: 'Your questions,', ur: 'آپ کے سوالات،' }}
              accent={{ en: 'answered.', ur: 'جوابات کے ساتھ۔' }}
              className="mt-3 text-3xl sm:text-[2.6rem]"
            />
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-soft">
              <T
                v={{
                  en: 'Inspection fee, warranty, how long jobs take and what we service: the questions we hear most.',
                  ur: 'انسپیکشن فیس، وارنٹی، کام میں کتنا وقت لگتا ہے اور ہم کیا سروس کرتے ہیں: سب سے زیادہ پوچھے جانے والے سوالات۔',
                }}
              />
            </p>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
