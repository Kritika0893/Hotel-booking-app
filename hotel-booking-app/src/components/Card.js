import React from 'react';
import Photo from "../images/hotelpic1.png";
import './Card.css';

function Card() {
  return (
    <div class="grid-container">

    
        
    <div class="card" >
  <img src={Photo} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Get 10% off</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" >
  <img src={Photo} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Get 10% off</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" >
  <img src={Photo} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Get 10% off</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>


 

  










        
  )
};

export default Card