import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { CoffeeConsumer } from '../../providers/CoffeeProvider';

const CoffeeShow = ({ updateCofee, deleteCoffee }) => {
  const params = useParams();
  const [coffee, setCoffee] = useState({ name: '', desc: '', rating: '' })
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/coffees/${params.foodId}`)
      .then( res => setCoffee(res.data))
      .catch( err => console.log(err))
  }, [])

  const { name, desc, rating, id } = coffee
  return (
    <>
      { editing ? 
        <>
          <CoffeeForm 
            {...coffee}
            updateCoffee={updateCoffee}
          />
          <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
          <br />
        </>
        :
        <>
          <h1>Id: {params.coffeeId} {name}</h1>
          <h3>Type: {type}</h3>
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
            onClick={() => deleteCoffee(id)}
          >
            Delete
          </Button>
        </>
      }
      <Games coffeeId={id} />
    </>
  )
}

const ConnectedCoffeeShow = (props) => (
  <CoffeeConsumer>
    { value => <Coffeehow {...props} {...value} /> }
  </CoffeeConsumer>
)

export default ConnectedCoffeeShow;