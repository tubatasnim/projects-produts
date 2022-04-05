import React from 'react';
import './Review.css';

const Review = (props) => {

    const { img, name, comment } = props.review;
    return (
        <div>
            <div className='review'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>{comment}</p>
            </div>

        </div>
    );
};

export default Review;