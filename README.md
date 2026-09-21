# RYAN INMUN 2026

Official website for **RYAN INMUN 2026** — the 24th edition of India's longest-running Model United Nations.

- **Dates:** 31 August – 2 September 2026  
- **Venue:** SCOPE Complex, New Delhi  
- **Theme:** Dialogue on Democracy  
- **Host:** Ryan International Group of Schools / Ryan Foundation  

Built with React 19, TanStack Start / Router, Tailwind CSS v4, and TypeScript.

---

## Quick Start

### Requirements
- Node.js 20+ (recommended 22)
- npm

### Install & run

```bash
npm install
npm run dev
```

The app starts at [http://localhost:8080](http://localhost:8080).

### Other scripts

| Command            | Description                          |
|--------------------|--------------------------------------|
| `npm run dev`      | Start development server             |
| `npm run build`    | Production build                     |
| `npm run preview`  | Preview production build             |
| `npm run typecheck`| TypeScript check                     |
| `npm run lint`     | ESLint                               |
| `npm run format`   | Prettier format                      |

---

## Project Structure

```
src/
├── components/       # UI components (header, footer, cards, etc.)
├── data/             # Static content (committees, leadership, awards…)
├── lib/              # Utilities, auth helpers, shared logic
├── routes/           # File-based routes (pages)
│   ├── index.tsx     # Home
│   ├── about.tsx
│   ├── awards.tsx
│   ├── committees/   # Committee list + detail pages
│   ├── competitions.tsx
│   ├── leadership.tsx
│   ├── participate.tsx
│   ├── press.tsx
│   └── resources.tsx
├── router.tsx
├── routeTree.gen.ts  # Auto-generated route tree
└── styles.css        # Tailwind + design tokens
```

### Main pages
- **Home** – Conference overview, stats, featured committees
- **About** – History & vision of RYAN INMUN
- **Committees** – 9 committees with agendas and background
- **Leadership** – Secretary-General & Executive Board
- **Participate** – Registration, fees, deadlines
- **Awards** – Awards & recognition
- **Competitions** – Special competitions (e.g. My Country 2026)
- **Press** – World Press team
- **Resources** – Forms, country matrix, training materials

---

## Design System

Custom Tailwind theme (defined in `src/styles.css`):

| Token          | Value       | Usage                  |
|----------------|-------------|------------------------|
| `navy`         | `#081422`   | Primary background     |
| `cream` / `paper` | `#faf7f0` / `#f3efe4` | Light surfaces |
| `accent`       | `#2f5d73`   | Links & highlights     |
| Fonts          | Cormorant Garamond (display) + Outfit (body) | |

---

## Notes

- This project was originally generated in the Grok App Builder sandbox.
- Platform-specific scripts under `scripts/` and `server/` are kept for reference but are not required for a normal local/production run.
- Auth and database features are present in the codebase but **not required** for the public conference website (content is static).
- No secrets or environment variables are needed for the basic static experience.

---

## License

Content belongs to Ryan International Group of Schools / Ryan Foundation.  
Code structure is provided as-is for educational and archival purposes.
