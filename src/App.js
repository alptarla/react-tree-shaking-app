import { useDispatch } from 'react-redux'
import Tree from './components/Tree'
import { getRandomInt } from './utils'
import { setIsApplesDropping, setIsTreeShaking } from './store/treeSlice'
import { useEffect, useRef, useState } from 'react'

const APPLE_COUNT = 10
const APPLE_POSITIONS = Array.from({ length: APPLE_COUNT }).map(() => ({
  top: `${getRandomInt(5, 13)}rem`,
  left: `${getRandomInt(8, 25)}rem`,
}))

export default function App() {
  const [isBasketHasApples, setIsBasketHasApples] = useState(false)

  const dispatch = useDispatch()

  const timerRef = useRef(null)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  const handleTreeClick = () => {
    dispatch(setIsTreeShaking(true))

    timerRef.current = setTimeout(() => {
      dispatch(setIsTreeShaking(false))
      dispatch(setIsApplesDropping(true))
    }, [3000])
  }

  const handleApplesDropped = () => {
    timerRef.current = setTimeout(() => {
      setIsBasketHasApples(true)
      dispatch(setIsApplesDropping(false))
    }, [1000])
  }

  return (
    <div>
      <Tree
        appleCount={APPLE_COUNT}
        applePositions={APPLE_POSITIONS}
        onTreeClick={handleTreeClick}
        onApplesDropped={handleApplesDropped}
        isShowApples={!isBasketHasApples}
      />
    </div>
  )
}
