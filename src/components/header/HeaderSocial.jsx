import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="https://linkedin.com/in/sina-kooshesh-352494b9" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/sina2022?tab=repositories" target="_blank">
        <BsGithub />
      </a>
    </div>
  )
}

export default HeaderSocial
