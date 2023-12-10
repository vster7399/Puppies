import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppy] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)

console.log("puppyList: ", puppyList);

function handleClick(event) {() => {
  console.log("puppy id: ", puppy.id)
}};
}

  return (
    <div className="App"> 
    {puppies.map((puppy) => {
      return (
        <p onClick={handleClick} key={puppy.id}>
          {puppy.name}
        </p>
      );
    })}
  </div>
);

export default App
//const target = event.target
