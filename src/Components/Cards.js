import React, { useState } from 'react'
import CardItem from './CardItem'
import './Cards.css';
import { Button } from './Button'
import { Modal } from '@material-ui/core';

function Cards() {

    const [open, setOpen] = useState(false);


    return (
        <div className="cards">

            <div className="cards__container">

                <div className="cards__wrapper">

                    <ul className="cards__items">

                        <Modal open={open} onClose={() => {setOpen(false)}} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
                            <div className="hiddenpage">

                                <div className='hiddenpage-header'>
                                    <p className='hiddenpage-title'>reisleonardo.com</p>
                                    <p className='hiddenpage-date'>January 1st, 2021</p>
                                </div>

                                <div className='hiddenpage-body'>
                                <img src='images/image-reisleonardo.com.png' className='hiddenpage-image' />
                                <p className='hiddenpage-text'>This is the portfolio website I build for myself. It was my first project and there  I list all my projects, my coding skills and talk a little about myself.</p>
                                <p className='hiddenpage-text'>SKILLS REQUIRED: ReactJS | JavaScript | MaterialUI | HTML5 | CSS </p>
                                </div>
                            
                                <div className='hiddenpage-footer'>
                                <Button className='hiddenpage-button' onClick='/'>Go to Website</Button>
                                </div>
                            
                            </div>
                        </Modal>
                        <CardItem src="images/image-reisleonardo.com.png" text="reisleonardo.com" label="Website" path="/" onClick={() => {setOpen(true)}}/>
                        <CardItem src="images/image-1.jpg" text="New projects soon" label="Projects" path=""/>
                        {/* OTHER CARDS GO HERE */}
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Cards
