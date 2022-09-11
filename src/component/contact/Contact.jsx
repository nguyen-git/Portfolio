import React, { useState } from 'react'
import './contact.css'
import { MdOutlineEmail} from 'react-icons/md'
import { RiMessengerLine} from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d737m5d', 'template_kq8uj15', form.current, '4Izrzx1GIZKg9dn2v')
      .then((result) => {
          alert('Cảm ơn anh, chị đã quan tâm và để thông tin. Hãy cho tôi biết nếu anh, chị có bất kỳ nhận xét, quan tâm hoặc thắc mắc nào!')
          
          setName('')
          setEmail('')
          setMessage('')
          form.current.focus()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>pnguyen.pcn@gmail.com</h5>
            <a href="mailto:pnguyen.pcn@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Nguyên</h5>
            <a href="https://m.me/profile.php?id=100009159184196" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp />
            <h4>Phone Number</h4>
            <h5>###</h5>
            <a href="tel:0961040933" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input 
            value={name} 
            onChange={e => setName(e.target.value)}
            type="text" 
            name="name" 
            placeholder="Your full name" 
            required 
          />
          <input 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            type="email" 
            name="email" 
            placeholder="Your email address" 
            required 
          />
          <textarea 
            value={message} 
            onChange={e => setMessage(e.target.value)}
            name="message" 
            placeholder="Your message"  
            rows='7'
          />
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact