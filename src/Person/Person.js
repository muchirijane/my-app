import React from 'react';
import classes from './Person.module.css';


const Person = (props) => {
   const randomNumber = Math.random() ;
   console.log(randomNumber)

   if(randomNumber > 0.7){
      throw new Error('This is an error message')
   }
   
   return (
      <div className={classes.Person}>
         <p onClick={props.click}>I am {props.name} and I am a {props.job}.</p>
         <input type="text" onChange={props.changed} value={props.name}></input>
      </div>
   );
};

export default Person;
