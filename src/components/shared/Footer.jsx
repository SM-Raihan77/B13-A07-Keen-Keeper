import React from 'react';

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
<div className='bg-[#1a3c34] text-white py-12 px-6 font-sans container mx-auto mt-10 mb-10 rounded-lg'>
       
     <div className="max-row-container max-w-6xl mx-auto">
        
        {/* Top Section: Branding and Tagline */}
        <div className="text-center border-b border-white/10 pb-10 mb-6">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">KeenKeeper</h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
          
          {/* Social Links */}
          <div className="mt-8">
            <p className="text-sm font-medium mb-4">Social Links</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="bg-white p-2 rounded-full text-[#1a3c34] hover:bg-gray-200 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="bg-white p-2 rounded-full text-[#1a3c34] hover:bg-gray-200 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="bg-white p-2 rounded-full text-[#1a3c34] hover:bg-gray-200 transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
        
      </div>
</div>
    );
};

export default Footer;