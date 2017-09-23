import React from 'react'
import ReactDOM from 'react-dom'
import router from './components/router'

window.React = React

ReactDOM.render((
	router), 
	document.getElementById('react-container'))