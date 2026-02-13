import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx/Navbar';
import Jobs from './components/Jobs/Jobs';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Jobs/>
    </div>
  )
}

export default App