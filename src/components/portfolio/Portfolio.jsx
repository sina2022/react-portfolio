import React from 'react'
import './portfolio.css'
import programming from '../../assets/programming2.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={programming} alt="" />
          </div>

          <h3>University Management</h3>
          <h5>SpringBoot, MySql, Thymeleaf</h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sina2022/university_management_project"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/sina2022/university_management_project"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={programming} alt="" />
          </div>
          <h3>BookStack</h3>
          <h5>online store, ASP.NET core6</h5>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sina2022/BookStack"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/sina2022/BookStack"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={programming} alt="" />
          </div>

          <h3>Flash Cards</h3>
          <h5>React, MongoDb. MernStack</h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sina2022/Memoriact_Frontend"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/sina2022/Memoriact_Frontend"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={programming} alt="" />
          </div>
          <h3>Banking system</h3>
          <h5>PHP LARAVEL, MySql</h5>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sina2022/online-banking"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/sina2022/online-banking"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={programming} alt="" />
          </div>
          <h3>Railway Management</h3>
          <h5>Spring boot, JDBL</h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sina2022/project"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/sina2022/project"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={programming} alt="" />
          </div>

          <h3>Whack a Mole</h3>
          <h5>Simple game with JavaScript</h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sina2022/MoleBros"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/sina2022/MoleBros"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
