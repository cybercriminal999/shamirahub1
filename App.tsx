import React from 'react';
import { ShieldCheckIcon, RocketLaunchIcon, LifebuoyIcon, BoltIcon } from './components/Icons';

// Header Component
const Header: React.FC = () => (
  <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800/50">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#" className="text-2xl font-bold text-lime-400 hover:text-lime-300 transition-colors">
        ShamiraHub
      </a>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-300 hover:text-lime-400 transition-colors font-medium">Home</a>
        <a href="#" className="text-gray-300 hover:text-lime-400 transition-colors font-medium">Products</a>
        <a href="#" className="text-gray-300 hover:text-lime-400 transition-colors font-medium">FAQ</a>
        <a href="https://discord.gg/shamirahub" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-lime-400 transition-colors font-medium">Discord</a>
      </div>
      <a href="#" className="border-2 border-lime-400 text-lime-400 px-5 py-2 rounded-lg hover:bg-lime-400 hover:text-black transition-all font-semibold text-sm">
        SIGN IN
      </a>
    </nav>
  </header>
);

// Hero Component
const Hero: React.FC = () => (
  <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] bg-lime-500/10 rounded-full blur-[200px] animate-pulse"></div>
    
    <div className="relative z-10 container mx-auto px-6 py-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-widest text-white">
        The #1 Gaming <span className="text-lime-400">Utility Hub</span>
      </h1>
      <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-base md:text-lg">
        Welcome to ShamiraHub, the leading provider for gaming utilities. With over 100,000+ happy customers and 3+ years of experience, we guarantee satisfaction and security.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#" className="w-full sm:w-auto bg-lime-400 text-black font-bold py-4 px-10 rounded-lg text-lg hover:bg-lime-300 transition-transform hover:scale-105 shadow-lg shadow-lime-500/30">
          View Products
        </a>
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
    description: 'Our top priority is your safety. All utilities are rigorously tested to ensure they are undetectable and secure.'
  },
  {
    icon: <RocketLaunchIcon className="w-10 h-10 text-lime-400" />,
    title: 'Easy to Use',
    description: 'Get up and running in minutes with our user-friendly launchers and straightforward setup guides.'
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

// Footer Component
const Footer: React.FC = () => (
  <footer className="bg-black border-t border-gray-900">
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <a href="#" className="text-2xl font-bold text-lime-400">
            ShamiraHub
          </a>
          <p className="text-gray-500 mt-1 text-sm">© {new Date().getFullYear()} ShamiraHub. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors text-sm">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors text-sm">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;