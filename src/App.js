import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss';
import {Home} from 'components/templates/Home'

function App() {
  return (
   <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/hero-details/:id" component={() => <div>oi</div>}/>
      </Switch>
   </BrowserRouter>
  );
}

export default App;
