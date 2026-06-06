import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white relative">
      <ParticleBackground />

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-[#ec4899]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
}