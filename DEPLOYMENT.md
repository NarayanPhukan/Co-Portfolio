# Deployment Guide

Complete instructions for deploying your portfolio to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the official Next.js deployment platform - fastest and easiest option.

### Steps:

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site is live! ✨

3. **Custom Domain**
   - Go to project settings
   - Click "Domains"
   - Add your custom domain
   - Update DNS records (follow Vercel's instructions)

### Environment Variables:
1. Go to Project Settings → Environment Variables
2. Add any required environment variables
3. Redeploy if needed

---

## 🌍 Netlify

Easy deployment with great CI/CD features.

### Steps:

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"
   - Select your repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`
   - Click "Deploy"

3. **Using Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Configuration File:
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"
  
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## ☁️ AWS Amplify

Full AWS integration for advanced deployment needs.

### Steps:

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Amplify**
   ```bash
   amplify init
   ```

3. **Add hosting**
   ```bash
   amplify add hosting
   # Select "Hosting with Amplify console"
   ```

4. **Deploy**
   ```bash
   amplify publish
   ```

---

## 📦 Docker Deployment

Deploy using Docker for consistency across environments.

### Create Dockerfile:
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
EXPOSE 3000
CMD ["npm", "start"]
```

### Build and Run:
```bash
docker build -t portfolio:latest .
docker run -p 3000:3000 portfolio:latest
```

---

## 🐧 Linux/VPS (Manual Deployment)

Deploy on your own VPS or Linux server.

### Requirements:
- Node.js 18+
- npm or yarn
- PM2 (for process management)

### Steps:

1. **Connect to Server**
   ```bash
   ssh user@your-server.com
   ```

2. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Build**
   ```bash
   npm run build
   ```

5. **Install PM2**
   ```bash
   npm install -g pm2
   ```

6. **Start with PM2**
   ```bash
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

7. **Setup Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

8. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

---

## 🏢 DigitalOcean

Easy VPS hosting with good documentation.

### Steps:

1. **Create Droplet**
   - Go to [digitalocean.com](https://digitalocean.com)
   - Create new Droplet (Ubuntu 22.04)
   - Select Basic plan ($5-6/month)
   - Add SSH key

2. **Initial Setup**
   ```bash
   ssh root@your-droplet-ip
   
   # Update system
   apt update && apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install Nginx
   apt install nginx -y
   
   # Start Nginx
   systemctl start nginx
   systemctl enable nginx
   ```

3. **Deploy Application**
   ```bash
   cd /var/www
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   npm install
   npm run build
   pm2 start npm --name "portfolio" -- start
   ```

4. **Configure Nginx** (see Linux/VPS section)

---

## 🟢 Railway

Simple and fast deployment platform.

### Steps:

1. **Go to [railway.app](https://railway.app)**
2. **Create new project**
3. **Deploy from GitHub**
   - Connect your GitHub account
   - Select your repository
   - Railway auto-detects Next.js
4. **Configure environment variables** (if needed)
5. **Preview deployment**
6. **Add custom domain**

---

## 💚 Render

Excellent for hobby projects.

### Steps:

1. **Go to [render.com](https://render.com)**
2. **Create web service**
3. **Connect GitHub repository**
4. **Configure**
   - Build command: `npm install && npm run build`
   - Start command: `npm run start`
5. **Deploy**

---

## 🔧 GitHub Pages (Static Export)

For static deployment without backend API.

### Steps:

1. **Update next.config.js**
   ```javascript
   const nextConfig = {
     output: 'export',
     reactStrictMode: true,
   };
   ```

2. **Build static**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npx gh-pages -d out
   ```

---

## 🌐 Custom Domain Setup

### Update DNS Records:

For most providers (Vercel, Netlify, etc.):
1. Go to your domain registrar
2. Update DNS settings to point to provider
3. Add DNS records as instructed
4. Wait for DNS propagation (5 min - 48 hours)

### Common DNS Records:

**A Record:**
```
Type: A
Name: @
Value: provider's IP
TTL: 3600
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: yourdomain.com
TTL: 3600
```

---

## ✅ Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Verify social links work
- [ ] Test on different browsers
- [ ] Check page load speed
- [ ] Setup analytics
- [ ] Setup SSL certificate
- [ ] Enable compression
- [ ] Test 404 page
- [ ] Verify sitemap.xml
- [ ] Submit to Search Engines

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm install
npm run build
```

### Port Issues
- Try different port: `PORT=3001 npm run dev`
- Check if port is in use: `lsof -i :3000`

### Memory Issues
- Increase Node memory: `NODE_OPTIONS="--max-old-space-size=4096" npm run build`

### DNS Not Resolving
- Wait for DNS propagation
- Clear browser cache
- Try different DNS server (1.1.1.1)

---

## 📊 Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress images
   - Use Next.js Image component

2. **Enable Caching**
   - Set cache headers
   - Use CDN

3. **Minify Code**
   - Next.js does this automatically
   - Verify in production build

4. **Monitor Performance**
   - Use PageSpeed Insights
   - Monitor with Analytics

---

## 🔒 Security Best Practices

- [ ] Keep dependencies updated: `npm update`
- [ ] Use environment variables for secrets
- [ ] Enable HTTPS/SSL
- [ ] Set security headers
- [ ] Keep backups
- [ ] Monitor for vulnerabilities: `npm audit`

---

**Happy Deploying! 🚀**
