import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWeixin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../styles/aboutMe.scss'

function AboutMe(props) {
  return (
    <div className="about-me">
      <div className="background">
        <img src="https://picsum.photos/id/128/400/200" alt="background" />
      </div>
      <img src="https://avatars0.githubusercontent.com/u/16985427" alt="" className="avatar" />
      <div className="who">
        <h2>WHO AM I</h2>
        <section className="intro">
          {/* I am Yujie Wang<br />
          a front end developer. */}
          I am Yujie Wang, a front end developer.<br />
          {/* I use Javascript HTML5 CSS3 React Redux Node.js ... */}
        </section>
      </div>
      <section className="touch">
        <h2>GET IN TOUCH</h2>
        <div className="touch-icons">
          <a href="https://github.com/BeijiYang" className="link" >
            <FontAwesomeIcon icon={faGithub} size="3x" className="touch-icon link" />
          </a>
          <FontAwesomeIcon icon={faWeixin} size="3x" className="touch-icon" />
          <FontAwesomeIcon icon={faTwitter} size="3x" className="touch-icon" />
          <FontAwesomeIcon icon={faInstagram} size="3x" className="touch-icon" />
        </div>
      </section>
    </div>
  )
}

AboutMe.propTypes = {

}

export default AboutMe

