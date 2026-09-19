import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function Work() {
  return (
    <div className="min-h-screen bg-navy-900 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-[10px] tracking-[0.4em] text-orange-400 uppercase block mb-4">PORTFOLIO</span>
          <h1 className="text-5xl md:text-8xl font-black text-cream tracking-tight mb-6">SELECTED WORK</h1>
          <p className="text-lg text-muted max-w-xl">Things I've built, explored and experimented with.</p>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((project, i) => {
            const layouts = [
              'md:col-span-8 md:row-span-2',
              'md:col-span-4',
              'md:col-span-4',
              'md:col-span-6',
              'md:col-span-6',
              'md:col-span-12',
            ];
            const layout = layouts[i % layouts.length];

            return (
              <motion.div
                key={project.slug}
                className={`${layout} group relative rounded-3xl overflow-hidden`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                data-cursor="view"
              >
                <Link to={`/work/${project.slug}`} className="block h-full">
                  <div className={`relative h-full min-h-[300px] md:min-h-[400px] rounded-3xl overflow-hidden border transition-all duration-500 group-hover:border-orange-400/30`}
                    style={{ borderColor: `${project.color}20` }}
                  >
                    {/* Background */}
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)` }} />
                    
                    {/* Image placeholder */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] tracking-[0.3em] text-muted/60 font-medium">{project.number}</span>
                        <motion.div
                          className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center group-hover:border-orange-400/50 group-hover:bg-orange-400/10 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <ArrowUpRight size={16} className="text-cream/60 group-hover:text-orange-400" />
                        </motion.div>
                      </div>

                      <div>
                        <span className="text-[9px] tracking-[0.3em] text-muted/50 uppercase block mb-2">{project.category}</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-cream mb-3 group-hover:text-orange-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted/70 line-clamp-2 max-w-md">{project.description}</p>
                        <div className="flex gap-2 mt-4 flex-wrap">
                          {project.tools.slice(0, 3).map((tool) => (
                            <span key={tool} className="text-[9px] tracking-[0.1em] px-2 py-1 rounded-full border border-purple-400/20 text-muted/60">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Status indicator */}
                    <div className="absolute top-8 right-20">
                      <span className={`text-[9px] tracking-[0.2em] px-2 py-1 rounded-full ${
                        project.status === 'completed' ? 'bg-green-500/10 text-green-400/70' :
                        project.status === 'in-progress' ? 'bg-orange-500/10 text-orange-400/70' :
                        'bg-purple-500/10 text-purple-400/70'
                      }`}>
                        {project.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
