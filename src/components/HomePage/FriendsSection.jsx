import React, { useEffect, useState } from 'react';
import FriendsCards from '../FriendsCards';
import {  DotLoader } from 'react-spinners';

const FriendsSection = () => {

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            const fetchFriends = async () => {
                const res = await fetch('/friends.json');
                const data = await res.json();
                setFriends(data);
                setLoading(false);

            };
            fetchFriends();
        }, []);
       console.log(friends, setFriends);
    return ( 
        <> <h2 className='text-2xl font-bold text-[#1f2937] mb-6 text-center'>Your Friends</h2>
        
            {loading ? <div className=' flex justify-center items-center'>(<DotLoader  color='[#1a3c34]'/> )</div>: <FriendsCards friends={friends} /> }
   </>
       
    );
};

export default FriendsSection;