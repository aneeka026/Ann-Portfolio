# Tailwind CSS setup for this portfolio

This converted source uses Tailwind CSS v4 with Vite.

## 1. Install Tailwind
From your existing React/Vite project root, run:

```bash
npm install tailwindcss @tailwindcss/vite
```

Your project also needs the dependencies already used by the portfolio:

```bash
npm install lucide-react react-icons
```

## 2. Update Vite config
Merge the included `vite.config.js` into your existing Vite config. The important addition is:

```js
import tailwindcss from '@tailwindcss/vite';
```

and add `tailwindcss()` to the Vite plugins array.

## 3. Replace your src folder
Use the included `src` folder. It no longer uses `App.css` or CSS module files. `src/index.css` only contains the Tailwind import, a few global base rules, and small keyframes for custom motion.

## 4. Run

```bash
npm run dev
```

## Notes
- The section flow remains Navbar → Hero → About → Projects → Skills → Contact → Footer.
- Mobile responsiveness was rebuilt with Tailwind breakpoints rather than large fixed paddings.
- The contact form opens the visitor's configured email client using a prefilled mailto message.
