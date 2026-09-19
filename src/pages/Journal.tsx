import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

export default function Journal() {
  return (
    <div className="min-h-screen bg-navy-900 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-[10px] tracking-[0.4em] text-orange-400 uppercase block mb-4">WRITINGS</span>
          <h1 className="text-5xl md:text-8xl font-black text-cream tracking-tight mb-6">JOURNAL</h1>
          <p className="text-lg text-muted max-w-xl">Notes from the things I'm learning, building and questioning.</p>
        </motion.div>

        <div className="space-y-0">
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <Link
                to={`/journal/${article.slug}`}
                className="group block py-8 border-t border-purple-400/10 hover:border-orange-400/20 transition-all duration-300"
                data-cursor="read"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                  <div className="md:col-span-1">
                    <span className="text-[10px] tracking-[0.2em] text-muted/40 font-mono">{article.number}</span>
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="text-xl md:text-2xl font-bold text-cream group-hover:text-orange-400 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted/60 mt-2 line-clamp-2">{article.description}</p>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-[10px] tracking-[0.2em] text-purple-400/70 uppercase">{article.category}</span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-[10px] tracking-[0.2em] text-muted/40">{article.date}</span>
                  </div>
                  <div className="md:col-span-1 text-right">
                    <span className="text-[10px] tracking-[0.15em] text-muted/30">{article.readingTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
