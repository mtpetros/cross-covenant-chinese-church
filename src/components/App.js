import { Component } from 'react'
import Nav from './ui/Nav'
import Main from './ui/Main'
import NavStyles from  '../styling/nav.scss'
import MainStyles from '../styling/main.scss'

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

        if (window.scrollY >= 20) {
            this.setState({
                navClasses: ['shift']
            });
            console.log(this.state);
        }
    }

    render() {
        return (
            <div className="App">
                <Nav style= { NavStyles } navClasses= { this.state.navClasses }/>
                <Main style= { MainStyles } />
            </div>)
    }
}

export default App