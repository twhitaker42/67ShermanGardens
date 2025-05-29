import React from 'react';
import Header from './components/Header';
import PromoSection from './components/PromoSection';
import PlantGallery from './components/PlantGallery';
import Footer from './components/Footer';
import { usePlants } from './hooks/usePlants';

function App() {
  const { plants, loading } = usePlants();
  
  const siteName = "67 Sherman Garden";

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header siteName={siteName} />
      
      <main className="flex-grow">
        <PromoSection 
          title="Track Your Garden With Ease" 
          description="Keep track of all your plants in one place. Add details, photos, and care instructions to ensure your garden thrives all year round."
          imageUrl="https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg"
        />
        
        <PlantGallery 
          plants={plants}
          loading={loading}
        />
      </main>
      
      <Footer siteName={siteName} />
    </div>
  );
}

export default App;