import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Kevin } from './Kevin';
import { KevinOptimized } from './KevinOptimized';
import ErrorBoundary from './ErrorBoundary';
import Spinner from './Spinner';



const sections = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About me' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact me' },
];

export default function Home() {
  // Refs for scrolling
  const sectionRefs = {
    home: useRef(null),
    services: useRef(null),
    about: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
    competitions: useRef(null),
  };

  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // State for 3D model loading
  const [modelLoaded, setModelLoaded] = useState(false);
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    // Start the 3-second timer immediately
    const timer = setTimeout(() => {
      setShowModel(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#181818] text-white font-sans overflow-x-hidden">
      <Navbar scrollToSection={scrollToSection} />
      {/* Hero Section */}
      <section ref={sectionRefs.home} className="flex flex-col md:flex-row items-center justify-between pt-32 pb-4 md:pb-16 px-4 sm:px-8 md:px-20 min-h-screen bg-[#181818]">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 flex flex-col items-start justify-center space-y-6 w-full">
            <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-500">Meet Kevin</div>
            <div className="text-2xl sm:text-3xl md:text-2xl font-medium text-white">Vehicle for RoboSub 2025</div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6 w-full">
            <Link
              to="/kevin"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 sm:px-8 py-2 text-sm sm:text-base rounded-lg shadow transition-all duration-200 text-center"
            >
              Meet Kevin
            </Link>
              <Link
                to="/robosub2025"
                className="border border-gray-400 text-gray-200 font-semibold px-4 sm:px-8 py-2 text-sm sm:text-base rounded-lg shadow transition-all duration-200 hover:bg-gray-700 text-center"
              >
              Robosub 2025
              </Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center mt-12 md:mt-0 w-full">
          {/* 3D Kevin model in a circular container */}
            <div className="w-[24rem] h-[24rem] sm:w-[24rem] sm:h-[24rem] md:w-[32rem] md:h-[32rem] lg:w-[44rem] lg:h-[44rem] rounded-full flex items-center justify-center overflow-hidden relative bg-transparent">
              {!showModel && (
                <div className="absolute inset-0 z-10">
                  <img 
                    src="/images/kevin_placeholder.png" 
                    alt="Kevin - Loading..." 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              )}
              {showModel && (
                <ErrorBoundary>
                  <Canvas 
                    camera={{ position: [0, 0, 5], fov: 50 }} 
                    style={{ background: 'transparent' }}
                    gl={{
                      antialias: false, // Disable antialiasing on mobile for performance
                      alpha: true,
                      powerPreference: "high-performance",
                      precision: "mediump", // Use medium precision for better mobile performance
                      outputColorSpace: "srgb",
                      failIfMajorPerformanceCaveat: false // Don't fail on low-end devices
                    }}
                    dpr={[0.5, 1]} // Lower DPR for mobile devices
                    shadows={false} // Disable shadows on mobile for performance
                  >
                    <Suspense fallback={<Spinner />}>
                      <ambientLight intensity={0.8} />
                      <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
                      <directionalLight position={[-5, 5, 10]} intensity={1.0} />
                      <pointLight position={[-10, -10, -10]} intensity={0.6} />
                      <pointLight position={[0, 10, 0]} intensity={0.5} />
                      <pointLight position={[5, 0, 5]} intensity={0.4} />

                      <KevinOptimized scale={[5, 5, 5]} />
                      <OrbitControls enableZoom={false} enablePan={true} />
                    </Suspense>
                  </Canvas>
                </ErrorBoundary>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Placeholder sections for navigation */}
      <section ref={sectionRefs.services} className="min-h-[500px] bg-[#1a1a1a] py-16">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 gap-8">
        {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center items-start py-8 w-full">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-8">Who are we</h2>
            <p className="text-base sm:text-lg text-white mb-6">
            Founded in 2023, Mecatron is a multidisciplinary student team from Nanyang Technological University, Singapore, driven by a passion for underwater robotics. We specialize in developing autonomous underwater vehicles (AUVs), competing in marine robotics challenges, and advancing research in the field.
          </p>
            <p className="text-base sm:text-lg text-white mb-8">
            As a student-led club, we provide a hands-on learning environment where members gain practical experience in design, programming, and engineering. Beyond innovation, we actively engage in outreach initiatives to inspire interest in marine science and technology.
          </p>
            <Link to="/team" className="text-base sm:text-lg font-semibold text-white hover:text-orange-500 transition flex items-center group">
            Meet The Team <span className="ml-2 group-hover:translate-x-1 transition-transform">&raquo;</span>
          </Link>
        </div>
        {/* Right: Carousel */}
          <div className="flex-1 flex justify-center items-center py-8 w-full">
          <TeamCarousel />
          </div>
        </div>
      </section>
      <section ref={sectionRefs.competitions} className="min-h-[500px] bg-[#181818] py-16">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 gap-8">
          {/* Right: Carousel */}
          <div className="flex-1 flex justify-center items-center py-8 w-full">
            <CompetitionsCarousel />
          </div>
        {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center items-start py-8 w-full">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-8">Competitions</h2>
            <p className="text-base sm:text-lg text-white mb-6">
            As a young and ambitious team, Mecatron competes annually in the Singapore AUV Challenge (SAUVC) and has participated in the MATE ROV competition.
          </p>
            <p className="text-base sm:text-lg text-white mb-8">
            This year, we are preparing to make our debut at RoboSub in August. These events push us to innovate, refine our underwater vehicle designs, and collaborate on cutting-edge robotics solutions.
          </p>
            <Link to="/competitions" className="text-base sm:text-lg font-semibold text-white hover:text-orange-500 transition flex items-center group">
            Learn more about our participated competitions <span className="ml-2 group-hover:translate-x-1 transition-transform">&raquo;</span>
          </Link>
        </div>

        </div>
      </section>
      <section ref={sectionRefs.about} className="min-h-[500px] bg-[#181818] py-16">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 gap-8">
        {/* Right: Text */}
          <div className="flex-1 flex flex-col justify-center items-start py-8 w-full">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-8">Our Initiatives</h2>
            <p className="text-base sm:text-lg text-white mb-8">
              We are always eager to share our work and our knowledge with the community through outreach workshops, to inspire a spirit of innovation in students. Through these workshops, we hope to spark students' interest in Marine Science & Tech; to evoke curiosity and inspire students to innovate new solutions as they explore the world beyond the school curriculum.
          </p>
            <Link to="/outreach" className="text-base sm:text-lg font-semibold text-white hover:text-orange-500 transition flex items-center group">
            Click here to view our initiative efforts <span className="ml-2 group-hover:translate-x-1 transition-transform">&raquo;</span>
          </Link>
          </div>
          {/* Left: Carousel */}
          <div className="flex-1 flex justify-center items-center py-8 w-full">
            <InitiativesCarousel />
          </div>
        </div>
      </section>
      <section ref={sectionRefs.portfolio} className="min-h-[400px] bg-[#AAAAAA] py-16">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 gap-8">
        {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center items-start py-8 text-black w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">Our Proud Sponsors</h2>
            <p className="text-sm sm:text-base md:text-lg mb-4">
              We are grateful to our sponsors for their invaluable support in shaping Mecatron's journey. Their contributions have played a vital role in advancing our projects, research, and outreach efforts.
          </p>
            <Link to="/sponsors" className="text-sm sm:text-base font-semibold hover:text-orange-500 transition flex items-center group">
            To Learn More, Click Here <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
        {/* Right: Carousel */}
          <div className="flex-1 flex justify-center items-center py-8 w-full">
          <SponsorsCarousel />
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamCarousel() {
  const images = [
    '/images/team_1.jpg',
    '/images/team_2.webp',
    '/images/team_3.jpg',
    '/images/team_4.webp',
    '/images/team_5.jpg',

    
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prev = () => setIdx((idx - 1 + images.length) % images.length);
  const next = () => setIdx((idx + 1) % images.length);
  return (
    <div className="relative w-full max-w-lg h-full flex items-center justify-center">
      <img src={images[idx]} alt="Team" className="rounded-xl object-cover w-full h-full" />
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-orange-500 text-black hover:text-white rounded-full p-2 shadow transition z-10">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-orange-500 text-black hover:text-white rounded-full p-2 shadow transition z-10">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
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

function CompetitionsCarousel() {
  const slides = [
    {
      image: '/images/sauvc2025.jpeg',
      title: '1st Place',
      subtitle: 'SAUVC 2025',
      desc: 'Following our successful debut last year, Mecatron proudly clinched 1st place at the Singapore AUV Challenge 2025!',
      link: '/sauvc2025',
    },
    {
      image: '/images/materov2024.webp',
      title: 'Finalist',
      subtitle: 'MATE ROV 2024',
      desc: 'Find out about how we conquered the MATE ROV World Championship with "Guts and Glory"!',
      link: '/materov2024',
    },
    {
      image: '/images/sauvc2024.jpg',
      title: '3rd Place',
      subtitle: 'SAUVC 2024',
      desc: 'Witness the debut of our first autonomous underwater vehicle (AUV) at the Singapore AUV Challenge.',
      link: '/sauvc2024',
    },
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prev = () => setIdx((idx - 1 + slides.length) % slides.length);
  const next = () => setIdx((idx + 1) % slides.length);
  return (
    <div className="relative w-full max-w-lg h-full flex flex-col items-center justify-center">
      <div className="relative w-full h-2/3 flex items-center justify-center">
        <img src={slides[idx].image} alt={slides[idx].subtitle} className="rounded-xl object-cover w-full h-full" />
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-orange-500 text-black hover:text-white rounded-full p-2 shadow transition z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-orange-500 text-black hover:text-white rounded-full p-2 shadow transition z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <div className="w-full bg-[#232323] rounded-xl mt-4 p-4 sm:p-6">
        <div className="text-sm font-bold text-white mb-1">{slides[idx].title}</div>
        <div className="text-xl sm:text-2xl font-extrabold text-white mb-2">{slides[idx].subtitle}</div>
        <div className="text-sm sm:text-base text-white mb-2">{slides[idx].desc}</div>
        <Link to={slides[idx].link} className="text-sm sm:text-base font-semibold text-white hover:text-orange-500 transition flex items-center group">
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

function InitiativesCarousel() {
  const slides = [
    {
      image: '/images/computervision_2.jpg',
      date: 'September 2024',
      title: 'Computer Vision Workshop',
      desc: 'Mecatron organised and held a computer vision workshop for NTU students, delivering engaging sessions on image processing, neural networks, and real-world AI applications. This workshop introduced Roboflow, guiding attendees through data collection, labeling, and training a YOLO (You Only Look Once) model for object detection.',
    },
    {
      image: '/images/marinevehicle_1.jpg',
      date: 'April 2025',
      title: 'Marine Vehicle Workshop',
      desc: 'Held in the iconic Sands Expo & Convention Center, the heart of Singapore\'s celebration of skills, creativity, and innovation, Mecatron was proud to host a hands-on Marine Engineering Workshop aimed to introduce students to the exciting world of marine engineering, highlighting its real-world relevance in fields such as Ocean waste retrieval, Underwater inspection and repair, Marine biodiversity sampling',
    },
    {
      image: '/images/blender3d_7.jpg',
      date: 'October 2024',
      title: 'Blender 3D Workshop',
      desc: 'Mecatron organized a 2 day Blender 3D workshop, providing NTU students with hands-on training in Blender basics, product design fundamentals, Materials and Texturing, Rendering etc. Whether it is for marketing, game asset creation, or simply converting an image from your head to something others can see, creating 3D content is an extremely valuable skill.',
    },
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prev = () => setIdx((idx - 1 + slides.length) % slides.length);
  const next = () => setIdx((idx + 1) % slides.length);
  return (
    <div className="relative w-full max-w-lg h-full flex flex-col items-center justify-center">
      <div className="relative w-full h-2/3 flex items-center justify-center">
        <img src={slides[idx].image} alt={slides[idx].title} className="rounded-xl object-cover w-full h-full" />
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-orange-500 text-black hover:text-white rounded-full p-2 shadow transition z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-orange-500 text-black hover:text-white rounded-full p-2 shadow transition z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <div className="w-full bg-[#232323] rounded-xl mt-4 p-4 sm:p-6">
        <div className="text-sm font-bold text-white mb-1">{slides[idx].date}</div>
        <div className="text-xl sm:text-2xl font-extrabold text-white mb-2">{slides[idx].title}</div>
        <div className="text-sm sm:text-base text-white mb-2">{slides[idx].desc}</div>
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
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); 
    return windowSize;
  };

function SponsorsCarousel() {
  const sponsors = [
    { logo: '/images/fstd_logo.png', alt: 'FSTD' },
    { logo: '/images/smf_transparent.png', alt: 'Singapore Maritime Foundation' },
    { logo: '/images/jdf_transparent.webp', alt: 'James Dyson Foundation' },
    { logo: '/images/waterlinked_transparent.svg', alt: 'Waterlinked' },
    { logo: '/images/sonardyne_transparent.svg', alt: 'Sonardyne' },
    { logo: '/images/zen4blue_logo.png', alt: 'Zen4Blue' },
    { logo: '/images/rovmaker_round.png', alt: 'ROV Maker' },
  ];

  let groupSize = 3;
  const maxStart = sponsors.length - groupSize;
  const [startIdx, setStartIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx(prev => (prev + 1) % (maxStart + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [maxStart]);

  const { width, height } = useWindowSize();
  if(width<480){
    groupSize = 1;
  }
  const visible = sponsors.slice(startIdx, startIdx + groupSize);
  while (visible.length < groupSize) visible.push(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-6">
      <div className="w-full flex flex-wrap justify-center items-center gap-6">
          {visible.map((s, i) =>
            s ? (
              <img
                key={s.alt}
                src={s.logo}
                alt={s.alt}
              className="h-28 sm:h-36 max-w-[10rem] sm:max-w-[14rem] object-contain"
              />
            ) : (
            <div key={i} className="h-28 sm:h-36 max-w-[10rem] sm:max-w-[14rem]" />
            )
          )}
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: maxStart + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setStartIdx(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
              i === startIdx ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 