import { ReactComponent as TreeSVG } from '../../assets/cartoon-tree.svg'
import Apple from '../Apple'
import styles from './Tree.module.scss'
import { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default function Tree({ appleCount = 0, applePositions = [] }) {
  const [isShaking, setIShaking] = useState(false)
  const [isDropping, setIsDropping] = useState(false)

  const handleTreeClick = () => {
    setIShaking(true)

    setTimeout(() => {
      setIShaking(false)
      setIsDropping(true)
    }, [3000])
  }

  return (
    <div className={styles.treeWrapper}>
      <TreeSVG
        onClick={handleTreeClick}
        width={600}
        height={600}
        className={classNames(styles.treeSvg, {
          [styles.isShaking]: isShaking,
        })}
      />

      {Array.from({ length: appleCount }).map((_, i) => (
        <Apple
          key={i}
          className={classNames(styles.appleSvg, {
            [styles.isShaking]: isShaking,
            [styles.isDropping]: isDropping,
          })}
          style={{
            ...applePositions[i],
          }}
        />
      ))}
    </div>
  )
}

Tree.propTypes = {
  appleCount: PropTypes.number,
  applePositions: PropTypes.array,
}
