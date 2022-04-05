import React from 'react';
import './ReviewsShow.css';

const ReviewsShow = (props) => {
    const { img, name, comment, Rating } = props.show;
    return (

        <div className='show-container'>

            <div className='review-show'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>{comment}</p>
                <p>Rate: {Rating}</p>
            </div>

        </div>


    );
};

export default ReviewsShow;