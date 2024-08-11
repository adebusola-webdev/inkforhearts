import React from 'react'
import '../styles/footer.css'

export const Footer = () => {
  return (
    <>
   
    <footer className="footer">
      <div className="footer-content">
      <div className="footer-section">
          <h4>Inkforhearts</h4>
          <ul>
            <li><a href="#our-story"> Occassion </a></li>
            <li><a href="#team">Recipients</a></li>
            <li><a href="#careers">Career</a></li>
            <li><a href="#press">Press</a></li>
          </ul>
        </div>
        <div className="footer-section">
       
          <ul className='social-media'>
            <li><a href="#our-story"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#team"><i class="fa-brands fa-tiktok"></i></a></li>
            <li><a href="#careers"><i class="fa-brands fa-twitter"></i></a></li>

          </ul>
        </div>
       
       
      
       
      </div>
      <div className="footer-bottom">
        
        <p>© 2024 inkforhearts. All rights reserved.</p>
        <ul>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#terms-of-service">Terms of Service</a></li>
        </ul>
      </div>
    </footer>

  
    </>
  )
}
