import { useState, useEffect } from 'react';

const FoodForm = ({ id, name, type, desc, rating, addFood, setEdit, updateFood}) => {
  const [food, setFood] = useState({ name: '', type: '', desc: '', rating: '' })

  useEffect( () => {
    if (id) {
      setFood({ name, type, desc, rating})
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
    setWorker({ name: '', type: '', desc: '', rating: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>Restaurant Name:</label>
        <input 
          name='name' 
          value={food.name}
          onChange={(e) => setFood({...food, name: e.target.value})}
          required
          placeholder=" Restaurant Name"
        />
         <label>Food Type:</label>
        <input 
          name='type' 
          value={food.type}
          onChange={(e) => setFood({...food, type: e.target.value})}
          required
          placeholder="Employee #"
        />
        <label>Restaurant Description:</label>
        <textarea
          name='desc'
          value={food.desc}
          onChange={(e) => setFood({...food, desc: e.target.value})}
          required
          placeholder="Description"
        ></textarea>
         <label>Restaurant rating:</label>
        <input 
          name='rating' 
          value={food.rating}
          onChange={(e) => setFood({...food, rating: e.target.value})}
          required
          placeholder="rating"
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default FoodForm;