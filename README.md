# LAZEA – Plant-Based Lifestyle Web App

Live Demo: [https://plant-website-a0f51.web.app/](https://plant-website-a0f51.web.app/)

---

## 📌 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack & Dependencies](#tech-stack--dependencies)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Responsive Design](#responsive-design)
- [Deployment](#deployment)
- [Author](#author)

---

## 📝 Project Overview

**LAZEA** is a modern, responsive web application dedicated to promoting a plant-based lifestyle. It allows users to explore a wide variety of plant-based items, view detailed descriptions, and benefit from an engaging, interactive UI.

You can:

- Browse and filter plant-based products and ingredients by category.
- View detailed information, benefits, and usage for each item.
- Enjoy a seamless responsive experience across devices.
- Register and log in securely to personalize your experience.

---

## 🚀 Features

- **Responsive UI**
  - Fully mobile-friendly design using Tailwind CSS.
  - Modern and appealing interface.
- **Category Navigation**
  - Filter and explore plants by category (Herbs, Vegetables, Indoor Plants, etc.).
- **Interactive Slider**
  - Swiper.js-powered homepage banners to highlight featured content or offers.
- **User Authentication**
  - Secure login and registration powered by Firebase Authentication.
- **Dynamic Details**
  - Detailed views for individual plant items with benefits and usage.
- **Reusable Components**
  - Modular codebase for easy extension and maintenance.

---

## 🛠 Tech Stack & Dependencies

- **Framework:** React (with Vite)
- **Styling:** Tailwind CSS, daisyUI
- **UI & Animations:** Swiper.js, framer-motion, react-icons
- **Routing:** react-router-dom
- **State/Utils:** localforage, match-sorter, sort-by
- **Notifications:** react-toastify, sweetalert2, react-tooltip
- **Authentication:** Firebase Authentication
- **Linting/Config:** ESLint, PostCSS, Vite

_For the full list, see `package.json` dependencies._

---

## 📥 Installation & Setup

1. **Clone the repository**
    ```bash
    git clone https://github.com/arifurrahmansajid/LAZEA.git
    cd LAZEA
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Start development server**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

---

## 🔑 Environment Variables

If your project integrates with any backend or uses environment variables, create a `.env.local` file at the root (example keys below):

```
VITE_API_BASE_URL=https://your-api-url.com
VITE_FIREBASE_API_KEY=your-firebase-api-key
# Add any other variables your project uses
```

> **Note:** Ensure `.env.local` is included in `.gitignore` to keep credentials secure.

---

## 📋 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint the project
npm run lint
```

---

## 📂 Folder Structure

```
LAZEA/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images, icons, etc.
│   ├── components/        # Reusable UI components
│   ├── firebase/          # Firebase configuration and hooks
│   ├── index.css          # Main stylesheet (Tailwind)
│   ├── main.jsx           # Entry point
│   ├── router.jsx         # App routing
├── .env.local             # Environment variables (ignored)
├── vite.config.js         # Vite configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

---

## 📱 Responsive Design

This application is built mobile-first and has been tested on:

- **Mobile:** Any 320px+ width
- **Tablet:** 768px+ width
- **Desktop:** 1024px+ width

All components adapt fluidly across different viewports.

---

## 🚀 Deployment

You can deploy the build output to any static hosting provider (e.g., Vercel, Netlify, Firebase Hosting):

```bash
npm run build
# Then deploy the contents of 'dist/' as instructed by your host
```

_Example: For Firebase Hosting_

```bash
npm run build
firebase deploy
```

Ensure your hosting provider is configured for single-page apps if using React Router.

---

## 👤 Author

**Arifur Rahman Sajid**  
GitHub: [arifurrahmansajid](https://github.com/arifurrahmansajid)

---

Happy coding! 🌿🚀
