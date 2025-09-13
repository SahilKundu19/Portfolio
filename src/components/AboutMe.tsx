import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Code, Coffee, Gamepad2, GraduationCap, MapPin, Calendar, Award, Target, Sparkles, Zap, Volleyball, Backpack } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const stats = [
  {
    number: 3,
    suffix: '+',
    label: 'Years Experience',
    icon: Calendar,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20'
  },
  {
    number: 25,
    suffix: '+',
    label: 'Projects Completed',
    icon: Target,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950/20'
  },
  {
    number: 99.9,
    suffix: '%',
    label: 'Uptime Achieved',
    icon: Award,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20'
  }
];

const hobbies = [
  { name: 'Travelling', icon: Backpack, color: 'text-blue-600' },
  { name: 'Coffee', icon: Coffee, color: 'text-amber-600' },
  { name: 'Gaming', icon: Gamepad2, color: 'text-green-600' },
  { name: 'Football', icon: Volleyball, color: 'text-purple-600' }
];

function AnimatedCounter({ 
  number, 
  suffix = '', 
  duration = 2000 
}: { 
  number: number; 
  suffix?: string; 
  duration?: number; 
}) {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateNumber = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentNumber = number * easeOutCubic;
      
      if (number % 1 === 0) {
        setDisplayNumber(Math.floor(currentNumber));
      } else {
        setDisplayNumber(Math.round(currentNumber * 10) / 10);
      }

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };

    requestAnimationFrame(updateNumber);
  }, [isVisible, number, duration]);

  return (
    <span ref={ref}>
      {displayNumber}{suffix}
    </span>
  );
}

// 3D Floating Shape Component
function FloatingShape({ 
  className, 
  children, 
  duration = 20, 
  delay = 0,
  scale = [1, 1.2, 1],
  rotate = [0, 360],
  ...props 
}: any) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.3, 0.7, 0.3],
        scale,
        rotateX: rotate,
        rotateY: rotate,
        rotateZ: rotate,
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Particle System Component
function ParticleSystem({ count = 50 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function AboutMe() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Advanced 3D Background Elements */}
      <ParticleSystem count={30} />
      
      {/* 3D Geometric Shapes */}
      <FloatingShape
        className="top-10 left-10 w-32 h-32"
        duration={25}
        scale={[1, 1.5, 1]}
        rotate={[0, 180]}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-3xl backdrop-blur-sm border border-white/10" 
             style={{ transform: "rotateX(45deg) rotateY(45deg)" }} />
      </FloatingShape>

      <FloatingShape
        className="top-1/4 right-20 w-24 h-24"
        duration={30}
        delay={2}
        scale={[1.2, 1, 1.2]}
        rotate={[0, -360]}
      >
        <div className="w-full h-full bg-gradient-to-tr from-purple-400/15 to-pink-400/15 rounded-full backdrop-blur-sm border border-purple-200/20"
             style={{ transform: "rotateX(60deg) rotateZ(30deg)" }} />
      </FloatingShape>

      <FloatingShape
        className="bottom-1/4 left-1/4 w-40 h-40"
        duration={35}
        delay={4}
        scale={[1, 1.3, 1]}
        rotate={[0, 270]}
      >
        <div className="w-full h-full bg-gradient-to-bl from-green-400/10 to-blue-400/10 transform rotate-45 backdrop-blur-sm border border-green-200/20"
             style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
      </FloatingShape>

      <FloatingShape
        className="top-2/3 right-1/3 w-28 h-28"
        duration={28}
        delay={6}
        scale={[1.1, 1, 1.1]}
        rotate={[0, 360]}
      >
        <div className="w-full h-full bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-2xl backdrop-blur-sm border border-yellow-200/20"
             style={{ transform: "rotateY(45deg) rotateX(30deg)" }} />
      </FloatingShape>

      {/* Floating Orbs with Glow Effect */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-64 h-64"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-blue-400/20 via-purple-400/10 to-transparent rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-48 h-48"
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 70, -30, 0],
          scale: [0.8, 1.3, 1, 0.8],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-purple-400/20 via-pink-400/10 to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Enhanced Animations */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Floating Icons Around Title */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="h-6 w-6 text-blue-400/60" />
          </motion.div>
          
          <motion.div
            className="absolute -top-4 left-1/4 transform -translate-x-1/2"
            animate={{
              y: [0, -15, 0],
              rotate: [0, -180, -360],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Zap className="h-4 w-4 text-purple-400/60" />
          </motion.div>

          <motion.div
            className="absolute -top-4 right-1/4 transform translate-x-1/2"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 180, 360],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <Code className="h-5 w-5 text-green-400/60" />
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl mb-4 relative"
            initial={{ opacity: 0, y: 20, z: -50 }}
            whileInView={{ opacity: 1, y: 0, z: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 0px rgba(59, 130, 246, 0)",
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 0px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              About{" "}
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Me
              {/* Glowing effect behind text */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-lg -z-10"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.span>
          </motion.h2>
          
          {/* Decorative underline */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-center relative">
          {/* Connecting Lines Animation */}
          <motion.svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
            viewBox="0 0 1000 600"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <motion.path
              d="M100 100 Q 400 200 700 300 T 900 400"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.5)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.5)" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Main Content - Takes up 2 columns with 3D effect */}
          <motion.div 
            className="lg:col-span-2 space-y-8 relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Main Description with Floating Effect */}
            <motion.div
              className="space-y-6 relative"
              initial={{ opacity: 0, x: -30, z: -30 }}
              whileInView={{ opacity: 1, x: 0, z: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                z: 20,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Subtle background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl -z-10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                With <span className="text-blue-600 font-semibold">3+ years of experience</span> in full-stack development, 
                I specialize in building modern web applications that solve real business problems. My expertise spans from 
                responsive frontend interfaces to scalable backend architectures.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                I'm passionate about writing clean, maintainable code and delivering measurable results. Whether it's 
                <span className="text-purple-600 font-semibold"> reducing load times by 40%</span> or processing millions 
                in transactions, I focus on creating solutions that drive business value.
              </p>
            </motion.div>

            {/* Quick Info Cards with Enhanced 3D Effects */}
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02,
                  z: 30,
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="p-6 border-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 relative overflow-hidden">
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20px 20px, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                    animate={{
                      backgroundPosition: ['0px 0px', '20px 20px'],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <CardContent className="p-0 relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <GraduationCap className="h-5 w-5 text-blue-600" />
                      </motion.div>
                      <h3 className="font-semibold">Education</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Bachelor's in Information Technology<br />
                      <span className="text-sm">Specialized in Software Engineering</span>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ 
                  rotateY: -5,
                  rotateX: 5,
                  scale: 1.02,
                  z: 30,
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="p-6 border-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 relative overflow-hidden">
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `linear-gradient(45deg, rgba(34, 197, 94, 0.3) 25%, transparent 25%, transparent 75%, rgba(34, 197, 94, 0.3) 75%)`,
                      backgroundSize: '15px 15px',
                    }}
                    animate={{
                      backgroundPosition: ['0px 0px', '15px 15px'],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <CardContent className="p-0 relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <MapPin className="h-5 w-5 text-green-600" />
                      </motion.div>
                      <h3 className="font-semibold">Location</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Remote • Global<br />
                      <span className="text-sm">Available for worldwide projects</span>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Hobbies & Interests with Enhanced Effects */}
            <motion.div
              initial={{ opacity: 0, y: 30, z: -20 }}
              whileInView={{ opacity: 1, y: 0, z: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative pb-6"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated background for hobbies */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-yellow-500/5 rounded-2xl blur-xl -z-10"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Coffee className="h-5 w-5 text-amber-600" />
                When I'm not coding
              </h3>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, scale: 0.8, z: -10 }}
                    whileInView={{ opacity: 1, scale: 1, z: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 10,
                      z: 15,
                      transition: { duration: 0.3 }
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Badge 
                      variant="outline" 
                      className="px-4 py-2 text-sm flex items-center gap-2 hover:bg-background/80 transition-all duration-300 cursor-pointer relative overflow-hidden border-2"
                    >
                      {/* Animated background gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-current/5 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2 + index * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <hobby.icon className={`h-4 w-4 ${hobby.color} relative z-10`} />
                      </motion.div>
                      <span className="relative z-10">{hobby.name}</span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Section - Takes up 1 column with Enhanced 3D */}
          <div className="lg:col-span-1 relative">
            {/* Floating stat decorations */}
            <motion.div
              className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30, z: -30 }}
              whileInView={{ opacity: 1, x: 0, z: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, z: -20 }}
                  whileInView={{ opacity: 1, y: 0, z: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    z: 20,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className={`p-6 border-0 ${stat.bgColor} hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Floating particles specific to each stat */}
                    <motion.div
                      className="absolute top-2 right-2 w-2 h-2 bg-current rounded-full opacity-20"
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 0.4, 0],
                      }}
                      transition={{
                        duration: 2 + index,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className={`p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm relative`}
                          whileHover={{ 
                            rotateY: 180,
                            transition: { duration: 0.6 }
                          }}
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <motion.div
                            animate={{
                              rotate: [0, 360],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.5,
                            }}
                          >
                            <stat.icon className={`h-6 w-6 ${stat.color}`} />
                          </motion.div>
                          
                          {/* Glowing ring around icon */}
                          <motion.div
                            className={`absolute inset-0 rounded-lg border-2 ${stat.color.replace('text-', 'border-')} opacity-0`}
                            animate={{
                              opacity: [0, 0.5, 0],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.3,
                            }}
                          />
                        </motion.div>
                        <div>
                          <motion.div 
                            className={`text-3xl md:text-4xl font-bold ${stat.color}`}
                            initial={{ scale: 0.5 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.2 + (0.1 * index), type: "spring", stiffness: 200 }}
                            viewport={{ once: true }}
                          >
                            <AnimatedCounter 
                              number={stat.number} 
                              suffix={stat.suffix}
                              duration={2000 + (index * 200)}
                            />
                          </motion.div>
                          <p className="text-sm text-muted-foreground font-medium">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Enhanced Bottom CTA with 3D Effects */}
        <motion.div
          className="text-center mt-16 relative pt-6"
          initial={{ opacity: 0, y: 30, z: -30 }}
          whileInView={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Floating decorative elements around CTA */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-blue-400/20 rounded-full"
            animate={{
              x: [0, 20, 0],
              y: [0, -10, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-purple-400/20 rounded-full"
            animate={{
              x: [0, -20, 0],
              y: [0, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <p className="text-lg text-muted-foreground mb-6">
            Ready to turn your ideas into reality?
          </p>
          <motion.div
            whileHover={{ 
              scale: 1.1,
              rotateY: 5,
              z: 20,
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{
                backgroundPosition: ["0% 50%", "100% 50%"],
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"
                transition={{ duration: 0.6 }}
              />
              
              {/* Floating sparkles */}
              <motion.div
                className="absolute -top-1 -left-1 w-2 h-2 bg-white/60 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
              
              <motion.div
                className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-white/60 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
              
              <span className="relative z-10 px-6">Let's Work Together</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Background Decorations with Advanced Animations */}
      <motion.div 
        className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -180, -360],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-2xl pointer-events-none"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-10 w-12 h-12 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-2xl pointer-events-none"
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
}