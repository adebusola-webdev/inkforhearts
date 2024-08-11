import React from 'react'
import { Header } from './Header'
import { Faq } from './Faq'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>    
    <Faq/>
    <Footer/>


    </>
  )
}

export default Layout