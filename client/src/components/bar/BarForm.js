import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const BarForm = ({ addBar, id, name, desc, rating, setEdit, updateBar}) => {
  const [bar, setBar] = useState({ name: '', desc: '', rating: '' })

  useEffect( () => {
    if (id) {
      setBar({ name, desc, rating})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
    updateBar(id, bar)
    setEdit(false)
  } else {
    addBar(Bar)
  }
    setBar({ name: '',  desc: '', rating: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
      <label>Bar Name:</label>
        <input 
          name="name"
          value={bar.name}
          onChange={(e) => setBar({...bar, name: e.target.value})}
          required
          placeholder="Bar Name"
        />
        <label>Drink Descriptions:</label>
        <textarea
          name="desc"
          value={bar.desc}
          onChange={(e) => setBar({...bar, desc: e.target.value})}
          required
          placeholder="Description"
        ></textarea>
         <label>Bar rating:</label>
        <input 
          name= "rating"
          value={bar.rating}
          onChange={(e) => setBar({...bar, rating: e.target.value})}
          required
          placeholder="rating"
        />
        <Button type="submit" variant="primary" >Submit</Button>
      </Form>
    </>
  )
}

export default BarForm;