import React from 'react'

import "./UserCard.css"

function UserCard(props) {

return (
    <div
      className="card"
      style={{ borderRadius: "20px" }}
    >
      <img src={props.image} />

      <h2>{props.name}</h2>

      <p>{props.desc}</p>
    </div>
  )
}

export default UserCard