import {useState} from 'react'

function Calculate () {
    let [count, setCount] = useState(0)

    return (
        <div className="panel">
        <p>{count}</p>
        <div className="numbers">
          <button onClick = {() => setCount(count=1)}>1</button>
          <button onClick = {() => setCount(count=2)}>2</button>
          <button onClick = {() => setCount(count=3)}>3</button>
          <button onClick = {() => setCount(count=4)}>4</button>
          <button onClick = {() => setCount(count=5)}>5</button>
          <button onClick = {() => setCount(count=6)}>6</button>
          <button onClick = {() => setCount(count=7)}>7</button>
          <button onClick = {() => setCount(count=8)}>8</button>
          <button onClick = {() => setCount(count=9)}>9</button>
          <button onClick = {() => setCount(count=0)}>0</button>
          <button onClick = {() => setCount(count=0)}>Clear</button>
        </div>
      </div>
    )
}

export default Calculate