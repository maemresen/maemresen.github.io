# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/landing page for maemresen, deployed as a GitHub Pages site at maemresen.com.

## Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Production build to `/build`
- `npm run preview` — Preview production build locally
- `npm run lint` — ESLint on `src/`

## Architecture

Single-page React 19 app built with Vite. The entire UI lives in `src/App.jsx` as one component with styled-components for layout and theming.

**Key libraries:** React Bootstrap for grid/responsive layout, styled-components v6 for CSS-in-JS, FontAwesome for icons.

**Styling approach:** Global styles in `src/App.css` (background image, root layout). Component styles use styled-components with a shared color palette from `src/utils/styles.js` (`COLORS.PRIMARY` = green, `COLORS.SECONDARY` = gray). Transient props use the `$` prefix (styled-components v6 convention).

**Linting:** ESLint 9 with flat config (`eslint.config.js`), using recommended + React plugin rules.

**Deployment:** GitHub Actions workflow (`.github/workflows/pages.yml`) builds and deploys to GitHub Pages via `peaceiris/actions-gh-pages`.
