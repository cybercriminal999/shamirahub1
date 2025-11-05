import React, { useState, useEffect, useMemo } from 'react';
import { UserData, UserStatus } from '../App';

const AdminPanelPage: React.FC = () => {
    const [allUsers, setAllUsers] = useState<UserData[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        loadUsers();
    }, []);
    
    const loadUsers = () => {
        const usersData = JSON.parse(localStorage.getItem('shamiraHubUsers') || '{}');
        const usersArray = Object.values(usersData) as UserData[];
        setAllUsers(usersArray.sort((a, b) => a.uid - b.uid));
    };

    const handleAction = (username: string, action: 'ban' | 'suspend' | 'unban' | 'unsuspend' | 'terminate') => {
        const normalizedUsername = username.toLowerCase();
        if (normalizedUsername === 'c') {
            alert("Cannot perform actions on the admin account.");
            return;
        }

        const confirmationText = action === 'terminate' 
            ? `Are you sure you want to permanently terminate ${username}? This action cannot be undone.`
            : `Are you sure you want to ${action} ${username}?`;
            
        if (!window.confirm(confirmationText)) {
            return;
        }
        
        const usersData = JSON.parse(localStorage.getItem('shamiraHubUsers') || '{}');

        if (action === 'terminate') {
            delete usersData[normalizedUsername];
        } else {
            // FIX: Map action verbs ('ban', 'suspend') to status adjectives ('banned', 'suspended') to match the UserStatus type.
            const newStatus: UserStatus = action === 'ban' ? 'banned' : action === 'suspend' ? 'suspended' : 'active';
            if(usersData[normalizedUsername]) {
               usersData[normalizedUsername].status = newStatus;
            }
        }

        localStorage.setItem('shamiraHubUsers', JSON.stringify(usersData));
        loadUsers(); // Refresh the user list from storage
    };

    const filteredUsers = useMemo(() => {
        if (!searchTerm) {
            return allUsers;
        }
        return allUsers.filter(user =>
            user.username.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, allUsers]);

    // FIX: Handle potentially undefined status and default to 'active' for display purposes.
    const getStatusBadge = (status: UserStatus | undefined) => {
        const currentStatus = status || 'active';
        switch (currentStatus) {
            case 'active':
                return <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-200 rounded-full">Active</span>;
            case 'banned':
                return <span className="px-2 py-1 text-xs font-medium text-red-800 bg-red-200 rounded-full">Banned</span>;
            case 'suspended':
                return <span className="px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-200 rounded-full">Suspended</span>;
            default:
                return <span className="px-2 py-1 text-xs font-medium text-gray-800 bg-gray-200 rounded-full">Unknown</span>;
        }
    };

    return (
        <section className="py-16 bg-black min-h-screen">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-lime-400">Admin Panel</h1>
                        <p className="text-gray-400 mt-2">User Management</p>
                    </div>

                    <div className="mb-8">
                        <input
                            type="text"
                            placeholder="Search by username..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block p-3"
                        />
                    </div>

                    <div className="bg-gray-900/40 border border-gray-800 rounded-2xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-300">
                                <thead className="text-xs text-lime-400 uppercase bg-gray-800/50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">UID</th>
                                        <th scope="col" className="px-6 py-3">Username</th>
                                        <th scope="col" className="px-6 py-3">Status</th>
                                        <th scope="col" className="px-6 py-3 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.map((user) => (
                                        <tr key={user.uid} className="border-b border-gray-800 hover:bg-gray-800/30">
                                            <td className="px-6 py-4 font-mono text-lime-400">#{String(user.uid).padStart(6, '0')}</td>
                                            <td className="px-6 py-4 font-medium text-white">{user.username}</td>
                                            <td className="px-6 py-4">{getStatusBadge(user.status)}</td>
                                            <td className="px-6 py-4 text-center">
                                                {user.username.toLowerCase() !== 'c' ? (
                                                    <div className="flex justify-center items-center gap-2">
                                                        {/* FIX: Treat users with an undefined status as 'active' to show correct actions. */}
                                                        {(user.status === 'active' || !user.status) && (
                                                            <>
                                                                <button onClick={() => handleAction(user.username, 'suspend')} className="font-medium text-yellow-400 hover:underline text-xs">Suspend</button>
                                                                <button onClick={() => handleAction(user.username, 'ban')} className="font-medium text-orange-500 hover:underline text-xs">Ban</button>
                                                            </>
                                                        )}
                                                        {user.status === 'suspended' && (
                                                            <button onClick={() => handleAction(user.username, 'unsuspend')} className="font-medium text-green-400 hover:underline text-xs">Unsuspend</button>
                                                        )}
                                                        {user.status === 'banned' && (
                                                            <button onClick={() => handleAction(user.username, 'unban')} className="font-medium text-green-400 hover:underline text-xs">Unban</button>
                                                        )}
                                                        <button onClick={() => handleAction(user.username, 'terminate')} className="font-medium text-red-500 hover:underline text-xs">Terminate</button>
                                                    </div>
                                                ) : <span className="text-xs text-gray-500">Admin</span>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {filteredUsers.length === 0 && (
                            <p className="text-center text-gray-500 py-8">No users found.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminPanelPage;