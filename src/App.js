import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

// function App() {
//    return (
//       <div className='App'>
//          <h1>Learning React now! 👩‍💻</h1>
//          <Person name='Tracy' age='23' date={Date()} />
//          <Person name='Alssay Drake' age='22' date={Date()}>
//             {' '}
//             I am from The Society Series{' '}
//          </Person>
//       </div>
//    )
//    // return React.createElement('div', {
//    //   className: 'App'
//    // }, React.createElement('h1', null, 'Learning React now! 👩‍💻 '));
// }

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
/*
const App = props =>{

  const [personState, personSetState] = useState({
    person : [
      {name: 'Jane', job: 'devloper 👩‍💻' , date: Date()},
      {name: 'Luke', job: 'muscian 🎸' , date: Date()},
      {name: 'Jack', job: 'magician 🧙' , date: Date()}
    ],
  });

  const [otherState, anotherState] = 'some state string here!';

  const switchHandler = ()=>{
    personSetState({ 
      person : [
        {name: 'Tracy', job: 'engineer 👩‍💻' , date: Date()},
        {name: 'Luke', job: 'muscian 🎸' , date: Date()},
        {name: 'Jack', job: 'magician 🧙' , date: Date()}
      ],
    })
  }

  return (
    <div className="App">
      <h1> Learning React now!👩‍💻 </h1>
      <button onClick = {switchHandler}>SwitchName</button>
      <Person name={personState.person[0].name} job ={personState.person[0].job} date={personState.person[0].date}/>
       <Person name={personState.person[1].name} job ={personState.person[1].job} date={personState.person[1].date}/>
       <Person name={personState.person[2].name} job ={personState.person[2].job} date={personState.person[2].date}/>
    </div>
  )
}

export default App;

*/