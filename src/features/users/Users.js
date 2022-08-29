import React from "react";
// add any needed imports here
import { useSelector } from "react-redux";

function Users() {

  const users = useSelector((state) => state.users)
  // const userCount = useSelector((state) => state.users.length)

  const usernames = users.map((user) => {
    return <li key={user.username}>{user.username}</li>
  })

  // console.log(users.username)


  return (
    <div>
      <ul>
        Total Users: {users.length}
        {usernames}
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
        
      </ul>
    </div>
  );
}

export default Users;
