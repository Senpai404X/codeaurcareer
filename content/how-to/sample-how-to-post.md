---
title: "React App Ko Vercel Pe Free Mein Deploy Kaise Kare"
slug: "react-vercel-deploy-guide"
category: "how-to"
date: "2026-08-19"
author: "Lakshya Mishra"
excerpt: "Step-by-step guide — React ya Next.js app ko Vercel pe free mein deploy karne ka complete process"
thumbnail: "/images/blog/how-to-deploy.svg"
tags: ["react", "nextjs", "vercel", "deployment"]
---

## Introduction

Agar tum student ho aur apna pehla React ya Next.js project deploy karna chahte ho, toh Vercel sabse best free option hai. Is guide mein hum zero se production tak jaayenge — koi paid plan ki zarurat nahi.

## Prerequisites

Deploy karne se pehle ye cheezein ready honi chahiye:

- GitHub account
- React ya Next.js project (local pe `npm run build` successfully chal raha ho)
- Vercel account (GitHub se sign up karo)

## Step 1: GitHub Pe Code Push Karo

Pehle apna project GitHub repository mein push karo:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

> **Tip:** `.env` files kabhi commit mat karo. `.gitignore` mein `.env*` add karna mat bhoolna.

## Step 2: Vercel Account Banana

1. [vercel.com](https://vercel.com) pe jao
2. **Sign Up** pe click karo aur **Continue with GitHub** choose karo
3. GitHub access allow karo

## Step 3: Project Import Karna

1. Vercel dashboard pe **Add New Project** click karo
2. Apni GitHub repository select karo
3. Framework automatically detect ho jaayega (Next.js / Create React App)
4. **Deploy** button dabao

Build 1-2 minute mein complete ho jaati hai. Tumhe ek live URL milega jaise `your-project.vercel.app`.

## Step 4: Environment Variables (Agar Ho)

Agar tumhare project mein API keys ya secrets hain:

1. Project Settings → **Environment Variables**
2. Variable name aur value add karo (e.g. `NEXT_PUBLIC_API_URL`)
3. **Redeploy** karo taaki naye variables apply ho jaayein

## Common Errors & Fixes

### Build Failed: Module Not Found

Local pe `npm install` chalao aur missing packages install karo. Phir commit push karo.

### 404 on Refresh (React SPA)

Create React App ke liye Vercel mein `vercel.json` add karo:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Next.js App Router mein ye problem automatically handle hoti hai.

## Conclusion

Bas itna hi! Ab tumhara project live hai aur har push pe automatically redeploy hoga. Agle article mein custom domain connect karna seekhenge.

Happy deploying! 🚀
