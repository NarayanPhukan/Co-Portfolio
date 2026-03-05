# Narayan Phukan - Professional MERN Portfolio

A premium, fully-responsive portfolio website built with **Next.js**, **React**, **Tailwind CSS**, and **Framer Motion**. Showcasing expertise in full-stack development with the MERN stack.

## 🌟 Features

- **Modern Design**: Clean, professional, and premium UI/UX
- **Responsive**: Works seamlessly on all devices (mobile, tablet, desktop)
- **Smooth Animations**: Engaging animations using Framer Motion
- **Performance Optimized**: Built with Next.js for optimal speed and SEO
- **Dark Theme**: Professional dark theme with accent colors
- **Multiple Sections**:
  - Hero/Landing Section
  - About Me
  - Technical Skills
  - Featured Projects
  - Professional Experience
  - Testimonials
  - Contact Form
  - Social Links

## 🛠️ Tech Stack

- **Frontend**: React 18, Next.js 14, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Type Safety**: TypeScript
- **Font**: Poppins, Sora (Google Fonts)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Setup

1. **Clone or download the repository**
```bash
cd Co-Portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Personal Information
Edit `/data/portfolio.ts` to update:
- Name, title, and description
- Email, phone, and social links
- Skills, projects, experience, and testimonials

```typescript
export const portfolioData = {
  name: 'Your Name',
  title: 'Your Title',
  // ... other fields
};
```

### Modify Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: '#0f172a',
  secondary: '#1e293b',
  accent: '#3b82f6',
  'accent-light': '#60a5fa',
}
```

### Update Projects
Add or modify projects in `/data/portfolio.ts`:
```typescript
export const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: '...',
    image: 'image-url',
    tech: ['React', 'Node.js', '...'],
    github: 'github-url',
    live: 'live-url',
    featured: true,
  },
];
```

## 📁 Project Structure

```
Co-Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects showcase
│   ├── Experience.tsx      # Experience timeline
│   ├── Testimonials.tsx    # Client testimonials
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── data/
│   └── portfolio.ts        # Portfolio data
├── public/                 # Static assets
├── next.config.mjs         # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── README.md              # This file
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Import your repository
   - Deploy!

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Connect to Netlify**
   - Drag and drop the `.next/` or `out/` folder to Netlify
   - Or connect your GitHub repository for auto-deployment

### Deploy to Other Platforms

The project can be deployed to any platform that supports Node.js:
- AWS Amplify
- Heroku
- DigitalOcean
- Railway
- etc.

## 🌐 Custom Domain

1. Update the domain in your hosting provider's DNS settings
2. Update the `portfolio` field in `/data/portfolio.ts` with your domain
3. Update `alternates.canonical` in `app/layout.tsx`

## 📧 Contact Form Integration

The contact form currently logs messages to the console. To integrate with an email service:

### Option 1: EmailJS
```typescript
import emailjs from '@emailjs/browser';

// In the handleSubmit function:
emailjs.send('service_id', 'template_id', formData)
```

### Option 2: API Route
Create `/app/api/contact/route.ts`:
```typescript
export async function POST(request: Request) {
  // Handle email sending
}
```

### Option 3: Third-party Service
Use services like:
- SendGrid
- Mailgun
- Resend

## ✨ Performance Optimization

- **Image Optimization**: Uses Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **CSS Optimization**: PurgeCSS with Tailwind
- **SEO**: Built-in metadata and Open Graph tags

## 🔍 SEO

The portfolio is SEO optimized with:
- Proper meta tags
- Open Graph tags
- Structured data (JSON-LD ready)
- Sitemap support
- Mobile-friendly design

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 📞 Support

For questions or issues, feel free to reach out:
- Email: narayan@example.com
- GitHub: [@NarayanPhukan](https://github.com/NarayanPhukan)
- LinkedIn: [Narayan Phukan](https://linkedin.com/in/NarayanPhukan)

---

**Made with ❤️ by Narayan Phukan**
