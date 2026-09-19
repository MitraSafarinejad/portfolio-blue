import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { articles } from '../data/articles';
import { ArrowLeft } from 'lucide-react';

export default function JournalDetail() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cream mb-4">Article Not Found</h1>
          <Link to="/journal" className="text-orange-400 hover:underline">← Back to Journal</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-900 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link to="/journal" className="flex items-center gap-2 text-muted hover:text-cream transition-colors text-sm" data-cursor="open">
            <ArrowLeft size={16} />
            <span className="tracking-[0.1em]">BACK TO JOURNAL</span>
          </Link>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] tracking-[0.3em] text-muted/40 font-mono">{article.number}</span>
            <span className="text-[10px] tracking-[0.3em] text-purple-400/70 uppercase">{article.category}</span>
            <span className="text-[10px] tracking-[0.3em] text-muted/40">{article.date}</span>
            <span className="text-[10px] tracking-[0.15em] text-muted/30">{article.readingTime}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-cream tracking-tight mb-8 leading-tight">
            {article.title}
          </h1>

          <p className="text-lg text-muted/80 leading-relaxed mb-12">{article.description}</p>

          <div className="prose prose-invert max-w-none">
            <div className="border-t border-purple-400/10 pt-12">
              <p className="text-muted/60 text-center py-16 text-sm tracking-[0.1em]">
                [ARTICLE CONTENT — This is a placeholder for the full article text. Content will be added here.]
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-12">
            {article.tags.map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.1em] px-3 py-1.5 rounded-full border border-purple-400/20 text-muted/50">
                {tag}
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </div>
  );
}
