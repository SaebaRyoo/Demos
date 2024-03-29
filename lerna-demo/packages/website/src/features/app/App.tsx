import React, { useState } from 'react'
import {Header} from 'header';
import { Footer } from 'footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Header />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Footer/>
    </div>
  )
}

export default App
