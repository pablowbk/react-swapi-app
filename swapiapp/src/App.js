import React, {Component} from 'react';
import CardContainer from './CardContainer';
import NavBar from './NavBar';
import Header from './Header';
import './App.css';

// const api_data = [];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      films: [],
      species: '',
      api_data: []
    };

  }

  componentDidMount() {
    const url = 'https://swapi.co/api/people/';

    fetch(url)
      .then(response => response.json())
      .then(people => this.setState( { data: people.results } ))


  }



  render() {
    const { data } = this.state;
    return (
      <div className='App'>
          <NavBar />
          <Header />
          {
            data.length === 0
            ? <h3>Loading Cards...</h3>
            : <h3>Cards Count: { data.length }</h3>
          }
          <CardContainer data={ data } />
      </div>
    );
  }
}

export default App;
