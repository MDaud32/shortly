import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
  let Links = [
    { name: 'Features', link: '/' },
    { name: 'Pricing', link: '/' },
    { name: 'Resources', link: '/' },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-3xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          Shortly
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden  text-black">
          <button>{open ? <AiOutlineClose /> : <AiOutlineMenu />}</button>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static rounded-xl md:z-auto z-[-1] left-0 w-[90%] ml-5 md:w-auto md:pl-0 transition-all duration-500 ease-in bg-[#3B3054] md:bg-white ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}>
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7 text-center">
              <div className="group">
                <a
                  href={link.link}
                  className="text-white md:text-gray-500 font-bold hover:text-gray-400 duration-500">
                  {link.name}
                </a>
                <div className="group-hover:border-b group-hover:border-gray-400"></div>
              </div>
            </li>
          ))}
          <div className="md:hidden flex flex-col md:flex-row gap-4 px-4">
            <div className="border-b border-gray-100"></div>
            <button className="text-white md:text-gray-400 text-2xl font-bold md:hover:text-black">
              Login
            </button>
            <button className="bg-[#0fe8e8] py-4 px-7 rounded-full hover:bg-[#1bdbdb]">
              Sign Up
            </button>
          </div>
        </ul>
        <div className="hidden md:flex flex-col md:flex-row gap-4 w-1/2 ml-auto justify-end">
          <button className="text-gray-400 text-2xl font-bold hover:text-black">
            Login
          </button>
          <button className="bg-[#0fe8e8] py-3 px-7 rounded-full hover:bg-[#1bdbdb]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
