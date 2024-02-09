import React from 'react'
import './Homepage.css'
import CreepyImage from './../assets/Cre (1).jpeg_swing.mp4'
import {Link} from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
       <div className="creepy-Travel-Container">
            <div className="creepy-image">
            <video autoPlay loop muted>
            <source src={CreepyImage} type="video/mp4" />
          </video>
            </div>
            <div className="creepy-tagline">
            Unearth the Unseen, <br /> <span>Explore the Unexplained.</span>
            </div>

          </div>
          <div className="button_creepy_main">
        <Link to="/list" style={{ textDecoration: "none" }}>
          <button className="creepy-button"></button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage