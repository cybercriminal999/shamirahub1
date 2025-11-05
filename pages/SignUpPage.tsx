import React, { useState } from 'react';
import { UserIcon, KeyIcon, EyeIcon, EyeSlashIcon } from '../components/Icons';

interface SignUpPageProps {
  onSignUpSuccess: (username: string) => void;
  onNavigate: (page: string) => void;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ onSignUpSuccess, onNavigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedUsername = username.trim();

    if (!trimmedUsername || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    
    const usernameRegex = /^[a-zA-Z0-9._]+$/;
    if (!usernameRegex.test(trimmedUsername)) {
      setError('Username can only contain letters, numbers, periods, and underscores.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    
    const users = JSON.parse(localStorage.getItem('shamiraHubUsers') || '{}');
    const normalizedUsername = trimmedUsername.toLowerCase();
    if (users[normalizedUsername]) {
      setError('This username is already taken. Please choose another one.');
      return;
    }

    // Generate UID
    const userCounter = JSON.parse(localStorage.getItem('shamiraHubUserCounter') || '0');
    const newUID = userCounter + 1;
    localStorage.setItem('shamiraHubUserCounter', JSON.stringify(newUID));

    // In a real app, you would hash the password before storing it.
    users[normalizedUsername] = { 
      username: trimmedUsername,
      password: password,
      createdAt: new Date().toISOString(),
      uid: newUID,
      balance: 0.00
    };
    localStorage.setItem('shamiraHubUsers', JSON.stringify(users));

    alert('Sign up successful! Welcome to ShamiraHub.');
    onSignUpSuccess(trimmedUsername);
  };

  return (
    <section className="py-24 bg-black min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Create Your Account</h2>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Join ShamiraHub today.</p>
            </div>
            
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8">
              <form onSubmit={handleSignUpSubmit}>
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
                <div className="relative mb-6">
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
                <div className="relative mb-8">
                  <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-300">Confirm Password</label>
                  <div className="absolute inset-y-0 left-0 top-7 flex items-center pl-3 pointer-events-none">
                    <KeyIcon className="w-5 h-5 text-gray-400" />
                  </div>
                  <input 
                    type={isConfirmPasswordVisible ? 'text' : 'password'} 
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 pl-10 pr-10" 
                    placeholder="••••••••" 
                    required 
                    aria-label="Confirm Password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 top-7 flex items-center pr-3"
                    onMouseDown={() => setIsConfirmPasswordVisible(true)}
                    onMouseUp={() => setIsConfirmPasswordVisible(false)}
                    onMouseLeave={() => setIsConfirmPasswordVisible(false)}
                    aria-label={isConfirmPasswordVisible ? "Hide password" : "Show password"}
                  >
                    {isConfirmPasswordVisible ? (
                      <EyeSlashIcon className="w-5 h-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}
                <button type="submit" className="w-full bg-lime-400 text-black font-bold py-3 px-5 rounded-lg text-lg hover:bg-lime-300 transition-transform hover:scale-105 shadow-lg shadow-lime-500/30">
                  Create Account
                </button>
              </form>
              <p className="text-center text-sm text-gray-400 mt-6">
                Already have an account?{' '}
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('signin'); }} className="font-medium text-lime-400 hover:underline">
                  Sign In
                </a>
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;