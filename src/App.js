//part 3
import React, { Component } from 'react';
import BasicNav from './component/basicNav';
import Showcase from './component/ShowCase';
import {UserProvider,UserConsumer} from './component/userContext'



//export const Context =createContext() // exporting so that every  child can get the value
class App extends Component {
 
 //<Context.Provider value={this.state}> 
  render() {
    return (
     
        <UserProvider>

      
      <div className='container bg-primary'>
        <div className='row'>
          <UserConsumer>
            {
              ({isAuthenticated})=>(
                <div className='col-sm-6 offset-sm-3'>
                <h1 className='text-center'>react context api practice</h1>
                <hr/>
               <BasicNav/>
               <hr/>
              {isAuthenticated &&(<Showcase/>) }
              </div>
              )
            }
          </UserConsumer>
          
          
        </div>
        
      </div>
      </UserProvider>
    );
  }
}

export default App;



// import React, { Component } from 'react';
// import BasicNav from './component/basicNav';
// import Showcase from './component/ShowCase';
// import Context from './component/userContext'



// //export const Context =createContext() // exporting so that every  child can get the value
// class App extends Component {
//   state={
//     user:{
//       name:'m a hossain',
//       email:'abusen50@gmail.com',
//       language:[
//         'java',
//         'c language',
//         'javascript',
//         'php',
//         'python'
//       ]
//     },
//     isAuthenticated:false
//   }
//   login =()=> {this.setState({isAuthenticated:true})}
//   logout=()=>{this.setState({isAuthenticated:false})}

//   addShowCase =item =>{
//     const user ={ ...this.state.user}
//     user.language.push(item)
//     this.setState({user})
//   }
//  //<Context.Provider value={this.state}> 
//   render() {
//     return (
     
//         <Context.Provider value={{...this.state,
//                                 login:this.login,
//                                 logout:this.logout,
//                                 addShowCase:this.addShowCase }}>

      
//       <div className='container bg-primary'>
//         <div className='row'>
//            <div className='col-sm-6 offset-sm-3'>
//              <h1 className='text-center'>react context api practice</h1>
//              <hr/>
//             <BasicNav
// />
//             <hr/>
//            {this.state.isAuthenticated &&(<Showcase/>) }
//            </div>
          
//         </div>
        
//       </div>
//       </Context.Provider>
//     );
//   }
// }

// export default App;




// import React, { Component } from 'react';
// import BasicNav from './component/basicNav';
// import Showcase from './component/ShowCase';




// class App extends Component {
//   state={
//     user:{
//       name:'m a hossain',
//       email:'abusen50@gmail.com',
//       language:[
//         'java',
//         'c language',
//         'javascript',
//         'php',
//         'python'
//       ]
//     },
//     isAuthenticated:false
//   }
//   login =()=> {this.setState({isAuthenticated:true})}
//   logout=()=>{this.setState({isAuthenticated:false})}

//   addShowCase =item =>{
//     const user ={ ...this.state.user}
//     user.language.push(item)
//     this.setState({user})
//   }

//   render() {
//     return (
//       <div className='container bg-primary'>
//         <div className='row'>
//            <div className='col-sm-6 offset-sm-3'>
//              <h1 className='text-center'>react context api practice</h1>
//              <hr/>
//             <BasicNav
//             isAuthenticated={this.state.isAuthenticated}
//             user ={this.state.user}
//             login={this.login}
//             logout={this.logout}
//             />
//             <hr/>
//            {this.state.isAuthenticated &&(
//              <Showcase
//             user={this.state.user}
//             addShowCase={this.addShowCase}
//             />
//            ) }
//            </div>
          
//         </div>
        
//       </div>
//     );
//   }
// }

// export default App;