import React, { useState, useEffect } from 'react';
import { UserCircleIcon, ShieldCheckIcon, BoltIcon } from '../components/Icons';

interface ProfilePageProps {
  currentUser: string;
}

interface UserData {
    username: string;
    createdAt: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ currentUser }) => {
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
    
    const stats = [
        { name: 'Total Purchases', value: '7', icon: <BoltIcon className="w-6 h-6 text-lime-400" /> },
        { name: 'Reputation', value: 'Legendary', icon: <ShieldCheckIcon className="w-6 h-6 text-lime-400" /> },
        { name: 'Discord Status', value: 'Linked', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.36988C18.7915 3.65549 17.1652 3.14029 15.475 2.82591C15.425 2.94591 15.35 3.15591 15.275 3.36591C13.6993 3.01018 12.061 2.91988 10.475 3.10591C10.025 2.29591 9.5 1.54591 8.875 0.875914C8.51929 1.40366 8.21214 2.09117 8 2.91591C6.44437 3.22011 4.96646 3.76165 3.625 4.54591C1.01007 8.01351 -0.0104053 11.5202 0.275 14.9959C1.94421 16.5453 3.86873 17.6536 5.975 18.2759C6.125 17.9959 6.25 17.6959 6.375 17.3959C5.81249 17.0628 5.29821 16.6881 4.825 16.2759C4.9 16.2359 4.975 16.1959 5.05 16.1559C9.43292 18.396 14.9328 18.2047 19.125 15.8259C19.6713 16.3475 20.283 16.7865 20.975 17.1259C21.1 17.4359 21.225 17.7459 21.35 18.0559C23.2323 17.4736 24.8553 16.4679 26.225 15.1759C26.9039 10.4339 24.9629 6.2731 22.125 4.54591C21.525 4.41591 20.925 4.28591 20.325 4.15591L20.317 4.36988ZM8.675 13.4359C7.78167 13.4359 7.05 12.7042 7.05 11.8109C7.05 10.9175 7.78167 10.1859 8.675 10.1859C9.56833 10.1859 10.3 10.9175 10.3 11.8109C10.3 12.7042 9.56833 13.4359 8.675 13.4359ZM15.325 13.4359C14.4317 13.4359 13.7 12.7042 13.7 11.8109C13.7 10.9175 14.4317 10.1859 15.325 10.1859C16.2183 10.1859 16.95 10.9175 16.95 11.8109C16.95 12.7042 16.2183 13.4359 15.325 13.4359Z" /></svg> },
        { name: 'Current Rank', value: 'Veteran', icon: <UserCircleIcon className="w-6 h-6 text-lime-400" /> },
    ];


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
                <h3 className="text-2xl font-semibold text-white mb-6">Your Stats</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                         <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-5 flex items-center gap-4">
                            <div className="bg-gray-900 p-3 rounded-full">
                                {stat.icon}
                            </div>
                           <div>
                             <p className="text-sm text-gray-400">{stat.name}</p>
                             <p className="text-xl font-bold text-white">{stat.value}</p>
                           </div>
                         </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
