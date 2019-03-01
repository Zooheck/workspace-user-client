import React from 'react'

const User = (props) => {
  return (
    <div>
      <p>{props.user.username}</p>
      <p>{props.user.department}</p>
    </div>
  )
}

export default User
