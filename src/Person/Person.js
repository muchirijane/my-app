import React from 'react';

const Person = (props) => {
   return (
      <div>
         <p onClick={props.click}>I am {props.name} and I am a {props.job}</p>
         <p>Today's date is {props.date}</p> 
        <p>{props.children}</p>
      </div>
   );
};

export default Person;
