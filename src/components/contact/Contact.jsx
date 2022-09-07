import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_wi5d5qv',
        'template_bskeco8',
        form.current,
        'UN1VQ5i_GlKrWy2UQ'
      )
      .then(
        (result) => {
          document.getElementById('results').textContent =
            'your message was sent successfully '

          console.log(result.text)
        },
        (error) => {
          document.getElementById('results').textContent =
            'there was an error in sending your message'
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sinakooshesh@gmail.com</h5>
            <a href="mailto:sinakooshesh@gmail.com">send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>sinakooshesh@gmail.com</h5>
            <a
              href="https://m.me/sina.kooshesh"
              target="_blank"
              rel="noreferrer"
            >
              send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+14382264288</h5>
            <a
              href="https://wa.me/14382264288"
              target="_blank"
              rel="noreferrer"
            >
              send a message
            </a>
          </article>
        </div>
        {/* end of options */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" value="Send">
            Send Message
          </button>
          <p id="results"></p>
        </form>
      </div>
    </section>
  )
}

export default Contact
