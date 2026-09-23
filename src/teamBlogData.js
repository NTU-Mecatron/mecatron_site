const defaultSections = (post) => [
  {
    heading: 'Overview',
    body: `${post.title} is part of Mecatron's ${post.competition === 'robotx2026' ? 'RobotX 2026' : 'RoboSub 2026'} development work. Use this section to introduce the subsystem, the problem it solves, and the design direction behind it.`
  },
  {
    heading: 'Development Notes',
    body: 'Add build notes, design decisions, screenshots, photos, test results, and lessons learned here. This reusable template is meant to stay flexible for mechanical, electrical, and software posts.'
  },
  {
    heading: 'Next Steps',
    body: 'Add the next tasks, open issues, integration checks, and follow-up experiments for this workstream.'
  }
];

const robosubPostsRaw = [
  {
    slug: 'interim-vehicle',
    title: 'Building the Interim Vehicle',
    tag: 'Mechanical',
    authors: 'Timothy, Akil',
    date: 'Oct 2025 - Feb 2026',
    image: '/images/robosub2026/mechanical-subsystems/blog0-2.jpg',
    description: "Built and tested an interim vehicle prototype to evaluate and finalize the optimal 8-thruster configuration before final production.",
    sections: [
      {
        heading: 'Interim Vehicle Build',
        layout: 'blockImageStory',
        blocks: [
          {
            body: 'We built an interim vehicle with the sole purpose of testing different thruster configurations. We used a 6 thruster configuration last year, but we were considering switching to an 8 thruster configuration this year, for greater vehicle stability and control.'
          },
          {
            images: [
              { src: '/images/robosub2026/mechanical-subsystems/blog0-1.jpg' },
              { src: '/images/robosub2026/mechanical-subsystems/blog0-2.jpg' }
            ],
            body: 'The most significant advantage of developing this interim solution was that it allowed us to determine the optimal thruster configuration before the new vehicle chassis was designed, printed and assembled. The software team could test control algorithms and evaluate the 6 vs. 8-thruster setup on the interim vehicle.'
          },
          {
            images: [
              { src: '/images/robosub2026/mechanical-subsystems/blog0-3.jpg' },
              { src: '/images/robosub2026/mechanical-subsystems/blog0-4.jpg' },
              { src: '/images/robosub2026/mechanical-subsystems/blog0-5.jpg' },
            ],
            body: 'Instead of 3D printing the entire interim vehicle frame, the vehicle was constructed with a mixture of PVC pipes, connectors and 3D printed mounts and housings. This made hardware adjustments easier, accelerating prototyping cycles.'
          },
          {
            images: [
              { src: '/images/robosub2026/mechanical-subsystems/blog0-6.gif' }
            ],
            body: 'Based on observations of the interim vehicle both in simulation and in real-life (pool testing), we decided to move from a 6-thruster configuration to an 8-thruster configuration as well as elongate the electrical housing.'
          },
        ]
      }
    ]
  },
  {
    slug: 'hydra-frame',
    title: 'Hydra Frame Development',
    tag: 'Mechanical',
    authors: 'Timothy',
    date: 'Sep 2025 - Apr 2026',
    image: '/images/robosub2026/mechanical-subsystems/blog1-1.png',
    description: "Design and build notes for Hydra's structural layout.",
    sections: [
      {
        heading: 'Hydra Frame Development',
        layout: 'subsectionImageGrid',
        subsections: [
          {
            title: 'Early Sketch of Upgraded Lucy 2025 Vehicle',
            period: 'Sep 2025 - Dec 2025',
            collapsible: true,
            body: 'Sketch indicating an adjustable electric housing within the vehicle body, to adjust centre of gravity and centre of buoyancy.',
            images: [
              { src: '/images/robosub2026/mechanical-subsystems/blog1-1.png' },
            ]
          },
          {
            title: 'First draft of Lucy Version 2 - Pufferfish',
            period: '',
            collapsible: true,
            bullets: [
              'Designed to accommodate a draft box enclosure of 250 x 150 x 150mm that will replace the cylinder hull in Lucy 2025',
              'A proposed custom battery pack (juicepack)',
              'Showcase of the 3D Render of Pufferfish'
            ],
            images: [
              {
                src: '/images/robosub2026/mechanical-subsystems/blog1-2.png'
              },           
            ]
          },
          {
            title: 'Multiple Iterations to the Final Bot Design',
            period: 'Dec 2025 - Apr 2026',
            collapsible: true,
            body: ['Despite the pufferfish-inspired design, the project was eventually archived due to several engineering and development concerns. Interim vehicle testing revealed limitations with the 6-thruster configuration, while the adjustable battery position concept proved impractical and introduced more drawbacks than benefits.', 'Additionally, tight development timelines and the risks associated with porting two in-development vehicles onto a completely new mechanical and electrical platform led the team to pivot towards a new frame design capable of housing a single electronics cylinder alongside two dedicated batteries — one for LV and one for HV systems.', 'We decided to move on with a 3-cylinder bot (1 electric housing, 2 battery cylinders).', 'The bot is ultra compact for ease of assembly and manufacturing, and its modular design makes mechanical adjustments easier and quicker.'],
          },
          {
            title: 'First draft of Hydra',
            period: '',
            collapsible: true,
            imageGrid: 'twoByTwo',
            body: [
              'Below is the first draft of Hydra.',
            ],
            images: [
              {
                src: '/images/robosub2026/mechanical-subsystems/blog1-3.png'
              },
              {
                src: '/images/robosub2026/mechanical-subsystems/blog1-4.png'
              },
              {
                src: '/images/robosub2026/mechanical-subsystems/blog1-5.png'
              },
              {
                src: '/images/robosub2026/mechanical-subsystems/blog1-6.png'
              },
            ]
          },
          {
            title: 'Thrusters configuration iterations',
            period: '',
            collapsible: true,
            imageGrid: 'comparison',
            body: [
              'Based on observations of the interim vehicle both in simulation and in real-life (pool testing), we decided to move from a 6-thruster config to an 8-thruster config as well as elongate the electrical housing.',
            ],
            images: [
              {
                src: '/images/robosub2026/mechanical-subsystems/blog1-7.png'
              },
              {
                src: '/images/robosub2026/mechanical-subsystems/blog1-8.png'
              },
            ]
          },
          {
            title: 'Modular Frame Design',
            period: '',
            collapsible: true,
            imageGrid: 'comparison',
            body: [
              'Further mechanical iterations focused on simplifying the vehicle frame and improving adjustability. The main body structure was redesigned into a lightweight two-part assembly consisting primarily of a cap and leg structure.',
              'Thruster mounts were designed to be fully modular, enabling quick repositioning and configuration adjustments without requiring major frame redesigns.',
            ],
            images: [
              {
                src: '/images/robosub2026/mechanical-subsystems/blog1-9.png'
              },
              {
                src: '/images/robosub2026/mechanical-subsystems/blog1-10.png'
              },
            ]
          },
          {
            title: 'Buoyancy and Payload Integration',
            period: '',
            collapsible: true,
            imageGrid: 'twoByTwo',
            body: [
              'During this phase, the team conducted multiple buoyancy-control iterations to optimize vehicle balance and underwater handling characteristics. Additional payload systems including the Doppler Velocity Log (DVL) dropper mechanism and manipulator gripper were integrated into the vehicle platform.',
              'Initial gripper prototypes were found to be oversized for the vehicle’s operational requirements, prompting a redesign into a more compact and efficient manipulator system.',
            ],
            images: [
              {
                src: '/images/robosub2026/mechanical-subsystems/blog1-11.png'
              },
              {
                src: '/images/robosub2026/mechanical-subsystems/blog1-12.png'
              },
              {
                src: '/images/robosub2026/mechanical-subsystems/blog1-13.png'
              },
              {
                src: '/images/robosub2026/mechanical-subsystems/blog1-14.png'
              },
            ]
          },
          {
            title: 'Final Vehicle Design',
            period: '',
            collapsible: true,
            body: [
              'The completed Hydra platform represented the culmination of multiple archived concepts, iterative subsystem testing, and extensive pool validation, resulting in a compact, modular, and competition-ready autonomous underwater vehicle.',
            ],
            images: [
              {
                src: '/images/robosub2026/mechanical-subsystems/blog1-15.png'
              },
              {
                src: '/images/robosub2026/mechanical-subsystems/blog1-16.png'
              },
              {
                src: '/images/robosub2026/mechanical-subsystems/blog1-17.png'
              },
            ]
          },
        ]
      }
    ]
  },
  {
    slug: 'kraken-frame',
    title: 'Kraken Frame Development',
    tag: 'Mechanical',
    authors: 'Yi Liang',
    date: 'Sep 2025 - May 2026',
    image: '/images/kraken_updated.jpg',
    description: "Development notes for Kraken's experimental frame and structural concept.",
    sections: [
      {
        heading: 'Kraken Frame Development',
        layout: 'subsectionImageGrid',
        subsections: [
          {
            title: 'First Assignment for Our Second Vehicle',
            period: 'Sep 2025',
            collapsible: true,
            imagePosition: 'aboveHighlights',
            body: 'The first design assignment explored the overall visual and structural direction for Mecatron’s second vehicle.',
            highlights: [
              {
                label: 'Design Inspiration: The Diplocaulus',
                body: 'The bot’s profile is inspired by a prehistoric amphibian called Diplocaulus—the head shape is almost identical. Since I’m a fan of dinosaur games and this is one of my favorite ancient creatures, it felt like the perfect starting point for the aesthetic.'
              },
              {
                label: 'Conceptual Views',
                body: 'Included are some sketches of isometric and orthogonal (top-down) views that illustrate the basic concept.'
              }
            ],
            images: [
              { src: '/images/robosub2026/mechanical-subsystems/blog2-1.png', caption: 'Task assigned to Mechanical Members.' },
              { src: '/images/robosub2026/mechanical-subsystems/blog2-2.jpg', caption: '"Student\'s Response" - Sketch of the skeletal frames.' }
            ]
          },
          {
            title: 'Design Evolution',
            period: 'Sep 2025',
            collapsible: true,
            body: 'After some discussion, we decided to pivot toward a more "squarish" design for our second vehicle. We realized that a curved body would make the internal skeleton significantly harder to manufacture, so the boxier frame is a more practical approach for production.',
          },
          {
            title: 'First CAD Iteration of the Bot',
            period: 'Oct 2025',
            collapsible: true,
            body: 'The whole bot was modeled as a single part to demonstrate the overall shape of the vehicle.',
            images: [
              { src: '/images/robosub2026/mechanical-subsystems/blog2-3.png' },
              { src: '/images/robosub2026/mechanical-subsystems/blog2-4.png' }
            ]
          },
          {
            title: 'First Iteration of Bot Skeleton',
            period: 'Nov 2025',
            collapsible: true,
            body: 'Arthur developed the initial prototype of the skeletal frame. Upon review, the design was deemed oversized for our requirements, and the bottom compartment was found to be redundant. This led the team to streamline the skeletal frame for the next iteration.',
            images: [
              { src: '/images/robosub2026/mechanical-subsystems/blog2-5.png' }
            ]
          },
          {
            title: 'Second Iteration of Bot Skeleton',
            period: 'Dec 2025',
            collapsible: true,
            imageGrid: 'twoByTwo',
            body: [
              'A new skeletal frame iteration set the current design direction. It featured significantly extended wings while maintaining the original body size. After discussion, the team decided the overall width was still too large and should be reduced to achieve a more compact form factor.',
              'Acrylic was chosen for the skeletal frame because it offers superior structural integrity while remaining easy to modify in-house for highly cost-effective and rapid prototyping cycles, compared to previous 3D-printed load-bearing structures.'
            ],
            images: [
              { src: '/images/robosub2026/mechanical-subsystems/blog2-6.png', caption: 'Second iteration of Kraken’s skeletal frame.' },
              { src: '/images/robosub2026/mechanical-subsystems/blog2-7.jpg', caption: 'Discussions on making the vehicle body more compact without modifying the vehicle’s wing dimensions.' },
              { src: '/images/robosub2026/mechanical-subsystems/blog2-8.jpg', caption: 'Conceptual positioning of a pair of bot legs, which should contain two battery cylinders.' },
              { src: '/images/robosub2026/mechanical-subsystems/blog2-9.jpg', caption: 'View showing the electrical enclosure within the bot frames.' }
            ]
          },
          {
            title: 'First Design for Kraken’s Nose',
            period: 'Jan 2026',
            collapsible: true,
            body: 'The nose will be equipped with a forward-facing camera.',
            images: [
              { src: '/images/robosub2026/mechanical-subsystems/blog2-10.jpg' }
            ]
          },
          {
            title: 'Iterative Adjustments to Kraken’s Skeletal Frame',
            period: 'Feb - Mar 2026',
            collapsible: true,
            body: 'Following iterative adjustments to the acrylic skeletal frame, the current design features a narrowed chassis with the electrical enclosure centrally positioned.',
            images: [
              { src: '/images/robosub2026/mechanical-subsystems/blog2-11.jpg' }
            ]
          },
          {
            title: 'Extensive Design Iterations on the Bot’s Shell',
            period: 'Mar - Apr 2026',
            collapsible: true,
            blocks: [
              {
                images: [
                  { src: '/images/robosub2026/mechanical-subsystems/blog2-12.png', caption: 'Isometric view.' },
                  { src: '/images/robosub2026/mechanical-subsystems/blog2-13.png', caption: 'Orthogonal view.' },
                  { src: '/images/robosub2026/mechanical-subsystems/blog2-14.png', caption: 'Electrical enclosure within the bot frame.' },
                ],
                body: 'To optimize hydrodynamic performance, the skeletal frame will be enveloped by a streamlined, 3D-printed shell for improved hydrodynamic movement. The current model, shown in the isometric view below, is not yet the final version; subsequent refinements will focus on reducing the wing thickness and lowering the height of the main body.'
              },
              {
                images: [
                  { src: '/images/robosub2026/mechanical-subsystems/blog2-15.png' }
                ],
                body: 'By mid-April, the nose design changed slightly. The team settled on the main body final dimensions, decreasing the height by around 30%, and the wing became significantly thinner compared to the earlier version.'
              },
              {
                body: 'The CAD model above illustrates the bot without its external hull to highlight the integrated electrical enclosure; by mounting the enclosure through the primary skeleton, we have optimized access to internal components while simultaneously redesigning the upper frame to accommodate this new configuration.'
              }
            ]
          },
          {
            title: 'Finalized Frame and Mounted Legs',
            period: 'End Apr 2026',
            collapsible: true,
            body: 'The team finalized the frame design and mounted a pair of legs, with the battery enclosure positioned below the main body.',
            images: [
              { src: '/images/robosub2026/mechanical-subsystems/blog2-16.png' },
              { src: '/images/robosub2026/mechanical-subsystems/blog2-17.png' }
            ]
          },
          {
            title: 'Bot is officially named Kraken!',
            period: 'May 2026',
            collapsible: true,
            body: 'Current work ongoing involve only minor adjustments  to the bot, such as modifying the bot’s nose to accommodate the placement the torpedo launcher.',
            images: [
              { src: '/images/robosub2026/mechanical-subsystems/blog2-18.png' }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'electronics-enclosure-cnc-box',
    title: 'Custom Machined Box Enclosure & Pseudo-Hotswappable Electronics Enclosure',
    tag: 'Mechanical',
    authors: 'Maximus, Akil',
    date: 'Nov 2025 - Mar 2026',
    image: '/images/robosub2026/mechanical-subsystems/blog3-1.jpg',
    description: 'Internal notes on the CNC electronics enclosure design, manufacturing, and fit checks.',
    sections: [
      {
        heading: 'CNC Electronics Enclosure Development',
        layout: 'subsectionImageGrid',
        subsections: [
          {
            title: 'Motivations for Designing a Custom Machined Aluminum Main Hull',
            period: 'Nov 2025',
            body: 'The transition from a cylindrical main hull for key electrical systems to a custom machined aluminum electrical enclosure was a conscious engineering decision made with the purpose of maximising space efficiency, modularity and ease of maintenance. We set out to achieve this for two reasons.',
            highlights: [
              {
                label: 'Reduce Vehicle Weight',
                body: 'To reduce the weight of our vehicle by reducing buoyancy brought forth from the large volumetric displacement of a traditional cylindrical hull, in turn cutting the mass needed to maintain neutral buoyancy.'
              },
              {
                label: 'Improve Electrical Maintainability',
                body: 'To build the foundation of an electrical system layout that is easy to modify and maintain by creating swappable mounting plates that can be freely removed and worked on without space constraints.'
              }
            ],
            images: [
            ]
          },
          {
            title: 'Developing the First Version of the Custom Enclosure',
            period: 'Dec 2025',
            collapsible: true,
            blocks: [
              {
                images: [
                  { src: '/images/robosub2026/mechanical-subsystems/blog3-1.jpg' },
                  { src: '/images/robosub2026/mechanical-subsystems/blog3-2.jpg' }
                ],
                body: 'First iterations of the CAD design for the custom enclosure involved rough estimations of the required dimensional space for electrical assembly of our core components. To improve space efficiency and utilisation, vertical mounting layout of components was experimented with to evaluate the feasibility of a layered electrical layout. To maintain a compact hull, a 250 x 150 x 150mm aluminium enclosure was designed with 10mm thick walls to enclose mission critical equipment.'
              },
              {
                images: [
                  { src: '/images/robosub2026/mechanical-subsystems/blog3-3.png' }
                ],
                body: 'Combining the use of a face and axial o-ring seal to create the essential waterproof seal to protect internal components was first considered as a compromise between the reliability of a double axial seal enclosure and the convenience of installation using a face seal. By maintaining 2 types of o-ring seals, a safety net can be maintained when one seal fails.'
              },
              {
                images: [
                  { src: '/images/robosub2026/mechanical-subsystems/blog3-4.jpg' },
                  { src: '/images/robosub2026/mechanical-subsystems/blog3-5.png' }
                ],
                body: 'Testing of the seal using a 3D printed mockup of the box enclosure however proved that the clamp system meant to secure the enclosure was unable to provide enough force to maintain a viable face seal with the enclosure. A quick mockup also allowed us to verify the viability of the space allowance for our electrical components.'
              },
              {
                images: [
                  { src: '/images/robosub2026/mechanical-subsystems/blog3-6.jpg' },
                  { src: '/images/robosub2026/mechanical-subsystems/blog3-7.png' }
                ],
                body: 'The electronics enclosure is developed in parallel to provide a platform for our electrical team to build and maintain our electrical subsystems with complete freedom.Electronic “plates” are designed to be pulled out of a rail mount that can be freely worked on.'
              },
              {
                images: [
                  { src: '/images/robosub2026/mechanical-subsystems/blog3-8.jpg' }
                ],
                body: 'A mockup featuring a 3D-printed partial prototype of the proposed box enclosure and electronics bay gave a brief insight into the assembly process.'
              },
              {
                images: [
                  { src: '/images/robosub2026/mechanical-subsystems/blog3-9.png' }
                ],
                body: 'The o-ring groove design was revised to feature 2 axial seal o-rings, maximizing the pressure rating the enclosure is able to withstand.'
              },
              {
                images: [
                  { src: '/images/robosub2026/mechanical-subsystems/blog3-10.png' }
                ],
                body: 'Finite Element Analysis (FEA) was carried out to verify that the new enclosure is able to handle hydrostatic pressure demands expected of mission requirements.'
              }
            ],
          },
          {
            title: 'Fabricating the Custom Enclosure - First Version',
            period: 'Jan 2026',
            collapsible: true,
            blocks: [
              {
                images: [
                  { src: '/images/robosub2026/mechanical-subsystems/blog3b-1.jpg' }
                ],
                body: 'The first iteration of the new custom enclosure approach was fabricated to verify the effectiveness of the current design approach we have chosen to adopt and identify problems with assembly and implementation into Kraken’s mainframe.'
              },
              {
                images: [
                  { src: '/images/robosub2026/mechanical-subsystems/blog3b-2.jpg' },
                  { src: '/images/robosub2026/mechanical-subsystems/blog3b-3.jpg' }
                ],
                body: 'Integrating the electronics bay with the new custom aluminium chassis required highly intentional wire routing to ensure good cable management. It proved to be incredibly helpful to our electrical engineers for clear cable routing that is easy to maintain and troubleshoot.'
              },
              {
                images: [
                  { src: '/images/robosub2026/mechanical-subsystems/blog3b-4.png' },
                  { src: '/images/robosub2026/mechanical-subsystems/blog3b-5.png' }
                ],
                body: 'Initially we developed a flat stand to hold the electronics bay on top of the aluminium enclosure, but after feedback from our hardware engineers, we designed an adjustable stand which can either be laid flat or rotated at an angle to provide easier access to the components and penetrators underneath.'
              },
            ]
          },
          {
            title: 'Upgrades for the Next Version of the Custom Enclosure',
            period: 'Mar 2026',
            collapsible: true,
            blocks: [
              {
                images: [
                  { src: '/images/robosub2026/mechanical-subsystems/blog3c-1.png' },
                  { src: '/images/robosub2026/mechanical-subsystems/blog3c-2.png' }
                ],
                body: 'Other feedback received while working with this new platform included the lack of visibility of internal systems to verify hardware system integrity and status, active maintenance was also a challenge with the box enclosure design as it involved extensive manpower and effort to open and close the box enclosure. So to streamline the maintenance process, the o-ring groove lid design was reengineered to utilise minimal tools and manpower by taking advantage of a o-ring face seals and a new windowed lid to alleviate the challenges faced by the team.'
              },
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'gripper',
    title: 'In-House CNC Aluminum Anodization Attempt',
    tag: 'Mechanical',
    authors: 'Arthur',
    date: 'Mar 2026',
    image: '/images/robosub2026/mechanical-subsystems/cnc.png',
    description: 'A diary note on our attempt to anodize Hydra electrical enclosure endplate material in-house.',
    sections: [
      {
        heading: 'Anodization Diary',
        layout: 'diaryPages',
        entries: [
          {
            date: '1 Mar 2026',
            weather: 'Cloudy',
            shortTitle: 'In-House Aluminum Anodization Attempt',
            body: 'Today we attempted to anodize our own aluminum plate, which would be used as an endplate for Hydra’s electrical enclosure. This was done by creating an acidic electrolyte solution using vinegar as the acid and aluminum foil on the cathode. Initially, the anodized layer formed very smoothly on the component surface, but after 30 minutes the surface roughness became extremely high, compromising sealing. This is likely due to vinegar being an inadequate electrolyte. After this experiment, we concluded that we will likely get an external company to handle anodization.',
            images: [
              {
                src: '/images/robosub2026/mechanical-subsystems/cnc.png',
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'acoustics',
    title: 'Acoustics',
    tag: 'Electrical',
    authors: 'Arthur',
    date: 'Feb 2026 - May 2026',
    image: '/images/robosub2026/electrical-subsystems/acoustics-blog-1.jpg',
    description: 'Developed and validated the vehicle’s acoustic subsystem through hydrophone testing, underwater transmission experiments, full-system integration, and pool-based acoustic profiling.',
    sections: [
      {
        heading: 'Acoustics Development Diary',
        layout: 'diaryPages',
        entries: [
          {
            date: '19 Feb 2026',
            weather: 'Sunny',
            shortTitle: 'Setting up hydrophone and pre-amplifier circuits',
            body: 'Today I started work on hooking up a circuit to analyze the output of the hydrophones. It comprises a hydrophone, pre-amplifier and a 9-volt power supply. The amplified output signal was then sampled by our lab oscilloscope which is also able to do Fast Fourier Transform (FFT) to display the frequencies detected by the hydrophone. In this test, we used the pinger at 20-45kHz in 5kHz increments as the signal source. The hydrophone was able to pick up these frequencies easily.',
            images: [
              {
                src: '/images/robosub2026/electrical-subsystems/acoustics-blog-1.jpg',
              }
            ]
          },
          {
            date: '25 Feb 2026',
            weather: 'Cloudy',
            shortTitle: 'Testing of buzzer as acoustic transmitter',
            body: 'Today I tested the piezo-tranducer buzzers which we believe were most suitable for transmitting acoustic waves underwater. We generated an acoustic signal by generating a square wave signal with a teensy which translated to vibrations on the buzzer, generating a tone. The test was successful and we were able to detect a very strong signal from the hydrophone even without an amplifier. We did notice that upon initial submersion, air bubbles in the buzzer generated many stray frequencies and harmonics but these mostly cleared up with prolonged submersion. We tried to generate waves in the water to mimic those seen in the pool and they seem to have minimal impact on the performance of the system.',
            images: [
              {
                src: '/images/robosub2026/electrical-subsystems/acoustics-blog-2.gif',
              }
            ]
          },
          {
            date: '12 Mar 2026',
            weather: 'Rainy',
            shortTitle: 'Pool validation',
            body: 'Today we did pool test validation of the acoustic system. I have hooked up a prototype system on the receiver end including a teensy for data acquisition. Initial tests in the lab pool showed that this setup was able to detect the pinger signal very strongly. I brought the set up to the pool to see the range of the system. The test showed that the system is able to receive the pinger signal from up to 20m away.',
            images: [
              {
                src: '/images/robosub2026/electrical-subsystems/acoustics-blog-3.png',
              }
            ]
          },
          {
            date: '23 Apr 2026',
            weather: 'Sunny',
            shortTitle: 'Cylinder and Vehicle integration',
            body: 'Today I completed the final electrical setup for the acoustic system which was integrated into a cylinder. Power was provided by the main vehicle power distribution unit. I also tested serial communication with the Jetson computer in the main vehicle cylinder. Tests were all successful.',
            images: [
              {
                src: '/images/robosub2026/electrical-subsystems/acoustics-blog-4.jpg',
              }
            ]
          },
          {
            date: '2 May 2026',
            weather: 'Cloudy',
            shortTitle: 'Acoustic profiling of pool environment',
            body: 'Today I completed acoustic profiling of the pool environment with the vehicle running. The tests showed that the pool environment has a lot of acoustic noise below 5kHz and the thrusters generated a lot of noise between 20-25kHz depending on the rotation speed. Hence these channels must be avoided when I implement acoustic communication.',
            images: [
              {
                src: '/images/robosub2026/electrical-subsystems/acoustics-blog-5.jpg',
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'dropper',
    title: 'Electromagnetic Dropper Iterations',
    tag: 'Mechanical',
    authors: 'Gerardo',
    date: 'Nov 2025 - Jun 2026',
    image: '/images/robosub2026/mechanical-subsystems/dropper1.png',
    description: 'Development notes for the dropper mechanism, mounting, and testing workflow.',
    sections: [
      {
        heading: 'Final Dropper Design',
        body: 'Hydra integrates an electromagnetic marker delivery system to ensure reliable actuation. For operational safety and power efficiency, the 12V electromagnet is kept in an unpowered state. Deployment is achieved by activating the circuit to electromagnetically repel the marker. The electromagnet is housed within a custom 3D-printed encasing and directly attached to the main body of Hydra. A PVC tube routes the electromagnet cables to the actuator cylinder while maintaining strain relief and waterproofing. Finally, the dropper housing is entirely filled with epoxy, providing absolute waterproofing for the electromagnet and improving longevity and reliability.',
        images: [
          {
            src: '/images/robosub2026/mechanical-subsystems/dropper2.png',
            caption: ''
          }
        ]
      },
      {
        heading: 'Final Marker Design',
        body: 'To optimize aerodynamic stability and reduce unintended pitch or roll during descent, the marker uses a torpedo shape with a low center of gravity. This is achieved through an integrated cavity and strategically placed tungsten weights, improving trajectory precision. The marker also includes 2 mm deep helical grooves and protruding wings to create axial spin, helping it travel straight during deployment. A high-strength neodymium magnet is embedded within the marker to enable secure passive magnetic coupling with the AUV’s unpowered electromagnet.',
        images: [
          {
            src: '/images/robosub2026/mechanical-subsystems/marker-red.png',
            caption: ''
          }
        ]
      },
      {
        heading: 'Overview of the 6 Dropper Iterations',
        body: 'The dropper design evolved through six iterations, moving from a dual electromagnet enclosure toward a more serviceable, waterproof, and marker-specific final system.',
        layout: 'sideImageAccordion',
        images: [
          {
            src: '/images/robosub2026/mechanical-subsystems/dropper1.png',
          }
        ],
        items: [
          {
            title: 'Iteration 1: Dual Dropper In-Wall Cable Gland System',
            details: [
              {
                label: 'Initial Task',
                body: 'Design an electromagnet enclosure with waterproofing and strain relief system.'
              },
              {
                label: 'Mechanism',
                body: 'A standard dual electromagnet housing with an in-wall cable gland system for strain relief, located at the lid of the enclosure.'
              }
            ]
          },
          {
            title: 'Iteration 2: Dual Dropper Internal Cable Gland System',
            details: [
              {
                label: 'Challenge',
                body: 'The previous design had very thin walls and was space inefficient.'
              },
              {
                label: 'Solution',
                body: 'Designed an internal cable gland system with 4 mm encasing wall thickness.'
              }
            ]
          },
          {
            title: 'Iteration 3: Individual Dropper Enclosure with Cable Gland',
            details: [
              {
                label: 'Concept',
                body: 'Designed an individual encasing to house each electromagnet for easier repairability.'
              },
              {
                label: 'Design',
                body: 'Two enclosures are printed and used for each electromagnet, then attached to a custom mount on the main body of Hydra.'
              }
            ]
          },
          {
            title: 'Iteration 4: Individual Dropper Enclosure with Full Epoxy Penetrator',
            details: [
              {
                label: 'Challenge',
                body: 'Field testing revealed that the traditional cable gland system provided unreliable waterproofing.'
              },
              {
                label: 'Solution',
                body: 'Upgraded to a fully epoxied penetrator design. The cables are sealed inside a plastic tube that routes directly into the actuator cylinder, improving ingress protection and system longevity. The enclosure is also entirely epoxied for longevity and corrosion protection.'
              }
            ]
          },
          {
            title: 'Iteration 5: Optimized Individual Dropper Enclosure with Full Epoxy Penetrator',
            details: [
              {
                label: 'Space Optimization',
                body: 'The fourth design was further trimmed to minimize horizontal space, becoming the fifth design.'
              }
            ]
          },
          {
            title: 'Iteration 6: Torpedo Marker Dropper (Final Design)',
            details: [
              {
                label: 'Design',
                body: 'The previous design was modified to hold the torpedo-shaped marker.'
              }
            ]
          }
        ]
      },
      {
        heading: 'Marker Design & Parameter Tuning',
        body: 'To ensure an accurate and consistent release, the physical properties of the marker and the magnetic distance were tested and optimized.',
        images: [
          {
            src: '/images/robosub2026/mechanical-subsystems/marker2.jpg',
            caption: ''
          }
        ],
        items: [
          {
            title: 'Weight Distribution & Stability',
            details: [
              {
                label: 'Design Concept',
                body: 'Integration of a high-density tungsten core and an inner cavity into the marker.'
              },
              {
                label: 'Objective',
                body: "Drastically lower the marker's center of gravity."
              },
              {
                label: 'Outcome',
                body: 'The lowered center of gravity improves marker stability through the fluid column or air, improving drop accuracy while making the marker more resistant to rolling or tumbling.'
              }
            ]
          },
          {
            title: 'Magnetic Distance Calibration',
            details: [
              {
                label: 'Purpose',
                body: 'Finding the exact distance between the electromagnet and marker was critical to prevent pre-release when the distance is too far, or failure to drop when the distance is too close.'
              },
              {
                label: 'Testing Range Evaluated',
                body: '0.5, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, and 1.5 mm.'
              },
              {
                label: 'Optimal Parameter',
                body: '1.0 mm.'
              },
              {
                label: 'Rationale',
                body: 'Testing showed that a 1 mm air gap is the optimal threshold. It balances the magnetic holding strength required to secure the heavy tungsten marker during transit while ensuring immediate and reliable detachment upon actuator release.'
              }
            ]
          },
          {
            title: 'Rifling Mechanism',
            details: [
              {
                label: 'Purpose',
                body: 'To support an accurate and straight trajectory as the marker is deployed from the dropper, a hydrodynamic rifling mechanism is integrated into the marker design.'
              },
              {
                label: 'Design Concept',
                body: "Integration of 2 mm deep helical grooves and protruding wings along the marker's exterior."
              },
              {
                label: 'Objective',
                body: 'Channel the relative fluid flow during deployment, converting linear drag into torque that initiates axial rotation.'
              },
              {
                label: 'Outcome',
                body: 'The marker is forced into controlled axial rotation by fluid resistance against the grooves and wings. This spin stabilizes hydrodynamic imbalance and keeps the marker aligned with its intended trajectory.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'torpedo',
    title: 'Torpedo Design Progress',
    tag: 'Mechanical',
    authors: 'Akil',
    date: 'Jan 2026',
    image: '/images/robosub2026/mechanical-subsystems/torpedo1.png',
    description: 'Design progress notes for the torpedo launcher, moving from friction-based retention toward a mechanical lock.',
    sections: [
      {
        heading: 'Torpedo Design Progress',
        layout: 'versionedRows',
        versions: [
          {
            title: '2025 Version',
            subtitle: 'For RoboSub 2025',
            body: 'Used frictional fit to hold the torpedo in place and prevent it from being released when unactivated. The propeller was also placed at the front.',
            details: [
              {
                label: 'Problem',
                body: 'The torpedo launcher held the torpedo in place by pure friction. Over several uses, the plastic 3D print would deform and the friction force would decrease, potentially allowing the torpedo to launch prematurely.'
              },
              {
                label: 'Solution',
                body: 'Try a 3D printed arc spring based friction approach, so that even when the spring deforms it provides a minimum friction force.'
              }
            ],
            images: [
              {
                src: '/images/robosub2026/mechanical-subsystems/torpedo2025.png',
              }
            ]
          },
          {
            title: 'Version 1',
            subtitle: 'March 2026',
            body: 'Developed a 3D printed friction fit mechanism aimed to provide enough friction force to hold the torpedo in place when unactivated, while remaining low enough to allow the torpedo to overcome it during launch.',
            details: [
              {
                label: 'Problem',
                body: 'The 3D printed spring had flexibility issues as the print was too rigid and brittle. Not suitable for friction lock.'
              },
              {
                label: 'Solution',
                body: 'Try a mechanical lock method instead of a friction fit mechanism to hold the torpedo in place inside the launcher.'
              }
            ],
            images: [
              {
                src: '/images/robosub2026/mechanical-subsystems/torpedo-v1.png',
              }
            ]
          },
          {
            title: 'Version 2',
            subtitle: 'May 2026',
            body: 'Developed a mechanical lock using a T8 nut and T8 lead screw to securely hold the torpedo in place.',
            details: [
              {
                label: 'Mechanism',
                body: 'The propeller is placed at the back of the torpedo. The T8 nut is attached to the propeller and the T8 lead screw is attached to the launcher. When the torpedo is activated, the propeller rotates the nut and unscrews it from the screw first. Once unscrewed, the propeller drives the torpedo forward towards the target.'
              }
            ],
            images: [
              {
                src: '/images/robosub2026/mechanical-subsystems/torpedo1.png'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'pdu-pcb',
    title: 'Design and Testing of Power Systems',
    tag: 'Electrical',
    authors: 'Scott',
    date: 'Jan 2026',
    image: '/images/robosub2026/electrical-subsystems/blog8-2.png',
    description: 'Power distribution unit PCB notes, including design intent, bring-up, and testing.',
    sections: [
      {
        heading: 'Power System Design',
        layout: 'blockImageStory',
        blocks: [
          {
            images: [
              { src: '/images/robosub2026/electrical-subsystems/blog8-1.png' },
              { src: '/images/robosub2026/electrical-subsystems/blog8-2.png' }
            ],
            body: 'In early iterations of our Power Distribution Units (PDUs), each electrical subsystem, then LV and HV, now CESS and AESS, used custom-designed boards tailored to specific needs such as voltage regulation or high-power thruster outputs. To reduce complexity and improve modularity, we introduced a shared, monitored PDU in December 2025, alongside a dedicated actuator board capable of delivering power to actuators on command.'
          },
          {
            images: [
              { src: '/images/robosub2026/electrical-subsystems/blog8-3.png' },
              { src: '/images/robosub2026/electrical-subsystems/blog8-4.gif' }
            ],
            body: 'These prototypes informed the development of our final modular base PDU (PDUC) in February 2026, which features on-board power monitoring, modular daughterboards for regulation and actuation, breakout power outputs, and an increased power bandwidth from 30A to 50A.'
          },
          {
            images: [
              { src: '/images/robosub2026/electrical-subsystems/blog8-5.png' }
            ],
            body: 'We also upgraded battery protection by replacing a simple inline fuse with a dedicated BMS board, ReRoute, providing layered overcurrent, overvoltage, and undervoltage protection. This improvement was driven by real-world faults encountered during RoboSub 2025.'
          }
        ]
      }
    ]
  },
  {
    slug: 'acoustics-pcb',
    title: 'In-House Development of Acoustics Systems',
    tag: 'Electrical',
    authors: 'Scott',
    date: 'Jan 2026',
    image: '/images/robosub2026/electrical-subsystems/blog9-4.png',
    description: 'Developed the acoustics system from a COTS-based prototype into a compact integrated platform with onboard MCU processing.',
    sections: [
      {
        heading: 'Acoustics System Design',
        layout: 'blockImageStory',
        blocks: [
          {
            images: [
              { src: '/images/robosub2026/electrical-subsystems/blog9-1.png' },
            ],
            body: 'In the initial iteration of our acoustics system, we leveraged a commercial off-the-shelf (COTS) preamplifier paired with a custom-designed power amplifier. The amplified signal was fed into a Teensy MCU for data acquisition, while a separate single-board computer (SBC) handled time-difference-of-arrival (TDoA) processing.'
          },
          {
            images: [
              { src: '/images/robosub2026/electrical-subsystems/blog9-2.png' },
            ],
            body: 'As the system matured, we re-architected the software to shift all signal processing and calculations onto the MCU itself. This edge-based approach significantly reduced both computational load and data transmission overhead, resulting in a more efficient and streamlined system.'
          },
          {
            images: [
              { src: '/images/robosub2026/electrical-subsystems/blog9-3.png' },
              { src: '/images/robosub2026/electrical-subsystems/blog9-4.png' },
            ],
            body: 'To support this transition, we designed multiple development boards that integrated the acoustic power stage, preamplifier, and tone decoder. These development kits were designed to interface with different microcontroller platforms, including Teensy and ESP32, resulting in three distinct devkit variants. The final production design builds upon these development platforms, consolidating the full system into a compact, self-enclosed cylindrical form factor.'
          }
        ]
      }
    ]
  },
  {
    slug: 'power-line-communication',
    title: 'Validation of Power Line Communication Module for Tether Communication',
    tag: 'Software',
    authors: 'Luc',
    date: 'Dec 2025',
    image: '/images/robosub2026/software-subsystems/blog9a-1.jpg',
    description: 'Validation notes for upgrading tether communication from raw Ethernet to Power Line Communication.',
    sections: [
      {
        heading: 'Power Line Communication Validation',
        layout: 'versionedRows',
        versions: [
          {
            title: 'Upgrading Our Tether Connection: From Raw Ethernet to PLC',
            subtitle: 'Motivation',
            body: 'Standard baseband Ethernet architectures suffer from severe attenuation and substantial bitrate degradation over extended transmission distances. To mitigate this signal loss, we evaluated a Power Line Communication (PLC) module. By utilizing active voltage modulation, the PLC protocol enables robust high-frequency signal propagation over long-distance tethers.',
            details: [],
            images: [
              {
                src: '/images/robosub2026/software-subsystems/blog9a-1.jpg',
              }
            ]
          },
          {
            title: 'The Testing Set-Up',
            subtitle: 'Validation method',
            body: 'The test setup was designed to evaluate whether PLC could reliably support real-time video transmission across the tether.',
            details: [
              {
                label: 'Hardware',
                body: 'Direct tethered connection between the Jetson Orin NX and a host computer.'
              },
              {
                label: 'Payload',
                body: 'Real-time camera video stream.'
              },
              {
                label: 'Metrics',
                body: 'Quantitative bitrate (Mbps) and qualitative visual lag/smoothness of the camera feed observable from the host computer screen.'
              }
            ],
            images: [
              {
                src: '/images/robosub2026/software-subsystems/blog9a-2.jpg',
              }
            ]
          },
          {
            title: 'Key Findings',
            subtitle: 'Bandwidth and performance',
            body: 'Transitioning to the PLC protocol yielded an approximately 10-fold increase in available bandwidth, elevating sustained bitrate from ~10 Mbps to ~100 Mbps.',
            images: [
              {
                src: '/images/robosub2026/software-subsystems/blog9a-3.gif',
                caption: 'At maximum bandwidth utilization, the system successfully sustained a smooth 1920 x 1080 Full HD video stream at 15 fps without transport-layer degradation or observable frame drops.'
              },
              {
                src: '/images/robosub2026/software-subsystems/blog9a-4.gif',
                caption: 'At a resolution of 640 x 480 VGA, the system demonstrated highly stable, low-latency performance while maintaining a standard fluid frame rate of 30 frames per second.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'software-different-stack-experiment',
    title: 'Experimenting with Different Navigation Stacks',
    tag: 'Software',
    authors: 'Poh Hian',
    date: 'Jan 2026',
    image: '/images/robosub2026/software-subsystems/spatial-perception.png',
    description: 'The team evaluated three navigation stacks: Aerostack2, a custom in-house implementation, and Nav2.',
    sections: [
      {
        heading: 'Stack Comparison',
        layout: 'versionedRows',
        hideImages: true,
        versions: [
          {
            title: 'Aerostack2',
            subtitle: 'Autonomous aerial robotics stack',
            body: 'Aerostack2 provides software components for autonomous aerial robotics, including state estimation and motion control. Its native six degrees of freedom (6-DOF) align with Autonomous Underwater Vehicle (AUV) kinematics, facilitating potential application.',
            details: [
              {
                label: 'Limitation',
                body: 'The stack remains in early-stage development, features limited planners and controllers, lacks robust community support, and requires significant modification for system integration.'
              }
            ],
            images: []
          },
          {
            title: 'Custom In-House Stack',
            subtitle: 'Full system ownership',
            body: 'Developing a custom in-house stack ensures complete system compatibility.',
            details: [
              {
                label: 'Tradeoff',
                body: 'Engineering a comprehensive navigation architecture from scratch requires prohibitive resource allocation.'
              }
            ],
            images: []
          },
          {
            title: 'Nav2',
            subtitle: 'Selected navigation framework',
            body: 'Nav2 is an optimized successor to the ROS Navigation Stack designed for mobile and surface robotics. Although natively restricted to two-dimensional (2D) navigation, its operational maturity and extensive library of baseline planners and controllers present a definitive advantage.',
            details: [
              {
                label: 'Decision',
                body: 'The team selected Nav2 and is currently extending its framework to support 3D navigation via its plugin architecture.'
              }
            ],
            images: []
          }
        ]
      }
    ]
  },
  {
    slug: 'software-operator-pov',
    title: 'Pool Testing: Operator POV',
    tag: 'Software',
    authors: 'Poh Hian',
    date: 'Jan 2026',
    image: '/images/robosub2026/software-subsystems/simulation-11.png',
    description: 'Annotated operator POV screenshots showing the software interface and runtime context.',
    sections: [
      {
        heading: 'Pool Test POV',
        layout: 'centeredImageBelow',
        hideCaption: true,
        imageWidth: 'text',
        body: 'During every pool test, each vehicle is monitored by two operators. The primary operator manages main systems, including behaviour tree tuning and navigation control on Screen 1, while overseeing system health via Foxglove on Screen 2. The secondary operator acts as a second brain to the primary, assisting with tuning and handling immediate post-run rosbag review on another dedicated laptop. A rosbag is recorded after each mission run for this purpose.'
      },
    ]
  }
];

// =============================================================================
// ROBOTX 2026 BLOG POSTS
// Add RobotX-specific posts here. Each post should have:
// - slug: Unique URL slug (e.g., 'robotx-heterogeneous-fleet-autonomy')
// - title: Post title
// - tag: 'Mechanical' | 'Electrical' | 'Software'
// - authors: Author name(s)
// - date: e.g. 'Jan 2026 - Mar 2026'
// - image: Path to hero/card image (e.g. from /images/robotx2026/... or /competition/images/...)
// - description: Short summary shown on the blog cards and post header
// - sections: Array of sections with headings, layouts, text, and images
// =============================================================================
const robotxPostsRaw = [
  {
    slug: 'robotx-usv-pool-test-1',
    title: 'USV Test: Testing the Waters with Poseidon',
    tag: 'Vehicle Test',
    authors: 'Riley',
    date: 'Sep 2026',
    image: '/images/robotx2026/usv-blog/usv-pool-test-1-header.jpg',
    description: "Before sending an autonomous boat to navigate gates and execute complex missions, you have to answer the most fundamental questions of all: Does it float, does it balance, and can it move forward without veering off course? For Poseidon USV’s first splash, we stripped away the high-level autonomy stack to focus strictly on physical and hydrodynamic validation.",
    sections: [
      {
        heading: 'Objectives of the First Dip',
        body: 'The maiden pool test served as an essential baseline check',
        layout: 'sideImageAccordion',
        images: [
          {
            src: '/images/robotx2026/usv-blog/usv-pool-test-1-objectives.png',
          }
        ],
        items: [
          {
            title: 'Payload',
            details: [
              {
                label: 'Buoyancy & Payload Capacity',
                body: 'We needed to test how much weight the twin hulls could support while keeping the waterline at a safe, stable level. Ensuring that batteries, electronics enclosures, and sensors didn’t submerge the hulls beyond their design margins was step one.'
              }
            ]
          },
          {
            title: 'Weight Distribution',
            details: [
              {
                label: 'Trim & Balance',
                body: 'An unbalanced USV wastes thruster power simply trying to hold a heading. We checked the boat\'s roll and pitch in calm water to ensure weight distribution across both hulls was even.'
              }
            ]
          },
          {
            title: 'Heading Check',
            details: [
              {
                label: 'Straight-Line Propulsion',
                body: 'Running the thrusters under direct manual RC control to confirm differential thrust tracking. Before closing the feedback loop with software, the boat needed to demonstrate stable, predictable straight-line motion in the water.'
              }
            ]
          }
        ]
      },
      {
        heading: 'Key Takeaways & Moving Forward',
        body: 'Putting Poseidon in the water early gave the mechanical and electrical teams immediate, real-world feedback that simulations simply cannot replicate. With buoyancy confirmed, waterlines checked, and basic propulsion verified, the platform proved ready for the next phase: full system integration, safety compliance, and autonomous testing.',
        images: [
          {
            src: '/images/robotx2026/usv-blog/usv-pool-test-1-end.png',
            caption: ''
          }
        ]
      },
    ]
  },
  {
    slug: 'robotx-usv-pool-test-2',
    title: 'USV Test: Filming Proof-of-Readiness',
    tag: 'Vehicle Test',
    authors: 'Riley',
    date: 'Sep 2026',
    image: '/images/robotx2026/usv-blog/usv-pool-test-2-header.png',
    description: "Passing the Proof-of-Readiness (POR) milestone requires proving not only that Poseidon USV can navigate autonomously, but that it is fundamentally safe, resilient, and competition-compliant. Filming our POR submission meant showcasing two core capabilities: rock-solid safety interlocks and clean autonomous navigation through the gate.",
    sections: [
      {
        heading: 'Engineering a Fail-Safe E-Stop System',
        body: 'A major component of POR is demonstrating reliable onboard (wired) and remote (wireless) kill-switch operation. During our preparation, our safety architecture underwent a critical redesign',
        layout: 'sideImageAccordion',
        images: [
          {
            src: '/images/robotx2026/usv-blog/usv-pool-test-2-body.png',
          }
        ],
        items: [
          {
            title: 'Enchancing Safety',
            details: [
              {
                label: 'Moving Away from Microcontroller-Dependent Safety',
                body: 'Originally, we routed both E-stops through an ESP32-S3 microcontroller to handle the AND logic (where system power requires both switches to be un-pressed). However, relying on software or MCU firmware for a safety-critical kill switch introduces potential failure points if the MCU freezes or encounters a brownout.'
              }
            ]
          },
          {
            title: 'Physical Safety Measures',
            details: [
              {
                label: 'Hardware-Level Switching',
                body: 'In line with industry safety standards, we transitioned the safety system to dedicated physical switches and hardware logic.'
              }
            ]
          },
          {
            title: 'Electrical Improvements',
            details: [
              {
                label: 'Optocoupler Isolation',
                body: 'We replaced standard relays with optocouplers to cleanly isolate grounds between sensitive control electronics and higher-power actuation lines, eliminating electrical noise while guaranteeing immediate cutoff.'
              }
            ]
          },
          {
            title: 'Fail-Safe',
            details: [
              {
                label: 'Fail-Safe Behavior',
                body: 'If either switch is engaged—or if RF connection from the handheld transmitter drops—the propulsion system immediately cuts power. During the video shoot, Scott ran through this full test sequence: toggling onboard switches, hitting the remote kill switch, and verifying that the visual feedback indicators switched accurately between autonomous, manual, and kill states.'
              },
            ]
          }
        ]
      },
      {
        heading: 'Nailing the Autonomous Demonstration',
        body: 'With safety verified, Poseidon lined up for the headline event: the autonomous navigation demo. Starting 3 meters behind the entry gate, the USV initiated full autonomous mode, lined up its path, and cleared both sets of gates cleanly without touching a single buoy. Capturing this on film was a massive milestone for the team—validating our mechanical redesigns, electrical isolation, and control loops in one unified run. Poseidon is officially ready for the field!',
        images: [
          {
            src: '/images/robotx2026/usv-blog/usv-pool-test-2-end.png',
            caption: ''
          }
        ]
      },
    ]
  },
  {
    slug: 'robotx-uuv-pool-test-1',
    title: 'UUV Test: Kraken Deployed!',
    tag: 'Vehicle Test',
    authors: 'Baba',
    date: 'Sep 2026',
    image: '/images/robotx2026/uuv-blog/uuv-18sep-pool-1.jpg',
    description: "Taking our stack from simulation to splash, the new RobotX crew hit the pool for 2.5 hours of live Kraken (UUV) deployment, leak checks, and real-world troubleshooting. Read how we tackled the challenges faced!",
    sections: [
      {
        heading: 'UUV Pool Test 1',
        body: 'We conducted our first pool test with the UUV, with a total of 2 hours and 30 minutes in the water. The USV was not tested due to electrical issues.\nThe main goal of the pool test was to familiarize new RobotX team members with deploying and operating the stack in a physical environment, building on their previous experience with our custom simulator. During the session, the team was guided through a live demonstration of the UUV deployment procedure, including how the system would be deployed during the competition.',
        images: [
          {
            src: '/images/robotx2026/uuv-blog/uuv-18sep-pool-pic.jpg',
            caption: ''
          }
        ]
      },
      {
        heading: 'Physical Checks and Troubleshooting',
        body: 'Several checks were carried out before operating the UUV. The safety plug was only connected after all the above checks had been completed. The team was also made aware of potential issues that could arise during testing. Each member present also gained hands-on experience in physically deploying the stack.',
        layout: 'sideImageAccordion',
        images: [
          {
            src: '/images/robotx2026/uuv-blog/uuv-18sep-pool-2.jpg',
          }
        ],
        items: [
          {
            title: 'Leak Check',
            details: [
              {
                label: 'Check for Bubbles',
                body: 'Submerge the UUV without power and check for any bubbles to ensure there are no leaks.'
              }
            ]
          },
          {
            title: 'Network Check',
            details: [
              {
                label: 'Verify Connection',
                body: 'Verify a stable connection between the host machine, broadcast network, and UUV.'
              }
            ]
          },
          {
            title: 'Power Check',
            details: [
              {
                label: 'Ensure Voltage Range',
                body: 'Ensure that the voltage remains within the required range.'
              }
            ]
          },
          {
            title: 'Temperature Check',
            details: [
              {
                label: 'Monitor the DVL temperature',
                body: 'Ensure that the DVL does not overheat. '
              },
            ]
          }
        ]
      },
      {
        heading: 'Observations and Control Tuning',
        body: 'During the pool test, we observed significant overshoot and oscillation in the y-direction, as well as a yaw step response that did not closely match the step input. To address these issues, we attempted to tune the Cascade PID controller for the UUV. The tuning process showed improvements in the overall control response.',
        images: [
          {
            src: '/images/robotx2026/uuv-blog/uuv-18sep-control-tuning.jpg',
            caption: ''
          }
        ]
      },
      {
        heading: 'Simulation Tuning',
        body: 'Following the physical testing, we continued tuning the UUV control parameters in simulation. The feed-forward and integral terms for the y-direction were adjusted, reducing the steady-state error from 20% to 5%. The pitch and roll transients were also reduced to below 3°.',
        images: [
          {
            src: '/images/robotx2026/uuv-blog/uuv-18sep-sim-tuning.jpg',
            caption: ''
          }
        ]
      },
    ]
  },
  {
    slug: 'robotx-uav-gripper',
    title: 'UAV: Gripper Design Explained',
    tag: 'Mechanical',
    authors: 'Ambrose',
    date: 'Sep 2026',
    image: '/images/robotx2026/uav-blog/fin-ray-fingers.jpg',
    description: 'In this blog, we explore our UAV, Phoenix\'s, gripper system through its Fin Ray Fingers structure, lead-screw mechanism, and gripping operation.',
    sections: [
      {
        heading: 'Fin Ray Fingers',
        layout: 'blockImageStory',
        blocks: [
          {
            body: "The gripper uses Fin Ray fingers as a soft-robotic gripping surface. Each finger is printed from flexible TPU with an outer frame and external diagonal ribs. When the target pushes against the finger, the rib structure deforms and causes the finger to wrap around the target instead of simply bending away."
          },
          {
            body:"This passive deformation allows the fingers to adapt to different target shapes and small positioning errors without requiring extra motors, sensors or complex control. The larger contact area also distributes gripping pressure, reducing the risk of the target slipping or being damaged."
          },
          {
            images: [
              { src: '/images/robotx2026/uav-blog/fin-ray-fingers.jpg', caption: 'Grooves are added to the inner gripping surfaces to increase friction.' },
            ],
            body:"The grooves raised edges improve mechanical engagement with the target, while the channels can help displace water from the contact area during wet operation. Groove depth and spacing must still leave enough TPU thickness for the finger to flex without tearing."
          },
          {  
            body: 'Each finger rotates around a fixed pivot point connected to the gripper frame. A second rotating pin connects the finger to a linked bar, while the opposite end of that bar connects to the moving nut carriage.'
          },
          {
            body:"When the motor rotates the lead screw, the flange nut and carriage move linearly. The linked bars push or pull the fingers, causing them to rotate around their fixed pivots and open or close symmetrically. Using equal-length links on both sides helps maintain balanced gripping and prevents one finger from reaching the target before the other."
          },
          {
            images: [
              { src: '/images/robotx2026/uav-blog/uav-gripper-frame-closed.png', caption: 'The fingers are fully closed, ready to grip a target.' },
              { src: '/images/robotx2026/uav-blog/uav-gripper-frame-open.png', caption: 'The fingers are fully open, ready to release a target.' },
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'robotx-usv-lidar-integration',
    title: 'USV: Lidar Integration',
    tag: 'Software',
    authors: 'Baba',
    date: 'Sep 2026',
    image: '/images/robotx2026/software-subsystems/spatial-perception-USV.png',
    description: 'Pairing a lidar with the camera on Poseidon to build a more robust obstacle detection system, and feeding its point clouds into Nav2 costmaps so the USV can plan around buoys.',
    sections: [
      {
        heading: 'Lidar Integration',
        layout: 'subsectionImageGrid',
        subsections: [
          {
            title: 'Why Pair a Lidar with a Camera',
            body: 'The purpose of pairing a lidar with a camera was to create a more robust detection system than relying on either sensor alone. The rich semantic object detection from the camera is fused with the precise 3D distance and depth mapping of the lidar. This creates a modular system where we can harness the advantages of both sensors to actively detect and avoid obstacles, which in the context of the RobotX competition are buoys.'
          },
          {
            title: 'Integration with Navigation2',
            body: [
              'The integration was made much easier by the Navigation2 (Nav2) stack. The main job of the lidar is to identify where the buoys are on the map, and to let the USV actively create a plan and navigate safely around them.',
              'Our approach was to feed the live PointCloud streams from the lidar into the costmap plugins from Nav2. The costmaps are composed of multiple layers, which we configured to create a dynamic environment around the buoys for the USV to actively avoid.'
            ],
            images: [
              { src: '/images/robotx2026/software-subsystems/spatial-perception-USV.png', caption: 'Foxglove visualization of USV perception.' }
            ]
          },
          {
            title: 'Computational Efficiency',
            body: 'A consideration we had to come up with was about computational efficiency, we had to make sure that the processes we select would not be computationally intensive since the whole stack would be running on a Jetson. Therefore we tried to minimize wherever we could, by opting for standard Nav2 navigation as opposed to other methods.'
          }
        ]
      }
    ]
  },
  {
    slug: 'robotx-sw-unity-simulation',
    title: 'USV/UUV/UAV: Unity Simulation for RobotX',
    tag: 'Software',
    authors: 'Jia Qian',
    date: 'Sep 2026',
    image: '/images/robotx2026/software-subsystems/unitysim-UAV.png',
    description: "How Mecatron's Unity simulation lets us test controls, navigation, and perception across the RobotX fleet without setting up the physical vehicles every time, and how we keep it efficient enough to run on a wide range of hardware.",
    sections: [
      {
        heading: 'Unity Simulation',
        layout: 'subsectionImageGrid',
        subsections: [
          {
            title: 'Why Simulate',
            body: 'The Unity simulation is used to test various aspects of the robotics software, such as controls, navigation, and perception, without setting up the physical vehicle every time. It simulates real world visuals using the same STL models for buildings and vehicles, and the same water color and murkiness, which lets perception test the vision model without going to the physical location. It also simulates water and air physics to help us tune controls better, and simulates comms, including ROS2, MAVROS, and ArduPilot, and how the vehicle would receive data such as IMU, camera, and DVL measurements.',
            images: [
              { src: '/images/navigation-usv-foxglove.jpg', caption: 'UnitySim visualization of USV deployment.' }
            ]
          },
          {
            title: 'Reusing the Existing Foundation',
            body: "Since the foundation was already developed by past members, it makes it easier to reuse former base classes to build new things. For example, we reused the mount control that was originally used for the gimbal to instead control the water shooter's pitch and yaw, and we reused the set trigger service that was used for the torpedo to instead control the dropper."
          },
          {
            title: 'Adding New Vehicle Features',
            body: 'Adding a new vehicle feature usually means going into the codebase to find a script with a similar function, then adapting it to fit the new feature. If the feature is new and nothing similar exists, we instead create a similarly abstract, expandable system that can be reused in the future. For example, the LED toggle script was written generally enough that it now covers Tasks 1, 2, and 3, and can be reused for future tasks as well.'
          },
          {
            title: 'Performance Considerations',
            body: "Simulator performance and frame rate (FPS) were major priorities during development. As the environment is already computationally heavy, every new feature had to be strictly optimized to prevent severe frame drops on lower-spec machines. Instead of using high-overhead methods like generating dense water particle systems with individual collision checks to simulate Task 3’s water shooting, we are exploring the use of a raycasting approach. This captures the target hit accurately while keeping frame rates smooth and simulation lag minimal across all team hardware.",
            images: [
              { src: '/images/robotx2026/software-subsystems/unity-sim-original-fps.gif', caption: 'Original Unity simulation FPS performance, lag observed' },
              { src: '/images/robotx2026/software-subsystems/unity-sim-higher-fps.gif', caption: 'Optimized Unity simulation FPS performance, smoother playback' }
            ]

          }
        ]
      }
    ]
  },
  {
    slug: 'uuv-new-frame-2026',
    title: 'UUV: Aluminium Frame Redesign for Kraken',
    tag: 'Mechanical',
    authors: 'Muresh',
    date: 'Sep 2026',
    image: '/images/robotx2026/uuv-blog/uuv-frame-design-1.jpg',
    description: 'Redesigning the Kraken UUV frame to improve strength, durability, and ease of maintenance through a lightweight aluminium structure.',
    sections: [
      {
        heading: 'Redesigning the Kraken UUV Frame',
        layout: 'versionedRows',
        versions: [
          {
            title: 'Purpose of Redesign',
            subtitle: 'Problem and Solution',
            body: 'We hope to create a dependable base for the rest of the vehicle\'s systems to be mounted on. ',
            details: [
              {
                label: 'Problem',
                body: 'The existing acrylic frame had developed cracks over time, which made it unreliable as the backbone holding all of the UUV\'s components together.'
              },
              {
                label: 'Solution',
                body: 'We switched the material to aluminium, which would give us a much stronger and more durable frame that could handle repeated handling, testing and vibration. '
              },
            ],
          },
          {
            title: 'Balance between Weight and Strength',
            subtitle: 'Cutting holes into the frame to reduce weight',
            body: 'Aluminium is far stronger than acrylic, but it is also heavier, so we planned to cut holes into the frame wherever the material was not carrying much load. This way we keep the strength of aluminium while lessening the overall weight of the frame. The holes were placed around the mounting points and load paths of the components so that the frame stays rigid.',
            details: [
              
            ],
            images: [
              {
                src: '/images/robotx2026/uuv-blog/uuv-frame-design-2.jpg',
              }
            ]
          },
          {
            title: 'Consideration of Holes',
            subtitle: 'The Result of Unsuitable Holes Number and Placement',
            body: 'We tried to be deliberate about where material was removed, only cutting from low-stress regions of the frame.',
            details: [
              {
                label: 'Too many or poorly placed holes',
                body: 'Weaken the frame and defeat the purpose of the switch.'
              },
              {
                label: 'Too Few Holes',
                body: 'Leave the UUV heavier than necessary, which affects its buoyancy and how much thrust it needs to manoeuvre.'
              }
            ],
          },
          {
            title: 'Optimization for Serviceability',
            subtitle: 'Improved Component Layout in the New Frame',
            body: 'This frame design makes repairs, part swaps and upgrades between test runs take much less time.',
            details: [
              {
                label: 'Previous Issues',
                body: 'Working on one part of the UUV could mean disturbing much of the rest of the vehicle, which made maintenance slow and discouraged quick fixes.'
              },
              {
                label: 'Improvement',
                body: 'We arranged the layout, which allows key components to be reached, removed and reinstalled individually without dismantling everything around them. This means repairs, part swaps and upgrades between test runs take much less time.'
              },
            ],
          },
          {
            title: 'Optimization for Assembly',
            subtitle: 'Reduced Number and Complexity of Steps Needed for Assembly',
            body: 'We used simpler, more consistent mounting methods so that the UUV can be assembled and disassembled quickly and repeatably by any team member, not just the person who built it. This makes the whole build process more reliable and less prone to errors.',
            details: [
              
            ],
          },
          {
            title: 'Improvement in Ergonomics',
            subtitle: 'Easier transportation and field testing',
            body: 'As the UUV is regularly moved between the workshop and test sites, we made the frame easier to lift, carry and handle safely. This makes it simpler to deploy and recover the vehicle in the field, so the team can spend more of its testing time on actual tests rather than on logistics.',
            details: [
              {
                label: 'Ease of Deployment and Recovery',
                body: 'This makes it simpler to deploy and recover the vehicle in the field, which allows the team to spend more of its testing time on actual tests rather than on logistics.'
              }
            ],
            images: [
              {
                src: '/images/robotx2026/uuv-blog/uuv-18sep-pool-2.jpg',
              }
            ]
          },
        ]
      }
    ]
  }
];

const robosubPosts = robosubPostsRaw.map((post) => ({
  competition: 'robosub2026',
  ...post
}));

const robotxPosts = robotxPostsRaw.map((post) => ({
  competition: 'robotx2026',
  ...post
}));

export const blogPosts = [...robosubPosts, ...robotxPosts].map((post) => ({
  details: [
    `${post.tag} workstream`,
    'Reusable post template ready for detailed write-up'
  ],
  ...post,
  sections: post.sections ?? defaultSections(post)
}));

export const tagStyles = {
  Mechanical: 'border-orange-300/40 bg-orange-400/15 text-orange-100',
  Electrical: 'border-sky-300/40 bg-sky-400/15 text-sky-100',
  Software: 'border-emerald-300/40 bg-emerald-400/15 text-emerald-100',
  'Vehicle Test': 'border-purple-300/40 bg-purple-400/15 text-purple-100'
};
