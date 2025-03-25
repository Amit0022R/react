import { createContext  } from "react";
import { useState } from "react";
// create instance of createContext
const UserContext = createContext();

const UserProvider = ({children}) => {

    const [ user , setUser ] = useState({name: "Amit Kumar"});

    const UpdateUser = (newName) => {
        setUser({name: newName});
    }

    return <UserContext.Provider value={{user , UpdateUser}} >
            {children}
    </UserContext.Provider>

}

export  {UserProvider , UserContext};
// provider means this going to allows us to provide our data to all the components    