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
            <h4 className='skills-header'>Programming</h4>
            <span className='skills-line'></span>
            <p className='skills-description'></p>
          </div>

          <div className='skills-container'>
            <img className='skills-img' src='' />
            <h4 className='skills-header'>Interaction Design</h4>
            <span className='skills-line'></span>
            <p className='skills-description'>A key area of focus in my design process is to ensure the best interaction for each situation to guide the user in their digital journey, as this is essential in creating engaging and effective experiences.</p>
          </div>

          <div className='skills-container'>
            <img className='skills-img' src='' />
            <h4 className='skills-header'>Concepting</h4>
            <span className='skills-line'></span>
            <p className='skills-description'>My interests in many different fields has helped me to stay curious, open and flexible. These attributes have been essential in the concepting of digital ideas.</p>
          </div>

          <div className='skills-container'>
            <img className='skills-img' src='' />
            <h4 className='skills-header'>Prototyping</h4>
            <span className='skills-line'></span>
            <p className='skills-description'></p>
          </div>
         
          <div className='skills-container'>
            <img className='skills-img' src='' />
            <h4 className='skills-header'>Learning</h4>
            <span className='skills-line'></span>
            <p className='skills-description'></p>
          </div>
         
          <div className='skills-container'>
            <img className='skills-img' src='' />
            <h4 className='skills-header'>Teaching</h4>
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