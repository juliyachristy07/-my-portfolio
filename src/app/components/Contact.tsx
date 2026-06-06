import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Message sent! (This is a demo)');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'juliyachristy07@example.com',
      href: 'mailto:juliyachristy07@example.com',
      color: '#00d4ff',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-8925470190',
      href: 'tel:+918925470190',
      color: '#a855f7',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, India',
      href: '#',
      color: '#ec4899',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/juliya-christy',
      color: '#00d4ff',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/juliya-christy',
      color: '#a855f7',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/its_julzzz_007',
      color: '#ec4899',
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-white/70 text-lg">Let's build something amazing together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="glass-morphism p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 glass-morphism rounded-xl border border-white/10 hover:border-[#00d4ff]/50 transition-all duration-300 group"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center glass-morphism border border-white/20 group-hover:scale-110 transition-transform"
                      style={{ borderColor: `${info.color}50` }}
                    >
                      <info.icon className="w-6 h-6" style={{ color: info.color }} />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">{info.label}</p>
                      <p className="text-white group-hover:text-[#00d4ff] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-morphism p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="w-14 h-14 rounded-full flex items-center justify-center glass-morphism border border-white/20 hover:border-[#00d4ff]/50 transition-all duration-300"
                    style={{
                      boxShadow: `0 0 20px ${social.color}30`,
                    }}
                  >
                    <social.icon className="w-6 h-6" style={{ color: social.color }} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="glass-morphism p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl glass-morphism border border-white/10 focus:border-[#00d4ff] focus:outline-none text-white bg-white/5 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl glass-morphism border border-white/10 focus:border-[#00d4ff] focus:outline-none text-white bg-white/5 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl glass-morphism border border-white/10 focus:border-[#00d4ff] focus:outline-none text-white bg-white/5 transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#a855f7] text-white font-bold hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-white/50"
        >
          <p>© 2026 Juliya Christy. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
