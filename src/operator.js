import {useState} from 'react'

function Operator () {
    let [operate, setOperate] = useState('+')

    return (
      <div className="panel">
        <p>{operate}</p>
        <div className="numbers">
          <button onClick = {() => setOperate(operate='+')}>+</button>
          <button onClick = {() => setOperate(operate='-')}>-</button>
          <button onClick = {() => setOperate(operate='*')}>*</button>
          <button onClick = {() => setOperate(operate='÷')}>÷</button>
        </div>
      </div>
    )
}

export default Operator