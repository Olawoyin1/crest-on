// import React from 'react'

import { Link } from "react-router"
import Navbar from "../components/Navbar"

const ErrorPage = () => {
  return (
    <>
    <Navbar />
    <div className="flex bg-gray-300/10 items-center justify-center flex-col text-center min-h-[400px] py-30">
      <h1 className="font-bold text-2xl headings">PAGE NOT FOUND</h1>
      <Link to='/'>return to homepage</Link>
    </div>
    </>
  )
}

export default ErrorPage