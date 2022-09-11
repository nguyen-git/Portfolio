import React from 'react'
import './about.css'
import Me from '../../assets/bg-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FaUserAstronaut } from 'react-icons/fa'
import { GiBookAura } from 'react-icons/gi'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={Me} alt='AboutImage' />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <GiBookAura className='about_icon' />
              <h5>Education</h5>
              <small>Văn Lang University 2018 - 2022</small>
            </article>
            <article className="about_card">
              <FaUserAstronaut className='about_icon' />
              <h5>achievement</h5>
              <small>Outstanding Student in 2020</small>
            </article>
            <article className="about_card">
            <FaAward className='about_icon' />            
              <h5>Experience</h5>
              <small>Business Analysis, Quality Control</small>
            </article>
          </div>
          <p>Students from Van Lang University graduated with a major in ISM information system administration. During my internship, I worked in the field of website for the position of BA and QC in the technical department. In order to be able to absorb and exchange at work, I actively learned and was interested in learning programming, so I learned and self-taught about front end developer.</p>
          <div className="btn_about">
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default About