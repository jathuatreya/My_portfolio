# 🚀 Jathushan Varnakulasingam - Portfolio

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

**A modern, responsive, and visually stunning portfolio showcasing my journey as a Full-Stack Developer, ML Enthusiast, and IoT Innovator**

[Live Demo](https://jathuatreya.github.io) • [Report Bug](https://github.com/jathuatreya/my-portfolio/issues) • [Request Feature](https://github.com/jathuatreya/my-portfolio/issues)

</div>

---

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, premium design with smooth animations and transitions
- 🌓 **Dark/Light Mode** - Fully functional theme switcher with persistent preferences
- 🌍 **Multi-Language Support** - English, Tamil (தமிழ்), and Sinhala (සිංහල)
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop, 4K)
- ⚡ **Performance Optimized** - Lightning-fast load times with Next.js 16
- 🎭 **Advanced Animations** - Beautiful scroll animations and interactive elements
- 🧩 **Modular Components** - Reusable, maintainable component architecture
- 🎯 **SEO Optimized** - Complete meta tags and Open Graph support
- 💫 **Interactive Elements** - Magic cards, liquid ether background effects, and more
- 📧 **Contact Form** - Integrated contact form with toast notifications
- 📝 **Blog Section** - Showcase your articles and writings
- 💼 **Projects Showcase** - Highlight your best work with detailed information
- ⭐ **Testimonials** - Display client reviews and recommendations

---

## 🛠️ Tech Stack

### Core
- **Framework**: [Next.js 16](https://nextjs.org/) (React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)

### Libraries & Tools
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
- **3D Graphics**: [Three.js](https://threejs.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Code Quality**: ESLint, TypeScript
- **Compiler**: React Compiler (Babel Plugin)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** 18.x or higher
- **npm** or **yarn** or **pnpm** or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jathuatreya/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio in action!

---

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── Skills.tsx
│   │   ├── Testimonials.tsx
│   │   ├── MagicCard.tsx    # Interactive card component
│   │   ├── LiquidEther.tsx  # Animated background
│   │   └── ...
│   ├── context/             # React context providers
│   │   └── LanguageContext.tsx
│   ├── data/                # Portfolio data
│   │   └── portfolio-data.ts
│   ├── i18n/                # Internationalization
│   │   └── locales/
│   │       ├── en.json
│   │       ├── ta.json
│   │       └── si.json
│   ├── utils/               # Utility functions
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── public/                  # Static assets
│   ├── my_image3.png
│   ├── jathushan.png
│   └── cv.pdf
├── tailwind.config.ts       # Tailwind configuration
├── next.config.ts           # Next.js configuration
└── package.json
```

---

## 🎨 Customization

### Update Personal Information

Edit `app/data/portfolio-data.ts` to customize:

```typescript
export const profile = {
  name: "Your Name",
  slogan: "Your Slogan",
  shortBio: "Your bio...",
  // ... more fields
}
```

### Modify Theme Colors

Update `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #1D1D1F;
  --primary: #0077ED;  /* Change primary color */
}
```

### Add/Remove Sections

Simply import/remove components in `app/page.tsx`:

```tsx
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* Add or remove sections here */}
    </>
  )
}
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jathuatreya/my-portfolio)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Other Platforms

- **Netlify**: Connect your GitHub repo
- **GitHub Pages**: Use `next export` (requires static export configuration)
- **AWS Amplify**: Auto-deploy from your repository

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🎯 Key Sections

### 🏠 Hero Section
- Dynamic typing animation showcasing multiple roles
- Animated liquid ether background
- Social media links
- Professional profile image

### 👨‍💻 About Section
- Personal bio and background
- Key statistics (experience, projects, technologies, ML models)
- Professional highlights

### 🛠️ Skills Section
- Technology categories (Web Dev, IoT, AI/ML)
- Complete tech stack with interactive badges
- Future goals and vision

### 💼 Services Section
- Offered services with icons
- Detailed descriptions
- Professional presentation

### 🚀 Projects Section
- Project showcase with images
- Tech stack tags
- Feature highlights
- Demo and code links

### ⭐ Testimonials Section
- Client reviews and ratings
- Professional testimonials
- Avatar and role display

### 📧 Contact Section
- Contact form
- Email, phone, location info
- Interactive cards with hover effects

---

## 🌍 Multi-Language Support

The portfolio supports three languages:
- 🇬🇧 **English** (en)
- 🇱🇰 **Tamil** (ta)
- 🇱🇰 **Sinhala** (si)

Translation files are located in `app/i18n/locales/`.

---

## 🎨 Design System

### Color Palette
- **Primary**: `#0077ED` (Blue)
- **Background Light**: `#FFFFFF`
- **Background Dark**: `#0a0a0a`
- **Card Light**: `#F5F5F7`
- **Card Dark**: `#121212`

### Typography
- **Font Family**: Geist Sans, Geist Mono
- **Headings**: Bold, tracking-tight
- **Body**: Normal weight, relaxed leading

---

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ (Performance)
- 🎨 **First Contentful Paint**: < 1.5s
- 📦 **Bundle Size**: Optimized with Next.js 16
- 🚀 **Server Components**: Maximized for performance

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 💬 Contact

**Jathushan Varnakulasingam**

- 🌐 Website: [jathuatreya.github.io](https://jathuatreya.github.io)
- 💼 LinkedIn: [Jathushan Varnakulasingam](https://www.linkedin.com/in/jathushan-varnakulasingam-18a551271/)
- 🐙 GitHub: [@jathuatreya](https://github.com/jathuatreya/)
- 🐦 Twitter: [@jathushanstark](https://x.com/jathushanstark)
- 📧 Email: jathushan@example.com

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Unsplash](https://unsplash.com) for images

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [Jathushan Varnakulasingam](https://github.com/jathuatreya)

</div>
