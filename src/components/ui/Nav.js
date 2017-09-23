import { Link } from 'react-router-dom'
import '../../styling/nav.scss'

const Nav = () => (
    <header>
        <nav id="main-menu">
            <ul id="primary-left">
                <li className="menu-bar-item">
                    <Link to='/' className='bar-link'>Home</Link>
                    <ul className="drop-down">
                        <li><Link to='/#location'>Location</Link></li>
                    </ul>
                </li>
                <li className="menu-bar-item">
                    <Link to='/about' className='bar-link'>About</Link>
                </li>
            </ul>

            <ul id="primary-right">
                <li className="menu-bar-item">
                    <Link to='/' className='bar-link'>Home</Link>
                    <ul className="drop-down">
                        <li><Link to='/#location'>Location</Link></li>
                    </ul>
                </li>
                <li className="menu-bar-item">
                    <Link to='/about' className='bar-link'>About</Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default Nav