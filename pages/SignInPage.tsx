import React, { useState } from 'react';
import { UserIcon, KeyIcon, EyeIcon, EyeSlashIcon } from '../components/Icons';

interface SignInPageProps {
  onLoginSuccess: (username: string) => void;
  onNavigate: (page: string) => void;
}

const SignInPage: React.FC<SignInPageProps> = ({ onLoginSuccess, onNavigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedUsername = username.trim();

    if (!trimmedUsername || !password) {
      setError('Username and password are required.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('shamiraHubUsers') || '{}');
    const user = users[trimmedUsername.toLowerCase()];

    if (user && user.password === password) {
      onLoginSuccess(user.username);
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <section className="py-24 bg-black min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Welcome Back</h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Sign in to access your ShamiraHub account.</p>
          </div>

          <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8">
            <form onSubmit={handleSignInSubmit}>
              <div className="relative mb-6">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-300">Username</label>
                <div className="absolute inset-y-0 left-0 top-7 flex items-center pl-3 pointer-events-none">
                  <UserIcon className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 pl-10"
                  placeholder="your_username"
                  required
                  aria-label="Username"
                />
              </div>
              <div className="relative mb-8">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">Password</label>
                <div className="absolute inset-y-0 left-0 top-7 flex items-center pl-3 pointer-events-none">
                  <KeyIcon className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 pl-10 pr-10"
                  placeholder="••••••••"
                  required
                  aria-label="Password"
                />
                 <button
                    type="button"
                    className="absolute inset-y-0 right-0 top-7 flex items-center pr-3"
                    onMouseDown={() => setIsPasswordVisible(true)}
                    onMouseUp={() => setIsPasswordVisible(false)}
                    onMouseLeave={() => setIsPasswordVisible(false)}
                    aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                  >
                    {isPasswordVisible ? (
                      <EyeSlashIcon className="w-5 h-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
              </div>
              {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}
              <button type="submit" className="w-full bg-lime-400 text-black font-bold py-3 px-5 rounded-lg text-lg hover:bg-lime-300 transition-transform hover:scale-105 shadow-lg shadow-lime-500/30">
                Sign In
              </button>
            </form>
            <p className="text-center text-sm text-gray-400 mt-6">
              Don't have an account?{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('signup'); }} className="font-medium text-lime-400 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;