How se to use useState

```js
import React, {useState} from 'react';

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


```