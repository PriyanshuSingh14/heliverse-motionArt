import React from 'react'
import image1 from '../../assets/motionarteffect-img1.png'
import image2 from '../../assets/motionarteffect-img2.png'
import image3 from '../../assets/motionarteffect-img3.png'
import image4 from '../../assets/motionarteffect-img4.png'
const Review = () => {
  return (
    
        <div className='flex-col py-20'>
      <div className='flex justify-center text-[22px] text-slate-300 font-outfit'>
        <h1>Trusted by thousands of users around the world</h1>
      </div>

      <div className='flex justify-between py-20'>
            <div className='flex items-center gap-2'>
                <img src={image2} alt="envato" />
                <div className='text-slate-300 font-sora flex flex-col gap-4'>
                    <img src={image4} alt="review" />
                    <p>4.5 Score, 9 Reviews</p>
                </div>
            </div>

            <div className='flex items-center gap-2'>
                <img src={image1} alt="company-logo" />
                <div className='text-slate-300 font-sora flex flex-col gap-4'>
                    <img src={image4} alt="review" />
                    <p>4.5 Score, 9 Reviews</p>
                </div>
            </div>

            <div className='flex items-center gap-x-2'>
                <img src={image3} alt="world-vector" />
                <div className='text-slate-300 font-sora flex flex-col gap-4'>
                    <img src={image4} alt="review" />
                    <p>4.5 Score, 9 Reviews</p>
                </div>
            </div>
      </div>
    </div>
   
  )
}

export default Review