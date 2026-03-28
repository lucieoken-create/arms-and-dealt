# Arms & Dealt

A parody spy-thriller recruitment site — for a gym and a poker night.

Built with **React + Vite + Tailwind CSS**.

---

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Build

```bash
npm run build
```

Output goes to `./dist`.

---

## Deployment

### Option 1 — Netlify Drop (Quickest)

1. Run the build:
   ```bash
   npm run build
   ```
2. Go to **[netlify.com/drop](https://netlify.com/drop)**
3. Drag the `dist/` folder into the browser window
4. Done — Netlify gives you a live URL instantly

No account required for a one-off drop. Sign up to keep the URL and redeploy later.

---

### Option 2 — GitHub Pages

**One-time setup:**

1. **Set your repo name in `vite.config.js`:**
   ```js
   // vite.config.js
   export default defineConfig({
     plugins: [react()],
     base: '/arms-and-dealt/',  // ← replace with your actual repo name
   })
   ```

2. **Update `homepage` in `package.json`:**
   ```json
   "homepage": "https://YOUR-GITHUB-USERNAME.github.io/arms-and-dealt"
   ```

3. **Install the `gh-pages` package** (already in devDependencies, just install):
   ```bash
   npm install
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```
   This runs `npm run build` first (via `predeploy`), then pushes the `dist/` folder to a `gh-pages` branch on your repo.

5. **Enable GitHub Pages** in your repo settings:
   - Go to **Settings → Pages**
   - Set source to **Branch: `gh-pages`**, folder: `/ (root)`
   - Save

Your site will be live at `https://YOUR-USERNAME.github.io/arms-and-dealt/`

> **Note:** The app uses `HashRouter` for routing, so React Router works on GitHub Pages without any redirect config.

---

## Stack

- [React 18](https://react.dev/)
- [React Router v6](https://reactrouter.com/) (HashRouter)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v3](https://tailwindcss.com/)
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) + [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
