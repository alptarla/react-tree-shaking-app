import { ReactComponent as TreeSVG } from './assets/cartoon-tree.svg'
import { ReactComponent as AppleSVG } from './assets/fresh-apple-icon.svg'
import { ReactComponent as AppleBasketSVG } from './assets/garden-basket.svg'

export default function App() {
  return (
    <div>
      <TreeSVG
        width={600}
        height={600}
      />
      <AppleSVG
        width={50}
        height={50}
      />
      <AppleBasketSVG
        width={200}
        height={200}
      />
    </div>
  )
}
