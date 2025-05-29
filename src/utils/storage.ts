import { Plant } from '../types/Plant';
import { initialPlants } from '../data/initialPlants';

const STORAGE_KEY = 'garden-plants';

export const loadPlants = (): Plant[] => {
  try {
    const storedPlants = localStorage.getItem(STORAGE_KEY);
    if (storedPlants) {
      return JSON.parse(storedPlants);
    }
    // Initialize with default plants if none exist
    savePlants(initialPlants);
    return initialPlants;
  } catch (error) {
    console.error('Failed to load plants from storage:', error);
    return initialPlants;
  }
};

export const savePlants = (plants: Plant[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plants));
  } catch (error) {
    console.error('Failed to save plants to storage:', error);
  }
};

export const addPlant = (plants: Plant[], plant: Omit<Plant, 'id'>): Plant[] => {
  const newPlant = {
    ...plant,
    id: Date.now().toString(),
  };
  const updatedPlants = [...plants, newPlant];
  savePlants(updatedPlants);
  return updatedPlants;
};

export const updatePlant = (plants: Plant[], updatedPlant: Plant): Plant[] => {
  const updatedPlants = plants.map(plant => 
    plant.id === updatedPlant.id ? updatedPlant : plant
  );
  savePlants(updatedPlants);
  return updatedPlants;
};

export const removePlant = (plants: Plant[], id: string): Plant[] => {
  const updatedPlants = plants.filter(plant => plant.id !== id);
  savePlants(updatedPlants);
  return updatedPlants;
};