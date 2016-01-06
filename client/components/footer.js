import React from 'react'
import { Link } from 'react-router'

class Footer extends React.Component {
  render() {
    return (
      <footer className='contact-banner'>
        <span className='outer-box'>
          <span className='inner-box'>
            <Link className='contact-link' to="/contact">C O N T A C T</Link>
          </span>
        </span>
      </footer>
    )
  }
}

export default Footer;
