import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">

            <h1>Hello World</h1>

            <div className="cards__container">

                <div className="cards__wrapper">

                    <ul className="cards__items">

                        <CardItem src="images/image-reisleonardo.com.png" text="reisleonardo.com" label="Website" path="/" />
                        {/* OTHER CARDS GO HERE */}
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Cards
