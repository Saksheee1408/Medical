import { NextRequest, NextResponse } from 'next/server';

const BUSINESS_NAME = "JOSHI MEDICAL STORES";
const ADDRESS = "Bazar Line Rd, Dhad, Maharashtra 443106, India";
const PHONE = "094213 06535";
const SERVICES_LIST = "Prescription Medicines, Healthcare Consultation, OTC Products, Emergency Supplies";

const SYSTEM_PROMPT = `You are a helpful assistant for ${BUSINESS_NAME}.
Location: ${ADDRESS}. Phone: ${PHONE}.
Services: ${SERVICES_LIST}.
If asked about booking: "Book a medicine pickup on our website or call ${PHONE}."
If unsure: "For details, call ${PHONE}."
Keep answers short, friendly, professional. Do not invent prices or hours.`;

const fallbackReply = (text: string) => {
  const t = text.toLowerCase();
  if (/(book|appointment|schedule|slot|pickup)/.test(t)) return `You can schedule a medicine pickup on our website or call ${PHONE}.`;
  if (/(where|address|location|map)/.test(t)) return `We are located at ${ADDRESS}.`;
  if (/(hour|open|timing|working|close)/.test(t)) return `For our current working hours, please call us at ${PHONE}.`;
  if (/(service|medicine|test|product|stock)/.test(t)) return `We offer ${SERVICES_LIST}. Please call to check availability.`;
  if (/(price|cost|fee|charges)/.test(t)) return `Pricing depends on the specific medicine. Please call ${PHONE} for an exact quote.`;
  if (/(thank|thanks)/.test(t)) return `You're welcome! Let us know if you need anything else.`;
  return `I can help with pickups, services, location, and hours. Call ${PHONE} for urgent help.`;
};

const logChat = async (payload: any) => {
  try {
    await fetch(`${process.env.BACKEND_URL}/api/chatlogs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {}
};

export async function POST(req: NextRequest) {
  const { messages = [], business_id, session_id } = await req.json();
  const userText = messages?.[messages.length - 1]?.content || '';
  const groqKey = process.env.GROQ_API_KEY;

  if (!groqKey || groqKey === 'your_groq_api_key_here') {
    const reply = fallbackReply(userText);
    await Promise.all([
      logChat({ business_id, session_id, role: 'user', message: userText }),
      logChat({ business_id, session_id, role: 'assistant', message: reply }),
    ]);
    return NextResponse.json({ reply });
  }

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${groqKey}` },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
        max_tokens: 300,
        temperature: 0.4,
      }),
    });
    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content ?? `Call us at ${PHONE}.`;
    await Promise.all([
      logChat({ business_id, session_id, role: 'user', message: userText }),
      logChat({ business_id, session_id, role: 'assistant', message: reply }),
    ]);
    return NextResponse.json({ reply });
  } catch {
    const reply = `I am temporarily unavailable. Please call ${PHONE}.`;
    await Promise.all([
      logChat({ business_id, session_id, role: 'user', message: userText }),
      logChat({ business_id, session_id, role: 'assistant', message: reply }),
    ]);
    return NextResponse.json({ reply });
  }
}
