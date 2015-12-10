import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import { createHistory, useBasename } from 'history'
import about from './components/about.js'
import portfolio from './components/portfolio.js'
import contact from './components/contact.js'
import home from './components/home.js'

const ACTIVE = { color: 'red' }

class main extends React.Component {
  render() {
    return (
      <div>
        <h1>Header!</h1>
        <ul>
          <li><Link to="/" activeStyle={ACTIVE}>Home</Link></li>
          <li><Link to="/about" activeStyle={ACTIVE}>About</Link></li>
          <li><Link to="/portfolio" activeStyle={ACTIVE}>Portfolio</Link></li>
          <li><Link to="/contact" activeStyle={ACTIVE}>Contact</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
}

const history = useBasename(createHistory)({
  basename: '/active-links'
})

render((
  <Router history={history}>
    <Route path="/" component={main}>
      <IndexRoute component={home}/>
      <Route path="/about" component={about}/>
      <Route path="/portfolio" component={portfolio}/>
      <Route path="/contact" component={contact}/>
    </Route>
  </Router>
), document.getElementById('main'))
