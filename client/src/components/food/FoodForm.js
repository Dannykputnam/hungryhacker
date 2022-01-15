import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
// import FoodForm from './FoodForm';

const FoodForm = ({ addFood, id, name, desc, rating, setEdit, updateFood}) => {
  const [food, setFood] = useState({ name: '', desc: '', rating: '' })

  useEffect( () => {
    if (id) {
      setFood({ name, desc, rating})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
    updateFood(id, food)
    setEdit(false)
  } else {
    addFood(food)
  }
    setFood({ name: '',  desc: '', rating: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
      <label>Restaurant Name:</label>
        <input 
          name="name"
          value={food.name}
          onChange={(e) => setFood({...food, name: e.target.value})}
          required
          placeholder=" Restaurant Name"
        />
         {/* <label>Food Type:</label>
        <input 
          name="type" 
          value={food.type}
          onChange={(e) => setFood({...food, type: e.target.value})}
          required
          placeholder="type"
        /> */}
        <label>Restaurant Description:</label>
        <textarea
          name="desc"
          value={food.desc}
          onChange={(e) => setFood({...food, desc: e.target.value})}
          required
          placeholder="Description"
        ></textarea>
         <label>Restaurant rating:</label>
        <input 
          name= "rating"
          value={food.rating}
          onChange={(e) => setFood({...food, rating: e.target.value})}
          required
          placeholder="rating"
        />
        <Button type="submit" variant="primary" >Submit</Button>
      </Form>
    </>
  )
}

export default FoodForm;