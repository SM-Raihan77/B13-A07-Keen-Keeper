import React from 'react';
import { NavLink } from 'react-router';


const MyNavLink = ({to, children, className}) => {
    return (
        <div>
            <NavLink to={to}            
                className={({ isActive }) => ` font-semibold rounded-md ${className} ${isActive ? 'bg-[#1a3c34] text-white' : ''}`}>

                {children}
            </NavLink>

        </div>
    );
};

export default MyNavLink;