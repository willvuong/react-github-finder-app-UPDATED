import React from 'react'
import PropTypes from 'prop-types';

const UserItem = ({user: { login, avatar_url, html_url }}) => {
        return (
            <div className="card text-center">
                <img src={avatar_url} alt="error" className="round-img"/>
                <h3>{login}</h3>
                <a href={html_url} target="_blank" className="btn btn-dark btn-sm my-1">Github Profile</a>
            </div>
        )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
