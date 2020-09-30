import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

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
      const personIndex = this.state.person.findIndex(p=>p.id === id);

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
      const style = {
         backgroundColor: '#284EC2',
         color: '#fff',
         fontSize: '18px',
         padding: '3px 10px',
         borderRadius: '10px',
         margin: '10px',
         cursor: 'pointer',
         border: 'none'
      }

      let person = null;
      if(this.state.showPersons){
         person = (
            <div>
               {this.state.person.map((person, index) =>
                  <Person 
                  click ={()=> this.deleteHandler(index)} 
                  changed={(e)=>this.nameChangeHandler(e,person.id)} 
                  name = {person.name}job = {person.job} key = {person.id}/>
               )}
            </div> 
         );

         style.backgroundColor = '#472d30';
      
      }

      // let warningText = ['red', 'bold'].join(' ');
      const warningText = [];
      if (this.state.person.length <= 2){
         warningText.push('red');
      }
      if (this.state.person.length <= 1){
         warningText.push('bold');
      }


      return (
         <div className = 'App' >
            <h1 > Learning React now!👩‍💻 </h1> 
            <p className = {warningText.join(' ')}>Red flag ⛳ </p>
            <button style = {style} onClick = {this.toggleHandler} > Toggle Persons</button> 
            {person}
         </div>
      );
   }
}

export default App;
