import React, { useState } from 'react';

function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., validation or sending data to a server.
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex gap-10 justify-center">
      <form
        className="flex w-96 flex-col p-8 shadow-lg bg-slate-100 rounded-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl font-bold text-blue-500">Login</h1>
        <label className="text-lg font-semibold">Username</label>
        <input
          className="w-full h-10 border border-slate-700 p-2 rounded-md"
          onChange={handleUsernameChange}
          type="text"
          value={username}
        />
        <label className="text-lg font-semibold">Password</label>
        <input
          className="w-full h-10 border border-slate-700 p-2 rounded-md"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
        />
        <button
          className="bg-blue-500 mt-4 px-8 py-2 rounded-md text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div>
        <p>Username: {username}</p>
        <p>Password: {password}</p>
      </div>
    </div>
  );
}

export default Form;
