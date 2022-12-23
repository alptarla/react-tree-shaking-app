import { configureStore } from '@reduxjs/toolkit'
import treeSlice from './treeSlice'

export default configureStore({
  reducer: {
    tree: treeSlice,
  },
})
