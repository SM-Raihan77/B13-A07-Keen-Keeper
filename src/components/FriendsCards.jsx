import React from 'react';

const FriendsCards = ({ friends }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 items-center grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto mt-10 mb-10">
            {friends.map((friend) => (
                <div key={friend.id} className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img className='w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-gray-50'
                            src={friend.picture}
                            alt={friend.name}
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold text-[#1f2937] mb-1 text-center">
                            {friend.name}

                        </h2>
                        <p>{friend.bio}</p>
                        <div className="card-actions justify-center mt-4 flex flex-col items-center">


                            <span className={`text-white text-[12px] font-bold px-4 py-1 rounded-full shadow-sm capitalize ${friend.status === 'overdue' ? 'bg-[#ef4444]' :
                                    friend.status === 'on-track' ? 'bg-[#22c55e]' :
                                        'bg-[#f0ad4e]'
                                }`}>
                                {friend.status || "on-track"}
                            </span>
                            <div className="badge badge-outline">{friend.tags.join(', ')}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FriendsCards;