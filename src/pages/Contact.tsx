import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon. 🐕');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-black text-black mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Have a question about our toys? Want to share your pup's review? 
            We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-black mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-blue-500 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-black mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 rounded-full p-3">
                      <Phone className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">Phone</h3>
                      <p className="text-gray-600">1-800-WAGGY-01 (1-800-924-4901)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Mail className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">Email</h3>
                      <p className="text-gray-600">hello@waggy.com</p>
                      <p className="text-gray-600">support@waggy.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">Address</h3>
                      <p className="text-gray-600">
                        123 Puppy Lane<br />
                        Dogtown, DT 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-full p-3">
                      <Clock className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                        Saturday: 10:00 AM - 4:00 PM PST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">FAQ</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">How long does shipping take?</h4>
                    <p className="text-orange-100">Standard shipping takes 3-5 business days.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Do you offer returns?</h4>
                    <p className="text-orange-100">Yes! 30-day satisfaction guarantee.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Are the toys safe for puppies?</h4>
                    <p className="text-orange-100">All toys are vet-approved and safety tested.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;