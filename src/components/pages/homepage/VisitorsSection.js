import React from 'react'
import magicwand from "../../assets/motionarteffect-img5.png"
const VisitorsSection = () => {
  return (
    <div className="flex justify-between">
    <div className="flex flex-col gap-6">
      <h1 className="text-white font-sora font-medium text-[35px]">
        Turn Your Cursor Into A Colourful Magic Wand & Charm Your Visitors
      </h1>
      <p className="text-slate-300 font-outfit font-light text-[18px]">
        Motion Art for Elementor is a groundbreaking plugin that empowers you
        to effortlessly infuse your website with visually stunning motion art
        elements.
      </p>
      <div className="flex justify-start cursor-pointer">
        <div className="bg-gradient-to-r from-[#5E11FF] to-[#F87516] rounded-2xl font-sora text-[20px] text-white p-4 px-10 flex gap-3">
          <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" target="_blank">
            Purchase From Envato
          </a>
          <i className="ri-arrow-right-line text-2xl font-extralight"></i>
        </div>
      </div>
    </div>

    <div className="w-[75%] justify-end flex">
      <img src={magicwand} alt="img5" className="size-64" />
    </div>
  </div>
  )
}

export default VisitorsSection