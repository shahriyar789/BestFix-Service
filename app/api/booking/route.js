import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const clean = (v, max = 500) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot: bot ne hidden field bhar di to chup chap "ok" bol do
  if (body.website) return NextResponse.json({ ok: true });

  const name = clean(body.name, 80);
  const phone = clean(body.phone, 30);
  const digits = phone.replace(/\D/g, '');
  if (!name || digits.length < 10 || digits.length > 13) {
    return NextResponse.json({ ok: false, error: 'Name and valid phone required' }, { status: 400 });
  }

  const text = [
    '🔧 New booking - BestFix',
    `Service: ${clean(body.serviceName, 100)}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Area: ${clean(body.areaName, 100) || '-'}`,
    `Address: ${clean(body.address, 200) || '-'}`,
    `Time: ${clean(body.slotName, 100) || '-'}`,
    `Problem: ${clean(body.problem, 600) || '-'}`,
  ].join('\n');

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (token && chatId) {
    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
      });
      if (!res.ok) console.error('Telegram error', res.status, await res.text());
    } catch (err) {
      console.error('Telegram send failed', err);
    }
  } else {
    // Telegram set nahi: Vercel logs ma booking dikh jaye gi
    console.log('[BOOKING]\n' + text);
  }

  return NextResponse.json({ ok: true });
}
