import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { FoodConsumer } from '../../providers/FoodProvider';

const FoodShow = ({ updateFood, deleteFood }) => {
  const params = useParams();
  const [food, setFood] = useState({ name: '', type: '', desc: '', rating: '' })
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/foods/${params.foodId}`)
      .then( res => setFood(res.data))
      .catch( err => console.log(err))
  }, [])

  const { name, type, desc, rating, id } = food
  return (
    <>
      { editing ? 
        <>
          <FoodForm 
            {...food}
            updateFood={updateFood}
          />
          <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
          <br />
        </>
        :
        <>
          <h1>Id: {params.foodId} {name}</h1>
          <h3>Type: {type}</h3>
          <h2>Description: {desc}</h2>
          <h3>Rating: {rating}</h3>
          {/* <h5>Bought:
            <Moment format='MM/DD/YYYY'>
              {bought}
            </Moment> 
          </h5> */}
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
      <Games foodId={id} />
    </>
  )
}

const ConnectedFoodShow = (props) => (
  <FoodConsumer>
    { value => <Foodhow {...props} {...value} /> }
  </FoodConsumer>
)

export default ConnectedFoodShow;