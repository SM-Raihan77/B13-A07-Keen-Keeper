import React from 'react';
import Hero from '../../components/HomePage/Hero';
import OverviewSection from '../../components/HomePage/Overview/OverviewSection';
import FriendsSection from '../../components/HomePage/FriendsSection';



const Home = () => {
    return (
        <div>
            <Hero />
            <OverviewSection />
            <FriendsSection />
        </div>
    );
};

export default Home;