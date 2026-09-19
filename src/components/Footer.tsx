import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
  { label: 'STORY', path: '/' },
  { label: 'WORK', path: '/work' },
  { label: 'LAB', path: '/lab' },
  { label: 'PLAYGROUND', path: '/playground' },
  { label: 'JOURNAL', path: '/journal' },
  { label: 'ARCHIVE', path: '/archive' },
  { label: 'ABOUT', path: '/about' },
  { label: 'NOW', path: '/now' },
  { label: 'CONTACT', path: '/contact' },
  { label: 'LINKEDIN', path: 'https://www.linkedin.com/in/mitra-safarinejadian/' },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-deep border-t border-purple-600/10">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-cream tracking-tight mb-4">
                MITRA<br />SAFARINEJADIAN
              </h2>
              <p className="text-[11px] tracking-[0.3em] text-muted uppercase mt-6">
                AI × VISUAL STORYTELLING
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-sm text-muted/60 max-w-md leading-relaxed">
                A living portfolio exploring the intersection of artificial intelligence, 
                visual creation, and creative technology.
              </p>
            </div>
          </div>

          <div className="border-t border-purple-600/10 pt-12">
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-[11px] tracking-[0.2em] text-muted hover:text-orange-400 transition-colors"
                  data-cursor="open"
                  {...(link.path.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-[10px] tracking-[0.2em] text-muted/40">
              © 2026 MITRA SAFARINEJADIAN
            </p>
            <p className="text-[10px] tracking-[0.15em] text-muted/40">
              BUILT WITH CURIOSITY
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
