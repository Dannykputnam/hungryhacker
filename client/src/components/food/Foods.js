import { useEffect, useState } from 'react';
import { FoodConsumer } from '../../providers/FoodProvider';
import FoodList from './FoodList';
import { Button } from 'react-bootstrap';
import FoodForm from './FoodForm';

const Foods = ({ foods, getAllFoods, addFood }) => {
    const [adding, setAdding] = useState(false)

    useEffect( () => {
        getAllFoods()
    }, [])

    return (
        <>
        <h1>All Foods</h1>
        { adding ?
            <>
            <FoodForm addFood={addFood} />
            <Button variant="info" onClick={() => setAdding(false)}>Cancel</Button> 
            </>
            :
            <Button variant="info" onClick={() => setAdding(true)}>+</Button>
        }
        <FoodList foods={foods} />
        </> 
    )
}

const ConnectedFood = (props) => (
    <FoodConsumer>
        { value => <Foods {...props} {...value} />}
    </FoodConsumer>
)

export default ConnectedFood;