# My Portfolio

Personal portfolio site built with React, TypeScript, and Tailwind CSS.

## Stack

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) as the build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) 4 for styling

## Project structure

```
src/
  components/
    layout/     # Navbar, Footer
    sections/   # Hero, About, Projects, Contact
  App.tsx
  main.tsx
  index.css     # Tailwind entry point
```

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Lint the project:

```bash
npm run lint
```

## Customizing

- Update your name, tagline, and links in [`src/components/layout/Navbar.tsx`](src/components/layout/Navbar.tsx) and [`src/components/sections/Hero.tsx`](src/components/sections/Hero.tsx).
- Add real project entries in [`src/components/sections/Projects.tsx`](src/components/sections/Projects.tsx).
- Update the contact email in [`src/components/sections/Contact.tsx`](src/components/sections/Contact.tsx).
