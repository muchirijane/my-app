import React from 'react';
import './Person.css';

const Person = (props) => {
   return (
      <div className = 'Person'>
         <p onClick={props.click}>I am {props.name} and I am a {props.job}.</p>
         <input type="text" onChange={props.changed} value={props.name}></input>
      </div>
   );
};

export default Person;
