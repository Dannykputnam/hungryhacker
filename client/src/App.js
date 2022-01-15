import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Foods from './components/food/Foods';
import Profile from './components/auth/Profile';
import FoodShow from './components/food/FoodShow';
import Coffees from './components/coffee/Coffees';
import CoffeeShow from './components/coffee/CoffeeShow';
import Bars from './components/bar/Bars';
import BarShow from './components/bar/BarShow';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<ProtectedRoute />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/foods' element={<Foods />} />
            <Route path='/foods/:foodId' element={<FoodShow />} />
            <Route path='/coffees' element={<Coffees />} />
            <Route path='/coffees/:coffeeId' element={<CoffeeShow />} />
            <Route path='/bars' element={<Bars />} />
            <Route path='./bars/:barId' element={<BarShow />} />
          
            
          </Route>
          <Route path='/login' element={<Login />} />ß
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<Nomatch />} />
        </Routes>
      </>
    </FetchUser>
  </>
)

export default App;