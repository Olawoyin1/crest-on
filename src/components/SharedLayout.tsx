// import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
// import Navbar from './Navbar'
import ScrollToTop from '../ScrollToTop'

const SharedLayout = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <ScrollToTop />
        <Outlet />
        <Footer />
    </div>
  )
}

export default SharedLayout