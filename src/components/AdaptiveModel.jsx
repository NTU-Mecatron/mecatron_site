import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { KevinOptimized } from '../KevinOptimized';

export function AdaptiveModel({ capability, scale = [5, 5, 5], ...props }) {
  // For now, we'll use the same model but with different optimizations
  // In the future, you can create multiple model versions:
  // - kevin_mobile.glb (simplified, < 1MB)
  // - kevin_medium.glb (medium detail, < 3MB)
  // - kevin_full.glb (full detail, < 8MB)
  
  const modelUrl = useMemo(() => {
    switch (capability) {
      case 'fallback':
        return '/kevin.glb'; // Use original for fallback
      case 'mobile':
        return '/kevin.glb'; // Use original for now
      case 'medium':
        return '/kevin.glb'; // Use original for now
      case 'full':
      default:
        return '/kevin.glb'; // Use original for now
    }
  }, [capability]);

  // Optimize scale based on capability
  const optimizedScale = useMemo(() => {
    switch (capability) {
      case 'fallback':
        return [scale[0] * 0.8, scale[1] * 0.8, scale[2] * 0.8];
      case 'mobile':
        return [scale[0] * 0.9, scale[1] * 0.9, scale[2] * 0.9];
      case 'medium':
        return scale;
      case 'full':
      default:
        return scale;
    }
  }, [scale, capability]);

  // Preload the model
  useGLTF.preload(modelUrl);

  return (
    <KevinOptimized 
      scale={optimizedScale} 
      {...props}
    />
  );
} 