import React, { Component,createContext } from 'react';
import BasicNav from './component/basicNav';
import Showcase from './component/ShowCase';




class App extends Component {
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

  render() {
    return (
      <div className='container bg-primary'>
        <div className='row'>
           <div className='col-sm-6 offset-sm-3'>
             <h1 className='text-center'>react context api practice</h1>
             <hr/>
            <BasicNav
            isAuthenticated={this.state.isAuthenticated}
            user ={this.state.user}
            login={this.login}
            logout={this.logout}
            />
            <hr/>
           {this.state.isAuthenticated &&(
             <Showcase
            user={this.state.user}
            addShowCase={this.addShowCase}
            />
           ) }
           </div>
          
        </div>
        
      </div>
    );
  }
}

export default App;




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