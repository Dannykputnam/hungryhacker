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

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<ProtectedRoute />}>
            <Route path='/' element={<Foods />} />ßß
            <Route path='/profile' element={<Profile />} />
            
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