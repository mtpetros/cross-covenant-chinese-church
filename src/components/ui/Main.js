import { Switch, Route } from 'react-router-dom'

import Home from './Main_components/Home'
import About from './Main_components/About'

const Main = () => (
    <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)

export default Main