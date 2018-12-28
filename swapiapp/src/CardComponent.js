import React, { Component } from 'react';
import './App.css';




class CardComponent extends Component {
  constructor() {
    super()
    this.state = {
      species: ['Fetching species...'],
      films: ['Loading films...']
    }
  }

  componentDidMount() {
    fetch(this.props.species[0])
      .then(resp => resp.json())
      .then(json => this.setState({species: json.name}))

    // let filmsArray = [];
    // this.props.films.map(film => {
    //   return (
    //     fetch(film)
    //     .then(resp => resp.json())
    //     .then(json => filmsArray.push(`Episode ${json.episode_id}: ${json.title}`))
    //     // .then(resp => filmsArray.push(resp.title))
    //   );
    // })
    // this.setState({films:filmsArray})


    const promises = this.props.films.map(f => fetch(f)
        .then(res => res.json())
        .then(data => data.title));

    Promise.all(promises)
        .then(fetchedArray => this.setState({films:fetchedArray}))
        .catch((err) => console.log('error: ', err))

    
    console.log('state', this.state.films);

  }




  render() {
    const { name } = this.props;

    return (
      <div className='Card'>
        <h3>{ name }</h3>
        {/* <h4 style={{fontStyle: 'italic'}}>The species.name value should be shown below... not the url</h4> */}
        <h4>{ this.state.species }</h4>
        <div>Featured in:
          {/* <p style={{fontStyle: 'italic'}}>(movie titles should be show in the list below, not the urls...)</p> */}
            <ul>
              { this.state.films.map((film, i) => (
                <li key={i}>
                  { film }
                </li>
              ))}
            </ul>
        </div>
      </div>
    )
  }

}

export default CardComponent;
