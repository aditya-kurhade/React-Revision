import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Layout from './Layout'
import Nopage from './Nopage'

const index = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/layout" element={<Layout />} />
            <Route path="*" element={<Nopage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default index