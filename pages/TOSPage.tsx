import React from 'react';

const TOSPage: React.FC = () => {
  return (
    <section className="py-24 bg-black text-gray-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-lime-400">Terms of Service</h1>
          <p className="text-center text-gray-500 mb-12">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 prose prose-invert prose-lg max-w-none prose-a:text-lime-400 hover:prose-a:text-lime-300">
            <p>Welcome to ShamiraHub! These terms and conditions outline the rules and regulations for the use of ShamiraHub's Website, located at this application.</p>
            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use ShamiraHub if you do not agree to take all of the terms and conditions stated on this page.</p>
            
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">1. License</h2>
              <p>Unless otherwise stated, ShamiraHub and/or its licensors own the intellectual property rights for all material on ShamiraHub. All intellectual property rights are reserved. You may access this from ShamiraHub for your own personal use subjected to restrictions set in these terms and conditions.</p>
              <p>You must not:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Republish material from ShamiraHub</li>
                <li>Sell, rent or sub-license material from ShamiraHub</li>
                <li>Reproduce, duplicate or copy material from ShamiraHub</li>
                <li>Redistribute content from ShamiraHub</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">2. User Accounts</h2>
              <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
              <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-white mb-2">3. Limitation of Liability</h2>
                <p>In no event shall ShamiraHub, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. ShamiraHub, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
            </div>

             <div>
                <h2 className="text-2xl font-semibold text-white mb-2">4. Governing Law</h2>
                <p>These Terms will be governed by and interpreted in accordance with the laws of the jurisdiction in which the company is based, and you submit to the non-exclusive jurisdiction of the state and federal courts located in that jurisdiction for the resolution of any disputes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TOSPage;