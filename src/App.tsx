import React from 'react';
import Header from './components/Header';
import PromoSection from './components/PromoSection';
import PlantGallery from './components/PlantGallery';
import Footer from './components/Footer';
import { usePlants } from './hooks/usePlants';
import yardImage from './images/yard2025-05-30.jpg';

function App() {
  const { plants, loading } = usePlants();
  
  const siteName = "67 Sherman Garden";

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header siteName={siteName} />
      
      <main className="flex-grow">
        <PromoSection 
          title="What's the deal with this yard?!" 
          description="Well... we started with a yard of mostly weeds. The dream is for this to look like a meadow or plain with local flora. We've planted native grasses and flowers plus have some volunteer plants. Let us know what you see!"
          imageUrl={yardImage}
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