import React from 'react';
import './Person.css';
import Radium from 'radium'

const Person = (props) => {
   const mediaQuery ={
      '@media only screen and (max-width: 500px)': {
            width : '50%',
      }
   }
   return (
      <div className = 'Person' style = {mediaQuery}>
         <p onClick={props.click}>I am {props.name} and I am a {props.job}.</p>
         <input type="text" onChange={props.changed} value={props.name}></input>
      </div>
   );
};

export default Radium(Person);
