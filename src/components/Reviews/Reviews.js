import React from 'react';
import useShowReviews from '../../hookReview/useShowReviews';
import ReviewsShow from '../ReviewsShow/ReviewsShow';
import './Reviews.css';

const Reviews = () => {
    const [shows, setShows] = useShowReviews();
    return (
        <div className='reviews-show'>

            {
                shows.map(show => <ReviewsShow
                    key={show.id}
                    show={show}
                ></ReviewsShow>)
            }

        </div>
    );
};

export default Reviews;