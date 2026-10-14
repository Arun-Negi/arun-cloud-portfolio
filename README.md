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

## Update your resume and publish changes

The **View resume** button on the website opens `/resume.pdf`, which is served directly from `public/resume.pdf`.

1. Update your resume in your PDF editor and export/download it as a PDF.
2. Open [`public/resume.pdf` in this repository](https://github.com/Arun-Negi/arun-cloud-portfolio/blob/main/public/resume.pdf).
3. Choose the edit/upload option in GitHub, upload the new PDF using the exact filename `resume.pdf`, and commit the change to `main`. If GitHub does not offer a replace/upload option on that file page, open the [`public` folder](https://github.com/Arun-Negi/arun-cloud-portfolio/tree/main/public), choose **Add file → Upload files**, and upload the replacement as `resume.pdf`.
4. GitHub Actions automatically checks that the file is a PDF and builds the portfolio. Open the **Actions** tab to check the run.
5. If this repository is connected to the Vercel project, the commit triggers a Vercel deployment automatically. Once deployment finishes, the website's **View resume** link serves the new PDF.

**Important:** this updates the downloadable resume automatically after the commit and deployment. The website's About, Experience, Skills, Certifications and impact figures are currently maintained in `src/App.jsx`; they are not inferred from PDF text. When those details change in your resume, update the matching website content in `src/App.jsx` as well, then commit both changes. This avoids inaccurate results from trying to guess how PDF text maps to portfolio sections.

### What the automation checks

- Confirms `public/resume.pdf` exists, is not empty, and starts with the PDF signature.
- Installs the Node dependencies and runs `npm run build` on relevant pushes to `main`.
- Can also be run manually from **GitHub → Actions → Validate portfolio and resume → Run workflow**.

The workflow validates and builds the site; Vercel handles hosting/deployment when its Git integration is connected. No Vercel token or secret is needed in this repository for that standard integration.

## Accuracy notes

The page uses only information present in the supplied resume. No unverified project names, employers, dates, metrics, or skills have been invented. The resume's LinkedIn URL is linked as written: `linkedin.com/in/aroonnegi`. Please verify that URL before publishing. The resume contains a phone number, but the website intentionally does not expose it in the contact section; email and profile links are provided instead.
