import React from 'react';

export function StaticImageViewer() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img 
        src="/images/kevin_placeholder.png" 
        alt="Kevin - Static View" 
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
} 