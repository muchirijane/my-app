import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
   state = {
      person: [{
            name: 'Jane',
            job: 'devloper 👩‍💻 ',
            date: Date()
         },
         {
            name: 'Tracy',
            job: 'blogger 💻  ',
            date: Date()
         },
         {
            name: 'Jack',
            job: 'muscian 🎻 ',
            date: Date()
         },
         {
            name: 'Tom',
            job: 'actor 🎥 ',
            date: Date()
         },
      ],
      showPersons:false,
   };



   switchHandler = (name) => {
      console.log('I was clicked!!')

      this.setState({   
         person: [{
               name: name,
               job: 'devloper 👩‍💻 ',
               date: Date()
            },
            {
               name: 'Tracy',
               job: 'blogger 💻  ',
               date: Date()
            },
            {
               name: 'Jack',
               job: 'muscian 🎻 ',
               date: Date()
            },
            {
               name: 'Tom',
               job: 'actor 🎥 ',
               date: Date()
            },

         ]
      })
   };

    nameHandler = (e) => {
       this.setState({
         person: [{
            name: 'Jane',
            job: 'devloper 👩‍💻 ',
            date: Date()
         },
         {
            name: e.target.value,
            job: 'blogger 💻  ',
            date: Date()
         },
         {
            name: 'Jack',
            job: 'muscian 🎻 ',
            date: Date()
         },
         {
            name: 'Tom',
            job: 'actor 🎥 ',
            date: Date()
         },

      ]
       })
   }

   toggleHandler = () => {
      const showPerson = this.state.showPersons;
      this.setState ({ showPersons: !showPerson });
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
               {this.state.person.map(person =>
                  <Person name = {person.name}job = {person.job} date= {person.date}/>
               )}
            </div> 
         );
      
      }


      return (
         <div className = 'App' >
            <h1 > Learning React now!👩‍💻 </h1> 
            <button style = {style} onClick = {this.toggleHandler} > Toggle Persons</button> 
            {person}
         </div>
      );
   }
}

export default App;
