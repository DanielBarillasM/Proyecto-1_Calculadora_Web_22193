import { useState } from 'react'
import useCalculator from './useCalculator'

export default {
  title: 'Hooks/useCalculator',
  component: DemoCalculator,
  tags: ['autodocs']
}

function DemoCalculator() {
  const { display, input } = useCalculator()
  const [buttons] = useState(['1', '2', '3', '+', '=', 'C'])

  return (
    <div style={{ fontFamily: 'monospace' }}>
      <div style={{
        border: '1px solid #ccc',
        padding: '1rem',
        fontSize: '2rem',
        marginBottom: '1rem',
        width: '200px',
        textAlign: 'right'
      }}>{display}</div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', width: '200px' }}>
        {buttons.map((btn, idx) => (
          <button key={idx} style={{ width: '60px', height: '40px' }} onClick={() => input(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  )
}

export const Demo = () => <DemoCalculator />