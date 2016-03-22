import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
  render() {
    return (
      <header className='header' >
        <nav className='nav'>
          <Link className='links' to="/">H O M E</Link>
          <Link className='links' to="/about">A B O U T</Link>
          <Link to='/' ><div className='logo-container'><img className='logo' src='../styles/public/assets/logo-black.png' /></div></Link>
          <a className='links' href="https://medium.com/@irvingaxelb">B L O G</a>
          <Link className='links' to="/contact">C O N T A C T</Link>
        </nav>
      </header>
    )
  }
}

export default Header;
