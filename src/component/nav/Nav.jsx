import React from 'react'
import { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookBookmark } from 'react-icons/bi'
import { BiCodeBlock } from 'react-icons/bi'
import { BsTelephonePlus } from 'react-icons/bs'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a
        href="#"
        className={activeNav === '#' ? 'active' : ''}
        onClick={() => setActiveNav('#')}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === '#about' ? 'active' : ''}
        onClick={() => setActiveNav('#about')}
      ><AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === '#experience' ? 'active' : ''}
        onClick={() => setActiveNav('#experience')}
      >
        <BiBookBookmark />
      </a>
      <a
        href="#service"
        className={activeNav === '#service' ? 'active' : ''}
        onClick={() => setActiveNav('#service')}
      >
        <BiCodeBlock />
      </a>
      <a
        href="#contact"
        className={activeNav === '#contact' ? 'active' : ''}
        onClick={() => setActiveNav('#contact')}
      >
        <BsTelephonePlus />
      </a>
    </nav>
  )
}

export default Nav