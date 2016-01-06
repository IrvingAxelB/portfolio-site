import React from 'react'
import { Link } from 'react-router'

class MainHeader extends React.Component {
  render() {
    return (
      <header className='header' >
        <nav className='nav'>
          <Link className='home-links' to="/">H O M E</Link>
          <Link className='home-links' to="/portfolio">P O R T F O L I O</Link>
          <Link to='/' ><div className='home-logo-container'><img className='logo' src='../styles/public/assets/logo-white.png' /></div></Link>
          <Link className='home-links' to="/about">A B O U T</Link>
          <Link className='home-links' to="/contact">C O N T A C T</Link>
        </nav>
      </header>
    )
  }
}

export default MainHeader;
