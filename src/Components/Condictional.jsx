import React, { useState } from 'react'

function Condictional() {
    const [isLogin , setIsLogin]= useState(false)
  return (
    <div className='flex h-screen items-center justify-center gap-5'>
        <p>{isLogin ? 'Welcome User' : 'Please Login'}</p>
        <button onClick={()=>setIsLogin(!isLogin)}
        className='bg-sky-500 py-2 px-8'>{isLogin ? 'Logout' : 'Login'}</button>
    </div>
  )
}

export default Condictional

//