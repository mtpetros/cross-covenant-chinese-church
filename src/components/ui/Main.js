import { Switch, Route } from 'react-router-dom'

import Home from './Main_components/Home'
import About from './Main_components/About'

const mainStyling = {height: '500px',
                    width: '1900px',
                    margin: '0 auto',
                    paddingTop: '87px'};
const Main = () => (
    <main style = {mainStyling}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)

export default Main