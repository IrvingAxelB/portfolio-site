import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import { createHistory, useBasename } from 'history'
import about from './components/about.js'
import portfolio from './components/portfolio.js'
import contact from './components/contact.js'
import home from './components/home.js'

// import Header from './components/header.js'
// import Footer from './components/footer.js'

class main extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

const history = useBasename(createHistory)({
  basename: '/'
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
