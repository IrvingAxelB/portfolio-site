import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import { createHistory, useBasename } from 'history'
import about from './about.js'
import portfolio from './portfolio.js'
import contact from './contact.js'
import home from './home.js'

class Header extends React.Component {
  render() {
    return (
      <header id='header' >
        <nav>
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    )
  }
}

export default Header;
