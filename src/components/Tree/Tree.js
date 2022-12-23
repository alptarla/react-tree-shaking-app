import { ReactComponent as TreeSVG } from '../../assets/cartoon-tree.svg'
import Apple from '../Apple'
import styles from './Tree.module.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

export default function Tree({
  appleCount = 0,
  applePositions = [],
  onTreeClick,
  isShowApples = true,
  onApplesDropped,
}) {
  const { isTreeShaking } = useSelector((state) => state.tree)

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
        ? Array.from({ length: appleCount }).map((_, i) => (
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
  appleCount: PropTypes.number,
  applePositions: PropTypes.array,
  onTreeClick: PropTypes.func.isRequired,
  isShowApples: PropTypes.bool,
  onApplesDropped: PropTypes.func,
}
