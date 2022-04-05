import React from 'react';
import useShowReviews from '../../hookReview/useShowReviews';
import ReviewsShow from '../ReviewsShow/ReviewsShow';

const Reviews = () => {
    const [shows, setShows] = useShowReviews();
    return (
        <div>
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