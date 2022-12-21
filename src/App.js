import Tree from './components/Tree'
import { getRandomInt } from './utils'

const APPLE_COUNT = 10
const APPLE_POSITIONS = Array.from({ length: APPLE_COUNT }).map(() => ({
  top: `${getRandomInt(5, 13)}rem`,
  left: `${getRandomInt(8, 25)}rem`,
}))

export default function App() {
  return (
    <div>
      <Tree
        appleCount={APPLE_COUNT}
        applePositions={APPLE_POSITIONS}
      />
    </div>
  )
}
