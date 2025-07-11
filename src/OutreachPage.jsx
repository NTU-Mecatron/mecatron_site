import React, {useState } from 'react';
import { Link } from 'react-router-dom';


export default function OutreachPage() {
  return (
    <div className="min-h-screen bg-[#181818] text-white flex flex-col items-center">
      <h1 className="text-5xl font-bold text-orange-500 mb-8 mt-24">Outreach</h1>
        <p className="max-w-4xl mx-auto text-center">
          Members are eager to share our work and our knowledge with the
          community through outreach workshops, to inspire a spirit of
          innovation in students. Through these workshops, we hope to spark
          students’ interest in Marine Science & Tech; to evoke curiosity and
          inspire students to innovate new solutions as they explore the world
          beyond the school curriculum.
        </p>

      {/* Workshops Section */}
      <section className="text-white px-6 py-16">
        <div className="max-w-4xl mx-auto text-left mb-8">
          <h2 className="text-3xl font-bold text-[#d73a1a] mb-4">Workshops</h2>
          <p className="text-[#f9f9f9]">
            We promote knowledge sharing by organizing a series of workshops
            tailored for both NTU students and visiting students from China,
            Vietnam, and Taiwan, offering both 3D Printing and Programming
            Workshops with content customizable to align with students’
            interests.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center w-full py-12 h-full">
          <WorkshopsCarousel />
        </div>
        <div className="max-w-4xl mx-auto text-left mb-8">
          <h2 className="text-3xl font-bold text-[#d73a1a] mb-4">Volunteering</h2>
          <p className="text-[#f9f9f9]">
            We collaborate with student care centres to organize Introductory Workshops for Marine Science & Technology for primary school students.
          </p>
        </div>
        <div className="max-w-4xl mx-auto text-left mb-8">
          <h2 className="text-3xl font-bold text-[#d73a1a] mb-4">E-Resources Initiatives</h2>
          <p className="text-[#f9f9f9]">
            We have also created an interactive e-resource! It is a great conversation starter to educate children about microplastics, which are ubiquitous pollutants in the marine environment.
          </p>
        </div>
      </section>
    </div>
  );
} 

function WorkshopsCarousel() {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      title: 'April 2025',
      subtitle: 'Marine Vehicle Workshop',
      desc: 'Held in the iconic Sands Expo & Convention Center, the heart of Singapore’s celebration of skills, creativity, and innovation, Mecatron was proud to host a hands-on Marine Engineering Workshop aimed to introduce students to the exciting world of marine engineering, highlighting its real-world relevance in fields such as Ocean waste retrieval, Underwater inspection and repair, and Marine biodiversity sampling.',
      link: '/marinevehicle',
    },
    {
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      title: 'June 2025',
      subtitle: '3D Pen Series Workshop',
      desc: 'On 5 June, Mecatron hosted another session of our 3D Pen Series Workshop, welcoming 38 enthusiastic participants from Vietnam! Armed with 3D pens and a splash of creativity, participants brought their ideas to life, from freehand designs to intricate stencil-based creations. This workshop is part of our ongoing 3D Pen Series, where we aim to make creative tech fun and accessible.',
      link: '/3dpen',
    },
    {
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      title: 'September 2024',
      subtitle: 'Computer Vision Workshop',
      desc: 'Mecatron organised and held a computer vision workshop for NTU students, delivering engaging sessions on image processing, neural networks, and real-world AI applications. This workshop introduced Roboflow, guiding attendees through data collection, labeling, and training a YOLO (You Only Look Once) model for object detection.',
      link: '/computervision',
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