#!/usr/bin/env python3
"""
Download audio files from Google Drive folder for Mindshift ambient sounds.
Usage: python3 download_gdrive_audio.py
"""

import os
import requests
from pathlib import Path

# Google Drive Folder ID from the URL
FOLDER_ID = "1otf8TUyzd7VUNnyobl49pds6QMwG3k_k"

# Mapping of expected file names to their Google Drive file IDs
# You'll need to update these with actual file IDs from the folder
AUDIO_FILES = {
    "rain.mp3": None,  # Will be detected or manually set
    "ocean.mp3": None,
    "forest.mp3": None,
    "river.mp3": None,
    "birds.mp3": None,
    "wind.mp3": None,
    "fireplace.mp3": None,
    "meditation.mp3": None,
    "piano.mp3": None,
    "ambient.mp3": None,
}

SOUNDS_DIR = Path("public/sounds")
SOUNDS_DIR.mkdir(parents=True, exist_ok=True)

def get_direct_download_url(file_id: str) -> str:
    """Convert Google Drive file ID to direct download URL"""
    return f"https://drive.google.com/uc?export=download&id={file_id}"

def download_file(url: str, destination: Path) -> bool:
    """Download a file from URL to destination"""
    try:
        print(f"📥 Downloading {destination.name}...")
        response = requests.get(url, stream=True, timeout=30)
        response.raise_for_status()
        
        with open(destination, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        print(f"✅ Successfully downloaded {destination.name}")
        return True
    except Exception as e:
        print(f"❌ Error downloading {destination.name}: {e}")
        return False

def main():
    print("🎵 Mindshift Ambient Sounds Downloader")
    print("=" * 50)
    print("\nTo use this script:")
    print("1. Make sure the Google Drive folder is publicly accessible")
    print("2. Get the file IDs from the folder")
    print("3. Update the AUDIO_FILES dictionary with file IDs")
    print("\nAlternatively:")
    print("1. Open the Google Drive folder")
    print("2. For each audio file, right-click → 'Get link' → 'Copy link'")
    print("3. The file ID is in the URL: drive.google.com/file/d/[FILE_ID]/view")
    print("4. Use the direct download URL format:")
    print("   https://drive.google.com/uc?export=download&id=[FILE_ID]")
    print("\n" + "=" * 50)
    
    # Check if files already exist
    existing_files = [f for f in SOUNDS_DIR.glob("*.mp3") if f.name in AUDIO_FILES]
    if existing_files:
        print(f"\nFound {len(existing_files)} existing audio files:")
        for f in existing_files:
            print(f"  ✓ {f.name}")
        response = input("\nDo you want to re-download? (y/N): ")
        if response.lower() != 'y':
            print("Skipping download.")
            return
    
    # Manual download instructions
    print("\n" + "=" * 50)
    print("MANUAL DOWNLOAD INSTRUCTIONS:")
    print("=" * 50)
    print("\nFor each audio file in your Google Drive folder:")
    print("1. Right-click the file → 'Get link' → 'Copy link'")
    print("2. Open the link in a browser")
    print("3. Right-click 'Download' button → 'Copy link address'")
    print("4. Use that direct download URL")
    print("\nOr use gdown library:")
    print("  pip install gdown")
    print("  gdown --folder https://drive.google.com/drive/folders/1otf8TUyzd7VUNnyobl49pds6QMwG3k_k -O public/sounds")
    print("\n" + "=" * 50)

if __name__ == "__main__":
    main()

