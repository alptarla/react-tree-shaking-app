import { screen } from '@testing-library/react'
import { renderTestWrapper } from '../../utils'
import Basket from './Basket'
import * as Redux from 'react-redux'
import { treeInitialState } from '../../store/treeSlice'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}))

const mockTreeState = { ...treeInitialState }

describe('Basket.js', () => {
  beforeEach(() => {
    Redux.useSelector.mockImplementation((callback) => {
      return callback({ tree: { ...mockTreeState } })
    })
  })

  test('should basket has apples', () => {
    mockTreeState.isBasketHasApples = true
    const { store } = renderTestWrapper(Basket)

    const apples = screen.queryAllByTestId('apple')
    expect(apples.length).toBe(store.getState().tree.applesCount)
  })
})
