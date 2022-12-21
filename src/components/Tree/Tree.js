import { ReactComponent as TreeSVG } from '../../assets/cartoon-tree.svg'
import Apple from '../Apple'
import styles from './Tree.module.scss'
import { useMemo } from 'react'
import { getRandomInt } from '../../utils'
import PropTypes from 'prop-types'

function Apples({ count = 0 }) {
  const appleArr = Array.from({ length: count })

  const applePositions = useMemo(() => {
    return appleArr.map(() => ({
      marginTop: `${getRandomInt(5, 13)}rem`,
      marginLeft: `${getRandomInt(5, 25)}rem`,
    }))
  }, [appleArr])

  return appleArr.map((_, i) => (
    <Apple
      key={i}
      className={styles.appleSvg}
      style={{
        ...applePositions[i],
      }}
    />
  ))
}

export default function Tree({ applesCount = 0 }) {
  return (
    <div className={styles.treeWrapper}>
      <TreeSVG
        width={600}
        height={600}
        className={styles.treeSvg}
      />
      <Apples count={applesCount} />
    </div>
  )
}

Tree.propTypes = {
  applesCount: PropTypes.number,
}
