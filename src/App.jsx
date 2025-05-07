import { useState } from 'react'
import './App.css'
import QuizBattle from './components/QuizBattle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <QuizBattle />
    </div>
    </>
  )
}

export default App
