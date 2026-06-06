import { motion } from 'motion/react';
import { Code2, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-[#00d4ff]/30"
          >
            <Sparkles className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm text-white/80">Welcome to my portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: 1,
              x: 0,
              rotateX: mousePosition.y,
              rotateY: mousePosition.x,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent neon-text animate-gradient bg-[length:200%_auto] cursor-pointer select-none"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            Juliya Christy
          </motion.h1>

          <div className="space-y-3">
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                rotateX: mousePosition.y * 0.5,
                rotateY: mousePosition.x * 0.5,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl text-white/90 cursor-pointer select-none"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              Full Stack Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                rotateX: mousePosition.y * 0.3,
                rotateY: mousePosition.x * 0.3,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="text-base md:text-lg text-white/70 cursor-pointer select-none"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              B.Tech Information Technology
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                rotateX: mousePosition.y * 0.3,
                rotateY: mousePosition.x * 0.3,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="text-sm md:text-base text-white/60 cursor-pointer select-none"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              KPR Institute of Engineering and Technology, Arasur, Coimbatore
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
            className="glass-morphism p-6 rounded-2xl border border-[#00d4ff]/20 space-y-4"
          >
            <p className="text-white/80 leading-relaxed">
              Passionate about building smart, scalable, and user-friendly web applications.
            </p>
            <p className="text-[#00d4ff] flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              <span>Aspiring Software Developer</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#a855f7] text-white hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all duration-300 hover:scale-105"
            >
              View Projects
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full glass-morphism border border-[#00d4ff]/30 text-white hover:border-[#00d4ff] transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899] rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="relative glass-morphism rounded-full p-8 border-2 border-[#00d4ff]/30 animate-float">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#a855f7]/20 flex items-center justify-center">
                <Code2 className="w-32 h-32 text-[#00d4ff]" strokeWidth={1.5} />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 glass-morphism rounded-2xl p-4 border border-[#a855f7]/30 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-[#a855f7] text-2xl">{'</>'}</div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-morphism rounded-2xl p-4 border border-[#ec4899]/30 animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-[#ec4899] text-2xl">{'{ }'}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
