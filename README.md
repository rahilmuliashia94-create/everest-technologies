# Everest Security Website

A modern, feature-rich multi-page website for Everest Security Pvt. Ltd. - a leading security solutions provider with Israeli technology expertise.

![Everest Security](https://img.shields.io/badge/Everest-Security-blue)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-06B6D4?logo=tailwindcss)

## 🌐 Live Demo

**GitHub Pages:** [https://yourusername.github.io/everest-security-website/](https://yourusername.github.io/everest-security-website/)

## ✨ Features

### Website Pages
- **Home** - Hero section, features, stats, CTA
- **About** - Company profile, team, certifications, history
- **Products** - 16+ security products with categories and filters
- **Services** - 6 comprehensive security services with case studies
- **Sectors** - Industry-specific solutions (Banking, Logistics, Industrial, etc.)
- **Contact** - Contact form, multiple locations, FAQ
- **Login** - Client portal login page
- **Client Dashboard** - Full client portal with invoices, payments, and account management

### Client Dashboard Features
- **Overview** - Account summary, recent invoices, notifications
- **Invoices** - View all invoices, download PDFs, pay online
- **Payments** - Payment history and transaction records
- **Profile** - Account information and plan details

### Technical Features
- React 18 with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- shadcn/ui components
- Responsive design for all devices
- Smooth animations and transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/everest-security-website.git
cd everest-security-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   └── images/                 # Product images and assets
├── src/
│   ├── components/
│   │   └── ui/                 # shadcn/ui components
│   ├── pages/
│   │   ├── Home.tsx            # Home page
│   │   ├── About.tsx           # About page
│   │   ├── Products.tsx        # Products page
│   │   ├── Services.tsx        # Services page
│   │   ├── Sectors.tsx         # Sectors page
│   │   ├── Contact.tsx         # Contact page
│   │   ├── Login.tsx           # Client login page
│   │   └── ClientDashboard.tsx # Client dashboard
│   ├── sections/
│   │   ├── TopBar.tsx          # Top contact bar
│   │   ├── Navigation.tsx      # Main navigation
│   │   └── Footer.tsx          # Footer section
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🌐 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `everest-security-website`
2. Make it public
3. Don't initialize with README (we already have one)

### Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote (replace with your username)
git remote add origin https://github.com/yourusername/everest-security-website.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section (or click "Pages" in the left sidebar)
4. Under "Build and deployment", select **GitHub Actions** as the source
5. The workflow will automatically deploy your site

### Step 4: Access Your Live Site

Your site will be available at:
```
https://yourusername.github.io/everest-security-website/
```

## 🔑 Demo Credentials

For testing the client dashboard:
- **Username:** `demo`
- **Password:** `demo123`

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `src/index.css`:
```css
--everest-blue: #003366;
--everest-blue-light: #004080;
--everest-blue-dark: #001A33;
--everest-orange: #FF6600;
```

### Adding Products
Edit `src/pages/Products.tsx` and add new items to the `products` array.

### Updating Contact Information
Edit `src/pages/Contact.tsx` to update addresses, phone numbers, and emails.

## 📞 Support

For support, email info@everestsecurityonline.com or call +91 9624696247.

## 📄 License

This project is proprietary and belongs to Everest Security Pvt. Ltd.

---

**Everest Security Pvt. Ltd.**
- Head Office: Everest House, R.K. Park, 150 Feet Ring Road, Rajkot - 360004, Gujarat, India
- Phone: +91 9624696247 / +91 9624796248
- Email: info@everestsecurityonline.com
- Website: [www.everestsecurityonline.com](https://www.everestsecurityonline.com)
