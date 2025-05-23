import Calculator from './Calculator'
import { useState } from 'react'

export default {
  title: 'Componentes/Calculator',
  component: Calculator,
}

export const Default = () => <Calculator />

export const PreloadedWithNumber = () => {
  const [_, forceRender] = useState(0)
  return (
    <>
      <Calculator />
      <button onClick={() => forceRender(n => n + 1)}>Refrescar</button>
    </>
  )
}