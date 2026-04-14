import { Search } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
     <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center justify-center px-6">
      <div className="text-center">
        {/* আইকন সেকশন */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#1a3c34]/10 p-6 rounded-full">
            <Search size={48} className="text-[#1a3c34]" />
          </div>
        </div>

        {/* টেক্সট সেকশন */}
        <h1 className="text-8xl font-bold text-[#1a3c34] mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
          Oops! We can't find that connection on your shelf. It seems the relationship 
          you’re looking for is either broken or moved.
        </p>

        {/* বাটন সেকশন */}
        <Link
          to="/"
          className="inline-block bg-[#1a3c34] text-white px-8 py-3 rounded-full font-medium hover:bg-[#142e28] transition-all shadow-lg active:scale-95"
        >
          Go Back to Your Shelf
        </Link>
      </div>
    </div>
    );
};

export default NotFoundPage;