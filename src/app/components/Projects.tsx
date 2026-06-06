import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  gradient: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'IoT-Based Water Quality Testing System',
    description: 'An innovative IoT solution for real-time water quality monitoring using sensors and cloud-based data analytics.',
    techStack: ['IoT', 'Python', 'Node.js', 'React'],
    gradient: 'from-[#00d4ff] to-[#0099cc]',
    image: 'https://images.unsplash.com/photo-1638734254958-4a11c989e9bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjB3YXRlciUyMHF1YWxpdHklMjBzZW5zb3IlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc4MDc0MDUzOXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Smart Event Management System',
    description: 'A comprehensive platform for managing events with features like registration, ticketing, and real-time analytics.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    gradient: 'from-[#a855f7] to-[#7c3aed]',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMG1hbmFnZW1lbnQlMjBjb25mZXJlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3ODA3NDA1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Smart Dining & Hostel Management System',
    description: 'An integrated system for managing dining services and hostel accommodations with automated billing and inventory.',
    techStack: ['React.js', 'Python', 'Node.js', 'PostgreSQL'],
    gradient: 'from-[#ec4899] to-[#db2777]',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGRpbmluZyUyMHJlc3RhdXJhbnQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc4MDc0MDU0MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
      whileHover={{
        y: -15,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02
      }}
      className="glass-morphism p-6 rounded-2xl border border-white/10 hover:border-[#00d4ff]/50 transition-all duration-500 group hover-3d relative overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

      <div className="relative z-10">
        <div className="w-full h-48 rounded-xl mb-6 relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 mix-blend-overlay`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative text-white text-6xl opacity-30 group-hover:opacity-60 transition-opacity">
              {'</>'}
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">
          {project.title}
        </h3>

        <p className="text-white/70 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm glass-morphism border border-white/10 rounded-full text-white/80 group-hover:border-[#00d4ff]/30 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <button className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#a855f7] text-white hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
            <span>View Details</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
          <button className="px-4 py-2 rounded-lg glass-morphism border border-white/20 text-white hover:border-[#00d4ff] transition-all duration-300 flex items-center justify-center">
            <Github className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00d4ff]/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-white/70 text-lg">Innovative solutions I've built</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
