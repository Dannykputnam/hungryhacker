import { useState, useEffect } from 'react';

const CoffeeForm = ({ id, name, desc, rating, addCoffee, setEdit, updateCoffee}) => {
  const [coffee, setCoffee] = useState({ name: '', desc: '', rating: '' })

  useEffect( () => {
    if (id) {
      setCoffee({ name, desc, rating})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
    updateCoffee(id, coffee)
    setEdit(false)
  } else {
    addCoffee(coffee)
  }
    setCoffee({ name: '', desc: '', rating: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>Coffe Shop Name:</label>
        <input 
          name='name' 
          value={coffee.name}
          onChange={(e) => setCoffee({...coffee, name: e.target.value})}
          required
          placeholder="Coffee Shop Name"
        />
        <label>Coffee Description:</label>
        <textarea
          name='desc'
          value={coffee.desc}
          onChange={(e) => setCoffee({...coffee, desc: e.target.value})}
          required
          placeholder="Description"
        ></textarea>
         <label>Coffee Rating:</label>
        <input 
          name='rating' 
          value={coffee.rating}
          onChange={(e) => setCoffee({...coffee, rating: e.target.value})}
          required
          placeholder="rating"
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default CoffeeForm;