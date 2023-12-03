import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EntireBody from './components/EntireBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="page">
      <EntireBody/>
      </div>
        
    </>
  )
}

export default App
