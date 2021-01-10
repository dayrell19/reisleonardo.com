import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-phrase'>
        <p className='footer-heading'>
          It is never late to put effort onto something you believe!
        </p>
      </section>
      <div class='footer-column'>
        <div className='footer-column-wrapper'>
          <div class='footer-column-items'>
            <h2>Contact Me</h2>
            <p class="column1-items">+1 (604) 710-3336</p>
            <p class="column1-items">leonardodayrell.reis@gmail.com</p>
            <p class="column1-items" onClick="">My Resume <i class='far fa-folder' /> </p>
            <p class="column1-items">Vancouver, Canada</p>
        
          </div>
        </div>
        <div className='footer-column-wrapper'>
          <div class='footer-column-items'>
            <h2>Social Media</h2>
            
            <a href="https://www.linkedin.com/in/leonardofreis">
                <div class="social-logo">
                <i class='fab fa-linkedin' id='linkedinicon' />
                <p class="social-icon-link linkedin" id="linkedintext" >LinkedIn</p>
                </div>
            </a>


            <a href="https://www.github.com/dayrell19">
                <div class="social-logo">
                <i class='fab fa-github' id='githubicon' />
                <p class="social-icon-link github" id="githubtext" >Github</p>
                </div>
            </a>

            <a href="https://www.twitter.com/dayrell19_">
                <div class="social-logo">
                <i class='fab fa-twitter' id='twittericon' />
                <p to='/' class="social-icon-link twitter" id="twittertext" >Twitter</p>
                </div>
            </a>

            <div>

            <a href="https://www.instagram.com/reisleonardo__">
                <div class="social-logo">
                  <i class='fab fa-instagram' id='instagramicon' />
                <p to='/' class="social-icon-link" id="instagramtext" >Instagram</p>
                </div>
                </a>

            </div>

            
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;