import React, { Component } from 'react'
import Usersitem from './UsersItem'

class Users extends Component {
  render() {
    return (
      <div className="grid-4">
        {this.props.users.map((user) => (
          <Usersitem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

export default Users
