import './header.css'
import React from 'react'
import CTA from './CTA'
import dev from '../../assets/devv.webp'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="header__container container ">
        <h5>Hello, I'm </h5>
        <h1>Sina Kooshesh</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={dev} />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
