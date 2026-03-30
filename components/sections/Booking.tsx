'use client';
import { useState, useEffect, useCallback } from 'react';
import { FadeUp } from '@/components/ui/FadeUp';

const BUSINESS_ID    = process.env.NEXT_PUBLIC_BUSINESS_ID || 'P1224';
const PROFESSIONALS  = ["Front Desk", "Pharmacist"];
const SERVICES       = ["Prescription Pickup", "General Consultation", "OTC Purchase", "Bulk Order Inquiry"];

type Step = 'details' | 'datetime' | 'captcha' | 'confirm' | 'done';
interface Slot { label: string; value: string; }
interface FormData {
  name: string; email: string; phone: string; service: string;
  professional: string; date: string; time: string; notes: string;
}
interface Captcha { question: string; answer: number; userAnswer: string; }

export function BookingSection() {
  const [step, setStep] = useState<Step>('details');
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '',
    service: SERVICES[0] ?? '',
    professional: PROFESSIONALS[0] ?? '',
    date: '', time: '', notes: ''
  });
  const [availableSlots, setAvailableSlots] = useState<Slot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsError, setSlotsError] = useState('');
  const [captcha, setCaptcha] = useState<Captcha>({ question: '', answer: 0, userAnswer: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const fetchAvailableSlots = useCallback(async (date: string, professional: string) => {
    if (!date) return;
    setLoadingSlots(true);
    setAvailableSlots([]);
    setSlotsError('');
    try {
      const params = new URLSearchParams({ business_id: BUSINESS_ID, date, professional });
      const res = await fetch(`/api/proxy/available-slots?${params.toString()}`);
      const data = await res.json();
      if (!res.ok || !data.success) {
        setSlotsError(data.message || 'Unable to load slots.');
        return;
      }
      setAvailableSlots(Array.isArray(data.slots) ? data.slots : []);
    } catch { setSlotsError('Unable to load slots.'); }
    finally { setLoadingSlots(false); }
  }, []);

  useEffect(() => {
    if (form.date) {
      fetchAvailableSlots(form.date, form.professional);
      setForm(f => ({ ...f, time: '' }));
    } else {
      setAvailableSlots([]);
      setSlotsError('');
    }
  }, [form.date, form.professional, fetchAvailableSlots]);

  useEffect(() => {
    if (step === 'captcha') {
      fetch('/api/proxy/captcha')
        .then(r => r.json())
        .then(d => setCaptcha({ question: d.question, answer: d.answer, userAnswer: '' }))
        .catch(() => {});
    }
  }, [step]);

  const todayISO = () => new Date().toISOString().split('T')[0];
  const updateField = (field: keyof FormData, value: string) => setForm(f => ({ ...f, [field]: value }));

  const detailsValid = 
    form.name.trim().length > 1 && 
    /\S+@\S+\.\S+/.test(form.email) && 
    form.phone.trim().length > 6 && 
    !!form.service && !!form.professional;

  const dateTimeValid = !!form.date && !!form.time;

  const handleSubmit = async () => {
    if (String(captcha.userAnswer) !== String(captcha.answer)) {
      setError('Incorrect answer. Please try again.'); return;
    }
    setError(''); setSubmitting(true);
    try {
      const res = await fetch('/api/proxy/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          business_id: BUSINESS_ID, name: form.name, email: form.email,
          phone: form.phone, service: form.service, professional_name: form.professional,
          date: form.date, time: form.time, notes: form.notes,
          captcha_answer: captcha.userAnswer, captcha_expected: captcha.answer,
        }),
      });
      const data = await res.json();
      if (data.success) setStep('done');
      else setError(data.message ?? 'Booking failed. Please try again.');
    } catch { setError('Network error. Please check your connection.'); }
    finally { setSubmitting(false); }
  };

  return (
    <section id="booking" className="py-24" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <FadeUp>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-accent px-8 py-4 flex items-center justify-between" style={{ backgroundColor: 'var(--color-accent)' }}>
              <h2 className="text-white font-bold text-xl">Medicine Pickup Request</h2>
              <div className="text-white/80 text-sm">Step {step === 'details' ? '1' : step === 'datetime' ? '2' : '3'} of 3</div>
            </div>

            <div className="p-8 lg:p-12">
              {step === 'details' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Customer Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent outline-none"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) => updateField('name', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent outline-none"
                        placeholder="Your Mobile"
                        value={form.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email (to receive confirmation)</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent outline-none"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Service Type</label>
                      <select 
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent outline-none"
                        value={form.service}
                        onChange={(e) => updateField('service', e.target.value)}
                      >
                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Assigned Staff</label>
                      <select 
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent outline-none"
                        value={form.professional}
                        onChange={(e) => updateField('professional', e.target.value)}
                      >
                        {PROFESSIONALS.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                  </div>
                  <button 
                    disabled={!detailsValid}
                    onClick={() => setStep('datetime')}
                    className="w-full py-4 rounded-xl font-bold transition-all disabled:opacity-50 text-white"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    Select Pickup Time →
                  </button>
                </div>
              )}

              {step === 'datetime' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Select Date</label>
                    <input 
                      type="date" 
                      min={todayISO()}
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent outline-none"
                      value={form.date}
                      onChange={(e) => updateField('date', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-4">Select Time Slot</label>
                    {loadingSlots ? (
                      <div className="py-12 text-center text-gray-500 animate-pulse">Loading available slots...</div>
                    ) : slotsError ? (
                      <div className="p-4 bg-red-50 text-red-600 rounded-xl text-center">{slotsError}</div>
                    ) : availableSlots.length > 0 ? (
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                        {availableSlots.map(slot => (
                          <button
                            key={slot.value}
                            onClick={() => updateField('time', slot.value)}
                            className={`py-3 text-sm font-medium rounded-lg transition-all border ${form.time === slot.value ? 'border-accent shadow-md' : 'hover:border-primary'}`}
                            style={{ 
                              backgroundColor: form.time === slot.value ? 'var(--color-accent)' : 'transparent',
                              color: form.time === slot.value ? 'white' : 'inherit',
                              borderColor: form.time === slot.value ? 'var(--color-accent)' : '#eee'
                            }}
                          >
                            {slot.label}
                          </button>
                        ))}
                      </div>
                    ) : form.date ? (
                      <div className="py-12 text-center text-gray-500 border rounded-xl border-dashed">No slots available for this date.</div>
                    ) : (
                      <div className="py-12 text-center text-gray-400">Please select a date first.</div>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep('details')} className="w-1/3 py-4 border rounded-xl font-bold">Back</button>
                    <button 
                      disabled={!dateTimeValid}
                      onClick={() => setStep('captcha')}
                      className="w-2/3 py-4 rounded-xl font-bold text-white transition-all disabled:opacity-50"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      Complete Request
                    </button>
                  </div>
                </div>
              )}

              {step === 'captcha' && (
                <div className="text-center space-y-6">
                  <h3 className="text-xl font-bold">Security Check</h3>
                  <p className="text-gray-600">Please solve the math problem to prevent automated submissions.</p>
                  <div className="text-3xl font-black p-6 bg-gray-50 rounded-2xl inline-block border-2" style={{ borderColor: 'var(--color-accent)' }}>
                    {captcha.question}
                  </div>
                  <input 
                    type="number" 
                    className="block w-48 mx-auto px-4 py-4 text-center text-2xl border-b-4 outline-none focus:border-primary"
                    placeholder="Result"
                    value={captcha.userAnswer}
                    onChange={(e) => setCaptcha(c => ({ ...c, userAnswer: e.target.value }))}
                  />
                  {error && <p className="text-red-500 font-medium">{error}</p>}
                  <button 
                    disabled={submitting || !captcha.userAnswer}
                    onClick={handleSubmit}
                    className="w-full py-4 rounded-xl font-bold text-white transition-all disabled:opacity-50"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    {submitting ? 'Processing...' : 'Confirm Pickup Request'}
                  </button>
                </div>
              )}

              {step === 'done' && (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-4xl">✓</div>
                  <h2 className="text-3xl font-bold">Pickup Scheduled!</h2>
                  <p className="text-gray-600 max-w-sm mx-auto">Thank you {form.name}! Your pickup request has been received. We will have your items ready at Joshi Medical Stores.</p>
                  <button 
                    onClick={() => { setStep('details'); setForm({...form, date: '', time: ''}); }}
                    className="px-8 py-3 rounded-full font-bold text-white"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    Place Another Request
                  </button>
                </div>
              )}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
