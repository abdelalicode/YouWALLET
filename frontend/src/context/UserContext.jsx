import React, { createContext, useContext } from 'react'
import { useState } from 'react';
import Api from './../services/Api';
import { useNavigate } from 'react-router';
import { HOME } from './../router/index';



export const  UserStateContext = createContext({

    user: {},
    setUser: () => {},
    authenticated : false, 
    logout: ()=>{},
    login: (email, password) => {},
    setAuthenticated: () => {}
})

export default function UserContext({children}) {
    const [user, setUser]= useState({})

    const [authenticated, setAuthenticated ] =useState(false)

    const login = async (email, password) => {
       return  Api.login(email, password)
       
        
    }

    const logout =  () => {}

  return (
        
    <UserStateContext.Provider value={{
        user,
        setUser,
        login,
        logout,
        authenticated,
        setAuthenticated
    }}>
      {children}
    </UserStateContext.Provider>


)
  
}

export const useUserContext = () => useContext(UserStateContext)



