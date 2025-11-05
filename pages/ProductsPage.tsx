import React from 'react';
import { RobuxIcon } from '../components/Icons';

interface ProductsPageProps {
  onCheckout: (productName: string) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onCheckout }) => {
  return (
    <section className="py-24 bg-black min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our <span className="text-lime-400">Products</span></h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Browse our selection of premium in-game currency and items.</p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-sm bg-gray-900/40 border border-gray-800 rounded-2xl p-8 text-center transition-all duration-300 ease-in-out hover:border-lime-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-lime-500/10">
            <div className="inline-block bg-gray-800 p-4 rounded-full mb-5">
              <RobuxIcon className="w-10 h-10 text-lime-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white">Robux</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Get your in-game currency safely and instantly. Available for all platforms.</p>
            <div className="text-3xl font-bold text-lime-400 mb-6">$5.49</div>
            <button
              onClick={() => onCheckout('Robux')}
              className="w-full bg-lime-400 text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-lime-300 transition-transform hover:scale-105 shadow-lg shadow-lime-500/30"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;