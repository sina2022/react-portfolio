import './about.css'
import React from 'react'
import sina from '../../assets/sina.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div class="container about__container">
        <div class="about__me">
          <img src={sina} alt="" class="about__me-image" />
        </div>

        <div class="about__content">
          <div class="about__cards">
            <article class="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year working</small>
            </article>

            <article class="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200 clients</small>
            </article>

            <article class="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>12 Completed</small>
            </article>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </p>
          <a href="#conatct" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
