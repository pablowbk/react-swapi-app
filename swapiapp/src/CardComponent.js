import React from 'react';
import './App.css';


const CardComponent = ({ name, species, films }) => {

  return (
    <div className='Card'>
      <h3>{ name }</h3>
      <h4 style={{fontStyle: 'italic'}}>The species.name value should be shown below... not the url</h4>
      <h4>{ species }</h4>
      <div>Featured in:
        <p style={{fontStyle: 'italic'}}>(movie titles should be show in the list below, not the urls...)</p>
          <ul>
            {films.map((film, i) => (
              <li key={i}>
                { film }
              </li>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default CardComponent;
