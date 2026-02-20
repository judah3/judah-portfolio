# Jude Agagad Portfolio

Personal portfolio built with React and Vite.

## Tech Stack

- React 18
- Vite 5
- Plain CSS

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create your local environment file:

```bash
cp .env.example .env
```

3. Start local development:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run preview` - preview production build locally

## Environment Variables

Use these variables in `.env`:

- `VITE_PORTFOLIO_BRAND`
- `VITE_PORTFOLIO_NAME`
- `VITE_PORTFOLIO_ROLE`
- `VITE_PORTFOLIO_EMAIL`
- `VITE_PORTFOLIO_LOCATION`
- `VITE_PORTFOLIO_SUMMARY`
- `VITE_PORTFOLIO_COPYRIGHT_NAME`
- `VITE_PORTFOLIO_CV_URL`
- `VITE_CONTACT_FORM_ENDPOINT`

Example Formspree endpoint:

```env
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/mreaavkr
```

## Contact Form Behavior

- If `VITE_CONTACT_FORM_ENDPOINT` is set, the form submits to that endpoint.
- If it is not set, the form falls back to opening a `mailto:` draft.

## Project Structure

- `src/App.jsx` - main page layout and UI logic
- `src/App.css` - styles and responsive rules
- `src/config/siteConfig.js` - environment-driven site identity config
- `src/config/colorScheme.js` - color tokens and theme setup
- `src/config/portfolioData.js` - projects, skills, experience, education, contact data
- `media/FULLSTACK_RESUME_AGAGAD_JUDE.pdf` - downloadable CV
