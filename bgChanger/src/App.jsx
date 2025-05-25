import './App.css'
import { useState } from 'react'
import Colors from './components/color'

function App() {
  const [color, setColor] = useState("black")

  const changeColor = (color) => {
    setColor(color);
  }
  return (
    <>
     <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <Colors changeColor={changeColor} />
     </div>
    </>
  )
}

export default App
