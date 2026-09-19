import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const mainNav = [
  { label: 'STORY', path: '/' },
  { label: 'WORK', path: '/work' },
  { label: 'LAB', path: '/lab' },
  { label: 'PLAYGROUND', path: '/playground' },
  { label: 'JOURNAL', path: '/journal' },
];

const secondaryNav = [
  { label: 'ABOUT', path: '/about' },
  { label: 'ARCHIVE', path: '/archive' },
  { label: 'NOW', path: '/now' },
  { label: 'CONTACT', path: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: 'spring', damping: 20 }}
      >
        <div className={`mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled 
            ? 'max-w-3xl bg-navy-deep/80 backdrop-blur-xl rounded-full border border-purple-600/20 py-3 px-6' 
            : 'max-w-7xl'
        }`}>
          <Link 
            to="/" 
            className="text-cream font-bold text-lg tracking-[0.15em] hover:text-orange-400 transition-colors"
            data-cursor="open"
          >
            MITRA
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {mainNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[11px] tracking-[0.2em] font-medium transition-colors ${
                  location.pathname === item.path 
                    ? 'text-orange-400' 
                    : 'text-muted hover:text-cream'
                }`}
                data-cursor="open"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-muted hover:text-cream transition-colors ml-4"
              data-cursor="open"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-muted hover:text-cream transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[8999] bg-navy-deep/95 backdrop-blur-2xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col gap-6 mb-12">
                {mainNav.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className="text-3xl md:text-5xl font-bold tracking-[0.1em] text-cream hover:text-orange-400 transition-colors"
                      data-cursor="open"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {secondaryNav.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className="text-[11px] tracking-[0.2em] text-muted hover:text-cream transition-colors"
                      data-cursor="open"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
