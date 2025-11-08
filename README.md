# 🪶 Varnan Assignment — React + Tailwind + API Integration

This repository contains a fully responsive, single-page React application (portfolio/home page) built to match a Figma design and integrated with a backend contact API.  
The project includes form validation, API integration, horizontal page scrolling, Framer Motion animations, and responsive layouts for all devices.

---

## 🌐 Project Overview

This project is a front-end implementation of the **Varnan home page**, featuring a clean, responsive, and animated design based on the provided Figma reference.

### ✅ Key features implemented

- Fully **responsive design** across desktop, tablet, and mobile breakpoints
- **Single-page layout** with smooth horizontal scroll navigation
- **Scroll-snap** behavior for precise page transitions
- **Framer Motion animations** (smooth fade-ins, staggered reveals, and circular rotations)
- **Contact form** with complete front-end validation (required fields + email format)
- **API integration** with backend contact endpoint
- **Custom texture background** and subtle motion effects
- **Clean, modular component structure** for scalability and clarity

---

## 📂 Folder structure (important files)

```
src/
  assets/            # images and static assets
  components/        # React components
    Body.jsx
    ContactForm.jsx  # Contact form (API integration & validation)
    Home.jsx
    HomePage.jsx     # main page layout using horizontal scroller
    NavBar.jsx
  utils/
    motion.ts        # framer-motion variants (circularMotion, etc.)
  App.jsx
  index.css
  index.js
.env.local           # environment file (NOT committed)
package.json
tailwind.config.js
README.md            # this file
```

---

## ⚙️ Dependencies (from `package.json`)

**Dependencies**

- `react` ^19.2.0
- `react-dom` ^19.2.0
- `react-scripts` 5.0.1
- `framer-motion` ^12.23.24
- `web-vitals` ^2.1.4
- `@testing-library/*` (dom, jest-dom, react, user-event)

**Dev Dependencies**

- `tailwindcss` ^3.4.18
- `postcss` ^8.5.6
- `autoprefixer` ^10.4.21
- `react-router-dom` ^7.9.5

---

## 🧱 Timeline / Steps Performed (Development Log)

1. **Project bootstrap** — Initialized React app (CRA) and git repository. Installed required dependencies.
2. **Tailwind setup** — Configured `tailwindcss`, `postcss`, and `autoprefixer`.
3. **Layout & components** — Created `HomePage`, `Home`, `NavBar`, `Body`, and `ContactForm` components.
4. **Horizontal scrolling** — Built `.horizontal-scroller` with `scroll-snap-type` and responsive layout.
5. **Wheel handling** — Added smooth wheel-to-horizontal scroll conversion for desktop.
6. **Contact form** — Implemented validation (required fields, email regex).
7. **API integration** — Connected `ContactForm` with backend API using `POST` method.
8. **Framer Motion setup** — Added animation variants (`fadeIn`, `slideUp`, `circularMotion`, etc.) for smooth entrance and rotation effects.
9. **Styling & texture** — Applied background texture, consistent margins, and theme colors.
10. **Responsiveness** — Finalized responsive breakpoints across mobile, tablet, and large displays.
11. **Final polish** — Tweaked animation delays, transitions, and hover interactions.
12. **Testing & deployment** — Verified API responses, form success handling, and responsive behavior across devices.
13. **Repo & commit** — Pushed final version with a clean structure and updated documentation.

---

## 🔑 Environment Variables (`.env.local`)

Created a `.env.local` file in the **project root** (same folder as `package.json`):

---

## 🧭 How to Run (Development)

1. Clone the repo
   ```bash
   git clone <your-repo-url>
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Create `.env.local` (see above)
4. Start the dev server
   ```bash
   npm start
   ```
5. Open `http://localhost:3000`

---

## 🧩 Scripts (from package.json)

```
"start": "react-scripts start"
"build": "react-scripts build"
"test": "react-scripts test"
"eject": "react-scripts eject"
```

---

## 🔗 API Integration Details

- **Endpoint:** `POST ${process.env.REACT_APP_API_URL}`
- **Request Example:**
  ```json
  {
    "name": "Test User",
    "email": "testuser@gmail.com",
    "phone": "908765498",
    "message": "This is a message"
  }
  ```
- **Success response (200)** — Returns the created object with timestamps and submitted data.
- UI behavior — Displays **"Form Submitted"** message upon successful API response.

---

## 🛠️ Troubleshooting

- **Undefined env variable:** restart dev server and check `.env.local` location.
- **Scroll not working:** verify `display: flex` and `flex: 0 0 100vw` for pages.
- **CORS issues:** test endpoint with Postman or `curl`.
- **Animation lag on low-end devices:** reduce transition duration or disable motion using `prefers-reduced-motion`.

---

## 🚀 Future Improvements

- Add unit tests for components and API behavior.
- Implement light/dark theme toggle.
- Optimize performance with lazy loading for heavy assets.

---

## 👤 Author

Developed by **Ayush Kumar**  
_Fully responsive Varnan web assignment with animations, validation, and API integration._
