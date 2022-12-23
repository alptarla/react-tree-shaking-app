import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RestartButton from './RestartButton'

describe('RestartButton.js', () => {
  test('should call onClick func', () => {
    const handleClick = jest.fn()
    render(<RestartButton onClick={handleClick} />)

    const button = screen.getByRole('button', { name: /restart/i })
    userEvent.click(button)

    expect(handleClick).toBeCalled()
  })
})
