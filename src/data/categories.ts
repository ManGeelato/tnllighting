import { Sun, Lightbulb, Zap, AlertCircle } from 'lucide-react';

export const categories = [
  {
    id: 'solar',
    title: 'Solar',
    description: 'Solar energy solutions',
    icon: Sun,
    subcategories: [
      {
        id: 'lithium-batteries',
        name: 'Lithium Batteries',
        image: 'https://images.pexels.com/photos/7656746/pexels-photo-7656746.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'High-performance lithium solar batteries',
      },
      {
        id: 'lead-acid-batteries',
        name: 'Lead Acid Batteries',
        image: 'https://images.pexels.com/photos/8960462/pexels-photo-8960462.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Reliable lead acid battery solutions',
      },
      {
        id: 'solar-panels',
        name: 'Solar Panels',
        image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Efficient solar panel systems',
      },
      {
        id: 'inverters',
        name: 'Inverters',
        image: 'https://images.pexels.com/photos/27633301/pexels-photo-27633301.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Power inverters for solar systems',
      },
    ],
  },
  {
    id: 'lighting',
    title: 'Lighting',
    description: 'Professional lighting solutions',
    icon: Lightbulb,
    subcategories: [
      {
        id: 'pendants',
        name: 'Pendants',
        image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Stylish pendant lights',
      },
      {
        id: 'camera-stands',
        name: 'Camera Stands',
        image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Professional camera lighting stands',
      },
      {
        id: 'connectors',
        name: 'Connectors',
        image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Quality electrical connectors',
      },
      {
        id: 'chandeliers',
        name: 'Chandeliers',
        image: 'https://images.pexels.com/photos/1654459/pexels-photo-1654459.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Elegant chandelier designs',
      },
    ],
  },
  {
    id: 'leds',
    title: 'LEDs',
    description: 'Advanced LED systems',
    icon: Zap,
    subcategories: [
      {
        id: 'power-supply',
        name: 'Power Supply',
        image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'LED power supply units',
      },
      {
        id: 'channels',
        name: 'Channels',
        image: 'https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'LED mounting channels',
      },
      {
        id: 'strips',
        name: 'Strips',
        image: 'https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Flexible LED strip lights',
      },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency Lights',
    description: 'Emergency lighting systems',
    icon: AlertCircle,
    subcategories: [
      {
        id: 'dash',
        name: 'Dash Lights',
        image: 'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Dashboard emergency lights',
      },
      {
        id: 'grill',
        name: 'Grill Lights',
        image: 'https://images.pexels.com/photos/11311599/pexels-photo-11311599.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Grill-mounted emergency lights',
      },
      {
        id: 'roof',
        name: 'Roof Lights',
        image: 'https://images.pexels.com/photos/3094218/pexels-photo-3094218.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Roof-mounted emergency lights',
      },
    ],
  },
];
