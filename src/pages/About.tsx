import React from 'react';
import { Heart, Award, Truck, Leaf } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-black text-black mb-6">
            Made with Love for 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">
              {' '}Every Pup
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            At PawPlay, we believe every dog deserves the highest quality toys that combine 
            fun, safety, and durability. Our mission is to create moments of pure joy 
            between you and your beloved companion.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-black mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2020 by dog lovers Sarah and Mike, PawPlay started with a simple 
                  observation: most dog toys broke within days, leaving pets disappointed and 
                  owners frustrated.
                </p>
                <p>
                  After countless hours of research, testing, and consultation with veterinarians, 
                  we developed our first line of premium toys that could withstand even the most 
                  enthusiastic play sessions while remaining completely safe.
                </p>
                <p>
                  Today, PawPlay is trusted by over 50,000 happy customers and their furry friends. 
                  Every toy we create is tested by real dogs and approved by pet professionals.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-orange-400 to-blue-400 rounded-3xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Happy dogs playing"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-black mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Heart className="h-8 w-8 text-red-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-3">Love First</h3>
              <p className="text-gray-600">Every product is crafted with genuine love for dogs and their happiness.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <Award className="h-8 w-8 text-yellow-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Promise</h3>
              <p className="text-gray-600">Premium materials and rigorous testing ensure lasting durability.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Truck className="h-8 w-8 text-blue-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">Quick shipping so your pup can start playing as soon as possible.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Leaf className="h-8 w-8 text-green-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">Sustainable materials and packaging for a better planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-black mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The humans behind PawPlay</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Co-Founder & CEO",
                bio: "Dog mom to three rescue pups with 10+ years in product design.",
                image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Mike Chen",
                role: "Co-Founder & CTO",
                bio: "Former engineer turned dog toy innovator with a passion for quality.",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Veterinary Advisor",
                bio: "Board-certified veterinarian ensuring all toys meet safety standards.",
                image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;