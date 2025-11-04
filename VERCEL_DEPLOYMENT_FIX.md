# 🔧 Vercel Deployment Fix

## Problem
Vercel was trying to install Python dependencies (`llama-index==0.10.12`) even though this is a React/TypeScript frontend project. The Python files are backend utilities that shouldn't be deployed to Vercel.

## Solution
I've created configuration files to tell Vercel to:
1. **Only use Node.js/npm** - Not Python
2. **Ignore Python files** - During deployment
3. **Build the React/Vite app** - As intended

## Files Created/Updated

### 1. `vercel.json`
- Explicitly tells Vercel this is a Vite project
- Sets build command to `npm run build`
- Outputs to `dist` directory
- Uses npm install (not pip)

### 2. `.vercelignore`
- Ignores all Python files (`*.py`)
- Ignores `requirements.txt`
- Ignores Python virtual environments
- Prevents Vercel from detecting Python

## Next Steps

### Option 1: Redeploy in Vercel Dashboard
1. Go to your Vercel project dashboard
2. Go to **Settings** → **General**
3. Make sure **Framework Preset** is set to **Vite**
4. Make sure **Build Command** is `npm run build`
5. Make sure **Output Directory** is `dist`
6. Click **Redeploy**

### Option 2: Push Changes and Auto-Deploy
1. Commit the new files:
   ```bash
   git add vercel.json .vercelignore
   git commit -m "Fix Vercel deployment - ignore Python files"
   git push
   ```
2. Vercel will automatically redeploy with the new configuration

### Option 3: Manual Settings Override
If the above doesn't work, in Vercel Dashboard:
1. Go to **Settings** → **Build & Development Settings**
2. Set **Framework Preset**: `Other`
3. Set **Build Command**: `npm run build`
4. Set **Output Directory**: `dist`
5. Set **Install Command**: `npm install --legacy-peer-deps`
6. **Disable** "Auto-detect Framework"
7. Click **Save** and redeploy

## Verification

After deployment, your build logs should show:
- ✅ `Installing dependencies...` (npm, not pip)
- ✅ `Running "npm run build"`
- ✅ `vite build`
- ❌ NO Python/pip installation attempts

## Troubleshooting

If you still see Python errors:
1. Check Vercel project settings - make sure Framework is set to Vite
2. Verify `vercel.json` is committed to your repo
3. Check that `.vercelignore` is in the root directory
4. Try deleting and re-importing the project in Vercel

## Files That Should NOT Be Deployed
- All `.py` files (backend utilities)
- `requirements.txt` (Python dependencies)
- Python virtual environments
- Test files and documentation

These are now ignored via `.vercelignore`.

