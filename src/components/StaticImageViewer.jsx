import React from 'react';

const modelImages = {
  hydra: '/images/logos/hydra-home.png',
  kraken: '/images/logos/kraken-home.png',
  lucy: '/images/lucy_placeholder.png',
  kevin: '/images/kevin_placeholder.png',
  phoenix: '/images/phoenix_placeholder.png',
  poseidon: '/images/poseidon_placeholder.png',
};

export function StaticImageViewer({ modelType = 'kevin' }) {
  const imageSrc = modelImages[modelType] || '/images/kevin_placeholder.png';

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <img 
        src={imageSrc} 
        alt={`${modelType} vehicle`}
        className="w-full h-full object-contain max-h-80"
        loading="lazy"
      />
    </div>
  );
}