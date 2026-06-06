import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const skills: Skill[] = [
  { name: 'HTML', level: 90, category: 'Frontend', color: '#00d4ff' },
  { name: 'CSS', level: 85, category: 'Frontend', color: '#00d4ff' },
  { name: 'JavaScript', level: 80, category: 'Frontend', color: '#00d4ff' },
  { name: 'React.js', level: 75, category: 'Frontend', color: '#00d4ff' },
  { name: 'Node.js', level: 70, category: 'Backend', color: '#a855f7' },
  { name: 'Express.js', level: 70, category: 'Backend', color: '#a855f7' },
  { name: 'Python', level: 80, category: 'Programming', color: '#ec4899' },
  { name: 'C Programming', level: 75, category: 'Programming', color: '#ec4899' },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skill.level);
    }, 100 * index);
    return () => clearTimeout(timer);
  }, [skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        boxShadow: `0 0 30px ${skill.color}80`
      }}
      className="glass-morphism p-6 rounded-2xl border border-white/10 hover:border-[#00d4ff]/50 transition-all duration-300 hover-3d group"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl text-white group-hover:text-[#00d4ff] transition-colors">
          {skill.name}
        </h3>
        <span className="text-sm px-3 py-1 rounded-full glass-morphism border border-white/10" style={{ color: skill.color }}>
          {skill.category}
        </span>
      </div>

      <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
            boxShadow: `0 0 10px ${skill.color}80`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </motion.div>
      </div>

      <div className="mt-2 text-right">
        <span className="text-sm text-white/60">{skill.level}%</span>
      </div>

      <div className="mt-4 flex justify-center">
        <div className="relative w-20 h-20">
          <svg className="transform -rotate-90 w-20 h-20">
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="6"
              fill="none"
            />
            <motion.circle
              cx="40"
              cy="40"
              r="36"
              stroke={skill.color}
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              initial={{ strokeDasharray: '0 226' }}
              animate={{ strokeDasharray: `${(progress / 100) * 226} 226` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{
                filter: `drop-shadow(0 0 8px ${skill.color})`,
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-white/80">
            {progress}%
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-white/70 text-lg">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
