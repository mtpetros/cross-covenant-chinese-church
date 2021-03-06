import { Component } from 'react'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';


class Nav extends Component {
    constructor(props) {
        super(props);
     }   


    render() {
        const {navClasses} = this.props;
    return (
    <header>
        <nav id="menu-cont" className={navClasses}>
            <div id="main-menu">
                <ul id="primary-left">
                    <li className="menu-bar-item">
                        <Link to='#' className='bar-link'>Connect</Link>
                        <ul className="drop-down">
                            <li><Link to='/events'>Announcements and Events</Link></li>
                            <li><Link to='/smallgroup'>Small Group</Link></li>
                            <li><Link to='/men'>Men's Ministry</Link></li>
                            <li><Link to='/women'>Women's Ministry</Link></li>
                            <li><Link to='/youth'>Youth Ministry</Link></li>
                            <li><Link to='/children'>Children's Ministry</Link></li>
                            <li><Link to='/serve'>Serve</Link></li>
                            <li><Link to='/membership'>Membership</Link></li>
                            {/* <li><Link to='/emailsignup'>Email Signup</Link></li> */}
                        </ul>
                    </li>
                    <li className="menu-bar-item">
                        <Link to='/visit' className='bar-link'>Visit</Link>
                        <ul className="drop-down">
                            <li><Link to='/visit#time-location'>Time and Location</Link></li>
                            <li><Link to='/visit#what-to-expect'>What to Expect</Link></li>
                        </ul>
                    </li>
                    <li className="menu-bar-item">
                        <Link to='/about' className='bar-link'>About</Link>
                        <ul className="drop-down">
                            <li><Link to='/about#vision-values'>Vision and Values</Link></li>
                            <li><Link to='/about#beliefs'>What we Believe</Link></li>
                            <li><Link to='/about#leadership'>Leadership</Link></li>
                        </ul>
                    </li>
                    <li className="menu-bar-item">
                        <Link to='/' className='bar-link'>Home</Link>
                    </li>
                </ul>
                <ul id="menu-logo"><li><img src="/assets/img/cccclogo.png" /></li></ul>
                <ul id="primary-right">
                    <li className="menu-bar-item">
                      <Link to='/missions' className='bar-link'>Missions</Link>
                        <ul className="drop-down">
                            <li><Link to='/missions#local'>Local</Link></li>
                            {/* <li><Link to='/missions#international'>International</Link></li>*/}
                        </ul>
                    </li>
                    <li className="menu-bar-item">
                        <Link to='#' className='bar-link'>Learn</Link>
                        <ul className="drop-down">
                            <li><Link to='/adultseminar'>Adult Seminar</Link></li>
                            {/*<li><Link to='/sermons'>Sermons</Link></li>
                            <li><Link to='/songs'>Songs for Worship</Link></li>*/}
                        </ul>
                    </li>
                    <li className="menu-bar-item">
                        <Link to='/contact' className='bar-link'>Contact</Link>
                        <ul className="drop-down">
                          {/* <li><Link to='/contact#contactform'>Contact Form</Link></li>*/}
                            <li><Link to='/contact#contact-info'>Contact and Location Information</Link></li>
                            <li><Link to='/contact#service-time'>Service Time</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)}
}

export default Nav
