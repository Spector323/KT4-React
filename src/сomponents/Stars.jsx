import React from 'react';
import 'font-awesome/css/font-awesome.min.css';  

function Stars({ rating }) {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < fullStars; i++) {
        stars.push(<span key={i} className="fa fa-star active"></span>);
    }
    for (let i = stars.length; i < 5; i++) {
        stars.push(<span key={i} className="fa fa-star"></span>);
    }

    return (
        <div className='Stars'>
            {stars}
        </div>
    );
}

export default Stars;
