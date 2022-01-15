import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CoffeeContext = React.createContext();
export const CoffeeConsumer = CoffeeContext.Consumer;

const CoffeeProvider = ({ children }) => {
  const [coffees, setCoffees] = useState([])

  const navigate = useNavigate()

  const getAllCoffees = () => {
    axios.get('/api/coffees')
      .then( res => setCoffees(res.data) )
      .catch( err => console.log(err) )
  }

  const addCoffee = (coffee) => {
    axios.post('/api/coffees', { coffee })
      .then( res => setCoffees([...coffees, res.data]))
      .catch( err => console.log(err) )
  }

  const updateCoffee = (id, coffee) => {
    axios.put(`/api/coffees/${id}`, { coffee })
      .then( res => {
        const newUpdatedCoffees = coffees.map( f => {
          if (f.id === id) {
            return res.data
          }
          return f
        })
        setCoffees(newUpdatedCoffees)
        navigate('/coffees')
      })
      .catch( err => console.log(err) )
  }

  const deleteCoffee= (id) => {
    axios.delete(`/api/coffees/${id}`)
      .then( res => {
        setCoffees(coffees.filter( f => f.id !== id))
        alert(res.data.message)
        navigate('/coffees')
      })
      .catch( err => console.log(err) )
  }
 
  return (
    <CoffeeContext.Provider value={{
      coffees,
      getAllCoffees: getAllCoffees,
      addCoffee: addCoffee, 
      updateCoffee: updateCoffee, 
      deleteCoffee: deleteCoffee,
    }}>
      { children }
    </CoffeeContext.Provider>
  )
}

export default CoffeeProvider;