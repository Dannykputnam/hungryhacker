import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BarList = ({ bars }) => {
  return(
    <>
      <ListGroup>
        { bars.map( p => 
          <Link to={`/bars/${p.id}`}>
            <ListGroup.Item>{p.name}</ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </>
  )
}

export default BarList;