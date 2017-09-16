import { Switch, Route } from 'react-router-dom'

const Main = () => (
    <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)

export default Main