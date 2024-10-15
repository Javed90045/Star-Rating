import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './StarRating.css'
const StarRating = ({ NoOFStar = 5 }) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (index) =>{
        setRating(index)
    }

    const handleMouseEnter = (index) =>{
        setHover(index)

    }

    const handleMouseLeave = () =>{
        setHover(rating)

    }

  return (
    <div className="star-rating">
      {[...Array(NoOFStar)].map((_, index) => {
        index+=1
        return <FaStar 
        className={index <= (hover || rating) ? 'active' : 'inactive'}
        key={index}
        onClick={()=> handleClick(index)}
        onMouseMove={()=> handleMouseEnter(index)}
        onMouseLeave={()=>handleMouseLeave(index)}
        size={50}/>
      })}
    </div>
  );
};

export default StarRating;
