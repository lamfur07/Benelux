# CIPRES AGENCY - Web Agency Template

> Professional, modern web agency template built with Astro 5, React 19, and Tailwind CSS v4. Features advanced animations, responsive design, and a complete contact system with server-side validation.

[![Astro](https://img.shields.io/badge/Astro-5.16-FF5D01?logo=astro)](https://astro.build/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)

---

## 📑 Table of Contents

1. [Features](#-features)
2. [Tech Stack](#-tech-stack)
3. [Quick Start](#-quick-start)
4. [Project Structure](#-project-structure)
5. [Pages](#-pages)
6. [Components](#-components)
7. [Configuration Files](#-configuration-files)
8. [Contact Form](#-contact-form)
9. [Deployment](#-deployment)
10. [Environment Variables](#-environment-variables)
11. [SEO Management](#-seo-management)
12. [Customization](#-customization)
13. [Animations](#-animations)
14. [Content Management](#-content-management)
15. [Things to Keep in Mind](#-things-to-keep-in-mind)
16. [Resources](#-resources)
17. [System Requirements](#-system-requirements)
18. [Known Limitations](#-known-limitations)
19. [Support](#-support)

---

## ✨ Features

### Core Features

- ⚡ **Ultra-fast Performance** - Built with Astro 5 for optimal loading speeds
- 🎨 **Modern Design** - Contemporary UI with Tailwind CSS v4
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🔄 **Smooth Animations** - GSAP-powered professional transitions
- 🌐 **SEO Optimized** - Complete meta tags, sitemap, and robots.txt
- ♿ **Accessible** - WCAG compliant components

### Advanced Features

- 🔒 **Secure Contact Form** - Server-side validation with Zod + email delivery via Resend
- 📧 **Email Integration** - Resend API for reliable email delivery
- 🎯 **React Islands** - Selective hydration for maximum efficiency
- 🌍 **Centralized Content** - All text content managed in `labels.ts` for easy updates
- 📊 **Type-Safe Configuration** - TypeScript-powered config files for services, team, testimonials
- 🎭 **Smooth Scrolling** - Lenis integration for buttery-smooth scroll experience

---

## 🛠️ Tech Stack

### Framework & Core

- **[Astro 5.16](https://astro.build/)** - Static Site Generator with SSR
- **[React 19.2](https://react.dev/)** - Interactive islands
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4.1](https://tailwindcss.com/)** - Utility-first styling

### Libraries & Tools

- **[GSAP 3.14](https://greensock.com/gsap/)** - Professional animations
- **[Lenis 1.3](https://lenis.darkroom.engineering/)** - Smooth scrolling
- **[class-variance-authority](https://cva.style/)** - Component variants
- **[Resend](https://resend.com/)** - Email API
- **[Lucide Icons](https://lucide.dev/)** - Icon system
- **[clsx](https://github.com/lukeed/clsx)** + **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Conditional class utilities

### Deployment

- **[Vercel Adapter](https://docs.astro.build/en/guides/integrations-guide/vercel/)** - SSR deployment with edge functions
- **[Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** - Automatic sitemap generation

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.14.1 or higher
- npm 9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd cipres-agency

# Install dependencies
npm install

# Set up environment variables (optional for basic usage)
cp .env.template .env
# Edit .env with your credentials if using contact form

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

---

## 📂 Project Structure

```
cipres-agency/
├── src/
│   ├── actions/           # Server actions (contact form)
│   ├── assets/            # Optimized images and media
│   ├── components/
│   │   ├── sections/      # Page-specific sections
│   │   ├── ui/            # Reusable UI components
│   │   └── common/        # Shared components (BaseHead, etc.)
│   ├── config/            # Static data (labels, nav, services, etc.)
│   ├── content/           # Project markdown files
│   ├── hooks/             # Custom React hooks
│   ├── icons/             # Custom icons
│   ├── layouts/           # Base page layouts
│   ├── lib/               # Utility functions
│   ├── pages/             # Application routes
│   ├── styles/            # Global CSS and Tailwind config
│   └── content.config.ts  # Content configuration file
├── public/                # Static files (served as-is)
├── astro.config.mjs       # Astro configuration
└── package.json           # Dependencies
```

---

## 📄 Pages

### 1. Homepage (`/`)

- Hero section with animated headline
- Services showcase
- Featured projects
- Work process timeline
- Client testimonials
- CTA section

### 2. About (`/about`)

- Hero section with company overview
- Mission statement
- Expertise areas showcase
- Team members grid
- CTA section

### 3. Projects (`/projects`)

- Portfolio showcase grid
- Individual project pages with details
- CTA section

### 4. Contact (`/contact`)

- Contact form with validation
- Company information
- FAQ section

### 5. Legal Pages

- **Terms of Service** (`/terms`)
- **Privacy Policy** (`/privacy`)
- **404 Error Page** (`/404`)

---

## 🧩 Components

The project follows a modular component architecture with clear separation:

- **UI Components** (`ui/`): Reusable building blocks (Button, Card, etc.)
- **Section Components** (`sections/`): Page-specific sections (Hero, Services, etc.)
- **Common Components** (`common/`): Shared functionality (BaseHead, Navbar, Footer)

### Quick Reference

| Component | Type | Usage | Location |
|-----------|------|-------|----------|
| Button | UI | CTA buttons | `ui/buttons/Button.astro` |
| Navbar | Navigation | Site header | `common/Navbar.astro` |
| Footer | Navigation | Site footer | `common/Footer.astro` |
| Hero | Section | Homepage hero | `sections/home/Hero.astro` |
| ContactForm | Section | Contact form | `sections/contact/ContactForm.astro` |

---

## ⚙️ Configuration Files

The project uses multiple configuration files in `src/config/` to manage different aspects of the website. All files export TypeScript types for type safety.

### 1. Navigation (`navItems.json.ts`)

Defines navigation links for navbar and footer.

```typescript
export type NavItem = {
  title: string;
  href: string;
  icon?: typeof Icon;
};

export const navItems: NavItem[] = [
  { title: "Home", href: "/", icon: House },
  { title: "Projects", href: "/projects", icon: Folder },
  { title: "About Us", href: "/about", icon: Info },
  { title: "Contact Us", href: "/contact", icon: Mail },
];

export const footerOtherItems: NavItem[] = [
  { title: "Term of Use", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "FAQ", href: "/contact/#faq" },
];
```

**Used in:** `Navbar.astro`, `FullscreenMenu.tsx`, `Footer.astro`, `404.astro`

---

### 2. Social Links (`socialLinks.json.ts`)

Social media and contact links for footer and contact page.

```typescript
export type SocialLink = {
  name: string;
  href: string;
  icon: typeof Icon;
};

export const socialLinks: SocialLink[] = [
  { name: "Instagram", href: "https://instagram.com/...", icon: Instagram },
  { name: "Twitter", href: "https://twitter.com/...", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/...", icon: Linkedin },
];
```

**Used in:** `Footer.astro`, `ContactForm.astro`, `FullscreenMenu.tsx`

---

### 3. Services (`services.json.ts`)

Services displayed on homepage.

```typescript
export type Service = {
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    features: ["React", "Astro", "Node.js"],
  },
  // ... more services
];
```

**Used in:** `ServicesSection.astro`

---

### 4. Team Members (`team.json.ts`)

Team members displayed on About page.

```typescript
export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio?: string;
};

export const team: TeamMember[] = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/images/team/john.jpg",
  },
  // ... more team members
];
```

**Used in:** `TeamSection.astro`

---

### 5. Testimonials (`testimonials.json.ts`)

Client testimonials for homepage.

```typescript
export type Testimonial = {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Jane Smith",
    role: "CTO",
    company: "Tech Corp",
    content: "Excellent work and professional service",
  },
  // ... more testimonials
];
```

**Used in:** `TestimonialsSection.astro`

---

### 6. FAQ (`faq.json.ts`)

Frequently asked questions.

```typescript
export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "How long does a typical project take?",
    answer: "Most projects take 4-8 weeks depending on complexity...",
  },
  // ... more FAQs
];
```

**Used in:** `FaqSection.astro`

---

### 7. Work Process (`workProcess.json.ts`)

Steps in the work process timeline.

```typescript
export type WorkStep = {
  number: string;
  title: string;
  description: string;
};

export const workSteps: WorkStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your needs and goals",
  },
  // ... more steps
];
```

**Used in:** `ProcessSection.astro`

---

### 8. Expert Areas (`expertAreas.json.ts`)

Areas of expertise for About page.

```typescript
export type ExpertArea = {
  number: string;
  title: string;
  description: string;
};

export const expertAreas: ExpertArea[] = [
  {
    number: "01",
    title: "AI Development",
    description: "Cutting-edge AI solutions",
  },
  // ... more areas
];
```

**Used in:** `ExpertSection.astro`

---

### 9. Translations (`labels.ts`)

All text content and translations for the website.

```typescript
export const labels = {
  // Navigation
  'company.name': 'Benelux Global Solutions',
  
  // Hero Section
  'index.hero.headline.we.are': 'WE ARE',
  'index.hero.headline.full.service': 'FULL-SERVICE',
  
  // Meta tags (SEO)
  'meta.index.title': 'Benelux Global Solutions',
  'meta.index.description': 'Full-stack software agency...',
  'meta.index.keywords': 'Web Development, React, Astro...',
  
  // ... more labels
} as const;
```

**Usage in components:**

```astro
---
import { t } from '@/lib/utils';
---
<h1>{t('index.hero.headline.we.are')}</h1>
<title>{t('meta.index.title')}</title>
```

**Used in:** All pages and components for text content

---

## 📧 Contact Form

The contact form is powered by **Astro Actions** with server-side validation and **Resend** for email delivery.

### Features

- ✅ Server-side validation with Zod
- ✅ Email delivery via Resend API
- ✅ Loading states
- ✅ Error handling
- ✅ Success feedback
- ✅ Ready for rate limiting with Upstash Redis

### Input Validation

Zod schema validation:

```typescript
input: z.object({
  name: z.string().min(3, "First name is required").max(30, "First name must be at most 30 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(500, "Message must be at most 500 characters"),
  company: z.string().optional(), // Honeypot field
}),
```

### Honeypot Anti-Spam

Hidden field that bots fill but humans don't see:

```typescript
// In form
<input
  type="text"
  name="company"
  style="position:absolute;left:-9999px;width:1px;height:1px;"
  tabindex="-1"
  autocomplete="off"
  aria-hidden="true"
/>

// In action
company: z.string().optional(), // Honeypot field

if (company) {
  throw new ActionError({
    code: "BAD_REQUEST",
    message: "Invalid submission detected",
  });
}
```

### Email Integration (Resend)

Configure in `.env`:

```env
RESEND_API_KEY=re_your_api_key
RESEND_EMAIL=onboarding@resend.dev
FROM_EMAIL=your-email@example.com
```

### Rate Limiting with Upstash Redis (Optional)

**30-second cooldown** between submissions per IP address using Redis for distributed rate limiting.

#### Setup

1. Create a free account at [Upstash](https://upstash.com/).
2. Create a Redis database.
3. Add your credentials to your `.env` file:
   ```env
   UPSTASH_REDIS_REST_URL=your_url_here
   UPSTASH_REDIS_REST_TOKEN=your_token_here
2. Implementation in actions/index.ts

To enable the speed limit, locate the action/index.ts file and uncomment the relevant sections as shown below:

```typescript
import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";
import { z } from 'astro:schema';
// import { Redis } from "@upstash/redis";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const resendEmail = import.meta.env.RESEND_EMAIL;
const fromEmail = import.meta.env.FROM_EMAIL;

// Initialize Redis with Upstash
// const redis = new Redis({
//   url: import.meta.env.UPSTASH_REDIS_REST_URL,
//   token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
// });

// Rate limiting configuration
// const RATE_LIMIT_WINDOW = 30; // seconds
// const MAX_REQUESTS = 1; // requests allowed in the window

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(3, "First name is required").max(30, "First name must be at most 30 characters"),
      email: z.string().email("Invalid email address"),
      message: z.string().min(10, "Message must be at least 10 characters").max(500, "Message must be at most 500 characters"),
      company: z.string().optional(), // Honeypot field
    }),
    handler: async ({ name, email, message, company }, context) => {

      // 1. Honeypot check
      if (company) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Invalid submission detected",
        });
      }

      // 2. Rate limiting with Redis
      // const ip = context.request.headers.get("x-forwarded-for") ||
      //   context.request.headers.get("x-real-ip") ||
      //   "unknown";

      // const rateLimitKey = `rate_limit:contact:${ip}`;

      // try {
        // Get the current counter
        // const current = await redis.get<number>(rateLimitKey);

        // if (current !== null && current >= MAX_REQUESTS) {
          // Get the remaining time until the key expires
          // const ttl = await redis.ttl(rateLimitKey);

        //   throw new ActionError({
        //     code: "TOO_MANY_REQUESTS",
        //     message: `Please wait ${ttl} seconds before sending another message`,
        //   });
        // }

        // Increment the counter
        // const newCount = await redis.incr(rateLimitKey);

        // If it's the first request, set the TTL
        // if (newCount === 1) {
        //   await redis.expire(rateLimitKey, RATE_LIMIT_WINDOW);
        // }

      // } catch (error) {
        // If it's our ActionError of rate limit, re-throw it
        // if (error instanceof ActionError) {
        //   throw error;
        // }
        // If it's another Redis error (connection, etc), log it but continue
        // console.error("Redis connection error:", error);
      // }

      // 3. Send email
      const { data, error } = await resend.emails.send({
        from: resendEmail,
        to: fromEmail,
        subject: `New Contact from ${name}`,
        html: `
              <h2>New Contact Message</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        text: `New Contact Message\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });

      if (error) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to send email. Please try again later.",
        });
      }

      return { success: true, message: "Email sent successfully!", data: data.id };
    },
  }),
};

```
**Why Redis?**

- ✅ Distributed rate limiting (works across multiple servers)
- ✅ Automatic key expiration
- ✅ Persistent storage
- ✅ Free tier available

**Email template** can be customized in `src/actions/index.ts`.

---

## 🚀 Deployment

### Platform Configuration

The project uses Vercel adapter by default, but you can easily switch to other platforms.

#### Current Setup (Vercel)

```typescript
// astro.config.mjs
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: "server",
  adapter: vercel(),
  site: 'https://cipres-agency.vercel.app',
});
```

#### Switch to Netlify

```bash
# Remove Vercel adapter
npm uninstall @astrojs/vercel

# Install Netlify adapter
npm install @astrojs/netlify
```

```typescript
// astro.config.mjs
import netlify from "@astrojs/netlify";

export default defineConfig({
  output: "server",
  adapter: netlify(),
});
```

#### Other Platforms

- **Cloudflare**: `@astrojs/cloudflare`
- **Node**: `@astrojs/node`
- **Deno**: `@astrojs/deno`

See [Astro Adapters Docs](https://docs.astro.build/en/guides/deploy/)

---

## 🔐 Environment Variables

Create `.env` file in root (copy from `.env.template`):

```env
# Resend Email API (Required for contact form)
# Get your API key from: https://resend.com/api-keys
RESEND_API_KEY=re_your_api_key_here

# Email address verified in Resend (sender)
RESEND_EMAIL=onboarding@resend.dev

# Your email address (recipient of contact form submissions)
FROM_EMAIL=your-email@example.com

# Upstash Redis (Optional - for rate limiting)
# Create free database at: https://console.upstash.com/
UPSTASH_REDIS_REST_URL="https://your-redis-url.upstash.io"
UPSTASH_REDIS_REST_TOKEN="your-redis-token-here"
```

### Getting API Keys

#### 1. Resend (Email Service)

1. Sign up at [resend.com](https://resend.com/)
2. Go to **API Keys** section
3. Create new API key
4. Copy to `RESEND_API_KEY`
5. Verify your domain or use `onboarding@resend.dev` for testing
6. Set `RESEND_EMAIL` to your verified sender email
7. Set `FROM_EMAIL` to where you want to receive contact form emails

#### 2. Upstash Redis (Rate Limiting - Optional)

1. Sign up at [upstash.com](https://upstash.com/)
2. Click **Create Database**
3. Choose **Global** for best performance
4. Select **Free** tier (25MB, 10K commands/day)
5. Copy **REST URL** to `UPSTASH_REDIS_REST_URL`
6. Copy **REST Token** to `UPSTASH_REDIS_REST_TOKEN`

---

## 🔍 SEO Management

The project implements a centralized SEO system using the `labels.ts` configuration file and the `BaseHead.astro` component.

### Architecture Overview

```
src/config/labels.ts → Page Components → BaseHead.astro → HTML <head>
```

### BaseHead Component

**Location:** `src/components/common/BaseHead.astro`

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | Page title (displays in browser tab) |
| `description` | `string` | Yes | Meta description (search results) |
| `keywords` | `string` | No | SEO keywords (comma-separated) |

**Generated Tags:**

- `<title>` - Page title
- `<meta name="description">` - Meta description
- `<meta name="keywords">` - SEO keywords
- `<meta property="og:*">` - Open Graph tags for social media
- `<meta name="twitter:*">` - Twitter Card tags
- `<link rel="canonical">` - Canonical URL

---

### Usage in Pages

```astro
---
import BaseHead from '@/components/common/BaseHead.astro';
import { t } from '@/lib/utils';
---

<html lang="en">
  <head>
    <BaseHead
      title={t('meta.index.title')}
      description={t('meta.index.description')}
      keywords={t('meta.index.keywords')}
    />
  </head>
  <body>
    <!-- Page content -->
  </body>
</html>
```

---

### SEO Configuration by Page

| Page | Title Key | Description Key | Keywords Key |
|------|-----------|-----------------|--------------|
| **Homepage** | `meta.index.title` | `meta.index.description` | `meta.index.keywords` |
| **About** | `meta.about.title` | `meta.about.description` | `meta.about.keywords` |
| **Contact** | `meta.contact.title` | `meta.contact.description` | `meta.contact.keywords` |
| **Projects** | `meta.projects.title` | `meta.projects.description` | `meta.projects.keywords` |
| **Privacy** | `meta.privacy.title` | `meta.privacy.description` | - |
| **Terms** | `meta.terms.title` | `meta.terms.description` | - |
| **404** | `meta.404.title` | `meta.404.description` | - |

---

### How to Update SEO

#### 1. Update Existing SEO Tags

Edit the values in `src/config/labels.ts`:

```typescript
'meta.index.title': 'Your New Title | Company Name',
'meta.index.description': 'Your updated description here',
'meta.index.keywords': 'keyword1, keyword2, keyword3',
```

#### 2. Add SEO for a New Page

1. Add new keys to `labels.ts`:
   ```typescript
   'meta.services.title': 'Our Services | CIPRES',
   'meta.services.description': 'Comprehensive web development services',
   'meta.services.keywords': 'web services, development',
   ```

2. Use in your page:
   ```astro
   <BaseHead
     title={t('meta.services.title')}
     description={t('meta.services.description')}
     keywords={t('meta.services.keywords')}
   />
   ```

---

### SEO Best Practices

✅ **Title Tags (55-60 characters)**
- Keep under 60 characters to avoid truncation
- Include your brand name
- Make it descriptive and unique per page

✅ **Meta Descriptions (150-160 characters)**
- Keep between 150-160 characters
- Include a call-to-action
- Accurately summarize page content

✅ **Keywords (Optional)**
- Use 5-10 relevant keywords
- Modern SEO relies more on content than keyword meta tags

✅ **Open Graph Tags**
- Automatically generated by `BaseHead.astro`
- Improves social media sharing appearance

✅ **Canonical URLs**
- Automatically set to current page URL
- Prevents duplicate content issues

---

### Additional SEO Features

- **Semantic HTML**: Proper heading hierarchy (`h1`, `h2`, `h3`)
- **Alt Text**: All images should include descriptive alt attributes
- **Sitemap**: Auto-generated by Astro (configure in `astro.config.mjs`)
- **Robots.txt**: Generated via dynamic route at `src/pages/robot.txt.ts`
- **Performance**: Fast loading times boost SEO rankings
- **Mobile-First**: Responsive design is a ranking factor
- **Accessibility**: WCAG compliance helps SEO

---

## 🎨 Customization

### Colors

Edit `src/styles/global.css` to customize the color palette:

```css
@theme inline {
  --color-primary: /* your color */;
  --color-background: /* your color */;
  --color-foreground: /* your color */;
  --color-accent: /* your color */;
  --color-secondary: /* your color */;
  --color-muted: /* your color */;
}
```

### Typography

Update fonts in `src/styles/global.css`:

```css
@theme inline {
  --font-sans: "Your Font", sans-serif;
  --font-mono: "Your Mono Font", monospace;
}
```

### Logo

Update logo in `src/components/common/Navbar.astro` or replace the logo file in `src/assets` directory.

### Navigation

Edit `src/config/navItems.json.ts` to add/remove navigation items.

### Social Links

Update `src/config/socialLinks.json.ts` with your social media URLs.

---

## 🎭 Animations

All animations are powered by **GSAP** with **Lenis** for smooth scrolling.

### Key Animation Features

- **Scroll-triggered animations** - Elements animate on scroll
- **Timeline-based sequences** - Coordinated animation sequences
- **Smooth scrolling** - Lenis integration for buttery-smooth scroll
- **Performance optimized** - Hardware-accelerated transforms

### SSR Considerations

Due to Server-Side Rendering, animations include:

- **Client-side only execution** - Guard checks for `window` object
- **Proper cleanup** - `gsap.context()` for cleanup
- **No flickering** - Animations initialize after hydration

---

## 📝 Content Management

### Adding New Projects

Projects are managed using **Astro Content Collections** with type-safe schema validation via Zod.

#### Step 1: Image Configuration

There are two ways images are handled in this project depending on where they appear:

**A. For the `image` field (Frontmatter):**
The main project image (shown on cards and headers) can be sourced from:
* **External URLs:** Paste the direct link (e.g., Unsplash, Cloudinary).
* **Public Folder:** Place files in `/public/projects/` and reference them as `/projects/my-image.webp`.
* **Assets Folder:** Place files in `src/assets/projects/` and provide the relative path.

**B. For Content Images (Project Overview):**
If you want to add extra images inside the Markdown body (below the `---`):
* **Mandatory:** These images **must** be placed in the `/public/` folder. 
* **Why?** Images stored in `src/assets/` are processed and renamed by Astro during the production build. Standard Markdown syntax cannot "guess" these new names, resulting in broken links. Images in `public/` are served exactly as they are.

#### Step 2: Create Project File

Create a new `.md` file in `src/content/projects/` (e.g., `olmo.md`):

```markdown
---

title: "Olmo"
description: "E-commerce platform and digital experience for luxury furniture brand"
category: "Other"
image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
link: "https://agustincastets.vercel.app/en"
yearFinished: 2025
timeline: "10 weeks"
tags: ["E-commerce", "Astro", "Shopify Hydrogen", "Tailwind CSS"]

---

## Project Overview

This is the main description. To add an extra image here, ensure it is in the **public** folder.
```

#### Field Reference

| Field                   | Type     | Required | Description                                                                           |
| ----------------------- | -------- | -------- | --------------------------------------------------------------------------            |
| `title`                 | `string` | ✅       | The name of the project.                                                              |
| `description`           | `string` | ✅       | Short description used for project cards.                                             |
| `category`              | `enum`   | ✅       | Must be: `'Agency'`, `'Branding'`, `'Portfolio'`, or `'Other'`.                       |
| `image`                 | `string` | ✅       | Main project image. Supports external URLs, `/public/` paths, or `src/assets/` paths. | 
| `link`                  | `string` | ❌       | Live project URL (optional, must be a valid URL).                                     |    
| `yearFinished`          | `number` | ✅       | Year the project was completed (e.g., `2025`).                                        |
| `timeline`              | `string` | ✅       | Total duration of the project (e.g., `"10 weeks"`).                                   |
| `tags`                  | `array`  | ✅       | List of technologies used (e.g., `["Astro", "Tailwind CSS"]`).                        |

#### Step 3: Write Content

Below the frontmatter (`---`), write your project details using standard Markdown.

#### Step 4: Verify

Your project will automatically appear on the `/projects` page and individual page at `/projects/olmo`.

---

## 💡 Things to Keep in Mind

### Site Domain Configuration

Update your site domain in `astro.config.mjs`:

```typescript
export default defineConfig({
  site: 'https://your-domain.com', // Change to your domain
  // ...
});
```

### Icon Usage

#### In Astro Components (`.astro` files)

```astro
---
import { Icon } from '@lucide/astro';
---
<Icon name="instagram" size={24} />
```

#### In React Components (`.tsx` files)

```tsx
import { Instagram } from "lucide-react";

<Instagram size={24} />
```

---

### Asset Organization

- **Images** → `src/assets/` (optimized by Astro)
- **Static files** → `public/` (served as-is)
- **Icons** → Use Lucide icons from the package

---

## 📚 Resources

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [Resend API Docs](https://resend.com/docs)
- [Lucide Icons](https://lucide.dev/)

---

## ❗ Known Limitations

- Contact form requires environment variables to be configured (`.env`) for email delivery
- Upstash free tier limits:
  - 10,000 commands per day
  - 25 MB storage
- Some GSAP animations rely on client-only APIs; SSR guards are applied

---

## 📞 Support

For support or licensing inquiries, contact: `aguscastets@gmail.com`.

