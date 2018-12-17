import React, {Component} from 'react';
import CardContainer from './CardContainer';
import NavBar from './NavBar';
import Header from './Header';
import './App.css';


class App extends Component {
    constructor() {
      super()
      this.state = {
        data : []
      }

    }

    componentDidMount() {
      const url = 'https://swapi.co/api/people/';

      fetch(url)
        .then(response => response.json())
        .then(people => this.setState({ data: people.results }));

    }

    render() {
        const { data } = this.state;

        return (
            <div className='App'>
                <NavBar />
                <Header />
                <CardContainer data={data}/>
            </div>
        )
    }
}

export default App;
