---
title: "Firebase Auth Error 'auth/invalid-api-key' Fix Kaise Kare"
slug: "firebase-auth-invalid-api-key-fix"
category: "how-to"
date: "2026-08-17"
author: "Lakshya Mishra"
excerpt: "Firebase Authentication mein auth/invalid-api-key error aa raha hai? Ye common mistakes aur step-by-step fix guide hai"
thumbnail: "/images/blog/firebase-fix.svg"
tags: ["firebase", "authentication", "error-fix", "react"]
---

## Problem

Tum Firebase Auth setup kar rahe ho aur ye error mil raha hai:

```
Firebase: Error (auth/invalid-api-key)
```

Ye error tab aata hai jab Firebase ko valid API key nahi milti. Beginners ke saath bahut common hai — usually `.env` ya config galat hoti hai.

## Root Causes

1. **Galat API key** copy ki hai Firebase Console se
2. **Environment variable** load nahi ho rahi (Next.js naming issue)
3. **Purani config** use ho rahi hai after project reset
4. **Restricted API key** — HTTP referrer restrictions galat set hain

## Step-by-Step Fix

### Step 1: Firebase Console Se Sahi Config Copy Karo

1. [Firebase Console](https://console.firebase.google.com) kholo
2. Project select karo → **Project Settings** (gear icon)
3. **General** tab → "Your apps" section
4. Web app ka config object copy karo

### Step 2: Next.js Environment Variables Set Karo

`.env.local` file mein ye add karo (prefix `NEXT_PUBLIC_` zaroori hai client-side ke liye):

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
```

### Step 3: Firebase Init File Check Karo

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

### Step 4: Dev Server Restart Karo

`.env.local` change karne ke baad **server restart** karna zaroori hai:

```bash
# Ctrl+C then
npm run dev
```

## Still Not Working?

- `.env.local` root folder mein hai na? (`package.json` ke saath)
- API key mein extra spaces ya quotes toh nahi?
- Google Cloud Console mein **Identity Toolkit API** enabled hai?

## Conclusion

99% cases mein ye error `.env` misconfiguration ki wajah se hota hai. Config double-check karo, server restart karo — problem solve ho jaayegi.
