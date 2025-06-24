import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

const Products = () => {
  const flowers = [
    {
      id: 1,
      name: 'Rose Bouquet',
      price: 25.99,
      image: 'https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      name: 'Sunflower Bundle',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1506045412240-22980189a405?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80'
    },
    {
      id: 3,
      name: 'Tulip Collection',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1526400475181-c5501f3d6740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-pink-50 to-purple-100 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-pink-800 mb-8">Our Flowers 🌸</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {flowers.map(flower => (
            <div key={flower.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={flower.image} alt={flower.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{flower.name}</h2>
                <p className="text-gray-600 mb-4">${flower.price}</p>
                <div className="flex gap-4">
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition flex items-center gap-2">
                    <ShoppingCart /> Add to Cart
                  </button>
                  <button className="bg-white border border-pink-600 text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-50 transition flex items-center gap-2">
                    <Heart /> Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;