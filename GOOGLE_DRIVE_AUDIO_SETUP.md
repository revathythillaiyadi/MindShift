# 🎵 Google Drive Audio Files Setup Guide

This guide explains how to use audio files from your Google Drive folder for the Mindshift ambient sounds.

## 📁 Google Drive Folder
**Folder URL**: https://drive.google.com/drive/folders/1otf8TUyzd7VUNnyobl49pds6QMwG3k_k

## 🎯 Method 1: Download and Use Local Files (Recommended)

### Step 1: Download Files from Google Drive

1. **Open the Google Drive folder** in your browser
2. **Select all audio files** you want to use
3. **Right-click → Download** (or use the download icon)
4. The files will be downloaded as a ZIP file

### Step 2: Extract and Organize Files

1. **Extract the ZIP file** to a temporary location
2. **Copy the MP3 files** to `/public/sounds/` directory
3. **Rename files** to match these exact names:
   - `rain.mp3`
   - `ocean.mp3`
   - `forest.mp3`
   - `river.mp3`
   - `birds.mp3`
   - `wind.mp3`
   - `fireplace.mp3`
   - `meditation.mp3`
   - `piano.mp3`
   - `ambient.mp3`

### Step 3: Verify Files

After placing files in `/public/sounds/`, the app will automatically use them (they have highest priority).

---

## 🌐 Method 2: Use Google Drive Direct Links

If you want to stream files directly from Google Drive:

### Step 1: Get File IDs

For each audio file in your Google Drive folder:

1. **Right-click the file** → **"Get link"** → **"Copy link"**
2. The link will look like: `https://drive.google.com/file/d/[FILE_ID]/view?usp=sharing`
3. **Extract the FILE_ID** (the long string between `/d/` and `/view`)

### Step 2: Convert to Direct Download URLs

Convert each file to a direct download URL:
```
https://drive.google.com/uc?export=download&id=[FILE_ID]
```

### Step 3: Update Code

Edit `src/components/ChatBot.tsx` and replace the placeholder URLs:

```typescript
rain: [
  '/sounds/rain.mp3',
  'https://drive.google.com/uc?export=download&id=YOUR_ACTUAL_FILE_ID_HERE',
  // ... fallbacks
],
```

Repeat for all audio types (ocean, forest, river, birds, wind, fireplace, meditation, piano, ambient).

---

## 🔧 Method 3: Using gdown (Python)

If you have Python installed, you can use the `gdown` library:

```bash
# Install gdown
pip install gdown

# Download entire folder
gdown --folder https://drive.google.com/drive/folders/1otf8TUyzd7VUNnyobl49pds6QMwG3k_k -O public/sounds

# Or download individual files
gdown https://drive.google.com/uc?id=FILE_ID -O public/sounds/rain.mp3
```

---

## 📝 Current Priority Order

The app tries audio sources in this order:

1. **Local files** (`/public/sounds/*.mp3`) - Highest priority
2. **Google Drive** (if configured)
3. **External fallback URLs** (Pixabay, SoundJay, etc.)
4. **Web Audio API** (synthesized sounds) - Last resort

---

## ✅ Verification

After setup:

1. **Start the app**: `npm run dev`
2. **Open Chat Settings** (gear icon)
3. **Click "Ambient Sounds"**
4. **Test each sound** - you should hear your Google Drive audio files!

---

## 🔒 Google Drive Permissions

Make sure your Google Drive folder/files are:
- **Publicly accessible** (for Method 2)
- OR **Accessible with link** (for Method 1 download)

To check: Open the folder link in an incognito window. If you can see the files, they're accessible.

---

## 💡 Tips

- **File naming**: Make sure file names match exactly (lowercase, `.mp3` extension)
- **File quality**: Use high-quality MP3 files (128kbps or higher)
- **File size**: Keep files under 10MB for faster loading
- **Looping**: Files should loop seamlessly without gaps

