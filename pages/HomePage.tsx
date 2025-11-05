import React from 'react';
import { ShieldCheckIcon, RocketLaunchIcon, LifebuoyIcon, BoltIcon } from '../components/Icons';

interface HomePageProps {
  onViewProducts: () => void;
}

// Hero Component
const Hero: React.FC<HomePageProps> = ({ onViewProducts }) => (
  <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] bg-lime-500/10 rounded-full blur-[200px] animate-pulse"></div>
    
    <div className="relative z-10 container mx-auto px-6 py-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-widest text-white">
        The #1 In-Game <span className="text-lime-400">Delivery Hub</span>
      </h1>
      <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-base md:text-lg">
        Welcome to ShamiraHub, the leading provider for in-game currency and items. With over 1000+ happy customers and 1+ year of experience, we guarantee satisfaction and security.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button onClick={onViewProducts} className="w-full sm:w-auto bg-lime-400 text-black font-bold py-4 px-10 rounded-lg text-lg hover:bg-lime-300 transition-transform hover:scale-105 shadow-lg shadow-lime-500/30">
          View Products
        </button>
        <a href="https://discord.gg/shamirahub" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gray-800/50 border-2 border-gray-700 text-gray-200 font-bold py-4 px-10 rounded-lg text-lg hover:border-lime-400 hover:text-lime-400 transition-all hover:scale-105">
          Join Our Discord
        </a>
      </div>
    </div>
  </section>
);

// Features Data
const features = [
  {
    icon: <ShieldCheckIcon className="w-10 h-10 text-lime-400" />,
    title: 'Safe & Secure',
    description: 'Our top priority is your safety. All deliveries are handled securely to protect your account and ensure a smooth transaction.'
  },
  {
    icon: <RocketLaunchIcon className="w-10 h-10 text-lime-400" />,
    title: 'Easy to Use',
    description: 'Get your items in minutes with our user-friendly ordering process and straightforward guides.'
  },
  {
    icon: <LifebuoyIcon className="w-10 h-10 text-lime-400" />,
    title: '24/7 Support',
    description: 'Our dedicated support team is available around the clock to assist you with any questions or issues.'
  },
  {
    icon: <BoltIcon className="w-10 h-10 text-lime-400" />,
    title: 'Instant Delivery',
    description: 'Gain immediate access to your purchase right after payment. No waiting, just pure gaming enhancement.'
  }
];

// Features Component
const Features: React.FC = () => (
  <section className="py-24 bg-black border-t border-gray-900">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose <span className="text-lime-400">ShamiraHub</span>?</h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">We provide industry-leading features and support to give you the ultimate edge.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 text-center transition-all duration-300 ease-in-out hover:border-lime-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-lime-500/10"
          >
            <div className="inline-block bg-gray-800 p-4 rounded-full mb-5">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const HomePage: React.FC<HomePageProps> = ({ onViewProducts }) => {
  return (
    <>
      <Hero onViewProducts={onViewProducts} />
      <Features />
    </>
  );
};

export default HomePage;