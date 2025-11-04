# 📦 Supabase Storage Setup for Audio Files

## 🎯 Quick Setup (5 minutes)

### Step 1: Create Storage Bucket

1. **Go to Supabase Dashboard**: https://app.supabase.com
2. **Select your project**
3. **Navigate to**: Storage → **New Bucket**
4. **Bucket settings**:
   - **Name**: `mindshift-audio`
   - **Public**: ✅ **Enable** (so files can be accessed directly)
   - **File size limit**: 10MB (or as needed)
   - **Allowed MIME types**: `audio/mpeg, audio/mp3` (optional)
5. **Click "Create bucket"**

### Step 2: Upload Audio Files

1. **Click on the `mindshift-audio` bucket**
2. **Click "Upload file"**
3. **Upload all your MP3 files**:
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

### Step 3: Get Your URLs

After uploading, each file will have a **Public URL**. It looks like:
```
https://[PROJECT_ID].supabase.co/storage/v1/object/public/mindshift-audio/rain.mp3
```

**Example**: If your project ID is `sfpmbnoivnxbklxxaacg`, your URL would be:
```
https://sfpmbnoivnxbklxxaacg.supabase.co/storage/v1/object/public/mindshift-audio/rain.mp3
```

### Step 4: Verify URLs Work

Open each URL in your browser - the audio file should download/play.

### Step 5: Update Configuration (Optional)

If you want to use a different bucket name, edit `src/lib/audioStorage.ts`:
```typescript
const SUPABASE_STORAGE_BUCKET = 'your-bucket-name'; // Change this
```

---

## ✅ That's It!

The app is **already configured** to use Supabase Storage! It will automatically:
1. Try local files first (`/sounds/*.mp3`)
2. Try Supabase Storage URLs
3. Fall back to external URLs if needed

**No code changes needed** - just upload your files to Supabase Storage!

---

## 📊 Storage Limits

### Free Tier:
- **Storage**: 1GB
- **Bandwidth**: 2GB/month
- **File size**: Up to 50MB per file

### Example Usage:
- 10 audio files × ~5MB each = ~50MB
- Well within free tier limits!

---

## 🔒 Security (Public Bucket)

Since your bucket is public:
- ✅ Files are accessible via direct URLs
- ✅ No authentication required
- ✅ Fast CDN delivery
- ⚠️ Anyone with the URL can access files

**For private files**, you'd need to:
- Make bucket private
- Use Supabase Storage API with authentication
- Update code to use authenticated requests

---

## 🧪 Testing

1. **Upload a test file** to Supabase Storage
2. **Get the public URL**
3. **Open it in browser** - should download/play
4. **Use in app** - should work automatically!

---

## 🆘 Troubleshooting

### Files not loading?
1. **Check bucket is public**: Storage → Bucket → Settings → Public: ON
2. **Verify file names match**: `rain.mp3`, `ocean.mp3`, etc.
3. **Check file permissions**: Should be accessible without auth

### URLs not working?
- Make sure bucket name matches in `audioStorage.ts`
- Verify your Supabase project URL is correct in `.env`

### Need help?
Check the full guide: `AUDIO_HOSTING_GUIDE.md`

