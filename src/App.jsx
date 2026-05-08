import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './pages/Login'
import Register from "./pages/Register";
import ReactDOM from 'react-dom/client'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register></Register>
    </>
  )
}

export default App
