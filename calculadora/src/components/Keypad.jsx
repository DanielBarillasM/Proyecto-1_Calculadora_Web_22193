import Button from './Button'

const Keypad = ({ onButtonClick }) => {
  const keys = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C', '+/-', '%'
  ]
  return (
    <div className="keypad">
      {keys.map(key => (
        <Button key={key} label={key} onClick={() => onButtonClick(key)} />
      ))}
    </div>
  )
}

export default Keypad