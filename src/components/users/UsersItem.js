import React from 'react'

class Usersitem extends React.Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user

    return (
      <div className="card text-conter">
        <img
          src={avatar_url}
          alt="avatar"
          className="round-img"
          style={{
            width: '60px',
          }}
        />

        <h2>{login}</h2>

        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    )
  }
}

export default Usersitem
