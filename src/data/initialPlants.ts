import { Plant } from '../types/Plant';

export const initialPlants: Plant[] = [
  {
    id: '1',
    commonName: 'Lavender',
    scientificName: 'Lavandula',
    imageUrl: 'https://images.pexels.com/photos/4197491/pexels-photo-4197491.jpeg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Lavandula',
    plantType: 'Flower',
    isNativeToCO: false,
  },
  {
    id: '2',
    commonName: 'Sunflower',
    scientificName: 'Helianthus annuus',
    imageUrl: 'https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Helianthus_annuus',
    plantType: 'Flower',
    isNativeToCO: true,
  },
  {
    id: '3',
    commonName: 'Basil',
    scientificName: 'Ocimum basilicum',
    imageUrl: 'https://images.pexels.com/photos/906065/pexels-photo-906065.jpeg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Basil',
    plantType: 'Flower',
    isNativeToCO: false,
  },
];