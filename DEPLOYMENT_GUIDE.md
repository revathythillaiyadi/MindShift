# 🚀 Deployment Guide - Get Your App Live

## 🌐 Local Development Server

### Run Locally:
```bash
npm run dev
```

**Local URL**: http://localhost:5173

The app will be available at this URL on your computer.

---

## 🌍 Production Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- ✅ Free tier (generous)
- ✅ Automatic deployments from GitHub
- ✅ Global CDN
- ✅ Zero configuration needed
- ✅ Perfect for React/Vite apps

**Steps:**

1. **Push your code to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to: https://vercel.com
   - Click "Import Project"
   - Connect your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"
   - Done! You'll get a live URL like: `https://your-app.vercel.app`

3. **Add Environment Variables** (if using Supabase):
   - In Vercel Dashboard → Settings → Environment Variables
   - Add:
     - `VITE_SUPABASE_URL` = your Supabase URL
     - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key

**Result**: Your app is live at `https://your-app.vercel.app`

---

### Option 2: Netlify

**Steps:**

1. **Push to GitHub**

2. **Deploy to Netlify**:
   - Go to: https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub → Select repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

**Result**: Your app is live at `https://your-app.netlify.app`

---

### Option 3: GitHub Pages

**Steps:**

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

**Result**: Your app is live at `https://[username].github.io/[repo-name]`

---

## 📱 Current App Status

### Local Development:
- **URL**: http://localhost:5173
- **To start**: `npm run dev`

### After Deployment:
- **Vercel**: `https://your-app.vercel.app`
- **Netlify**: `https://your-app.netlify.app`
- **GitHub Pages**: `https://[username].github.io/[repo-name]`

---

## ✅ Quick Deploy Checklist

Before deploying:
- [ ] Code committed to GitHub
- [ ] Environment variables set (Supabase, N8N, etc.)
- [ ] Audio files uploaded to Supabase Storage
- [ ] Build passes locally (`npm run build`)
- [ ] Test locally (`npm run dev`)

---

## 🔗 Get Your App Link

### If already deployed:
Check your Vercel/Netlify dashboard for the live URL.

### To deploy now:
1. Push to GitHub
2. Connect to Vercel (fastest option)
3. Get your live URL in ~2 minutes!

