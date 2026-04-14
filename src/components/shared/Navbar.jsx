import React from 'react';
import { BiStats } from 'react-icons/bi';
import { IoMdHome } from 'react-icons/io';
import { RiTimeLine } from 'react-icons/ri';

import MyNavLink from './MyNavLink';

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm '>
            <div className="navbar  container mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl text-bold text-black">Keen <span className="text-2xl text-bold text-[#0d493b]">Keeper</span></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-3 gap-2 items-center">
                        <li>
                            <li>
                                <MyNavLink to={"/"} className={"flex items-center gap-2 px-1 py-1 "}>
                                    <IoMdHome /> Home
                                </MyNavLink>
                            </li>
                        </li>
                        <li>
                            <MyNavLink to={"/timeline"} className={"flex items-center gap-1 px-3 py-1 "}>
                                <RiTimeLine />Timeline
                            </MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to={"/status"} className={"flex items-center gap-2 px-1 py-1 "}>
                                <BiStats />Status
                            </MyNavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;