import { useEffect, useState } from 'react';
import { BarConsumer } from '../../providers/BarProvider';
import BarList from './BarList';
import { Button } from 'react-bootstrap';
import BarForm from './BarForm';

const Bars = ({ bars, getAllBars, addBar }) => {
    const [adding, setAdding] = useState(false)

    useEffect( () => {
        getAllBars()
    }, [])

    return (
        <>
        <h1>All Bars</h1>
        { adding ?
            <>
            <BarForm addBar={addBar} />
            <Button variant="info" onClick={() => setAdding(false)}>Cancel</Button> 
            </>
            :
            <Button variant="info" onClick={() => setAdding(true)}>+</Button>
        }
        <BarList bars={bars} />
        </> 
    )
}

const ConnectedBar = (props) => (
    <BarConsumer>
        { value => <Bar {...props} {...value} />}
    </BarConsumer>
)

export default ConnectedBar;