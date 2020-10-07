import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner.js'

const Users = ({users, loading}) => {
      // if(loading) {
      //   return(<Spinner />)
      // } else {
      //   return(
      //     <div>
      //     {users.map(user =>
      //       <UserItem key={user.id} user={user} />
      //     )}
      //     </div>
      //   )
      // }

      return (loading ?
        <Spinner /> :
        <div>
          {users.map(user =>
            <UserItem key={user.id} user={user} />
          )}
        </div>)
}

export default Users
