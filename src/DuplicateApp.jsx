// Day 1 App.jsx 

import Button from "./Button";
import Footer from "./Footer";
import NavBar from "./NavBar"; // Use NavBar instead of Navbar
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

import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("abc");

  const handleClick = () => {
    console.log("button click");
    setFirstName("xyz");
    console.log(firstName)
  };

  return (
    <div>
      <p>{firstName}</p>
      <button
        onClick={handleClick}
        className="bg-blue-500 py-2 px-6 rounded-md m-2 text-white"
      >
        click
      </button>
    </div>
  );
}

export default App;


// Day 2 form ( App.jsx )

