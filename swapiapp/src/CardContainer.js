import React from 'react';
import CardComponent from './CardComponent';
import './App.css';

const CardContainer = ({ data }) => {
  const cardList = data.map((user, i) =>
    <CardComponent
      key={i}
      name={user.name}
      species={user.species}
      films={user.films}
    />
  )
  return (
    <section className='CardContainer'>
      {cardList}
    </section>
  );
}

export default CardContainer;
