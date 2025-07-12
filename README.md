# My Portfolio

![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

This is my personal portfolio website built with SvelteKit and Tailwind CSS. It showcases my projects, skills, and provides a way to contact me.

## Technologies Used

- **Frontend:**
  - [SvelteKit](https://kit.svelte.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:**
  - Vercel (or your preferred hosting service)

## Project Structure

- **`src/`**: This directory contains all the source code for the application.
  - **`components/`**: This directory contains all the Svelte components used in the application.
    - **`layout/`**: Components related to the overall layout of the site (Header, Footer, etc.).
    - **`sections/`**: Components for the different sections of the portfolio (Hero, About, Projects, etc.).
    - **`ui/`**: Reusable UI components (Buttons, Cards, etc.).
  - **`data/`**: This directory contains data for the projects and skills.
  - **`lib/`**: This directory contains utility functions.
  - **`routes/`**: This directory contains the SvelteKit routes for the application.
  - **`stores/`**: This directory contains Svelte stores for state management.
- **`static/`**: This directory contains static assets like images and fonts.
- **`package.json`**: This file lists the project dependencies and scripts.
- **`svelte.config.js`**: This is the SvelteKit configuration file.
- **`vite.config.js`**: This is the Vite configuration file.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/my-portfolio.git
   ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Run the development server:**
    ```bash
    npm run dev
    ```
This will start a development server at `http://localhost:5173`.

## Building for Production

To create a production version of the app, run:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deployment

This project can be easily deployed to Vercel, Netlify, or any other static hosting service. Refer to the SvelteKit documentation for more details on deployment.
