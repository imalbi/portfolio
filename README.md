# Alberto Cerqua - Portfolio

![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

A modern, responsive portfolio website built with Svelte 5 and Tailwind CSS, featuring smooth animations and a stunning nebula-themed design.

## 🚀 Features

- **Modern Tech Stack**: Built with Svelte 5, Tailwind CSS, and Vite
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Smooth Animations**: Custom typewriter effect and reveal animations using svelte-reveal
- **Stunning Visuals**: Animated nebula background with starfield effects
- **Interactive Elements**: Hover effects, smooth transitions, and glassmorphic design
- **Accessible**: Focus states, keyboard navigation, and semantic HTML
- **Performance Optimized**: Lazy loading, optimized images, and minimal bundle size

## 🎨 Design Highlights

- **Nebula Background**: Custom CSS animations with layered gradients and particle effects
- **Typewriter Animation**: Custom JavaScript implementation for dynamic text display
- **Glassmorphic UI**: Modern glass-like components with backdrop blur effects
- **Purple Color Scheme**: Consistent brand colors throughout the design
- **Micro-interactions**: Subtle hover effects and smooth transitions

## 🛠️ Technologies Used

- **Frontend**: Svelte 5, JavaScript ES6+
- **Styling**: Tailwind CSS, Custom CSS animations
- **Animations**: svelte-reveal, Custom typewriter effect
- **Build Tool**: Vite
- **Deployment**: Ready for static hosting (Netlify, Vercel, etc.)

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Navigation
│   ├── sections/        # Hero, About, Projects, Contact sections
│   └── ui/             # Reusable UI components
├── data/               # Static data (skills, projects, navigation)
├── lib/                # Utility functions and animations
├── routes/             # SvelteKit routes
├── stores/             # Svelte stores for state management
└── static/             # Static assets (images, resume)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, pnpm, or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/imalbi/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🎯 Customization

### Updating Content

1. **Personal Information**: Edit the content in the components under `src/components/sections/`
2. **Skills**: Modify `src/data/skillsData.js`
3. **Projects**: Update `src/data/projectsData.js`
4. **Navigation**: Adjust `src/data/nav.js`

### Styling

- **Colors**: Modify Tailwind classes or extend the theme in `tailwind.config.js`
- **Animations**: Customize animations in component `<style>` blocks
- **Typography**: Update font classes throughout the components

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add it to the main layout in `src/routes/+page.svelte`
3. Update navigation data in `src/data/nav.js`

## 🌟 Key Components

- **HeroSection**: Landing area with animated background and typewriter effect
- **AboutSection**: Personal introduction with skills showcase
- **ProjectsSection**: Portfolio projects with interactive cards
- **ContactSection**: Contact form and social links
- **Header**: Navigation with active section highlighting
- **AnimateTyping**: Custom typewriter animation utility

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.
