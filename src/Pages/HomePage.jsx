import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/Services')
    };

  return (
    <div>
        <p>HomePage</p>
        <button onClick={handleClick} className='m-4 bg-blue-500 px-8 rounded-md text-white py-4'>Back</button>
    </div>
  )
}

export default HomePage