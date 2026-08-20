# Tech Blog Project - Complete Structure & Plan

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Content**: Markdown files (no database/backend needed)
- **Hosting**: Vercel (free tier)
- **Content type**: Single author (start karo, baad mein multi-author add kar sakte ho)

---

## Folder Structure

```
tech-blog/
├── content/
│   ├── how-to/
│   │   ├── react-hosting-guide.md
│   │   ├── expo-build-fix.md
│   │   └── firebase-auth-error-fix.md
│   │
│   └── career/
│       ├── bca-vs-bsc-it.md
│       ├── govt-jobs-bca.md
│       └── best-career-after-bca.md
│
├── app/                          (Next.js App Router)
│   ├── page.js                   → Homepage (latest articles list)
│   ├── layout.js                 → Global layout (Navbar + Footer)
│   ├── globals.css                → Tailwind base styles
│   │
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.js            → Single article page (dynamic)
│   │
│   ├── category/
│   │   └── [cat]/
│   │       └── page.js            → Category page (how-to / career)
│   │
│   ├── about/
│   │   └── page.js
│   │
│   └── contact/
│       └── page.js
│
├── components/
│   ├── ArticleCard.jsx            → Blog card for listing (title, excerpt, date)
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── CategoryFilter.jsx         → Filter buttons (How-To / Career)
│   └── MarkdownRenderer.jsx       → Renders .md content as styled HTML
│
├── lib/
│   └── posts.js                   → Functions to read/parse markdown files
│
├── public/
│   └── images/
│       └── blog/                  → Article thumbnail images
│
├── package.json
└── next.config.js
```

---

## Markdown Article Format (Every article ka structure)

Har article file mein ye "frontmatter" (metadata) hona chahiye upar:

```markdown
---
title: "React App Ko Vercel Pe Free Mein Deploy Kaise Kare"
slug: "react-hosting-guide"
category: "how-to"
date: "2026-08-19"
author: "Lakshya Mishra"
excerpt: "Step by step guide - React/Next.js app ko Vercel pe deploy karne ka complete process"
thumbnail: "/images/blog/react-hosting.png"
tags: ["react", "vercel", "hosting", "deployment"]
---

## Introduction

Yaha se actual article content start hota hai...

## Step 1: Vercel Account Banana

Content likho yaha...

## Step 2: Project Connect Karna

...

## Conclusion

...
```

---

## Required Packages

```bash
npm install next react react-dom
npm install tailwindcss postcss autoprefixer
npm install gray-matter          # Frontmatter parse karne ke liye
npm install remark remark-html   # Markdown ko HTML mein convert karne ke liye
```

---

## Pages Priority (Build Order)

1. **Homepage** (`app/page.js`) - Saare articles ki list, latest first
2. **Article Page** (`app/blog/[slug]/page.js`) - Single post display
3. **Category Page** (`app/category/[cat]/page.js`) - Filtered by How-To / Career
4. **About Page** - Kaun ho, blog kis baare mein hai
5. **Contact Page** - AdSense approval ke liye zaroori

---

## Content Categories (Start ke liye)

### How-To (Tech Tutorials)
- App deployment guides
- Error fixing guides
- Tool/framework comparisons
- Coding tips for students

### Career (Student Guidance)
- BCA/BSc IT career paths
- Job preparation content
- Freelancing guides
- Course/certification suggestions

---

## AdSense Requirements Checklist
- [ ] Minimum 15-20 quality articles
- [ ] About page
- [ ] Contact page
- [ ] Privacy Policy page
- [ ] Original content (AI + personal touch mixed)
- [ ] Clean navigation
- [ ] Mobile responsive design
- [ ] Fast loading speed

---

## Future Additions (Backend ki zarurat tab padegi)
- Comments system → Giscus (GitHub-based, free, no backend)
- Newsletter → Mailchimp/ConvertKit (free tier)
- Multi-author → Add `author` field expansion + simple admin panel (baad mein)
- Search functionality → Client-side search with existing markdown data (no backend needed)
