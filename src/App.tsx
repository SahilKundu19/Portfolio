import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Toaster } from "sonner";
import { ThemeProvider } from './components/ThemeProvider';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParallaxSection } from './components/ParallaxSection';

function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Enhanced smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.scrollBehavior = 'smooth';
    
    // Optimize scrolling performance
    document.documentElement.style.scrollPaddingTop = '80px';
    
    // Add cursor trail effect
    const createTrail = (e: MouseEvent) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 4px;
        height: 4px;
        background: linear-gradient(45deg, #3b82f6, #8b5cf6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.6;
        transform: scale(0);
        animation: trailAnimation 0.6s ease-out forwards;
      `;
      
      document.body.appendChild(trail);
      
      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      }, 600);
    };

    // Add CSS animation for cursor trail
    if (!document.querySelector('#trail-styles')) {
      const style = document.createElement('style');
      style.id = 'trail-styles';
      style.textContent = `
        @keyframes trailAnimation {
          0% {
            transform: scale(0);
            opacity: 0.6;
          }
          50% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    document.addEventListener('mousemove', createTrail);
    
    return () => {
      document.removeEventListener('mousemove', createTrail);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loading" onComplete={() => setLoading(false)} />
      ) : (
        <motion.div 
          key="content"
          className="min-h-screen bg-background text-foreground relative overflow-x-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Enhanced Background Gradient with 3D Effect */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20" />
            
            {/* 3D Geometric Background */}
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: `
                  radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
                `,
              }}
            />
          </div>
          
          {/* Enhanced Floating Background Elements with 3D Effect */}
          <motion.div
            className="fixed top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
              rotateX: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter: 'blur(60px)',
              background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
            }}
          />
          <motion.div
            className="fixed top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1.2, 1, 1.2],
              rotateY: [0, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter: 'blur(80px)',
              background: 'linear-gradient(225deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
            }}
          />
          <motion.div
            className="fixed top-1/2 left-3/4 w-48 h-48 bg-green-500/10 dark:bg-emerald-400/5 rounded-full blur-3xl"
            animate={{
              x: [0, -60, 0],
              y: [0, 80, 0],
              scale: [1, 1.3, 1],
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter: 'blur(70px)',
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))',
            }}
          />

          {/* Additional 3D Elements for Dark Mode */}
          <motion.div
            className="fixed top-10 right-10 w-32 h-32 opacity-20 dark:opacity-40"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(147, 51, 234, 0.3), transparent)',
              borderRadius: '50%',
              filter: 'blur(40px)',
            }}
          />

          {/* Scroll Progress */}
          <ScrollProgress />

          {/* Main Content */}
          <Navbar />
          
          <main>
            <Hero />
            <ParallaxSection offset={20}>
              <AboutMe />
            </ParallaxSection>
            <ParallaxSection offset={25}>
              <Skills />
            </ParallaxSection>
            <ParallaxSection offset={30}>
              <Education />
            </ParallaxSection>
            <Projects />
            <ParallaxSection offset={15}>
              <Contact />
            </ParallaxSection>
          </main>
          
          <Footer />

          {/* Toast Notifications */}
          <Toaster 
            position="top-right" 
            expand={false} 
            richColors 
            closeButton
            toastOptions={{
              duration: 4000,
              style: {
                background: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                color: 'hsl(var(--card-foreground))',
              },
            }}
          />


        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}