'use client';
import { useState, useEffect, useRef } from 'react';

const BUSINESS_ID = 'P1224';

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let sid = localStorage.getItem('chat_session_id');
    if (!sid) {
      sid = Math.random().toString(36).substring(7);
      localStorage.setItem('chat_session_id', sid);
    }
    setSessionId(sid);
    
    // Welcome message
    if (messages.length === 0) {
      setMessages([{ role: 'assistant', content: "Hello! I'm the Joshi Medical assistant. How can I help you today?" }]);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMsg }],
          business_id: BUSINESS_ID,
          session_id: sessionId
        }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I'm having trouble connecting. Please call us at 094213 06535." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[9999]">
      {/* Launcher */}
      <button 
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 relative border-4 border-white"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="absolute bottom-20 left-0 w-[90vw] sm:w-[380px] bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-500">
          <div className="p-6 text-white flex items-center justify-between" style={{ backgroundColor: 'var(--color-primary)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">JM</div>
              <div>
                <h4 className="font-bold">Joshi Medical Help</h4>
                <p className="text-[10px] text-white/60 tracking-widest uppercase">Always Online</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="opacity-60 hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="h-[400px] overflow-y-auto p-6 space-y-4 bg-gray-50/50"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-5 py-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-accent text-white rounded-tr-none shadow-lg shadow-accent/20' : 'bg-white text-gray-700 rounded-tl-none border border-gray-100 shadow-sm'}`} style={{ backgroundColor: m.role === 'user' ? 'var(--color-accent)' : '#fff' }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-5 py-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100" />
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-50">
            <div className="relative">
              <input 
                type="text"
                placeholder="Ask us anything..."
                className="w-full px-6 py-4 bg-gray-50 rounded-full text-sm outline-none focus:ring-2 focus:ring-primary pr-16"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className="absolute right-2 top-2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-105 disabled:opacity-30 shadow-lg shadow-primary/20"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
