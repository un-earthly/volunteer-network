import { Route, Routes } from "react-router-dom";
import PrivetRoute from './Utils&Shared/PrivetRoute'
import Home from './Pages/Home.js'
import Donation from './Pages/Donation.js'
import Events from './Pages/Events.js'
import AddEvents from './Pages/AddEvents.js'
import Blogs from './Pages/Blogs.js'
import Admin from './Pages/Admin.js'
import Login from './Pages/Login.js'
import Register from './Pages/Register.js'
function App() {

  return (
    <div className='relative'>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Home />} path='/home' />
        <Route element={<PrivetRoute><Donation /></PrivetRoute>} path='/donation' />
        <Route element={<Events />} path='/events' />
        <Route element={<AddEvents />} path='/addevents' />
        <Route element={<Blogs />} path='/blog' />
        <Route element={<Login />} path='/login' />
        <Route element={<PrivetRoute><Register /></PrivetRoute>} path='/register' />
        <Route element={<PrivetRoute><Admin /></PrivetRoute>} path='/admin' />
      </Routes>
    </div>
  );
}

export default App;
