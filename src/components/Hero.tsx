import { motion } from 'motion/react';
import { Download, Mail, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TypingAnimation, MultiTypingAnimation } from './TypingAnimation';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Enhanced 3D Abstract Background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-3/4 w-64 h-64 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [180, 540],
            x: [0, -60, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content with Sequential Animation */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* 1. Headline with typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl mb-4">
                <TypingAnimation 
                  text="Hi, I'm "
                  speed={150}
                  delay={500}
                />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <TypingAnimation 
                    text="Sahil Kundu"
                    speed={120}
                    delay={1800}
                  />
                </span>
              </h1>
            </motion.div>

            {/* 2. Subtext with rotating phrases */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 h-8">
                <MultiTypingAnimation 
                  phrases={[
                    "Software Engineer & Web Designer",
                    "Full-Stack Developer",
                    "UI/UX Enthusiast",
                    "Problem Solver"
                  ]}
                  speed={100}
                  pauseDuration={2000}
                />
              </h2>
              <motion.p 
                className="text-lg text-muted-foreground mb-8 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.5, duration: 1 }}
              >
                I design and develop interactive web experiences that are both beautiful and functional. Combining code with creativity, I transform ideas into digital solutions that delight users and drive impact.
              </motion.p>
            </motion.div>

            {/* 3. Buttons appear after typing completes */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5.5, duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 5.7, duration: 0.5 }}
              >
                <Button
                  onClick={() => scrollToSection('#projects')}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View My Work
                </Button>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 5.9, duration: 0.5 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Sahil Kundu Resume 2025.pdf';
                    link.download = 'Sahil_Kundu_Resume.pdf';
                    link.click();
                  }}
                  className="shadow-lg"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 6.1, duration: 0.5 }}
              >
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => scrollToSection('#contact')}
                  className="shadow-lg"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo appears last */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 6.3, duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="relative z-10 w-80 h-80 mx-auto lg:w-96 lg:h-96"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{ perspective: 1000 }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  scale: { duration: 0.3 },
                }}
              >
                <ImageWithFallback
                  src="public/Images/profile.png"
                  alt="Professional portrait"
                  className="w-full h-full object-cover rounded-full border-4 border-white/20 dark:border-gray-700/30 shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-blue-500 opacity-60"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-4 h-4 bg-purple-500 opacity-60 rounded-full"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-20 w-3 h-3 bg-green-500 opacity-60"
        animate={{
          x: [0, -15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}