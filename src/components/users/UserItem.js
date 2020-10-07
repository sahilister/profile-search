import React from 'react'

function UserItem (props){
    const {avatar_url, login, html_url} = props.user
    return (
      <div className="card">
        <img
          src={avatar_url}
          alt="dp"
          style={{backgroundColor: 'red', width: '200px'}}
        />
        <h2>username: {login}</h2>
        <a href={html_url}> Github Profile</a>
        <hr />
      </div>
    )
}

export default UserItem
