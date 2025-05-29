import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import PracTalwind from './components/practice'
function App() {
  const [count, setCount] = useState(0)

  const myObj = {
    name: 'ram',
    age: 13
  }
  return (
    <>
      {/* <h1 className='bg-green-600 text-black p-3 rounded-xl mb-1 '>Talwind Test</h1>
      <Card Name="Bishwas" price="12"/>
      <Card Name="Ram" /> */}
      <PracTalwind/>
    </>
  )
}

export default App
