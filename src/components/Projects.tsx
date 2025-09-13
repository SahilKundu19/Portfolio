import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Sparkles, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ParallaxSection } from './ParallaxSection';

const projects = [
  {
    title: 'Trackify - Expense Tracker Web App',
    description: 'A modern, responsive expense tracker that helps users manage budgets, track spending, and visualize financial data with interactive charts and analytics.',
    longDescription: 'Trackify is a smart expense tracking app built with React, TypeScript, and Supabase to simplify personal finance management. Users can add, edit, and categorize expenses, set budgets, and analyze spending trends. With a clean UI, light/dark themes, and interactive charts, it delivers seamless money management across devices.',
    image: '../../Images/Trackify_Profile_Image.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Supabase', 'shadcn/ui', 'Recharts', 'Radix UI', 'Sonner', 'Vaul'],
    liveDemo: 'https://trackify-murex-seven.vercel.app/',
    github: 'https://github.com/SahilKundu19/Trackify',
    featured: true,
    timeline: '1 month (2025)',
    team: 'Solo Project',
    role: 'Full-Stack Developer & UI/UX Designer',
    problem: 'Managing daily expenses and budgets is often challenging due to the lack of accessible, easy-to-use tools that combine expense tracking, budget management, and data visualization in one place.',
    solution: 'Trackify provides a unified platform where users can log their expenses, categorize spending, set budgets, and instantly visualize financial trends through interactive charts. With responsive design and customizable themes, it ensures accessibility across all devices.',
    process: {
      wireframes: ['wireframe1.jpg', 'wireframe2.jpg'],
      development: [
        'Plan Features – Define core functionality like expense tracking, budgets, and analytics',
        'Set Up Environment – Initialize React + TypeScript project with Vite and Tailwind CSS',
        'Design UI – Build responsive layouts using shadcn/ui and Tailwind for consistency',
        'Implement Authentication – Integrate Supabase Auth for secure user sign-in/sign-up',
        'Develop Core Logic – Create expense CRUD operations and budget management features',
        'Add Analytics – Integrate charts and visualizations for spending insights',
        'Test & Deploy – Ensure reliability with testing, then deploy via Vercel for production'
      ],
      challenges: [
        {
          challenge: 'Real-time Data Sync with Supabase',
          solution: 'Implemented Supabase client with efficient queries and caching strategies, ensuring smooth synchronization of expense data across devices.'
        },
        {
          challenge: 'Visualizing Complex Expense Data',
          solution: 'Integrated Recharts for dynamic and interactive visualizations, optimized chart performance, and designed intuitive dashboards for clarity.'
        }
      ]
    },
    screenshots: ['../../Images/Trackify_Image_1.png', '../../Images/Trackify_Image_2.png', '../../Images/Trackify_Image_3.png'],
    technologies: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'shadcn/ui', 'Recharts', 'Radix UI', 'Sonner'],
      backend: ['Supabase (auth APIs)'],
      database: ['Supabase PostgreSQL'],
      tools: ['GitHub', 'Vercel', 'Figma', 'ESLint', 'Prettier', 'npm']
    }
  },
  {
    title: 'NOTEsHIVE - Note Taking Web App',
    description: 'A modern, feature-rich note-taking application that enables users to create, organize, and manage notes with rich text editing, tagging, and real-time sync.',
    longDescription: 'NOTEsHIVE is a responsive note-taking platform built with React, TypeScript, and Firebase, featuring secure authentication, rich text editing, and real-time sync across devices. It supports color coding, tagging, favorites, archiving, and advanced search with filters for seamless organization. With a sleek UI powered by Tailwind CSS, Radix UI, and shadcn/ui, it delivers an intuitive, mobile-friendly experience with dark mode.',
    image: '../../Images/NOTEsHIVE_Profile_Image.png',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase', 'Radix UI', 'shadcn/ui'],
    liveDemo: 'https://not-es-hive-dyv7.vercel.app/',
    github: 'https://github.com/SahilKundu19/NOTEsHIVE',
    featured: false,
    timeline: '1 month (2025)',
    team: 'Solo Project',
    role: 'Full-Stack Developer',
    problem: 'Managing notes effectively across devices is often cumbersome, with limited features for search, organization, and synchronization in traditional note-taking apps.',
    solution: 'NOTEsHIVE provides an all-in-one solution with a modern interface, real-time synchronization, rich text editing, advanced search, and tag-based organization. It makes note-taking efficient, visually organized, and accessible anytime, anywhere.',
    process: {
      development: [
        'Project Setup – Initialize React + TypeScript with Vite and Tailwind CSS',
        'Authentication – Implement Firebase Auth for secure sign-up/sign-in',
        'Note Management – Build CRUD functionality with Firestore real-time sync',
        'Organization Tools – Add tagging, filtering, sorting, and search features',
        'UI/UX Enhancements – Integrate dark mode, responsive layouts, and sidebar navigation',
        'Testing & Deployment – Validate features locally and deploy to Vercel'
      ],
      challenges: [
        {
          challenge: 'Implementing Rich Text Editing',
          solution: 'Integrated a customizable rich text editor to support formatting (bold, italics, lists) while maintaining performance and smooth editing.'
        },
        {
          challenge: 'Real-time Data Sync with Firebase',
          solution: 'Utilized Firebase Firestore’s real-time listeners to synchronize notes instantly across devices, ensuring consistency and a smooth user experience.'
        }
      ]
    },
    screenshots: ['../../Images/NOTEsHIVE_Image_1.png', '../../Images/NOTEsHIVE_Image_2.png', '../../Images/NOTEsHIVE_Image_3.png'],
    technologies: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Radix UI', 'shadcn/ui', 'Lucide Icons'],
      backend: ['Firebase Authentication'],
      database: ['Firestore (NoSQL, real-time sync)'],
      tools: ['ESLint', 'Vite Plugins', 'GitHub', 'Vercel']
    }
  },
  {
    title: 'BlogVerse - Mordern Blogging Platform',
    description: 'A feature-rich blogging platform with markdown editing, authentication, real-time updates, and a sleek responsive design powered by Supabase and React.',
    longDescription: 'BlogVerse is a modern blogging platform that lets writers create, edit, and publish blogs with markdown support while engaging readers through comments. Readers can explore, search, and filter content in real time.',
    image: '../../Images/BlogVerse-Profile_Image.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Markdown', 'Vite', 'Radix UI', 'PostgreSQL', 'Supabase Auth', 'Supabase Storage'],
    liveDemo: 'https://blog-verse-dun-nine.vercel.app/',
    github: 'https://github.com/SahilKundu19/BlogVerse',
    featured: true,
    timeline: '2 months (2025)',
    team: 'Solo Project',
    role: 'Full-Stack Developer & UI/UX Designer',
    problem: 'Existing blogging platforms are often cluttered, lack real-time updates, or don’t offer enough flexibility for both content creators and readers. Many lack markdown support and intuitive management tools, making blogging less enjoyable and productive.',
    solution: 'BlogVerse simplifies blogging with a clean interface, markdown-based rich text editing, robust authentication, user profiles, and a responsive design. By using Supabase for real-time features, storage, and database management, it delivers a reliable and modern blogging experience for creators and readers alike.',
    process: {
      development: [
        'Project Initialization – Set up React, TypeScript, Vite, and Tailwind CSS',
        'Authentication – Configure Supabase Auth for secure login and user sessions',
        'Blog Features – Implement blog CRUD with markdown editor and Supabase database',
        'User Interaction – Add commenting system, profiles, and real-time updates',
        'UI/UX Design – Build responsive layouts with Radix UI, dark mode, and toast notifications',
        'Testing & Deployment – Run tests, optimize, and deploy the app on Vercel'
      ],
      challenges: [
        {
          challenge: 'Real-time Commenting System',
          solution: 'Implemented Supabase’s real-time features to sync comments instantly across all users, ensuring smooth engagement without manual refresh.'
        },
        {
          challenge: 'Markdown Editor with Live Preview',
          solution: 'Integrated a customizable markdown editor with a live preview, balancing performance and user-friendly formatting for writers.'
        }
      ]
    },
    screenshots: ['../../Images/BlogVerse_Image_1.png', '../../Images/BlogVerse_Image_2.png', '../../Images/BlogVerse_Image_3.png'],
    technologies: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Radix UI', 'Markdown', 'Lucide React', 'Sonner', 'React Hook Form', 'Embla', 'Recharts', 'CMDk'],
      backend: ['Supabase Edge Functions', 'Supabase Auth', 'Supabase Storage'],
      database: ['PostgreSQL (on Supabase)'],
      tools: ['Vercel', 'Vitest', 'ESLint', 'PostCSS', 'Autoprefixer', 'GitHub', 'Figma']
    }
  },
  {
    title: 'WeatherNow - Modern Weather Web App',
    description: 'A responsive weather website featuring real-time weather data, 5-day forecasts, geolocation support, and a sleek glassmorphism design.',
    longDescription: 'WeatherNow is a sleek weather app that delivers accurate, real-time forecasts with details like temperature, humidity, wind, and air quality. Built with HTML, CSS, and JavaScript, it features geolocation, global city search, and unit toggling. With glassmorphism design, responsive layouts, and smooth animations, it ensures both functionality and visual appeal across devices.',
    image: '../../Images/WeatherNow_Profile_Image.png',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'OpenWeatherMap API', 'Geolocation API', 'LocalStorage'],
    liveDemo: 'https://weather-now-kappa-sandy.vercel.app/',
    github: 'https://github.com/SahilKundu19/WeatherNow',
    featured: false,
    timeline: '1 month (2024)',
    team: 'Solo Project',
    role: 'Frontend Developer & UI/UX Designer',
    problem: 'Most weather apps are either too simplistic, showing only the basics, or too complex, overwhelming users with unnecessary data. Users need a simple yet comprehensive tool that delivers real-time weather insights with an engaging and modern UI.',
    solution: 'WeatherNow combines functionality and design by offering essential weather metrics, a 5-day forecast, and detailed conditions within a clean, responsive, and visually attractive interface. With geolocation, search, and keyboard shortcuts, it ensures accessibility and ease of use.',
    process: {
      development: [
        'Setup Project – Initialize HTML, CSS, and JavaScript structure.',
        'Setup Project – Initialize HTML, CSS, and JavaScript structure.',
        'UI Development – Build responsive glassmorphism design with animations',
        'Deployment – Optimize and deploy the app on Vercel'
      ],
      challenges: [
        {
          challenge: 'Handling Real-time Weather Data Efficiently',
          solution: 'Implemented optimized API calls and lazy loading to ensure smooth performance and reduce unnecessary network usage.'
        },
        {
          challenge: 'Responsive Glassmorphism Design Across Devices',
          solution: 'Utilized CSS variables, flexbox, and grid layouts with mobile-first breakpoints to achieve a consistent and adaptive UI.'
        }
      ]
    },
    screenshots: ['../../Images/WeatherNow_Image_1.png', '../../Images/WeatherNow_Image_2.png'],
    technologies: {
      frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
      backend: ['None'],
      database: ['None'],
      tools: ['OpenWeatherMap API', 'Geolocation API', 'LocalStorage', 'GitHub', 'Vercel', 'Font Awesome', 'Google Fonts']
    }
  },
  {
    title: 'Design System Library',
    description: 'Comprehensive component library and design system with documentation, interactive examples, and theme customization.',
    longDescription: 'A comprehensive design system and component library built for consistency across products. Features extensive documentation, interactive examples, theme customization, and accessibility compliance. Used by multiple teams to maintain design consistency.',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU3NjA3NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Storybook', 'React', 'TypeScript', 'Styled Components', 'Figma'],
    liveDemo: 'https://demo.example.com',
    github: 'https://github.com/example/design-system',
    featured: false,
    timeline: '5 months (2024)',
    team: '2 developers, 2 designers',
    features: [
      '50+ reusable components with full documentation',
      'Interactive component playground with live editing',
      'Multi-theme support with CSS custom properties',
      'Accessibility compliance (WCAG 2.1 AA)',
      'Automated visual regression testing',
      'Figma integration for design-to-code workflow'
    ],
    challenges: [
      'Creating a flexible theming system that works across different brand requirements',
      'Ensuring accessibility compliance while maintaining design flexibility',
      'Building automated testing pipelines for visual components'
    ],
    technologies: {
      frontend: ['React', 'TypeScript', 'Styled Components', 'Storybook'],
      backend: [],
      database: [],
      tools: ['Figma', 'Chromatic', 'npm', 'Rollup']
    }
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
        <ParallaxSection offset={15} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating technical skills and creative problem-solving
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm">
                <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                  <div className={`${index % 2 === 0 ? 'order-1' : 'order-2 lg:order-1'} relative overflow-hidden`}>
                    <motion.div
                      className="relative h-64 lg:h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ opacity: 1 }}
                      />
                      {project.featured && (
                        <motion.div
                          className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          <Sparkles className="h-3 w-3" />
                          Featured
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  <div className={`${index % 2 === 0 ? 'order-2' : 'order-1 lg:order-2'} p-6 lg:p-8 flex flex-col justify-center`}>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl lg:text-2xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.div
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button 
                            size="sm" 
                            onClick={() => openProjectModal(project)}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild variant="outline" size="sm">
                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild variant="ghost" size="sm">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              GitHub
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        </ParallaxSection>
      </section>

      {/* Project Detail Modal */}
      <ProjectDetailModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </>
  );
}