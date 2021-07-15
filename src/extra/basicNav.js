
// --------------part 1------------------------------------------------------------
import React from 'react'

 const LoggInNav = ({logout,user}) => {
    return (
        <div>
            <p>hello {user.name} logged in with {user.email}</p>
            <ul>
                <li style={{cursor:'pointer',backgroundColor:'red'}} onClick={logout}>Logout</li>
                <li>dashboard</li>
            </ul>
           
        </div>
    )
}

const LoggOutNav = ({login}) => {
    return (
        <div>
           <p>please checked login button below</p>
            <ul>
                <li style={{cursor:'pointer',backgroundColor:"green"}} onClick={login}>Login</li>
                <li>register</li>
            </ul>
        </div>
    )
}