import React from 'react';
import { Leaf } from 'lucide-react';

interface HeaderProps {
  siteName: string;
  logoUrl?: string;
}

const Header: React.FC<HeaderProps> = ({ siteName, logoUrl }) => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center">
          {logoUrl ? (
            <img src={logoUrl} alt="Logo" className="h-10 w-auto" />
          ) : (
            <Leaf className="h-8 w-8 text-green-600" />
          )}
          <h1 className="text-xl font-bold text-gray-800 ml-2">{siteName}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;