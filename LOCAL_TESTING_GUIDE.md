# Local Testing Guide

This guide is intentionally short so you can test quickly without noise.

## 1) Start a Local Server

### Python (recommended)

```bash
cd /Users/shahul/Downloads/shahul16.github.io
python3 -m http.server 8000
```

Open: `http://localhost:8000`

### Alternatives

```bash
# Node
npx http-server -p 8000

# PHP
php -S localhost:8000
```

## 2) Core Smoke Test (5–10 min)

- [ ] Home page loads with no broken layout
- [ ] Nav links scroll to `intro`, `about`, `works`, `contact`
- [ ] Project cards open/close modal correctly
- [ ] Contact links work (email/phone/social)
- [ ] No broken images in About/Projects

## 3) Console + Network Checks

In DevTools (`Cmd+Option+I`):

- [ ] Console has no critical errors
- [ ] Network has no failed requests (4xx/5xx)
- [ ] CSS/JS files load successfully
- [ ] First load feels responsive

## 4) Responsive Checks

Use Device Toolbar (`Cmd+Shift+M`) and test:

- [ ] Desktop (≥1280px)
- [ ] Tablet (~768px)
- [ ] Mobile (~375px)
- [ ] No unintended horizontal scroll
- [ ] Menu and tap targets are usable

## 5) Accessibility Checks

- [ ] Keyboard tab order is usable
- [ ] Focus outline is visible on interactive elements
- [ ] Heading structure is logical
- [ ] Link text is understandable out of context

## 6) Lighthouse Targets

Run Lighthouse for Performance, Accessibility, SEO.

- Performance: `85+`
- Accessibility: `95+`
- SEO: `90+`

## 7) Quick Fixes for Common Issues

- Broken image: confirm file exists under `images/` and filename matches exactly.
- Old styles/scripts: hard refresh with `Cmd+Shift+R`.
- Anchor not scrolling: verify section `id` matches nav href.
- Mobile menu issue: retest under viewport < `768px`.

## 8) Ready to Deploy Checklist

- [ ] Content and links finalized
- [ ] Images present and optimized
- [ ] Core smoke test passed
- [ ] Lighthouse targets met (or accepted)
- [ ] Final manual check completed on Chrome + Safari
