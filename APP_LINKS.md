# 🔗 Your Mindshift App Links

## 🖥️ **Local Development**

**URL**: http://localhost:5173

**To start the server**:
```bash
npm run dev
```

The app will be available at: **http://localhost:5173**

---

## 🌐 **Production Deployment**

### **Option 1: Quick Deploy to Vercel (Recommended)**

1. **Push to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Ready for production"
   git push
   ```

2. **Deploy to Vercel**:
   - Visit: https://vercel.com
   - Click "Import Project"
   - Connect your GitHub repo
   - Click "Deploy"
   - **Get your live URL**: `https://your-app.vercel.app`

3. **Add Environment Variables in Vercel**:
   - Go to: Settings → Environment Variables
   - Add:
     ```
     VITE_SUPABASE_URL=https://your-project.supabase.co
     VITE_SUPABASE_ANON_KEY=your_anon_key
     ```
   - Redeploy

**Result**: Your app will be live at `https://your-app.vercel.app`

---

### **Option 2: Deploy to Netlify**

1. **Push to GitHub**

2. **Deploy to Netlify**:
   - Visit: https://app.netlify.com
   - "Add new site" → "Import an existing project"
   - Connect GitHub
   - Build command: `npm run build`
   - Publish: `dist`
   - Click "Deploy"

**Result**: Your app will be live at `https://your-app.netlify.app`

---

## ✅ **Verify Audio Files**

After uploading to Supabase Storage, your audio files should be accessible at:

```
https://[YOUR_PROJECT_ID].supabase.co/storage/v1/object/public/mindshift-audio/rain.mp3
https://[YOUR_PROJECT_ID].supabase.co/storage/v1/object/public/mindshift-audio/ocean.mp3
https://[YOUR_PROJECT_ID].supabase.co/storage/v1/object/public/mindshift-audio/forest.mp3
... etc
```

Test by opening these URLs in your browser - they should download/play.

---

## 🎯 **Current Status**

- ✅ **Local server**: Running at http://localhost:5173
- ✅ **Code**: Ready for deployment
- ✅ **Audio system**: Configured for Supabase Storage
- ⏳ **Production URL**: Deploy to get one!

---

## 🚀 **Next Steps**

1. **For local testing**: Already running at http://localhost:5173
2. **For production**: Deploy to Vercel/Netlify (5 minutes)
3. **Share your app**: Once deployed, share the production URL!

