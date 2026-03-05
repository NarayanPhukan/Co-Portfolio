# 🚀 GitHub & Vercel Setup Guide for Co-Portfolio

Complete step-by-step guide to push your portfolio to GitHub and deploy it on Vercel with a custom domain.

---

## 📋 Prerequisites

- GitHub account ([create one](https://github.com/signup))
- Vercel account ([create one](https://vercel.com/signup))
- Git installed on your machine

---

## 🔧 Step 1: Create GitHub Repository

### Option A: Using GitHub Web Interface (Recommended)

1. **Go to GitHub** → [github.com/new](https://github.com/new)

2. **Fill in Repository Details:**
   - Repository name: `Co-Portfolio`
   - Description: `Premium MERN Stack Developer Portfolio with Next.js, React, Tailwind CSS`
   - Visibility: **Public** (for custom domain on Vercel)
   - ✅ DO NOT initialize with README, .gitignore, or license (we already have them)
   - Click **"Create repository"**

3. **Copy the repository URL** (you'll need this in the next step)
   - Look like: `https://github.com/YourUsername/Co-Portfolio.git`

### Option B: Using GitHub CLI

```bash
gh repo create Co-Portfolio --public --source=. --remote=origin --push
```

---

## 📤 Step 2: Push Code to GitHub

### Add Remote and Push

```bash
cd /home/zerosync/Projects/Co-Portfolio

# Add GitHub remote (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/Co-Portfolio.git

# Rename branch to main if needed
git branch -M main

# Push to GitHub
git push -u origin main
```

### Verify Push Success

Visit `https://github.com/YOUR-USERNAME/Co-Portfolio` and confirm:
- ✅ All files are present
- ✅ Recent commits are visible
- ✅ README.md is displayed

---

## 🚀 Step 3: Deploy to Vercel

### Option A: Connect GitHub to Vercel (Automatic Deployment)

1. **Go to Vercel** → [vercel.com/new](https://vercel.com/new)

2. **Sign in with GitHub**
   - Authorize Vercel to access your GitHub account
   - Select "Only select repositories"
   - Choose `Co-Portfolio`

3. **Configure Project**
   - **Project Name**: `co-portfolio` (or your preferred name)
   - **Framework Preset**: Select `Next.js`
   - **Root Directory**: `./` (default)
   - **Environment Variables**: Leave empty (no secrets needed for now)
   - **Build & Output Settings**: Auto-detected ✓

4. **Click "Deploy"**
   - Wait for deployment to complete (2-3 minutes)
   - You'll see a success message with your live URL

### Option B: Using Vercel CLI

```bash
cd /home/zerosync/Projects/Co-Portfolio

# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Follow the prompts:
# - Link to existing project? → No
# - Set project name? → co-portfolio
# - Set directory? → Enter (use default)
# - Want to modify settings? → No
```

---

## 🎯 Step 4: Setup Custom Domain

### Option A: Use Vercel Domains

1. **Go to Vercel Dashboard** → Your Project → Settings → Domains

2. **Add Domain**
   - Click "Add Domain"
   - Choose one of these options:
     - **Buy a .com domain** (recommended cheap option: Vercel offers discounted domains)
     - **Use existing domain** (if you already have one)

3. **Common Domain Names to Consider**
   - `narayanphukan.com`
   - `narayan-portfolio.com`
   - `narayan-dev.com`
   - `np-dev.com`

### Option B: Connect Custom Domain (if you have one)

1. **Buy domain from:**
   - Namecheap
   - GoDaddy
   - Domain.com
   - Google Domains

2. **In Vercel Dashboard:**
   - Go to Settings → Domains
   - Click "Add"
   - Enter your domain name
   - Vercel will show you DNS records to add

3. **Update DNS records** at your domain registrar:
   - Copy records from Vercel
   - Paste in your registrar's DNS settings
   - Wait 24-48 hours for propagation

### Option C: Free Subdomain (Quick Demo)

Vercel gives you a free subdomain:
- Default: `co-portfolio-YOUR-USERNAME.vercel.app`
- You can customize this to: `co-portfolio.vercel.app` or similar

---

## ✅ Post-Deployment Verification

After deployment completes, verify:

```bash
# Test your site is accessible
curl https://your-domain.vercel.app

# Check performance
# - Open site in browser
# - Check all sections load
# - Test mobile responsiveness
# - Test form validation
# - Check smooth animations
```

### Checklist:
- ✅ Site loads without errors
- ✅ Hero section displays correctly
- ✅ Navigation works
- ✅ Projects showcase is visible
- ✅ Skills section renders
- ✅ Contact form is functional
- ✅ Mobile view is responsive
- ✅ Animations are smooth

---

## 🔄 Automatic Deployment Settings

Once connected to GitHub, Vercel will:

1. **Automatically deploy** every time you push to main
2. **Create preview deployments** for pull requests
3. **Show deployment status** in GitHub commits

### Making Updates

To update your portfolio:

```bash
cd /home/zerosync/Projects/Co-Portfolio

# Make changes
# Edit data/portfolio.ts to update content

# Commit and push
git add .
git commit -m "Update portfolio content"
git push origin main

# Vercel automatically deploys!
# Your site updates in 1-2 minutes
```

---

## 📊 Custom Domain Setup with Different Providers

### If you already have a domain:

#### **Namecheap DNS Setup**
1. Go to your Namecheap account → Domain List
2. Click "Manage" on your domain
3. Go to Advanced DNS
4. Add these records:
   ```
   Type: A
   Host: @
   Value: 76.76.19.89
   TTL: 3600
   
   Type: CNAME
   Host: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```
5. Wait 10-30 minutes for DNS propagation

#### **GoDaddy DNS Setup**
1. Go to your GoDaddy domains
2. Click "Manage DNS"
3. Edit A record:
   - Name: `@`
   - Value: `76.76.19.89`
   - TTL: `3600`
4. Add CNAME record:
   - Name: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: `3600`

---

## 🎨 Recommended Custom Domains

For a professional MERN portfolio, consider:

### Premium Options
- `narayanphukan.com` - Personal brand
- `narayan-portfolio.com` - Clear purpose
- `narayan-dev.com` - Developer profile

### Budget-Friendly (.online, .tech, .dev)
- `narayan-dev.tech` - Modern tech vibe
- `narayan.dev` - Short and professional
- `portfolio.narayan.online` - Subdomain approach

### Pricing on Vercel
- `.com` - ~$14/year
- `.dev` - ~$12/year
- `.tech` - ~$5/year

---

## 📱 Environment Variables (If Needed Later)

To add environment variables for the contact form:

1. **In Vercel Dashboard:**
   - Project Settings → Environment Variables
   - Add variables:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
     ```

2. **Redeploy** after adding variables

---

## 🔐 Security Best Practices

- ✅ Keep `.env.local` in `.gitignore` (already done)
- ✅ Never commit secrets to GitHub
- ✅ Use Vercel's environment variables for sensitive data
- ✅ Enable branch protection on main
- ✅ Review PR before merging

---

## 📊 Advanced: Setup Analytics

Monitor your portfolio:

### Google Analytics
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Add tracking code to `app/layout.tsx`:
   ```jsx
   <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`} />
   ```

### Vercel Analytics
1. In Vercel Dashboard → Settings → Analytics
2. Enable "Web Vitals"
3. View performance metrics

---

## 🆘 Troubleshooting

### Deploy fails with "Build error"
```bash
# Clear and rebuild locally first
rm -rf .next
npm run build

# If it builds locally but fails on Vercel,
# check build logs in Vercel Dashboard
```

### Domain not pointing to Vercel
- Verify DNS records in your registrar
- Check Vercel DNS settings
- Wait 24-48 hours for DNS propagation
- Use tools like [DNS Checker](https://dnschecker.org)

### Site shows 404 after deploy
- Vercel sometimes needs redeploy
- In Vercel Dashboard, click "Redeploy"
- Clear browser cache (Ctrl+Shift+Delete)

---

## 🎉 Final Summary

You now have:
- ✅ GitHub repository with all code
- ✅ Automatic deployments on every push
- ✅ Free HTTPS hosting on Vercel
- ✅ Custom domain (optional)
- ✅ Professional portfolio live and public

---

## 📚 Useful Links

- [GitHub Docs](https://docs.github.com)
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Custom Domains on Vercel](https://vercel.com/docs/concepts/projects/domains/add-a-domain)

---

## 🚀 Next Steps

1. **Follow steps above** to push to GitHub
2. **Connect to Vercel** for auto-deployment
3. **Add custom domain** for professional branding
4. **Share your portfolio** with the world!
5. **Keep updating** with new projects and skills

---

**Congratulations! Your portfolio is now live! 🎉**

Your site will be accessible at:
- Default: `https://co-portfolio-YOUR-USERNAME.vercel.app`
- Custom: `https://your-custom-domain.com` (after setup)

---

**Questions?** Check the logs in:
- Vercel Dashboard → Deployments → Logs
- GitHub → Actions (if using GitHub Actions)
