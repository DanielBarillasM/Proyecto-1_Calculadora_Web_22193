import Button from './Button'

export default {
  title: 'Componentes/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' }
  }
}

const Template = (args) => <Button {...args} />

export const Numero = Template.bind({})
Numero.args = {
  label: '7'
}

export const Operador = Template.bind({})
Operador.args = {
  label: '+'
}

export const Igual = Template.bind({})
Igual.args = {
  label: '='
}