import classNames from 'classnames'
import { ReactComponent as BasketSVG } from '../../assets/garden-basket.svg'
import styles from './Basket.module.scss'
import Apple from '../Apple'
import { useSelector } from 'react-redux'
import { getRandomInt } from '../../utils'
import { useMemo } from 'react'

function getApplePositions(applesCount) {
  return Array.from({ length: applesCount }).map(() => ({
    top: `${getRandomInt(1, 4)}rem`,
    left: `${getRandomInt(0, 9)}rem`,
  }))
}

export default function Basket({ ...rest }) {
  const { isBasketHasApples, applesCount } = useSelector((state) => state.tree)

  const applePositions = useMemo(() => {
    return getApplePositions(applesCount)
  }, [applesCount])

  return (
    <div className={classNames(styles.basket, rest?.className)}>
      <BasketSVG className={styles.basketSVG} />

      {isBasketHasApples
        ? Array.from({ length: applesCount }).map((_, i) => (
            <Apple
              key={i}
              style={{ ...applePositions[i] }}
            />
          ))
        : null}
    </div>
  )
}
