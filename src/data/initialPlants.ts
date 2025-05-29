import { Plant } from '../types/Plant';

export const initialPlants: Plant[] = [
  {
    id: '1',
    commonName: 'Blue Columbine',
    scientificName: 'Aquilegia coerulea',
    imageUrl: 'https://commons.wikimedia.org/wiki/File:Aquilegia_coerulea_-_Flickr_-_aspidoscelis.jpg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Aquilegia_coerulea',
    plantType: 'Wildflower',
    isNativeToCO: true,
  },
  {
    id: '2',
    commonName: 'Sheep Fescue',
    scientificName: 'Festuca ovina',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Lolium.perenne.2.jpg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Festuca_ovina',
    plantType: 'Grass',
    isNativeToCO: false,
  },
  {
    id: '3',
    commonName: 'Blue Grama',
    scientificName: 'Bouteloua gracilis',
    imageUrl: 'https://commons.wikimedia.org/wiki/File:Bouteloua_gracilis_-_blue_grama_-_Flickr_-_Matt_Lavin_%285%29.jpg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Bouteloua_gracilis',
    plantType: 'Grass',
    isNativeToCO: true,
  },
  {
    id: '4',
    commonName: 'Basil',
    scientificName: 'Ocimum basilicum',
    imageUrl: 'https://images.pexels.com/photos/906065/pexels-photo-906065.jpeg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Basil',
    plantType: 'Flower',
    isNativeToCO: false,
  },
];