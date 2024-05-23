import React from 'react';
import logo from "../../assets/MotionArtEffect-logo.png";

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row  justify-between'>
      <img
        src={logo}
        alt="motion-art"
        className="cursor-pointer w-48 md:w-60"
      />
      <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"      target="_blank">
      <button className="hidden md:block bg-inherit text-[#0D051F] border-2 border-[#808080] text-lg py-3 px-9 rounded-md font-outfit hover:bg-transparent hover:text-[#FFFFFF] ml-auto">
        Purchase Now
      </button>
      </a>
    </div>
  );
}

export default Header;
