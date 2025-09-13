import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Calendar, Users, Code, Sparkles, ArrowRight, ChevronDown, Play, Zap, Target, Lightbulb, Cog, Image as ImageIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Separator } from './ui/separator';
import { useEffect, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  tags: string[];
  liveDemo: string;
  github: string;
  featured: boolean;
  timeline?: string;
  team?: string;
  role?: string;
  problem?: string;
  solution?: string;
  process?: {
    wireframes?: string[];
    development?: string[];
    challenges?: { challenge: string; solution: string }[];
  };
  screenshots?: string[];
  technologies?: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
}

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const techIcons: { [key: string]: string } = {
  'React': '⚛️',
  'TypeScript': '🔷',
  'Next.js': '▲',
  'Vue.js': '💚',
  'Node.js': '🟢',
  'Python': '🐍',
  'PostgreSQL': '🐘',
  'MongoDB': '🍃',
  'Firebase': '🔥',
  'AWS': '☁️',
  'Docker': '🐳',
  'Tailwind CSS': '🎨',
  'JavaScript': '⚡',
  'HTML': '🌐',
  'CSS': '🎨',
};

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  if (!project) return null;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element && scrollRef.current) {
      const container = scrollRef.current;
      const elementTop = element.offsetTop - container.offsetTop;
      container.scrollTo({ top: elementTop - 20, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            <Card className="w-full max-w-7xl max-h-[90vh] overflow-hidden bg-card/95 backdrop-blur-xl border shadow-2xl">
              {/* 1. Hero/Header Section */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Close Button */}
                <motion.button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-colors z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>

                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <Sparkles className="h-3 w-3" />
                    Featured Project
                  </motion.div>
                )}

                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <motion.h1
                    className="text-3xl md:text-5xl mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.title}
                  </motion.h1>
                  <motion.p
                    className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.longDescription || project.description}
                  </motion.p>

                  {/* Scroll Indicator */}
                  <motion.div
                    className="flex items-center gap-2 text-white/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-sm">Scroll to explore</span>
                    <ChevronDown className="h-4 w-4 animate-bounce" />
                  </motion.div>
                </div>

                {/* Quick Navigation */}
                <div className="absolute bottom-4 right-4">
                  <motion.div
                    className="flex gap-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Button
                      size="sm"
                      onClick={() => scrollToSection('overview')}
                      className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20"
                    >
                      Overview
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => scrollToSection('demo')}
                      className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20"
                    >
                      Demo
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Scrollable Content */}
              <div ref={scrollRef} className="overflow-y-auto max-h-[calc(90vh-320px)] md:max-h-[calc(90vh-320px)]">
                <div className="p-6 md:p-8 space-y-12">
                  
                  {/* 2. Overview Section */}
                  <motion.section
                    id="overview"
                    className="grid lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h2 className="text-2xl md:text-3xl mb-4 flex items-center gap-2">
                          <Code className="h-6 w-6 text-blue-600" />
                          Project Overview
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {project.longDescription || project.description}
                        </p>
                      </div>

                      {/* Role & Timeline */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.role && (
                          <div className="space-y-2">
                            <h3 className="font-semibold flex items-center gap-2">
                              <Users className="h-4 w-4 text-purple-600" />
                              My Role
                            </h3>
                            <p className="text-muted-foreground">{project.role}</p>
                          </div>
                        )}
                        {project.timeline && (
                          <div className="space-y-2">
                            <h3 className="font-semibold flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-green-600" />
                              Timeline
                            </h3>
                            <p className="text-muted-foreground">{project.timeline}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      {/* Tech Stack with Icons */}
                      <div>
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          <Cog className="h-4 w-4 text-orange-600" />
                          Tech Stack
                        </h3>
                        <div className="space-y-4">
                          {project.technologies ? (
                            <>
                              {project.technologies.frontend.length > 0 && (
                                <div>
                                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Frontend</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {project.technologies.frontend.map((tech, index) => (
                                      <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                      >
                                        <Badge variant="outline" className="text-xs flex items-center gap-1">
                                          <span>{techIcons[tech] || '⚡'}</span>
                                          {tech}
                                        </Badge>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {project.technologies.backend.length > 0 && (
                                <div>
                                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Backend</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {project.technologies.backend.map((tech, index) => (
                                      <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                      >
                                        <Badge variant="outline" className="text-xs flex items-center gap-1">
                                          <span>{techIcons[tech] || '🔧'}</span>
                                          {tech}
                                        </Badge>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag, index) => (
                                <motion.div
                                  key={tag}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: index * 0.05 }}
                                  viewport={{ once: true }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <Badge variant="outline" className="text-xs flex items-center gap-1">
                                    <span>{techIcons[tag] || '💡'}</span>
                                    {tag}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="space-y-3">
                        <motion.div 
                          whileHover={{ scale: 1.02 }} 
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                              <Play className="mr-2 h-4 w-4" />
                              View Live Demo
                            </a>
                          </Button>
                        </motion.div>

                        <motion.div 
                          whileHover={{ scale: 1.02 }} 
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button asChild variant="outline" className="w-full">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              View Source Code
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </motion.section>

                  <Separator />

                  {/* 3. Problem Statement */}
                  {project.problem && (
                    <motion.section
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-2xl md:text-3xl mb-6 flex items-center gap-2">
                        <Target className="h-6 w-6 text-red-600" />
                        The Problem
                      </h2>
                      <Card className="p-6 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                        <p className="text-lg leading-relaxed">{project.problem}</p>
                      </Card>
                    </motion.section>
                  )}

                  {/* 4. Solution */}
                  {project.solution && (
                    <motion.section
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-2xl md:text-3xl mb-6 flex items-center gap-2">
                        <Lightbulb className="h-6 w-6 text-yellow-600" />
                        The Solution
                      </h2>
                      <Card className="p-6 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                        <p className="text-lg leading-relaxed">{project.solution}</p>
                      </Card>
                    </motion.section>
                  )}

                  {/* 5. Process */}
                  {project.process && (
                    <motion.section
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-2xl md:text-3xl mb-8 flex items-center gap-2">
                        <Zap className="h-6 w-6 text-blue-600" />
                        Development Process
                      </h2>

                      <div className="space-y-8">
                        {/* Wireframes */}
                        {project.process.wireframes && project.process.wireframes.length > 0 && (
                          <div>
                            <h3 className="text-xl mb-4 font-semibold">Design & Wireframes</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              {project.process.wireframes.map((wireframe, index) => (
                                <motion.div
                                  key={index}
                                  className="aspect-video bg-muted/50 rounded-lg overflow-hidden"
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: index * 0.1 }}
                                  viewport={{ once: true }}
                                  whileHover={{ scale: 1.02 }}
                                >
                                  <div className="w-full h-full flex items-center justify-center">
                                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                                    <span className="ml-2 text-muted-foreground">Wireframe {index + 1}</span>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Development Workflow */}
                        {project.process.development && project.process.development.length > 0 && (
                          <div>
                            <h3 className="text-xl mb-4 font-semibold">Development Workflow</h3>
                            <div className="space-y-3">
                              {project.process.development.map((step, index) => (
                                <motion.div
                                  key={index}
                                  className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                                    {index + 1}
                                  </div>
                                  <p className="text-muted-foreground">{step}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Challenges */}
                        {project.process.challenges && project.process.challenges.length > 0 && (
                          <div>
                            <h3 className="text-xl mb-4 font-semibold">Challenges & Solutions</h3>
                            <div className="space-y-4">
                              {project.process.challenges.map((item, index) => (
                                <motion.Card
                                  key={index}
                                  className="p-4"
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <div className="space-y-2">
                                    <h4 className="font-medium text-red-600">Challenge:</h4>
                                    <p className="text-muted-foreground">{item.challenge}</p>
                                    <h4 className="font-medium text-green-600">Solution:</h4>
                                    <p className="text-muted-foreground">{item.solution}</p>
                                  </div>
                                </motion.Card>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.section>
                  )}

                  {/* 6. Screenshots/Demo Showcase */}
                  <motion.section
                    id="demo"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl md:text-3xl mb-8 flex items-center gap-2">
                      <ImageIcon className="h-6 w-6 text-purple-600" />
                      Project Showcase
                    </h2>

                    {/* Main Screenshot */}
                    <motion.div
                      className="mb-8 relative overflow-hidden rounded-xl shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={`${project.title} main screenshot`}
                        className="w-full h-64 md:h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>

                    {/* Additional Screenshots */}
                    {project.screenshots && project.screenshots.length > 0 && (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.screenshots.map((screenshot, index) => (
                          <motion.div
                            key={index}
                            className="aspect-video bg-muted/50 rounded-lg overflow-hidden group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -5 }}
                          >
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-900/30 dark:group-hover:to-purple-900/30 transition-colors">
                              <ImageIcon className="h-8 w-8 text-muted-foreground group-hover:text-foreground" />
                              <span className="ml-2 text-muted-foreground group-hover:text-foreground">Screenshot {index + 1}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.section>

                  {/* 7. Call to Action */}
                  <motion.section
                    className="text-center py-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl md:text-3xl mb-4">Interested in More Projects?</h2>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Explore my other work to see how I solve complex problems and create exceptional user experiences.
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={onClose}
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        View All Projects
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </motion.section>
                </div>
              </div>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}