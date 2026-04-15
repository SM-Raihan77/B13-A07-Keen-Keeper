import React from 'react';
import { Link } from 'react-router';


const FriendsCards = ({ friends }) => {
    return (
    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto mt-10 mb-10 px-4">
            {friends.map((friend) => (
                <Link to={`/friends/${friend.id}`} key={friend.id} className="block transition-transform hover:scale-105">
                    <div className="card bg-base-100 shadow-sm border border-gray-100 h-full">
                        <figure className="pt-6">
                            <img className='w-24 h-24 rounded-full overflow-hidden ring-4 ring-gray-50 object-cover'
                                src={friend.picture}
                                alt={friend.name}
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-xl font-bold text-[#1f2937]">
                                {friend.name}
                            </h2>
                            <p className="text-gray-500 text-sm">{friend.bio}</p>

                            <div className="card-actions justify-center mt-4 flex flex-col items-center gap-2">
                                <span className={`text-white text-[12px] font-bold px-4 py-1 rounded-full shadow-sm capitalize ${friend.status === 'overdue' ? 'bg-[#ef4444]' :
                                        friend.status === 'on-track' ? 'bg-[#22c55e]' :
                                            'bg-[#f0ad4e]'
                                    }`}>
                                    {friend.status || "on-track"}
                                </span>
                                <div className="badge badge-outline text-xs opacity-60">
                                    {friend.tags?.join(', ')}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};



export default FriendsCards;