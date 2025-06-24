import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-purple-100 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-bold text-pink-800 mb-4 animate-pulse">🌸 Welcome to BlossomBreeze</h1>
        <p className="text-xl text-gray-700 mb-12">Your one-stop shop for fresh and beautiful flowers!</p>
        <Link to="/products" className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition flex items-center justify-center gap-2 mx-auto w-64">
          <ShoppingCart /> Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Home;