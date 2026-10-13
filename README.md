# Arun Negi — Cloud & Infrastructure Portfolio

A responsive React + Vite portfolio built from the details in the supplied resume PDF. It uses a minimal professional visual style, soft scroll-reveal transitions, and a mobile-friendly layout.

## Included
- Career summary and measurable impact highlights
- Kenvue and Insight experience using resume wording
- Skills grouped by cloud infrastructure, DevOps, automation and compute
- Microsoft and KodeKloud certifications and education
- Email, LinkedIn and GitHub links
- The supplied resume PDF at `public/resume.pdf`
- Reduced-motion support for accessibility

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build and test the production bundle

```bash
npm run build
npm run preview
```

## Deploy for free with Vercel

1. Download and unzip this project.
2. Open a terminal in the extracted `arun-cloud-portfolio` directory.
3. Run `npm install` and `npm run build` to verify it builds.
4. Add the files to your existing GitHub repository `Arun-Negi/resume` (preserve or back up existing files first). One option is to copy the project contents into the repository root; the existing `resume/` folder can remain.
5. Commit and push the changes to the `main` branch.
6. Sign in to Vercel with GitHub at https://vercel.com/.
7. Choose **Add New → Project**, import `Arun-Negi/resume`, and set the project root to the directory containing this `package.json` (the repository root if copied there).
8. Vercel should detect Vite. Use build command `npm run build` and output directory `dist` if asked.
9. Deploy. Vercel will provide a free `*.vercel.app` URL. Future pushes to the connected branch trigger deployments.

## Alternative: GitHub Pages

This is a client-rendered static Vite app, so it can also be deployed to GitHub Pages after configuring Vite's `base` for the chosen repository path and adding a GitHub Actions build workflow. Vercel is the simpler first deployment for this project.

## Accuracy notes

The page uses only information present in the supplied resume. No unverified project names, employers, dates, metrics, or skills have been invented. The resume's LinkedIn URL is linked as written: `linkedin.com/in/aroonnegi`. Please verify that URL before publishing. The resume contains a phone number, but the website intentionally does not expose it in the contact section; email and profile links are provided instead.
