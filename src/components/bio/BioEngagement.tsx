import React from 'react';
import { Heart, SmilePlus } from 'lucide-react';
import { useBioEngagement } from '../../hooks/useBioEngagement';

export default function BioEngagement() {
  const { likes, smiles, handleLike, handleSmile } = useBioEngagement();

  return (
    <div className="flex justify-center space-x-6">
      <button
        onClick={handleLike}
        className="flex items-center space-x-2 px-6 py-3 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
      >
        <Heart className={`w-6 h-6 ${likes > 0 ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
        <span className="font-medium text-gray-800">{likes}</span>
      </button>

      <button
        onClick={handleSmile}
        className="flex items-center space-x-2 px-6 py-3 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
      >
        <SmilePlus className={`w-6 h-6 ${smiles > 0 ? 'text-yellow-500' : 'text-gray-600'}`} />
        <span className="font-medium text-gray-800">{smiles}</span>
      </button>
    </div>
  );
}