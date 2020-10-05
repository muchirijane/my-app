import React, { Component } from "react";
import  "./App.css";
import classes from "./App.module.css";

import Person from './Person/Person';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";


class App extends Component {
   state = {
      person: [
         {id: 1, name: 'Jane', job: 'devloper 👩‍💻'},
         {id: 2,name: 'Tracy', job: 'blogger 💻 '},
         {id: 3, name: 'Jack', job: 'muscian 🎻'},
         {id: 4, name: 'Tom', job: 'actor 🎥'},
      ],
      showPersons:false,
   };



   switchHandler = (name) => {
      console.log('I was clicked!!')

      this.setState({   
         person: [{
               name: name,
               job: 'devloper 👩‍💻 ',
              
            },
            {
               name: 'Tracy',
               job: 'blogger 💻  ',
               
            },
            {
               name: 'Jack',
               job: 'muscian 🎻 ',
              
            },
            {
               name: 'Tom',
               job: 'actor 🎥 ',
               
            },

         ]
      })
   };

   nameChangeHandler = (e, id)=>{
      const personIndex = this.state.person.findIndex(p=>p.userId === id);

      const personCard = {...this.state.person[personIndex]};

      personCard.name = e.target.value;
      const person = this.state.person;
      person[personIndex] = personCard;
      this.setState({person: person});

      
   }


   toggleHandler = () => {
      const showPerson = this.state.showPersons;
      this.setState ({ showPersons: !showPerson });
   }

   deleteHandler = (personIndex) => {
      //updating the state in a immutable way- copy of the original state
      const person = [...this.state.person.slice()];
      person.splice(personIndex, 1);
      this.setState({person : person});
      console.log('I was clicked!!!' + person);
   }

   render() {

      let person = null;
      let btnClass = [classes.Button];
      if(this.state.showPersons){
         
         person = (
            <div>
               {this.state.person.map((person, index) =>
               <ErrorBoundary key ={person.id}>
                  <Person 
                  click ={()=> this.deleteHandler(index)} 
                  changed={(e)=>this.nameChangeHandler(e,person.id)} 
                  name = {person.name}job = {person.job}/>
               </ErrorBoundary>
               )}
            </div> 
         );
         

        btnClass.push(classes.Red) 
      
      }

      // let warningText = ['red', 'bold'].join(' ');
      const warningText = [];
      if (this.state.person.length <= 2){
         warningText.push('classes.red'); // class ['red']
      }
      if (this.state.person.length <= 1){
         warningText.push('classes.bold');  //class ['red','bold']
      }


      return (
         
            <div className={classes.App}>
               <h1 > Learning React now!👩‍💻 </h1> 
               <p className = {warningText.join(' ')}>Red flag ⛳ </p>
               <button className = {btnClass.join(' ')} onClick = {this.toggleHandler} > Toggle Persons</button> 
               {person}
            </div>
         
      );
   }
}

export default App;
