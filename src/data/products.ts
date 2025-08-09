import { Product } from '../context/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Luxury Rope Bone',
    price: 24.99,
    image: 'https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'chew',
    description: 'Premium cotton rope bone toy perfect for medium to large dogs. Hand-braided with organic cotton fibers.',
    features: ['100% Organic Cotton', 'Hand-Braided', 'Dental Health', 'Machine Washable'],
    inStock: true
  },
  {
    id: '2',
    name: 'Squeaky Duck Deluxe',
    price: 18.99,
    image: 'https://images.pexels.com/photos/8434791/pexels-photo-8434791.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'squeaky',
    description: 'Adorable yellow duck with ultra-durable squeaker. Made from non-toxic, eco-friendly materials.',
    features: ['Ultra-Durable Squeaker', 'Non-Toxic Materials', 'Eco-Friendly', 'Easy to Clean'],
    inStock: true
  },
  {
    id: '3',
    name: 'Interactive Puzzle Ball',
    price: 32.99,
    image: 'https://images.pexels.com/photos/7210626/pexels-photo-7210626.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'interactive',
    description: 'Mental stimulation puzzle ball that dispenses treats. Perfect for intelligent breeds.',
    features: ['Mental Stimulation', 'Treat Dispenser', 'Adjustable Difficulty', 'BPA-Free'],
    inStock: true
  },
  {
    id: '4',
    name: 'Plush Elephant Comfort',
    price: 22.99,
    image: 'https://images.pexels.com/photos/8434790/pexels-photo-8434790.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'plush',
    description: 'Ultra-soft plush elephant perfect for cuddling and comfort. Hypoallergenic filling.',
    features: ['Hypoallergenic', 'Ultra-Soft', 'Comfort Design', 'Machine Washable'],
    inStock: true
  },
  {
    id: '5',
    name: 'Tug-of-War Champion',
    price: 28.99,
    image: 'https://images.pexels.com/photos/7210633/pexels-photo-7210633.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tug',
    description: 'Heavy-duty tug rope designed for power players. Reinforced stitching for maximum durability.',
    features: ['Heavy-Duty', 'Reinforced Stitching', 'Power Player Design', 'Natural Fibers'],
    inStock: true
  },
  {
    id: '6',
    name: 'Fetch Frisbee Pro',
    price: 19.99,
    image: 'https://images.pexels.com/photos/7210629/pexels-photo-7210629.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fetch',
    description: 'Aerodynamic frisbee designed for long-distance fetch. Soft on teeth, built to last.',
    features: ['Aerodynamic Design', 'Soft on Teeth', 'Long Distance', 'Weather Resistant'],
    inStock: true
  },
  {
    id: '7',
    name: 'Dental Chew Rings',
    price: 16.99,
    image: 'https://images.pexels.com/photos/7210742/pexels-photo-7210742.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'dental',
    description: 'Textured chew rings that promote dental health while providing hours of entertainment.',
    features: ['Dental Health', 'Textured Surface', 'Long-Lasting', 'Vet Recommended'],
    inStock: true
  },
  {
    id: '8',
    name: 'Hide & Seek Squirrels',
    price: 26.99,
    image: 'https://images.pexels.com/photos/8434789/pexels-photo-8434789.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'interactive',
    description: 'Interactive toy with three squeaky squirrels hidden in a tree trunk. Mental stimulation at its best.',
    features: ['3 Squeaky Squirrels', 'Mental Stimulation', 'Hide & Seek Fun', 'Premium Plush'],
    inStock: false
  }
];

export const categories = [
  { id: 'all', name: 'All Toys', icon: '🎾' },
  { id: 'chew', name: 'Chew Toys', icon: '🦴' },
  { id: 'squeaky', name: 'Squeaky Toys', icon: 🦆' },
  { id: 'interactive', name: 'Interactive', icon: '🧩' },
  { id: 'plush', name: 'Plush Toys', icon: '🧸' },
  { id: 'tug', name: 'Tug Toys', icon: '🪢' },
  { id: 'fetch', name: 'Fetch Toys', icon: '🥏' },
  { id: 'dental', name: 'Dental Care', icon: '🦷' }
];