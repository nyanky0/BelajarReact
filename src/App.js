import React, { Component } from 'react';
import Deskripsi from './component/dumb/Deskripsi';
import * as Helper from './helper';
import Loading from './helper/Loading';
import * as Services from './services';
import Movies from './component/dumb/Movies';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name : '',
      stillType: '',
      movies : []
    }
    //kalau gapakai arrow function this.setStillType = this.setStillType.bind(this)
    //this.setName = this.setName.bind(this) facebook.github.io/react-native/movies.json
  }
  //e=event
  setName = (e) => {
    let name = e.target.value
    this.setState({
      name : name,
      stillType : true,
    })
    //console.log(name);
  }
  //setAlamat (){}

  //setStillType(){
  //  this.setState({
  //    stillType : false
  //  })
  //}
  setStillType = () => {
    this.setState({
      stillType : false
    })
  }


  componentDidMount(){
    this.setState({
      stillType : false,
    })
    //console.log('Component ini melakukan set')
    this.createRequest()
  }

  createRequest = async () =>{
    let response = await Services.loadMovies()
    //console.log(response)
    this.setState({
      movies : response.data.movies
      
    })
  }

  componentDidUpdate(){
    console.log('Component melakukan update')
  }


  render(){
    console.log(this.state.movies)
    if(this.state.stillType===true){
      return(
        <div>
          <h1>{this.state.name}</h1>
          <input onChange = {this.setName} />
          <button onClick={this.setStillType}>submit</button>
          <Loading/>
        </div>
      )
    }
    return (
      <div>
        <h1>{this.state.name}</h1>
        <input onChange = {this.setName} />
        <Deskripsi 
        name={Helper.toLower(this.state.name)}>
        </Deskripsi>
        <Movies data={this.state.movies}></Movies>
      </div>
    );
  }
}

export default App;
