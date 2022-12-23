import { screen } from '@testing-library/react'
import { renderTestWrapper } from '../../utils'
import Apple from './Apple'
import * as Redux from 'react-redux'
import { treeInitialState } from '../../store/treeSlice'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}))

const mockTreeState = { ...treeInitialState }

describe('Apple.js', () => {
  beforeEach(() => {
    Redux.useSelector.mockImplementation((callback) => {
      return callback({ tree: { ...mockTreeState } })
    })
  })

  test('should start dropping anim', () => {
    mockTreeState.isApplesDropping = true
    renderTestWrapper(Apple)

    const apple = screen.getByTestId('apple')
    expect(apple.classList.contains('isDropping')).toBeTruthy()
  })

  test('should start shaking anim', () => {
    mockTreeState.isTreeShaking = true
    renderTestWrapper(Apple)

    const apple = screen.getByTestId('apple')
    expect(apple.classList.contains('isShaking')).toBeTruthy()
  })
})
