import operate from './operate'

const handleEquals = ({
  display, prev, op,
  setDisplay, setPrev, setOp, setReset
}) => () => {
  if (op === null || prev === null || display === '' || display === 'ERROR') return

  const current = parseFloat(display)
  const result = operate(prev, current, op)

  if (result === 'ERROR') {
    setDisplay('ERROR')
  } else {
    setDisplay(result.toString().slice(0, 9))
  }

  setPrev(null)
  setOp(null)
  setReset(true)
}

export default handleEquals