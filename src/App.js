import React, { Component } from 'react';
import Deskripsi from './component/dumb/Deskripsi';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name : '',
    }
    
    //this.setName = this.setName.bind(this)
  }
  //e=event
  setName = (e) => {
    let name = e.target.value
    this.setState({
      name : name
    })
    console.log(name);
  }
  //setAlamat (){}
  render(){
  return (
    <div>
      <h1>{this.state.name}</h1>
      <input onChange = {this.setName} />
      <Deskripsi name={this.state.name}></Deskripsi>
    </div>
  );
  }
}

export default App;
