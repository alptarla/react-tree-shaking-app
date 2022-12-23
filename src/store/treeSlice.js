import { createSlice } from '@reduxjs/toolkit'

export const treeSlice = createSlice({
  name: 'tree',
  initialState: {
    isTreeShaking: false,
    isApplesDropping: false,
  },
  reducers: {
    setIsTreeShaking: (state, action) => {
      state.isTreeShaking = action.payload
    },
    setIsApplesDropping: (state, action) => {
      state.isApplesDropping = action.payload
    },
    reset: (state) => {
      state.isTreeShaking = false
      state.isApplesDropping = false
    },
  },
})

export const { setIsTreeShaking, setIsApplesDropping, reset } =
  treeSlice.actions

export default treeSlice.reducer
