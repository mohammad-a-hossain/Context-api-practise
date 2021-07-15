 //------------part 3--------------------------------------------

import React, {createContext,Component} from 'react'

   let Context = null

   const {Provider , Consumer } = (Context= createContext())

   class UserProvider extends Component{
    state={
        user:{
          name:'m a hossain',
          email:'abusen50@gmail.com',
          language:[
            'java',
            'c language',
            'javascript',
            'php',
            'python'
          ]
        },
        isAuthenticated:false
      }
      login =()=> {this.setState({isAuthenticated:true})}
      logout=()=>{this.setState({isAuthenticated:false})}
    
      addShowCase =item =>{
        const user ={ ...this.state.user}
        user.language.push(item)
        this.setState({user})
      }
      render(){
          return(
              <Provider value={ {...this.state,login:this.login,logout:this.logout,addShowCase:this.addShowCase}}>
            {this.props.children}
              </Provider>
          )
      } 
    
   }
   export {UserProvider, Consumer as UserConsumer, Context as UserContext}




// part -----------2----------------------------------------------------
// import { createContext } from 'react'

// const Context = createContext()

// export default Context