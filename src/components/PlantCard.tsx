import React from 'react';
import { Plant } from '../types/Plant';
import { ExternalLink } from 'lucide-react';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={plant.imageUrl} 
          alt={plant.commonName}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          <span className="px-2 py-1 bg-green-600 text-white text-sm font-semibold rounded-md shadow-md">
            {plant.plantType}
          </span>
          {plant.isNativeToCO && (
            <span className="px-2 py-1 bg-blue-600 text-white text-sm font-semibold rounded-md shadow-md">
              Native
            </span>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{plant.commonName}</h3>
        <p className="text-sm text-gray-500 italic mb-3">{plant.scientificName}</p>
        
        <a 
          href={plant.wikiUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-green-600 hover:text-green-800 text-sm font-medium transition-colors"
        >
          Wikipedia <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default PlantCard;