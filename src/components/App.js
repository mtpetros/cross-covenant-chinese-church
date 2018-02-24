import { Component } from 'react'
import Nav from './ui/Nav'
import Main from './ui/Main'
import BottomBar from './ui/BottomBar'
import navStyles from  '../styling/nav.scss'
import mainStyles from '../styling/main.scss'
import bottomBarStyles from '../styling/bottomBar.scss'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navClasses: []
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        window.scrollY >= 140 && this.state.navClasses !== [] ? this.setState({ navClasses: ['shift'] }) : this.setState({ navClasses: [] }); 
    }

    render() {
        return (
            <div className="App">
                <Nav style= { navStyles } navClasses= { this.state.navClasses }/>
                <Main style= { mainStyles } />
                <BottomBar style={bottomBarStyles} />
            </div>)
    }
}

export default App