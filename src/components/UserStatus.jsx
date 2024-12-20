import React from 'react'
import { useState } from 'react'

function UserStatus(props) {
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const toggleLog = ()=>{
        setIsLoggedIn(!isLoggedIn)
    }
  return (
    <div>
        <button onClick={toggleLog}>
            {isLoggedIn ? 'LogIn':'LogOut'}
        </button>
        <h1>{isLoggedIn ? 'You are currently Out,press logIn to get in':'You are currently In,press logOut to get out'}</h1>
    </div>
  )
}

export default UserStatus