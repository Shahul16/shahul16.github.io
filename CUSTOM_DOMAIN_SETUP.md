# Custom Domain Setup Guide
## Connecting shahulhameed.site to GitHub Pages

**Domain:** shahulhameed.site  
**GitHub Pages:** shahul16.github.io  
**Registrar:** Namecheap  
**Date:** March 8, 2026

---

## 🎯 Overview

This guide will help you connect your custom domain `shahulhameed.site` to your GitHub Pages portfolio.

**What you'll achieve:**
- ✅ `shahulhameed.site` → Your portfolio
- ✅ `www.shahulhameed.site` → Your portfolio
- ✅ HTTPS/SSL enabled automatically
- ✅ Professional branding with custom domain

---

## 📋 Step 1: Configure DNS Records in Namecheap

### Remove Current Records

First, remove these existing records from your Namecheap DNS:

1. **Remove CNAME Record:**
   - Type: CNAME
   - Host: www
   - Value: parkingpage.namecheap.com

2. **Remove URL Redirect Record:**
   - Type: URL Redirect
   - Host: @
   - Remove this redirect

### Add New GitHub Pages Records

#### Option A: Using Apex Domain (Recommended)

**Add these 4 A Records for `@` (apex domain):**

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |

**Add CNAME Record for `www`:**

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME Record | www | shahul16.github.io. | Automatic |

**Note:** Make sure to include the trailing dot (.) after `shahul16.github.io.`

#### Option B: Using WWW Only (Alternative)

If you prefer to only use www.shahulhameed.site:

**Add CNAME Record:**

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME Record | www | shahul16.github.io. | Automatic |

**Add URL Redirect:**

| Type | Host | Value | Redirect Type |
|------|------|-------|---------------|
| URL Redirect | @ | http://www.shahulhameed.site/ | Unmasked |

---

## 📋 Step 2: Configure GitHub Repository Settings

### Enable Custom Domain in GitHub

1. Go to your repository: https://github.com/Shahul16/shahul16.github.io

2. Click **Settings** → **Pages** (in left sidebar)

3. Under **Custom domain**, enter: `shahulhameed.site`

4. Click **Save**

5. Wait for DNS check to complete (may take a few minutes)

6. Once DNS check passes, check **Enforce HTTPS** (this may take 24-48 hours to become available)

---

## 📋 Step 3: Add CNAME File to Repository

GitHub Pages needs a CNAME file in your repository root.

### Create CNAME File

Create a new file in your repository root:

**File:** `/Users/shahul/Downloads/shahul16.github.io/CNAME`

**Content:**
```
shahulhameed.site
```

**Important:**
- No `http://` or `https://`
- No `www.`
- Just the domain name
- No trailing slash

### Commit and Push

```bash
cd /Users/shahul/Downloads/shahul16.github.io
echo "shahulhameed.site" > CNAME
git add CNAME
git commit -m "Add custom domain configuration"
git push origin main
```

---

## ⏱️ Step 4: Wait for DNS Propagation

DNS changes can take time to propagate:

- **Minimum:** 5-10 minutes
- **Typical:** 1-2 hours
- **Maximum:** 24-48 hours

### Check DNS Propagation

Use these tools to verify DNS is working:

1. **DNS Checker:** https://dnschecker.org/
   - Enter: `shahulhameed.site`
   - Check A records globally

2. **What's My DNS:** https://www.whatsmydns.net/
   - Enter: `shahulhameed.site`
   - Type: A
   - Should show GitHub IPs

3. **Command Line:**
   ```bash
   # Check A records
   dig shahulhameed.site
   
   # Check CNAME records
   dig www.shahulhameed.site
   
   # Or use nslookup
   nslookup shahulhameed.site
   ```

---

## 🔒 Step 5: Enable HTTPS (After DNS Propagation)

Once DNS is working:

1. Go to GitHub repository **Settings** → **Pages**

2. Check **Enforce HTTPS** checkbox

3. Wait for certificate to be issued (can take 24 hours)

4. Your site will be accessible via:
   - https://shahulhameed.site ✅
   - https://www.shahulhameed.site ✅

---

## 🎯 Complete DNS Configuration Reference

### Final Namecheap DNS Settings

Your Namecheap **Advanced DNS** tab should look like this:

#### Host Records

```
Type            Host    Value                    TTL
─────────────────────────────────────────────────────────
A Record        @       185.199.108.153          Automatic
A Record        @       185.199.109.153          Automatic
A Record        @       185.199.110.153          Automatic
A Record        @       185.199.111.153          Automatic
CNAME Record    www     shahul16.github.io.      Automatic
```

#### Mail Settings (Keep Existing)

```
Type            Host    Value                                           TTL
─────────────────────────────────────────────────────────────────────────────────
TXT Record      @       v=spf1 include:spf.efwd.registrar-servers.com ~all  Automatic
```

---

## ✅ Verification Checklist

### After Configuration

- [ ] All 4 A records added in Namecheap
- [ ] CNAME record for www added in Namecheap
- [ ] CNAME file created in GitHub repository
- [ ] CNAME file contains only: `shahulhameed.site`
- [ ] Custom domain configured in GitHub Pages settings
- [ ] DNS propagation complete (check with dig/nslookup)
- [ ] GitHub DNS check shows green checkmark
- [ ] HTTPS enabled in GitHub Pages settings
- [ ] Site loads at https://shahulhameed.site
- [ ] Site loads at https://www.shahulhameed.site
- [ ] Both URLs redirect to HTTPS
- [ ] SSL certificate is valid (padlock icon in browser)

---

## 🐛 Troubleshooting

### Issue: "Domain's DNS record could not be retrieved"

**Solution:**
- Wait for DNS propagation (up to 48 hours)
- Verify A records are correct
- Clear DNS cache: `sudo dscacheutil -flushcache` (macOS)

### Issue: "CNAME already exists"

**Solution:**
- Remove CNAME file from repository
- Let GitHub create it automatically
- Or ensure CNAME contains only domain name, no protocol

### Issue: "Improperly configured domain"

**Solution:**
- Double-check A record IPs are exactly:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- Ensure CNAME points to shahul16.github.io (with trailing dot)

### Issue: "HTTPS not available"

**Solution:**
- Wait 24-48 hours after DNS propagation
- Disable and re-enable custom domain in GitHub
- Ensure DNS check is passing
- Try clearing browser cache

### Issue: Site shows 404 error

**Solution:**
- Verify index.html exists in repository root
- Check CNAME file is in repository root
- Ensure GitHub Pages is enabled
- Wait a few minutes for GitHub to rebuild site

### Issue: Redirect loop

**Solution:**
- Remove any URL redirects in Namecheap
- Let GitHub handle www to non-www redirect
- Clear browser cache

---

## 📧 Email Setup (Optional)

Your domain can also be used for professional email.

### Option 1: Namecheap Private Email

1. In Namecheap dashboard, click **Private Email**
2. Purchase email hosting plan
3. Create inbox: shahul@shahulhameed.site
4. Configure email client

### Option 2: Google Workspace

1. Sign up for Google Workspace
2. Verify domain ownership
3. Update MX records in Namecheap
4. Access via Gmail interface

### Option 3: Email Forwarding (Free)

1. Set up email forwarding in Namecheap
2. Forward to: shahulofficial16@gmail.com
3. Receive emails sent to: contact@shahulhameed.site

---

## 🎨 Update Your Branding

Once custom domain is working, update these:

### LinkedIn
- Website: https://shahulhameed.site

### GitHub Profile
- Website: https://shahulhameed.site

### Resume/CV
- Portfolio: https://shahulhameed.site

### Email Signature
```
Shahul Hameed
AI Engineer & IT Systems Specialist
https://shahulhameed.site
shahulofficial16@gmail.com
+971 58 9922 059
```

### Business Cards
- Website: shahulhameed.site (no https://)

---

## 📊 Analytics Setup (Recommended)

### Add Google Analytics

1. Create Google Analytics account
2. Add tracking code to index.html before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Track These Metrics

- Page views
- Unique visitors
- Traffic sources
- Popular pages
- Geographic location
- Device types

---

## 🚀 SEO Optimization for Custom Domain

### Update Meta Tags

Update these in your index.html:

```html
<!-- Update URL references -->
<link rel="canonical" href="https://shahulhameed.site/">
<meta property="og:url" content="https://shahulhameed.site">
<meta property="og:image" content="https://shahulhameed.site/images/og-image.jpg">
```

### Submit to Search Engines

1. **Google Search Console**
   - Add property: https://shahulhameed.site
   - Verify ownership
   - Submit sitemap

2. **Bing Webmaster Tools**
   - Add site
   - Verify ownership
   - Submit sitemap

### Create sitemap.xml

Create `/Users/shahul/Downloads/shahul16.github.io/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>https://shahulhameed.site/</loc>
      <lastmod>2026-03-08</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
   </url>
</urlset>
```

---

## 📱 Test Across Devices

After setup, test on:

- [ ] Desktop (Chrome, Firefox, Safari)
- [ ] Mobile (iOS Safari, Android Chrome)
- [ ] Tablet
- [ ] Private/Incognito mode
- [ ] Different networks (WiFi, mobile data)

---

## 🎯 Quick Reference Commands

### DNS Checks
```bash
# Check A records
dig +short shahulhameed.site

# Check CNAME records
dig +short www.shahulhameed.site

# Check nameservers
dig +short NS shahulhameed.site

# Verbose lookup
dig shahulhameed.site ANY
```

### Git Commands
```bash
# Add CNAME file
echo "shahulhameed.site" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push

# Update CNAME file
echo "shahulhameed.site" > CNAME
git add CNAME
git commit -m "Update custom domain"
git push
```

---

## 📞 Support Resources

### GitHub Pages Documentation
- Custom Domain: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

### Namecheap Support
- DNS Management: https://www.namecheap.com/support/knowledgebase/category/38/dns/
- Live Chat: Available in Namecheap dashboard

### DNS Tools
- DNS Checker: https://dnschecker.org/
- MX Toolbox: https://mxtoolbox.com/
- What's My DNS: https://www.whatsmydns.net/

---

## ✅ Success Indicators

You'll know it's working when:

1. ✅ `shahulhameed.site` loads your portfolio
2. ✅ `www.shahulhameed.site` loads your portfolio
3. ✅ Both redirect to HTTPS automatically
4. ✅ Green padlock icon appears in browser
5. ✅ No certificate warnings
6. ✅ Fast loading times
7. ✅ No redirect loops

---

## 🎉 Next Steps After Setup

1. **Announce Your New Domain**
   - LinkedIn post
   - Update resume
   - Tell your network

2. **Monitor Performance**
   - Set up Google Analytics
   - Track visitor metrics
   - Monitor uptime

3. **Build on Success**
   - Continue adding projects
   - Publish blog posts
   - Share on social media

---

## 📝 Domain Renewal Reminder

- **Domain:** shahulhameed.site
- **Expires:** Feb 23, 2028
- **Auto-Renew:** Enabled ✅
- **Set Calendar Reminder:** January 2028

---

**Last Updated:** March 8, 2026  
**Status:** Ready to implement  
**Estimated Setup Time:** 15-30 minutes + DNS propagation (1-48 hours)

---

*Your professional portfolio deserves a professional domain!* 🚀
