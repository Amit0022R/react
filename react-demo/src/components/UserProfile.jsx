// to access data from context
import { useContext } from "react";
// from which context we want to consume the data
import {UserContext} from "./UserContext";

import React from 'react'

const UserProfile = () => {

    const {user} = useContext(UserContext); // access data from UserContext

  return (
    <div>
       <h1>User profile</h1>
      <h2> <p> Name: { user.name } </p> </h2>
    </div>
  )
}

export default UserProfile