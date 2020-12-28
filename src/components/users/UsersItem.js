import React from 'react'
import PropTypes from 'prop-types'

const Usersitem = ({ user: { login, avatar_url, html_url } }) => {
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

Usersitem.PropType = {
  user: PropTypes.object.isRequired,
}

export default Usersitem
