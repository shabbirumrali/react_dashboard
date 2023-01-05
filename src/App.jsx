import './App.scss'
import { Admin, BarGraph, Chat, Compose, Email, Plugins, Stock, System } from './pages'

const App = () => {
  return (
    <div>
      <h1>App</h1>

      <Admin />
      <BarGraph />
      <Chat />
      <Compose />
      <Email />
      <Plugins />
      <Stock />
      <System />
      
    </div>
  )
}

export default App