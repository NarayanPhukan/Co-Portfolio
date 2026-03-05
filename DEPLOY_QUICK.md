# Quick Deployment Guide

> **TL;DR**: Follow these 3 steps to go live with your portfolio

## Step 1: Push to GitHub (2-3 minutes)

Run the automated deployment script:

```bash
cd /home/zerosync/Projects/Co-Portfolio
./deploy.sh
```

Or manually push:

```bash
git remote add origin https://github.com/YOUR-USERNAME/Co-Portfolio.git
git branch -M main
git push -u origin main
```

**What you need**: Your GitHub username

**Result**: Your code appears at `github.com/YOUR-USERNAME/Co-Portfolio`

---

## Step 2: Deploy to Vercel (3-5 minutes)

1. Go to **https://vercel.com/new**
2. Click **"Import Project"**
3. Authorize GitHub access
4. Select **"Co-Portfolio"** repository
5. Click **"Deploy"**

Vercel automatically detects it's a Next.js project and configures everything.

**Result**: Live portfolio at `co-portfolio-[username].vercel.app`

---

## Step 3: Add Custom Domain (Optional)

**Choose one:**

### Option A: Buy Domain on Vercel ($12-15/year)
1. In Vercel Dashboard → Settings → Domains
2. Click "Add Domain"
3. Purchase domain (`.com`, `.dev`, `.tech` available)

### Option B: Use Existing Domain
1. Update DNS records to point to Vercel
2. Add domain in Vercel settings

### Option C: Free Vercel Subdomain
Keep `co-portfolio-[username].vercel.app`

---

## Current Status

| Step | Status | Command |
|------|--------|---------|
| Git Initialized | ✅ | `git status` shows 0 commits ahead |
| Code Committed | ✅ | 32 files, commit 93b9810 |
| Push to GitHub | ⏳ | `./deploy.sh` |
| Vercel Deploy | ⏳ | vercel.com/new |
| Custom Domain | ⏳ | Vercel Dashboard |

---

## Troubleshooting

**Q: "Repository not found" when pushing?**
- Ensure: `github.com/YOUR-USERNAME/Co-Portfolio` exists and is public
- Check: Username matches exactly (case-sensitive)

**Q: Vercel import shows no commits?**
- Run: `git log` to verify commits exist locally
- GitHub sync might take 1-2 minutes

**Q: Want to update after deployment?**
- Make local changes
- Run: `git add . && git commit -m "..."` 
- Run: `git push`
- Vercel redeploys automatically in 1-2 minutes

---

## Files to Know

| File | Purpose |
|------|---------|
| `deploy.sh` | Interactive GitHub push helper |
| `vercel.json` | Vercel deployment config |
| `GITHUB_VERCEL_SETUP.md` | Detailed 400-line guide |
| `package.json` | nextjs, react, tailwindcss, framer-motion |
| `.eslintrc.json` | Code quality rules |

---

**👉 Next Action**: Run `./deploy.sh` to push your code to GitHub!
