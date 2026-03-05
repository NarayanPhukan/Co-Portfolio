# Quick Start Guide

Get your premium MERN portfolio up and running in 5 minutes!

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## ✏️ Essential Customization

### Step 1: Update Your Information
Edit `data/portfolio.ts`:

```typescript
export const portfolioData = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description',
  email: 'your@email.com',
  phone: 'Your Phone',
  location: 'Your Location',
  github: 'https://github.com/yourprofile',
  linkedin: 'https://linkedin.com/in/yourprofile',
  twitter: 'https://twitter.com/yourprofile',
  portfolio: 'https://yourportfolio.com',
};
```

### Step 2: Add Your Projects
Still in `data/portfolio.ts`, update the projects array:

```typescript
export const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    image: 'https://your-image-url.com/image.jpg',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourprofile/project',
    live: 'https://yourproject.com',
    featured: true,
  },
  // Add more projects...
];
```

### Step 3: Update Skills
Add your skills in `data/portfolio.ts`:

```typescript
export const skills = [
  {
    name: 'Frontend Development',
    icon: '⚛️',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  // More skills...
];
```

### Step 4: Update Experience
Add your work experience in `data/portfolio.ts`:

```typescript
export const experience = [
  {
    id: 1,
    company: 'Company Name',
    position: 'Your Position',
    duration: '2022 - Present',
    description: 'What you did',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
    ],
  },
  // More experiences...
];
```

## 🎨 Customization Options

### Change Color Scheme
Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#0f172a',      // Dark background
  secondary: '#1e293b',    // Secondary color
  accent: '#3b82f6',       // Blue accent
  'accent-light': '#60a5fa', // Light blue
}
```

Popular color combinations:
- **Purple**: accent: '#a855f7', accent-light: '#c084fc'
- **Green**: accent: '#10b981', accent-light: '#34d399'
- **Pink**: accent: '#ec4899', accent-light: '#f472b6'
- **Orange**: accent: '#f97316', accent-light: '#fb923c'

### Add New Sections
Create a new component in `components/YourSection.tsx` and import it in `app/page.tsx`.

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy!

## 📧 Setup Contact Form

The form currently logs to console. To enable email:

### Option A: Use EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create service & template
3. Add to your `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=public_key
```
4. Install EmailJS: `npm install @emailjs/browser`
5. Update Contact.tsx component

### Option B: Use Backend API
1. Update the API route in `app/api/contact/route.ts`
2. Integrate with your email service
3. Deploy backend alongside

## 🔍 SEO Setup

1. Update metadata in `app/layout.tsx`
2. Update site URL in portfolio data
3. Submit sitemap to Google Search Console
4. Add analytics (Google Analytics)

## 📱 Testing Responsive Design

```bash
# Open DevTools (F12 or Right-click → Inspect)
# Click device toggle (mobile icon)
# Test on different screen sizes
```

## 🐛 Common Issues

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Module not found
```bash
npm install
rm -rf .next
npm run dev
```

### Styles not loading
Clear Tailwind cache:
```bash
rm -rf .next
npm run build
```

## 📚 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🎯 Next Steps

1. ✅ Customize your information
2. ✅ Add your projects
3. ✅ Test locally
4. ✅ Deploy to Vercel
5. ✅ Setup custom domain
6. ✅ Configure email/contact
7. ✅ Add analytics

## 💡 Tips

- Use high-quality project images (500x400px recommended)
- Keep descriptions concise and impactful
- Update portfolio regularly with new projects
- Monitor analytics to understand visitor behavior
- Keep social links up to date

---

**Need help?** Check the main README.md for more detailed information!
