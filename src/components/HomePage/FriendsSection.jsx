import React, { useEffect, useState } from 'react';
import FriendsCards from '../FriendsCards';

const FriendsSection = () => {

    const [friends, setFriends] = useState([]);
    
        useEffect(() => {
            const fetchFriends = async () => {
                const res = await fetch('/friends.json');
                const data = await res.json();
                setFriends(data);
            };
            fetchFriends();
        }, []);
       console.log(friends, setFriends);
    return ( 
        <> <h2 className='text-2xl font-bold text-[#1f2937] mb-6 text-center'>Your Friends</h2>
        
   <FriendsCards friends={friends} />
   </>
       
    );
};

export default FriendsSection;