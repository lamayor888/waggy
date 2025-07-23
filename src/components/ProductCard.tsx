import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../context/CartContext';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="group">
      <Link to={`/product/${product.id}`}>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          {/* Image Container */}
          <div className="relative overflow-hidden bg-gray-50">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Out of Stock
                </span>
              </div>
            )}
            
            {/* Floating Action Buttons */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
              <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-black mb-2 group-hover:text-orange-500 transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-black">
                ${product.price}
              </span>
              
              {product.inStock && (
                <button
                  onClick={handleAddToCart}
                  className="bg-gradient-to-r from-orange-500 to-blue-500 text-white p-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 group/btn"
                >
                  <ShoppingCart className="h-5 w-5 group-hover/btn:scale-110 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;