import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen bg-navy-900 pt-32 pb-24 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-[10px] tracking-[0.4em] text-orange-400 uppercase block mb-6">CONNECT</span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-cream tracking-tight mb-8 leading-[0.9]">
            LET'S MAKE<br />
            SOMETHING<br />
            <span className="text-gradient">INTERESTING.</span>
          </h1>
          
          <p className="text-lg text-muted max-w-lg mx-auto mb-16">
            Have an idea, experiment or project in mind?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <motion.a
              href="https://www.linkedin.com/in/mitra-safarinejadian/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-6 rounded-2xl border border-cream/10 hover:border-orange-400/30 transition-all duration-500 text-center"
              whileHover={{ scale: 1.02 }}
              data-cursor="open"
            >
              <span className="text-[10px] tracking-[0.3em] text-muted/40 block mb-2">FIND ME ON</span>
              <span className="text-2xl md:text-3xl font-bold text-cream group-hover:text-orange-400 transition-colors">
                LINKEDIN
              </span>
              <motion.div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-px bg-orange-400 transition-all duration-500"
              />
            </motion.a>

            <motion.a
              href="mailto:hello@mitrasafarinejadian.com"
              className="group relative px-12 py-6 rounded-2xl border border-cream/10 hover:border-orange-400/30 transition-all duration-500 text-center"
              whileHover={{ scale: 1.02 }}
              data-cursor="open"
            >
              <span className="text-[10px] tracking-[0.3em] text-muted/40 block mb-2">SEND A</span>
              <span className="text-2xl md:text-3xl font-bold text-cream group-hover:text-orange-400 transition-colors">
                EMAIL
              </span>
              <motion.div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-px bg-orange-400 transition-all duration-500"
              />
            </motion.a>
          </div>

          {/* Decorative elements */}
          <motion.div
            className="mt-24 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-400/30" />
            <span className="text-[9px] tracking-[0.3em] text-muted/30">OR JUST SAY HELLO</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-400/30" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
