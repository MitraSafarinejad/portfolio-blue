import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight } from 'lucide-react';

function ParallaxLayer({ children, speed = 0.5, className = '' }: { children: React.ReactNode; speed?: number; className?: string }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <motion.div
      className={className}
      animate={{
        x: mousePos.x * speed * 30,
        y: mousePos.y * speed * 30,
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
    >
      {children}
    </motion.div>
  );
}

function Chapter00() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 20);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 20);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-gradient-hero">
        <motion.div style={{ y, opacity, scale }} className="absolute inset-0 flex flex-col items-center justify-center px-6">
          {/* Background visual elements */}
          <ParallaxLayer speed={0.1} className="absolute inset-0">
            <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute bottom-[20%] right-[15%] w-96 h-96 rounded-full bg-orange-500/5 blur-3xl" />
          </ParallaxLayer>

          <ParallaxLayer speed={0.25} className="absolute inset-0">
            <div className="absolute top-[30%] right-[20%] w-32 h-32 border border-purple-400/20 rotate-45" />
            <div className="absolute bottom-[35%] left-[25%] w-20 h-20 border border-orange-400/15 rotate-12" />
            <motion.div
              className="absolute top-[20%] right-[30%] w-2 h-2 rounded-full bg-orange-400/60"
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </ParallaxLayer>

          <ParallaxLayer speed={0.5} className="absolute inset-0">
            <div className="absolute top-[40%] left-[15%] text-[200px] md:text-[300px] font-black text-purple-600/5 select-none leading-none">
              AI
            </div>
            <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] opacity-20 rounded-full overflow-hidden blur-sm">
              <img 
                src="https://image.qwenlm.ai/generated-images/b951f659-fe2d-49e0-8973-b903a284b20c/_result.png" 
                alt="" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </ParallaxLayer>

          {/* Main content */}
          <motion.div
            style={{ x: smoothX, y: smoothY }}
            className="relative z-10 text-center"
          >
            <motion.p
              className="text-[10px] md:text-[11px] tracking-[0.4em] text-muted mb-6 uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              AI × VISUAL STORYTELLING
            </motion.p>

            <motion.h1
              className="text-6xl md:text-[10rem] lg:text-[12rem] font-black text-cream tracking-tighter leading-[0.85] mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, type: 'spring' }}
            >
              MITRA
            </motion.h1>

            <motion.div
              className="max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <p className="text-lg md:text-2xl text-cream/90 font-light leading-relaxed">
                <span className="text-orange-400">I BUILD</span> WITH AI.
              </p>
              <p className="text-lg md:text-2xl text-cream/90 font-light leading-relaxed">
                <span className="text-purple-400">I EXPERIMENT</span> WITH AI.
              </p>
              <p className="text-lg md:text-2xl text-cream/90 font-light leading-relaxed">
                <span className="text-red-500">I CREATE</span> WITH AI.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <Link
                to="/work"
                className="px-8 py-3 bg-orange-500 text-cream text-[11px] tracking-[0.2em] font-bold rounded-full hover:bg-orange-400 transition-colors"
                data-cursor="view"
              >
                ENTER THE STORY
              </Link>
              <Link
                to="/work"
                className="px-8 py-3 border border-cream/20 text-cream text-[11px] tracking-[0.2em] font-medium rounded-full hover:border-cream/50 transition-colors"
                data-cursor="view"
              >
                VIEW WORK
              </Link>
            </motion.div>
          </motion.div>

          {/* Bottom scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <span className="text-[9px] tracking-[0.3em] text-muted/60 uppercase">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={14} className="text-muted/40" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Chapter01() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);

  const stages = ['IMAGE', 'FEATURES', 'MODEL', 'PREDICTION'];
  const concepts = ['Computer Vision', 'Machine Learning', 'Deep Learning', 'Image Processing', 'Object Detection', 'Segmentation'];

  return (
    <section id="see" ref={ref} className="relative min-h-screen py-32 md:py-48 bg-gradient-see overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div style={{ opacity }} className="mb-20">
          <span className="text-[10px] tracking-[0.4em] text-orange-400 uppercase block mb-4">CHAPTER 01</span>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-cream leading-[0.9] tracking-tight">
            I STARTED WITH<br />
            <span className="text-gradient">MACHINES THAT</span><br />
            COULD SEE.
          </h2>
        </motion.div>

        {/* Transformation visualization */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
          {stages.map((stage, i) => (
            <motion.div
              key={stage}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <motion.div
                className="aspect-square rounded-2xl border border-purple-400/20 bg-purple-600/10 flex items-center justify-center p-6 relative overflow-hidden"
                whileHover={{ scale: 1.02, borderColor: 'rgba(255, 106, 42, 0.3)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent" />
                <div className="text-center relative z-10">
                  <span className="text-[9px] tracking-[0.3em] text-muted/60 block mb-2">STAGE {String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm md:text-base font-bold text-cream tracking-wide">{stage}</span>
                </div>
                {i < stages.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight size={16} className="text-purple-400/40" />
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Concepts */}
        <div className="flex flex-wrap gap-3">
          {concepts.map((concept, i) => (
            <motion.span
              key={concept}
              className="px-4 py-2 rounded-full border border-purple-400/20 text-[11px] tracking-[0.15em] text-muted"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ borderColor: 'rgba(255, 106, 42, 0.4)', color: '#FF6A2A' }}
            >
              {concept}
            </motion.span>
          ))}
        </div>

        {/* Floating decorative elements */}
        <ParallaxLayer speed={0.3} className="absolute top-20 right-10 hidden md:block">
          <div className="w-40 h-40 border border-purple-400/10 rounded-full" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.15} className="absolute bottom-20 left-10 hidden md:block">
          <motion.div style={{ x: x1 }} className="w-32 h-1 bg-gradient-to-r from-orange-400/20 to-transparent" />
        </ParallaxLayer>
      </div>
    </section>
  );
}

function Chapter02() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const nodes = [
    { label: 'LLMs', x: '20%', y: '30%' },
    { label: 'Prompt Engineering', x: '60%', y: '20%' },
    { label: 'AI Systems', x: '75%', y: '55%' },
    { label: 'Workflows', x: '40%', y: '65%' },
    { label: 'Agents', x: '15%', y: '70%' },
    { label: 'Context', x: '50%', y: '45%' },
  ];

  return (
    <section id="think" ref={ref} className="relative min-h-screen py-32 md:py-48 bg-gradient-think overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div style={{ opacity }} className="mb-20">
          <span className="text-[10px] tracking-[0.4em] text-purple-400 uppercase block mb-4">CHAPTER 02</span>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-cream leading-[0.9] tracking-tight">
            THEN AI STARTED<br />
            <span className="text-gradient-purple">THINKING</span><br />
            WITH ME.
          </h2>
        </motion.div>

        {/* Interactive AI System Diagram */}
        <div className="relative h-[500px] md:h-[600px] rounded-3xl border border-purple-400/10 bg-navy-deep/50 overflow-hidden">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.line x1="20" y1="30" x2="50" y2="45" stroke="rgba(81, 72, 200, 0.2)" strokeWidth="0.2" />
            <motion.line x1="60" y1="20" x2="50" y2="45" stroke="rgba(81, 72, 200, 0.2)" strokeWidth="0.2" />
            <motion.line x1="75" y1="55" x2="50" y2="45" stroke="rgba(81, 72, 200, 0.2)" strokeWidth="0.2" />
            <motion.line x1="40" y1="65" x2="50" y2="45" stroke="rgba(81, 72, 200, 0.2)" strokeWidth="0.2" />
            <motion.line x1="15" y1="70" x2="40" y2="65" stroke="rgba(81, 72, 200, 0.15)" strokeWidth="0.2" />
          </svg>

          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.div
              key={node.label}
              className="absolute"
              style={{ left: node.x, top: node.y }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: 'spring', damping: 15 }}
            >
              <motion.div
                className="px-4 py-3 rounded-xl bg-purple-600/20 border border-purple-400/20 backdrop-blur-sm cursor-pointer hover:bg-purple-500/30 hover:border-orange-400/30 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                data-cursor="explore"
              >
                <span className="text-[11px] tracking-[0.15em] text-cream font-medium whitespace-nowrap">{node.label}</span>
              </motion.div>
            </motion.div>
          ))}

          {/* Central glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-400/60 blur-sm"
            style={{ rotate }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
}

function Chapter03() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.15, 0]);

  const elements = ['IMAGES', 'CHARACTERS', 'MOTION', 'COLOR', 'COMPOSITION', 'VISUAL STORIES'];

  return (
    <section id="create" ref={ref} className="relative min-h-screen py-32 md:py-48 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-navy-900"
        style={{ opacity: bgOpacity }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div style={{ opacity }} className="mb-20">
          <span className="text-[10px] tracking-[0.4em] text-orange-400 uppercase block mb-4">CHAPTER 03</span>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-cream leading-[0.9] tracking-tight">
            THEN AI STARTED<br />
            <span className="text-gradient">CREATING.</span>
          </h2>
        </motion.div>

        {/* Visual transformation grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {elements.map((el, i) => (
            <motion.div
              key={el}
              className={`relative rounded-2xl overflow-hidden ${i === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto' : 'aspect-video'}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 0.98 }}
              data-cursor="view"
            >
              <div className={`absolute inset-0 ${
                i === 0 ? 'bg-gradient-to-br from-orange-500/20 to-purple-600/20' :
                i === 1 ? 'bg-gradient-to-br from-purple-500/20 to-navy-700/50' :
                i === 2 ? 'bg-gradient-to-br from-red-500/15 to-purple-600/15' :
                'bg-gradient-to-br from-purple-600/15 to-navy-800/50'
              }`} />
              {i === 0 && (
                <div className="absolute inset-0 opacity-30">
                  <img 
                    src="https://image.qwenlm.ai/generated-images/6a7ab448-ae53-4678-a781-e35f711b7c00/_result.png" 
                    alt="" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="absolute inset-0 border border-purple-400/10 rounded-2xl" />
              <div className="absolute inset-0 flex items-end p-6">
                <span className="text-sm md:text-lg font-bold text-cream/80 tracking-wide">{el}</span>
              </div>
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 rounded-full"
                style={{ backgroundColor: i % 2 === 0 ? '#FF6A2A' : '#5148C8' }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-3xl md:text-5xl font-black text-gradient tracking-tight">
            AI × CREATIVITY
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function Chapter04() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '-60%']);

  const categories = [
    { label: 'IMAGE', color: '#FF6A2A' },
    { label: 'VIDEO', color: '#5148C8' },
    { label: 'CHARACTER', color: '#E84B30' },
    { label: 'MOTION', color: '#FF781C' },
    { label: 'STYLE', color: '#4039A8' },
    { label: 'STORY', color: '#302A86' },
  ];

  return (
    <section id="explore" ref={ref} className="relative py-32 md:py-48 bg-gradient-explore overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div style={{ opacity }}>
          <span className="text-[10px] tracking-[0.4em] text-orange-400 uppercase block mb-4">CHAPTER 04</span>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-cream leading-[0.9] tracking-tight">
            NOW I'M EXPLORING<br />
            WHAT AI CAN<br />
            <span className="text-gradient">CREATE.</span>
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scrolling gallery */}
      <div ref={containerRef} className="overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 pl-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className="flex-shrink-0 w-[300px] md:w-[400px] h-[400px] md:h-[500px] rounded-3xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 0.97 }}
              data-cursor="explore"
            >
              <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${cat.color}20, ${cat.color}05)` }} />
              <div className="absolute inset-0 border rounded-3xl" style={{ borderColor: `${cat.color}30` }} />
              <div className="absolute bottom-8 left-8">
                <span className="text-[9px] tracking-[0.3em] text-muted/60 block mb-2">0{i + 1}</span>
                <span className="text-2xl md:text-3xl font-black text-cream tracking-tight">{cat.label}</span>
              </div>
              <motion.div
                className="absolute top-6 right-6 w-3 h-3 rounded-full"
                style={{ backgroundColor: cat.color }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FinalChapter() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-deep to-navy-deep" />
      
      {/* Floating fragments */}
      <ParallaxLayer speed={0.2} className="absolute inset-0">
        <div className="absolute top-[20%] left-[15%] w-16 h-16 border border-purple-400/10 rotate-45 animate-drift" />
        <div className="absolute top-[60%] right-[20%] w-24 h-24 rounded-full border border-orange-400/10 animate-float" />
        <div className="absolute bottom-[30%] left-[40%] w-12 h-12 bg-purple-500/5 rounded-lg rotate-12 animate-drift" style={{ animationDelay: '2s' }} />
      </ParallaxLayer>

      <motion.div style={{ opacity, y }} className="relative z-10 text-center px-6">
        <p className="text-2xl md:text-4xl lg:text-5xl font-light text-cream/80 leading-relaxed mb-8 max-w-4xl">
          THE STORY IS STILL<br />BEING WRITTEN.
        </p>
        <p className="text-xl md:text-3xl font-light text-muted leading-relaxed mb-16">
          AND AI IS PART OF THE STORY.
        </p>
        <div className="mt-12">
          <h3 className="text-5xl md:text-8xl font-black text-cream tracking-tighter">MITRA</h3>
          <p className="text-[10px] tracking-[0.4em] text-muted mt-4 uppercase">AI × VISUAL STORYTELLING</p>
        </div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  const [bgColor, setBgColor] = useState('#090D3B');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollY / docH;

      if (progress < 0.15) setBgColor('#090D3B');
      else if (progress < 0.3) setBgColor('#10145A');
      else if (progress < 0.5) setBgColor('#0D1048');
      else if (progress < 0.7) setBgColor('#302A86');
      else if (progress < 0.85) setBgColor('#4039A8');
      else setBgColor('#090D3B');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: bgColor, transition: 'background-color 1.5s ease' }}>
      <Chapter00 />
      <Chapter01 />
      <Chapter02 />
      <Chapter03 />
      <Chapter04 />
      <FinalChapter />
    </div>
  );
}
