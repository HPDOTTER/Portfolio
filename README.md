# Portfolio Website - Johannes Nordmann

A modern, responsive portfolio website built with Angular 18+ showcasing frontend development skills and projects. Features multilingual support (English/German), interactive components, and optimized performance with minimal bundle size.

## 🚀 Features

### Core Functionality

-   **Responsive Design**: Mobile-first approach with breakpoints for all device sizes
-   **Multilingual Support**: English and German language switching with persistent preference
-   **Single Page Application**: Smooth scroll navigation with section anchoring
-   **Contact Form**: Validated contact form with backend integration
-   **Interactive Components**: Hover effects, animations, and dynamic content

### Technical Highlights

-   **Angular 18+**: Latest Angular features with standalone components
-   **TypeScript**: Full type safety and modern ES6+ features
-   **SCSS**: Advanced styling with variables, mixins, and responsive design
-   **SSR Support**: Server-side rendering for improved SEO and performance
-   **Form Validation**: Template-driven forms with comprehensive validation
-   **HTTP Client**: Backend integration for contact form submission
-   **Performance Optimized**: Minimal dependencies, optimized font loading with `font-display: swap`

## 📁 Project Structure

```
src/
├── app/
│   ├── components/           # Feature components
│   │   ├── above-the-fold/   # Hero section
│   │   ├── about-me/         # About section
│   │   ├── contact-form/     # Contact form
│   │   ├── my-skills/        # Skills showcase
│   │   ├── portfolio/        # Project portfolio
│   │   └── recommendation/   # Testimonials
│   ├── shared/               # Shared components
│   │   ├── header/           # Navigation header
│   │   ├── footer/           # Site footer
│   │   └── language-switcher/ # Language toggle
│   ├── services/             # Business logic
│   │   └── translation.service.ts
│   ├── pipes/                # Custom pipes
│   │   └── translate.pipe.ts
│   └── legal/                # Legal pages
│       ├── legal-notice/
│       └── privacy-policy/
├── assets/                   # Static assets
│   ├── img/                  # Images
│   ├── icons/                # Icon files
│   └── fonts/                # Custom fonts
└── styles.scss              # Global styles
```

## 🛠️ Installation & Setup

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn
-   Angular CLI (`npm install -g @angular/cli`)

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd Portfolio

# Install dependencies
npm install

# Start development server
ng serve

# Open browser to http://localhost:4200
```

### Build for Production

```bash
# Build for production
ng build --prod

# Build with specific base href for deployment
ng build --base-href "/your-path/" --source-map=true
```

## 🎨 Styling & Design

### Color Scheme

```scss
$background: #141d2f; // Dark blue background
$purple: #9747ff; // Primary purple accent
$green: #70e61c; // Secondary green accent
$white: #ffffff; // Text color
$disabled: #b6b6b6; // Disabled state
```

### Responsive Breakpoints

-   **Mobile**: 320px - 768px
-   **Tablet**: 769px - 1024px
-   **Desktop**: 1025px - 1920px
-   **Large Desktop**: 1921px+

## 🌐 Internationalization

### Supported Languages

-   **English (en)**: Default language
-   **German (de)**: Secondary language

### Translation System

```typescript
// Service usage
this.translationService.setLanguage("de");
this.translationService.getCurrentLanguage();

// Template usage
{
    {
        "nav.about" | translate;
    }
}
```

## 📧 Contact Form

### Features

-   Real-time validation with visual feedback
-   Email format validation with regex pattern
-   Required field validation
-   Privacy policy acceptance
-   Backend integration ready

## 🧩 Components Documentation

### Core Components

#### HeaderComponent

-   Responsive navigation with mobile hamburger menu
-   Smooth scroll anchoring to page sections
-   Mobile overlay with backdrop and scroll locking

#### ContactFormComponent

-   Template-driven form with comprehensive validation
-   Visual validation feedback (icons and messages)
-   Backend integration for email sending

#### TranslationService

-   Manages application language state
-   Browser localStorage persistence
-   SSR-safe implementation

## 🚀 Deployment

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## 👨‍💻 Author

**Johannes Nordmann**

-   Email: johannes-nordmann@live.de
-   GitHub: [@HPDOTTER](https://github.com/HPDOTTER)

## 🙏 Acknowledgments

-   Developer Akademie for web development training
-   Angular team for the excellent framework

---

Built with ❤️ using Angular and TypeScript
