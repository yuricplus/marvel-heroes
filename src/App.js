import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.scss'

import { HomePage } from './components/pages/Home'
import HeroDetailsPage from './components/pages/Heroes-details'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/hero-details/:id" exact component={HeroDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
