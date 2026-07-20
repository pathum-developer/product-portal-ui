import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-0 text-color">
      <Header />
      <main id="main-content" className="flex-1" />
      <Footer />
    </div>
  )
}

export default App
