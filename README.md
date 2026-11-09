# daniilpopchenko.com

Personal portfolio of Daniil Popchenko, Full-Stack Engineer. Built with React 19, Vite, Tailwind CSS v4,
Motion, GSAP and a few [React Bits](https://reactbits.dev) WebGL components.

## Scripts

| Command           | What it does                                               |
| ----------------- | ---------------------------------------------------------- |
| `npm run dev`     | Start the dev server                                       |
| `npm run build`   | Production build into `dist/`                              |
| `npm run preview` | Serve the production build locally                         |
| `npm run lint`    | ESLint (React, hooks, accessibility)                       |
| `npm run format`  | Format everything with Prettier (`format:check` to verify) |
| `npm run deploy`  | Build and publish `dist/` to GitHub Pages via `gh-pages`   |

## Structure

- `src/components` – page sections and small motion primitives
- `src/data` – experience, skills and profile content
- `src/lib/motion.js` – shared easing, durations and reveal variants
- `components/` – vendored React Bits components (`SplitText`, `DecryptedText`, `FluidGlass`,
  `MicroSlats`, `PatternWaves`); add more with `npx shadcn@latest add @react-bits/<Name>-JS-CSS`
- `public/` – `CNAME`, favicon and the Open Graph `preview.png`

## Notes

- Colours, fonts and easing live in the `@theme` block of `src/index.css`.
- Skill logos come from the `devicon` package and are bundled as standalone SVG assets.
- WebGL scenes load lazily near the viewport and are skipped when WebGL is unavailable; all motion
  respects `prefers-reduced-motion`.
