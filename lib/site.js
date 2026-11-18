// ====== YAHAN APNI ASAL INFO LIKHEN (sab placeholders hain) ======
export const site = {
  name: 'BestFix',
  domain: 'https://bestfix.pk',

  // Phone / WhatsApp: country code ke saath, bagair + aur spaces ke
  phoneDisplay: '+92 300 0308013',
  phoneDigits: '923000308013',
  whatsappDigits: '923000308013',
  email: 'info@bestfix.pk',

  address: {
    en: 'Lahore, Punjab, Pakistan',
    ur: 'لاہور، پنجاب، پاکستان',
  },
  hours: {
    en: 'Mon–Sun: 9:00 AM – 9:00 PM',
    ur: 'پیر تا اتوار: صبح 9 بجے سے رات 9 بجے تک',
  },

  // Inspection / visit fee (PKR). Repair ka kharcha alag bataya jata ha.
  inspectionFee: 500,
  currency: 'Rs',

  // Warranty (apni asal policy ke mutabiq badlen)
  warrantyDays: 30,

  // Photos: apni image public/images/ ma rakhen aur path yahan likhen (jaise '/images/hero.jpg').
  // Khali chhorne pa sundar placeholder dikhta ha.
  images: {
    hero: '',
    about1: '',
    about2: '',
    technician: '',
  },

  // Sab se upar wali dark bar. text khali ho to bar hide ho jati ha.
  promo: {
    label: { en: 'SAME-DAY SERVICE', ur: 'اسی دن سروس' },
    text: { en: 'Book before noon for a same-day visit in Lahore', ur: 'دوپہر سے پہلے بک کریں، لاہور میں اسی دن وزٹ' },
    code: '',
  },

  social: {
    facebook: '',
    instagram: '',
    googleBusiness: '',
  },
};

export function waLink(message = '') {
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${site.whatsappDigits}${text}`;
}

export const telLink = `tel:+${site.phoneDigits}`;
