import { Product } from '../context/CartContext';

export const products: Product[] = [
  // Chew Toys
  {
    id: '1',
    name: 'Sunny Swirl Chaser',
    price: 24.99,
    image: 'https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'chew',
    description: 'Bright and colorful chew toy with swirl patterns that keeps dogs engaged for hours.',
    features: ['Durable Material', 'Bright Colors', 'Safe for All Sizes', 'Easy to Clean'],
    inStock: true
  },
  {
    id: '2',
    name: 'Sunny Spin Ring',
    price: 18.99,
    image: 'https://images.pexels.com/photos/8434791/pexels-photo-8434791.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'chew',
    description: 'Ring-shaped chew toy that spins and bounces, perfect for active chewers.',
    features: ['Spinning Action', 'Bounce Design', 'Dental Health', 'Non-Toxic'],
    inStock: true
  },
  {
    id: '3',
    name: 'Sunny Soar Flyer',
    price: 22.99,
    image: 'https://images.pexels.com/photos/7210626/pexels-photo-7210626.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'chew',
    description: 'Aerodynamic chew toy that flies through the air and provides satisfying chewing.',
    features: ['Aerodynamic Design', 'Chew Resistant', 'Bright Colors', 'Lightweight'],
    inStock: true
  },
  {
    id: '4',
    name: 'PupBuzz Balls',
    price: 16.99,
    image: 'https://images.pexels.com/photos/8434790/pexels-photo-8434790.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'chew',
    description: 'Set of textured balls that create a buzzing sound when chewed, stimulating play.',
    features: ['Buzzing Sound', 'Textured Surface', 'Set of 3', 'Dental Benefits'],
    inStock: true
  },

  // Plush Toys
  {
    id: '5',
    name: 'PupGarden Treat',
    price: 19.99,
    image: 'https://images.pexels.com/photos/7210633/pexels-photo-7210633.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'plush',
    description: 'Adorable garden-themed plush toy that looks like a treat, perfect for gentle play.',
    features: ['Ultra-Soft Plush', 'Garden Theme', 'Squeaker Inside', 'Machine Washable'],
    inStock: true
  },
  {
    id: '6',
    name: 'PupFizz Cans',
    price: 24.99,
    image: 'https://images.pexels.com/photos/7210629/pexels-photo-7210629.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'plush',
    description: 'Fun soda can-shaped plush toys that crinkle and squeak for extra entertainment.',
    features: ['Crinkle Sound', 'Squeaker', 'Realistic Design', 'Set of 2'],
    inStock: true
  },
  {
    id: '7',
    name: 'Gator Giggles',
    price: 21.99,
    image: 'https://images.pexels.com/photos/7210742/pexels-photo-7210742.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'plush',
    description: 'Playful alligator plush with multiple squeakers that create giggling sounds.',
    features: ['Multiple Squeakers', 'Giggling Sounds', 'Long Body Design', 'Soft Texture'],
    inStock: true
  },
  {
    id: '8',
    name: 'FeatherFetch Friend',
    price: 17.99,
    image: 'https://images.pexels.com/photos/8434789/pexels-photo-8434789.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'plush',
    description: 'Bird-shaped plush toy with realistic feathers that trigger natural hunting instincts.',
    features: ['Realistic Feathers', 'Natural Instincts', 'Soft Plush', 'Squeaker'],
    inStock: true
  },
  {
    id: '9',
    name: 'Quacky Cuddles',
    price: 20.99,
    image: 'https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'plush',
    description: 'Cuddly duck plush toy perfect for snuggling and comfort play.',
    features: ['Extra Cuddly', 'Duck Design', 'Comfort Play', 'Hypoallergenic'],
    inStock: true
  },

  // Paw Essentials
  {
    id: '10',
    name: 'FurMist Massager',
    price: 34.99,
    image: 'https://images.pexels.com/photos/7210626/pexels-photo-7210626.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'essentials',
    description: 'Gentle misting massager that soothes and relaxes your pup during grooming.',
    features: ['Gentle Misting', 'Massage Function', 'Relaxing', 'Easy to Use'],
    inStock: true
  },
  {
    id: '11',
    name: 'WoofWaste Buddy',
    price: 12.99,
    image: 'https://images.pexels.com/photos/8434791/pexels-photo-8434791.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'essentials',
    description: 'Convenient waste bag dispenser that attaches to any leash for easy cleanup.',
    features: ['Leash Attachment', 'Easy Cleanup', 'Compact Design', 'Includes Bags'],
    inStock: true
  },
  {
    id: '12',
    name: 'PawHydrate Duo',
    price: 28.99,
    image: 'https://images.pexels.com/photos/7210633/pexels-photo-7210633.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'essentials',
    description: 'Dual water and food bowl system that keeps your pup hydrated and fed on the go.',
    features: ['Dual Bowl System', 'Portable', 'Non-Slip Base', 'Easy to Clean'],
    inStock: true
  },

  // Tug Toys
  {
    id: '13',
    name: 'FetchTug Looper',
    price: 26.99,
    image: 'https://images.pexels.com/photos/7210629/pexels-photo-7210629.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tug',
    description: 'Loop-designed tug toy perfect for fetch and tug-of-war games.',
    features: ['Loop Design', 'Fetch & Tug', 'Durable Rope', 'Easy Grip'],
    inStock: true
  },
  {
    id: '14',
    name: 'Rainbow Tugger',
    price: 23.99,
    image: 'https://images.pexels.com/photos/7210742/pexels-photo-7210742.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tug',
    description: 'Colorful rainbow rope toy that brightens up any play session.',
    features: ['Rainbow Colors', 'Braided Rope', 'Strong Grip', 'Weather Resistant'],
    inStock: true
  },
  {
    id: '15',
    name: 'Loop-a-Chomp',
    price: 21.99,
    image: 'https://images.pexels.com/photos/8434789/pexels-photo-8434789.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tug',
    description: 'Unique loop design with chewable sections for dual-purpose play.',
    features: ['Chewable Sections', 'Loop Design', 'Dual Purpose', 'Safe Materials'],
    inStock: true
  },
  {
    id: '16',
    name: 'Braided Bliss',
    price: 19.99,
    image: 'https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tug',
    description: 'Classic braided rope toy that provides hours of tugging satisfaction.',
    features: ['Classic Braid', 'Long Lasting', 'Natural Fibers', 'Dental Benefits'],
    inStock: true
  },
  {
    id: '17',
    name: 'PupLift Rope',
    price: 25.99,
    image: 'https://images.pexels.com/photos/8434790/pexels-photo-8434790.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tug',
    description: 'Heavy-duty rope toy designed for lifting and strength training play.',
    features: ['Heavy Duty', 'Strength Training', 'Thick Rope', 'Professional Grade'],
    inStock: true
  },
  {
    id: '18',
    name: 'Toss-a-Knot',
    price: 18.99,
    image: 'https://images.pexels.com/photos/7210626/pexels-photo-7210626.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tug',
    description: 'Knotted rope toy perfect for tossing and tugging games.',
    features: ['Multiple Knots', 'Toss & Tug', 'Easy Throw', 'Durable Construction'],
    inStock: true
  },
  {
    id: '19',
    name: 'ChompSphere',
    price: 22.99,
    image: 'https://images.pexels.com/photos/8434791/pexels-photo-8434791.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tug',
    description: 'Spherical tug toy with rope attachments for unique play experiences.',
    features: ['Spherical Design', 'Rope Attachments', 'Unique Play', 'Bounce Action'],
    inStock: true
  },
  {
    id: '20',
    name: 'PupToss Loop',
    price: 20.99,
    image: 'https://images.pexels.com/photos/7210633/pexels-photo-7210633.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tug',
    description: 'Loop-shaped toy designed for easy tossing and catching.',
    features: ['Easy Toss', 'Loop Shape', 'Catch Friendly', 'Lightweight'],
    inStock: true
  },
  {
    id: '21',
    name: 'GripKnot Thrower',
    price: 24.99,
    image: 'https://images.pexels.com/photos/7210629/pexels-photo-7210629.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tug',
    description: 'Knotted rope with grip handle for enhanced throwing and tugging.',
    features: ['Grip Handle', 'Enhanced Throwing', 'Knotted Design', 'Comfortable Hold'],
    inStock: true
  },

  // Interactive
  {
    id: '22',
    name: 'TurboTug Ball',
    price: 32.99,
    image: 'https://images.pexels.com/photos/7210742/pexels-photo-7210742.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'interactive',
    description: 'High-speed interactive ball that responds to your dog\'s movements.',
    features: ['Motion Responsive', 'High Speed', 'Interactive Play', 'Rechargeable'],
    inStock: true
  },
  {
    id: '23',
    name: 'PawMotion Ball',
    price: 29.99,
    image: 'https://images.pexels.com/photos/8434789/pexels-photo-8434789.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'interactive',
    description: 'Motion-activated ball that moves and rolls to encourage active play.',
    features: ['Motion Activated', 'Auto Movement', 'Encourages Activity', 'Battery Powered'],
    inStock: true
  },
  {
    id: '24',
    name: 'WaggyCore Motion Ball',
    price: 35.99,
    image: 'https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'interactive',
    description: 'Advanced motion ball with core technology that adapts to your dog\'s play style.',
    features: ['Core Technology', 'Adaptive Play', 'Advanced Motion', 'Smart Sensors'],
    inStock: true
  },

  // Puzzle
  {
    id: '25',
    name: 'Pawzzle Wheel',
    price: 38.99,
    image: 'https://images.pexels.com/photos/8434790/pexels-photo-8434790.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'puzzle',
    description: 'Rotating wheel puzzle that challenges your dog to find hidden treats.',
    features: ['Rotating Wheel', 'Hidden Treats', 'Mental Challenge', 'Adjustable Difficulty'],
    inStock: true
  },
  {
    id: '26',
    name: 'Snack Blossom',
    price: 31.99,
    image: 'https://images.pexels.com/photos/7210626/pexels-photo-7210626.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'puzzle',
    description: 'Flower-shaped puzzle feeder that opens like petals to reveal treats.',
    features: ['Flower Design', 'Petal Opening', 'Treat Dispenser', 'Slow Feeding'],
    inStock: true
  },
  {
    id: '27',
    name: 'Snack-a-Duck',
    price: 27.99,
    image: 'https://images.pexels.com/photos/8434791/pexels-photo-8434791.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'puzzle',
    description: 'Duck-shaped puzzle toy with multiple compartments for treat hiding.',
    features: ['Duck Shape', 'Multiple Compartments', 'Treat Hiding', 'Brain Stimulation'],
    inStock: true
  },
  {
    id: '28',
    name: 'TumbleTreat',
    price: 33.99,
    image: 'https://images.pexels.com/photos/7210633/pexels-photo-7210633.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'puzzle',
    description: 'Tumbling puzzle ball that dispenses treats as it rolls and moves.',
    features: ['Tumbling Action', 'Treat Dispenser', 'Rolling Motion', 'Interactive Fun'],
    inStock: false
  }
];

export const categories = [
  { id: 'all', name: 'All Toys', icon: '🎾' },
  { id: 'chew', name: 'Chew Toys', icon: '🦴' },
  { id: 'plush', name: 'Plush Toys', icon: '🧸' },
  { id: 'essentials', name: 'Paw Essentials', icon: '🐾' },
  { id: 'tug', name: 'Tug Toys', icon: '🪢' },
  { id: 'interactive', name: 'Interactive', icon: '🎯' },
  { id: 'puzzle', name: 'Puzzle', icon: '🧩' }
];