import React, { useState, useEffect, useRef } from 'react';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CheckoutPage from './pages/CheckoutPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import ProfilePage from './pages/ProfilePage';
import TOSPage from './pages/TOSPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import FAQPage from './pages/FAQPage';
import { UserCircleIcon, ArrowRightOnRectangleIcon, ChevronDownIcon } from './components/Icons';

// FIX: Export UserStatus type to be used in UserData and AdminPanelPage.
export type UserStatus = 'active' | 'banned' | 'suspended';

export interface UserData {
  username: string;
  createdAt: string;
  uid: number;
  balance: number;
  // FIX: Add optional status property to track user status.
  status?: UserStatus;
}

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentUser: UserData | null;
  onLogout: () => void;
}

// Header Component
const Header: React.FC<HeaderProps> = ({ onNavigate, currentUser, onLogout }) => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800/50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center gap-2 text-2xl font-bold text-lime-400 hover:text-lime-300 transition-colors">
          <span className="text-3xl font-extrabold text-green-600">SH</span>
          <span>ShamiraHub</span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="text-gray-300 hover:text-lime-400 transition-colors font-medium">Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }} className="text-gray-300 hover:text-lime-400 transition-colors font-medium">Products</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('faq'); }} className="text-gray-300 hover:text-lime-400 transition-colors font-medium">FAQ</a>
          <a href="https://discord.gg/shamirahub" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-lime-400 transition-colors font-medium">Discord</a>
        </div>
        {currentUser ? (
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-gray-500 leading-tight">Balance</p>
              <span className="text-sm text-lime-400 font-semibold">${currentUser.balance.toFixed(2)}</span>
            </div>
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 text-gray-300 font-medium hover:text-lime-400 transition-colors focus:outline-none"
              >
                <UserCircleIcon className="h-6 w-6 text-lime-400" />
                <span>{currentUser.username}</span>
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-2 z-50">
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); onNavigate('profile'); setProfileOpen(false); }}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-lime-400"
                  >
                    <UserCircleIcon className="h-5 w-5" /> Profile
                  </a>
                  <button
                    onClick={() => { onLogout(); setProfileOpen(false); }}
                    className="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-lime-400"
                  >
                    <ArrowRightOnRectangleIcon className="h-5 w-5" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('signin'); }} className="border-2 border-lime-400 text-lime-400 px-5 py-2 rounded-lg hover:bg-lime-400 hover:text-black transition-all font-semibold text-sm">
            SIGN IN
          </a>
        )}
      </nav>
    </header>
  );
};


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
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('tos'); }} className="text-gray-400 hover:text-lime-400 transition-colors text-sm">Terms of Service</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }} className="text-gray-400 hover:text-lime-400 transition-colors text-sm">Privacy Policy</a>
          <a href="https://discord.gg/shamirahub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lime-400 transition-colors text-sm">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [productToCheckout, setProductToCheckout] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  useEffect(() => {
    // Check local storage for a logged-in user when the app loads
    try {
      const loggedInUsername = localStorage.getItem('currentUser');
      if (loggedInUsername) {
        const usersRaw = localStorage.getItem('shamiraHubUsers');
        const users = usersRaw ? JSON.parse(usersRaw) : {};
        const userData = users[loggedInUsername.toLowerCase()];
        if (userData) {
          setCurrentUser(userData);
        } else {
          // Data inconsistency: currentUser exists but user data doesn't. Clean up.
          localStorage.removeItem('currentUser');
        }
      }
    } catch (error) {
      console.error("Error loading user data from localStorage:", error);
      // Clear potentially corrupted data to prevent future crashes on refresh.
      localStorage.removeItem('currentUser');
      localStorage.removeItem('shamiraHubUsers');
    }
  }, []);


  const navigateTo = (page: string) => {
    window.scrollTo(0, 0); // Scroll to top on page change
    setCurrentPage(page);
  };

  const handleCheckout = (productName: string) => {
    setProductToCheckout(productName);
    navigateTo('checkout');
  }
  
  const handleLoginSuccess = (username: string) => {
    const users = JSON.parse(localStorage.getItem('shamiraHubUsers') || '{}');
    const userData = users[username.toLowerCase()];
    if (userData) {
      setCurrentUser(userData);
      localStorage.setItem('currentUser', userData.username);
    }
    navigateTo('home');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    navigateTo('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'products':
        return <ProductsPage onCheckout={handleCheckout} />;
      case 'checkout':
        return <CheckoutPage productName={productToCheckout || 'Product'} />;
      case 'signup':
        return <SignUpPage onSignUpSuccess={handleLoginSuccess} onNavigate={navigateTo} />;
      case 'signin':
        return <SignInPage onLoginSuccess={handleLoginSuccess} onNavigate={navigateTo} />;
       case 'profile':
        return currentUser ? <ProfilePage currentUser={currentUser.username} onNavigate={navigateTo} /> : <SignInPage onLoginSuccess={handleLoginSuccess} onNavigate={navigateTo} />;
      case 'tos':
        return <TOSPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'faq':
        return <FAQPage />;
      case 'home':
      default:
        return <HomePage onViewProducts={() => navigateTo('products')} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans antialiased">
      <Header onNavigate={navigateTo} currentUser={currentUser} onLogout={handleLogout} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
