import React, { useState, useMemo } from 'react';
import { Plant, PlantType } from '../types/Plant';
import PlantCard from './PlantCard';
import PlantFilters from './PlantFilters';

interface PlantGalleryProps {
  plants: Plant[];
  loading: boolean;
}

const PlantGallery: React.FC<PlantGalleryProps> = ({
  plants,
  loading,
}) => {
  const [selectedType, setSelectedType] = useState<PlantType | 'All'>('All');
  const [isNativeOnly, setIsNativeOnly] = useState(false);

  const filteredPlants = useMemo(() => {
    return plants.filter(plant => {
      const matchesType = selectedType === 'All' || plant.plantType === selectedType;
      const matchesNative = !isNativeOnly || plant.isNativeToCO;
      return matchesType && matchesNative;
    });
  }, [plants, selectedType, isNativeOnly]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">67 Sherman Garden Plants</h2>
        </div>

        <PlantFilters
          selectedType={selectedType}
          isNativeOnly={isNativeOnly}
          onTypeChange={setSelectedType}
          onNativeChange={setIsNativeOnly}
        />

        {filteredPlants.length === 0 ? (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
            <p className="text-gray-600">No plants match the selected filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlants.map((plant) => (
              <PlantCard
                key={plant.id}
                plant={plant}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PlantGallery;