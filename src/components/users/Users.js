import React from 'react'
import Usersitem from './UsersItem'
import Spinner from '../layout/Spinner'

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner></Spinner>
  } else {
    return (
      <div className="grid-4">
        {users.map((user) => (
          <Usersitem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

export default Users
