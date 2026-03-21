import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage/FatalErrorPage'
import Routes from 'src/Routes'
import './index.css'

// Unregister any stale service workers from previous builds
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister()
    }
  })
}

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <Routes />
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
