import React from 'react';
import Navbar from '../Navbar/Navbar';
import backgroundvideo from "../assets/-c85c-4755-a1c0-4646ee276bd51.mp4"
import "./Hero.css"

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src={backgroundvideo}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-8 text-white">
                <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                    When Innovation

                </h1>
                <h1 className='text-4xl sm:text-6xl font-bold mb-6'> Meets <span className="bg-green-100 rounded-full px-3 text-black ">Investment</span></h1>
                <p className=" text-green-100 text-lg mb-8">
                    Empowering Trading Through Advanced Technology
                </p>
                <button className=" custom-button bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200">
                    Open dApp
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
