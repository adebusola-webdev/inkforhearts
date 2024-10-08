import React from 'react'

import '../styles/home.css'
import { Link } from 'react-router-dom'

import HeroSection from './HeroSection'

import CreatePersonalizedsteps from './CreatePersonalizedsteps'
export const Home = () => {
    const stepsData = [
        {
          image: 'path/to/image1.png',
          title: 'DESIGN YOUR LOVEMOJIS TO LOOK JUST LIKE YOU!',
          description: 'Choose your eyes, hair, skin tone and more for each LoveMoji®. Your LoveMojis® will now automatically appear throughout your book.'
        },
        {
          image: 'path/to/image2.png',
          title: 'CUSTOMIZE YOUR BOOK COVER',
          description: 'Pick a cover design that reflects your personality and the message you want to convey.'
        },
        {
          image: 'path/to/image3.png',
          title: 'FINALIZE AND ORDER',
          description: 'Review your book and place your order. Your personalized book will be delivered to you.'
        }
      ];

  
  return (
    <div>

    <HeroSection
        title="It's your story, tell it and make someone feel special."
        subtitle="Create a personalized book that lists all the reasons why you love someone."
        buttonText="Create a book now!"
        buttonLink="/create-book"
      />
    <CreatePersonalizedsteps
        mainTitle="Create a personalized book in 3 steps"
        subTitle="Expressing why someone is special has never been this easy and fun! Each Book is a personalized collection of all the little reasons why you love or appreciate someone. Customize your book as much or as little as you'd like."
        steps={stepsData}
      />
  


    </div>
  )
}
