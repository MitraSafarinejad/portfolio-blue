import { motion } from 'framer-motion';
import { timeline } from '../data/timeline';

export default function About() {
  return (
    <div className="min-h-screen bg-navy-900 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-[10px] tracking-[0.4em] text-orange-400 uppercase block mb-4">ABOUT</span>
          <h1 className="text-5xl md:text-8xl font-black text-cream tracking-tight mb-8">
            THE HUMAN BEHIND<br />THE MODELS.
          </h1>
          <div className="max-w-2xl">
            <p className="text-lg text-muted/80 leading-relaxed mb-6">
              I'm Mitra Safarinejadian — an AI practitioner who started by teaching machines to see, 
              moved through building systems around AI, and is now exploring the creative possibilities 
              of artificial intelligence.
            </p>
            <p className="text-lg text-muted/60 leading-relaxed">
              My work lives at the intersection of technical depth and visual exploration. 
              I believe in experimentation, in unfinished work, and in the beauty of the process.
            </p>
          </div>
        </motion.div>

        {/* Skills / Areas */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10px] tracking-[0.4em] text-muted/40 uppercase mb-8">AREAS OF PRACTICE</h2>
          <div className="flex flex-wrap gap-3">
            {['Computer Vision', 'Machine Learning', 'Deep Learning', 'AI Systems', 'Prompt Engineering', 'Generative AI', 'Visual Storytelling', 'Image Processing', 'Object Detection', 'Segmentation', 'LLMs', 'AI Workflows'].map((skill, i) => (
              <motion.span
                key={skill}
                className="px-4 py-2 rounded-full border border-purple-400/15 text-[11px] tracking-[0.1em] text-muted/70 hover:border-orange-400/30 hover:text-orange-400 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10px] tracking-[0.4em] text-muted/40 uppercase mb-12">JOURNEY</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-400/30 via-orange-400/20 to-transparent" />

            <div className="space-y-16">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  className="relative pl-12 md:pl-24"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  {/* Dot */}
                  <div className={`absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full border-2 ${
                    item.year === 'NOW' ? 'border-orange-400 bg-orange-400/20' : 'border-purple-400/50 bg-navy-900'
                  }`} />

                  <span className={`text-[10px] tracking-[0.3em] font-bold block mb-2 ${
                    item.year === 'NOW' ? 'text-orange-400' : 'text-muted/50'
                  }`}>
                    {item.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-cream mb-3">{item.title}</h3>
                  <p className="text-sm text-muted/60 max-w-lg leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[9px] tracking-[0.1em] px-2 py-1 rounded-full border border-purple-400/10 text-muted/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
