import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiments, categories } from '../data/experiments';

export default function Lab() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filtered = activeFilter === 'ALL' 
    ? experiments 
    : experiments.filter(e => e.category === activeFilter);

  const statusLabels: Record<string, { text: string; color: string }> = {
    'completed': { text: 'COMPLETE', color: 'text-green-400/70 bg-green-500/10' },
    'in-progress': { text: 'IN PROGRESS', color: 'text-orange-400/70 bg-orange-500/10' },
    'failed': { text: 'FAILED', color: 'text-red-400/70 bg-red-500/10' },
    'test': { text: 'TEST', color: 'text-purple-400/70 bg-purple-500/10' },
    'unfinished': { text: 'UNFINISHED', color: 'text-muted/60 bg-muted/5' },
  };

  return (
    <div className="min-h-screen bg-navy-900 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[10px] tracking-[0.4em] text-purple-400 uppercase block mb-4">EXPERIMENTS</span>
          <h1 className="text-5xl md:text-8xl font-black text-cream tracking-tight mb-6">THE LAB</h1>
          <p className="text-lg text-muted max-w-xl">Not everything needs to become a project.</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-3 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-[11px] tracking-[0.15em] font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-orange-500 text-cream'
                  : 'border border-purple-400/20 text-muted hover:border-orange-400/30 hover:text-cream'
              }`}
              data-cursor="open"
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Experiments grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((exp, i) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden border border-purple-400/10 hover:border-orange-400/20 transition-all duration-500"
                data-cursor="explore"
              >
                <div className="p-6 md:p-8 min-h-[250px] flex flex-col justify-between relative">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${exp.color}10, transparent 70%)` }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[9px] tracking-[0.2em] px-2 py-1 rounded-full ${statusLabels[exp.status].color}`}>
                        {statusLabels[exp.status].text}
                      </span>
                      <span className="text-[9px] tracking-[0.2em] text-muted/40">{exp.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-cream group-hover:text-orange-400 transition-colors mb-3">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-muted/60 line-clamp-2">{exp.description}</p>
                  </div>

                  <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-[9px] tracking-[0.1em] px-2 py-1 rounded-full border border-purple-400/10 text-muted/40">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
