import { hydrateRoot, createRoot } from 'react-dom/client'
import App from './App'

const redwoodAppElement = document.getElementById('redwood-app')

if (!redwoodAppElement) {
  throw new Error('Could not find element with id "redwood-app"')
}

if (redwoodAppElement.children?.length > 0) {
  hydrateRoot(redwoodAppElement, <App />)
} else {
  const root = createRoot(redwoodAppElement)
  root.render(<App />)
}
