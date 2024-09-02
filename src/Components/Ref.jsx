import React from 'react'
import { useRef } from 'react';

function Ref() {
    const InputRef = useRef(null);
    console.log(useRef)
    const handleSumbit = (e) =>{
        e.preventDefault();
        console.log(InputRef.current.value)
    }

  return (
    <div>
        <form onSubmit={handleSumbit}>
            <input ref = {InputRef} className='w-64 p-2 h-10 border border-blue-400' type = 'text' />
            <button className='px-6 py-2 bg-blue-500'>Sumbit</button>
        </form>
    </div>
  )
}

export default Ref