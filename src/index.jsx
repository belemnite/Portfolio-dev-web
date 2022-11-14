import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/Contact">
                <Contact />
            </Route>
        </Router>
    </React.StrictMode>
)
