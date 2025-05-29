export type PlantType = 'Weed' | 'Grass' | 'Flower' | 'Wildflower' | 'Tree';

export interface Plant {
  id: string;
  commonName: string;
  scientificName: string;
  imageUrl: string;
  wikiUrl: string;
  plantType: PlantType;
  isNativeToCO: boolean;
}