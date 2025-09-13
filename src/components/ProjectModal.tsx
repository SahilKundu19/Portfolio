import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Calendar, Users, Code, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
  challenges?: string[];
  features?: string[];
  screenshots?: string[];
  technologies?: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

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
            <Card className="w-full max-w-6xl max-h-[90vh] overflow-hidden bg-card/95 backdrop-blur-xl border shadow-2xl">
              {/* Header */}
              <div className="relative p-6 pb-0">
                <motion.button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background/100 transition-colors z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>

                {project.featured && (
                  <motion.div
                    className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <Sparkles className="h-3 w-3" />
                    Featured Project
                  </motion.div>
                )}

                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {project.title}
                </motion.h2>

                <motion.p
                  className="text-lg text-muted-foreground mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.longDescription || project.description}
                </motion.p>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-200px)] px-6 pb-6">
                {/* Main Image */}
                <motion.div
                  className="relative mb-8 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Project Info */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Code className="h-5 w-5 text-blue-600" />
                        Project Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {project.timeline && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{project.timeline}</span>
                          </div>
                        )}
                        {project.team && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>{project.team}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Key Features */}
                    {project.features && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + index * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Challenges */}
                    {project.challenges && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <h3 className="text-xl font-semibold mb-4">Challenges & Solutions</h3>
                        <ul className="space-y-3">
                          {project.challenges.map((challenge, index) => (
                            <motion.li
                              key={index}
                              className="p-3 bg-muted/50 rounded-lg"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.8 + index * 0.1 }}
                            >
                              <span className="text-muted-foreground">{challenge}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                      <div className="space-y-4">
                        {project.technologies ? (
                          <>
                            {project.technologies.frontend.length > 0 && (
                              <div>
                                <h4 className="text-sm font-medium text-muted-foreground mb-2">Frontend</h4>
                                <div className="flex flex-wrap gap-1">
                                  {project.technologies.frontend.map((tech, index) => (
                                    <motion.div
                                      key={tech}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 0.5 + index * 0.05 }}
                                    >
                                      <Badge variant="outline" className="text-xs">{tech}</Badge>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            )}
                            {project.technologies.backend.length > 0 && (
                              <div>
                                <h4 className="text-sm font-medium text-muted-foreground mb-2">Backend</h4>
                                <div className="flex flex-wrap gap-1">
                                  {project.technologies.backend.map((tech, index) => (
                                    <motion.div
                                      key={tech}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 0.6 + index * 0.05 }}
                                    >
                                      <Badge variant="outline" className="text-xs">{tech}</Badge>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            )}
                            {project.technologies.database.length > 0 && (
                              <div>
                                <h4 className="text-sm font-medium text-muted-foreground mb-2">Database</h4>
                                <div className="flex flex-wrap gap-1">
                                  {project.technologies.database.map((tech, index) => (
                                    <motion.div
                                      key={tech}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 0.7 + index * 0.05 }}
                                    >
                                      <Badge variant="outline" className="text-xs">{tech}</Badge>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="flex flex-wrap gap-1">
                            {project.tags.map((tag, index) => (
                              <motion.div
                                key={tag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.05 }}
                              >
                                <Badge variant="outline" className="text-xs">{tag}</Badge>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="space-y-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Live Demo
                          </a>
                        </Button>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button asChild variant="outline" className="w-full">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Source Code
                          </a>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}