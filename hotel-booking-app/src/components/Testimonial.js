import React from 'react';
import './Testimonial.css';

const Testimonial = ({ text, image }) => {
  return (
    <div class="card">
    <div className="testimonial">
    <img src={image} alt="Testimonial" />
    <p>{text}</p>
  </div>
  </div>
  
  
    
    
  );
};

export default Testimonial;