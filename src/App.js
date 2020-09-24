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
      const hidePersons = this.state.showPersons
      this.setState({ showPersons: !hidePersons })

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
      return (
         <div className = 'App' >
         <h1 > Learning React now!👩‍💻 </h1> 
         <button style = {style} onClick = {this.toggleHandler} > Switch Name </button> 
         { this.state.showPersons ?
            <div>
               <Person name = {this.state.person[0].name} job = {this.state.person[0].job} date = {this.state.person[0].date} click ={this.switchHandler.bind(this, 'Jack')}/>
               <Person name = {this.state.person[1].name} job = {this.state.person[1].job} date = {this.state.person[1].date } changed={this.nameHandler}/> 
               <Person name = {this.state.person[2].name} job = {this.state.person[2].job} date = {this.state.person[2].date} click = {()=> this.switchHandler('Janice 💞')}/>
               <Person name = {this.state.person [3].name}job = {this.state.person[3].job} date = {this.state.person[3].date}/> 
            </div> : null
         }
         </div>
      );
   }
}

export default App;
