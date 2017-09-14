import React from 'react'
import ReactDOM from 'react-dom'
import pollService from './service/PollService'
import App from './App'

pollService.init(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
})
