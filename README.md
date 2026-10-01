# Tool Hub

A clean, lightweight directory for the tools, research utilities, and project sites maintained by [InVoidStar](https://github.com/invoidstar).

## Stack

- React + TypeScript
- Vite
- Cloudflare Vite Plugin
- Cloudflare Workers Static Assets
- Plain CSS design system

The project intentionally avoids UI frameworks and unnecessary runtime dependencies. Project metadata lives in one typed data file, so adding or updating a card does not require touching layout components.

## Project structure

```text
tool-hub/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectBrowser.tsx
│   │   └── ProjectCard.tsx
│   ├── data/
│   │   └── projects.ts
│   ├── hooks/
│   │   └── useTheme.ts
│   ├── styles/
│   │   ├── base.css
│   │   └── components.css
│   ├── types/
│   │   └── project.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── wrangler.jsonc
```

## Local development

Requires a current Node.js release supported by Vite and Wrangler.

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run check
npm run build
npm run preview
npm run deploy
```

## Add a project

Edit `src/data/projects.ts`. Each project is typed and supports:

- title and short description
- category
- status
- tags
- live URL
- GitHub repository
- compact visual mark

No component changes are needed for normal project additions.

## Cloudflare deployment

The repository is ready for **Cloudflare Workers Builds**.

1. In Cloudflare, open **Workers & Pages** and create/import a Worker from Git.
2. Connect the GitHub repository `invoidstar/tool-hub`.
3. Use `main` as the production branch.
4. Build command: `npm run build`
5. Deploy command: `npx wrangler deploy`

`wrangler.jsonc` already configures this project as a single-page application using Workers Static Assets.

Once Git integration is enabled, pushes to `main` can build and deploy automatically.

## Future backend expansion

The current version is front-end only. The same project can later add:

- Worker API routes
- D1 for relational data
- KV for configuration/cache
- R2 for files and media
- authentication or an admin interface

The front-end structure is intentionally kept independent from those future services.

## Design principles

- keep the project directory shallow and predictable
- keep data separate from presentation
- prefer reusable components over repeated markup
- prefer CSS variables over scattered visual constants
- keep dependencies minimal
- preserve accessibility, responsive layout, and keyboard focus states
- avoid deployment-specific GitHub Actions when Cloudflare Workers Builds already provides CI/CD
