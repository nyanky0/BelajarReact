import React, { Component } from 'react';
// import Deskripsi from './component/dumb/Deskripsi';
// import * as Helper from './helper';
// import Loading from './helper/Loading';
import * as Services from './services';
// import Movies from './component/dumb/Movies';
import FormGuru from './screen/FormGuru';
import FormSiswa from './screen/FormSiswa';
import FormHandler from './helper/FormHandler';

class App extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <FormGuru/>
        <hr></hr>
        <FormSiswa/>
      </div>
    )
  }
}

export default App;
