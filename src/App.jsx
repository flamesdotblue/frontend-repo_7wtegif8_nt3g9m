import React from 'react';
import Hero from './components/Hero.jsx';
import Pricing from './components/Pricing.jsx';
import Blog from './components/Blog.jsx';
import ContactForm from './components/ContactForm.jsx';
import { LogIn } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      {/* Simple top nav */}
      <header className="sticky top-0 z-20 w-full border-b border-indigo-100/60 bg-white/70 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="text-lg font-semibold tracking-tight">
            pastelpay
          </a>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#pricing" className="text-slate-700 hover:text-indigo-600">Pricing</a>
            <a href="#blog" className="text-slate-700 hover:text-indigo-600">Blog</a>
            <a href="#contact" className="text-slate-700 hover:text-indigo-600">Contact</a>
          </nav>
          <a
            href="#auth"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm text-white transition hover:bg-indigo-500"
          >
            <LogIn className="h-4 w-4" /> Sign in
          </a>
        </div>
      </header>

      <main>
        <Hero />

        {/* Lightweight Auth card */}
        <section id="auth" className="mx-auto -mt-10 max-w-3xl px-6">
          <div className="rounded-2xl bg-white/90 p-6 shadow-lg ring-1 ring-indigo-100 backdrop-blur-md">
            <h3 className="text-lg font-semibold">Welcome back</h3>
            <p className="mt-1 text-sm text-slate-600">Sign in to manage subscriptions and billing.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 grid gap-3 sm:grid-cols-2"
            >
              <input
                type="email"
                required
                placeholder="Email address"
                className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-indigo-300"
              />
              <input
                type="password"
                required
                placeholder="Password"
                className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-indigo-300"
              />
              <button
                type="submit"
                className="sm:col-span-2 mt-1 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 text-white transition hover:bg-indigo-500"
              >
                Sign in
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500">By continuing, you agree to our Terms and Privacy Policy.</p>
          </div>
        </section>

        <Pricing />
        <Blog />
        <ContactForm />
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} pastelpay. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a href="#pricing" className="text-slate-600 hover:text-indigo-600">Pricing</a>
            <a href="#blog" className="text-slate-600 hover:text-indigo-600">Blog</a>
            <a href="#contact" className="text-slate-600 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
