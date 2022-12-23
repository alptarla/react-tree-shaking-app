import { createSlice } from '@reduxjs/toolkit'

export const treeInitialState = {
  applesCount: 10,
  isBasketHasApples: false,
  isTreeShaking: false,
  isApplesDropping: false,
}

export const treeSlice = createSlice({
  name: 'tree',
  initialState: treeInitialState,
  reducers: {
    setIsTreeShaking: (state, action) => {
      state.isTreeShaking = action.payload
    },
    setIsApplesDropping: (state, action) => {
      state.isApplesDropping = action.payload
    },
    setIsBasketHasApples: (state, action) => {
      state.isBasketHasApples = action.payload
    },
    reset: (state) => {
      state.isTreeShaking = false
      state.isApplesDropping = false
      state.isBasketHasApples = false
    },
  },
})

export const {
  setIsTreeShaking,
  setIsApplesDropping,
  setIsBasketHasApples,
  reset,
} = treeSlice.actions

export default treeSlice.reducer
