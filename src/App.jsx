import { useState } from 'react'
import './App.css'


const App = () => {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>chai aur react !</h1>
      <h2>Counter value : {counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <br /><br />
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
