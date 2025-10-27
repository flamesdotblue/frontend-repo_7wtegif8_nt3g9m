import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill out all fields.');
      return;
    }
    // In a full app, this would POST to the backend. For now, provide a delightful confirmation.
    setStatus("Thanks! We'll be in touch shortly.");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-gradient-to-b from-indigo-50/40 to-pink-50/60 dark:from-slate-900/40 dark:to-slate-900/20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 px-3 py-1 text-xs text-pink-600 ring-1 ring-pink-200 dark:bg-pink-500/10 dark:text-pink-300 dark:ring-pink-500/20">
            <MessageSquare className="h-3.5 w-3.5" /> Contact
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>
            Let’s build something lovely
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Have questions about pricing, features, or enterprise? Drop us a note.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 space-y-4 rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200 backdrop-blur-sm dark:bg-slate-900/70 dark:ring-slate-800">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex items-center gap-2 rounded-xl bg-white px-3 ring-1 ring-slate-200 focus-within:ring-indigo-300 dark:bg-slate-900 dark:ring-slate-700">
              <User className="h-4 w-4 text-slate-400" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                className="w-full bg-transparent py-3 text-sm text-slate-900 placeholder-slate-400 outline-none dark:text-slate-100 dark:placeholder-slate-500"
              />
            </label>
            <label className="flex items-center gap-2 rounded-xl bg-white px-3 ring-1 ring-slate-200 focus-within:ring-indigo-300 dark:bg-slate-900 dark:ring-slate-700">
              <Mail className="h-4 w-4 text-slate-400" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                className="w-full bg-transparent py-3 text-sm text-slate-900 placeholder-slate-400 outline-none dark:text-slate-100 dark:placeholder-slate-500"
              />
            </label>
          </div>
          <label className="flex items-start gap-2 rounded-xl bg-white px-3 ring-1 ring-slate-200 focus-within:ring-indigo-300 dark:bg-slate-900 dark:ring-slate-700">
            <MessageSquare className="mt-3 h-4 w-4 text-slate-400" />
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Tell us a little about your project or question..."
              rows={5}
              className="w-full bg-transparent py-3 text-sm text-slate-900 placeholder-slate-400 outline-none dark:text-slate-100 dark:placeholder-slate-500"
            />
          </label>
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-slate-600 dark:text-slate-400">We typically respond within 1–2 business days.</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white shadow-[0_8px_20px_-6px_rgba(79,70,229,0.45)] transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              <Send className="h-4 w-4" /> Send message
            </button>
          </div>
          {status && (
            <div className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/20">
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
