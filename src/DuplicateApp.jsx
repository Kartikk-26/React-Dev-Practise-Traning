// Day 1 App.jsx 

import Button from "./Button";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar"; // Use NavBar instead of Navbar
import './App.css'; // You might still need this for any custom styles

function App() {
  const styles = { color: 'red', backgroundColor: 'blue' };
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar /> {/* Add the NavBar component here */}
      <div className="flex-grow">
        {/* Main content */}
        <Button text="click" />
        <Button text="Submit" />
        <Button text="apply" />
        <Button text="contact" />
        <h1 style={styles}>React</h1>
        <input maxLength={5} />
      </div>
      <Footer />
    </div>
  );
}

export default App;


// Day 2 App.jsx

import { useState, useEffect } from 'react';
import Form from './Components/Form';

function App() {
  const [firstName, setFirstName] = useState('abc');

  const handleClick = () => {
    setFirstName('xyz');
  };

  useEffect(() => {
    console.log(firstName); // Logs the updated state
  }, [firstName]);

  return (
    <div>
      <p>{firstName}</p>
      <button
        onClick={handleClick}
        className="bg-blue-500 py-2 px-6 rounded-md m-2 text-white"
      >
        Click
      </button>
      {/* Ensure List component is properly imported or defined */}
      {/* <List /> */}
      <Form />
    </div>
  );
}

export default App;


// Day 3 ( App.jsx for Render.jsx & Condictional.jsx)

import React from 'react'
import Render from './Components/Render'
import Condictional from './Components/Condictional'

function App () {
  return (
    <div>
      <Render/>
      <Condictional/>
    </div>
  )
}

export default App





