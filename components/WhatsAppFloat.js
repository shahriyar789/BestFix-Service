'use client';

import { useLang } from '@/components/LangProvider';
import { waLink, telLink } from '@/lib/site';

export default function WhatsAppFloat() {
  const { lang } = useLang();
  const msg =
    lang === 'ur'
      ? 'السلام علیکم، مجھے BestFix سے سروس بک کرنی ہے۔'
      : 'Hello BestFix, I would like to book a repair service.';

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href={telLink}
        aria-label="Call BestFix"
        className="grid h-12 w-12 place-items-center rounded-full bg-navy text-xl text-white shadow-lg ring-2 ring-white lg:hidden"
      >
        📞
      </a>
      <a
        href={waLink(msg)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-bold text-white shadow-lg ring-2 ring-white transition hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4h.1c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.3ZM12 21.7a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 0 1-1.5-5.1C2.1 6.5 6.5 2.1 12 2.1c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.5-4.4 9.8-9.8 9.8Zm5.4-7.3c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.5.8.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" />
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
