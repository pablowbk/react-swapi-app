import React, {Component} from 'react';
import CardComponent from './CardComponent';
import './App.css';

const CardContainer = ({ data }) => {
  const cardList = data.map((user, i) => {
    return (
      <CardComponent
        key={data[i].url}
        name={data[i].name}
        species={data[i].species}
        films={data[i].films}
      />
    )}
  )
  return (
    <section className='CardContainer'>
      {cardList}
    </section>
  );
}

export default CardContainer;
