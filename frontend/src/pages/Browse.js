import React from "react";
import { Link } from "react-router-dom";

const venues = [
    { id: 1, name: "Grand Palace", img: "https://cdn.pixabay.com/photo/2021/09/22/08/35/architecture-6646154_1280.jpg", caption: "A royal venue for grand events." },
    { id: 3, name: "Sunset Hall", img: "/images/sunset-hall.jpg", caption: "Elegant space with a stunning sunset view." }
];
  
const vendors = [
    { id: 2, name: "Elite Caterers", img: "/images/elite-caterers.jpg", caption: "Gourmet catering for every occasion." },
    { id: 4, name: "DJ Beats", img: "/images/dj-beats.jpg", caption: "Bringing the best beats to your event." }
];
  

const Browse = () => {
  return (
    <div className="browse-container">
      <h2>Browse Venues & Vendors</h2>

      <h3>Venues</h3>
      <div className="scroll-container">
        {venues.map((venue) => (
          <div key={venue.id} className="card">
            <img src={venue.img} alt={venue.name} />
            <h3>{venue.name}</h3>
            <p className="caption">{venue.caption}</p>
            <Link to={`/dashboard/details/${venue.id}`} className="view-details">View Details</Link>
          </div>
        ))}
      </div>

      <h3>Vendors</h3>
      <div className="scroll-container">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="card">
            <img src={vendor.img} alt={vendor.name} />
            <h3>{vendor.name}</h3>
            <p className="caption">{vendor.caption}</p>
            <Link to={`/dashboard/details/${vendor.id}`} className="view-details">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
