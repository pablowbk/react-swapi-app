import React from 'react';
import './App.css';

const About = (props) => {
  return (
    <div
      className="About"
      style={ props.visibility ? {display: 'flex'} : {display: 'none'}}
      onClick={props.handleClick}>
        <h1>Star Wars App</h1>
        <h3>A project for ZeroToMastery course</h3>
        <hr/>
        <p>
          As part of <strong>Andrei Neagoie</strong>'s course, I built this simple page App, using <strong>ReactJS</strong> and <strong>SWAPI</strong>. Basic functionality at the moment. Hope to enhance it eventually...
        </p>
    </div>
  )
}

export default About;
