import React from 'react'

const Description = () => {
  return (
    <div className='flex  flex-col md:flex-row  justify-between mt-20 px-0 md:px-6'>
      <div className='flex flex-col md:w-1/5 '>
        <h2 className="text-xl font-outfit font-semibold " >    <span className='block gradient-text'>Transform</span>

          <span className='block gradient-text'>Your Website</span>
        </h2>
        <div className='mt-2 text-l font-outfit tracking-wider text-off-white '>
          <span className='block'>With Motion Art</span>

          <span className='block'>Effect</span>
        </div>
      </div>
      <div className='flex flex-col md:w-4/5 justify-center px-10 md:pr-80 md:pl-20 gap-2 '>
      <div className="flex flex-col text-[65px] font-Sora font-medium leading-normal text-off-white">
        <h1 className="w-[35vw] ">Attract Your Visitors Attention</h1>
        <h1 >With Colourful</h1>
        <h1 className="font-medium gradient-text ">
          <span>Motion</span> Art Effect
        </h1>
      </div>
      <p className="text-lg font-Sora text-slate-400">
        Unleash the power of creativity with Motion Art for Elementor - your
        ultimate solution for seamlessly integrating captivating animations
        into your website.
      </p>
    </div>
    </div>


  )
}

export default Description