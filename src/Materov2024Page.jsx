import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Kevin } from './Kevin';
import { GiJourney } from 'react-icons/gi';

export default function Materov2024Page() {

  function Journey() {
    const slides = [
      {
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
        title: '1st Place',
        subtitle: 'SAUVC 2025',
        desc: 'Following our successful debut last year, Mecatron proudly clinched 1st place at the Singapore AUV Challenge 2025!',
        link: '/competitions',
      },
      {
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
        title: 'Finalist',
        subtitle: 'MATE ROV 2024',
        desc: 'We reached the finals at the MATE ROV Competition, showcasing our underwater robotics expertise.',
        link: '/competitions',
      },
      {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        title: 'Upcoming',
        subtitle: 'RoboSub 2024',
        desc: 'We are preparing for our debut at RoboSub in August. Stay tuned for updates!',
        link: '/competitions',
      },
    ];
    const [idx, setIdx] = useState(0);
    const prev = () => setIdx((idx - 1 + slides.length) % slides.length);
    const next = () => setIdx((idx + 1) % slides.length);
    return (
      <div className="relative w-full max-w-xl h-full flex flex-col items-center justify-center">
        <div className="relative w-full h-2/3 flex items-center justify-center">
          <img src={slides[idx].image} alt={slides[idx].subtitle} className="rounded-xl object-cover w-full h-full" />
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-orange-500 text-black hover:text-white rounded-full p-2 shadow transition z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-orange-500 text-black hover:text-white rounded-full p-2 shadow transition z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="w-full bg-[#232323] rounded-xl mt-4 p-6">
          <div className="text-sm font-bold text-white mb-1">{slides[idx].title}</div>
          <div className="text-2xl font-extrabold text-white mb-2">{slides[idx].subtitle}</div>
          <div className="text-base text-white mb-2">{slides[idx].desc}</div>
          <Link to={slides[idx].link} className="text-base font-semibold text-white hover:text-orange-500 transition flex items-center group">
            Read More Here <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-3 h-3 rounded-full ${i === idx ? 'bg-orange-500' : 'bg-white/60'} border border-white`}
            />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#181818] text-white font-sans">
      <div className="flex pt-32 justify-around  w-full max-h-30">
        <div>
            <h1 className="flex text-lg">2024 April</h1>
            <h1 className="flex text-5xl text-orange-600">Singapore AUV Challenge</h1>
        </div>
        <img 
            src="./src/GNG.png" 
            alt="wtv" 
            className="w-48 h-auto"
          />
        
      </div>
      <section className="flex justify-center items-center flex-col md:flex-row pt-10 pb-15 px-8 md:px-20 bg-[#181818]  max-w-30 min-h-30">
        {/* <div className="pt-20 pb-10 w-full max-w-7xl"> */}
        <div className="flex justify-around flex-col md:flex-row pt-20 pb-10 w-full max-h-30">
          <img 
            src="./src/mate-rov.jpeg" 
            alt="wtv" 
            className="w-1/4 h-auto"
          />
          <div className="flex flex-col max-w-3xl">
            <p className="text-4xl leading-relaxed ">
              MATE ROV Competition is an international underwater robotics competition organized by MATE and the Marine Technology Society.
            </p>
            <div className="flex flex-row gap-6">
              <div>
                <p>
                  For the competition, teams need to build their own ROV and complete the mission tasks in their respective category, which are modelled after realistic scenarios of data collection for marine research.
                </p>
                <p>
                  In addition to building a functional ROV to complete competition tasks modelled after real-world scenarios, the MATE ROV Competition also fosters an entrepreneurial spirit in students as teams are also required to market and sell their products.
                </p>
              </div>

              <div>
                <p>
                  Leveraging on the multidisciplinary team that we have, Mecatron aims to represent Nanyang Technological University and Singapore at the 2024 MATE ROV World Championship in Kingsport, Tennessee, USA. This marks the first time a team from Singapore will participate in the Explorer Class of this prestigious international competition. Our participation underscores the growing emphasis on interdisciplinary collaborations, which is a key focus in Singapore’s educational and technological advancement.
                </p>
                <p>
                  For more information about the MATE ROV competition, visit https://materovcompetition.org
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <Journey/>

      </div>  
  );
} 