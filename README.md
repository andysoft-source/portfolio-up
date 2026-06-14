# React Portfolio 🚀

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=flat-square&logo=vercel)](https://portfoliodev-lovat.vercel.app/)
[![Portfolio Version](https://img.shields.io/badge/Version-Phase%207-success?style=flat-square)](https://github.com/andysoft-source/Portfolio-Dev)

---

An innovative, interactive portfolio crafted with cutting-edge React 18 technology, featuring smooth Framer Motion animations and elegant Tailwind CSS styling. This showcase presents my professional journey through dynamic project galleries, animated skill visualizations, and an intelligent AI career assistant. Built with enterprise-level architecture, accessibility-first design, and optimized performance for an exceptional user experience across all devices.

![Portfolio Screenshot](./src/assets/og-image.png)

---

## ✨ Key Features

### 🏗️ **Professional Architecture**
- **Component Organization:** Logical folder structure (`layout/`, `sections/`, `ui/`)
- **Clean Code:** TypeScript-ready with consistent patterns and best practices
- **Performance Optimized:** Code splitting, lazy loading, and optimized bundle size
- **Scalable Structure:** Enterprise-ready organization with error boundaries and accessibility utilities
- **Design System:** Unified typography, accessibility, and theme-aware components

### 💼 **Content Sections**
- **AI Assistant:** Interactive Hugging Face-powered chatbot with career information and project insights
- **Experience Timeline:** Modern card-based layout with expandable details
- **Project Gallery:** Revolutionary 3-component system with clean cards, tabbed modals, and adaptive live previews
- **Skills Visualization:** Interactive charts with proficiency levels and project counts
- **Professional References:** Elegant carousel with testimonials and LinkedIn integration
- **Contact Forms:** Professional contact system with project type categorization

### 🚀 **Advanced Features**
- **AI-Powered Career Assistant:** Integrated Hugging Face Spaces chatbot for interactive career Q&A
  - **Smart Integration:** Dual access via dedicated section and project card
  - **Theme-Aware Design:** Complete integration with all 4 theme variations
  - **Enhanced UX:** Modern animations, feature grids, and micro-interactions
  - **Secure Embedding:** iframe with proper sandbox attributes and fallback UI
- **Revolutionary Project System:** 3-component architecture solving UX problems while maintaining performance
  - **ProjectCard:** Eliminated 3D flip conflicts, clean hover effects, tech stack previews, 4-theme support
  - **ProjectModal:** Mobile-first tabbed interface with responsive sizing (`max-w-sm sm:max-w-4xl`)
  - **LiveDemoPreview:** Adaptive controls (desktop overlay vs mobile panel), real-time responsive detection
- **GitHub Activity:** Real-time activity feed with API integration
- **Performance Metrics:** Integrated Lighthouse scores with animated displays
- **Mobile Excellence:** Touch-optimized controls, responsive layouts, adaptive text sizing
- **Accessibility:** WCAG AA compliance with keyboard navigation and screen reader support
- **Toast Notifications:** Theme-aware notification system with multiple types
- **Error Boundaries:** Graceful error handling with user-friendly fallbacks

---

## 🛠️ Tech Stack

### **Core Technologies**
- [React 18](https://react.dev/) - Modern React with hooks and concurrent features
- [Vite](https://vitejs.dev/) - Fast build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library

### **Additional Libraries**
- [React Icons](https://react-icons.github.io/react-icons/) - Comprehensive icon library
- [GitHub REST API](https://docs.github.com/en/rest) - Live activity integration
- [Google Drive API](https://developers.google.com/drive) - CV download functionality

### **Development Tools**
- ESLint & Prettier - Code quality and formatting
- Vite Plugin React - Fast refresh and optimized builds
- PostCSS - CSS processing and optimization

---


## 🏗️ Project Architecture

### **Organized Component Structure**
```
src/
├── components/
│   ├── layout/              # Navigation & layout components
│   │   ├── Navbar/         # Active navigation with scroll detection
│   │   └── FloatingNavigation/
│   ├── sections/           # Main content sections
│   │   ├── Hero/           # Landing section with grid layout
│   │   ├── Chatbot/        # AI Assistant section integration
│   │   ├── CareerChatbot/  # Interactive AI chatbot component
│   │   ├── Experience/     # Professional timeline
│   │   ├── Skills/         # Interactive skills visualization
│   │   ├── Projects/       # Project gallery with live previews
│   │   ├── References/     # Professional testimonials
│   │   ├── Contact/        # Contact forms and information
│   │   ├── PersonalBranding/
│   │   └── GitHubActivity/
│   └── ui/                 # Reusable UI components
│       ├── animations/     # Animation utilities
│       ├── common/         # Shared components (Button, Toast, ErrorBoundary, etc.)
│       └── forms/          # Form components
├── constants/              # Application data and configuration
├── contexts/              # React contexts (theme, etc.)
├── hooks/                 # Custom React hooks
├── utils/                 # Utility functions (accessibility, typography, etc.)
└── assets/               # Static assets and images
```

### **Clean Import Patterns**
```javascript
// Unified component imports
import { Hero, Projects, Experience } from '../components';

// Organized constants
import { HERO_CONTENT, PROJECTS, SKILLS_DATA } from '../constants';

// Custom hooks
import { useTypingAnimation, useScrollAnimation } from '../hooks';
```

---

## 🎯 Development Phases

### **Phase 1-3: Foundation** ✅
- Hero animations and typing effects
- 3D project cards with interactive previews
- Theme system with localStorage persistence

### **Phase 4: Advanced Interactions** ✅
- Live demo previews with smart project detection
- GitHub activity integration
- Professional contact forms
- Scroll-triggered animations

### **Phase 5: Modern Polish** ✅
- Complete Experience section redesign
- Enhanced Project and Reference sections
- Modern Navbar with active indicators
- Hero section grid layout overhaul

### **Phase 6: Code Architecture** ✅
- Comprehensive component restructuring
- Logical folder organization
- Import path optimization
- Documentation and cleanup

### **Phase 7: Portfolio Polish** ✅
- Enhanced accessibility with WCAG AA compliance
- Advanced micro-interactions and toast notifications
- Error boundaries and graceful failure handling
- Unified typography system across all themes
- Keyboard navigation with shortcuts (Alt+H/A/P/E/S/C)
- Theme-aware focus management and loading states

### **AI Assistant Integration** ✅
- Hugging Face Spaces chatbot integration with secure iframe embedding
- Dual access via dedicated section and project card
- Theme-aware design with modern animations and micro-interactions
- Enhanced UX with feature grids, shine effects, and staggered animations
- Mobile-first responsive design with touch optimization
- Keyboard shortcut (Alt+A) and floating navigation integration

---

## 📈 Performance Optimizations

### **Loading & Bundle**
- **Code Splitting:** React.lazy() for route-level splitting
- **Tree Shaking:** Optimized imports and unused code elimination
- **Asset Optimization:** WebP images and lazy loading
- **Bundle Analysis:** Minimal dependencies and optimized chunks

### **Runtime Performance**
- **Memoization:** React.memo and useMemo for expensive operations
- **Efficient Animations:** Framer Motion with transform optimizations
- **Scroll Performance:** Intersection Observer for scroll-based animations
- **State Management:** Optimized context usage and local state

---

## 🔧 Customization Guide

### **Adding New Sections**
1. Create component in `src/components/sections/YourSection/`
2. Add data constants in `src/constants/yourSection.js`
3. Import and add to `src/App.jsx`
4. Update navigation in `SECTION_LINKS`

### **Modifying Content**
- **Personal Info:** Update `src/constants/constants.js`
- **Projects:** Modify `src/constants/projects.js`
- **Experience:** Edit `src/constants/experiences.js`
- **Skills:** Update `src/constants/skills.js`

### **Theme Customization**
- **Colors:** Modify theme definitions in `src/contexts/ThemeContext.jsx`
- **Styling:** Update Tailwind configuration in `tailwind.config.js`
- **Animations:** Customize motion variants in component animation files

---

## 📋 Scripts

This project uses npm or pnpm for script execution.

**Using npm:**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

**Using pnpm:**
```bash
pnpm run dev          # Start development server
pnpm run build        # Build for production
pnpm run preview      # Preview production build
pnpm run lint         # Run ESLint
pnpm run lint:fix     # Fix ESLint issues
```

---

## 🤝 Contributing

### **Development Workflow**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Follow the existing component structure and patterns
4. Ensure all imports use the organized folder structure
5. Test your changes with `npm run build`
6. Commit with clear messages: `git commit -m "feat: add your feature"`
7. Push and create a Pull Request

### **Code Standards**
- Follow the established folder organization
- Use TypeScript-compatible patterns
- Maintain component documentation
- Ensure responsive design
- Test across different themes

---

## 📚 Documentation

Comprehensive development documentation is available in the `docs/claude-development/` folder:

- **[Project Structure Guide](./docs/claude-development/PROJECT_STRUCTURE.md)** - Complete architecture overview
- **[Development Logs](./docs/claude-development/)** - Detailed daily progress and phase implementations
- **[Claude Integration](./docs/claude-development/CLAUDE.md)** - AI-assisted development setup

---

## 📄 License

[MIT License](LICENSE) - Feel free to use this project for your own portfolio!

---

## 👨‍💻 Author

**Hajun Yun** - Full Stack Developer & AI Engineer

---

## ⭐ Support

If this project helped you create an amazing portfolio, please:

1. ⭐ **Star this repository**
2. 🍴 **Fork it for your own use**
3. 📢 **Share it with others**
4. 🐛 **Report any issues**

> **Built with ❤️ using React, Tailwind CSS, and Claude Code assistance**
