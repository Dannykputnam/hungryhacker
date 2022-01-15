import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const FoodShow = ({}) => {
  const [food, setFood] = useState({name: '', type: '', desc: '', rating: ''})
  let params = useParams()

  useEffect( () => {
    axios.get(`/api/food/${params.foodId}`)
      .then( res => {
        setFood(res.data)
      }) 
      .catch( err => console.log(err))
  }, [])


  return (
    <>
      <h1>Restaurant Name:</h1>
      <h1>{food.name}</h1>
      <h2>Type:</h2>
      <p>{food.type}</p>
      <h4>Description of restaurant:</h4>
      <p>{food.desc}</p>
      <h4>Rating:</h4>
      <p>{food.rating}</p>
      <Link to={'/foods'}>Back</Link>
     
      


    </>
  )
} 

export default FoodShow; 