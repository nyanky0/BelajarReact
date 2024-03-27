import logo from './logo.svg';
import './App.css';
import Deskripsi from './component/dumb/Deskripsi';
import Input from './component/screen/Input';
import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
  }

  render(){
  return (
    <div>
      <Deskripsi name="Naeta"></Deskripsi>
      <Deskripsi name="Naeta2"></Deskripsi>
      <Input
        name = "agit"
        alamat = "Indonesia"
        //a = "a"
      />
    </div>
  );
  }
}

export default App;
