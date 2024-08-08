import React from 'react'
import { Header } from './Header'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import { Faq } from './Faq'
import { Footer } from './Footer'
export const Home = () => {

  
  return (
    <div>
    <Header/>
    <div className="hero__con">
        <div className="hero__inner__con">
            <h1 className="hero__mainT">
                it's your story tell it and make someone feel special.
            </h1>
            <p className='hero__subT'>Create a personalized book that lists all the reasons why you love someone.</p>
            <Link className='create_btn'>create a book now!</Link>

        </div>
       

    </div>
    <section className="steps__container">
        <div className="inner__steps__con">
            <div className="steps__text__con">
            <h1 className='steps__mainT'>create a personalized book in 3 steps</h1>
            <p className='steps__subT'>Expressing why someone is special has never been this easy and fun! Each Book is a personalized collection of all the little reasons why you love or appreciate someone. Customize your book as much or as little as you'd like.</p>
            </div>
            <div className="main_steps__con">
                <div className="steps">
                    <img src="" alt="" />
                    <h1 className='num_circle'>1</h1>
                    <h1 className='steps__bold_t' >DESIGN YOUR LOVEMOJIS TO LOOK JUST LIKE YOU!</h1>
                    <p>Choose your eyes, hair, skin tone and more for each LoveMoji®. Your LoveMojis® will now automatically appear throughout your book.</p>
                </div>
                <div className="steps">
                    <img src="" alt="" />
                    <h1 className='num_circle'>2</h1>
                    <h1 className='steps__bold_t' >DESIGN YOUR LOVEMOJIS TO LOOK JUST LIKE YOU!</h1>
                    <p>Choose your eyes, hair, skin tone and more for each LoveMoji®. Your LoveMojis® will now automatically appear throughout your book.</p>
                </div>
                <div className="steps">
                    <img src="" alt="" />
                    <h1 className='num_circle'> 3</h1>
                    <h1 className='steps__bold_t' >DESIGN YOUR LOVEMOJIS TO LOOK JUST LIKE YOU!</h1>
                    <p>Choose your eyes, hair, skin tone and more for each LoveMoji®. Your LoveMojis® will now automatically appear throughout your book.</p>
                </div>
            </div>
          
        </div>
</section>

<section className='faq'>
    <Faq/>
</section>
<Footer/>
    </div>
  )
}
