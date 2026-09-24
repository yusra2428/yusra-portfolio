import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

const STORAGE_KEY = 'yusra_portfolio_photo';

export const useProfilePhoto = () => {
  const [photo, setPhoto] = useState<string>(() => {
    return localStorage.getItem(STORAGE_KEY) || PERSONAL_INFO.profilePicture;
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    return !!localStorage.getItem(STORAGE_KEY);
  });

  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  // Push photo to backend so it becomes the permanent default public/profile-picture.jpg
  const persistAsDefault = async (dataUrl: string) => {
    try {
      setSaveStatus('saving');
      const response = await fetch('/api/save-profile-picture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: dataUrl }),
      });
      if (response.ok) {
        setSaveStatus('saved');
      } else {
        setSaveStatus('error');
      }
    } catch (err) {
      console.warn('Could not persist to server directly:', err);
      setSaveStatus('error');
    }
  };

  useEffect(() => {
    // If the browser already has an uploaded photo in localStorage, sync it as default immediately
    const existing = localStorage.getItem(STORAGE_KEY);
    if (existing && existing.startsWith('data:image')) {
      persistAsDefault(existing);
    }

    const handleUpdate = () => {
      const saved = localStorage.getItem(STORAGE_KEY);
      setPhoto(saved || PERSONAL_INFO.profilePicture);
      setIsCustom(!!saved);
    };

    window.addEventListener('profile_photo_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('profile_photo_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const savePhoto = (dataUrl: string) => {
    try {
      localStorage.setItem(STORAGE_KEY, dataUrl);
      setPhoto(dataUrl);
      setIsCustom(true);
      window.dispatchEvent(new Event('profile_photo_updated'));
      // Automatically persist to server disk as default profile-picture.jpg
      persistAsDefault(dataUrl);
    } catch (e) {
      console.error('Failed to save photo to localStorage', e);
    }
  };

  const resetPhoto = () => {
    localStorage.removeItem(STORAGE_KEY);
    setPhoto(PERSONAL_INFO.profilePicture);
    setIsCustom(false);
    setSaveStatus('idle');
    window.dispatchEvent(new Event('profile_photo_updated'));
  };

  return {
    photo,
    isCustom,
    savePhoto,
    resetPhoto,
    persistAsDefault,
    saveStatus,
  };
};
