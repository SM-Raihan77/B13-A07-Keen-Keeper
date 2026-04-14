import React from 'react';

const OverviewCards = ({ friends }) => {
    // Calculate the values for each card based on the friends data
    const totalFriends = friends.length;
    const onTrack = friends.filter(f => f.status === "on-track").length;
    const needAttention = friends.filter(f => f.status === "overdue").length;
    const interactionsThisMonth = 12; 

    return (
        <div className="mt-10 mb-10 container mx-auto px-4">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

                <div className="p-4 bg-white rounded shadow-md border border-gray-100 text-center">
                    <h2 className="text-xl font-bold">{totalFriends}</h2>
                    <p className="text-gray-500">Total Friends</p>
                </div>

                <div className="p-4 bg-white rounded shadow-md border border-gray-200 text-center">
                    <h2 className="text-xl font-bold">{onTrack}</h2>
                    <p className="text-gray-500">On Track</p>
                </div>

                <div className="p-4 bg-white rounded shadow-md border border-gray-200 text-center">
                    <h2 className="text-xl font-bold">{needAttention}</h2>
                    <p className="text-gray-500">Need Attention</p>
                </div>

                <div className="p-4 bg-white rounded shadow-md border border-gray-200  text-center">
                    <h2 className="text-xl font-bold">{interactionsThisMonth}</h2>
                    <p className="text-gray-500">Interactions This Month</p>
                </div>

            </div>

        </div>

    );
};

export default OverviewCards;