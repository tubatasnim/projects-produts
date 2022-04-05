import React, { useState } from 'react';
import useReviews from '../../hooks/useReviews';
import CustomLink from '../CustomLink/CustomLink';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const newReview = reviews.slice(0, 3);

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
                <div className='Reviews-container'>
                    {
                        newReview.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>


            <CustomLink to="/Reviews"><button className='btn-home-bottom'>See All Reviews</button></CustomLink>


        </div>
    );
};

export default Home;