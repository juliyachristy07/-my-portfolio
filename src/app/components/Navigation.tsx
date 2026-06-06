import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-morphism backdrop-blur-lg shadow-lg shadow-[#00d4ff]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-2xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent neon-text"
            >
              JC
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white/80 hover:text-[#00d4ff] transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" />
          <div className="relative h-full flex flex-col items-center justify-center gap-8">
            {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-2xl text-white/80 hover:text-[#00d4ff] transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
