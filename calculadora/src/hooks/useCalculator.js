import { useState } from 'react'
import handleOperatorFactory from '../calculator/handleOperator'
import handleEqualsFactory from '../calculator/handleEquals'
import toggleSign from '../calculator/toggleSign'

const useCalculator = () => {
  const [display, setDisplay] = useState('')
  const [prev, setPrev] = useState(null)
  const [op, setOp] = useState(null)
  const [reset, setReset] = useState(false)

  const handleOperator = handleOperatorFactory({ display, prev, op, reset, setDisplay, setPrev, setOp, setReset })
  const handleEquals = handleEqualsFactory({ display, prev, op, setDisplay, setPrev, setOp, setReset })

  const input = val => {
    if (val === 'C') return clear()
    if (val === '+/-') return toggleSign(display, setDisplay)
    if (val === '.' && display.includes('.')) return
    if ('+-*/%'.includes(val)) return handleOperator(val)
    if (val === '=') return handleEquals()

    if (reset || display === 'ERROR') {
      setDisplay(val)
      setReset(false)
    } else if (display.length < 9) {
      setDisplay(display + val)
    }
  }

  const clear = () => {
    setDisplay('')
    setPrev(null)
    setOp(null)
    setReset(false)
  }

  return { display, input }
}

export default useCalculator