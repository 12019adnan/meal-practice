import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

import './Card.css'
const Card = ({meal}) => {
  const { strMeal, strMealThumb, idMeal} = meal;

  const navigate = useNavigate();
  const showMealDetail = () =>{
    navigate('/card/'+ idMeal);
  }
console.log(showMealDetail)

  return (
    <div className="card">
      <img  onClick={showMealDetail}  src={strMealThumb} alt="" />
      <Link to={'/card/'+ idMeal}>{strMeal}</Link>
    </div>
  );
};

export default Card;