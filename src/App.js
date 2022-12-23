import { useDispatch, useSelector } from 'react-redux'
import Tree from './components/Tree'
import {
  reset,
  setIsApplesDropping,
  setIsBasketHasApples,
  setIsTreeShaking,
} from './store/treeSlice'
import { useEffect, useRef } from 'react'
import Basket from './components/Basket/Basket'
import styles from './styles/App.module.scss'
import RestartButton from './components/RestartButton'
import classNames from 'classnames'

export default function App() {
  const { isBasketHasApples, isTreeShaking, isApplesDropping } = useSelector(
    (state) => state.tree
  )

  const isProgress = isBasketHasApples || isApplesDropping || isTreeShaking

  const dispatch = useDispatch()

  const timerRef = useRef(null)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  const handleTreeClick = () => {
    if (isProgress) return

    dispatch(setIsTreeShaking(true))

    timerRef.current = setTimeout(() => {
      dispatch(setIsTreeShaking(false))
      dispatch(setIsApplesDropping(true))
    }, [3000])
  }

  const handleApplesDropped = () => {
    timerRef.current = setTimeout(() => {
      dispatch(setIsBasketHasApples(true))
      dispatch(setIsApplesDropping(false))
    }, [1000])
  }

  const handleRestart = () => {
    dispatch(reset())
  }

  return (
    <div className={styles.app}>
      <Tree
        isShowApples={!isBasketHasApples}
        onTreeClick={handleTreeClick}
        onApplesDropped={handleApplesDropped}
        className={classNames({
          [styles.disableTree]: isProgress,
        })}
      />
      <div className={styles.side}>
        <RestartButton
          className={styles.restartButton}
          onClick={handleRestart}
          disabled={!isBasketHasApples}
        />
        <Basket className={styles.basket} />
      </div>
    </div>
  )
}
