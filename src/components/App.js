import Nav from './ui/Nav'
import Main from './ui/Main'

const appStyling = {
    backgroundColor:'rgba(102,2,2,0.8)'
}; 

const App = () => (
<div style={appStyling} className="App">
    <Nav />
    <Main />
</div>)

export default App