import React from 'react'
import Display from './Display'
import Keypad from './Keypad'
import useCalculator from '../hooks/useCalculator'

const Calculator = () => {
  const { display, input } = useCalculator()

  return (
    <div className="calculator">
      <Display value={display} />
      <Keypad onButtonClick={input} /> {}
    </div>
  )
}

export default Calculator
