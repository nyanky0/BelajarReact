import React, { Component } from 'react';
import Deskripsi from './component/dumb/Deskripsi';
import * as Helper from './helper';
import Loading from './helper/Loading';
import * as Services from './services';
import Movies from './component/dumb/Movies';
/* import FormGuru from './screen/FormGuru';
import FormSiswa from './screen/FormSiswa';
import FormHandler from './helper/FormHandler'; */
import { Container, Row, Button, Col, ButtonToolbar } from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      stillType: '',
      movies: []
    }
    //kalau gapakai arrow function this.setStillType = this.setStillType.bind(this)
    //this.setName = this.setName.bind(this) facebook.github.io/react-native/movies.json
  }
  //e=event
  setName = (e) => {
    let name = e.target.value
    this.setState({
      name: name,
      stillType: true,
    })
  }

  setStillType = () => {
    this.setState({
      stillType: false
    })
  }


  componentDidMount() {
    this.setState({
      stillType: false,
    })
    //console.log('Component ini melakukan set')
    this.createRequest()
  }

  createRequest = async () => {
    let response = await Services.loadMovies()
    //console.log(response)
    this.setState({
      movies: response.data.movies

    })
  }

  componentDidUpdate() {
    console.log('Component melakukan update')
  }


  render() {
    console.log(this.state.movies)
    if (this.state.stillType === true) {
      return (
        <>
          <Container>
            <Row>
              <Col>
                <h1>{this.state.name}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <input className="form-control" onChange={this.setName} />
                <button onClick={this.setStillType}>submit</button>
                <Loading />
              </Col>
            </Row>
            <Row>
              <Col>
                <Movies data={this.state.movies}></Movies>
              </Col>
            </Row>
          </Container>
        </>
      )
    }
    return (
      <>
        <Container>
          <Row>
            <Col>
              <h1>{this.state.name}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <input className="form-control" onChange={this.setName} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Deskripsi
                name={Helper.toLower(this.state.name)}>
              </Deskripsi>
              <Movies data={this.state.movies}></Movies>
            </Col>
          </Row>
          <Row>
            <ButtonToolbar>
              <Button variant="primary">Primary</Button>{' '}
              <Button variant="secondary">Secondary</Button>{' '}
              <Button variant="success">Success</Button>{' '}
              <Button variant="warning">Warning</Button>{' '}
              <Button variant="danger">Danger</Button>{' '}
              <Button variant="info">Info</Button>{' '}
              <Button variant="light">Light</Button>{' '}
              <Button variant="dark">Dark</Button>
              <Button variant="link">Link</Button>
            </ButtonToolbar>
          </Row>
        </Container>

      </>
    );

  }
}

export default App;
