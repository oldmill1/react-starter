import React from 'react'
import ReactDOM from 'react-dom'

const App = ({ name }) => {
    return <div>Hello {name}</div>
}

ReactDOM.render(
    <App name="Jane" />,
    document.getElementById('root')
)
