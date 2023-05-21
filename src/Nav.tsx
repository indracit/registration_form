import { useLocation } from 'react-router-dom';
import './index.css'
import { Link } from 'react-router-dom';
const Nav = () => {
    const {pathname} = useLocation(); 
    return (
    <nav>
        <ul className='nav-bar'>
            <h1>App</h1>
            <li>
            
                <Link  className={pathname=='/home' ? 'visited':'unvisited'} to="/home" >Home</Link>
            </li>
            <li>
                <Link  className={pathname=='/users' ? 'visited':'unvisited'} to="/users" >Users</Link>
            </li>
            <li>
                <Link  className={pathname=='/' ? 'visited':'unvisited'} to="/" >login</Link>
            </li>
        </ul>
    </nav>
    )
}

export default Nav