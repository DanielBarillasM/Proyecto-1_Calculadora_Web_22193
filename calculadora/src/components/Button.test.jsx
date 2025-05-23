import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('ejecuta onClick con el label al hacer clic', () => {
    const mockOnClick = vi.fn()
    render(<Button label="5" onClick={mockOnClick} />)

    const button = screen.getByText('5')
    fireEvent.click(button)

    expect(mockOnClick).toHaveBeenCalledWith('5')
  })
})