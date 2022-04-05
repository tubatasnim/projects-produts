import { useEffect, useState } from "react"

const useShowReviews = () => {
    const [shows, setShows] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setShows(data));
    }, []);
    return [shows, setShows];
}
export default useShowReviews;