import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
    const [activeTab, setActiveTab] = useState('')

    //using this useEffect to make sure that the active tab is still highlighted when refreshing the page
    const currentLocation = window.location.href;
    useEffect(() => {
        if (currentLocation.endsWith('/')) {
            setActiveTab('Home')
        } else if (currentLocation.endsWith('/about')) {
            setActiveTab('About')
        }
    }, [activeTab])

    return (
        <div>
            <nav className="navbar bg-primary">
                <i className={icon}> {title}</i>
                <ul>
                    <li className={activeTab === 'Home' ? "navActive" : ""}><Link to='/' onClick={() => setActiveTab('Home')}>Home</Link></li>
                    <li className={activeTab === 'About' ? "navActive" : ""}><Link to='/about' onClick={() => setActiveTab('About')}>About</Link></li>
                </ul>
            </nav>
        </div>

    )
}

Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github fa-2x"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
