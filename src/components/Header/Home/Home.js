import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../Card/Card";
// import Card from "../Card/Card";
const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  const searchFood = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <div className="mainBlog">
<div>
  <img
    src="https://www.themealdb.com/images/meal-icon.png"
    alt=""
  ></img>
</div>
<div>
  <h1>lol Food Zon</h1>
  <p>
    Welcome to TheMealDB: An open, crowd-sourced database of Recipes
    from around the world. We also offer a free JSON API for anyone
    wanting to use it, with additional features for subscribers.
  </p>
  
    <div id='paypal'>
    <small className="paypal">
    <span className="paypalSpan">
      <span className="span1">Pay</span> Pal
    </span>
    Subscribe
  </small>
    </div>
  <p>
    Click to Support $2 per month (cancel anytime) <br />
    Currently 50 supporters
  </p>
</div>

<div>
  <img
    src="https://www.themealdb.com/images/meal-icon.png"
    alt=""
  ></img>
</div>
</div>

<div className="inputField-container">
<hr />
<div className="inputField">
          <input
            onChange={searchFood}
            type="text"
            name=""
            id="inputValue"
            placeholder="Search for a Meal"

          ></input>
        </div>
<div>
  <small className="small-img-blog">
    <img
      src="https://www.themealdb.com/images/icons/meal-icon6.png"
      alt=""
    ></img>
    Total Meals: 285{" "}
    <img
      src="https://www.themealdb.com/images/icons/meal-icon4.png"
      alt=""
    ></img>{" "}
    Total Ingredients: 574{" "}
    <img
      src="https://www.themealdb.com/images/icons/image2.png"
      alt=""
    ></img>{" "}
    Images: 285
  </small>
</div>
</div>

<hr />
      <div className="meals-container">
      {meals.map((meal) => (
              // console.log(meal)
              <Card meal={meal}></Card>
            ))}
            
      </div>
    </div>
  );
};

export default Home;

