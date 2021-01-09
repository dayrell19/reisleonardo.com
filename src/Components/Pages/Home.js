import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Profile from '../Profile';

function Home () {
    return (
        <>
            <HeroSection />
            <Profile />
            <Footer />
        </>
    )
}

export default Home;