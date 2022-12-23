import { ReactComponent as TreeSVG } from '../../assets/cartoon-tree.svg'
import Apple from '../Apple'
import styles from './Tree.module.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { getRandomInt } from '../../utils'
import { useMemo } from 'react'

function getApplePositions(applesCount) {
  return Array.from({ length: applesCount }).map(() => ({
    top: `${getRandomInt(5, 13)}rem`,
    left: `${getRandomInt(8, 25)}rem`,
  }))
}

export default function Tree({
  onTreeClick,
  isShowApples = true,
  onApplesDropped,
}) {
  const { isTreeShaking, applesCount } = useSelector((state) => state.tree)

  const applePositions = useMemo(() => {
    return getApplePositions(applesCount)
  }, [applesCount])

  return (
    <div className={styles.treeWrapper}>
      <TreeSVG
        onClick={onTreeClick}
        width={600}
        height={600}
        className={classNames(styles.treeSvg, {
          [styles.isShaking]: isTreeShaking,
        })}
      />

      {isShowApples
        ? Array.from({ length: applesCount }).map((_, i) => (
            <Apple
              key={i}
              style={{ ...applePositions[i] }}
              onAnimationEnd={onApplesDropped}
            />
          ))
        : null}
    </div>
  )
}

Tree.propTypes = {
  onTreeClick: PropTypes.func.isRequired,
  isShowApples: PropTypes.bool,
  onApplesDropped: PropTypes.func,
}
