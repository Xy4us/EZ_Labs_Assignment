# Varnan Assignment — React + Tailwind + API Integration

This repository contains a single-page React application (portfolio/home page) built to match a Figma design and integrated with a backend contact API. The project includes form validation, API integration, horizontal page scrolling, and subtle animations using Framer Motion.

---

## Quick links

- **API used:** `https://vernanbackend.ezlab.in/api/contact-us/` (POST)
- **Local env file:** `.env.local` (see below)

---

## Project overview

This project is a front-end implementation of the Varnan home page. Key items implemented:

- Single-page layout based on a provided Figma design
- Horizontal page-by-page scrolling with smooth behavior and scroll-snap
- Contact form with front-end validation (required fields + email format)
- Integration with the provided contact API (POST)
- Framer Motion animations (slow infinite rotation / circular motion utilities)
- Tailwind CSS for layout and styling
- A small, modular component structure (form extracted to a component)

> ⚠️ Responsive design is **not implemented yet** and will be completed in the next update.

---

## Folder structure (important files)

```
src/
  assets/            # images and static assets
  components/        # React components
    Body.jsx
    ContactForm.jsx  # Contact form component (API integration & validation)
    Home.jsx
    HomePage.jsx     # main page layout using horizontal scroller
    NavBar.jsx
  utils/
    motion.ts        # framer-motion variants (circularMotion, etc.)
  App.jsx
  index.css
  index.js
.env.local           # local environment file (NOT committed)
package.json
tailwind.config.js
README.md            # this file
```

---

## Dependencies (from `package.json`)

**Dependencies**

- `react` ^19.2.0
- `react-dom` ^19.2.0
- `react-scripts` 5.0.1
- `framer-motion` ^12.23.24
- `web-vitals` ^2.1.4
- `@testing-library/*` (dom, jest-dom, react, user-event) — testing helpers

**Dev Dependencies**

- `tailwindcss` ^3.4.18
- `postcss` ^8.5.6
- `autoprefixer` ^10.4.21
- `react-router-dom` ^7.9.5

---

## Timeline / Steps performed (development log)

> This documents the steps performed while building the assignment.

1. **Project bootstrap** — Created React app (Create React App / react-scripts) and initialized a git repository. Installed base React dependencies.
2. **Tailwind setup** — Installed `tailwindcss`, `postcss`, and `autoprefixer`; added Tailwind directives to `src/index.css` and configured `tailwind.config.js` content paths.
3. **Layout & components** — Implemented `HomePage`, `Home`, `NavBar`, and `Body` components. Added assets into `src/assets` and referenced them in components.
4. **Horizontal scrolling** — Built `.horizontal-scroller` container and `.page` sections; implemented CSS rules for `overflow-x`, `scroll-snap-type`, and flex layout so each page fills the viewport.
5. **Wheel handling** — Added a graceful `wheel` handler (in `HomePage`) to convert vertical wheel motion into horizontal scroll for a natural desktop UX.
6. **Contact form** — Extracted form into `ContactForm.jsx` component; added front-end validation: required fields and email regex.
7. **API integration** — Wired `ContactForm` to the backend API; moved the API URL into `.env.local` as `REACT_APP_API_URL` and added a safe fallback for local testing.
8. **Framer Motion** — Installed `framer-motion`; added `utils/motion.ts` with `circularMotion` (slow infinite rotation) and other variants for animations.
9. **Styling & scrollbars** — Created custom styled scrollbars for the horizontal scroller and applied the site texture background.
10. **Testing** — Verified API with `curl` and Postman; ensured successful POST returns `200` and the UI shows "Form Submitted" on success.
11. **Repo & commit** — Connected local repo to remote git (GitHub/GitLab) and made documented commits. Final commit message recommendation: `final: completed API integration, form validation, and Figma UI implementation`.

---

## Environment variables (`.env.local`)

Create a `.env.local` file in the **project root** (same folder as `package.json`) and add:

```
REACT_APP_API_URL=https://vernanbackend.ezlab.in/api/contact-us/
```

**Important notes**

- Restart the dev server after creating or editing `.env.local` (CRA injects env vars at startup).
- Do **not** commit `.env.local` to Git. Add it to `.gitignore`.
- For sharing, add `.env.example` with the same key but _no secret values_.

---

## How to run (development)

1. Clone the repo: `git clone <your-repo-url>`
2. Install dependencies: `npm install` or `yarn`
3. Create `.env.local` as described above
4. Start dev server: `npm start` (or `yarn start`)
5. Open: `http://localhost:3000`

---

## Scripts (from package.json)

```
"start": "react-scripts start"
"build": "react-scripts build"
"test": "react-scripts test"
"eject": "react-scripts eject"
```

---

## API integration details

- **Endpoint:** `POST ${process.env.REACT_APP_API_URL}`
- **Request body example**

```json
{
  "name": "Test user",
  "email": "testuser@gmail.com",
  "phone": "908765498",
  "message": "This is a message"
}
```

- **Success response (200)** will return created object with `id`, timestamps and the posted data.
- UI behavior: when the API responds with `200 OK`, the ContactForm component shows **"Form Submitted"** in the status area.

---

## Postman collection

- Create a Postman collection containing the `POST /api/contact-us/` request. Export it (v2.1) and include the exported `.json` file in the repo root (e.g. `Varnan_API_Test.postman_collection.json`) so reviewers can run the exact request.

---

## Troubleshooting

- **`process.env.REACT_APP_API_URL` is `undefined`**: ensure `.env.local` is in project root and restart dev server. Use a console.log inside the React code to verify.
- **No scroll / pages not visible**: confirm `.horizontal-scroller` has `display:flex` and each `.page` has `flex: 0 0 100vw`.
- **Spinner arrows on number input**: use `type="tel"` or remove spinners with CSS (we included utility rules in `index.css`).
- **CORS errors**: these are server-side; you can test with `curl` or Postman which do not enforce browser CORS.

---

## Recommended commit message for final submission

```
final: completed API integration, form validation, and Figma UI implementation
```

---

## Notes / Future Improvements

- Add responsive design across mobile, tablet, and desktop breakpoints.
- Add unit tests for the `ContactForm` using React Testing Library.
- Add accessibility improvements (labels associated with inputs, error aria attributes).
- Add a toggle to disable motion for `prefers-reduced-motion` users.
- Add CI (GitHub Actions) to run lint and tests on push.

---

## Contact

If you need me to convert any component to TypeScript or produce a ready-to-paste `ContactForm.tsx` file, tell me and I will provide it.

---

_Generated by the developer (Ayush) — README outlines setup, usage and a development timeline for reviewers._
