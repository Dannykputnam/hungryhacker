import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { FoodConsumer } from '../../providers/FoodProvider';
import FoodForm from './FoodForm'
import { Button } from 'react-bootstrap'


const FoodShow = ({ updateFood, deleteFood }) => {
  const params = useParams();
  const [food, setFood] = useState({ name: '', desc: '', rating: '' })
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/foods/${params.foodId}`)
      .then( res => setFood(res.data))
      .catch( err => console.log(err))
  }, [])

  const { name, desc, rating, id } = food
  return (
    <>
      { editing ? 
        <>
          <FoodForm 
            {...food}
            updateFood={updateFood}
            setEdit={setEdit}
          />
          <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
          <br />
        </>
        :
        <>
          <h1>Id: {params.foodId} {name}</h1>
          <h2>Description: {desc}</h2>
          <h3>Rating: {rating}</h3>
         
          <Button 
            variant="warning" 
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button 
            variant="danger"
            onClick={() => deleteFood(id)}
          >
            Delete
          </Button>
        </>
      }
    
    </>
  )
}

const ConnectedFoodShow = (props) => (
  <FoodConsumer>
    { value => <FoodShow {...props} {...value} /> }
  </FoodConsumer>
)

export default ConnectedFoodShow;