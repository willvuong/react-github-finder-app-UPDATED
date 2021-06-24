import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
    return (
        <nav className="navbar bg-primary">
            <i className={icon}> {title}</i>

        </nav>
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
