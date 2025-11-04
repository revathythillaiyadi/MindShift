import { useEffect } from 'react';
import { getSupabaseAudioUrl } from '../lib/audioStorage';

const BACKGROUND_MUSIC_FILE = 'Evening-Improvisation-with-Ethera(chosic.com).mp3';

// Store audio globally so it persists across component remounts
let globalAudio: HTMLAudioElement | null = null;
let isPlaying = false;

export function BackgroundMusic() {
  useEffect(() => {
    // If audio already exists and is playing, don't create a new one
    if (globalAudio && isPlaying) {
      return;
    }

    // Get Supabase Storage URL for the background music
    const supabaseUrl = getSupabaseAudioUrl(BACKGROUND_MUSIC_FILE);
    
    // Create audio element if it doesn't exist
    if (!globalAudio) {
      globalAudio = new Audio(supabaseUrl);
      globalAudio.loop = true; // Play continuously
      globalAudio.volume = 0.3; // Set volume to 30% for background music
      
      // Handle errors
      globalAudio.addEventListener('error', (e) => {
        console.error('Background music error:', e);
        // Try to load from Supabase again or use fallback
        if (globalAudio) {
          globalAudio.src = supabaseUrl;
          globalAudio.load();
        }
      });

      // Track playing state
      globalAudio.addEventListener('play', () => {
        isPlaying = true;
      });

      globalAudio.addEventListener('pause', () => {
        isPlaying = false;
      });
    }

    // Attempt to play when the app loads
    const playMusic = async () => {
      if (!globalAudio) return;
      
      try {
        await globalAudio.play();
        console.log('🎵 Background music started');
      } catch (error) {
        // Browser autoplay policy may block this - user interaction required
        console.log('⏸️ Autoplay blocked, music will start on user interaction');
        
        // Try again on first user interaction
        const startOnInteraction = () => {
          if (globalAudio && !isPlaying) {
            globalAudio.play().catch(err => console.log('Could not start music:', err));
          }
          document.removeEventListener('click', startOnInteraction);
          document.removeEventListener('touchstart', startOnInteraction);
          document.removeEventListener('keydown', startOnInteraction);
        };
        
        document.addEventListener('click', startOnInteraction, { once: true });
        document.addEventListener('touchstart', startOnInteraction, { once: true });
        document.addEventListener('keydown', startOnInteraction, { once: true });
      }
    };

    playMusic();

    // Don't cleanup - keep music playing across navigation
  }, []);

  return null; // No visual element
}

