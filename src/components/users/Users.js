import React, { Component } from 'react'
import Usersitem from './UsersItem'

class Users extends Component {
  state = {
    users: [
      {
        id: '19',
        login: 'brynary',
        avatar_url: 'https://avatars0.githubusercontent.com/u/19?v=4',
        html_url: 'https://github.com/brynary',
      },
      {
        id: '20',
        login: 'kevinclark',
        avatar_url: 'https://avatars3.githubusercontent.com/u/20?v=4',
        html_url: 'https://github.com/kevinclark',
      },
      {
        id: '21',
        login: 'technoweenie',
        avatar_url: 'https://avatars3.githubusercontent.com/u/21?v=4',
        html_url: 'https://github.com/technoweenie',
      },
      {
        id: '22',
        login: 'macournoyer',
        avatar_url: 'https://avatars3.githubusercontent.com/u/22?v=4',
        html_url: 'https://github.com/macournoyer',
      },
    ],
  }

  render() {
    return (
      <div
        style={{
          display: 'grid',
          girdTemplateColumns: 'repeat(4, 1fr)',
          gridGap: '1rem',
        }}
      >
        {this.state.users.map((user) => (
          <Usersitem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

export default Users
