import React from 'react'
import Header from './header.js'
import Footer from './footer.js'

class About extends React.Component {
  render() {
    return (
      <section className='about-container'>
        <Header />
        
        <h1 className='description'>Hi, I'm Irving Barajas, a Software Engineer currently searching for new opportunities.</h1>
        <h2 className='specialized'>I'm Specialized in</h2>
        <div className='specialized-table'>
          <div className='skills-container'>
            <img className='skills-img' src='../styles/public/assets/programming.png' />
            <h4 className='skills-header'>Programming</h4>
            <span className='skills-line'></span>
            <p className='skills-description'>I am an autonomous learner that is forever married to software engineering, web development, problem solving, and adapting to new technologies. Currently in the process of becoming a React/Redux Jedi Master. </p>
          </div>

          <div className='skills-container'>
            <img className='skills-img' src='../styles/public/assets/design.png' />
            <h4 className='skills-header'>Interaction Design</h4>
            <span className='skills-line'></span>
            <p className='skills-description'>A key area of focus in my design process is to ensure the best interaction for each situation to guide the user in their digital journey, as this is essential in creating engaging and effective experiences.</p>
          </div>

          <div className='skills-container'>
            <img className='skills-img' src='../styles/public/assets/concepting.png' />
            <h4 className='skills-header'>Concepting</h4>
            <span className='skills-line'></span>
            <p className='skills-description'>My interests in many different fields has helped me to stay curious, open and flexible. These attributes have been essential in the concepting of digital ideas.</p>
          </div>

          <div className='skills-container'>
            <img className='skills-img' src='../styles/public/assets/prototyping.png' />
            <h4 className='skills-header'>Prototyping</h4>
            <span className='skills-line'></span>
            <p className='skills-description'>My coding knowledge gives me the ability to prototype even complex ideas.</p>
          </div>
         
          <div className='skills-container'>
            <img className='skills-img' src='../styles/public/assets/learning.png' />
            <h4 className='skills-header'>Learning</h4>
            <span className='skills-line'></span>
            <p className='skills-description'>I spend a lot of time immersing myself in new technology. I am constantly working on multiple tutorials and trying to broaden my tech toolbox. I also enjoy exploring topics I know nothing about. I’ve always been an avid learner and I look at my future as just one big learning experience.</p>
          </div>
         
          <div className='skills-container'>
            <img className='skills-img' src='../styles/public/assets/teaching.png' />
            <h4 className='skills-header'>Teaching</h4>
            <span className='skills-line'></span>
            <p className='skills-description'>I am a believer that technology can solve so many of the world’s challenges and that teaching more people to code might help us solve some problems sooner rather than later. Therefore I have spent many years teaching code to many of all ages and look forward to be teaching others in the future. </p>
          </div>
        </div>

        <Footer />
      </section>
    )
  }
}

export default About;