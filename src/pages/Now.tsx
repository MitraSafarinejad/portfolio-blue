import { motion } from 'framer-motion';

const sections = [
  {
    title: 'LEARNING',
    items: ['Advanced prompt engineering techniques', 'Video generation models', '3D from 2D reconstruction', 'Character design principles']
  },
  {
    title: 'BUILDING',
    items: ['AI-assisted visual workflows', 'Prompt library system', 'Image generation pipelines', 'Creative tooling']
  },
  {
    title: 'EXPERIMENTING',
    items: ['Style consistency across generations', 'Lighting as emotional language', 'Composition rules in AI', 'Multi-modal prompt chains']
  },
  {
    title: 'READING',
    items: ['[Current book/article]', '[Research paper]', '[Visual design reference]', '[Technical documentation]']
  },
  {
    title: 'CURIOUS ABOUT',
    items: ['How will AI change visual storytelling?', 'Can machines have aesthetic taste?', 'What makes AI art feel human?', 'Where is the line between tool and collaborator?']
  },
  {
    title: 'TOOLS I\'M EXPLORING',
    items: ['Stable Diffusion / ComfyUI', 'Midjourney', 'GPT-4 / Claude', 'Runway', 'After Effects', 'Python / PyTorch']
  },
  {
    title: 'CURRENT QUESTIONS',
    items: ['How do you maintain creative voice when using AI tools?', 'What does it mean to "direct" an AI?', 'Can technical knowledge enhance creative intuition?']
  },
];

export default function Now() {
  return (
    <div className="min-h-screen bg-navy-900 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[10px] tracking-[0.4em] text-orange-400 uppercase block mb-4">CURRENTLY</span>
          <h1 className="text-5xl md:text-8xl font-black text-cream tracking-tight mb-6">WHAT I'M<br />EXPLORING NOW</h1>
          <p className="text-lg text-muted max-w-xl">This is a living page. It changes as I learn, build, and question.</p>
          <p className="text-[10px] tracking-[0.2em] text-muted/40 mt-4">LAST UPDATED: 2025</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              className="rounded-2xl border border-purple-400/10 p-6 md:p-8 hover:border-purple-400/20 transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <h3 className="text-[10px] tracking-[0.3em] text-orange-400 font-bold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, j) => (
                  <motion.li
                    key={j}
                    className="text-sm text-muted/70 leading-relaxed flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + j * 0.05 }}
                  >
                    <span className="text-purple-400/40 mt-1.5 text-[8px]">●</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 p-8 rounded-2xl border border-orange-400/10 bg-orange-500/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted/60 italic">
            "This page is intentionally incomplete. It reflects where I am right now — 
            what I'm thinking about, what I'm working on, and what I'm curious about. 
            It will evolve."
          </p>
          <p className="text-[10px] tracking-[0.2em] text-muted/40 mt-4">— MITRA</p>
        </motion.div>
      </div>
    </div>
  );
}
