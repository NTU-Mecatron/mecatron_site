import React, { useRef, useState } from 'react';
export default function Sauvc2025Page() {
  // return <div className="min-h-screen flex items-center justify-center text-3xl">SAUVC 2025 Page</div>;
  function Carousel() {
      const images = [
        '/sauvc_2025/images/carousel/carousel_pic_1.jpg',
        '/sauvc_2025/images/carousel/carousel_pic_2.jpg',
      ];
      const [idx, setIdx] = useState(0);
      const prev = () => setIdx((idx - 1 + images.length) % images.length);
      const next = () => setIdx((idx + 1) % images.length);
      return (
        <div className="relative max-w-3xl h-[50vh] flex items-center justify-center">
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
  return(
    <div className="min-h-screen bg-[#181818] text-white font-sans">
      {/* <div className="flex pt-32 justify-around">
        <h1 className="flex text-lg">2025 March</h1>
        <h1 className="flex text-5xl text-[#d73a1a] font-bold">Singapore AUV Challenge</h1>
      </div> */}
       <div className="flex flex-col md:flex-row pt-32 items-center md:justify-around text-center">
        <h1 className="flex text-lg">2025 March</h1>
        <h1 className="flex text-4xl md:text-5xl text-[#d73a1a] font-bold">Singapore AUV Challenge</h1>
      </div>
       <section className="flex justify-center items-center flex-col md:flex-row pt-10 pb-15 px-8 md:px-20 bg-[#181818]  max-w-30 min-h-30">
        <div className="md:pt-20 pb-10 w-full max-w-7xl">
          <img 
            src="/sauvc_2025/images/sauvc_2025_img_1.jpg" 
            alt="wtv" 
            className="w-auto h-auto"
          />
        </div>
      </section>
      <section className="flex flex-col justify-start items-center pt-10 pb-15 px-8 md:px-20 bg-[#303030] min-h-screen">
        <div className="flex flex-col justify-center items-center text-center space-y-8 max-w-4xl ">
          <p className="text-4xl md:text-5xl italic font-bold text-[#d73a1a]">
          SAUVC OVERVIEW
          </p>
          <p className="text-1xl md:text-4xl leading-relaxed">
            The Singapore Autonomous Underwater Vehicle Challenge (SAUVC) 2025 represents the 10th edition of this prestigious international competition organized by the IEEE Oceanic Engineering Society’s Singapore Chapter
          </p>
          <div className="my-12 h-1 w-full bg-gradient-to-r from-transparent via-[#d73a1a] to-transparent shadow-lg shadow-[#d73a1a]/50"></div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10 pb-20 md:max-w-30 min-h-30  ">
            <div class="flex flex-col items-center">
                <div class="rounded-lg p-4">
                    <img 
                        src="/sauvc_2025/images/sauvc_2025_img_2.jpg" 
                        alt="Autonomous Underwater Vehicle" 
                        class="w-full h-auto rounded-lg object-cover"
                    />
                </div>
                
                <div>
                    <p class="text-gray-300 text-lg leading-relaxed">
                        Mecatron’s AUV (LUCY) being showcased
                    </p>
                </div>
            </div>
            <div class="space-y-8">
                <div class="space-y-4">
                    <p class="text-gray-300 text-1xl md:text-4xl leading-relaxed">
                        These AUVs must navigate through controlled environments and perform tasks that mirror real-world offshore applications, such as navigation, depth control, and underwater acoustics, providing participants with valuable experience in AUV systems engineering​.
                    </p>
                </div>
            </div>  
        </div>  
      </section>

      <section className="flex flex-col justify-start items-center pt-10 pb-15 px-8 md:px-20 bg-[#181818] min-h-screen">
        <div className="flex flex-col justify-center items-center text-center space-y-8 max-w-4xl ">
          <p className="text-4xl md:text-5xl italic font-bold text-[#d73a1a]">
          2025 SAUVC WINNERS
          </p>
          <div className="my-12 h-1 w-full bg-gradient-to-r from-transparent via-[#d73a1a] to-transparent shadow-lg shadow-[#d73a1a]/50"></div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 pt-10 pb-20 md:max-w-30 min-h-30">
            <Carousel/>
            {/* <div class="flex flex-col items-center">
                <div class="rounded-lg p-4">
                    <img 
                        src="/src/lucy_showcase.jpg" 
                        alt="Autonomous Underwater Vehicle" 
                        class="w-full h-auto rounded-lg object-cover"
                    />
                </div>
            </div> */}

            <div>
                <div class="space-y-4">
                    <p class="text-gray-300 text-1xl md:text-4xl leading-relaxed pt-8 md:pt-0">
                        50 teams from all around the world gathered in Singapore for the SAUVC held on 13th – 17th March 2025.
                    </p>
                    <p class="text-gray-300 text-1xl md:text-4xl leading-relaxed">
                      Mecatron’s AUV had the sixth fastest qualification timing of 16.90 seconds among the 20 qualified teams
                    </p>
                    <p class="text-gray-300 text-1xl md:text-4xl leading-relaxed">
                      In the end, our 11-member team proceeded to clinch the 1st prize in the final round!
                    </p>
                </div>
            </div>
        </div>
        <p class="text-gray-300 text-1xl md:text-4xl leading-relaxed pb-10">
              With our sights now set on RoboSub 2025 in California, we remain dedicated to refining our technologies and pushing the frontiers of autonomous underwater systems.
            </p>    
      </section>
      <section className="flex flex-col justify-start items-center pt-10 pb-15 px-8 md:px-20 bg-[#303030] min-h-screen">
        <div className="flex flex-col justify-center items-center text-center space-y-8 max-w-4xl ">
          <p className="text-4xl md:text-5xl italic font-bold text-[#d73a1a]">
          CHANGES SINCE 2024
          </p>
          <p className="text-1xl md:text-4xl leading-relaxed">
            Learn how Mecatron was able to clinch first place in SAUVC 2025
          </p>
          <div className="my-12 h-1 w-full bg-gradient-to-r from-transparent via-[#d73a1a] to-transparent shadow-lg shadow-[#d73a1a]/50"></div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 pt-20 pb-20 md:max-w-30 min-h-30 gap-10">
            <div class="flex flex-col items-center md:text-start" >
               <p className="text-3xl md:text-4xl italic font-bold text-[#d73a1a] text-center">
                NON-TECHNICAL CHANGES
                </p>
                <div className="my-12 h-1 w-full bg-gradient-to-r from-transparent via-[#ffffff] to-transparent shadow-lg shadow-[#d73a1a]/50"></div>
                <p className="text-1xl md:text-4xl text-white  pb-10 md:pb-20 leading-relaxed">
                Our team experienced meaningful maturation, with each member thoughtfully reflecting on previous mistakes.
                </p>
                <p className="text-1xl md:text-4xl  text-white md:pb-20 leading-relaxed  ">
                  We expanded our team size while shifting focus toward mentorship, empowering more team members to contribute effectively. Additionally, we implemented more comprehensive documentation practices and strategic planning processes.                </p>
                <div class="w-full rounded-lg p-4">
                    <img 
                        src="/sauvc_2025/images/sauvc_2025_img_4.jpg" 
                        alt="Autonomous Underwater Vehicle" 
                        class="w-auto h-auto rounded-lg object-cover"
                    />
                </div>
            </div>
            <div class="flex flex-col items-center">
              <div class="rounded-lg p-4">
                    <img 
                        src="/sauvc_2025/images/sauvc_2025_img_3.jpg" 
                        alt="Autonomous Underwater Vehicle" 
                        class="w-full h-auto rounded-lg object-cover"
                    />
                </div>
               <p className="text-4xl md:text-5xl italic font-bold text-[#d73a1a] text-center">
                TECHNICAL CHANGES
                </p>
                <div className="my-12 h-1 w-full bg-gradient-to-r from-transparent via-[#ffffff] to-transparent shadow-lg shadow-[#d73a1a]/50"></div>
                <p className="text-1xl md:ext-4xl text-white md:pb-20 leading-relaxed pb-10">
                We strategically prioritized well-established, battle-tested approaches with a strong emphasis on reliability, choosing these over more innovative but potentially unstable methods.
                </p>
                <p className="text-1xl md:text-4xl  text-white leading-relaxed">
                  We expanded our team size while shifting focus toward mentorship, empowering more team members to contribute effectively. Additionally, we implemented more comprehensive documentation practices and strategic planning processes.   
                  </p>
            </div>
        </div>

      </section>
      <section className="flex flex-col items-center pt-10 pb-10 px-8 bg-[#303030] md:min-h-30">
        <p className="text-4xl md:text-5xl italic font-bold text-[#d73a1a]">
            Watch Mecatron at SAUVC!
        </p>
        <div className="flex flex-col md:flex-row justify-around pt-10 md:pt-20 space-y-8 md:space-y-0 md:gap-20 text-2xl">
          
          <div className="flex flex-col items-center space-y-6">
            <p className="font-bold">Day 1</p>
             <video width="300" height="600" src="/sauvc_2025/videos/sauvc_2025_video_1.mp4" controls></video> 
          </div>
          <div className="flex flex-col items-center space-y-6">
            <p className="font-bold">Day 2</p>
            <video width="300" height="600" src="/sauvc_2025/videos/sauvc_2025_video_2.mp4" controls></video> 
          </div>
          
          <div className="flex flex-col items-center space-y-6">
            <p className="font-bold">Day 3</p>
            <video width="300" height="600" src="/sauvc_2025/videos/sauvc_2025_video_3.mp4" controls></video> 
          </div>
          
        </div>
      </section>  
      
      
    </div>
    
  );
} 