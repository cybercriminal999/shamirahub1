import React from 'react';

const faqs = [
  {
    question: 'Is it safe to use ShamiraHub services?',
    answer: 'Absolutely. We prioritize your account\'s safety above all else. Our delivery methods are designed to be as secure as possible. We have a long-standing reputation for reliability with over 1000+ satisfied customers.'
  },
  {
    question: 'How do I receive my in-game items after purchase?',
    answer: 'Delivery is fast. As soon as your payment is confirmed, our team begins the delivery process. You will receive instructions on how to receive your items in-game. Delivery times may vary but are typically completed within minutes.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept a wide variety of payment methods, including major credit/debit cards, cryptocurrencies, and various online payment platforms. The available options will be displayed at checkout.'
  },
  {
    question: 'What if I need help or support?',
    answer: 'We offer 24/7 customer support. The best way to get help is to join our official Discord server and create a support ticket. Our dedicated staff will assist you as soon as possible.'
  },
  {
    question: 'Can I get a refund?',
    answer: 'Due to the digital nature of our services and items, all sales are final and we generally do not offer refunds. However, if you experience technical issues that our support team cannot resolve, we may consider a refund on a case-by-case basis. Please see our Terms of Service for more details.'
  }
];

const FAQPage: React.FC = () => {
  return (
    <section className="py-24 bg-black text-gray-300 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-lime-400">Frequently Asked Questions</h1>
          <p className="text-center text-gray-500 mb-12">Find answers to common questions about our products and services.</p>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900/40 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;