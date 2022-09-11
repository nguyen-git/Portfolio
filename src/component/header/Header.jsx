import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/layerpng.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Phạm Công Nguyên</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className='me'>
          <figure>
          <img src={ME} alt="me"/>
          </figure>
        </div>
        <a href="contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header