import "./App.css"
import {useState} from 'react'

// import Calculate from './calculator.js'
// import Calculate2nd from './calculator2.js'


function App() { 

  let [leftNumber, setLeftNumber] = useState('0')
  let [operator, setOperator] = useState('+')
  let [rightNumber, setRightNumber] = useState('0')
  let [result, setResult] = useState('0')
  let [stored, setStored] = useState('')
  let [recall, setRecall] = useState('')


  function addDigitToLeftNumber(digit) {
    if (leftNumber === '0') {
      setLeftNumber(digit)
    } else {
      setLeftNumber(leftNumber+digit);
    }
  }
  
  function addDigitToRightNumber(digit) {
    if (rightNumber === '0') {
      setRightNumber(digit);
    } else {
      setRightNumber(rightNumber+digit);
    }
  }

  function calculateResult () {

    const l = parseFloat(leftNumber)
    const r = parseFloat(rightNumber)

    if (operator === '+') {
      setResult(l+r)
    } else if (operator === '-') {
      setResult(l-r)
    } else if (operator === '*') {
      setResult(l*r)
    } else if (operator === '÷') {
      setResult(l/r)
    }
  }

  return (
    <div className="calculator">
      {/* <Calculate/> */}
        <div className="panel">
          <p>{leftNumber}</p>
          <div className="numbers">
            <button onClick = {() => addDigitToLeftNumber('1')}>1</button>
            <button onClick = {() => addDigitToLeftNumber('2')}>2</button>
            <button onClick = {() => addDigitToLeftNumber('3')}>3</button>
            <button onClick = {() => addDigitToLeftNumber('4')}>4</button>
            <button onClick = {() => addDigitToLeftNumber('5')}>5</button>
            <button onClick = {() => addDigitToLeftNumber('6')}>6</button>
            <button onClick = {() => addDigitToLeftNumber('7')}>7</button>
            <button onClick = {() => addDigitToLeftNumber('8')}>8</button>
            <button onClick = {() => addDigitToLeftNumber('9')}>9</button>
            <button onClick = {() => addDigitToLeftNumber('0')}>0</button>
            <button onClick = {() => setLeftNumber('0')}>Clear</button>
          </div>
          <div className="Recall">
          <p>{recall}</p>
          <button onClick = {() => setLeftNumber(stored)}>Recall</button>
        </div>
        </div>
        
        <div className="panel">
          <p>{operator}</p>
          <div className="numbers">
            <button onClick = {() => setOperator('+')}>+</button>
            <button onClick = {() => setOperator('-')}>-</button>
            <button onClick = {() => setOperator('*')}>*</button>
            <button onClick = {() => setOperator('÷')}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{rightNumber}</p>
          <div className="numbers">
          <button onClick = {() => addDigitToRightNumber('1')}>1</button>
            <button onClick = {() => addDigitToRightNumber('2')}>2</button>
            <button onClick = {() => addDigitToRightNumber('3')}>3</button>
            <button onClick = {() => addDigitToRightNumber('4')}>4</button>
            <button onClick = {() => addDigitToRightNumber('5')}>5</button>
            <button onClick = {() => addDigitToRightNumber('6')}>6</button>
            <button onClick = {() => addDigitToRightNumber('7')}>7</button>
            <button onClick = {() => addDigitToRightNumber('8')}>8</button>
            <button onClick = {() => addDigitToRightNumber('9')}>9</button>
            <button onClick = {() => addDigitToRightNumber('0')}>0</button>
            <button onClick = {() => setRightNumber('0')}>Clear</button>
          </div>
          <div className="Recall">
          <p>{recall}</p>
          <button onClick = {() => setRightNumber(stored)}>Recall</button>
        </div>
        </div>
        <div className="panel answer">
          <p>{result}</p>
          <div>
            <button onClick = {() => calculateResult()}>=</button>
          </div>
        <div className="Store">
          <p>{stored}</p>
          <button onClick = {() => setStored(result)}>Store</button>
        </div>
        {/* <div className="Recall">
          <p>{recall}</p>
          <button onClick = {() => setRecall(stored)}>Recall</button>
        </div> */}
        </div>
    </div>
  )
}

export default App
