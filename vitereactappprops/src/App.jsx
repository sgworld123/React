import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './component/Gallery'
import ICard from './component/ICard'

function App() {
  return (
    <>
      <h2>ABES Engineering College</h2>
      <ICard name="Shreyansh Gupta" age = "20" branch = "CSE" college = "ABES Engineering College" location = "Ghaziabad" />
      <Gallery/>
    </>
  )
}

export default App
