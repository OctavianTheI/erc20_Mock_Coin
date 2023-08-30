import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>LearnWeb3 First dApp</h1>
					<p>Here we can set or get the mood:</p>
					<input type="text" id="mood" />
					<label htmlFor="mood">Input Mood:</label> <br />

					<button>Get Mood</button>
					<button>Set Mood</button>
					{/* <button onclick="getMood()">Get Mood</button>
					<button onclick="setMood()">Set Mood</button> */}
					<p id="showMood"></p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
