import { useState, useEffect } from 'react';
import { Plant } from '../types/Plant';
import { initialPlants } from '../data/initialPlants';

export const usePlants = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load plants directly from initialPlants
    setPlants(initialPlants);
    setLoading(false);
  }, []);

  return {
    plants,
    loading,
  };
};