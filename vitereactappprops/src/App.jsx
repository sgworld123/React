import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './component/Gallery'
import ICard from './component/ICard'
import  DisplayItems from './component/DisplayItems'
import StateHandling from './component/StateHandeling'
import ImageManipulation from './component/ImageManipulation'
function App() {
  const book = [{
    title: "JavaScript: The Good Parts",
    publisher: "Douglas Crockford",
    rating: "4.5"
  },
  {
    title: "JavaScript: The Good Parts",
    publisher: "Douglas Crockford",
    rating: "4.5"
  },
  {
    title: "JavaScript: The Good Parts",
    publisher: "Douglas Crockford",
    rating: "4.5"
  }
]
  return (
    <>
      <h2>ABES Engineering College</h2>
      <ICard name="Shreyansh Gupta" age = "20" branch = "CSE" college = "ABES Engineering College" location = "Ghaziabad" />
      <Gallery/>
      {book.map((item) => <DisplayItems data={item}/>)}
      <StateHandling/>
      <ImageManipulation/>
    </>
  )
}

export default App
