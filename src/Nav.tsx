import { useLocation } from 'react-router-dom';
import './index.css'

const Nav = () => {
    const {pathname} = useLocation(); 
    return (
    <nav>
        <ul className='nav-bar'>
            <h1>App</h1>
            <li>
                <a  className={pathname=='/home' ? 'visited':'unvisited'} href="/home" >Home</a>
            </li>
            <li>
                <a  className={pathname=='/users' ? 'visited':'unvisited'} href="/users" >Users</a>
            </li>
        </ul>
    </nav>
    )
}

export default Nav