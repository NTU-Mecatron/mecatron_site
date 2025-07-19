
import React, { useRef, useState } from 'react';
export default function Sauvc2024Page() {
  // return <div className="min-h-screen flex items-center justify-center text-3xl">SAUVC 2024 Page</div>;

  function Carousel() {
    const images = [
      'src/assets/sauvc_2024/images/sauvc_2024_carousel_1.jpeg',
      'src/assets/sauvc_2024/images/sauvc_2024_carousel_2.jpeg',
      'src/assets/sauvc_2024/images/sauvc_2024_carousel_3.jpeg',
      'src/assets/sauvc_2024/images/sauvc_2024_carousel_4.jpg',
    ];
    const [idx, setIdx] = useState(0);
    const prev = () => setIdx((idx - 1 + images.length) % images.length);
    const next = () => setIdx((idx + 1) % images.length);
    return (
      <div className="relative w-full max-w-xl h-auto flex items-center justify-center">
        <img src={images[idx]} alt="Team" className="rounded-xl object-cover w-full h-80" />
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
  return(
    <div className="min-h-screen bg-[#181818] text-white font-sans">
      <div className="flex flex-col md:flex-row pt-32 items-center md:justify-around text-center">
        <h1 className="flex text-lg">2024 April</h1>
        <h1 className="flex text-4xl md:text-5xl text-[#d73a1a] font-bold">Singapore AUV Challenge</h1>
      </div>
      <section className="flex justify-center items-center flex-col md:flex-row pt-10 pb-15 px-8 md:px-20 bg-[#181818]  max-w-30 min-h-30">
        <div className="pt-20 pb-10 w-full max-w-7xl">
          <img 
            src="./src/assets/sauvc_2024/images/sauvc_2024_img_1.jpeg" 
            alt="wtv" 
            className="w-auto h-auto"
          />
        </div>
      </section>
      {/* <section className="flex flex-col md:flex-row pt-10 pb-15 px-8 md:px-20 bg-[#303030] min-h-30">
        <div className="pt-20 pb-10 pl-40 ">
          <img 
            src="./src/turtle_boi.jpeg" 
            alt="wtv" 
            className="w-auto h-auto"
          />
        </div>
          <div className="pt-20 pl-20"> 
            <p className="text-lg">
              The Singapore Autonomous Underwater Vehicle Challenge (SAUVC) 2024, 
              
            </p>
            <p>
              is an international student competition which required teams globally to design and build Autonomous Underwater Vehicles (AUVs).
            </p>
            <p>
              These AUVs must navigate through controlled environments and perform tasks that mirror real-world offshore applications, 
            </p>
            <p>
              such as navigation, depth control, and underwater acoustics, providing participants with valuable experience in AUV systems engineering​.
            </p>
          </div>
        
      </section> */}

      <section class="px-8 md:px-20 py-10 bg-[#303030]">
        <div class="max-w-7xl mx-auto">

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                

                <div class="space-y-6">
                    <div class="bg-gray-800 rounded-lg p-4">
                        <img 
                            src="/src/assets/sauvc_2024/images/turtle_boi.jpeg" 
                            alt="Autonomous Underwater Vehicle" 
                            class="w-full h-auto rounded-lg object-cover"
                        />
                    </div>
                    
                    <div class="space-y-4">
                        <p class="text-gray-300 text-3xl leading-relaxed ">
                            43 teams from all around the world gathered in Singapore for the SAUVC held on 5th – 8th April 2024.
                        </p>

                        <p class="text-gray-300 text-3xl leading-relaxed">
                            <span class="font-semibold">Mecatron's AUV had the third fastest qualification timing of 10.53 seconds among</span>
                        </p>
                    </div>
                </div>
                <div class="space-y-8">
                    <div class="space-y-4">
                        <p class="text-gray-300 text-3xl leading-relaxed">
                            The Singapore AUV Challenge (SAUVC) is an exciting competition where teams build Autonomous Underwater Vehicles (AUVs).
                        </p>
                        
                        <p class="text-gray-300 text-3xl leading-relaxed">
                            These AUVs must navigate through controlled environments and perform tasks that mirror real-world offshore applications, such as navigation, depth control, and underwater acoustics, providing participants with valuable experience in AUV systems engineering.
                        </p>
                    </div>
                    <div className="md:pt-20">
                      <Carousel/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="flex flex-col md:flex-row items-center justify-between pt-10 pb-10 px-8 bg-[#303030] md:min-h-30">
      <div className="flex flex-1 flex-col md:flex-row justify-evenly items-center mt-12 md:mt-0 space-y-8 md:space-y-0 text-2xl">
        <div className="flex flex-col items-center space-y-5">
          <p className="font-bold">Day 1</p>
          <video width="300" height="600" src="src/assets/sauvc_2024/videos/VID1.mp4" controls></video> 
        </div>
        <div className="flex flex-col items-center space-y-5">
          <p  className="font-bold">Day 2</p>
          <video width="300" height="600" src="src/assets/sauvc_2024/videos/VID4.mov" controls></video> 
        </div>
        
        <div className="flex flex-col items-center space-y-5">
          <p  className="font-bold">Day 3</p>
          <video width="300" height="600" src="src/assets/sauvc_2024/videos/VID5.mov" controls></video> 
        </div>
        
      </div>
    </section>
    

    </div>
    
  );
} 