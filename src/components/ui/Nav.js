import { Link } from 'react-router-dom'

const Nav = () => (
    <div>
        <h1>Welcome</h1>
        <nav>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
        </nav>
    </div>
)

export default Nav