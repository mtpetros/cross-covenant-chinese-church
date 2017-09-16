import React from 'react'
import ReactDOM from 'react-dom'
import routes from './components/routes'

window.React = React

ReactDOM.render((
	routes), 
	document.getElementById('react-container'))