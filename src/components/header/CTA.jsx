import React from 'react'
import CV from '../../assets/CV.pdf'

function CTA() {
  return (
    <div className="cta">
      <a href={CV} className="btn">
        Download CV
      </a>
      <a href="#conatct" className="btn btn-primary">
        Contact
      </a>
    </div>
  )
}

export default CTA
