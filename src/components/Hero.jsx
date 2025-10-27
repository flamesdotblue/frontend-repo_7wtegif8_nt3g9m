import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, CreditCard } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden bg-gradient-to-b from-pink-50 via-indigo-50 to-white dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-950">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay so content stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 dark:from-slate-950/70 dark:via-slate-950/30 dark:to-slate-950/80" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 pb-16 sm:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-xs text-indigo-700 backdrop-blur-sm shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-indigo-300">
          <Shield className="h-3.5 w-3.5" />
          Bank‑grade security for modern commerce
        </div>

        <h1 className="mt-6 text-center font-semibold tracking-tight text-slate-900 dark:text-white" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>
          <span className="block text-4xl sm:text-5xl md:text-6xl">Pastel‑perfect payments</span>
          <span className="mt-2 block text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">for SaaS & e‑commerce</span>
        </h1>

        <p className="mt-5 max-w-2xl text-center text-slate-600 sm:text-lg dark:text-slate-300">
          Launch subscriptions, accept cards, and manage billing with a minimal, modern experience.
          Built for speed, designed with softness.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white shadow-[0_8px_20px_-6px_rgba(79,70,229,0.45)] transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            <Rocket className="h-4 w-4" />
            Get started
          </a>
          <a
            href="#auth"
            className="inline-flex items-center gap-2 rounded-xl bg-white/80 px-5 py-3 text-indigo-700 ring-1 ring-indigo-200 backdrop-blur-sm transition hover:bg-white dark:bg-slate-900/70 dark:text-indigo-300 dark:ring-slate-700 dark:hover:bg-slate-900"
          >
            <CreditCard className="h-4 w-4" />
            Sign in
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
