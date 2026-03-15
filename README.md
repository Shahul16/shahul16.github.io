# Shahul Hameed — Portfolio Website

> **Live:** [shahulhameed.site](https://shahulhameed.site)

Technology Business Analyst portfolio — UAE-based, CS + MBA, Shell-vetted.

## Stack
- Pure HTML5 / CSS3 / Vanilla JS — no frameworks
- Hosted on GitHub Pages with custom domain via CNAME
- PWA-ready (manifest, service worker, favicons)
- Schema.org JSON-LD structured data
- Mobile-responsive with animated hamburger nav

## Structure
```
/
├── index.html              ← Main portfolio (single file)
├── css/
│   ├── styles.css          ← Legacy styles (kept for reference)
│   └── vendor.css          ← Third-party CSS
├── js/
│   ├── main.js             ← Legacy JS
│   └── plugins.js          ← Third-party libraries
├── images/
│   ├── about-photo.jpg     ← Profile photo
│   └── portfolio/          ← Project thumbnails
├── CNAME                   ← Custom domain: shahulhameed.site
├── robots.txt              ← SEO crawl rules
├── sitemap.xml             ← SEO sitemap
├── site.webmanifest        ← PWA manifest
├── favicon.ico             ← Favicon set
└── Shahul_Hameed_ATS_Resume.txt ← ATS-friendly resume download
```

## Local Development
```bash
# Open directly in browser
open index.html

# Or run a local server
python3 -m http.server 8080
# Visit http://localhost:8080
```

## Deployment
GitHub Pages auto-deploys from `main` branch.
```bash
git add .
git commit -m "update: description of change"
git push origin main
```
Site updates at shahulhameed.site within 2–3 minutes.

## Contact
**Shahul Hameed** | shahulofficial16@gmail.com | +971 58 9922 059  
[LinkedIn](https://linkedin.com/in/shahul16) · [GitHub](https://github.com/Shahul16)

---
© 2026 Shahul Hameed