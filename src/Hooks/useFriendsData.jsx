import React, { useEffect, useState } from 'react';

const useFriendsData = () => {
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
    return { friends, loading };
       

};

export default useFriendsData;