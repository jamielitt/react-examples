import { useState } from 'react'
import './App.css'
import Header from './modules/header.jsx'
import Menu from './modules/menu.jsx'

function App() {
  const [count, setCount] = useState(0)

  // Here we need to decide what conditional panel is displayed in the "Content" section on the page
  // switch on state
  // case 0:
  //   <FirstPanel />
  // case 1:
  //   <SecondPanel />
  return (
    <>
      <Header />
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <Menu />
          </div>
          <div class="col">
            Content
          </div>
        </div>
      </div>
    </>
  )
}

export default App
