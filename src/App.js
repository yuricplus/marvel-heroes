import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss'
import { HomePage } from './components/pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/hero-details/:id" component={() => <div>oi</div>} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
