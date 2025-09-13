
# Sahil Kundu – Crafting Modern Websites & Applications

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0.0-0055FF.svg)](https://www.framer.com/motion/)

A modern, interactive personal portfolio website showcasing my journey as a software engineer and web designer. Built with cutting-edge technologies and featuring smooth animations, responsive design, and an intuitive user experience.

![Portfolio Preview](./Images/profile_image.png)

## 🌟 Features

### ✨ Core Functionality
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Dark/Light Theme**: Seamless theme switching with system preference detection
- **Smooth Animations**: Powered by Framer Motion for fluid, engaging interactions
- **Loading Screen**: Elegant loading animation with progress indicators
- **Scroll Progress**: Visual progress indicator for page navigation
- **Parallax Effects**: Dynamic parallax scrolling for enhanced visual depth

### 🎨 Interactive Elements
- **Cursor Trail Effect**: Dynamic cursor animation that follows mouse movement
- **3D Background Effects**: Animated geometric shapes and gradient backgrounds
- **Typing Animation**: Dynamic text animation in the hero section
- **Hover Effects**: Interactive hover states throughout the interface
- **Toast Notifications**: User feedback with elegant toast messages

### 📱 Sections
- **Hero**: Introduction with animated text and call-to-action buttons
- **About Me**: Personal background and professional summary
- **Skills**: Technical skills and expertise areas
- **Education**: Academic background and certifications
- **Projects**: Showcase of featured projects with detailed modals
- **Contact**: Contact form and social media links
- **Footer**: Additional links and copyright information

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern React with concurrent features
- **TypeScript 5.0.0** - Type-safe JavaScript development
- **Vite 6.3.5** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **shadcn/ui** - Re-usable UI components built on Radix UI
- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide React** - Beautiful & consistent icon library

### Animations & Interactions
- **Framer Motion 11.0.0** - Production-ready motion library
- **Motion** - Additional animation utilities

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
personal-portfolio/
├── public/
│   ├── favicon_io/          # Favicon files
│   ├── Images/              # Project screenshots and assets
│   └── Sahil Kundu Resume 2025.pdf  # Resume download
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components (shadcn/ui)
│   │   ├── AboutMe.tsx      # About section component
│   │   ├── Contact.tsx      # Contact form component
│   │   ├── Education.tsx    # Education section
│   │   ├── Footer.tsx       # Site footer
│   │   ├── Hero.tsx         # Hero section with animations
│   │   ├── LoadingScreen.tsx # Loading animation
│   │   ├── Navbar.tsx       # Navigation component
│   │   ├── ParallaxSection.tsx # Parallax wrapper
│   │   ├── Projects.tsx     # Projects showcase
│   │   ├── ScrollProgress.tsx # Progress indicator
│   │   ├── Skills.tsx       # Skills section
│   │   ├── ThemeProvider.tsx # Theme context
│   │   └── TypingAnimation.tsx # Text animation component
│   ├── styles/
│   │   └── globals.css      # Global styles
│   ├── Attributions.md      # Asset attributions
│   ├── App.tsx              # Main app component
│   ├── index.css            # Base styles
│   └── main.tsx             # App entry point
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── index.html               # HTML template
└── README.md               # Project documentation
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

The development server will start at `http://localhost:5173` (default Vite port).

## 📖 Usage

### Navigation
- Use the navbar to jump between sections
- Smooth scrolling is enabled for all anchor links
- Scroll progress indicator shows current position

### Theme Switching
- Click the theme toggle button in the navbar
- Automatically detects system preference on first visit
- Persists theme choice in localStorage

### Projects Section
- Click "View Details" to see full project information
- "Live Demo" links open projects in new tabs
- "GitHub" links lead to source code repositories

### Contact Form
- Fill out the contact form to send messages
- Form validation ensures proper data entry
- Toast notifications confirm successful submission

## 🎯 Featured Projects

### 1. Trackify - Expense Tracker Web App
A modern expense tracking application with budget management and analytics.
- **Tech**: React, TypeScript, Supabase, Recharts
- **Features**: Budget tracking, expense categorization, data visualization
- [Live Demo](https://trackify-murex-seven.vercel.app/) | [GitHub](https://github.com/SahilKundu19/Trackify)

### 2. NOTEsHIVE - Note Taking Web App
Feature-rich note-taking platform with real-time sync and rich text editing.
- **Tech**: React, TypeScript, Firebase, Tailwind CSS
- **Features**: Rich text editing, tagging, real-time sync, dark mode
- [Live Demo](https://not-es-hive-dyv7.vercel.app/) | [GitHub](https://github.com/SahilKundu19/NOTEsHIVE)

### 3. BlogVerse - Modern Blogging Platform
Full-featured blogging platform with markdown support and user engagement.
- **Tech**: React, TypeScript, Supabase, PostgreSQL
- **Features**: Markdown editing, comments, user authentication, real-time updates
- [Live Demo](https://blog-verse-dun-nine.vercel.app/) | [GitHub](https://github.com/SahilKundu19/BlogVerse)

### 4. WeatherNow - Modern Weather Web App
Responsive weather application with geolocation and forecasts.
- **Tech**: HTML5, CSS3, JavaScript, OpenWeatherMap API
- **Features**: 5-day forecasts, geolocation, glassmorphism design
- [Live Demo](https://weather-now-kappa-sandy.vercel.app/) | [GitHub](https://github.com/SahilKundu19/WeatherNow)

## 🎨 Design Philosophy

### Color Scheme
- **Primary**: Blue to Purple gradient (#3b82f6 to #8b5cf6)
- **Accent**: Cyan and Emerald for highlights
- **Background**: Adaptive light/dark mode gradients

### Typography
- Clean, modern font stack
- Responsive text sizing
- Gradient text effects for headings

### Animations
- Subtle, performance-optimized animations
- Consistent timing and easing functions
- Reduced motion support for accessibility

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

While this is a personal portfolio project, suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project includes components from [shadcn/ui](https://ui.shadcn.com/) (MIT License) and photos from [Unsplash](https://unsplash.com/license).

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Radix UI** for accessible UI primitives
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Unsplash** for high-quality stock photos
- **Lucide** for consistent iconography

## 📞 Contact

**Sahil Kundu**
- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]
- **Portfolio**: [Live Portfolio URL]

---

*Built with ❤️ using React, TypeScript, and modern web technologies*
  