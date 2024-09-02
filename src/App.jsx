import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/HomePage'
import Services from './Pages/Services'
import NavBar1 from './Components/NavBar1'
import Error from './Components/Error'
import Ref from './Components/Ref'

function App() {
  return (
    <div>
      <NavBar1/>
      <Ref/>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>


    </div>
  )
}

export default App