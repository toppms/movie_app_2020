import { render } from '@testing-library/react';
import React from 'react';
import PropTypes from  "prop-types";

function renderFood(dish) {
  console.log(dish);
  return <Food key = {dish.id} name = {dish.name}
               picture = {dish.image} rating={dish.rating} />
}
function App() {
  return (
    <div>
    {foodILike.map(dish => (
     <Food 
     key = {dish.id} //react 내부에서 사용하기 위함
     name = {dish.name}
     picture = {dish.image} 
     rating = {dish.rating}
     /> 
    ))}
    </div>
  );
}

const foodILike = [
  {
    id:1,
  name: "Kimchi",
  image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
  rating : 5
},
  {
    id:2,
  name: "bulgogi",
  image: "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg",
  rating : 4.9
  },
  {
    id:3,
  name: "kimbap",
  image: "https://www.bapuri.co.kr/new2/upload/menu_01/2016_12_28/hero_oxqsr_2016_12_28_16_53_39.jpg",
  rating : 4.8
},
  {
    id:4,
  name: "samgyetang",
  image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
  rating : 4.7
  }]

  function Food({ name, picture, rating }) {
    return(
  <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src = {picture} 
      alt={name}/>
      </div>
    );
  }
  //propTypes=>proptype 확인
  Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }

export default App;
