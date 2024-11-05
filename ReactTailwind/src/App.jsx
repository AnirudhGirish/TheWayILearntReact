import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    text:"Welcome to the company the main resources we use are React and Tailwind",
    size:250,
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-3.5 rounded-xl m-4'>React Tailwind</h1>
      <Card name="Ani" post="MD & CTO"/>
      <br />
      <Card name="Abhi" post="Developer"/>
      <br />
      <Card name="Piyush" />
      <br />
      <Card />
      <br />
      <Card data={myObj.text} sizedata={myObj.size} />
    </>
  )
}

export default App
