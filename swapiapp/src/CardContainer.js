import React from 'react';
import CardComponent from './CardComponent';
import './App.css';

const CardContainer = ({ data }) => {
  const cardList = data.map((card, index) => <CardComponent key={index} data={data} />)
  return (
    <section className='CardContainer'>
      {cardList}
    </section>
  );
}

export default CardContainer;
