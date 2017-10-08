import { Switch, Route } from 'react-router-dom'

import Home from './Main_components/Home'
import About from './Main_components/About'

const mainStyling = {backgroundColor: 'rgba(102,2,2,0.8)',
                    height: '500px',
                    width: '1900px',
                    margin: '0 auto'};
const Main = () => (
    <main style = {mainStyling}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)

export default Main