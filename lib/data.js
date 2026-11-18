// Sab content yahan ha. Har text {en, ur} format ma ha.
// Naya service/area add karna ho to bas yahan array ma ek item add karen,
// page, sitemap aur links khud ban jayen ge.

export const services = [
  {
    slug: 'ac-repair-installation',
    icon: 'snowflake',
    name: { en: 'AC Repair & Installation', ur: 'اے سی ریپیئر اور انسٹالیشن' },
    short: {
      en: 'Split & inverter AC service, gas filling, PCB repair and installation.',
      ur: 'اسپلٹ اور انورٹر اے سی کی سروس، گیس فلنگ، پی سی بی ریپیئر اور انسٹالیشن۔',
    },
    intro: {
      en: 'AC not cooling, leaking water, making noise or showing an error code? Our technicians diagnose the exact fault first and tell you the cost before any repair starts.',
      ur: 'اے سی ٹھنڈا نہیں کر رہا، پانی ٹپک رہا ہے، آواز آ رہی ہے یا ایرر کوڈ آ رہا ہے؟ ہمارے ٹیکنیشن پہلے اصل خرابی چیک کرتے ہیں اور مرمت سے پہلے خرچہ بتا دیتے ہیں۔',
    },
    problems: [
      { en: 'Not cooling / low cooling', ur: 'ٹھنڈک نہیں یا کم ہے' },
      { en: 'Water leakage from indoor unit', ur: 'اندرونی یونٹ سے پانی ٹپکنا' },
      { en: 'Gas leak and gas refilling', ur: 'گیس لیک اور گیس فلنگ' },
      { en: 'Outdoor unit / compressor not starting', ur: 'آؤٹ ڈور یونٹ یا کمپریسر اسٹارٹ نہیں ہوتا' },
      { en: 'PCB, sensor and remote issues', ur: 'پی سی بی، سینسر اور ریموٹ کے مسائل' },
      { en: 'Deep cleaning service', ur: 'ڈیپ کلیننگ سروس' },
      { en: 'New AC installation and shifting', ur: 'نئے اے سی کی انسٹالیشن اور شفٹنگ' },
    ],
    priceFrom: 1500,
  },
  {
    slug: 'refrigerator-freezer-repair',
    icon: 'fridge',
    name: { en: 'Fridge & Freezer Repair', ur: 'فریج اور فریزر ریپیئر' },
    short: {
      en: 'Not cooling, over-icing, noisy compressor, gas leak and thermostat faults.',
      ur: 'ٹھنڈک نہ ہونا، برف جمنا، کمپریسر کی آواز، گیس لیک اور تھرموسٹیٹ کی خرابی۔',
    },
    intro: {
      en: 'Food spoiling or fridge not cooling? We repair single-door, double-door, inverter and no-frost fridges and deep freezers at your home.',
      ur: 'کھانا خراب ہو رہا ہے یا فریج ٹھنڈا نہیں کر رہا؟ ہم سنگل ڈور، ڈبل ڈور، انورٹر، نو فراسٹ فریج اور ڈیپ فریزر آپ کے گھر پر ٹھیک کرتے ہیں۔',
    },
    problems: [
      { en: 'Fridge or freezer not cooling', ur: 'فریج یا فریزر ٹھنڈا نہیں کرتا' },
      { en: 'Too much ice / frost buildup', ur: 'ضرورت سے زیادہ برف جمنا' },
      { en: 'Compressor noise or not starting', ur: 'کمپریسر کی آواز یا اسٹارٹ نہ ہونا' },
      { en: 'Water leakage inside or below', ur: 'اندر یا نیچے سے پانی نکلنا' },
      { en: 'Gas leak and refilling', ur: 'گیس لیک اور گیس فلنگ' },
      { en: 'Thermostat, fan and PCB faults', ur: 'تھرموسٹیٹ، فین اور پی سی بی کی خرابی' },
    ],
    priceFrom: 1200,
  },
  {
    slug: 'washing-machine-dryer-repair',
    icon: 'washer',
    name: { en: 'Washing Machine & Dryer Repair', ur: 'واشنگ مشین اور ڈرائر ریپیئر' },
    short: {
      en: 'Automatic, front-load and twin-tub washers, plus dryers: drum, motor, drain and PCB.',
      ur: 'آٹومیٹک، فرنٹ لوڈ اور ٹوئن ٹب واشنگ مشین اور ڈرائر: ڈرم، موٹر، ڈرین اور پی سی بی۔',
    },
    intro: {
      en: 'Machine not spinning, not draining, leaking or showing an error? We fix automatic, semi-automatic and front-load washing machines and dryers.',
      ur: 'مشین چل نہیں رہی، پانی نہیں نکل رہا، لیک ہو رہی ہے یا ایرر آ رہا ہے؟ ہم آٹومیٹک، سیمی آٹومیٹک اور فرنٹ لوڈ مشینیں اور ڈرائر ٹھیک کرتے ہیں۔',
    },
    problems: [
      { en: 'Not spinning or not starting', ur: 'اسپن نہیں ہوتی یا اسٹارٹ نہیں ہوتی' },
      { en: 'Not draining water', ur: 'پانی نہیں نکلتا' },
      { en: 'Water leakage', ur: 'پانی لیک ہونا' },
      { en: 'Loud noise during wash or spin', ur: 'دھلائی یا اسپن کے دوران تیز آواز' },
      { en: 'Door lock and error codes', ur: 'ڈور لاک اور ایرر کوڈ' },
      { en: 'Dryer not heating', ur: 'ڈرائر گرم نہیں کرتا' },
    ],
    priceFrom: 1000,
  },
  {
    slug: 'microwave-oven-repair',
    icon: 'microwave',
    name: { en: 'Microwave & Oven Repair', ur: 'مائیکروویو اور اوون ریپیئر' },
    short: {
      en: 'Microwave not heating, sparking, turntable and keypad faults; built-in and electric oven repair.',
      ur: 'مائیکروویو گرم نہیں کرتا، چنگاریاں، ٹرن ٹیبل اور کی پیڈ کی خرابی؛ بلٹ ان اور الیکٹرک اوون ریپیئر۔',
    },
    intro: {
      en: 'We repair microwave ovens, electric ovens and built-in ovens. Safety first: if you smell burning or see sparks, unplug the unit and call us.',
      ur: 'ہم مائیکروویو، الیکٹرک اوون اور بلٹ ان اوون ٹھیک کرتے ہیں۔ حفاظت پہلے: جلنے کی بو یا چنگاریاں ہوں تو یونٹ کی پلگ نکال دیں اور ہمیں کال کریں۔',
    },
    problems: [
      { en: 'Microwave not heating', ur: 'مائیکروویو گرم نہیں کرتا' },
      { en: 'Sparking or burning smell', ur: 'چنگاریاں یا جلنے کی بو' },
      { en: 'Turntable not rotating', ur: 'ٹرن ٹیبل نہیں گھومتا' },
      { en: 'Keypad / display not working', ur: 'کی پیڈ یا ڈسپلے کام نہیں کرتا' },
      { en: 'Oven not heating evenly', ur: 'اوون یکساں گرم نہیں ہوتا' },
      { en: 'Door, hinge and thermostat faults', ur: 'دروازہ، قبضے اور تھرموسٹیٹ کی خرابی' },
    ],
    priceFrom: 1000,
  },
  {
    slug: 'dishwasher-repair',
    icon: 'dish',
    name: { en: 'Dishwasher Repair', ur: 'ڈش واشر ریپیئر' },
    short: {
      en: 'Not draining, not cleaning, leaking, pump and spray arm faults.',
      ur: 'پانی نہ نکلنا، صفائی نہ ہونا، لیکیج، پمپ اور اسپرے آرم کی خرابی۔',
    },
    intro: {
      en: 'Built-in and freestanding dishwashers repaired at home, including drain pump, inlet valve, heater and control board issues.',
      ur: 'بلٹ ان اور فری اسٹینڈنگ ڈش واشر گھر پر ٹھیک کیے جاتے ہیں، جن میں ڈرین پمپ، ان لیٹ والو، ہیٹر اور کنٹرول بورڈ کے مسائل شامل ہیں۔',
    },
    problems: [
      { en: 'Not draining', ur: 'پانی نہیں نکلتا' },
      { en: 'Dishes not clean / dry', ur: 'برتن صاف یا خشک نہیں ہوتے' },
      { en: 'Water leakage', ur: 'پانی لیک ہونا' },
      { en: 'Not starting / error codes', ur: 'اسٹارٹ نہیں ہوتا یا ایرر کوڈ' },
      { en: 'Heater and pump faults', ur: 'ہیٹر اور پمپ کی خرابی' },
    ],
    priceFrom: 1500,
  },
  {
    slug: 'geyser-water-heater-repair',
    icon: 'flame',
    name: { en: 'Geyser & Water Heater Repair', ur: 'گیزر اور واٹر ہیٹر ریپیئر' },
    short: {
      en: 'Gas, electric and instant geysers: pilot, thermostat, element and leakage fixes.',
      ur: 'گیس، الیکٹرک اور انسٹنٹ گیزر: پائلٹ، تھرموسٹیٹ، ایلیمنٹ اور لیکیج کی مرمت۔',
    },
    intro: {
      en: 'Gas geyser not lighting or water not heating? We repair gas, electric and instant geysers. Gas safety is our priority.',
      ur: 'گیس گیزر جل نہیں رہا یا پانی گرم نہیں ہو رہا؟ ہم گیس، الیکٹرک اور انسٹنٹ گیزر ٹھیک کرتے ہیں۔ گیس کی حفاظت ہماری ترجیح ہے۔',
    },
    problems: [
      { en: 'Pilot not lighting', ur: 'پائلٹ نہیں جلتا' },
      { en: 'Water not heating or too hot', ur: 'پانی گرم نہیں ہوتا یا بہت گرم ہوتا ہے' },
      { en: 'Water or gas leakage', ur: 'پانی یا گیس کی لیکیج' },
      { en: 'Thermostat and heating element', ur: 'تھرموسٹیٹ اور ہیٹنگ ایلیمنٹ' },
      { en: 'Burner cleaning and servicing', ur: 'برنر کی صفائی اور سروسنگ' },
    ],
    priceFrom: 800,
  },
];

export const areas = [
  { slug: 'dha-lahore', name: { en: 'DHA Lahore', ur: 'ڈی ایچ اے لاہور' } },
  { slug: 'gulberg', name: { en: 'Gulberg', ur: 'گلبرگ' } },
  { slug: 'johar-town', name: { en: 'Johar Town', ur: 'جوہر ٹاؤن' } },
  { slug: 'model-town', name: { en: 'Model Town', ur: 'ماڈل ٹاؤن' } },
  { slug: 'bahria-town', name: { en: 'Bahria Town', ur: 'بحریہ ٹاؤن' } },
  { slug: 'wapda-town', name: { en: 'Wapda Town', ur: 'واپڈا ٹاؤن' } },
  { slug: 'lahore-cantt', name: { en: 'Lahore Cantt', ur: 'لاہور کینٹ' } },
  { slug: 'iqbal-town', name: { en: 'Iqbal Town', ur: 'اقبال ٹاؤن' } },
  { slug: 'township', name: { en: 'Township', ur: 'ٹاؤن شپ' } },
  { slug: 'garden-town', name: { en: 'Garden Town', ur: 'گارڈن ٹاؤن' } },
  { slug: 'faisal-town', name: { en: 'Faisal Town', ur: 'فیصل ٹاؤن' } },
  { slug: 'valencia-town', name: { en: 'Valencia Town', ur: 'ویلنشیا ٹاؤن' } },
  { slug: 'askari', name: { en: 'Askari Housing', ur: 'عسکری ہاؤسنگ' } },
  { slug: 'shadman', name: { en: 'Shadman', ur: 'شادمان' } },
];

// Sirf brand ke naam (text). Logos use nahi kiye taake koi trademark masla na ho.
export const brands = [
  'Haier',
  'Dawlance',
  'PEL',
  'Orient',
  'Gree',
  'Samsung',
  'LG',
  'Kenwood',
  'Bosch',
  'Whirlpool',
  'Panasonic',
  'Mitsubishi',
];

export const steps = [
  {
    title: { en: 'Book online or call', ur: 'آن لائن بک کریں یا کال کریں' },
    text: {
      en: 'Fill the 1-minute form or message us on WhatsApp with your problem.',
      ur: 'ایک منٹ کا فارم بھریں یا واٹس ایپ پر اپنا مسئلہ بتائیں۔',
    },
  },
  {
    title: { en: 'Technician visits', ur: 'ٹیکنیشن آپ کے گھر آتا ہے' },
    text: {
      en: 'A technician arrives in your chosen time slot and checks the fault.',
      ur: 'ٹیکنیشن آپ کے منتخب وقت پر پہنچتا ہے اور خرابی چیک کرتا ہے۔',
    },
  },
  {
    title: { en: 'Clear quote, then repair', ur: 'پہلے قیمت، پھر مرمت' },
    text: {
      en: 'You get the repair cost up front. Repair starts only after you approve.',
      ur: 'مرمت کا خرچہ پہلے بتایا جاتا ہے۔ آپ کی منظوری کے بعد ہی کام شروع ہوتا ہے۔',
    },
  },
];

export const whyUs = [
  {
    icon: 'zap',
    title: { en: 'Same-day service', ur: 'اسی دن سروس' },
    text: {
      en: 'Most visits within the same day across Lahore.',
      ur: 'لاہور بھر میں زیادہ تر وزٹ اسی دن۔',
    },
  },
  {
    icon: 'tag',
    title: { en: 'Price before repair', ur: 'مرمت سے پہلے قیمت' },
    text: {
      en: 'No surprise bills. You approve the cost first.',
      ur: 'کوئی چھپا خرچہ نہیں۔ پہلے آپ قیمت منظور کرتے ہیں۔',
    },
  },
  {
    icon: 'shield',
    title: { en: 'Service warranty', ur: 'سروس وارنٹی' },
    text: {
      en: 'Warranty on repair work and parts replaced.',
      ur: 'مرمت اور تبدیل کیے گئے پارٹس پر وارنٹی۔',
    },
  },
  {
    icon: 'wrench',
    title: { en: 'Experienced technicians', ur: 'تجربہ کار ٹیکنیشن' },
    text: {
      en: 'Trained for all major local and imported brands.',
      ur: 'تمام بڑے مقامی اور درآمد شدہ برانڈز کے لیے تربیت یافتہ۔',
    },
  },
  {
    icon: 'map-pin',
    title: { en: 'At your doorstep', ur: 'آپ کے گھر پر' },
    text: {
      en: 'Home service in all major areas of Lahore.',
      ur: 'لاہور کے تمام بڑے علاقوں میں ہوم سروس۔',
    },
  },
  {
    icon: 'message',
    title: { en: 'WhatsApp support', ur: 'واٹس ایپ سپورٹ' },
    text: {
      en: 'Send a photo or video of the fault and get a quick reply.',
      ur: 'خرابی کی تصویر یا ویڈیو بھیجیں اور فوری جواب پائیں۔',
    },
  },
];

export const faqs = [
  {
    q: {
      en: 'How much is the inspection (visit) fee?',
      ur: 'انسپیکشن (وزٹ) فیس کتنی ہے؟',
    },
    a: {
      en: 'The inspection fee is shown on the site and the technician confirms it on the phone. The repair cost is quoted separately before any work starts.',
      ur: 'انسپیکشن فیس سائٹ پر درج ہے اور ٹیکنیشن فون پر بھی تصدیق کرتا ہے۔ مرمت کا خرچہ کام شروع کرنے سے پہلے الگ بتایا جاتا ہے۔',
    },
  },
  {
    q: { en: 'How fast can a technician reach me?', ur: 'ٹیکنیشن کتنی جلدی پہنچ سکتا ہے؟' },
    a: {
      en: 'We offer same-day visits in most areas of Lahore when you book before late afternoon. Otherwise we schedule the next morning.',
      ur: 'لاہور کے اکثر علاقوں میں سہ پہر سے پہلے بکنگ پر اسی دن وزٹ ہو جاتا ہے۔ ورنہ اگلی صبح کا وقت دیا جاتا ہے۔',
    },
  },
  {
    q: { en: 'Do you give a warranty on repairs?', ur: 'کیا مرمت پر وارنٹی ملتی ہے؟' },
    a: {
      en: 'Yes. Repair work and replaced parts come with a service warranty. The technician will tell you the exact period for your job.',
      ur: 'جی ہاں۔ مرمت کے کام اور تبدیل شدہ پارٹس پر سروس وارنٹی ملتی ہے۔ ٹیکنیشن آپ کو آپ کے کام کی صحیح مدت بتائے گا۔',
    },
  },
  {
    q: { en: 'Which brands do you repair?', ur: 'آپ کون سے برانڈز ٹھیک کرتے ہیں؟' },
    a: {
      en: 'Haier, Dawlance, PEL, Orient, Gree, Samsung, LG, Kenwood, Bosch, Whirlpool and most other local and imported brands.',
      ur: 'ہائیر، ڈاولنس، پی ای ایل، اورینٹ، گری، سیمسنگ، ایل جی، کینوڈ، بوش، ورل پول اور زیادہ تر دیگر مقامی و درآمد شدہ برانڈز۔',
    },
  },
  {
    q: { en: 'How can I pay?', ur: 'ادائیگی کیسے کر سکتا ہوں؟' },
    a: {
      en: 'Cash after the work is done, or JazzCash / Easypaisa / bank transfer if you prefer.',
      ur: 'کام مکمل ہونے کے بعد کیش، یا آپ چاہیں تو جاز کیش / ایزی پیسہ / بینک ٹرانسفر۔',
    },
  },
  {
    q: { en: 'Can I book on WhatsApp?', ur: 'کیا واٹس ایپ پر بک کر سکتا ہوں؟' },
    a: {
      en: 'Yes. Tap the WhatsApp button, send the appliance name, problem and your area, and we will reply with a time slot.',
      ur: 'جی ہاں۔ واٹس ایپ بٹن دبائیں، اپلائنس کا نام، مسئلہ اور اپنا علاقہ بھیجیں، ہم وقت بتا دیں گے۔',
    },
  },
];

export const reviews = [
  // Asal Google reviews yahan paste karen, is format ma. Khali array ho to section hide ho jata ha.
  // { name: 'Ali R.', area: 'DHA', rating: 5, text: { en: '...', ur: '...' } },
];

export const timeSlots = [
  { value: 'asap', label: { en: 'As soon as possible', ur: 'جتنی جلدی ممکن ہو' } },
  { value: 'today-evening', label: { en: 'Today evening', ur: 'آج شام' } },
  { value: 'tomorrow-morning', label: { en: 'Tomorrow morning', ur: 'کل صبح' } },
  { value: 'tomorrow-evening', label: { en: 'Tomorrow evening', ur: 'کل شام' } },
  { value: 'other', label: { en: 'Another day (tell us on call)', ur: 'کوئی اور دن (کال پر بتائیں)' } },
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
export function getArea(slug) {
  return areas.find((a) => a.slug === slug);
}

// ====== Reference-style home page ka extra content ======
export const quickFacts = [
  { icon: 'award', title: { en: 'Expert Service', ur: 'ماہر سروس' }, text: { en: 'For all major brands', ur: 'تمام بڑے برانڈز کے لیے' } },
  { icon: 'calendar', title: { en: 'Same or Next-Day', ur: 'اسی دن یا اگلے دن' }, text: { en: 'Scheduling', ur: 'شیڈولنگ' } },
  { icon: 'tag', title: { en: 'Up-Front Pricing', ur: 'پہلے سے قیمت' }, text: { en: 'No surprises', ur: 'کوئی چھپا خرچہ نہیں' } },
  { icon: 'clock', title: { en: 'Open 7 Days', ur: 'ہفتے کے 7 دن' }, text: { en: 'Weekends included', ur: 'اتوار سمیت' } },
];

export const aboutChecks = [
  { en: 'Trained technicians', ur: 'تربیت یافتہ ٹیکنیشن' },
  { en: 'Quality spare parts', ur: 'معیاری اسپیئر پارٹس' },
  { en: 'Service warranty', ur: 'سروس وارنٹی' },
  { en: 'Price before repair', ur: 'مرمت سے پہلے قیمت' },
  { en: 'Same-day visits', ur: 'اسی دن وزٹ' },
  { en: 'Honest repair-or-replace advice', ur: 'مرمت یا تبدیلی کا ایماندار مشورہ' },
];

export const bookingSteps = [
  {
    title: { en: 'Pick the appliance', ur: 'اپلائنس منتخب کریں' },
    text: { en: 'AC, fridge, washer, microwave, dishwasher, geyser… tap one. Brand and symptoms are optional.', ur: 'اے سی، فریج، واشر، مائیکروویو، ڈش واشر، گیزر… ایک چنیں۔ برانڈ اور علامات اختیاری ہیں۔' },
  },
  {
    title: { en: 'Choose a time', ur: 'وقت منتخب کریں' },
    text: { en: 'Earliest available, or pick a specific day and arrival window.', ur: 'جلد از جلد دستیاب وقت، یا کوئی مخصوص دن اور وقت چنیں۔' },
  },
  {
    title: { en: 'Your details — booked', ur: 'آپ کی تفصیل — بک ہو گیا' },
    text: { en: 'Name, phone, address — and we confirm your arrival window.', ur: 'نام، فون، پتہ — اور ہم آپ کے آنے کا وقت کنفرم کرتے ہیں۔' },
  },
];

export const footerTrust = [
  { icon: 'shield', title: { en: 'Trained technicians', ur: 'تربیت یافتہ ٹیکنیشن' }, text: { en: 'For all major brands', ur: 'تمام بڑے برانڈز کے لیے' } },
  { icon: 'map-pin', title: { en: 'Serving Lahore', ur: 'لاہور میں سروس' }, text: { en: 'Home visits across the city', ur: 'پورے شہر میں ہوم وزٹ' } },
  { icon: 'check', title: { en: 'Service warranty', ur: 'سروس وارنٹی' }, text: { en: 'On every repair', ur: 'ہر مرمت پر' } },
  { icon: 'clock', title: { en: 'Same-day service', ur: 'اسی دن سروس' }, text: { en: 'Book early in the day', ur: 'دن میں جلدی بک کریں' } },
];

export const faqIcons = ['tag', 'clock', 'shield', 'award', 'wrench', 'calendar'];
