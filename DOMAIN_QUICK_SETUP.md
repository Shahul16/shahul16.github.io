# Custom Domain Quick Setup Card
## shahulhameed.site → shahul16.github.io

---

## 🎯 Namecheap DNS Settings (Advanced DNS Tab)

### DELETE These Records First:
- ❌ CNAME: www → parkingpage.namecheap.com
- ❌ URL Redirect: @ → http://www.shahulhameed.site/

### ADD These Records:

#### A Records (for root domain)
```
Type: A Record | Host: @ | Value: 185.199.108.153 | TTL: Automatic
Type: A Record | Host: @ | Value: 185.199.109.153 | TTL: Automatic
Type: A Record | Host: @ | Value: 185.199.110.153 | TTL: Automatic
Type: A Record | Host: @ | Value: 185.199.111.153 | TTL: Automatic
```

#### CNAME Record (for www subdomain)
```
Type: CNAME | Host: www | Value: shahul16.github.io. | TTL: Automatic
```

**Important:** Add the trailing dot (.) after `shahul16.github.io.`

---

## 🐙 GitHub Repository Settings

1. Go to: https://github.com/Shahul16/shahul16.github.io/settings/pages

2. Under **Custom domain**, enter: `shahulhameed.site`

3. Click **Save**

4. Wait for DNS check ✓

5. Enable **Enforce HTTPS** (after 24-48 hours)

---

## 📁 CNAME File (Already Created)

✅ File created at: `/CNAME`  
✅ Content: `shahulhameed.site`  
✅ Ready to commit and push

```bash
git add CNAME
git commit -m "Add custom domain configuration"
git push origin main
```

---

## ⏱️ Timeline

- **DNS Configuration:** 5 minutes
- **DNS Propagation:** 1-48 hours (typically 1-2 hours)
- **HTTPS Certificate:** 24-48 hours after DNS propagates
- **Total Time:** 1-3 days for complete setup

---

## ✅ Verification Commands

```bash
# Check if A records are set correctly
dig shahulhameed.site

# Check if CNAME is set correctly
dig www.shahulhameed.site

# Check from different DNS servers
dig @8.8.8.8 shahulhameed.site
```

**Expected Results:**
- `shahulhameed.site` → Shows 4 GitHub IP addresses
- `www.shahulhameed.site` → Points to shahul16.github.io

---

## 🎉 Success Checklist

- [ ] DNS records configured in Namecheap
- [ ] CNAME file committed to repository
- [ ] Custom domain set in GitHub Pages
- [ ] DNS propagation complete
- [ ] https://shahulhameed.site loads portfolio
- [ ] https://www.shahulhameed.site loads portfolio
- [ ] HTTPS enabled and working
- [ ] SSL certificate valid (green padlock)

---

## 🆘 Quick Troubleshooting

**Issue:** DNS check failing  
**Fix:** Wait longer for propagation (up to 48 hours)

**Issue:** 404 error  
**Fix:** Ensure CNAME file is in repository root

**Issue:** No HTTPS option  
**Fix:** Wait 24-48 hours after DNS verification

**Issue:** Certificate error  
**Fix:** Clear browser cache, wait for certificate renewal

---

## 📞 Need Help?

- **Full Guide:** See `CUSTOM_DOMAIN_SETUP.md`
- **GitHub Docs:** https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **Namecheap Support:** Live chat in dashboard

---

**Print this card and keep it handy!** 📋

Last Updated: March 8, 2026
