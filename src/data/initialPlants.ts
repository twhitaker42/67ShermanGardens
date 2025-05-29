import { Plant } from '../types/Plant';

export const initialPlants: Plant[] = [
  {
    id: '1',
    commonName: 'Sheep Fescue',
    scientificName: 'Festuca ovina',
    imageUrl: 'https://en.wikipedia.org/wiki/Festuca_ovina#/media/File:Sheep_fescue.jpg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Festuca_ovina',
    plantType: 'Grass',
    isNativeToCO: false,
  },
  {
    id: '2',
    commonName: 'Blue Grama',
    scientificName: 'Bouteloua gracilis',
    imageUrl: 'https://en.wikipedia.org/wiki/Bouteloua_gracilis#/media/File:Blue_grama_Bouteloua_gracilis_MN_2007.JPG',
    wikiUrl: 'https://en.wikipedia.org/wiki/Bouteloua_gracilis',
    plantType: 'Grass',
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