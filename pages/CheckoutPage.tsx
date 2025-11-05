import React from 'react';

interface CheckoutPageProps {
  productName: string;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ productName }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here.
    alert(`Thank you for purchasing ${productName}!`);
  };

  return (
    <section className="py-24 bg-black min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Checkout</h2>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Complete your purchase for <span className="text-lime-400 font-semibold">{productName}</span>.</p>
            </div>
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Full Name</label>
                  <input type="text" id="name" className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5" placeholder="John Doe" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email Address</label>
                  <input type="email" id="email" className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5" placeholder="john.doe@example.com" required />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-300">Payment Information</label>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 h-24 flex items-center justify-center">
                    <p className="text-gray-400 text-center">Payment gateway placeholder</p>
                  </div>
                </div>
                <button type="submit" className="w-full bg-lime-400 text-black font-bold py-3 px-5 rounded-lg text-lg hover:bg-lime-300 transition-transform hover:scale-105 shadow-lg shadow-lime-500/30">
                  Complete Purchase
                </button>
              </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
