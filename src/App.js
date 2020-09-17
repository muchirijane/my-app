import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
      person: [
         { name: 'Jane', job: 'devloper 👩‍💻 ', date: Date() },
         { name: 'Tracy', job: 'blogger 💻  ', date: Date() },
         { name: 'Jack', job: 'muscian 🎻 ', date: Date() },
         { name: 'Tom', job: 'actor 🎥 ', date: Date() },
      ],
   };
   switchNameHandler = ()=>{
      console.log('I was clicked!!')
   }


   render() {
      return (
         <div className='App'>
            <h1> Learning React now!👩‍💻 </h1>
            <button onClick ={}>Switch Name</button>
            <Person
               name={this.state.person[0].name}
               job={this.state.person[0].job}
               date={this.state.person[0].date}
            />
            <Person
               name={this.state.person[1].name}
               job={this.state.person[1].job}
               date={this.state.person[1].date}
            />
            <Person
               name={this.state.person[2].name}
               job={this.state.person[2].job}
               date={this.state.person[2].date}
            />
            <Person
               name={this.state.person[3].name}
               job={this.state.person[3].job}
               date={this.state.person[3].date}
            />
         </div>
      );
   }
}

export default App;
