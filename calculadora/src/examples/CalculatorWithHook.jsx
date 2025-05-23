import useCalculator from '/src/hooks/useCalculator.js'

const CalculatorWithHook = () => {
  const { display, input } = useCalculator()

  return (
    <div style={{ maxWidth: 200 }}>
      <div style={{
        background: '#222', color: '#0f0',
        padding: '1rem', fontSize: '2rem', textAlign: 'right'
      }}>
        {display}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
        {'789+456-123*0.=C'.split('').map(key => (
          <button key={key} onClick={() => input(key)}>{key}</button>
        ))}
      </div>
    </div>
  )
}

export default CalculatorWithHook