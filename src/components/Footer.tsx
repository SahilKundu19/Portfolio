import { motion } from 'motion/react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: <Github className="h-5 w-5" />,
    href: 'https://github.com/SahilKundu19',
    label: 'GitHub'
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    href: 'https://www.linkedin.com/in/sahil-kundu-122a7b23a/',
    label: 'LinkedIn'
  },
  {
    icon: <Mail className="h-5 w-5" />,
    href: 'mailto:kundubabita991@gmail.com',
    label: 'Email'
  }
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 border-t border-border/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-xl font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sahil Kundu
              </span>
            </motion.h3>
            <p className="text-muted-foreground leading-relaxed">
              Software Engineer & Web Designer passionate about creating beautiful, 
              functional digital experiences that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-300 text-muted-foreground hover:text-foreground"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3 text-muted-foreground">
              <motion.p whileHover={{ x: 5 }} className="transition-transform duration-200">
                📧 kundubabita991@gmail.com
              </motion.p>
              <motion.p whileHover={{ x: 5 }} className="transition-transform duration-200">
                📱 +91 705-999-4812
              </motion.p>
              <motion.p whileHover={{ x: 5 }} className="transition-transform duration-200">
                📍 Kolkata, India
              </motion.p>
            </div>
            <motion.button
              onClick={scrollToTop}
              className="mt-4 text-sm text-blue-600 hover:text-blue-700 transition-colors duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              ↑ Back to top
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-sm text-muted-foreground flex items-center gap-1"
            whileHover={{ scale: 1.02 }}
          >
            © 2025 Sahil Kundu. Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.span>{' '}
            and lots of coffee.
          </motion.p>
          <motion.p
            className="text-sm text-muted-foreground mt-2 md:mt-0"
            whileHover={{ scale: 1.02 }}
          >
            All rights reserved.
          </motion.p>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-0 right-1/4 w-24 h-24 bg-purple-500/5 rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </footer>
  );
}