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
