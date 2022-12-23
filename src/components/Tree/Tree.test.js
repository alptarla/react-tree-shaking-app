import { screen } from '@testing-library/react'
import { renderTestWrapper } from '../../utils'
import Tree from './Tree'
import * as Redux from 'react-redux'
import { treeInitialState } from '../../store/treeSlice'

const treeProps = {
  onTreeClick: jest.fn(),
  isShowApples: true,
  onApplesDropped: jest.fn(),
  className: '',
}

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}))

const mockTreeState = { ...treeInitialState }

describe('Tree.js', () => {
  beforeEach(() => {
    Redux.useSelector.mockImplementation((callback) => {
      return callback({ tree: { ...mockTreeState } })
    })
  })

  test('should render apples on the tree', async () => {
    const { store } = renderTestWrapper(Tree, treeProps)

    const apples = screen.getAllByTestId('apple')
    expect(apples.length).toBe(store.getState().tree.applesCount)
  })

  test('Should start shaking effect', () => {
    mockTreeState.isTreeShaking = true

    renderTestWrapper(Tree, treeProps)

    const tree = screen.getByTestId('tree')
    expect(tree.classList.contains('isShaking')).toBeTruthy()
  })

  test('should hide apples on the tree', () => {
    renderTestWrapper(Tree, { ...treeProps, isShowApples: false })

    const apples = screen.queryAllByTestId('apple')
    expect(apples.length).toBe(0)
  })
})
