import React from 'react'
import ReactDOM from 'react-dom'
import pollService from './PollService'
import App from './App'

pollService.init(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
})
