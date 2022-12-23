import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'

export function getRandomInt(min = 0, max = 0) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

export function renderTestWrapper(Component, props) {
  const rendered = render(
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  )

  return { ...rendered, store }
}
