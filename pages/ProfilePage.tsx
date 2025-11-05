import React, { useState, useEffect } from 'react';
import { UserCircleIcon } from '../components/Icons';

interface ProfilePageProps {
  currentUser: string;
  onNavigate: (page: string) => void;
}

interface UserData {
    username: string;
    createdAt: string;
    uid: number;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ currentUser, onNavigate }) => {
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('shamiraHubUsers') || '{}');
        const user = users[currentUser.toLowerCase()];
        if (user) {
            setUserData(user);
        }
    }, [currentUser]);

    const formatDate = (isoString: string) => {
        return new Date(isoString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };
    
    if (!userData) {
        return (
             <section className="py-24 bg-black min-h-screen flex items-center justify-center">
                <p className="text-gray-400">Loading profile...</p>
             </section>
        )
    }

  return (
    <section className="py-24 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                <div className="bg-gray-800 p-2 rounded-full ring-4 ring-lime-400/50">
                    <UserCircleIcon className="w-24 h-24 text-lime-400" />
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{userData.username}</h2>
                    <p className="text-gray-400 mt-1">Member since {formatDate(userData.createdAt)}</p>
                </div>
            </div>
            
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Account Information</h3>
                <div className="space-y-4">
                    <div className="flex justify-between items-center bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <p className="text-gray-400 font-medium">Username</p>
                        <p className="text-white font-semibold">{userData.username}</p>
                    </div>
                     <div className="flex justify-between items-center bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <p className="text-gray-400 font-medium">User ID (UID)</p>
                        <p className="text-lime-400 font-mono font-bold">#{String(userData.uid).padStart(6, '0')}</p>
                    </div>
                    <div className="flex justify-between items-center bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <p className="text-gray-400 font-medium">Member Since</p>
                        <p className="text-white font-semibold">{formatDate(userData.createdAt)}</p>
                    </div>
                </div>
            </div>

            {currentUser.toLowerCase() === 'c' && (
                <div className="mt-10 text-center">
                    <button
                        onClick={() => onNavigate('admin')}
                        className="bg-lime-500 text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-lime-400 transition-transform hover:scale-105 shadow-lg shadow-lime-500/30"
                    >
                        Access Admin Panel
                    </button>
                </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
