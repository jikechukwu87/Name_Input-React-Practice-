import { useState } from 'react'

import './App.css'

function App() {
 const [name,setName]=useState("");



 

  return (
    <>
    <label htmlFor="name">What your name?</label>
    <input 
     type="text"
     value={name}
     id='name'
     onChange={(e)=>setName(e.target.value)} />

     <h1>My name is {name}</h1>
     
    </>
  )
}

export default App
