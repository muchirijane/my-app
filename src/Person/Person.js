import React from 'react';

const Person = (props) => {
   return (
      <div>
         <p>
            I am {props.name} and I am a {props.job}
         </p>
         <p>Today's date is {props.date}</p>
      </div>
   );
};

export default Person;
