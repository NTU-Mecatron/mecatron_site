import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./scene";
import Navbar from './Navbar';
gsap.registerPlugin(ScrollTrigger);

// Tab Navigation Component (self-contained)
function TabNavigation({ sections, onTabClick, visible, onExited }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
    } else {
      setShow(false);
      const timeout = setTimeout(() => {
        if (onExited) onExited();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [visible, onExited]);

  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none w-auto px-2 sm:bottom-6 sm:px-0">
      <div
        className={`
          bg-black/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl w-auto px-4 sm:px-8 py-3
          flex space-x-2 sm:space-x-4 flex-nowrap
          transition-all duration-500 ease-out
          ${show ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
          pointer-events-auto
        `}
      >
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => onTabClick(section.id)}
            className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-white bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 text-xs sm:text-sm md:text-base font-medium border border-white/20 hover:border-white/40 hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            {section.title}
          </button>
        ))}
      </div>
    </div>
  );
}

function KevinPage() {
  const mainRef = useRef(null)
  const sceneRef = useRef(null)
  const [progress, setProgress] = useState(0);
  const [tabsVisible, setTabsVisible] = useState(false);
  const [tabsMounted, setTabsMounted] = useState(false);
  const timeoutRef = useRef(null);

  // --- Landscape orientation enforcement for mobile ---
  const [isPortrait, setIsPortrait] = useState(false);
  useEffect(() => {
    function checkOrientation() {
      const isMobile = window.innerWidth < 640;
      const isPortraitNow = isMobile && window.innerHeight > window.innerWidth;
      setIsPortrait(isPortraitNow);
    }
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  // Define sections for navigation
  const sections = [
    { id: 'intro', title: 'Intro' },
    { id: 'manoeuvrability', title: 'Manoeuvrability' },
    { id: 'energy', title: 'Energy Efficiency' },
    { id: 'simulation', title: 'Unity Simulation' },
    { id: 'mission', title: 'Mission Planner' },
    { id: 'controller', title: 'Ardusub Controller' }
  ];

  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    const sectionMap = {
      'intro': 0.05,        // Start of intro section
      'manoeuvrability': 0.33,  // Manoeuvrability section
      'energy': 0.50,       // Energy Efficiency section
      'simulation': 0.67,   // Unity Simulation section
      'mission': 0.84,      // Mission Planner section
      'controller': 0.99    // Ardusub Controller section
    };
    const targetProgress = sectionMap[sectionId];
    const totalHeight = mainRef.current?.scrollHeight - window.innerHeight;
    const targetScrollY = totalHeight * targetProgress;
    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  };

  // Handle mouse enter/leave for bottom area
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setTabsMounted(true);
    setTabsVisible(true);
    timeoutRef.current = setTimeout(() => {
      setTabsVisible(false);
    }, 4000);
  };

  const handleMouseLeave = () => {
    // Don't immediately hide tabs - let the 4-second timer handle it
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // When exit animation finishes, unmount the tab
  const handleTabExited = () => {
    setTabsMounted(false);
  };

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          setProgress(self.progress)
        }
      }
    })
    .to(sceneRef.current, {
        ease: "none",
        x: '0vw',
        y: '100vh',
      })
      .to(sceneRef.current, {
        ease: "none",
        x: '-25vw',
        y: '200vh',
      })
      .to(sceneRef.current, {
        ease: "none",
        x: '25vw',
        y: '300vh',
      })
      .to(sceneRef.current, {
        ease: "none",
        x: '-25vw',
        y: '400vh',
      })
      .to(sceneRef.current, {
        ease: "none",
        x: '25vw',
        y: '500vh',
      })
      .to(sceneRef.current, {
        ease: "none",
        x: '-25vw',
        y: '600vh',
      })
  }, []);

  return (
    <main ref={mainRef} className="overflow-x-hidden bg-black min-h-screen">
      <Navbar />
      {/* Landscape orientation overlay for mobile */}
      {isPortrait && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex flex-col items-center justify-center text-center text-white text-lg sm:text-xl md:text-2xl font-bold select-none px-4">
          <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 sm:mb-6 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M16 3l3 4-3 4"/></svg>
          Please rotate your device to landscape<br/>for the best experience.
        </div>
      )}
      {/* Static down arrow indicator for tab */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-70 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {/* Invisible hover area at bottom of screen - made larger to prevent flickering */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-20 z-40"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <Suspense
        fallback={
          <div className="fixed inset-0 grid place-items-center bg-black text-white text-sm sm:text-base">
            Loading 3D Model...
          </div>
        }
      >
        {/* Tab Navigation - appears on hover at bottom for 4 seconds, with smooth slide in/out */}
        {tabsMounted && (
          <TabNavigation
            sections={sections}
            onTabClick={scrollToSection}
            visible={tabsVisible}
            onExited={handleTabExited}
          />
        )}
        {/* 3D Scene */}
        <section className="relative grid place-items-center h-[100vh]">
          <div ref={sceneRef} className="h-[100vh] w-[100vw] text-white z-0">
            <Canvas>
              <Scene progress={progress} />
            </Canvas>
          </div>
        </section>
        {/* Scroll-based overlays and sections */}
        <section className="relative flex items-center justify-center h-[100vh]">
          {/* Lucy */}
          {progress < 0.10 && (
            <>
              <div className="fixed inset-0 bg-black/50 z-10 pointer-events-none"></div>
              <p className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-4 w-fit text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center z-20 pointer-events-none">
                Kevin
              </p>
            </>
          )}
          {/* is */}
          {progress >= 0.10 && progress < 0.15 && (
            <>
              <div className="fixed inset-0 bg-black/50 z-10 pointer-events-none"></div>
              <p className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-4 w-fit text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center z-20 pointer-events-none">
                designed
              </p>
            </>
          )}
          {/* is */}
          {progress >= 0.15 && progress < 0.20 && (
            <>
              <div className="fixed inset-0 bg-black/50 z-10 pointer-events-none"></div>
              <p className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-4 w-fit text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center z-20 pointer-events-none">
                by
              </p>
            </>
          )}
          {/* cute */}
          {progress >= 0.20 && progress < 0.30 && (
            <>
              <div className="fixed inset-0 bg-black/50 z-10 pointer-events-none" style={{
        backgroundColor: `rgba(0,0,0,${0.5 * (1 - (progress - 0.20) / 0.20)})`,
        transition: "background-color 0.2s linear"
      }}></div>
              <p className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-4 w-fit text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center z-20 pointer-events-none">
                Mecatron
              </p>
            </>
          )}
        </section>
        <section className="relative flex items-center justify-evenly h-[100vh]">
          <p className="w-[50%] border-0 border-red-700"></p>
          <div className="text-white w-[50%] text-center px-2 sm:px-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6">Manoeuvrability</h2>
            <p className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-semibold">
              Using only 6 thrusters, we are able to achieve 6-DOF control and stable depth hold for any missions.
            </p>
          </div>
        </section>
        <section className="relative flex items-center justify-evenly h-[100vh]">
          <div className="text-white order-1 w-[50%] text-center px-2 sm:px-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6">Energy Efficiency</h2>
            <p className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-semibold">
              From fully optimised 3D-printed body to computationally-cheap software approach, we focus on maximising the runtime on any given battery payload.
            </p>
          </div>
          <p className="w-[50%] order-2"></p>
        </section>
        <section className="relative flex items-center justify-evenly h-[100vh]">
          <p className="w-[50%] border-0 border-red-700"></p>
          <div className="text-white w-[50%] text-center px-2 sm:px-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6">Unity simulation</h2>
            <p className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-semibold">
              Full-fledged digital twin of Kevin enables fast software iterations and testing.
            </p>
          </div>
        </section>
        <section className="relative flex items-center justify-evenly h-[100vh]">
          <div className="text-white order-1 w-[50%] text-center px-2 sm:px-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6">BT-based mission planner</h2>
            <p className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-semibold">
              Fully reusable and customisable behavior trees to make mission planning a breeze.
            </p>
          </div>
          <p className="w-[50%] order-2"></p>
        </section>
        <section className="relative flex items-center justify-evenly h-[100vh]">
          <p className="w-[50%] border-0 border-red-700"></p>
          <div className="text-white w-[50%] text-center px-2 sm:px-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6">Ardusub Controller Stack</h2>
            <p className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-semibold">
              An extension of the traditional quadcopter controller, Ardusub allows us to control our custom thruster design and integrate additional sensors with ease and reliability.
            </p>
          </div>
        </section>
      </Suspense>
    </main>
  );
}

export default KevinPage; 