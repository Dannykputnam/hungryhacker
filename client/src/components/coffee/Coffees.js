import { useEffect, useState } from 'react';
import { CoffeeConsumer } from '../../providers/CoffeeProvider';
import CoffeeList from './CoffeeList';
import { Button } from 'react-bootstrap';
import CoffeeForm from './CoffeeForm';

const Coffees = ({ coffees, getAllCoffees, addCoffee }) => {
    const [adding, setAdding] = useState(false)

    useEffect( () => {
        getAllCoffees()
    }, [])

    return (
        <>
        <h1>All Coffee</h1>
        { adding ?
            <>
            <CoffeeForm addCoffee={addCoffee} />
            <Button variant="info" onClick={() => setAdding(false)}>Cancel</Button> 
            </>
            :
            <Button variant="info" onClick={() => setAdding(true)}>+</Button>
        }
        <CoffeeList coffees={coffees} />
        </> 
    )
}

const ConnectedCoffee = (props) => (
    <CoffeeConsumer>
        { value => <Coffee {...props} {...value} />}
    </CoffeeConsumer>
)

export default ConnectedCoffee;