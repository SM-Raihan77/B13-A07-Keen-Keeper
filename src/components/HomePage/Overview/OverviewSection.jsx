import React, { useEffect, useState } from 'react';
import OverviewCards from './OverviewCards';

// const friendsPromise = fetch('/public/friends.json').then(res => res.json());

const OverviewSection = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {
            const res = await fetch('/friends.json');
            const data = await res.json();
            setFriends(data);
        };
        fetchFriends();
    }, []);
   

   
      




    return (
       <OverviewCards friends={friends} />
    );
};

export default OverviewSection;