//part 3
import React from 'react'
import {UserConsumer}  from '../userContext'
  

 const LoggInNav = () => {
    return (
        <UserConsumer>

         {({user,logout})=>(
              <div>
              <p>hello {user.name} logged in with {user.email}</p>
              <ul>
                  <li style={{cursor:'pointer',backgroundColor:'red'}} onClick={logout}>Logout</li>
                  <li>dashboard</li>
              </ul>
             
          </div>
         )}
       
        </UserConsumer>
    )
}

const LoggOutNav = () => {
    return (
        <UserConsumer>
            {({login})=>(
               <div>
           <p>please checked login button below</p>
            <ul>
                <li style={{cursor:'pointer',backgroundColor:"green"}} onClick={login}>Login</li>
                <li>register</li>
            </ul>
        </div> 
            )}

        </UserConsumer>
        
    )
}


 const BasicNav = () => {
       return (
            <UserConsumer> 
                {({isAuthenticated})=>(
                     <>
             {isAuthenticated ? <LoggInNav/>:<LoggOutNav/>}
               </>
                ) }
                 
            </UserConsumer>
       )
  
    
}
export default BasicNav


// import React from 'react'
// import  Context  from '../userContext'
  

//  const LoggInNav = () => {
//     return (
//         <Context.Consumer>

//          {({user,logout})=>(
//               <div>
//               <p>hello {user.name} logged in with {user.email}</p>
//               <ul>
//                   <li style={{cursor:'pointer',backgroundColor:'red'}} onClick={logout}>Logout</li>
//                   <li>dashboard</li>
//               </ul>
             
//           </div>
//          )}
       
//         </Context.Consumer>
//     )
// }

// const LoggOutNav = () => {
//     return (
//         <Context.Consumer>
//             {({login})=>(
//                <div>
//            <p>please checked login button below</p>
//             <ul>
//                 <li style={{cursor:'pointer',backgroundColor:"green"}} onClick={login}>Login</li>
//                 <li>register</li>
//             </ul>
//         </div> 
//             )}

//         </Context.Consumer>
        
//     )
// }


//  const BasicNav = () => {
//        return (
//             <Context.Consumer> 
//                 {({isAuthenticated})=>(
//                      <>
//              {isAuthenticated ? <LoggInNav/>:<LoggOutNav/>}
//                </>
//                 ) }
                 
//             </Context.Consumer>
//        )
  
    
// }
// export default BasicNav





// import React from 'react'

//  const LoggInNav = ({logout,user}) => {
//     return (
//         <div>
//             <p>hello {user.name} logged in with {user.email}</p>
//             <ul>
//                 <li style={{cursor:'pointer',backgroundColor:'red'}} onClick={logout}>Logout</li>
//                 <li>dashboard</li>
//             </ul>
           
//         </div>
//     )
// }

// const LoggOutNav = ({login}) => {
//     return (
//         <div>
//            <p>please checked login button below</p>
//             <ul>
//                 <li style={{cursor:'pointer',backgroundColor:"green"}} onClick={login}>Login</li>
//                 <li>register</li>
//             </ul>
//         </div>
//     )
// }


//  const BasicNav = ({login,logout,isAuthenticated,user}) => {
//     if(isAuthenticated){
//              return <LoggInNav logout={logout} user={user}/>
//     }
//      return <LoggOutNav  login={login}/>
    
// }
// export default BasicNav