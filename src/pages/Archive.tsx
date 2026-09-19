import { useState } from 'react';
import { motion } from 'framer-motion';
import { archiveItems } from '../data/archive';

const typeColors: Record<string, string> = {
  test: 'border-purple-400/20 bg-purple-600/5',
  failed: 'border-red-400/20 bg-red-500/5',
  iteration: 'border-orange-400/20 bg-orange-500/5',
  reference: 'border-blue-400/20 bg-blue-500/5',
  idea: 'border-green-400/20 bg-green-500/5',
  abandoned: 'border-muted/10 bg-muted/5',
  revisit: 'border-yellow-400/20 bg-yellow-500/5',
};

export default function Archive() {
  const [filter, setFilter] = useState<string>('ALL');
  const types = ['ALL', 'TEST', 'FAILED', 'ITERATION', 'REFERENCE', 'IDEA', 'ABANDONED', 'REVISIT'];

  const filtered = filter === 'ALL' ? archiveItems : archiveItems.filter(item => item.type === filter.toLowerCase());

  return (
    <div className="min-h-screen bg-navy-900 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[10px] tracking-[0.4em] text-muted uppercase block mb-4">COLLECTION</span>
          <h1 className="text-5xl md:text-8xl font-black text-cream tracking-tight mb-6">ARCHIVE</h1>
          <p className="text-lg text-muted max-w-xl">Everything doesn't have to become a case study.</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1.5 rounded-full text-[9px] tracking-[0.15em] font-medium transition-all duration-300 ${
                filter === type
                  ? 'bg-cream text-navy-deep'
                  : 'border border-purple-400/10 text-muted/60 hover:text-cream hover:border-purple-400/30'
              }`}
              data-cursor="open"
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Dense visual grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              className={`relative rounded-xl border p-4 md:p-5 ${typeColors[item.type]} hover:scale-[1.02] transition-transform duration-300 ${
                i % 5 === 0 ? 'row-span-2' : ''
              }`}
              data-cursor="view"
            >
              {item.image && (
                <div className="absolute inset-0 rounded-xl overflow-hidden opacity-20">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                </div>
              )}
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[8px] tracking-[0.3em] text-muted/40 uppercase font-bold">{item.label}</span>
                  <span className="text-[8px] tracking-[0.2em] text-muted/30">{item.date}</span>
                </div>
                <h3 className="text-xs md:text-sm font-bold text-cream/80 mb-2 leading-tight">{item.title}</h3>
                <p className="text-[10px] md:text-[11px] text-muted/50 line-clamp-2 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
