import classNames from 'classnames'
import styles from './RestartButton.module.scss'

export default function RestartButton({ ...rest }) {
  return (
    <button
      {...rest}
      className={classNames(styles.button, rest.className)}
    >
      Restart
    </button>
  )
}
