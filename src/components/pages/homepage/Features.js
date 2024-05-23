import React from 'react'
import likeimage from "../../assets/motionarteffect-img6.png";
import moonimage from "../../assets/motionarteffect-img7.png";
import thunderimage from "../../assets/motionarteffect-img9.png";
const Features = () => {
  return (
    <div className='flex md:flex-col'>
         <div className="flex justify-center">
      <div className="w-3/5">
        <div className="flex-col items-center flex text-wrap p-10">
          <h1 className="font-sora text-[35px] text-white text-center font-semibold">
            An All-Round Plugin With Powerful Features
          </h1>
          <p className="font-outfit text-[18x] text-slate-400 text-center leading-6">
            Whether you're a seasoned web designer or just starting out, Motion
            Art for Elementor seamlessly integrates with the Elementor platform,
            providing you with a seamless and intuitive experience.
          </p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-7">
      <div className="bg-gradient-to-b from-[#0D061F] to-[#251E35] rounded-xl border-t justify-start">
        <img src={thunderimage} alt="light-weight" className="" />
        <div className="p-10 flex-col flex gap-4">
          <h1 className="text-[23px] font-sora text-slate-200">Light Weight</h1>
          <p className="text-[18px] font-outfit text-slate-400 leading-7">
            Motion Art for Elementor is designed to be lightweight.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#0D061F] to-[#251E35] rounded-xl border-t justify-start">
        <img src={likeimage} alt="responsiveness" className="" />
        <div className="p-10 flex-col flex gap-4">
          <h1 className="text-[23px] font-sora text-slate-200">100% Responsive</h1>
          <p className="text-[18px] font-outfit text-slate-400 leading-7">
          Create a consistent visual experience across all devices.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#0D061F] to-[#251E35] rounded-xl border-t justify-start">
        <img src={moonimage} alt="user-friendly" className="" />
        <div className="p-10 flex-col flex gap-4">
          <h1 className="text-[23px] font-sora text-slate-200">Light Weight</h1>
          <p className="text-[18px] font-outfit text-slate-400 leading-7">
          Ensure a smooth experience for both applicants and administrators.
          </p>
        </div>
      </div>
    </div>
        
    </div>
  )
}

export default Features