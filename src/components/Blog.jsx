import React from 'react';
import { Newspaper, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Designing with softness: a pastel fintech UI guide',
    excerpt: 'How subtle gradients and generous white space can boost trust and clarity in financial products.',
    tag: 'Design',
  },
  {
    id: 2,
    title: 'From trial to revenue: converting with clear pricing',
    excerpt: 'Practical tips for building pricing pages that actually convert without overwhelming users.',
    tag: 'Growth',
  },
  {
    id: 3,
    title: 'Security without friction: modern auth patterns',
    excerpt: 'Implement passwordless sign‑in, device trust, and risk checks without hurting UX.',
    tag: 'Engineering',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs text-indigo-600 ring-1 ring-indigo-200">
            <Newspaper className="h-3.5 w-3.5" /> Blog
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>
            Insights from the pastel desk
          </h2>
          <p className="mt-3 text-slate-600">Stories on design, growth, and building trustworthy payments.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.id} className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-indigo-50/40 p-6 shadow-sm transition hover:shadow-md">
              <span className="inline-flex items-center rounded-full bg-white px-2.5 py-0.5 text-xs text-slate-700 ring-1 ring-slate-200">
                {p.tag}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-1 text-indigo-600">
                Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
