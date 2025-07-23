import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          {/* Playful 404 Illustration */}
          <div className="mb-8">
            <div className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500 mb-4">
              404
            </div>
            <div className="text-6xl mb-4">🐕‍🦺</div>
          </div>
          
          <h1 className="text-4xl font-black text-black mb-4">
            Oops! This pup ran away!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Looks like the page you're looking for has wandered off to chase squirrels. 
            Don't worry, we'll help you find your way back to the good stuff!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
            >
              <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Go Home
            </Link>
            
            <Link
              to="/shop"
              className="border-2 border-black text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center group"
            >
              <Search className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Browse Toys
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500">
              Still having trouble? <Link to="/contact" className="text-orange-500 hover:text-orange-600 font-semibold">Contact our support team</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;