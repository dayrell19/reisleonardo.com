import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />

            <h1>WELCOME!</h1>
            <p className='hero-text'>What are you looking for?</p>

            <div>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>PROJECTS</Button>

                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>SKILLS</Button>
            </div>
        </div>
    )
}

export default HeroSection
