import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FoodList = ({ foods }) => {
  return(
    <>
      <ListGroup>
        { foods.map( p => 
          <Link to={`/foods/${p.id}`}>
            <ListGroup.Item>{p.name}</ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </>
  )
}

export default FoodList;