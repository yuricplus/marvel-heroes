import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.scss'
import { HomePage } from './components/pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/hero-details/:id" exact component={() => <div>oi</div>} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
