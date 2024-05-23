import React from 'react'

const Footer = () => {
  return (
    <div className="flex text-slate-300 font-light font-outfit text-[14px] justify-center bg-gradient-to-r from-[#F87517] to-[#5E11FD] mt-16 mb-2 p-4 px-16">
    <div className="flex justify-between w-11/12">
      <div>
        <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
      </div>
      <div className="flex gap-5">
        <a
          className="hover:text-slate-200 transition-all"
          href="https://qodematrix.com/docs/motion-art-for-elementor/"
          target="_blank"
        >
          Documentation
        </a>
        <a
          className="hover:text-slate-200 transition-all"
          href="https://support.qodematrix.com/login"
          target="_blank"
        >
          Support
        </a>
      </div>
    </div>
  </div>
  )
}

export default Footer