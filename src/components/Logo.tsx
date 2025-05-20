import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <span className="text-orange-500 font-semibold text-xl">oye</span>
      <span className="text-gray-800 font-semibold text-xl">Commerz</span>
      <div className="ml-2 flex items-center border-l border-gray-300 pl-2">
        <ShoppingBag className="h-5 w-5 text-black" />
        <span className="ml-1 text-xs font-medium">shopify<span className="font-bold">plus</span></span>
      </div>
    </div>
  );
};

export default Logo;