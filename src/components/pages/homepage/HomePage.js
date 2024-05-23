import React from 'react'
import Header from './Header'
import Description from './Description'
import Review from './Review'
import VisitorsSection from './VisitorsSection'
import ApplyTrial from './ApplyTrial'
import SupportSection from './SupportSection'
import Features from './Features'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div className='h-screen w-screen'>
        <div className='md:mx-28 mx-2 my-8 flex flex-col md:flex-column '>
        <Header/>
        <Description/>
        <Review/>
        <VisitorsSection/>
        <ApplyTrial/>
        <SupportSection/>
        <Features/>
       
        </div>
        <Footer/>
    </div>
  )
}

export default HomePage