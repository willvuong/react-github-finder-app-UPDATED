// import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserItem from './UserItem.js'
import Spinner from '../layout/Spinner.js'

const Users = ({ users, loading }) => {
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle} className="Users">
                {users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
    
        )
    }
   
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat (3, 1fr)',
    gridGap: '1rem'
}

export default Users
