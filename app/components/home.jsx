import React from 'react'
import Footer from './footer.jsx'
import HomeHeader from './home-header.jsx'

class Home extends React.Component {
  render() {
    return (
      <section className='home-container'>
        <HomeHeader />
        
        <h1 className='home-display'><span className='display-box'>Irving Barajas</span></h1>
        <p className='home-description'>Software Engineer</p>

      </section>
    )
  }
}

export default Home;
