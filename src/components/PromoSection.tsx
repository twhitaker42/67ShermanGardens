import React from 'react';

interface PromoSectionProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const PromoSection: React.FC<PromoSectionProps> = ({ title, description, imageUrl }) => {
  return (
    <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
            <p className="text-green-50 mb-6 max-w-lg">{description}</p>
            <button className="bg-white text-green-700 hover:bg-green-50 px-6 py-2 rounded-lg shadow-md transition-colors duration-300 font-medium">
              Learn More
            </button>
          </div>
          
          {imageUrl && (
            <div className="md:w-1/2 flex justify-center">
              <img 
                src={imageUrl} 
                alt="Garden promo" 
                className="rounded-lg shadow-lg max-h-72 object-cover" 
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;