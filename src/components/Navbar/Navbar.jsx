import React from 'react';
import logo from "../assets/logo.png"
const Navbar = () => {
    return (
        <nav className=" flex justify-between items-center w-full py-4 px-8 fixed top-0 left-0 z-20">
            <div className="text-xl font-bold flex  items-center gap-2">
                {/* Logo */}
                <img
                    src={logo}
                    className="w-20 sm:w-28 md:w-36 lg:w-48 xl:w-60 2xl:w-72 xl:ml-10 object-contain"
                    alt="Logo"
                />

            </div>
            <div className='bg-gray-800 p-5 px-16 justify-center items-center rounded-full border-green-400  text-white flex  gap-8' id="featues-con">
                <p>Features</p>
                <p>Why Us</p>
                <p>Tokenomics</p>
                <p>Roadmap</p>
            </div>


            <div className="flex items-center gap-4" id="btn-con">
                <button className="text-white hover:underline">Log in</button>
                <button className="text-black bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500">
                    Whitepaper
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
