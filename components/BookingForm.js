'use client';

import { useState } from 'react';
import { T, useT } from '@/components/LangProvider';
import { services, areas, timeSlots } from '@/lib/data';
import { site, waLink, telLink } from '@/lib/site';

function normalizePhone(raw) {
  return String(raw || '').replace(/[^\d+]/g, '');
}

function isValidPhone(raw) {
  const digits = normalizePhone(raw).replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 13;
}

export default function BookingForm({ defaultService = '', defaultArea = '' }) {
  const t = useT();
  const [status, setStatus] = useState('idle'); // idle | sending | done
  const [error, setError] = useState('');
  const [summary, setSummary] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    const f = new FormData(e.currentTarget);
    const data = {
      service: f.get('service') || '',
      name: String(f.get('name') || '').trim(),
      phone: String(f.get('phone') || '').trim(),
      area: f.get('area') || '',
      address: String(f.get('address') || '').trim(),
      slot: f.get('slot') || '',
      problem: String(f.get('problem') || '').trim(),
      website: f.get('website') || '', // honeypot, insan isay khali chhorta ha
    };

    if (!data.name || !data.service) {
      setError(t({ en: 'Please enter your name and select a service.', ur: 'براہ کرم اپنا نام لکھیں اور سروس منتخب کریں۔' }));
      return;
    }
    if (!isValidPhone(data.phone)) {
      setError(t({ en: 'Please enter a valid phone number.', ur: 'براہ کرم درست فون نمبر لکھیں۔' }));
      return;
    }

    const serviceName = services.find((s) => s.slug === data.service)?.name.en || data.service;
    const areaName = areas.find((a) => a.slug === data.area)?.name.en || data.area || '-';
    const slotName = timeSlots.find((s) => s.value === data.slot)?.label.en || data.slot;

    const text = [
      'New booking request - BestFix',
      `Service: ${serviceName}`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Area: ${areaName}`,
      `Address: ${data.address || '-'}`,
      `Time: ${slotName}`,
      `Problem: ${data.problem || '-'}`,
    ].join('\n');

    setStatus('sending');
    try {
      await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, serviceName, areaName, slotName, text }),
      });
    } catch {
      // Network fail ho bhi jaye to user ko WhatsApp ka rasta mil jata ha
    }
    setSummary(text);
    setStatus('done');
  }

  if (status === 'done') {
    return (
      <div className="card text-center">
        <div className="text-5xl">✅</div>
        <h3 className="mt-3 text-xl font-bold">
          <T v={{ en: 'Request received!', ur: 'آپ کی درخواست مل گئی!' }} />
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-navy/70">
          <T
            v={{
              en: 'Our team will call you shortly to confirm the time. For the fastest reply, also send these details on WhatsApp.',
              ur: 'ہماری ٹیم وقت کی تصدیق کے لیے جلد آپ کو کال کرے گی۔ فوری جواب کے لیے یہی تفصیل واٹس ایپ پر بھی بھیج دیں۔',
            }}
          />
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={waLink(summary)} target="_blank" rel="noopener noreferrer" className="btn bg-[#25D366] text-white hover:opacity-90">
            <T v={{ en: 'Send on WhatsApp', ur: 'واٹس ایپ پر بھیجیں' }} />
          </a>
          <a href={telLink} className="btn-outline-dark">
            📞 {site.phoneDisplay}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5" noValidate>
      {/* Honeypot: bots ye field bhar dete hain */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="service">
            <T v={{ en: 'Service', ur: 'سروس' }} /> *
          </label>
          <select id="service" name="service" defaultValue={defaultService} className="input" required>
            <option value="">{t({ en: 'Select appliance / service', ur: 'اپلائنس / سروس منتخب کریں' })}</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {t(s.name)}
              </option>
            ))}
            <option value="other">{t({ en: 'Other appliance', ur: 'کوئی اور اپلائنس' })}</option>
          </select>
        </div>

        <div>
          <label className="label" htmlFor="slot">
            <T v={{ en: 'Preferred time', ur: 'پسندیدہ وقت' }} />
          </label>
          <select id="slot" name="slot" defaultValue="asap" className="input">
            {timeSlots.map((s) => (
              <option key={s.value} value={s.value}>
                {t(s.label)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="label" htmlFor="name">
            <T v={{ en: 'Your name', ur: 'آپ کا نام' }} /> *
          </label>
          <input id="name" name="name" type="text" autoComplete="name" className="input" placeholder={t({ en: 'e.g. Ahmed Khan', ur: 'مثلاً احمد خان' })} required />
        </div>

        <div>
          <label className="label" htmlFor="phone">
            <T v={{ en: 'Phone / WhatsApp', ur: 'فون / واٹس ایپ' }} /> *
          </label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" className="input" placeholder="03XX XXXXXXX" required />
        </div>

        <div>
          <label className="label" htmlFor="area">
            <T v={{ en: 'Area', ur: 'علاقہ' }} />
          </label>
          <select id="area" name="area" defaultValue={defaultArea} className="input">
            <option value="">{t({ en: 'Select your area', ur: 'اپنا علاقہ منتخب کریں' })}</option>
            {areas.map((a) => (
              <option key={a.slug} value={a.slug}>
                {t(a.name)}
              </option>
            ))}
            <option value="other-area">{t({ en: 'Other area in Lahore', ur: 'لاہور کا کوئی اور علاقہ' })}</option>
          </select>
        </div>

        <div>
          <label className="label" htmlFor="address">
            <T v={{ en: 'House / street (optional)', ur: 'گھر / گلی (اختیاری)' }} />
          </label>
          <input id="address" name="address" type="text" autoComplete="street-address" className="input" placeholder={t({ en: 'House #, street, block', ur: 'گھر نمبر، گلی، بلاک' })} />
        </div>
      </div>

      <div>
        <label className="label" htmlFor="problem">
          <T v={{ en: 'What is the problem?', ur: 'مسئلہ کیا ہے؟' }} />
        </label>
        <textarea
          id="problem"
          name="problem"
          rows={4}
          className="input"
          placeholder={t({
            en: 'e.g. AC is running but not cooling. Brand: Haier, 1.5 ton inverter.',
            ur: 'مثلاً اے سی چل رہا ہے مگر ٹھنڈا نہیں کر رہا۔ برانڈ: ہائیر، 1.5 ٹن انورٹر۔',
          })}
        />
      </div>

      {error && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
        {status === 'sending' ? (
          <T v={{ en: 'Sending…', ur: 'بھیج رہے ہیں…' }} />
        ) : (
          <T v={{ en: 'Book now', ur: 'ابھی بک کریں' }} />
        )}
      </button>

      <p className="text-center text-xs text-navy/60">
        <T
          v={{
            en: `Inspection fee: ${site.currency} ${site.inspectionFee}. Repair cost is quoted before any work.`,
            ur: `انسپیکشن فیس: ${site.currency} ${site.inspectionFee}۔ مرمت کا خرچہ کام سے پہلے بتایا جاتا ہے۔`,
          }}
        />
      </p>
    </form>
  );
}
