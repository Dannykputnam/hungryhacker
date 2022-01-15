import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BarConsumer } from '../../providers/BarProvider';
import BarForm from './BarForm';

const BarShow = ({ updateBar, deleteBar }) => {
  const params = useParams();
  const [bar, setBar] = useState({ name: '', desc: '', rating: '' })
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/bars/${params.barId}`)
      .then( res => setBar(res.data))
      .catch( err => console.log(err))
  }, [])

  const { name, desc, rating, id } = bar
  return (
    <>
      { editing ? 
        <>
          <BarForm 
            {...bar}
            updateBar={updateBar}
          />
          <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
          <br />
        </>
        :
        <>
          <h1>Id: {params.barId} {name}</h1>
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
            onClick={() => deleteBar(id)}
          >
            Delete
          </Button>
        </>
      }
      {/* <Games barId={id} /> */}
    </>
  )
}

const ConnectedBarShow = (props) => (
  <BarConsumer>
    { value => <BarShow {...props} {...value} /> }
  </BarConsumer>
)

export default ConnectedBarShow;