import React, { useState } from "react";
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
/*
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
   };



   switchHandler = () => {
      console.log('I was clicked!!')

      this.setState({   
         person: [{
               name: 'Jenny',
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


   render() {
      return (
         <div className = 'App' >
         <h1 > Learning React now!👩‍💻 </h1> 
         <button onClick = {this.switchHandler} > Switch Name </button> 
         <Person name = {this.state.person[0].name} job = {this.state.person[0].job} date = {this.state.person[0].date}/> 
         <Person name = {this.state.person[1].name} job = {this.state.person[1].job} date = {this.state.person[1].date }/> 
         <Person name = {this.state.person[2].name} job = {this.state.person[2].job} date = {this.state.person[2].date}/>
         <Person name = {this.state.person [3].name}job = {this.state.person[3].job} date = {this.state.person[3].date}/> 
         </div >
      );
   }
}
*/

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

/*
<div className="App">
      <h1> Learning React now!👩‍💻 </h1>
      <button onClick = {switchHandler} > Switch Name </button> 
      <Person
        name={personState.person[0].name}
        job={personState.person[0].job}
        date={personState.person[0].date}
      />
      <Person
        name={personState.person[1].name}
        job={personState.person[1].job}
        date={personState.person[1].date}
      />
      <Person
        name={personState.person[2].name}
        job={personState.person[2].job}
        date={personState.person[2].date}
      />
      <Person
        name={personState.person[3].name}
        job={personState.person[3].job}
        date={personState.person[3].date}
      />
    </div>

*/