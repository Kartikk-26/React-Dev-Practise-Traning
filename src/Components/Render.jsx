import React from 'react';
import { useEffect, useState } from 'react';

function Render() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('');
  const [countryData, setCountryData] = useState([]);
  const [countryName, setCountryName] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCountryData(data);
      });

    console.log('this will run only one time intially when component mount');
  }, []);

  useEffect(() => {
    console.log('this will run every time');
  });

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, [countryName]);

  console.log(countryName);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <h1>render component</h1>

      <select
        onChange={(e) => {
          setCountryName(e.target.value);
        }}
      >
        <option>Select Country</option>
        {countryData.map((data) => (
          <option value={data.name.common}>{data.name.common}</option>
        ))}
      </select>
    </div>
  );
}

export default Render;