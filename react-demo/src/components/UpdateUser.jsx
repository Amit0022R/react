import {  useState , useContext } from 'react';
import { UserContext } from './UserContext';

import React from 'react'

const UpdateUser = () => {

    const {UpdateUser} = useContext(UserContext);
    const [newName , setNewName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newName.trim()) {
            UpdateUser(newName)
            setNewName("");
        }
    }


  return (
    <div>

    <h2>Update user name</h2>
    <form onSubmit={handleSubmit} >
        <input 
        type="text" 
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder='Enter new name'
         />

        <button type="submit">Update</button>

    </form>
    </div>    
  )
}

export default UpdateUser