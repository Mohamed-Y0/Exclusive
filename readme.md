# Exclusive

high-performance, fully responsive E-Commerce web application built with a modern frontend tech stack to deliver a seamless and engaging shopping experience.
It combines state-of-the-art UI design with efficient state management and optimized API handling.

---

## 🚀 Core Tech

- **Frontend Framework:** [React 19](https://react.dev/) + [React DOM](https://react.dev/reference/react-dom)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) + [React Redux](https://react-redux.js.org/)
- **Data Fetching & Caching:** [TanStack Query (React Query)](https://tanstack.com/query/latest) + Devtools
- **Styling:** [TailwindCSS 4](https://tailwindcss.com/) + [Slick Carousel](https://kenwheeler.github.io/slick/) + [React Icons](https://react-icons.github.io/react-icons/) + [React Spinners](https://www.davidhu.io/react-spinners/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Utilities:** [Axios](https://axios-http.com/) · [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)
- **Build Tool:** [Vite 7](https://vitejs.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Code Quality:** [ESLint 9](https://eslint.org/) + [Prettier](https://prettier.io/) + [Prettier Tailwind Plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

---

### **Project Sturcture**

```
public/
├── fonts/              # Project fonts
├── imgs/               # Public images
src/
├── assets/             # Static assets (images, icons, fonts used internally)
├── components/         # Reusable UI components
│   ├── home/           # Components specific to the Home page
│   ├── layout/         # Layout components
|   |── Header/
|   |── about/
|   |── contact/
|   |── signIn/
|   |── signUp/
│   └── ui/             # Small UI building blocks
├── hooks/              # Custom React hooks
├── pages/              # Application pages
├── services/           # API calls or external service integrations
├── stores/             # State management (Zustand)
├── types/              # TypeScript types and interfaces
├── utils/              # Helper/utility functions
├── App.css             # Global styles
├── App.tsx             # Root component
└── main.tsx            # Entry point

```
