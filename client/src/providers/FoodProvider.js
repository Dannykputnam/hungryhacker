import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const FoodContext = React.createContext();
export const FoodConsumer = FoodContext.Consumer;

const FoodProvider = ({ children }) => {
  const [foods, setFoods] = useState([])

  const navigate = useNavigate()

  const getAllFoods = () => {
    axios.get('/api/foods')
      .then( res => setFoods(res.data) )
      .catch( err => console.log(err) )
  }

  const addFood = (food) => {
    axios.post('/api/foods', { food })
      .then( res => setFoods([...foods, res.data]))
      .catch( err => console.log(err) )
  }

  const updateFood = (id, food) => {
    axios.put(`/api/foods/${id}`, { food })
      .then( res => {
        const newUpdatedFoods = foods.map( f => {
          if (f.id === id) {
            return res.data
          }
          return f
        })
        setFoods(newUpdatedFoods)
        navigate('/foods')
      })
      .catch( err => console.log(err) )
  }

  const deleteFood= (id) => {
    axios.delete(`/api/foods/${id}`)
      .then( res => {
        setFoods(foods.filter( f => f.id !== id))
        alert(res.data.message)
        navigate('/foods')
      })
      .catch( err => console.log(err) )
  }
 
  return (
    <FoodContext.Provider value={{
      foods,
      getAllFoods: getAllFoods,
      addFood: addFood, 
      updateFood: updateFood, 
      deleteFood: deleteFood,
    }}>
      { children }
    </FoodContext.Provider>
  )
}

export default FoodProvider;