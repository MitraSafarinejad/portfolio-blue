import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const stages = [
  { id: 'see', label: 'SEE', chapter: '01' },
  { id: 'think', label: 'THINK', chapter: '02' },
  { id: 'create', label: 'CREATE', chapter: '03' },
  { id: 'explore', label: 'EXPLORE', chapter: '04' },
  { id: 'build', label: 'BUILD', chapter: '05' },
];

export default function StoryMap() {
  const [activeStage, setActiveStage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;
      
      if (scrollY < windowH * 0.5) {
        setIsVisible(false);
        return;
      }
      setIsVisible(true);

      const docH = document.documentElement.scrollHeight - windowH;
      const progress = scrollY / docH;
      
      if (progress < 0.2) setActiveStage(0);
      else if (progress < 0.4) setActiveStage(1);
      else if (progress < 0.6) setActiveStage(2);
      else if (progress < 0.8) setActiveStage(3);
      else setActiveStage(4);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-[8000] hidden lg:flex flex-col items-center gap-3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
    >
      {stages.map((stage, i) => (
        <button
          key={stage.id}
          onClick={() => handleClick(stage.id)}
          className="group flex items-center gap-3"
          data-cursor="open"
        >
          <span className={`text-[9px] tracking-[0.15em] font-medium transition-all duration-300 ${
            activeStage === i ? 'text-orange-400 opacity-100' : 'text-muted opacity-0 group-hover:opacity-60'
          }`}>
            {stage.label}
          </span>
          <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            activeStage === i 
              ? 'bg-orange-400 scale-150' 
              : i < activeStage 
                ? 'bg-purple-400 scale-100' 
                : 'bg-muted/30 scale-75'
          }`} />
        </button>
      ))}
    </motion.div>
  );
}
