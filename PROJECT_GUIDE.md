# Project Guide

This document is the single operational reference for the Shahul Hameed portfolio project.

## Purpose

This portfolio presents Shahul Hameed as a Technology Business Analyst with strengths in systems improvement, data visibility, automation, and digital transformation.

## Live Site

- Primary: <https://shahulhameed.site>
- GitHub Pages: <https://shahul16.github.io>

## Current Structure

- `index.html` - static production landing page
- `css/` - production styles
- `js/` - interactions and chatbot logic
- `images/` - live image assets
- `next-portfolio/` - modern Next.js implementation
- `Shahul_Hameed_ATS_Resume.txt` - ATS-friendly resume snapshot

## Local Development

### Static Portfolio

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

### Next.js Portfolio

```bash
cd next-portfolio
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

### Static Files

Check `index.html`, `js/main.js`, and metadata files in the editor for errors.

### Next.js App

```bash
cd next-portfolio
npm run lint
npm run build
```

## Deployment

### Static Site Deployment

The root site is intended for GitHub Pages deployment from the main branch.

### Next.js Deployment

The Next.js version is production-ready and can be deployed separately if needed.

## Content Rules

- Keep positioning aligned to Technology Business Analyst roles.
- Do not reintroduce unsupported titles such as AI Engineer, Principal Architect, or Senior Engineer.
- Keep project claims factual and outcome-focused.
- Prefer recruiter clarity over technical jargon.

## Maintenance

- Optimize images before adding new ones.
- Do not commit generated folders such as `next-portfolio/.next/` or `next-portfolio/node_modules/`.
- Keep the ATS resume updated with the latest verified experience.
