import React from 'react';
import "./Dashboard.css";
import rectangle1 from "../assets/Rectangle 3.png";
import circuitvideo from "../assets/circuit left.mp4";
import riskguardbac from "../assets/riskguardbac.png"

const Dashboard = () => {
    return (
        <div className="bgdashboard min-h-screen p-16 text-white relative overflow-hidden bgcontainer">
            {/* Video Container */}
            <div className=' videcontainer absolute inset-0 z-0'>
                {/* Left Circuit Video (Flipped) */}
                <video
                    src={circuitvideo}
                    autoPlay
                    muted
                    loop
                    className="absolute   left-0 top-0 h-full w-auto opacity-20 object-cover transform scale-150 scale-x-[-1]" // Flipped
                />

                {/* Right Circuit Video (Normal Orientation) */}
                <video
                    src={circuitvideo}
                    autoPlay
                    muted
                    loop
                    className=" right-0 bottom-0 h-full w-auto opacity-20 object-fit leftvideo transform scale-150" // Normal
                />
            </div>

            {/* Main content overlay */}
            <div className='px-16 py-16 relative z-10'>
                {/* Adjusted grid for width control */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6">
                    {/* Trade Optimizer */}
                    <div className="trader lg:row-span-2 bg-dark-card rounded-lg p-4 shadow-lg hover:shadow-glow transition-shadow flex flex-col justify-center items-center h-[500px] ">
                        <img src={rectangle1} alt="Trade Optimizer" className="mb-4" />
                        <h2 className="text-xl font-semibold mb-2">Trade Optimizer</h2>
                        <p className="text-center">Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.</p>
                    </div>

                    {/* Market Insight (First Card) */}
                    <div className="bg-dark-card rounded-lg p-4 shadow-lg hover:shadow-glow transition-shadow flex flex-col justify-center items-center h-[230px]">
                        <h2 className="text-xl font-semibold mb-2">Market Insight</h2>
                        <p className="text-center">Stay ahead of the market. Get real-time updates on market trends, track top traders’ movements, and spot signals from key influencers.</p>
                    </div>

                    {/* Risk Guard */}
                    <div className="riskclass lg:row-span-2 bg-dark-card rounded-lg p-4 shadow-lg hover:shadow-glow transition-shadow flex flex-col justify-center items-center h-[500px]">
                        <img src={riskguardbac} alt="Trade Optimizer" className="mb-4" />
                        <h2 className="text-xl font-semibold mb-2">Risk Guard</h2>
                        <p className="text-center">Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.</p>
                    </div>

                    {/* Market Insight (Second Card) */}
                    <div className="bg-dark-card rounded-lg p-4 shadow-lg hover:shadow-glow transition-shadow flex flex-col justify-center items-center h-[230px]">
                        <h2 className="text-xl font-semibold mb-2">Market Insight</h2>
                        <p className="text-center">Stay ahead of the market. Get real-time updates on market trends, track top traders’ movements, and spot signals from key influencers.</p>
                    </div>
                </div>

                {/* Second Row */}
                <div className="mb-5 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    {/* Portfolio Sync */}
                    <div className="portsyncclass bg-dark-card rounded-lg p-4 shadow-lg hover:shadow-glow transition-shadow flex flex-col justify-center items-center h-[250px]">
                        <h2 className="text-xl font-semibold mb-2">Portfolio Sync</h2>
                        <p className="text-center">Easily manage your portfolio. You’ll always know what you own, how it’s performing, and where it’s headed.</p>
                    </div>


                    {/* Opportunity Scout */}
                    <div className="scoutClass bg-dark-card rounded-lg p-4 shadow-lg hover:shadow-glow transition-shadow flex flex-col justify-center items-center h-[250px]">
                        <h2 className="text-xl font-semibold mb-2">Opportunity Scout</h2>
                        <p className="text-center">Find exciting new projects, events, and tokens that others might be missing. Identifying promising opportunities early ensures you never miss out on the next big thing.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
