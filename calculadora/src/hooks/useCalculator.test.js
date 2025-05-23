import { act, renderHook, waitFor } from '@testing-library/react'
import useCalculator from './useCalculator'

describe('useCalculator', () => {
  it('realiza una suma simple correctamente', async () => {
    const { result } = renderHook(() => useCalculator())

    act(() => result.current.input('2'))
    act(() => result.current.input('+'))
    act(() => result.current.input('3'))
    act(() => result.current.input('='))

    await waitFor(() => {
      expect(result.current.display).toBe('5')
    })
  })

  it('muestra ERROR si el resultado es negativo', async () => {
    const { result } = renderHook(() => useCalculator())

    act(() => result.current.input('2'))
    act(() => result.current.input('-'))
    act(() => result.current.input('5'))
    act(() => result.current.input('='))

    await waitFor(() => {
      expect(result.current.display).toBe('ERROR')
    })
  })

  it('muestra ERROR si el número excede 999999999', async () => {
    const { result } = renderHook(() => useCalculator())

    for (const d of '999999999') {
      act(() => result.current.input(d))
    }

    act(() => result.current.input('+'))
    act(() => result.current.input('1'))
    act(() => result.current.input('='))

    await waitFor(() => {
      expect(result.current.display).toBe('ERROR')
    })
  })
})