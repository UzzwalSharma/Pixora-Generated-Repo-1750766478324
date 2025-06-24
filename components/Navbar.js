import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-white text-2xl font-bold transition hover:text-pink-100">
          🌸 BlossomBreeze
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/products" className="text-white hover:text-pink-200 transition">Products</Link>
          <Link to="/analytics" className="text-white hover:text-pink-200 transition">Analytics</Link>
          <div className="flex gap-4 text-white">
            <ShoppingCart className="cursor-pointer hover:text-pink-200 transition" />
            <Heart className="cursor-pointer hover:text-pink-200 transition" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;