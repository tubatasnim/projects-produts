import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div >
            <div className='Home-container'>
                <div className='paragraph-container'>
                    <h1 className='head-line'>Our Products</h1>
                    <h1>Fujifilm Instant Camera with Selfie Mode</h1>
                    <p><strong>Master Foto...</strong>
                        Buy today Instant camera instax mini 11 Lilac Purple instant camera+instax mini glossy (10pl).</p>
                    <button className='btn-home'>BUY NOW</button>
                </div>
                <div>
                    <img src="./images/Camera.jpg" alt="" />
                </div>
            </div>
            <div>
                <h1 className='customer-heading'>Customer Reviews</h1>
            </div>
            <button className='btn-home-bottom'>See All Reviews</button>
        </div>
    );
};

export default Home;