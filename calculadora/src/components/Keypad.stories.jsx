import Keypad from './Keypad'

export default {
  title: 'Componentes/Keypad',
  component: Keypad,
  tags: ['autodocs'],
  argTypes: {
    onButtonClick: { action: 'button clicked' }
  }
}

const Template = (args) => <Keypad {...args} />

export const Default = Template.bind({})
Default.args = {}