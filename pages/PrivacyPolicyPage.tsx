import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <section className="py-24 bg-black text-gray-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-lime-400">Privacy Policy</h1>
          <p className="text-center text-gray-500 mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 prose prose-invert prose-lg max-w-none prose-a:text-lime-400 hover:prose-a:text-lime-300">
            <p>Your privacy is important to us. It is ShamiraHub's policy to respect your privacy regarding any information we may collect from you across our website.</p>
            
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">1. Information We Collect</h2>
              <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
              <p>The only personal data we collect and store is the username you provide upon registration and your password (in a secure, non-retrievable format in a real application). We also store your account creation date and assigned User ID.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">2. How We Use Your Information</h2>
              <p>We use the information we collect in various ways, including to:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service, to provide you with updates and other information relating to the website</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">3. Log Files</h2>
              <p>ShamiraHub follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">4. Security</h2>
              <p>The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;