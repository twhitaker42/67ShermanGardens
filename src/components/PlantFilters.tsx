import React from 'react';
import { PlantType } from '../types/Plant';
import { Check } from 'lucide-react';

interface PlantFiltersProps {
  selectedType: PlantType | 'All';
  isNativeOnly: boolean;
  onTypeChange: (type: PlantType | 'All') => void;
  onNativeChange: (isNative: boolean) => void;
}

const PlantFilters: React.FC<PlantFiltersProps> = ({
  selectedType,
  isNativeOnly,
  onTypeChange,
  onNativeChange,
}) => {
  const plantTypes: (PlantType | 'All')[] = ['All', 'Weed', 'Grass', 'Flower', 'Wildflower', 'Tree'];

  return (
    <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
      <div className="container mx-auto flex flex-col sm:flex-row sm:items-end gap-4">
        <div className="w-full sm:w-auto">
          <label htmlFor="plantType\" className="block text-sm font-medium text-gray-700 mb-1">
            Plant Type
          </label>
          <select
            id="plantType"
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value as PlantType | 'All')}
            className="w-full min-w-[200px] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            {plantTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => onNativeChange(!isNativeOnly)}
          className={`w-full sm:w-[200px] flex items-center justify-center gap-2 px-4 py-2 rounded-md border ${
            isNativeOnly
              ? 'bg-green-50 border-green-500 text-green-700'
              : 'bg-white border-gray-300 text-gray-700'
          } hover:bg-green-50 transition-colors duration-200`}
        >
          <div className={`w-5 h-5 rounded border flex items-center justify-center ${
            isNativeOnly ? 'border-green-500 bg-green-500' : 'border-gray-400'
          }`}>
            {isNativeOnly && <Check className="w-4 h-4 text-white" />}
          </div>
          <span>Native to CO Only</span>
        </button>
      </div>
    </div>
  );
}

export default PlantFilters;