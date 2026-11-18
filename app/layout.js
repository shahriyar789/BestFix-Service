import './globals.css';
import { Plus_Jakarta_Sans, Noto_Nastaliq_Urdu } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { LangProvider } from '@/components/LangProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { site } from '@/lib/site';
import { areas } from '@/lib/data';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});
const urdu = Noto_Nastaliq_Urdu({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-urdu',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: 'BestFix | AC, Fridge, Washing Machine Repair in Lahore',
    template: '%s | BestFix Lahore',
  },
  description:
    'Same-day home appliance repair in Lahore: AC, fridge, freezer, washing machine, microwave, oven, dishwasher and geyser. Clear price before repair. Book online or on WhatsApp.',
  openGraph: {
    type: 'website',
    siteName: 'BestFix',
    locale: 'en_PK',
    url: site.domain,
  },
};

export const viewport = {
  themeColor: '#faf3e9',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'BestFix',
  url: site.domain,
  telephone: `+${site.phoneDigits}`,
  email: site.email,
  priceRange: 'Rs',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  areaServed: areas.map((a) => ({ '@type': 'Place', name: `${a.name.en}, Lahore` })),
  openingHours: 'Mo-Su 09:00-21:00',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={`${GeistSans.variable} ${jakarta.variable} ${urdu.variable}`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LangProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </LangProvider>
      </body>
    </html>
  );
}
