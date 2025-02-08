import { useState } from 'react'
import './App.css'
import Header from './modules/header.jsx'
import Menu from './modules/menu.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <div class="row align-items-start">
          <Header />
        </div>
        <div class="row align-items-start">
          <Menu />
        </div>
      </div>
    </>
  )
}

export default App
