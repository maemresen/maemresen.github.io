# maemresen.com

Personal portfolio and landing page for **Mehmet Arif Emre Sen** — live at [maemresen.com](https://maemresen.com).

## Tech Stack

- **React 19** + **Vite** — fast builds and HMR
- **styled-components** v6 — CSS-in-JS with transient `$` props
- **React Bootstrap** — responsive grid layout
- **FontAwesome** — iconography
- **Puppeteer** — CV PDF generation from `public/cv.html`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build to `/build` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on `src/` |
| `npm run build:cv` | Generate CV PDF from `public/cv.html` |
| `npm run watch:cv` | Watch `cv.html` and rebuild PDF on change |

## Project Structure

```
src/
  App.jsx          # Main single-page component
  App.css          # Global styles (background, root layout)
  utils/styles.js  # Shared color palette (COLORS)
public/
  cv.html          # CV source for PDF generation
scripts/
  generate-cv-pdf.js  # Puppeteer script to generate cv.pdf
```

## Deployment

Automatically deployed to **GitHub Pages** via [GitHub Actions](.github/workflows/pages.yml) on every push to `main`.
