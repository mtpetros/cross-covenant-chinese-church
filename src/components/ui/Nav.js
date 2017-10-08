import { Link } from 'react-router-dom'
import '../../styling/nav.scss'

const Nav = () => (
    <header>
        <nav id="main-menu">
            <ul id="primary-left">
                <li className="menu-bar-item">
                    <Link to='/' className='bar-link'>Home</Link>
                </li>
                <li className="menu-bar-item">
                    <Link to='/about' className='bar-link'>About</Link>
                    <ul className="drop-down">
                        <li><Link to='/#location'>Vision and Values</Link></li>
                        <li><Link to='/#beliefs'>What we Believe</Link></li>
                        <li><Link to='/#leadership'>Leadership</Link></li>
                    </ul>
                </li>
                <li className="menu-bar-item">
                    <Link to='/visit' className='bar-link'>Visit</Link>
                    <ul className="drop-down">
                        <li><Link to='/#time-and-location'>Time and Location</Link></li>
                        <li><Link to='/#what-to-expect'>What to Expect</Link></li>
                    </ul>
                </li>
                <li className="menu-bar-item">
                    <Link to='/connect' className='bar-link'>Connect</Link>
                    <ul className="drop-down">
                        <li><Link to='/events'>Announcements and Events</Link></li>
                        <li><Link to='/smallgroup'>Small Group</Link></li>
                        <li><Link to='/men'>Men's Ministry</Link></li>
                        <li><Link to='/women'>Women's Ministry</Link></li>
                        <li><Link to='/youth'>Youth Ministry</Link></li>
                        <li><Link to='/children'>Children's Ministry</Link></li>
                        <li><Link to='/serving'>Serve</Link></li>
                        <li><Link to='/membership'>Membership</Link></li>
                        <li><Link to='/emailsignup'>Email Signup</Link></li>
                    </ul>
                </li>
            </ul>
            <ul className="menu-logo"><li>Logo</li></ul>
            <ul id="primary-right">
                <li className="menu-bar-item">
                    <Link to='/contact' className='bar-link'>Contact</Link>
                    <ul className="drop-down">
                        <li><Link to='/#contactform'>Contact Form</Link></li>
                        <li><Link to='/#contactinfo'>Contact and Location Information</Link></li>
                        <li><Link to='/#servicetime'>Service Time</Link></li>
                    </ul>
                </li>
                <li className="menu-bar-item">
                    <Link to='/learn' className='bar-link'>Learn</Link>
                    <ul className="drop-down">
                        <li><Link to='/sermons'>Sermons</Link></li>
                        <li><Link to='/adultseminar'>Adult Seminar</Link></li>
                        <li><Link to='/songs'>Songs for Worship</Link></li>
                        <li><Link to='/christianeducation'>Christian Education</Link></li>
                    </ul>
                </li>
                <li className="menu-bar-item">
                    <Link to='/missions' className='bar-link'>Missions</Link>
                    <ul className="drop-down">
                        <li><Link to='/#local'>Local</Link></li>
                        <li><Link to='/#international'>International</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
)

export default Nav