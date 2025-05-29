import React, { useState, useEffect } from 'react';
import { Plant } from '../types/Plant';
import { X } from 'lucide-react';

interface PlantFormProps {
  onSubmit: (plant: Omit<Plant, 'id'> | Plant) => void;
  onCancel: () => void;
  initialData?: Plant;
}

const PlantForm: React.FC<PlantFormProps> = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    commonName: '',
    scientificName: '',
    imageUrl: '',
    wikiUrl: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        commonName: initialData.commonName,
        scientificName: initialData.scientificName,
        imageUrl: initialData.imageUrl,
        wikiUrl: initialData.wikiUrl,
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (initialData) {
      onSubmit({ ...formData, id: initialData.id });
    } else {
      onSubmit(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden animate-scaleIn">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            {initialData ? 'Edit Plant' : 'Add New Plant'}
          </h2>
          <button
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <label htmlFor="commonName" className="block text-sm font-medium text-gray-700 mb-1">
              Common Name
            </label>
            <input
              type="text"
              id="commonName"
              name="commonName"
              value={formData.commonName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="scientificName" className="block text-sm font-medium text-gray-700 mb-1">
              Scientific Name
            </label>
            <input
              type="text"
              id="scientificName"
              name="scientificName"
              value={formData.scientificName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="wikiUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Wikipedia URL
            </label>
            <input
              type="url"
              id="wikiUrl"
              name="wikiUrl"
              value={formData.wikiUrl}
              onChange={handleChange}
              placeholder="https://en.wikipedia.org/wiki/Plant"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              {initialData ? 'Update Plant' : 'Add Plant'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlantForm;