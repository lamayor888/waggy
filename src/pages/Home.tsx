import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

function Home() {
  const featuredProducts = products.slice(0, 4);
  const mainCategories = categories.slice(1, 7);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-black text-black leading-tight">
                Premium Toys for 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">
                  {' '}Happy Pups
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover our collection of luxury dog toys designed to bring joy, 
                comfort, and endless entertainment to your beloved furry friend.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-black text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  Our Story
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-orange-400 to-blue-400 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Happy dog with toy"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Truck className="h-8 w-8 text-orange-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Shield className="h-8 w-8 text-blue-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">30-day satisfaction guarantee</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Heart className="h-8 w-8 text-green-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Made with Love</h3>
              <p className="text-gray-600">Crafted with care for your pet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-black mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Find the perfect toy for your furry friend</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {mainCategories.map(category => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-bold text-black group-hover:text-orange-500 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-black mb-4">Featured Toys</h2>
            <p className="text-xl text-gray-600">Our most popular picks this month</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/shop"
              className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-colors inline-flex items-center group"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-black mb-4">Happy Customers</h2>
            <p className="text-xl text-gray-600">See what pet parents are saying</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                review: "My golden retriever absolutely loves the Interactive Puzzle Ball! Keeps him entertained for hours.",
                rating: 5,
                product: "Interactive Puzzle Ball"
              },
              {
                name: "Mike T.",
                review: "Best quality toys I've found. The rope bone has lasted months with my German Shepherd!",
                rating: 5,
                product: "Luxury Rope Bone"
              },
              {
                name: "Emily R.",
                review: "Fast shipping, great customer service, and my pups are obsessed with their new toys!",
                rating: 5,
                product: "Squeaky Duck Deluxe"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.review}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-black">{review.name}</span>
                  <span className="text-sm text-orange-500">{review.product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;