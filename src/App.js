import { useState, useEffect } from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Home, About, Events, Contact, Woops404,
  Services, CompanyHistory, Location

} from './pages';


function App() {

  function toggle() {
    setCheck(check => !check)
  }

  function testMe() {
    setEmotion("Sad")
  }
  // learning about state... 
  // first item is the variable and second is a function - use state is the initial state
  const [emotion, setEmotion] = useState('happy')
  const [check, setCheck] = useState(false)


  // use effects are used to manager site effects loading data, animation etc
  useEffect(() => {
    console.log(`Emotion is: ${emotion}`);
  }, [])

  return (
    <>
      <h1>My current emotion is {emotion} </h1>
      <button onClick={() => setEmotion("Learning React")} > Learning </button>
      <button onClick={testMe} > Sad </button>
      <hr/>
      <input 
        type="checkbox" 
        value={check} 
        onChange={toggle} 
      />
      <p>{ check ? "checked" : "not checked"} </p>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/about" element={<About/>}>
          <Route path="services" element={<Services/>}/>
          <Route path="history" element={<CompanyHistory/>}/>
          <Route path="location" element={<Location/>}/>
        </Route>

        <Route path="/events" element={<Events/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Woops404/>}/>
      </Routes>
    </>
  )
  
  
}

export default App;
