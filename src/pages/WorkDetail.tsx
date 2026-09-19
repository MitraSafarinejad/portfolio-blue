import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function WorkDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cream mb-4">Project Not Found</h1>
          <Link to="/work" className="text-orange-400 hover:underline">← Back to Work</Link>
        </div>
      </div>
    );
  }

  const sections = [
    { label: 'THE IDEA', content: project.sections.idea },
    { label: 'THE PROBLEM', content: project.sections.problem },
    { label: 'THE APPROACH', content: project.sections.approach },
    { label: 'THE PROCESS', content: project.sections.process },
    { label: 'THE RESULT', content: project.sections.result },
    { label: 'WHAT I LEARNED', content: project.sections.learned },
  ];

  return (
    <div className="min-h-screen bg-navy-900 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link to="/work" className="flex items-center gap-2 text-muted hover:text-cream transition-colors text-sm" data-cursor="open">
            <ArrowLeft size={16} />
            <span className="tracking-[0.1em]">BACK TO WORK</span>
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] tracking-[0.3em] text-muted/60">{project.number}</span>
            <span className="text-[10px] tracking-[0.3em] text-orange-400 uppercase">{project.category}</span>
            <span className="text-[10px] tracking-[0.3em] text-muted/40">{project.year}</span>
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-cream tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-8">
            {project.tools.map((tool) => (
              <span key={tool} className="text-[10px] tracking-[0.1em] px-3 py-1.5 rounded-full border border-purple-400/20 text-muted/70">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          className="relative rounded-3xl overflow-hidden mb-24 aspect-video"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${project.image})` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${project.color}30, transparent)` }} />
          <div className="absolute inset-0 border border-purple-400/10 rounded-3xl" />
        </motion.div>

        {/* Sections */}
        <div className="space-y-24">
          {sections.map((section, i) => (
            <motion.div
              key={section.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              <div className="md:col-span-3">
                <span className="text-[10px] tracking-[0.3em] text-muted/40 block mb-2">0{i + 1}</span>
                <h3 className="text-sm tracking-[0.2em] text-orange-400 font-bold">{section.label}</h3>
              </div>
              <div className="md:col-span-9">
                <p className="text-lg text-muted/80 leading-relaxed">{section.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <motion.div
          className="mt-32 pt-12 border-t border-purple-400/10 flex justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/work" className="flex items-center gap-2 text-muted hover:text-cream transition-colors" data-cursor="open">
            <ArrowLeft size={16} />
            <span className="text-[11px] tracking-[0.15em]">ALL PROJECTS</span>
          </Link>
          <Link to="/lab" className="flex items-center gap-2 text-muted hover:text-orange-400 transition-colors" data-cursor="open">
            <span className="text-[11px] tracking-[0.15em]">VISIT THE LAB</span>
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
