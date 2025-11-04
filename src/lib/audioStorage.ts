// Audio Storage Configuration
// Centralized configuration for audio file URLs

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_STORAGE_BUCKET = 'mindshift-audio'; // Change this to your bucket name

/**
 * Get Supabase Storage URL for an audio file
 * @param fileName - Name of the audio file (e.g., 'rain.mp3')
 * @returns Full public URL to the file in Supabase Storage
 */
export function getSupabaseAudioUrl(fileName: string): string {
  if (!SUPABASE_URL) {
    return '';
  }
  // Extract project ID from Supabase URL
  const projectId = SUPABASE_URL.replace('https://', '').replace('.supabase.co', '');
  // URL encode the file name to handle special characters like parentheses
  const encodedFileName = encodeURIComponent(fileName);
  return `https://${projectId}.supabase.co/storage/v1/object/public/${SUPABASE_STORAGE_BUCKET}/${encodedFileName}`;
}

/**
 * Audio file configuration with priority order
 * Priority: Local → Supabase → Google Drive → External fallbacks
 */
export const AUDIO_CONFIG = {
  // Priority 1: Local files (bundled with app)
  local: {
    basePath: '/sounds',
    files: {
      rain: 'rain.mp3',
      ocean: 'ocean.mp3',
      forest: 'forest.mp3',
      river: 'river.mp3',
      birds: 'birds.mp3',
      wind: 'wind.mp3',
      fireplace: 'fireplace.mp3',
      meditation: 'meditation.mp3',
      piano: 'piano.mp3',
      ambient: 'ambient.mp3',
    }
  },
  
  // Priority 2: Supabase Storage URLs
  supabase: {
    bucket: SUPABASE_STORAGE_BUCKET,
    enabled: !!SUPABASE_URL,
    getUrl: getSupabaseAudioUrl,
  },
  
  // Priority 3: Google Drive (if configured)
  googleDrive: {
    folderId: '1otf8TUyzd7VUNnyobl49pds6QMwG3k_k',
    // File IDs should be added here when available
    fileIds: {
      rain: '', // Add Google Drive file ID
      ocean: '',
      forest: '',
      river: '',
      birds: '',
      wind: '',
      fireplace: '',
      meditation: '',
      piano: '',
      ambient: '',
    }
  },
  
  // Priority 4: External fallback URLs
  fallbacks: {
    rain: [
      'https://cdn.pixabay.com/download/audio/2022/03/10/audio_bb630cc098.mp3?filename=rain-and-thunder-ambient-116927.mp3',
      'https://www.soundjay.com/misc/sounds/rain-01.mp3'
    ],
    ocean: [
      'https://cdn.pixabay.com/download/audio/2021/08/09/audio_bb630cc098.mp3?filename=ocean-waves-ambient-116927.mp3',
      'https://www.soundjay.com/misc/sounds/ocean-waves-01.mp3'
    ],
    forest: [
      'https://cdn.pixabay.com/download/audio/2021/08/09/audio_bb630cc098.mp3?filename=forest-ambient-116927.mp3',
      'https://www.soundjay.com/misc/sounds/forest-01.mp3'
    ],
    river: [
      'https://cdn.pixabay.com/download/audio/2021/08/09/audio_bb630cc098.mp3?filename=river-stream-ambient-116927.mp3',
      'https://www.soundjay.com/misc/sounds/river-01.mp3'
    ],
    birds: [
      'https://cdn.pixabay.com/download/audio/2021/08/09/audio_bb630cc098.mp3?filename=birds-chirping-ambient-116927.mp3',
      'https://www.soundjay.com/misc/sounds/birds-01.mp3'
    ],
    wind: [
      'https://cdn.pixabay.com/download/audio/2021/08/09/audio_bb630cc098.mp3?filename=wind-ambient-116927.mp3',
      'https://www.soundjay.com/misc/sounds/wind-01.mp3'
    ],
    fireplace: [
      'https://cdn.pixabay.com/download/audio/2021/08/09/audio_bb630cc098.mp3?filename=fireplace-crackling-ambient-116927.mp3',
      'https://www.soundjay.com/misc/sounds/fireplace-01.mp3'
    ],
    meditation: [
      'https://cdn.pixabay.com/download/audio/2021/08/09/audio_bb630cc098.mp3?filename=meditation-ambient-116927.mp3',
      'https://www.soundjay.com/misc/sounds/meditation-01.mp3'
    ],
    piano: [
      'https://cdn.pixabay.com/download/audio/2021/08/09/audio_bb630cc098.mp3?filename=piano-ambient-116927.mp3',
      'https://www.soundjay.com/misc/sounds/piano-01.mp3'
    ],
    ambient: [
      'https://cdn.pixabay.com/download/audio/2021/08/09/audio_bb630cc098.mp3?filename=ambient-music-116927.mp3',
      'https://www.soundjay.com/misc/sounds/ambient-01.mp3'
    ],
  }
};

/**
 * Get prioritized list of audio URLs for a given sound
 * @param soundId - The sound identifier (e.g., 'rain', 'ocean')
 * @returns Array of URLs in priority order
 */
export function getAudioUrls(soundId: string): string[] {
  const urls: string[] = [];
  
  // Priority 1: Local files
  const localFile = AUDIO_CONFIG.local.files[soundId as keyof typeof AUDIO_CONFIG.local.files];
  if (localFile) {
    urls.push(`${AUDIO_CONFIG.local.basePath}/${localFile}`);
  }
  
  // Priority 2: Supabase Storage
  if (AUDIO_CONFIG.supabase.enabled && localFile) {
    urls.push(getSupabaseAudioUrl(localFile));
  }
  
  // Priority 3: Google Drive (if file ID is configured)
  const driveFileId = AUDIO_CONFIG.googleDrive.fileIds[soundId as keyof typeof AUDIO_CONFIG.googleDrive.fileIds];
  if (driveFileId) {
    urls.push(`https://drive.google.com/uc?export=download&id=${driveFileId}`);
  }
  
  // Priority 4: External fallbacks
  const fallbacks = AUDIO_CONFIG.fallbacks[soundId as keyof typeof AUDIO_CONFIG.fallbacks];
  if (fallbacks) {
    urls.push(...fallbacks);
  }
  
  return urls;
}

