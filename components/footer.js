import React from 'react'
import MyForm from '../components/myform.js'

const Footer = () => (
  <footer className="footer">
    <div className="row">
      <div className="footer__content">
        <h2>Contact</h2>
        <p>Feel free to contact me with any questions or opportunities.</p>
        <MyForm />
      </div>
    </div>
    <style jsx>{`
      .footer {
        position: relative;
        padding: 0.9rem 1.8rem 1.8rem;
      }
      .footer__content, .footer__content h2 {
        text-align: center;
      }
    `}</style>
  </footer>
)
export default Footer;
