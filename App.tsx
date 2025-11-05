import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CheckoutPage from './pages/CheckoutPage';

// Header Component
const Header: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => (
  <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800/50">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="text-2xl font-bold text-lime-400 hover:text-lime-300 transition-colors">
        ShamiraHub
      </a>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="text-gray-300 hover:text-lime-400 transition-colors font-medium">Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }} className="text-gray-300 hover:text-lime-400 transition-colors font-medium">Products</a>
        <a href="#" className="text-gray-300 hover:text-lime-400 transition-colors font-medium">FAQ</a>
        <a href="https://discord.gg/shamirahub" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-lime-400 transition-colors font-medium">Discord</a>
      </div>
      <a href="#" className="border-2 border-lime-400 text-lime-400 px-5 py-2 rounded-lg hover:bg-lime-400 hover:text-black transition-all font-semibold text-sm">
        SIGN IN
      </a>
    </nav>
  </header>
);

// Footer Component
const Footer: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => (
  <footer className="bg-black border-t border-gray-900">
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="text-2xl font-bold text-lime-400">
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
  const [currentPage, setCurrentPage] = useState('home');
  const [productToCheckout, setProductToCheckout] = useState<string | null>(null);

  const navigateTo = (page: string) => {
    window.scrollTo(0, 0); // Scroll to top on page change
    setCurrentPage(page);
  };

  const handleCheckout = (productName: string) => {
    setProductToCheckout(productName);
    navigateTo('checkout');
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'products':
        return <ProductsPage onCheckout={handleCheckout} />;
      case 'checkout':
        return <CheckoutPage productName={productToCheckout || 'Product'} />;
      case 'home':
      default:
        return <HomePage onViewProducts={() => navigateTo('products')} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans antialiased">
      <Header onNavigate={navigateTo} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;