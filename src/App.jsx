import React, { useEffect, useState } from 'react';
import Hero from './components/Hero.jsx';
import Pricing from './components/Pricing.jsx';
import Blog from './components/Blog.jsx';
import ContactForm from './components/ContactForm.jsx';
import { LogIn } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('system');

  // Apply system theme and react to changes
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      const shouldDark = theme === 'dark' || (theme === 'system' && media.matches);
      document.documentElement.classList.toggle('dark', shouldDark);
    };
    apply();
    const onChange = () => apply();
    media.addEventListener ? media.addEventListener('change', onChange) : media.addListener(onChange);
    return () => {
      media.removeEventListener ? media.removeEventListener('change', onChange) : media.removeListener(onChange);
    };
  }, [theme]);

  return (
    <div className="min-h-screen w-full bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Simple top nav */}
      <header className="sticky top-0 z-20 w-full border-b border-indigo-100/60 bg-white/70 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="text-lg font-semibold tracking-tight">
            pastelpay
          </a>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#pricing" className="text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">Pricing</a>
            <a href="#blog" className="text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">Blog</a>
            <a href="#contact" className="text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              aria-label="Use system theme"
              onClick={() => setTheme('system')}
              className={`hidden sm:inline-flex rounded-lg px-2 py-1 text-xs ring-1 transition dark:ring-slate-700 ${theme==='system' ? 'text-indigo-600 ring-indigo-200 dark:text-indigo-400' : 'text-slate-600 ring-slate-200 dark:text-slate-300'}`}
            >
              System
            </button>
            <button
              aria-label="Light mode"
              onClick={() => setTheme('light')}
              className={`hidden sm:inline-flex rounded-lg px-2 py-1 text-xs ring-1 transition dark:ring-slate-700 ${theme==='light' ? 'text-indigo-600 ring-indigo-200 dark:text-indigo-400' : 'text-slate-600 ring-slate-200 dark:text-slate-300'}`}
            >
              Light
            </button>
            <button
              aria-label="Dark mode"
              onClick={() => setTheme('dark')}
              className={`hidden sm:inline-flex rounded-lg px-2 py-1 text-xs ring-1 transition dark:ring-slate-700 ${theme==='dark' ? 'text-indigo-400 ring-indigo-400/30' : 'text-slate-600 ring-slate-200 dark:text-slate-300'}`}
            >
              Dark
            </button>
            <a
              href="#auth"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm text-white transition hover:bg-indigo-500"
            >
              <LogIn className="h-4 w-4" /> Sign in
            </a>
          </div>
        </div>
      </header>

      <main>
        <Hero />

        {/* Lightweight Auth card */}
        <section id="auth" className="mx-auto -mt-10 max-w-3xl px-6">
          <div className="rounded-2xl bg-white/90 p-6 shadow-lg ring-1 ring-indigo-100 backdrop-blur-md dark:bg-slate-900/80 dark:ring-slate-800">
            <h3 className="text-lg font-semibold">Welcome back</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Sign in to manage subscriptions and billing.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 grid gap-3 sm:grid-cols-2"
            >
              <input
                type="email"
                required
                placeholder="Email address"
                className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-indigo-300 dark:border-slate-700 dark:bg-slate-900 dark:placeholder-slate-500"
              />
              <input
                type="password"
                required
                placeholder="Password"
                className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-indigo-300 dark:border-slate-700 dark:bg-slate-900 dark:placeholder-slate-500"
              />
              <button
                type="submit"
                className="sm:col-span-2 mt-1 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 text-white transition hover:bg-indigo-500"
              >
                Sign in
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">By continuing, you agree to our Terms and Privacy Policy.</p>
          </div>
        </section>

        <Pricing />
        <Blog />
        <ContactForm />
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} pastelpay. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a href="#pricing" className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">Pricing</a>
            <a href="#blog" className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">Blog</a>
            <a href="#contact" className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
