import Layout from "./Layout";
import './index.css'
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Users from "./Users";
import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route element={<Layout/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
      </Route>
      </Routes>
  )
}

export default App
