import React from 'react';
import { Leaf, Mail } from 'lucide-react';

interface FooterProps {
  siteName: string;
  email?: string;
  phone?: string;
  address?: string;
}

const Footer: React.FC<FooterProps> = ({ 
  siteName, 
  email = "twhitaker42@gmail.com"
}) => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-3">
              <Leaf className="h-6 w-6 text-green-400" />
              <h2 className="text-xl font-bold">{siteName}</h2>
            </div>
            <p className="text-gray-400 max-w-md">
              Just our own little meadow, or soon to be!
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2">
              {email && (
                <li className="flex items-center">
                  <Mail size={16} className="mr-2 text-green-400" />
                  <a href={`mailto:${email}`} className="hover:text-green-400 transition-colors">
                    {email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;