# Sarra — Interactive Motivation Letter

A small React/Vite website designed to replace a traditional PDF motivation letter with an interactive application experience.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Personalize a link

The page accepts optional URL parameters:

`/?company=Google&role=Software%20Engineer%20Intern`

This lets you send a different personalized link to each company without changing the code.

## Important

Before sending it to recruiters, replace the `mailto:` behavior in `src/main.jsx` with your preferred contact method if needed.

The playful "No" button is intentionally a joke. For conservative companies, consider changing it to a normal "Maybe later" button.
