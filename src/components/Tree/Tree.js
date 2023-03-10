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
  className,
}) {
  const { isTreeShaking, applesCount } = useSelector((state) => state.tree)

  const applePositions = useMemo(() => {
    return getApplePositions(applesCount)
  }, [applesCount])

  const handleAppleAnimationEnd = ({ animationName }) => {
    if (animationName.includes('dropApple')) return onApplesDropped()
  }

  return (
    <div className={classNames(styles.treeWrapper, className)}>
      <TreeSVG
        data-testid='tree'
        onClick={onTreeClick}
        className={classNames(styles.treeSvg, {
          [styles.isShaking]: isTreeShaking,
        })}
      />

      {isShowApples
        ? Array.from({ length: applesCount }).map((_, i) => (
            <Apple
              key={i}
              style={{ ...applePositions[i] }}
              onAnimationEnd={handleAppleAnimationEnd}
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
  className: PropTypes.string,
}
