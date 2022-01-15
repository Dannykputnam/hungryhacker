import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CoffeeList = ({ coffees }) => {
  return(
    <>
      <ListGroup>
        { coffees.map( p => 
          <Link to={`/coffees/${p.id}`}>
            <ListGroup.Item>{p.name}</ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </>
  )
}

export default CoffeeList;