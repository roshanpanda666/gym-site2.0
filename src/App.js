
import React from 'react'
import'./App.css'
import Navbar from './components/navBar'
import Hero from './components/hero'
import Ourprograms from './components/ourprograms'
import Ourvalues from './components/ourvalues'
import Faq from './components/faq'
import Testimonials from './components/testimonials'
import Footer from './components/footer'
import Gotoupbutton from './components/Gotoupbutton'
import About from './components/about'
import Services from './components/services'
const App = () => {
  return (
    <div>
      
      <Navbar></Navbar>
      <Hero></Hero>
      <Ourprograms></Ourprograms>
      <Ourvalues></Ourvalues>
      <Faq></Faq>
      <Testimonials></Testimonials>
      <About></About>
      <Services></Services>
  
      <Gotoupbutton></Gotoupbutton>
      <Footer></Footer>
      
    </div>
  )
}

export default App
