import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { playgroundItems } from '../data/playground';

function MoveTheLight() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      className="relative w-full h-full rounded-2xl overflow-hidden cursor-none"
      style={{ background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, #FF6A2A30, #4039A820 40%, #090D3B 80%)` }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-32 h-32 rounded-full border-2 border-orange-400/30"
          animate={{ x: (pos.x - 50) * 0.5, y: (pos.y - 50) * 0.5 }}
          transition={{ type: 'spring', damping: 20 }}
        />
      </div>
      <div className="absolute bottom-4 left-4 text-[9px] tracking-[0.2em] text-muted/40">MOVE YOUR CURSOR</div>
    </div>
  );
}

function BreakTheImage() {
  const ref = useRef<HTMLDivElement>(null);
  const [distort, setDistort] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setDistort({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      className="relative w-full h-full rounded-2xl overflow-hidden cursor-none bg-gradient-to-br from-purple-600/20 to-navy-900"
    >
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-0.5 p-4">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-purple-500/10 rounded-sm border border-purple-400/5"
            animate={{
              x: distort.x * (i % 4 - 1.5) * 0.3,
              y: distort.y * (Math.floor(i / 4) - 1.5) * 0.3,
              scale: 1 + Math.abs(distort.x + distort.y) * 0.002,
            }}
            transition={{ type: 'spring', damping: 15 }}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-4 text-[9px] tracking-[0.2em] text-muted/40">DISRUPT THE GRID</div>
    </div>
  );
}

function ColorMachine() {
  const [hue, setHue] = useState(260);
  const [sat, setSat] = useState(60);
  const [bright, setBright] = useState(30);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ background: `hsl(${hue}, ${sat}%, ${bright}%)` }}>
      <div className="absolute inset-0 flex flex-col justify-end p-6 gap-4">
        <div className="flex items-center gap-3">
          <span className="text-[9px] tracking-[0.2em] text-white/40 w-8">HUE</span>
          <input type="range" min="0" max="360" value={hue} onChange={e => setHue(+e.target.value)} className="flex-1 accent-orange-400 h-1" />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[9px] tracking-[0.2em] text-white/40 w-8">SAT</span>
          <input type="range" min="0" max="100" value={sat} onChange={e => setSat(+e.target.value)} className="flex-1 accent-orange-400 h-1" />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[9px] tracking-[0.2em] text-white/40 w-8">BRI</span>
          <input type="range" min="0" max="100" value={bright} onChange={e => setBright(+e.target.value)} className="flex-1 accent-orange-400 h-1" />
        </div>
      </div>
    </div>
  );
}

function PromptToImage() {
  const [prompt, setPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const [done, setDone] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setGenerating(true);
    setDone(false);
    setTimeout(() => {
      setGenerating(false);
      setDone(true);
    }, 2000);
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-navy-deep border border-purple-400/10 p-6 flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        {generating ? (
          <motion.div
            className="w-24 h-24 rounded-2xl border border-orange-400/30"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        ) : done ? (
          <motion.div
            className="w-full h-full rounded-xl bg-gradient-to-br from-purple-500/30 to-orange-500/20 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="text-[10px] tracking-[0.2em] text-cream/60">[GENERATED IMAGE]</span>
          </motion.div>
        ) : (
          <span className="text-[10px] tracking-[0.2em] text-muted/40">AWAITING PROMPT</span>
        )}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Type a prompt..."
          className="flex-1 bg-navy-900/50 border border-purple-400/20 rounded-lg px-3 py-2 text-sm text-cream placeholder:text-muted/30 focus:outline-none focus:border-orange-400/30"
        />
        <button
          onClick={handleGenerate}
          className="px-4 py-2 bg-orange-500 text-cream text-[10px] tracking-[0.15em] font-bold rounded-lg hover:bg-orange-400 transition-colors"
        >
          GO
        </button>
      </div>
    </div>
  );
}

export default function Playground() {
  const [activeExp, setActiveExp] = useState<string | null>(null);

  const renderExperience = (id: string) => {
    switch (id) {
      case 'play-001': return <MoveTheLight />;
      case 'play-002': return <BreakTheImage />;
      case 'play-003': return <PromptToImage />;
      case 'play-004': return <ColorMachine />;
      default: return (
        <div className="w-full h-full rounded-2xl bg-navy-deep/50 border border-purple-400/10 flex items-center justify-center">
          <span className="text-[10px] tracking-[0.2em] text-muted/40">COMING SOON</span>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[10px] tracking-[0.4em] text-orange-400 uppercase block mb-4">INTERACTIVE</span>
          <h1 className="text-5xl md:text-8xl font-black text-cream tracking-tight mb-6">PLAYGROUND</h1>
          <p className="text-lg text-muted max-w-xl">Things you can actually interact with.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {playgroundItems.map((item, i) => (
            <motion.div
              key={item.id}
              className="relative rounded-3xl overflow-hidden border border-purple-400/10 hover:border-orange-400/20 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="aspect-[4/3] relative">
                {activeExp === item.id ? (
                  renderExperience(item.id)
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center cursor-pointer p-8"
                    onClick={() => setActiveExp(item.id)}
                    style={{ background: `linear-gradient(135deg, #4039A810, #090D3B)` }}
                  >
                    <span className="text-[10px] tracking-[0.3em] text-muted/40 mb-4">{item.number}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-cream text-center mb-3">{item.title}</h3>
                    <p className="text-sm text-muted/60 text-center max-w-xs">{item.description}</p>
                    <motion.button
                      className="mt-6 px-6 py-2 rounded-full border border-orange-400/30 text-[10px] tracking-[0.2em] text-orange-400 hover:bg-orange-400/10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.status === 'active' ? 'INTERACT' : item.status.toUpperCase()}
                    </motion.button>
                  </div>
                )}
              </div>
              {activeExp === item.id && (
                <button
                  onClick={() => setActiveExp(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-navy-deep/80 border border-purple-400/20 flex items-center justify-center text-muted hover:text-cream transition-colors text-sm"
                >
                  ×
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
