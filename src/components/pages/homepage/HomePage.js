import React from 'react'
import Header from './Header'
import Description from './Description'
import Review from './Review'
import VisitorsSection from './VisitorsSection'
import ApplyTrial from './ApplyTrial'
import SupportSection from './SupportSection'
import Features from './Features'
import Footer from './Footer'
import Fluid from 'webgl-fluid'

import { useEffect, useRef } from 'react'

const HomePage = () => {
  const canvas = useRef(null)
  useEffect(function () {
    let c = canvas.current
   
    Fluid(c,{
    TRIGGER: 'hover',
    SIM_RESOLUTION: 128,
    DYE_RESOLUTION: 1024,
    CAPTURE_RESOLUTION: 512,
    DENSITY_DISSIPATION: 1,
    VELOCITY_DISSIPATION: 0.2,
    PRESSURE: 0.8,
    PRESSURE_ITERATIONS: 20,
    CURL: 30,
    SPLAT_RADIUS: 0.25,
    SPLAT_FORCE: 6000,
    SHADING: true,
    COLORFUL: true,
    COLOR_UPDATE_SPEED: 10,
    PAUSED: false,
    BACK_COLOR: { r: 0, g: 0, b: 0 },
    TRANSPARENT: false,
    BLOOM: true,
    BLOOM_ITERATIONS: 8,
    BLOOM_RESOLUTION: 256,
    BLOOM_INTENSITY: 0.8,
    BLOOM_THRESHOLD: 0.6,
    BLOOM_SOFT_KNEE: 0.7,
    SUNRAYS: true,
    SUNRAYS_RESOLUTION: 196,
    SUNRAYS_WEIGHT: 1.0,
      
    })

  }, [])
  return (
    <div className='h-screen w-screen scrollbar-none '>
      <canvas
        ref={canvas}
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          zIndex: -1, // Ensure canvas stays behind other content
        }}
      ></canvas>
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