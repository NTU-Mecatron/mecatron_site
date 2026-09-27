import { useState, useEffect } from 'react';

export const useProgressiveEnhancement = () => {
  const [capability, setCapability] = useState('basic');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkCapability = async () => {
      try {
        // Check WebGL support
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        if (!gl) {
          setCapability('fallback');
          setIsLoading(false);
          return;
        }

        // Check device characteristics
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        const memory = navigator.deviceMemory || 4;
        const cores = navigator.hardwareConcurrency || 4;
        const userAgent = navigator.userAgent.toLowerCase();
        const isIOS = /iphone|ipad|ipod/.test(userAgent);
        const isAndroid = /android/.test(userAgent);

        // If device is mobile, strictly set to 'mobile' (or 'fallback' if WebGL is unavailable)
        // Mobile browsers have strict memory ceilings and must not run desktop settings
        let nextCapability;
        if (isMobile) {
          nextCapability = 'mobile';
        } else if (isTablet) {
          nextCapability = 'medium';
        } else {
          // Desktop scoring
          let desktopScore = 0;
          if (memory >= 8) desktopScore += 3;
          else if (memory >= 4) desktopScore += 2;
          else if (memory >= 2) desktopScore += 1;

          if (cores >= 8) desktopScore += 2;
          else if (cores >= 4) desktopScore += 1;

          nextCapability = desktopScore >= 4 ? 'full' : 'medium';
        }

        setCapability(nextCapability);
        setIsLoading(false);
      } catch (error) {
        console.error('Error checking device capability:', error);
        setCapability('fallback');
        setIsLoading(false);
      }
    };

    checkCapability();
  }, []);

  return { capability, isLoading };
}; 