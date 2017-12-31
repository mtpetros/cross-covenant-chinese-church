import { Switch, Route } from 'react-router-dom'

import Home from './Main_components/Home'
import About from './Main_components/About'
import Visit from './Main_components/Visit'
import Children from './Main_components/Connect_components/Children'
import Events from './Main_components/Connect_components/Events'
import Membership from './Main_components/Connect_components/Membership'
// import Connect from './Main_components/Connect'
// import Missions from './Main_components/Missions'
// import Learn from './Main_components/Learn'
// import Contact from './Main_components/Contact'

import homeStyles from '../../styling/components/_home.scss'
import aboutStyles from '../../styling/components/_about.scss'
import visitStyles from '../../styling/components/_visit.scss'

const Main = () => (
    <main>
    <Switch>
      <Route exact path='/' component={Home} style={homeStyles}/>
      <Route path='/about' component={About} style={aboutStyles}/>
      <Route path='/visit' component={Visit} style={visitStyles}/>
      <Route path='/children' component={Children} style={''}/>
      <Route path='/events' component={Events} style={''}/>
      <Route path='/membership' component={Membership} style={''}/>
      {/* <Route path='/connect' component={Connect}/>
      <Route path='/missions' component={Missions}/>
      <Route path='/learn' component={Learn}/>
      <Route path='/contact' component={Contact}/> */}
    </Switch>
  </main>
)

export default Main