import React from 'react'
import '../styles/footer.css'

export const Footer = () => {
  return (
    <>
   
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><a href="#our-story">Our Story</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#press">Press</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#consulting">Consulting</a></li>
            <li><a href="#product-development">Product Development</a></li>
            <li><a href="#design">Design</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
      
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 1234 Elm Street, Suite 567, City, State, ZIP</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-media">
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
            <li><a href="#instagram">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Company Name. All rights reserved.</p>
        <ul>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#terms-of-service">Terms of Service</a></li>
        </ul>
      </div>
    </footer>

  
    </>
  )
}
