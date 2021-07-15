
//---------------------- part 1 ---------------------------------------------------------
import React, { Component } from 'react';

class AddItem extends Component {
    state={
        value:''
    }
    onHandleChange=e=>{
        this.setState({ 
            value:e.target.value
          
        })
      
    }
    
    addItem =()=>{ 
        if(this.state.value){//console.log(this.state.value)
         this.props.addShowCase(this.state.value)
         alert('data added')
            this.setState({value:''})
          
        }
    }
    render() {
        return (
            <div className='d-flex my-3'>
                <input type="text" className='form-control' value={this.state.value} onChange={this.onHandleChange}/>
                <button className='btn btn-success btn-block' onClick={this.addItem} type="button">add item</button>
            </div>
        );
    }
}



const ItemList =({item})=>{
          return(
              <ul className='list-group'>
                  {item.map(lang =><li className='list-group-item text-center text-primary' key={lang}> {lang}</li>)}
              </ul>
          )
}

 const Showcase = ({user,addShowCase}) => {
    return (
        <div>
            <h3>{user.name} ShowCase:</h3>
            <AddItem addShowCase={addShowCase}/>
            <ItemList item={user.language}/>
        </div>
    )
}
export default Showcase