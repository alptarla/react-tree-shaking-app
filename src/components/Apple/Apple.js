import classNames from 'classnames'
import { ReactComponent as AppleSVG } from '../../assets/fresh-apple-icon.svg'
import styles from './Apple.module.scss'
import { useSelector } from 'react-redux'

export default function Apple({ ...rest }) {
  const { isTreeShaking, isApplesDropping } = useSelector((state) => state.tree)

  return (
    <AppleSVG
      data-testid='apple'
      className={classNames(styles.apple, {
        [styles.isShaking]: isTreeShaking,
        [styles.isDropping]: isApplesDropping,
      })}
      {...rest}
    />
  )
}
