import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Kevin } from './Kevin';
// import {group_pic} from './group.png'




// return <div className="min-h-screen flex items-center justify-center text-3xl">Robosub 2025 Page</div>;
export default function Robosub2025Page() {
 
  return(

    <div className="min-h-screen bg-[#181818] text-white font-sans">
      {/* <div className="flex pt-32 justify-evenly">
        <h1 className="flex text-lg">October 2025</h1>
        <h1 className="flex text-5xl text-orange-600">RoboSub 2025</h1>
      </div>    */}
      <div className="flex flex-col md:flex-row pt-32 items-center md:justify-around text-center">
        <h1 className="flex text-lg">October 2025</h1>
        <h1 className="flex text-4xl md:text-5xl text-[#d73a1a] font-bold">RoboSub 2025</h1>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-between pb-5 md:pb-20 px-8 md:px-20 bg-[#181818]">
      <div className="flex-1 flex items-center justify-center mt-12 md:mt-0 w-full">
            {/* 3D Kevin model in a circular container */}
            <div className="w-[24rem] h-[24rem] sm:w-[24rem] sm:h-[24rem] md:w-[32rem] md:h-[32rem] lg:w-[44rem] lg:h-[44rem] rounded-full flex items-center justify-center overflow-hidden relative bg-transparent">
              <Canvas 
                camera={{ position: [0, 0, 5], fov: 50 }} 
                style={{ background: 'transparent' }}
                gl={{
                  antialias: true,
                  alpha: true,
                  powerPreference: "high-performance",
                  precision: "highp",
                  outputColorSpace: "srgb"
                }}
                dpr={[1, 2]}
                shadows
              >
                <ambientLight intensity={0.1} />
                <directionalLight position={[10, 10, 5]} intensity={0.4} castShadow />
                <directionalLight position={[-5, 5, 10]} intensity={0.3} />
                <pointLight position={[-10, -10, -10]} intensity={0.2} />
                <Environment preset="studio" background={false} />
                <Kevin scale={[5, 5, 5]} />
                <OrbitControls enableZoom={false} enablePan={true} />
              </Canvas>
            </div>
          </div>
      </section>
      <div className="flex flex-col gap-4 pr-5 pl-5 md:flex-row md:gap-16  justify-center pb-10">
        <Link
          to="/kevin"
          className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
        > 
          Click Here To View Kevin
        </Link>

        <a 
          href="/src/assets/robosub_2025/Technical-Documentation.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
        >
          Kevin's Technical Paper
        </a>

        <Link
          to="https://mecatron.notion.site/Robosub-2025-Blog-20c6978f818e80aebb1ec2d603b2cc69"
          className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
        >
          Team's Blog
        </Link>
      </div>
      <div className="flex pt-20 justify-center bg-[#303030]">
        <h1 className="flex text-4xl">Team Video</h1>
      </div>   
       <section className="flex flex-col md:flex-row items-center justify-between pt-10 pb-10 px-8 md:px-20 bg-[#303030] md:min-h-30">
          <div className="flex flex-1 justify-center mt-12 md:mt-0">
            {/* <iframe
              src='https://www.youtube.com/embed/E7wJTI-1dvQ'
              frameborder='0'
              allow='autoplay; encrypted-media'
              allowfullscreen
              title='video'
              width="100%"
              height="600"
            /> */}
            <iframe width="100%" height="600" src="https://www.youtube.com/embed/stvEZ86dvd4" title="Team Mecatron RoboSub Introduction Video | RoboSub 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
      </section>

      <section className="flex flex-col md:flex-row pt-10 pb-15 px-8 md:px-20 bg-[#181818] min-h-30">
        <div className="relative flex flex-1 mt-12 md:mt-0 pb-10">
          <img 
            src="./src/group.png" 
            alt="wtv" 
            className="w-full h-auto brightness-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-white text-center md:text-4xl text-sm px-4 pb-10 font-bold">
              Click here to view our team members behind Mecatron
            </p>
            <Link
              to="/team"
              className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200 md:scale-100 scale-x-75"
            >
              Members Page
            </Link>
          </div>
        </div>
      </section>
    </div>

  );
  
  
  
} 