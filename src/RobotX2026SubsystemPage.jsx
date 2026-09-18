import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

const subsystemPages = {
  poseidon: {
    name: 'Poseidon 2026',
    image: '/competition/images/robosub2026-bots.jpg',
    carouselImages: [
      {
        src: '/competition/images/competition_img_2.jpg',
        caption: 'Poseidon development and testing.'
      },
      {
        src: '/competition/images/robosub2026-bots.jpg',
        caption: 'Testing and iteration notes from the RobotX development cycle.'
      }
    ],
    subsystems: {
      mechanical: {
        label: 'Mechanical',
        title: 'Mechanical Subsystem',
        summary:
          'Poseidon 2026 is an upgraded autonomous vehicle with an updated thruster configuration, improved frame through topology optimization, and greater design modularity.',
        highlights: [
          '8-Thruster Configuration for decoupled control',
          'Mass Optimization using generative design',
          'Modular Frame Design for rapid reconfiguration',
          'Dropper and Gripper task mechanism integration'
        ],
        development: [],
        image: '/robosub_2026/mechanical-hydra-header.png',
      },
      software: {
        label: 'Software',
        title: 'Software Subsystem',
        summary:
          'RobotX 2026 extends Mecatron\'s multi-vehicle strategy from two Unmanned Underwater Vehicles to a heterogeneous team of three: an Unmanned Surface Vehicle (USV), an Unmanned Underwater Vehicle (UUV) and an Unmanned Aerial Vehicle (UAV). This adds operating domains and makes coordination between vehicles harder. To manage this, all three vehicles run the same containerized ROS2 autonomy stack. Each vehicle runs in its own ROS domain, and only explicitly whitelisted topics, services and actions are bridged between vehicles. This isolates faults, minimizes network congestion, and keeps each vehicle independently testable.',
        highlights: [],
        development: [],
        image: '/robosub_2026/software-header.png',
      },
      electrical: {
        label: 'Electrical',
        title: 'Electrical Subsystem',
        summary:
          'This year’s electrical power distribution is engineered to deliver more power, greater intelligence, and flexibility. A higher power budget supports our latest applications demands, smart capabilities enable advanced monitoring and precise control, and a modular design allows seamless customization and scalability as system needs evolve.',
        highlights: [
          'Organized signal and power paths to reduce service confusion',
          'Sensor placement planned around cameras, navigation, and task payloads',
          'Electronics access designed for faster debugging between on-water runs',
          'Integration support for dropper, gripper, and vehicle feedback systems'
        ],
        development: [],
        image: '/robosub_2026/electrical-header.png',
      },
    }
  },
  kraken: {
    name: 'Kraken 2026',
    image: '/competition/images/robosub2026-bots.jpg',
    carouselImages: [
      {
        src: '/competition/images/robosub2026-bots.jpg',
        caption: 'Kraken as part of the RobotX 2026 vehicle lineup.'
      },
      {
        src: '/competition/images/competition_img_3.jpg',
        caption: 'Experimental validation work for Kraken subsystems and layout.'
      },
      {
        src: '/competition/images/competition_img_4.jpg',
        caption: 'Competition preparation and subsystem review in progress.'
      }
    ],
    subsystems: {
      mechanical: {
        label: 'Mechanical',
        title: 'Mechanical Subsystem',
        summary:
          'Kraken is an experimental platform for Mecatron to develop more mature manufacturing processes. Featuring an acrylic skeleton and a metal electrical box, Kraken aims to be more durable and maneuverable than our previous vehicles.',
        highlights: [
          'Airfoil-inspired frame geometry for drag and stiffness studies',
          'Acrylic skeleton concept for direct visual inspection',
          'Simple assembly layout that supports fast mechanical changes',
          'Dedicated space for validating torpedo deployment hardware'
        ],
        development: [
          'Prototype frame sections and compare assembly approaches',
          'Evaluate hull material behavior during handling and pool testing',
          'Iterate mechanism mounting around torpedo deployment needs'
        ],
        image: '/images/robosub2026/mechanical-subsystems/blog2-11.jpg',
      },
      software: {
        label: 'Software',
        title: 'Software Subsystem',
        summary:
          'To manage dual-vehicle complexity, we utilized cross-platform Docker containerization for streamlined development and ROS2 composition to minimize latency and CPU overhead. These optimizations, paired with new 3D spatial perception, enable advanced path planning and autonomous navigation.',
        highlights: [],
        development: [],
        image: '/robosub_2026/software-header.png',
      },
      electrical: {
        label: 'Electrical',
        title: 'Electrical Subsystem',
        summary:
          'This year’s electrical power distribution is engineered to deliver more power, greater intelligence, and flexibility. A higher power budget supports our latest applications demands, smart capabilities enable advanced monitoring and precise control, and a modular design allows seamless customization and scalability as system needs evolve.',
        highlights: [
          'Organized signal and power paths to reduce service confusion',
          'Sensor placement planned around cameras, navigation, and task payloads',
          'Electronics access designed for faster debugging between pool runs',
          'Integration support for dropper, gripper, and vehicle feedback systems'
        ],
        development: [
          'Map electronics placement against mechanical access zones',
          'Prepare wiring routes for cameras, navigation sensors, and actuators',
          'Run bench checks before full vehicle integration'
        ],
        image: '/robosub_2026/electrical-header.png',
      },
    }
  },
  phoenix: {
    name: 'Phoenix 2026',
    image: '/competition/images/robosub2026-bots.jpg',
    carouselImages: [
      {
        src: '/competition/images/robosub2026-bots.jpg',
        caption: 'Phoenix UAV designed for RobotX 2026 autonomous operations.'
      },
      {
        src: '/competition/images/competition_img_2.jpg',
        caption: 'Testing and iteration notes from the RobotX development cycle.'
      }
    ],
    subsystems: {
      mechanical: {
        label: 'Mechanical',
        title: 'Mechanical Subsystem',
        summary:
          'Phoenix 2026 features a lightweight airframe engineered for agile flight, stable hovering, and reliable aerial payload deployment.',
        highlights: [
          'Lightweight carbon fiber airframe structure',
          'Vibration-damped sensor and camera gimbals',
          'Modular payload deployment mechanism'
        ],
        development: [],
        image: '/robosub_2026/mechanical-hydra-header.png',
      },
      software: {
        label: 'Software',
        title: 'Software Subsystem',
        summary:
          'Phoenix runs a containerized ROS2 and flight control stack enabling autonomous takeoff, waypoint navigation, target tracking, and cooperative communication with the surface vessel.',
        highlights: [],
        development: [],
        image: '/robosub_2026/software-header.png',
      },
      electrical: {
        label: 'Electrical',
        title: 'Electrical Subsystem',
        summary:
          'High-density battery power distribution and flight controller electronics delivering clean power to motors, radios, and onboard companion computers.',
        highlights: [
          'High-discharge battery management and telemetry',
          'Regulated power rails for companion compute and transmission systems',
          'Fail-safe return-to-base and power monitoring'
        ],
        development: [],
        image: '/robosub_2026/electrical-header.png',
      },
    }
  }
};

const navItems = ['mechanical', 'electrical', 'software'];

const featureCarouselImages = {
  UnitySim: [
    {
      src: '/images/robosub2026/software-subsystems/unity-sim-vid.gif',
      caption: 'Video demonstration of Unity simulation.'
    },
    {
      src: '/images/robosub2026/software-subsystems/mds-1st-perspective.png',
      caption: 'Vehicle\'s perspective.'
    },
    {
      src: '/images/robosub2026/software-subsystems/mds-3rd-perspective.png',
      caption: 'Third-person\'s perspective.'
    },
  ],
  Perception: [
    {
      src: '/images/robosub2026/software-subsystems/old-bounding-box.png',
      caption: 'Previous simple 2D bounding box.'
    },
    {
      src: '/images/robosub2026/software-subsystems/new-bounding-box.png',
      caption: 'New improved perception pipeline.'
    }
  ],
  'Mission Planning': [
    {
      src: '/images/robosub2026/software-subsystems/bt-simple.png',
      caption: 'A typical BT for a given task.'
    },
    {
      src: '/images/robosub2026/software-subsystems/nav-rect-animation.gif',
      caption: 'Flow built around reusable BT actions.'
    },
    {
      src: '/images/robosub2026/software-subsystems/spatial1.png',
      caption: 'Spatial perception and navigation.'
    },
  ],
  Localization: [
    {
      src: '/images/robosub2026/software-subsystems/corecont.png',
      caption: 'EKF localization fuses DVL and IMU data for stable odometry.'
    },
    {
      src: '/images/robosub2026/software-subsystems/ekf.png',
      caption: 'Foxglove monitoring supported real-time localization review.'
    },
  ],
  'Containerization for Multi-Vehicle Deployment': [
    {
      src: '/images/robosub2026/software-subsystems/ros2.png',
      caption: 'ROS2'
    },
    {
      src: '/competition/images/competition_img_1.jpg',
      caption: 'Composable nodes reduce CPU overhead through zero-copy sharing.'
    },
    {
      src: '/competition/images/competition_img_2.jpg',
      caption: 'Efficient deployment keeps perception and navigation pipelines running together.'
    }
  ]
};

const vehicleFeatureCarouselImages = {
  poseidon: {
    'Spatial Perception': [
    {
      src: '/images/robotx2026/software-subsystems/spatial-perception-USV.png',
      caption: 'Foxglove visualization of USV perception.'
    }
    ],
    'Navigation and Mission Planning': [
    {
      src: '/images/robotx2026/software-subsystems/navigation-and-mision-planning-USV.gif',
      caption: 'Foxglove visualization of USV perception.'
    }
    ]
  },
  kraken: {},
  phoenix: {}
};

function getFeatureCarouselImages(vehicleId, sectionTitle) {
  return vehicleFeatureCarouselImages[vehicleId]?.[sectionTitle];
}

function getSharedSoftwareSections(subsystem, vehicleId) {
  return [
    {
      title: 'UnitySim',
      description: `Standard ROS2 simulators such as Gazebo don't reproduce flight-controller behaviour, realistic rendering or hydrodynamics. These gaps grow when a team must be validated across surface, underwater and aerial domains at once. We therefore extended UnityMDS, our in-house Multi-Drone, Multi-Domain maritime simulator, to run the full RobotX team.

      1) Full-Team, Hardware-Fidelity Simulation:
      Real autopilot firmware. Each vehicle runs its own ArduPilot Software-In-The-Loop (SITL) instance, which reproduces the actual autopilot firmware and its sensor fusion.
      Realistic sensors and physics. Unity renders realistic scenes, generates camera, LiDAR, GNSS, IMU and DVL data, and models drag and added mass from the hull mesh.

      2) Identical Code in Simulation and Deployment: The autonomy stack above the drivers is the same code in simulation and on the vehicles, and one configuration flag switches between them. Full cross-vehicle missions can therefore be rehearsed end to end before any water or air time.`,
      bullets: subsystem.highlights,
      imageLayout: 'comparison'
    },
    {
      title: 'Spatial Perception',
      description: `1) Depth-Segmentation Fusion Tailored to Each Domain: Every vehicle runs YOLO11 instance segmentation on TensorRT and reads object distance only from pixels inside each mask. The depth source differs by vehicle:

      USV: Camera-LiDAR Fusion. LiDAR points are projected into the camera image using the live extrinsic transform, which stays aligned as the camera tilts on its gimbal. Only the nearest return is kept at each pixel, so a buoy in the foreground is never blended with the shoreline behind it.
      UUV and UAV: Monocular Metric Depth. LiDAR is unavailable underwater and too heavy for the aerial platform, so both vehicles estimate metric depth from a single camera with Depth Anything 3.

      Both methods are plugins behind a common interface, so everything downstream is identical across the fleet.
      
      2) Probabilistic Multi-Object Tracking:
      • Measurement model. Each object is tracked in the global frame by its own Square-Root Unscented Kalman Filter (SR-UKF). The filter projects the object's map position into pixel coordinates and depth, so detector noise and range noise are each modeled in their own units.
      • Association. The Hungarian algorithm assigns detections to tracks optimally, using Mahalanobis gating and matching only objects of the same class.
      • Confirmation. A detection must be confirmed several times before it becomes a track, which rejects false positives.
      • Output. Every confirmed object is published as a coordinate frame named by its class. "Navigate to the green buoy" therefore becomes a standard navigation goal.`,
      bullets: subsystem.highlights,
      imageLayout: 'bottom'
    },
    {
      title: 'Navigation and Mission Planning',
      description: `1) One Navigation Framework Across Three Domains: Navigation3 (Nav3) is our in-house extension of Nav2 with custom 3D planners, controllers and behaviors. It was built as a hardware-independent layer for RoboSub, and RobotX 2026 is the first time it has been ported across domains. The same framework now drives a surface vessel, an underwater vehicle and an aerial vehicle.

      2) Cross-Vehicle Mission Delegation:
      • Remote missions as one node. Each vehicle's Behavior Tree (BT) executor is exposed as a ROS2 action across vehicle domains. The USV, as command center, can therefore run an entire task on the UUV or UAV as a single node in its own tree.
      • Bounded and cancellable. Timeouts and retries bound each delegated mission, and halting the node on the USV cancels the remote mission automatically.`,
      bullets: subsystem.development,
      imageLayout: 'bottom'
    },
    {
      title: 'Fleet Communication Architecture',
      description: `Isolated Domains, Explicit Interfaces: 
      • Isolation by design. Each vehicle runs in its own ROS domain, so no data crosses between vehicles unless it is explicitly whitelisted. A fault or network flood on one vehicle cannot spread to the others.
      • Zenoh network. Vehicles connect through a chain of Zenoh routers. Moving from single-machine simulation to real hardware only means changing router addresses, not code.`,
      bullets: subsystem.development
    },
  ].map((section) => ({
    ...section,
    images: getFeatureCarouselImages(vehicleId, section.title)
  }));
}

function getPoseidonMechanicalSections() {
  return [
    {
      title: '8-Thruster Configuration',
      description: 'Poseidon utilizes a vectored thruster configuration for comprehensive manoeuvrability. This architecture allows precise, multi-axis control yielding a stable platform capable of handling complex docking and surface mission elements.',
      bullets: [],
      imageLayout: 'comparison',
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/thrusters6.png',
          caption: 'Previous baseline design.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/thrusters8.png',
          caption: 'New vectored thruster configuration.'
        }
      ]
    },
    {
      title: 'Mass Optimization',
      description: 'To achieve stringent mass and stability targets, structural components underwent topology optimization. Computational analysis of dynamic load paths enabled material reduction from low-stress regions while maximizing stiffness under sea conditions.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/mass1.jpg',
          caption: 'Mass optimization of frame components.'
        }
      ]
    },
    {
      title: 'Modular Frame Design',
      description: 'The vehicle architecture emphasizes modularity to accommodate rapid, mission-specific reconfigurations. Interchangeable sensor and payload bays allow attachments to be swapped or upgraded without altering the core hull.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/hydraframe.png',
          caption: 'Modular frame design.'
        },
      ]
    },
    {
      title: 'Dropper',
      description: 'Poseidon integrates an electromagnetic marker delivery system to ensure reliable actuation. For operational safety and power efficiency, the 12V electromagnet is kept unpowered until triggered, ensuring reliable deployment.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/dropper1.png',
          caption: 'Dropper design iteration.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/dropper2.png',
          caption: 'Dropper components.'
        }
      ]
    },
    {
      title: 'Gripper',
      description: 'Poseidon’s gripper uses a compact mechanism with compliant gripping surfaces to retrieve and deliver competition payloads reliably.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/gripper1.jpg',
          caption: 'Render of the gripper mechanism.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/gripper2.png',
          caption: 'Gripper assembly.'
        }
      ]
    }
  ];
}

function getPhoenixMechanicalSections() {
  return [
    {
      title: 'Airframe & Rotor Configuration',
      description: 'Phoenix features a high-efficiency multi-rotor layout optimized for aerial stability, endurance, and quick deployment from the surface vessel.',
      bullets: [],
      imageLayout: 'comparison',
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/thrusters6.png',
          caption: 'Rotor dynamics testing.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/thrusters8.png',
          caption: 'Assembled propulsion layout.'
        }
      ]
    },
    {
      title: 'Mass Optimization',
      description: 'Using carbon fiber composite materials and generative structure design, the airframe minimizes empty weight to maximize battery flight endurance and payload carrying capacity.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/mass1.jpg',
          caption: 'Structural weight optimization.'
        }
      ]
    },
    {
      title: 'Modular Frame Design',
      description: 'Designed with quick-release arms and swappable sensor mounts for fast maintenance and convenient transport during competition trials.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/hydraframe.png',
          caption: 'Modular frame breakdown.'
        },
      ]
    },
    {
      title: 'Dropper',
      description: 'An aerial payload release mechanism engineered for precision aerial dropping onto targeted aquatic markers.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/dropper1.png',
          caption: 'Aerial release mechanism.'
        }
      ]
    },
    {
      title: 'Gripper',
      description: 'Lightweight gripper and retrieval hook designed to secure lightweight objects or assist in automated tethering tasks.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/gripper1.jpg',
          caption: 'Lightweight gripper design.'
        }
      ]
    }
  ];
}

function getKrakenMechanicalSections() {
  return [
    {
      title: '8-Thruster Configuration',
      description: 'Kraken transitioned from the previous 6-thruster layout to a vectored 8-thruster configuration. This vectored architecture completely decouples the vertical and horizontal axes, yielding a highly stable hydrodynamic platform capable of precise, 6-degree-of-freedom (6-DOF) manoeuvring.',
      bullets: [],
      imageLayout: 'comparison',
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/thrusters-render.png',
          caption: 'Render of Kraken\'s 8-thrusters.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/thrusters-config.png',
          caption: 'Kraken 8-thrusters layout.'
        }
      ]
    },
    {
      title: 'Acrylic Skeletal Frame',
      description: 'Kraken utilizes a novel, fully acrylic skeletal frame to provide primary structural integrity. Compared to previous 3D-printed load-bearing structures, this CNC machined acrylic chassis offers superior structural integrity while being easily modifiable in-house for highly cost-effective and rapid prototyping cycles. To optimize hydrodynamic performance, this skeletal frame is enveloped by a streamlined, 3D-printed shell for improved hydrodynamic movement.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/aframe2.jpg',
          caption: 'Mechanical members assembling the acrylic skeletal frame.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/aframe1.jpg',
          caption: 'Waterproof testing with the frame.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/aframe3.jpg',
          caption: 'Acrylic frame assembled!'
        }
      ]
    },
    {
      title: 'Hydrodynamics Optimization',
      description: 'The vehicle\'s lateral wings are explicitly modeled after aircraft airfoils to delay flow separation and minimize wake. Computational fluid dynamics (CFD) analysis validates this design, demonstrating a 32% reduction in total drag when the shells are fully integrated. Additionally, the frame is engineered with a detachable front nose cone to facilitate rapid internal access and streamline assembly during deployments.',
      bullets: [],
      imageLayout: 'comparison',
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/cfd-before.png',
          caption: 'CFD simulation without shell.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/cfd-after.jpg',
          caption: 'CFD simulation with shell.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/cfd-results.png',
          caption: 'CFD results table.'
        }
      ]
    },
    {
      title: 'CNC Aluminum Electronics Enclosure Box',
      description: 'The transition from a cylindrical main hull for key electrical systems to a custom machined aluminum electrical enclosure maximized space efficiency, modularity and ease of maintenance. This reduced the weight of our vehicle by reducing buoyancy from the large volumetric displacement of a traditional cylindrical hull, thereby decreasing the mass needed to maintain neutral buoyancy. This also built the foundation of a new electrical system layout that is easy to modify and maintain, by creating swappable mounting plates that can be freely removed and worked on without space constraints.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/electbox1.png',
          caption: 'Isometric view of Kraken electrical enclosure.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/electbox2.jpg',
          caption: 'Real-life image of custom machined aluminum box.'
        }
      ]
    },
    {
      title: 'Torpedo',
      description: 'The previous friction-fit design was prone to wear-and-tear, occasionally resulting in premature launching before torpedo activation. Our new design uses a positive mechanical locking mechanism by fixing a T8 nut directly onto the propeller and a T8 lead screw onto the launcher. Upon activation, the propeller’s rotation should unscrew the nut from the stationary lead screw. This mechanism ensures a secure hold during the pre-launch phase followed by a seamless transition to forward flight once the threads are fully disengaged.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/torpedo1.png',
          caption: 'Kraken\'s torpedo render.'
        }
      ]
    }
  ];
}

function getSharedElectricalSections() {
  return [
    {
      title: 'Battery Management System (BMS)',
      description: 'ReRoute is a custom BMS engineered with a multi‑layer, hardware‑first safety architecture to keep the battery permanently within its safe operating zone. It combines a physical fuse for catastrophic fault protection with a resettable soft fuse using precision current sensing and comparator‑based cutoff. Dedicated hardware overvoltage and undervoltage protection, including undervoltage lockout, continuously monitors battery limits and enforces immediate disconnection when thresholds are exceeded. All critical protections are implemented in analog hardware, delivering fast, deterministic, and fail‑safe battery protection for high‑reliability applications.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/electrical-subsystems/bms1.png',
          caption: 'Render of ReRoute BMS PCB.'
        },
        {
          src: '/images/robosub2026/electrical-subsystems/bms2.png',
          caption: 'Testing of ReRoute BMS PCB.'
        },
      ]
    },
    {
      title: 'Power Distribution Unit (PDU)',
      description: 'The PDUC is a modular power distribution board is designed for high‑power applications where scalability, visibility, and flexibility are critical. Supporting a higher overall power budget, it features an expandable architecture that allows power channels to be added or tailored to system needs, while integrated monitoring provides real‑time insight into system performance and health. The board can be configured for both Actuator Electrical Subsystem (AESS) and Compute Electrical Subsystem (CESS) architectures, making it adaptable across different energy storage and system designs. Built for reliability and control, it delivers a robust foundation for demanding power distribution environments.',
      bullets: [],
      imageLayout: 'comparison',
      images: [
        {
          src: '/images/robosub2026/electrical-subsystems/pduc-archi.png',
          caption: 'PDUC overall architecture.'
        },
        {
          src: '/images/robosub2026/electrical-subsystems/cess-render.png',
          caption: 'Render of CESS PDUC.'
        },
        {
          src: '/images/robosub2026/electrical-subsystems/aess-render.png',
          caption: 'Render of AESS PDUC.'
        },
      ]
    },
    {
      title: 'Actuator Board',
      description: 'The Actuator Board manages high-load task mechanisms including marker droppers, torpedo launchers, and robotic grippers with precision timing and isolated power switching.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/electrical-subsystems/bms2.png',
          caption: 'Actuator testing.'
        }
      ]
    },
    {
      title: 'Acoustics',
      description: 'Hydrophone signal processing and acoustic pinger tracking module delivering robust bearing and range estimates in reflective aquatic environments.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/electrical-subsystems/acoustics1.jpg',
          caption: 'Hydrophone array bench test.'
        },
        {
          src: '/images/robosub2026/electrical-subsystems/acoustics2.png',
          caption: 'Hydrophone mounting setup.'
        },
        {
          src: '/images/robosub2026/electrical-subsystems/acoustics3.png',
          caption: 'Acoustics software architecture.'
        }
      ]
    }
  ];
}

function getContentSections(vehicle, subsystem, vehicleId, subsystemId) {
  let sections;

  if (subsystemId === 'mechanical' && vehicleId === 'kraken') {
    sections = getKrakenMechanicalSections();
  } else if (subsystemId === 'mechanical' && vehicleId === 'phoenix') {
    sections = getPhoenixMechanicalSections();
  } else if (subsystemId === 'mechanical') {
    sections = getPoseidonMechanicalSections();
  } else if (subsystemId === 'electrical') {
    sections = getSharedElectricalSections();
  } else {
    sections = getSharedSoftwareSections(subsystem, vehicleId);
  }

  return sections.map((section) => ({
    ...section,
    bullets: section.bullets ?? [],
    images: section.images
  }));
}

function isVideoMedia(media) {
  return media.type === 'video' || /\.(mp4|webm|ogg)$/i.test(media.src);
}

function MediaModal({ media, onClose }) {
  useEffect(() => {
    if (!media) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [media, onClose]);

  if (!media) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Expanded media preview"
    >
      <div
        className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-zinc-950 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-black/70 px-3 py-1 text-sm font-bold text-white transition hover:bg-black"
          aria-label="Close media preview"
        >
          ✕
        </button>

        <div className="flex flex-col">
          <div className="max-h-[75vh] overflow-hidden bg-black/60 flex items-center justify-center">
            {isVideoMedia(media) ? (
              <video
                src={media.src}
                className="max-h-[75vh] w-full object-contain"
                controls
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={media.src}
                alt={media.alt ?? media.caption ?? 'Expanded media'}
                className="max-h-[80vh] w-full object-contain"
              />
            )}
          </div>
          {media.caption && (
            <div className="bg-black/80 px-5 py-4 text-center text-sm sm:text-base text-white">
              {media.caption}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MediaPreview({ media }) {
  if (isVideoMedia(media)) {
    return (
      <video
        src={media.src}
        className="w-full h-full object-contain"
        muted
        playsInline
      />
    );
  }

  return (
    <img
      src={media.src}
      alt={media.alt ?? media.caption}
      className="w-full h-full object-contain"
    />
  );
}

function ComparisonCaptionImages({ images, onMediaClick }) {
  if (!images?.length) return null;

  const gridClass = images.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';

  return (
    <div className={`mx-auto grid w-full max-w-5xl grid-cols-1 gap-5 ${gridClass}`}>
      {images.map((image) => (
        <figure key={image.src} className="overflow-hidden rounded-xl border border-white/15 bg-black/30">
          <div className="aspect-video bg-black/30">
            <button
              type="button"
              onClick={() => onMediaClick(image)}
              className="h-full w-full cursor-zoom-in"
              aria-label={`Open ${image.caption ?? 'media'}`}
            >
              <MediaPreview media={image} />
            </button>
          </div>
          <figcaption className="p-4 text-sm text-gray-200">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function RobotX2026SubsystemPage({ vehicleId: propVehicleId, subsystemId: propSubsystemId }) {
  const params = useParams();
  const vehicleId = propVehicleId || params.vehicleId || 'poseidon';
  const subsystemId = propSubsystemId || params.subsystemId || 'mechanical';

  const vehicle = subsystemPages[vehicleId] ?? subsystemPages.poseidon ?? subsystemPages.kraken;
  const subsystem = vehicle.subsystems[subsystemId] ?? vehicle.subsystems.mechanical;
  const contentSections = getContentSections(vehicle, subsystem, vehicleId, subsystemId);
  const [expandedMedia, setExpandedMedia] = useState(null);

  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <MediaModal media={expandedMedia} onClose={() => setExpandedMedia(null)} />

      <section className="px-4 sm:px-8 lg:px-20 pt-32 pb-16 bg-[#181818]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-10 items-center">
          <div>
            <Link
              to="/robotx2026"
              className="mb-8 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow transition-all duration-200 hover:bg-[#d73a1a]"
            >
              <FaChevronLeft className="text-xs" aria-hidden="true" />
              Back to RobotX 2026
            </Link>
            <p className="text-lg text-gray-300 mb-3">{vehicle.name}</p>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-orange-500 mb-6">
              {subsystem.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-3xl">
              {subsystem.summary}
            </p>
          </div>

          <div className="rounded-lg overflow-hidden border border-white/15 bg-white/10 shadow-xl shadow-black/20">
            <img
              src={subsystem.image}
              alt={`${vehicle.name} ${subsystem.label} development`}
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-20 py-8 bg-[#202020]">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {navItems.map((item) => (
            <Link
              key={item}
              to={`/${vehicleId}/${item}`}
              className={`px-5 py-2 rounded-lg border text-sm sm:text-base font-semibold transition-all duration-200 ${
                item === subsystemId
                  ? 'bg-orange-500 border-orange-400 text-white'
                  : 'border-white/15 bg-white/10 text-gray-200 hover:bg-white/15 hover:text-white'
              }`}
            >
              {vehicle.subsystems[item].label}
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-20 py-16 bg-[#181818]">
        <div className="max-w-7xl mx-auto space-y-10">
          {contentSections.map((section) => (
            <article
              key={section.title}
              className="rounded-lg border border-white/15 bg-white/10 p-5 sm:p-8"
            >
              {section.imageLayout === 'comparison' ? (
                <div>
                  <div className="mx-auto mb-8 max-w-4xl text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-6">
                      {section.title}
                    </h2>
                    <p className="whitespace-pre-line text-justify text-base sm:text-lg text-gray-200 leading-relaxed">
                      {section.description}
                    </p>
                    {section.bullets.length > 0 && (
                      <ul className="mt-5 inline-block space-y-2 text-left text-sm sm:text-base text-gray-200 list-disc pl-5">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <ComparisonCaptionImages images={section.images} onMediaClick={setExpandedMedia} />
                </div>
              ) : section.imageLayout === 'subsectionComparison' ? (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-8 text-center">
                    {section.title}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {section.subsections.map((sub) => (
                      <div key={sub.title} className="flex flex-col">
                        <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/15 bg-black/40 mb-4">
                          <img
                            src={sub.image.src}
                            alt={sub.image.caption}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-orange-400 mb-2">{sub.title}</h3>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{sub.body}</p>
                        <p className="text-xs text-gray-400 mt-2 italic">{sub.image.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : section.imageLayout === 'bottom' ? (
                <div className="mx-auto max-w-4xl">
                  <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4">
                    {section.title}
                  </h2>
                  <p className="whitespace-pre-line text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
                    {section.description}
                  </p>
                  {section.bullets.length > 0 && (
                    <ul className="mb-6 list-disc space-y-2 pl-5 text-left text-sm sm:text-base text-gray-200">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {section.images && section.images.length > 0 && (
                    <div className="flex justify-center">
                      <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-white/15 bg-black/40">
                        <button
                          type="button"
                          onClick={() => setExpandedMedia(section.images[0])}
                          className="block h-full w-full cursor-zoom-in"
                          aria-label={`Open ${section.images[0].caption ?? section.title}`}
                        >
                          <img
                            src={section.images[0].src}
                            alt={section.images[0].caption ?? section.title}
                            className="h-auto w-full object-cover"
                          />
                        </button>
                        {section.images[0].caption && (
                          <p className="bg-black/60 p-3 text-xs sm:text-sm text-gray-300 text-center">
                            {section.images[0].caption}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4">
                      {section.title}
                    </h2>
                    <p className="whitespace-pre-line text-base sm:text-lg text-gray-200 leading-relaxed mb-4">
                      {section.description}
                    </p>
                    {section.bullets.length > 0 && (
                      <ul className="space-y-2 text-sm sm:text-base text-gray-200 list-disc pl-5">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {section.images && section.images.length > 0 && (
                    <div className="w-full lg:w-1/2 flex justify-center">
                      <div className="rounded-xl overflow-hidden border border-white/15 max-w-md w-full">
                        <img
                          src={section.images[0].src}
                          alt={section.images[0].caption ?? section.title}
                          className="w-full h-auto object-cover"
                        />
                        {section.images[0].caption && (
                          <p className="bg-black/60 p-3 text-xs sm:text-sm text-gray-300 text-center">
                            {section.images[0].caption}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
