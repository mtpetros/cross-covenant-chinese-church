import Nav from './ui/Nav'
import Main from './ui/Main'
import NavStyles from  '../styling/nav.scss'
import MainStyles from '../styling/main.scss'

const App = (NavStyles, MainStyles) => (
<div className="App">
    <Nav style= { NavStyles } />
    <Main style= { MainStyles } />
</div>)

export default App