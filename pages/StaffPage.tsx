import React from 'react';
import { PaperAirplaneIcon, UserCircleIcon } from '../components/Icons';

const founders = [
    { name: 'cyber', role: 'Founder' },
    { name: 'caveman', role: 'Founder' },
];

const staff = [
    { name: 'rexxaroonie', role: 'Staff' },
    { name: 'rodent', role: 'Staff' },
    { name: 'vxlvic', role: 'Staff' },
    { name: 'sox', role: 'Staff' },
];

const StaffCard: React.FC<{ name: string, role: string, isFounder?: boolean }> = ({ name, role, isFounder = false }) => (
    <div className={`
        bg-gray-900/40 border border-gray-800 rounded-2xl text-center
        transition-all duration-300 ease-in-out hover:border-lime-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-lime-500/10
        ${isFounder ? 'p-8 md:p-10' : 'p-6'}
    `}>
        <UserCircleIcon className={`mx-auto text-lime-400 ${isFounder ? 'w-20 h-20 mb-5' : 'w-16 h-16 mb-4'}`} />
        <h3 className={`font-bold text-white ${isFounder ? 'text-2xl' : 'text-xl'}`}>{name}</h3>
        <p className={`font-medium ${isFounder ? 'text-lime-400' : 'text-gray-400'}`}>{role}</p>
    </div>
);

const StaffPage: React.FC = () => {
    return (
        <section className="py-24 bg-black min-h-screen">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <PaperAirplaneIcon className="w-16 h-16 mx-auto text-lime-400 mb-4" />
                        <h1 className="text-4xl md:text-5xl font-bold text-white">Meet the <span className="text-lime-400">Team</span></h1>
                        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">The dedicated individuals behind ShamiraHub.</p>
                    </div>

                    {/* Founders Section */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold text-center text-white mb-8">Leadership</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                            {founders.map(member => (
                                <StaffCard key={member.name} name={member.name} role={member.role} isFounder />
                            ))}
                        </div>
                    </div>

                    {/* Staff Section */}
                    <div>
                        <h2 className="text-2xl font-semibold text-center text-white mb-8">Staff Members</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {staff.map(member => (
                                <StaffCard key={member.name} name={member.name} role={member.role} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StaffPage;