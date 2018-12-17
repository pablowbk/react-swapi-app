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
      console.log(`Constructor's state is ${this.state.data}`);
    }

    componentDidMount() {
      const url = 'https://jsonplaceholder.typicode.com/users';

      fetch(url)
        .then(response => response.json())
        .then(result => this.setState({ data: result }));

      console.log(`componentDidMount's state is ${this.state.data}`);
    }

    render() {
        console.log(`render's state is ${this.state.data}`);
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
