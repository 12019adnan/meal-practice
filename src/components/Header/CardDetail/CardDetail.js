import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CardDetail.css'
const CardDetail = () => {
    const {cardDetail} = useParams()
    const [mealCardDetail, setMealCardDetail] = useState({})
/*     const [strMealThumb, strMeal, strArea, strInstructions,strIngredient1, strIngredient2, strIngredient3, strIngredient5, strIngredient6, strYoutube] = mealCardDetail; */
    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${cardDetail}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMealCardDetail(data.meals[0]))
        .then(data => console.log(data.meals[0]))
        console.log(url)
    }, []);
    return (
        <div className='mealCardDetail'>
            <div>
            <img src={mealCardDetail.strMealThumb} alt="" />    
            </div>
            <div className='mealCardDetail-info'>
            <p>{mealCardDetail.strMeal}</p>
            <p>Food Instruction___: {mealCardDetail.strInstructions?.slice(0, 500)}</p>
            <p>This food has arrived: {mealCardDetail.strArea}</p>
            </div>
            {/* <p>{mealCardDetail.strMeal}</p> */}
        </div>
    );
};
export default CardDetail;