import operate from './operate'

const handleOperator = ({
  display, prev, op, reset,
  setDisplay, setPrev, setOp, setReset
}) => (operation) => {
  if (display === '' || display === 'ERROR') return

  const current = parseFloat(display)

  if (prev !== null && op !== null && !reset) {
    const result = operate(prev, current, op)
    if (result === 'ERROR') {
      setDisplay('ERROR')
      setPrev(null)
      setOp(null)
      return
    }
    setPrev(result)
    setDisplay(result.toString().slice(0, 9))
  } else {
    setPrev(current)
  }

  setOp(operation)
  setReset(true)
}

export default handleOperator