import { render, screen, fireEvent } from '@testing-library/react'
import Keypad from './Keypad'

describe('Keypad', () => {
  it('renderiza todos los botones esperados', () => {
    const expectedKeys = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
      'C', '+/-', '%'
    ]

    render(<Keypad onButtonClick={() => {}} />)

    expectedKeys.forEach(key => {
      expect(screen.getByText(key)).toBeInTheDocument()
    })
  })

  it('ejecuta la función onButtonClick al hacer clic en un botón', () => {
    const mockClick = vi.fn()
    render(<Keypad onButtonClick={mockClick} />)

    const button = screen.getByText('7')
    fireEvent.click(button)

    expect(mockClick).toHaveBeenCalledWith('7')
  })
})