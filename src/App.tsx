import Layout from "./Layout";
import './index.css'
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Users from "./Users";
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
function App() {

  return (
    
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route element={<Layout/>}>
        <Route  element={<ProtectedRoute/>}>
        <Route path='/home' element={<Home/>}/>
        </Route>
        <Route element={<AdminRoute/>}>
        <Route path='/users' element={<Users/>}/>
        </Route>
      </Route>
      </Routes>
  )
}

export default App
