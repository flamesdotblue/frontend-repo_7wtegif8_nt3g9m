import React from 'react';
import { Check, CreditCard, Sparkles } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'For trying things out and side projects',
    features: ['Up to 100 customers', 'Basic analytics', 'Community support'],
    cta: 'Start for free',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$29/mo',
    description: 'Everything you need to scale recurring revenue',
    features: ['Unlimited customers', 'Advanced analytics', 'Priority email support', 'Custom branding'],
    cta: 'Choose Growth',
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Contact us',
    description: 'For high‑volume, mission‑critical platforms',
    features: ['Dedicated manager', 'Uptime SLA', 'Enterprise SSO', 'Premium support'],
    cta: 'Talk to sales',
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-fuchsia-50 px-3 py-1 text-xs text-fuchsia-600 ring-1 ring-fuchsia-200">
            <Sparkles className="h-3.5 w-3.5" /> Pricing
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>
            Simple, pastel‑soft pricing
          </h2>
          <p className="mt-3 text-slate-600">
            Transparent plans that grow with you—no hidden fees.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={[
                'rounded-2xl p-6 shadow-sm ring-1 transition',
                tier.highlight
                  ? 'bg-white/90 ring-indigo-200 shadow-[0_10px_35px_-10px_rgba(99,102,241,0.35)]'
                  : 'bg-white/70 ring-slate-200 backdrop-blur-sm',
              ].join(' ')}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-slate-900">{tier.name}</h3>
                <CreditCard className="h-5 w-5 text-indigo-500" />
              </div>
              <p className="mt-2 text-3xl font-semibold text-slate-900">{tier.price}</p>
              <p className="mt-1 text-sm text-slate-600">{tier.description}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-500" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#auth"
                className={[
                  'mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition',
                  tier.highlight
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                    : 'bg-white text-indigo-700 ring-1 ring-indigo-200 hover:bg-indigo-50',
                ].join(' ')}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
