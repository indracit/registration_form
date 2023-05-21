import Nav from "./Nav";
import {Outlet} from 'react-router-dom'
import './index.css'
const Layout = () => {
    return (
    <main>
    <Nav/>
    <div className="app-main">
    <Outlet/> </div>
    </main>
    )
}

export default Layout