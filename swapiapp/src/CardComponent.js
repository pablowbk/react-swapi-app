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


    // this.props.films.map(film => {
    //   return (
    //     fetch(film)
    //     .then(resp => resp.json())
    //     .then(json => filmsArray.push(`Episode ${json.episode_id}: ${json.title}`))
    //     // .then(resp => filmsArray.push(resp.title))
    //   );
    // })
    // this.setState({films:filmsArray})

    const filmsArray = [];
    const fetchFilms = this.props.films.map((filmUrl, i) => fetch(filmUrl)
        .then(res => res.json())
        .then(data => {
          filmsArray.push(`0${data.episode_id} - ${data.title}`);
          filmsArray.sort();
          }))

    Promise.all(fetchFilms)
        .then(fetchedArray => {
          // filmsArray.push(fetchedArray);
          // filmsArray.pop();
          // this.setState({films: filmsArray});
          // console.log(filmsArray)
          this.setState({films:filmsArray})
          })
        .catch((err) => console.log('error: ', err))



  }




  render() {
    const { name } = this.props;

    return (
      <div className='Card'>
        <h3>{ name }</h3>
        <h4>{ this.state.species }</h4>
        <div>Featured in:
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
