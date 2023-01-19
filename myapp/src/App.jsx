import React, { useState } from 'react';
import './App.css';
function App() {
  // let [num, setNum] = useState(0)
  let [users, setUsers] = useState([
    {
      name: 'Saad',
      lname: 'Ali',
      age: 23
    },
    {
      name: 'Hamza',
      lname: 'Hunain',
      age: 25
    },
    {
      name: 'Yasir',
      lname: 'Hussain',
      age: 26
    },
  ])

  let changeData = ()=>{
    let newData = {
      name : 'Areeba',
      lname : 'Fayaz',
      age: 23
    } 
    setUsers([...users,newData])
  }
  return (
    <div className="App">
      <header className="App-header">
        {users.map((data,val) => {
          return <div key={val}>
            <h1>{data.name}</h1>
            <h1>{data.lname}</h1>
            <h1>{data.age}</h1>
          </div>
        })}
        <button onClick={changeData}>Change Data</button>

        {/* <h1>{num}</h1> */}
        {/* <button onClick={() => {
          setNum(num += 1)
        }}>Increment</button>
        <button onClick={
          () => {
            setNum(num -= 1)
          }
        }>Decrement</button> */}
      </header>
    </div>
  );
}

export default App;
