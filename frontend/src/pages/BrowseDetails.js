import React, { useState } from "react";
import { useParams } from "react-router-dom";

const venueVendorData = {
  1: { 
    name: "Grand Palace", type: "Venue", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac dui a velit malesuada tincidunt. Mauris luctus scelerisque est, vel imperdiet dui volutpat ac. Ut imperdiet tincidunt sapien, non placerat tortor laoreet sed. Pellentesque non finibus sapien, non euismod nisl. Sed vitae magna nulla. Nulla magna neque, convallis sed molestie.", 
    img: "https://cdn.pixabay.com/photo/2021/09/22/08/35/architecture-6646154_1280.jpg", 
    reviews: [{ text: "Amazing place!", rating: 5 }, { text: "Great service!", rating: 4 }] 
  },
  2: { 
    name: "Elite Caterers", type: "Vendor", 
    description: "Providing the best catering services for your events.", 
    img: "/images/elite-caterers.jpg", 
    reviews: [{ text: "Food was delicious!", rating: 5 }, { text: "Highly recommended.", rating: 4 }] 
  },
  3: { 
    name: "Sunset Hall", type: "Venue", 
    description: "A scenic venue with sunset views.", 
    img: "/images/sunset-hall.jpg", 
    reviews: [{ text: "Beautiful location!", rating: 5 }, { text: "Perfect for receptions.", rating: 4 }] 
  },
  4: { 
    name: "DJ Beats", type: "Vendor", 
    description: "Top-rated DJ services for all events.", 
    img: "/images/dj-beats.jpg", 
    reviews: [{ text: "Great music!", rating: 5 }, { text: "Kept the party going all night.", rating: 5 }] 
  }
};

const BrowseDetails = () => {
  const { id } = useParams();
  const venueVendor = venueVendorData[id];
  const [reviews, setReviews] = useState(venueVendor.reviews);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(5);

  if (!venueVendor) return <h2>Venue or Vendor not found.</h2>;

  // Calculate overall rating
  const overallRating = 
    reviews.length > 0 ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1) : "N/A";

  const addReview = () => {
    if (newReview.trim()) {
      const updatedReviews = [...reviews, { text: newReview, rating: newRating }];
      setReviews(updatedReviews);
      setNewReview("");
      setNewRating(5);
    }
  };

  return (
    <div className="details-container">
      <div className="details-content">
        <img src={venueVendor.img} alt={venueVendor.name} className="venue-img"/>
        <div className="text-content">
          <h2>{venueVendor.name}</h2>
          <p>{venueVendor.description}</p>

          <textarea
            placeholder="Write a review..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            className="styled-textarea"
          />
          <div className="rating-container">
            <label>Rating:</label>
            <div className="star-rating-input">
              {[1, 2, 3, 4, 5].map((num) => (
                <span
                  key={num}
                  className={`star-icon ${num <= newRating ? "filled" : ""}`}
                  onClick={() => setNewRating(num)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <button onClick={addReview} className="submit-btn">Post</button>

            <h3 style={{marginTop: '2rem'}}>Customer Reviews</h3>
            <p style={{fontSize: '1.2rem'}}>⭐ <strong>{overallRating} / 5 </strong></p>
            <div className="reviews-container">
              {reviews.slice(-5).map((review, index) => (
                <div key={index} className="review-item">
                  <p>{review.text}</p>
                  <div className="star-container">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`star-icon ${i < review.rating ? "filled" : ""}`}>★</span>
                    ))}
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default BrowseDetails;
