import React from 'react';
import './App.css';

const CardComponent = ({name, species, films}) => {
  return (
    <div className='Card'>
      <h3>{name}</h3>
      <h4>{species}</h4>
      <div>Appears in:
        <ul>
          {films.map((film, i) => (
            <li key={i}>
              {film}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CardComponent;
