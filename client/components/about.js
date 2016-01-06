import React from 'react'
import Header from './header.js'
import Footer from './footer.js'

class About extends React.Component {
  render() {
    return (
      <section className='about-container'>
        <Header />
        
        <h1 className='description'>Hi, I'm Irving Barajas, a Full-stack Software Engineer currently working at MakerSquare.</h1>
        <h2 className='specialized'>I'm Specialized in</h2>
        <div className='specialized-table'>
          <div className='skills-container'>
            <img className='skills-img' src='' />
            <h4 className='skills-header'></h4>
            <span className='skills-line'></span>
            <p className='skills-description'></p>
          </div>

          <div className='skills-container'>
            <img className='skills-img' src='' />
            <h4 className='skills-header'></h4>
            <span className='skills-line'></span>
            <p className='skills-description'></p>
          </div>

          <div className='skills-container'>
            <img className='skills-img' src='' />
            <h4 className='skills-header'></h4>
            <span className='skills-line'></span>
            <p className='skills-description'></p>
          </div>

          <div className='skills-container'>
            <img className='skills-img' src='' />
            <h4 className='skills-header'></h4>
            <span className='skills-line'></span>
            <p className='skills-description'></p>
          </div>
         
          <div className='skills-container'>
            <img className='skills-img' src='' />
            <h4 className='skills-header'></h4>
            <span className='skills-line'></span>
            <p className='skills-description'></p>
          </div>
         
          <div className='skills-container'>
            <img className='skills-img' src='' />
            <h4 className='skills-header'></h4>
            <span className='skills-line'></span>
            <p className='skills-description'></p>
          </div>
        </div>

        <Footer />
      </section>
    )
  }
}

export default About;