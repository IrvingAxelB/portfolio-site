import React from 'react'
import { Link } from 'react-router'

class MainHeader extends React.Component {
  render() {
    return (
      <header className='header' >
        <nav className='nav'>
          <Link className='home-links' to="/">H O M E</Link>
          <Link className='home-links' to="/about">A B O U T</Link>
          <Link to='/' ><div className='home-logo-container'><img className='logo' src='../styles/public/assets/logo-white.png' /></div></Link>
          <a className='home-links' href="https://medium.com/@irvingaxelb">B L O G</a>
          <Link className='home-links' to="/contact">C O N T A C T</Link>
        </nav>
      </header>
    )
  }
}

export default MainHeader;
