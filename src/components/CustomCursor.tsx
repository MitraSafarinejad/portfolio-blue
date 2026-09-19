import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [cursorState, setCursorState] = useState<'default' | 'view' | 'explore' | 'read' | 'open'>('default');
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const labelRef = useRef<HTMLDivElement>(null);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const labelSpringConfig = { damping: 30, stiffness: 200, mass: 0.8 };
  
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const labelXSpring = useSpring(cursorX, labelSpringConfig);
  const labelYSpring = useSpring(cursorY, labelSpringConfig);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('[data-cursor]');
      if (interactive) {
        const state = interactive.getAttribute('data-cursor') as typeof cursorState;
        setCursorState(state || 'view');
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('[data-cursor]');
      if (interactive) {
        setIsHovering(false);
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isMobile, cursorX, cursorY, isVisible]);

  if (isMobile) return null;

  const labels: Record<string, string> = {
    view: 'VIEW',
    explore: 'EXPLORE',
    read: 'READ',
    open: 'OPEN',
    default: ''
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      >
        <motion.div
          className="rounded-full bg-cream -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isHovering ? 60 : 12,
            height: isHovering ? 60 : 12,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        />
      </motion.div>
      
      {isHovering && cursorState !== 'default' && (
        <motion.div
          ref={labelRef}
          className="fixed top-0 left-0 pointer-events-none z-[10000]"
          style={{ x: labelXSpring, y: labelYSpring }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="-translate-x-1/2 translate-y-6 text-[10px] font-bold tracking-[0.2em] text-orange-400 uppercase">
            {labels[cursorState]}
          </div>
        </motion.div>
      )}
    </>
  );
}
