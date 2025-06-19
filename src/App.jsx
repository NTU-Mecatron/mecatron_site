import { useState, useRef, useEffect, Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./scene";

gsap.registerPlugin(ScrollTrigger);


function App() {

  const mainRef = useRef(null)
  const sceneRef = useRef(null)
  const [progress, setProgress] = useState(0);

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
  }, []
  )

  return (
    <main ref={mainRef} className="overflow-x-hidden">
      <Suspense
        fallback={
          <div className="fixed inset-0 grid place-items-center bg-black text-white">
            Loading...
          </div>
        }
      >
<section className="relative grid place-items-center h-[100vh]">
  <div ref={sceneRef} className="h-[100vh] w-[100vw] text-white z-0">
    <Canvas>
      <Scene progress={progress} />
    </Canvas>
  </div>
</section>
          <section className="relative flex items-center justify-center h-[100vh]">
          {/* Lucy */}
          {progress < 0.10 && (
            <>
              <div className="fixed inset-0 bg-black/50 z-10 pointer-events-none"></div>
              <p className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-4 w-fit text-9xl font-bold text-white text-center z-20 pointer-events-none">
                Lucy
              </p>
            </>
          )}
          {/* is */}
          {progress >= 0.10 && progress < 0.15 && (
            <>
              <div className="fixed inset-0 bg-black/50 z-10 pointer-events-none"></div>
              <p className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-4 w-fit text-9xl font-bold text-white text-center z-20 pointer-events-none">
                designed
              </p>
            </>
          )}
          {/* is */}
          {progress >= 0.15 && progress < 0.20 && (
            <>
              <div className="fixed inset-0 bg-black/50 z-10 pointer-events-none"></div>
              <p className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-4 w-fit text-9xl font-bold text-white text-center z-20 pointer-events-none">
                by
              </p>
            </>
          )}
          {/* cute */}
          {progress >= 0.20 && progress < 0.35 && (
            <>
              <div className="fixed inset-0 bg-black/50 z-10 pointer-events-none" style={{
        backgroundColor: `rgba(0,0,0,${0.5 * (1 - (progress - 0.20) / 0.20)})`,
        transition: "background-color 0.2s linear"
      }}></div>
              <p className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-4 w-fit text-9xl font-bold text-white text-center z-20 pointer-events-none">
                Mecatron
              </p>
            </>
          )}
          
        </section>

        <section className=" relative flex items-center justify-evenly h-[100vh]">
          <p className="w-[50%] border-0 border-red-700"></p>

          <p className="text-white w-[50%] text-center px-4 text-4xl font-semibold">
            With 5 thrusters and impeccable design, Lucy is the ultimate
            companion for your adventures, whether on land or in the air.
          </p>
        </section>

        <section className=" relative flex items-center justify-evenly h-[100vh]">
          <p className="text-white order-1 w-[50%] text-center px-4 text-4xl font-semibold">
            Fitted with slay~ pink accents and a sleek design, Lucy can last for more than 3 hours on a single charge, making it the ROV.
          </p>
          <p className="w-[50%] order-2"></p>
        </section>

        <section className=" relative flex items-center justify-evenly h-[100vh]">
          <p className="w-[50%] border-0 border-red-700"></p>

          <p className="text-white w-[50%] text-center px-4 text-4xl font-semibold">
            The champion of SAUVC 2025, Lucy is designed to excel in underwater challenges, showcasing the pinnacle of robotic engineering.
          </p>
        </section>
      </Suspense>
    </main>
  );
}

export default App;
