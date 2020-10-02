import React from 'react';
import styled from 'styled-components';


const Person = (props) => {

   const PersonStyled = styled.div`
    width: 800px;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    margin-bottom: 30px;

    @media only screen and (max-width: 500px){
          width: 50%;
  }
`;
   
   return (
      <PersonStyled>
         <p onClick={props.click}>I am {props.name} and I am a {props.job}.</p>
         <input type="text" onChange={props.changed} value={props.name}></input>
      </PersonStyled>
   );
};

export default Person;
