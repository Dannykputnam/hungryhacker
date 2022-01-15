import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const BarContext = React.createContext();
export const BarConsumer = BarContext.Consumer;

const BarProvider = ({ children }) => {
  const [bars, setBars] = useState([])

  const navigate = useNavigate()

  const getAllBars = () => {
    axios.get('/api/bars')
      .then( res => setBars(res.data) )
      .catch( err => console.log(err) )
  }

  const addBar = (bar) => {
    axios.post('/api/bars', { bar })
      .then( res => setBars([...bars, res.data]))
      .catch( err => console.log(err) )
  }

  const updateBar = (id, bar) => {
    axios.put(`/api/bars/${id}`, { bar })
      .then( res => {
        const newUpdatedBars = bars.map( f => {
          if (f.id === id) {
            return res.data
          }
          return f
        })
        setBars(newUpdatedBars)
        navigate('/bars')
      })
      .catch( err => console.log(err) )
  }

  const deleteBar= (id) => {
    axios.delete(`/api/bars/${id}`)
      .then( res => {
        setBars(bars.filter( f => f.id !== id))
        alert(res.data.message)
        navigate('/bars')
      })
      .catch( err => console.log(err) )
  }
 
  return (
    <BarContext.Provider value={{
      bars,
      getAllBars: getAllBars,
      addBar: addBar, 
      updateBar: updateBar, 
      deleteBar: deleteBar,
    }}>
      { children }
    </BarContext.Provider>
  )
}

export default BarProvider;