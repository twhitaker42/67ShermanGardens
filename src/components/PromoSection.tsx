import React from 'react';

interface PromoSectionProps {
  title: string;
  description: string;
  imageUrl?: string;
  secondaryImageUrl?: string;
}

const PromoSection: React.FC<PromoSectionProps> = ({ 
  title, 
  description, 
  imageUrl,
  secondaryImageUrl
}) => {
  return (
    <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
            <p className="text-green-50 mb-6 max-w-lg">{description}</p>
          </div>
          
          {(imageUrl || secondaryImageUrl) && (
            <div className="md:w-1/2 flex justify-center gap-4">
              {imageUrl && (
                <img 
                  src={imageUrl} 
                  alt="Garden before" 
                  className="rounded-lg shadow-lg max-h-72 object-cover flex-1" 
                />
              )}
              {secondaryImageUrl && (
                <img 
                  src={secondaryImageUrl} 
                  alt="Garden after" 
                  className="rounded-lg shadow-lg max-h-72 object-cover flex-1" 
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;