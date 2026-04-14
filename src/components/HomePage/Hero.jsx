import React from 'react';

const Hero = () => {
    return (
        <div className="text-center py-10">
            <h1 className="text-4xl font-bold">
                Friends to keep close in your life
            </h1>

            <p className="text-gray-500 mt-2">
                Your personal shelf of meaningful connections.
            </p>

            <button className="mt-4 px-4 py-2  bg-[#1a3c34] text-white rounded">
                + Add a Friend
            </button>
        </div>
    );
};

export default Hero;