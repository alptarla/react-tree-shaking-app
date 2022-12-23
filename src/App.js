import { useDispatch, useSelector } from 'react-redux'
import Tree from './components/Tree'
import {
  setIsApplesDropping,
  setIsBasketHasApples,
  setIsTreeShaking,
} from './store/treeSlice'
import { useEffect, useRef } from 'react'
import Basket from './components/Basket/Basket'
import styles from './styles/App.module.scss'
import RestartButton from './components/RestartButton'

export default function App() {
  const { isBasketHasApples } = useSelector((state) => state.tree)

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
      dispatch(setIsBasketHasApples(true))
      dispatch(setIsApplesDropping(false))
    }, [1000])
  }

  return (
    <div className={styles.app}>
      <Tree
        isShowApples={!isBasketHasApples}
        onTreeClick={handleTreeClick}
        onApplesDropped={handleApplesDropped}
      />
      <div className={styles.side}>
        <div>Restart Button</div>
        <Basket className={styles.basket} />
      </div>
    </div>
  )
}
