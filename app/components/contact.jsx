import React from 'react'
import Header from './header.jsx'

class Contact extends React.Component {
  render() {
    return (
      <section className='contact-container'>
        <Header />
        <h1 className='contact-header'>Get in touch</h1>
        <span className='vertical-line'></span>
        <a className='email' href='mailto:irvingb232@gmail.com'>irvingb232@gmail.com</a>
        <div className='icons'>
          <a className='icon-container' href='https://twitter.com/irvingaxelb'><img className='icon' src='../styles/public/assets/twitter.png' /></a>
          <a className='icon-container' href='https://github.com/IrvingAxelB'><img className='icon' src='../styles/public/assets/git.png' /></a>
          <a className='icon-container' href='https://www.linkedin.com/in/irvingbarajas'><img className='icon' src='../styles/public/assets/linkedin.png' /></a>
        </div>
      </section>
    )
  }
}

export default Contact;
