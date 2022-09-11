import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { GrLinkedin } from 'react-icons/gr'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>PCN</a>
      <ul className='permalinks'>
        <li><a href="#"></a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#service">service</a></li>
        <li><a href="#portfolio">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100009159184196" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://github.com/nguyen-git" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="linkedin.com/in/công-nguyên-phạm-b9b905229" target="_blank" rel="noreferrer"><GrLinkedin /></a>
      </div> 
      <div className="footer_copyright">
        <small>&copy; PCN. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer