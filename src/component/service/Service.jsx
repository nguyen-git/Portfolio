import React from 'react'
import './service.css'
import { BiCheck } from 'react-icons/bi'

const Service = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Service</h2>
      {/* UX/UI */}
      <div className="container service_container">
        <article className="service">
          <div className="service_head">
            <h3>UX/UI DESIGN</h3>
          </div>
            <ul className='service_list'>
              <li>
                <BiCheck />
                <p>Lorem ipsum, dolor sit amet elit.</p>
              </li>
              <li>
                <BiCheck />
                <p>Lorem ipsum, dolor sit amet elit.</p>
              </li>
              <li>
                <BiCheck />
                <p>Lorem ipsum, dolor sit amet elit.</p>
              </li>
              <li>
                <BiCheck />
                <p>Lorem ipsum, dolor sit amet elit.</p>
              </li>
              <li>
                <BiCheck />
                <p>Lorem ipsum, dolor sit amet elit.</p>
              </li>
              <li>
                <BiCheck />
                <p>Lorem ipsum, dolor sit amet elit.</p>
              </li>
            </ul>
        </article>
          {/* web dev */}
          <article className="service">
          <div className="service_head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
            <ul className='service_list'>
              <li>
                <BiCheck />
                <p>Lorem ipsum, dolor sit amet elit.</p>
              </li>
              <li>
                <BiCheck />
                <p>Lorem ipsum, dolor sit amet elit.</p>
              </li>
              <li>
                <BiCheck />
                <p>Lorem ipsum, dolor sit amet elit.</p>
              </li>
              <li>
                <BiCheck />
                <p>Lorem ipsum, dolor sit amet elit.</p>
              </li>
              <li>
                <BiCheck />
                <p>Lorem ipsum, dolor sit amet elit.</p>
              </li>
              <li>
                <BiCheck />
                <p>Lorem ipsum, dolor sit amet elit.</p>
              </li>
            </ul>
          </article>
          {/* SEO */}
          <article className="service">
          <div className="service_head">
            <h3>SEO</h3>            
          </div>
            <ul className='service_list'>
              <li>
                <BiCheck />
                <p>Lorem ipsum, dolor sit amet elit.</p>
              </li>
              <li>
                <BiCheck />
                <p>Lorem ipsum, dolor sit amet elit.</p>
              </li>
              <li>
                <BiCheck />
                <p>Lorem ipsum, dolor sit amet elit.</p>
              </li>
              <li>
                <BiCheck />
                <p>Lorem ipsum, dolor sit amet elit.</p>
              </li>
              <li>
                <BiCheck />
                <p>Lorem ipsum, dolor sit amet elit.</p>
              </li>
              <li>
                <BiCheck />
                <p>Lorem ipsum, dolor sit amet elit.</p>
              </li>
            </ul>
          </article>
      </div>
    </section>
  )
}


export default Service