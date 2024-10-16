import React from 'react';
import "./About.css"
import circuit from "../assets/circuit left.mp4"

const About = () => {
    return (
        <div className="aboutsect relative min-h-screen bg-dark-blue text-white flex flex-col items-center  p-6">
            {/* Background Circuit Videos */}
            <div className="videocon bg-red-300 ">
                <video
                    autoPlay
                    loop
                    muted
                    className="leftvid absolute left-[-2%] top-1/2 transform -translate-y-1/2 w-1/4 opacity-50 scale-x-[-1]"
                >
                    <source src={circuit} />
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 opacity-50"
                >
                    <source src={circuit} />
                </video>
            </div>


            {/* Content Container */}
            <div className="relative z-10 text-center ">
                <h1 className="text-4xl font-bold mb-4">About EthAi</h1>
                <p className="text-sm max-w-xl mx-auto text-green-200">
                    At EthAi, we’re all about making crypto trading easier and more intuitive. We provide tools
                    that help traders keep up with all new market trends, track top traders’ movements.
                </p>
                <button className="mt-6 px-6 py-2 bg-cyan-500 rounded-full shadow-lg hover:shadow-glow transition-shadow">
                    Read more
                </button>
            </div>

            {/* Cards Container */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
                {/* Stay Ahead Card */}
                <div className="bg-dark-card rounded-lg p-4 shadow-lg hover:shadow-glow transition-shadow">
                    <h2 className="text-xl font-semibold mb-2">Stay Ahead</h2>
                    <p>No more guesswork—get clear, trustable insights.</p>
                </div>

                {/* Know Your Assets Card */}
                <div className="bg-dark-card rounded-lg p-4 shadow-lg hover:shadow-glow transition-shadow">
                    <h2 className="text-xl font-semibold mb-2">Know Your Assets</h2>
                    <p>Always stay on top of how your investments are performing.</p>
                </div>

                {/* Simple, Not Overwhelming Card */}
                <div className="bg-dark-card rounded-lg p-4 shadow-lg hover:shadow-glow transition-shadow">
                    <h2 className="text-xl font-semibold mb-2">Simple, Not Overwhelming</h2>
                    <p>Our tools are designed to make complex market analysis easy to understand and act on.</p>
                </div>

                {/* Future-Proof Card */}
                <div className="bg-dark-card rounded-lg p-4 shadow-lg hover:shadow-glow transition-shadow">
                    <h2 className="text-xl font-semibold mb-2">Future-Proof</h2>
                    <p>We’re constantly improving, adding new features to help you make the most informed decisions possible.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
