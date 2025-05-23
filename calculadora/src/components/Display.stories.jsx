import Display from './Display'

export default {
  title: 'Componentes/Display',
  component: Display,
}

export const ValorSimple = () => <Display value="123" />
export const Error = () => <Display value="ERROR" />