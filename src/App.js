import "./App.css"
import Calculate from './calculator.js'
import Operator from './operator.js'


function App() { 

  return (
    <div className="calculator">
      <Calculate/>
        {/* <div className="panel">
          <p>0</p>
          <div className="numbers">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
            <button>Clear</button>
          </div>
        </div> */}

        <Operator/>
        
        {/* <div className="panel">
          <p>+</p>
          <div className="numbers">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>÷</button>
          </div>
        </div> */}

        <Calculate/>
        {/* <div className="panel">
          <p>0</p>
          <div className="numbers">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
            <button>Clear</button>
          </div>
        </div> */}
        <div className="panel answer">
          <p>0</p>
          <div>
            <button>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
