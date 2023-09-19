import './App.css'
import Calculator from './components/Calculator/Calculator'
import ThemeSelector from './components/ThemeSelector/ThemeSelector'

function App() {

  return (
    <main className="main">
      <div className="top_bar">
        <h1 className="title">calc</h1>
        <ThemeSelector />
      </div>
      <Calculator />
    </main>
  )
}

export default App
