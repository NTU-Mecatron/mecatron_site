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
        caption: 'Poseidon development and testing'
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
          'Poseidon is a catamaran USV with two pontoon power hulls, a four-thruster marine layout shared with Kraken, an independently aimed water shooter, and elevated sensor rigging.',
        highlights: [
          'Four horizontal thrusters at a nominal 30° angle',
          'Twin pontoon hulls joined by crossbeams',
          'Independent pan and tilt water shooter',
          'Raised mounts for cameras, LiDAR, and dual RTK antennas'
        ],
        development: [],
        image: '/images/robotx2026/usv-blog/usv-pool-test-1-header.jpg',
      },
      software: {
        label: 'Software',
        title: 'Software Subsystem',
        summary:
          'RobotX 2026 extends Mecatron\'s multi-vehicle strategy from two Unmanned Underwater Vehicles to a heterogeneous team of three: an Unmanned Surface Vehicle (USV), an Unmanned Underwater Vehicle (UUV) and an Unmanned Aerial Vehicle (UAV). This adds operating domains and makes coordination between vehicles harder. To manage this, all three vehicles run the same containerized ROS2 autonomy stack. Each vehicle runs in its own ROS domain, and only explicitly whitelisted topics, services and actions are bridged between vehicles. This isolates faults, minimizes network congestion, and keeps each vehicle independently testable.',
        highlights: [],
        development: [],
        image: '/images/robotx2026/software-subsystems/software-header.jpg',
      },
      electrical: {
        label: 'Electrical',
        title: 'Electrical Subsystem',
        summary:
          'RobotX 2026 uses a shared electrical and embedded-systems architecture across Poseidon, Kraken, and Phoenix. A common safety and modular-PCB foundation is adapted to each platform’s power, mass, thermal, and mission requirements.',
        highlights: [],
        development: [],
        image: '/competition/images/robotx-all-vehicles.jpg',
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
          'Kraken is a UUV with a modular aluminum frame, shared four-thruster marine geometry, a rectangular electronics enclosure, balanced underside batteries, and a compliant magnetic task probe.',
        highlights: [
          'Four horizontal thrusters at a nominal 30° angle',
          'Reconfigurable mounting points for hydro-trim and payloads',
          'Transparent-top aluminum electronics enclosure',
          'Spring-loaded magnetic probe for Task 2'
        ],
        development: [
          'Reposition ballast, sensors, or thrusters using universal frame mounts',
          'Balance underside battery cylinders to lower the center of gravity',
          'Tune magnetic probe compliance for pipeline-switch contact'
        ],
        image: '/images/robotx2026/uuv-blog/uuv-frame-design-1.jpg',
      },
      software: {
        label: 'Software',
        title: 'Software Subsystem',
        summary:
          'RobotX 2026 extends Mecatron\'s multi-vehicle strategy from two Unmanned Underwater Vehicles to a heterogeneous team of three: an Unmanned Surface Vehicle (USV), an Unmanned Underwater Vehicle (UUV) and an Unmanned Aerial Vehicle (UAV). This adds operating domains and makes coordination between vehicles harder. To manage this, all three vehicles run the same containerized ROS2 autonomy stack. Each vehicle runs in its own ROS domain, and only explicitly whitelisted topics, services and actions are bridged between vehicles. This isolates faults, minimizes network congestion, and keeps each vehicle independently testable.',
        highlights: [],
        development: [],
        image: '/images/robotx2026/software-subsystems/software-header.jpg',
      },
      electrical: {
        label: 'Electrical',
        title: 'Electrical Subsystem',
        summary:
          'RobotX 2026 uses a shared electrical and embedded-systems architecture across Poseidon, Kraken, and Phoenix. A common safety and modular-PCB foundation is adapted to each platform’s power, mass, thermal, and mission requirements.',
        highlights: [],
        development: [
          'Map electronics placement against mechanical access zones',
          'Prepare wiring routes for cameras, navigation sensors, and actuators',
          'Run bench checks before full vehicle integration'
        ],
        image: '/competition/images/robotx-all-vehicles.jpg',
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
          'Phoenix is a mass-optimized UAV with a carbon-fibre airframe, topology-optimized joints, a synchronized lead-screw gripper, compliant Fin-Ray fingers, and a protective canopy.',
        highlights: [
          'Carbon fibre and low-infill printed brackets',
          'Single-servo lead-screw drive for two jaws',
          'Flexible TPU Fin-Ray fingers',
          'Lightweight splash and debris canopy'
        ],
        development: [],
        image: '/images/robotx2026/uav-blog/fin-ray-fingers.jpg',
      },
      software: {
        label: 'Software',
        title: 'Software Subsystem',
        summary:
          'RobotX 2026 extends Mecatron\'s multi-vehicle strategy from two Unmanned Underwater Vehicles to a heterogeneous team of three: an Unmanned Surface Vehicle (USV), an Unmanned Underwater Vehicle (UUV) and an Unmanned Aerial Vehicle (UAV). This adds operating domains and makes coordination between vehicles harder. To manage this, all three vehicles run the same containerized ROS2 autonomy stack. Each vehicle runs in its own ROS domain, and only explicitly whitelisted topics, services and actions are bridged between vehicles. This isolates faults, minimizes network congestion, and keeps each vehicle independently testable.',
        highlights: [],
        development: [],
        image: '/images/robotx2026/software-subsystems/software-header.jpg',
      },
      electrical: {
        label: 'Electrical',
        title: 'Electrical Subsystem',
        summary:
          'RobotX 2026 uses a shared electrical and embedded-systems architecture across Poseidon, Kraken, and Phoenix. A common safety and modular-PCB foundation is adapted to each platform’s power, mass, thermal, and mission requirements.',
        highlights: [],
        development: [],
        image: '/competition/images/robotx-all-vehicles.jpg',
      },
    }
  }
};

const navItems = ['mechanical', 'electrical', 'software'];

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
      src: '/images/robotx2026/software-subsystems/navigation-and-mission-planning-USV.gif',
      caption: 'Autonomous navigation and mission planning.'
    }
    ]
  },
  kraken: {
    'Spatial Perception': [
    {
      src: '/images/robotx2026/software-subsystems/spatial-perception-UUV.png',
      caption: 'Visualization of UUV perception.'
    }
    ],
    'Navigation and Mission Planning': [
    {
      src: '/images/robotx2026/software-subsystems/navigation-and-mission-planning-UUV.gif',
      caption: 'Navigation of UUV.'
    }
    ]
  },
  phoenix: {
    'UnitySim': [
    {
      src: '/images/robotx2026/software-subsystems/unitysim-UAV.png',
      caption: 'UnitySim visualization of UAV deployment.'
    }
    ],
    'Spatial Perception': [
    {
      src: '/images/robotx2026/software-subsystems/spatial-perception-UAV.png',
      caption: 'Vision Model for UAV.'
    }
    ],
    'Navigation and Mission Planning': [
    {
      src: '/images/robotx2026/software-subsystems/navigation-and-mission-planning-UAV.gif',
      caption: 'Autonomous navigation and mission planning.'
    }
    ]
  }
};

function getFeatureCarouselImages(vehicleId, sectionTitle) {
  return vehicleFeatureCarouselImages[vehicleId]?.[sectionTitle];
}

function getSharedSoftwareSections(subsystem, vehicleId) {
  const baseSections = [
    {
      title: 'UnitySim',
      description: `Standard ROS2 simulators such as Gazebo don't reproduce flight-controller behaviour, realistic rendering or hydrodynamics. These gaps grow when a team must be validated across surface, underwater and aerial domains at once. We therefore extended UnityMDS, our in-house Multi-Drone, Multi-Domain maritime simulator, to run the full RobotX team.

      1) Full-Team, Hardware-Fidelity Simulation:
      Real autopilot firmware. Each vehicle runs its own ArduPilot Software-In-The-Loop (SITL) instance, which reproduces the actual autopilot firmware and its sensor fusion.
      Realistic sensors and physics. Unity renders realistic scenes, generates camera, LiDAR, GNSS, IMU and DVL data, and models drag and added mass from the hull mesh.

      2) Identical Code in Simulation and Deployment: The autonomy stack above the drivers is the same code in simulation and on the vehicles, and one configuration flag switches between them. Full cross-vehicle missions can therefore be rehearsed end to end before any water or air time.`,
      bullets: subsystem.highlights,
      imageLayout: vehicleId === 'phoenix' ? '' : 'bottom'
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
      bullets: subsystem.development,
      imageLayout: 'bottom'
    }
  ];

  const krakenOnlySection = vehicleId === 'kraken'
    ? [{
        title: 'UUV Localization',
        description: `GPS is unavailable underwater. Therefore we developed a custom localization filter for the UUV instead of relying solely on the autopilot's internal EKF.

        1) Square-Root Unscented Kalman Filter:
        Sensors fused: IMU delta-velocity, DVL velocity and pressure depth.
        Chronological processing. Measurements arrive at different rates (~40, ~12 and ~10 Hz), so they are processed in timestamp order and late messages don't corrupt the estimate.

        2) Autopilot Integration: The estimate goes to ArduPilot as external odometry, so the autopilot's own control loops navigate on it without GPS.`,
        imageLayout: 'bottom',
        images: []
      }]
    : [];

  return [...baseSections, ...krakenOnlySection].map((section) => ({
    ...section,
    images: section.images ?? getFeatureCarouselImages(vehicleId, section.title)
  }));
}

function getPoseidonMechanicalSections() {
  return [
    {
      title: 'Shared Marine Propulsion Layout',
      description: 'Poseidon and Kraken share a four-horizontal-thruster layout, with one thruster near each corner of a square perimeter. All four are mounted at a nominal 30° angle. Carrying this geometry forward from earlier RoboSub work gives both marine platforms a common starting point for controls integration and omnidirectional thrust modelling across surface and subsea operation.',
      imageLayout: 'comparison',
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/thrusters-render.png',
          caption: 'Marine platform thruster arrangement.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/thrusters-config.png',
          caption: 'Thruster configuration used as the shared marine baseline.'
        }
      ]
    },
    {
      title: 'Catamaran Hull & Deck Structure',
      description: 'Poseidon is built around two pontoon power hulls joined by crossbeams. The dual-hull layout keeps high-power batteries distributed into the hulls while preserving a central deck area for mission payloads and elevated sensing equipment.',
      bullets: ['Separate pontoon hulls carry power storage.', 'Crossbeams connect the hulls and support the payload deck.'],
      images: [
        {
          src: '/images/robotx2026/usv-blog/usv-pool-test-1-header.jpg',
          caption: 'Poseidon USV during RobotX development and water testing.'
        }
      ]
    },
    {
      title: '2-DOF Water Shooter',
      description: 'A dedicated compact pump supplies a continuous stream to the nozzle. The shooter aims independently in pan and tilt: a planetary-gear drive rotates the base in yaw, while a separate drive pitches the nozzle. This lets Poseidon correct its aim toward target buoys and bays while maintaining its station without turning the whole hull.',
      bullets: ['Independent base pan and nozzle tilt.', 'Planetary-gear-based aiming drive.', 'Dedicated pump delivers water directly to the nozzle.'],
      images: [
        {
          src: '/images/robotx2026/usv-blog/usv-pool-test-1-objectives.png',
          caption: 'Poseidon water-shooter development and testing.'
        }
      ]
    },
    {
      title: 'Sensor Deck & Rigging',
      description: 'Elevated mounting points keep the perception and navigation payloads clear of wave splash. The deck rigging supports camera gimbals, LiDAR, and dual RTK antennas while maintaining sightlines and separation above the pontoon hulls.',
      bullets: ['Raised mounts for camera gimbals and LiDAR.', 'Dual RTK antenna mounting above the splash zone.'],
      images: [
        {
          src: '/competition/images/robotx-all-vehicles.jpg',
          caption: 'Poseidon alongside the RobotX 2026 vehicle fleet.'
        }
      ]
    }
  ];
}

function getPhoenixMechanicalSections() {
  return [
    {
      title: 'Lightweight Airframe & Mass Optimization',
      description: 'Phoenix combines a carbon-fibre structure with low-infill 3D-printed brackets to reduce structural tare weight. Topology optimization is applied to high-stress joints, removing material where it is not needed while preserving the structural load paths.',
      bullets: ['Carbon-fibre airframe structure.', 'Low-infill printed brackets reduce component mass.', 'Topology-optimized joints retain critical load paths.'],
      images: [
        {
          src: '/competition/images/robotx-all-vehicles.jpg',
          caption: 'Phoenix as part of the RobotX 2026 fleet.'
        }
      ]
    },
    {
      title: 'Servo-Driven Lead-Screw Gripper',
      description: 'A single central servo drives a linear lead screw and traveling nut connected to two pivoting gripper arms. This linkage produces synchronized, symmetrical jaw motion with a compact, low-complexity mechanism. The geometry closes on the payload before reaching mechanical dead-center, preserving useful clamping torque.',
      bullets: ['One actuator drives both jaws.', 'Lead screw and traveling nut convert servo rotation into linear movement.', 'Linkage avoids dead-center at the gripping position.'],
      images: [
        {
          src: '/images/robotx2026/uav-blog/uav-gripper-frame-open.png',
          caption: 'Phoenix lead-screw gripper in the open position.'
        },
        {
          src: '/images/robotx2026/uav-blog/uav-gripper-frame-closed.png',
          caption: 'Phoenix gripper jaws closed around a payload.'
        }
      ]
    },
    {
      title: 'Compliant Fin-Ray Fingers',
      description: 'The gripper fingers are printed in flexible TPU with an internal ribbed structure inspired by the Fin Ray effect. The fingers passively conform around cylindrical payloads, accommodating small landing misalignments and off-center hover deviations.',
      bullets: ['Flexible TPU construction.', 'Ribbed internal structure conforms around cylindrical objects.', 'Passive compliance helps accommodate alignment error.'],
      images: [
        {
          src: '/images/robotx2026/uav-blog/fin-ray-fingers.jpg',
          caption: 'Compliant Fin-Ray finger design.'
        }
      ]
    },
    {
      title: 'Protective Aerodynamic Canopy',
      description: 'A lightweight top canopy shields the flight controller and onboard electronics from marine water splash and airborne debris, while keeping the airframe’s mass budget in view.',
      bullets: ['Protects avionics from splash and debris.', 'Designed as a lightweight part of the airframe.'],
      images: [{ src: '/competition/images/robotx-all-vehicles.jpg', caption: 'Phoenix UAV in the RobotX 2026 fleet.' }]
    }
  ];
}

function getKrakenMechanicalSections() {
  return [
    {
      title: 'Shared Marine Propulsion Layout',
      description: 'Kraken and Poseidon share a four-horizontal-thruster layout, with one thruster near each corner of a square perimeter. All four are mounted at a nominal 30° angle. Reusing this geometry builds on earlier RoboSub experience and gives controls integration and omnidirectional thrust modelling a common starting point across surface and subsea operation.',
      imageLayout: 'comparison',
      images: [
        {
          src: '/images/robotx2026/uuv-blog/uuv-frame-design-1.jpg',
          caption: 'Kraken frame design and propulsion integration.'
        },
        {
          src: '/images/robotx2026/uuv-blog/uuv-18sep-pool-pic.jpg',
          caption: 'Kraken during RobotX UUV pool testing.'
        }
      ]
    },
    {
      title: 'Modular Aluminum Frame',
      description: 'Kraken’s modular aluminum frame provides universal mounting points for thrusters, ballast weights, and acoustic or vision sensors. Components can be repositioned to tune hydro-trim or accommodate new payloads without redesigning the chassis.',
      bullets: ['Reconfigurable mounting points for propulsion, ballast, and sensors.', 'Supports hydro-trim adjustment and payload changes.'],
      images: [
        {
          src: '/images/robotx2026/uuv-blog/uuv-frame-design-1.jpg',
          caption: 'Kraken modular frame design.'
        },
        {
          src: '/images/robotx2026/uuv-blog/uuv-frame-design-2.jpg',
          caption: 'Frame layout and component mounting points.'
        }
      ]
    },
    {
      title: 'Rectangular Electronics Enclosure',
      description: 'Kraken replaces a conventional cylindrical hull with a rectangular aluminum electronics enclosure and transparent top plate. The shape improves clearance for PCB installation and wiring harnesses. Its aluminum body also conducts heat from the electronics toward the surrounding water.',
      bullets: ['Rectangular interior provides room for boards and harnesses.', 'Transparent top plate allows visual inspection.', 'Aluminum enclosure conducts heat into the water.'],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/electbox1.png',
          caption: 'Rectangular aluminum electronics enclosure.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/electbox2.jpg',
          caption: 'Kraken electronics enclosure with transparent access cover.'
        },
        {
          src: '/images/robotx2026/uuv-blog/uuv-18sep-pool-pic.jpg',
          caption: 'Kraken platform during water testing.'
        }
      ]
    },
    {
      title: 'Twin Underside Battery Cylinders',
      description: 'Two battery cylinders mount beneath the port and starboard sides of the frame. Their balanced placement lowers the center of gravity and supports passive hydro-stability while keeping the power sources accessible as separate modules.',
      bullets: ['Port and starboard battery cylinders balance the vehicle.', 'Underside placement lowers the center of gravity.'],
      images: [
        {
          src: '/images/robotx2026/uuv-blog/uuv-frame-design-2.jpg',
          caption: 'Kraken frame layout for underside battery integration.'
        },
        {
          src: '/images/robotx2026/uuv-blog/uuv-18sep-pool-pic.jpg',
          caption: 'Kraken vehicle during pool testing.'
        }
      ]
    },
    {
      title: 'Spring-Loaded Magnetic Probe · Task 2',
      description: 'The probe places a central linear guide shaft inside a compression-spring assembly. The spring absorbs impact when the vehicle approaches the pipeline switch off-axis, reducing lateral buckling and shear loads on the probe. A replaceable elastic rubber boot press-fits around the magnet to seal and retain it without adhesive or threads, allowing tool-less field swaps for different switch sensitivities.',
      bullets: ['Guide shaft and compression spring absorb collision shock.', 'Compliant travel helps protect against non-perpendicular impacts.', 'Press-fit rubber boot supports tool-less magnet replacement.'],
      images: [
        {
          src: '/images/robotx2026/uuv-blog/uuv-18sep-control-tuning.jpg',
          caption: 'Kraken task development and in-water tuning.'
        }
      ]
    }
  ];
}

function getSharedElectricalSections(vehicleId) {
  return [
    {
      title: 'Fleet-Wide Electrical Architecture',
      description: 'The fleet separates computing and sensing loads from actuation loads so each power path can be designed for its own operating profile. The Compute Electrical Subsystem (CESS) supplies sensors, single-board computers, and compute nodes with continuous, low-current power (approximately 8 A). The Actuation Electrical Subsystem (AESS) supplies thrusters, servos, pumps, and motors, and is designed for short, high-current transients (approximately 40 A).',
      bullets: [
        'Separate CESS and AESS power paths help contain actuator noise and keep compute power predictable.',
        'Shared electrical principles are adapted to each vehicle’s power, mass, thermal, and mission constraints.'
      ]
    },
    {
      title: 'Safety, Protection & Modular Electronics',
      description: 'Custom battery management systems combine hardware and software protection to help keep cells within safe operating limits. Protections include over-current protection (OCP), over-voltage protection (OVP), and under-voltage lockout (UVLO). A dual-failsafe kill system combines an onboard mechanical E-Stop with a wireless remote. The remote sends heartbeats to an onboard microcontroller; a lost heartbeat, detected fault, or switch press drives the buffer-enable line LOW so the Load Switch PCB isolates actuator power.',
      bullets: [
        'Standardized PDU, Load Switch, Safety System, and BMS boards use modular footprints.',
        'Boards are tested to their rated currents and mounted on modular trays for maintenance and field swapping.'
      ],
      images: [
        { src: '/images/robosub2026/electrical-subsystems/bms1.png', caption: 'Custom battery management system PCB.' },
        { src: '/images/robosub2026/electrical-subsystems/bms2.png', caption: 'Battery management system validation.' }
      ]
    },
    ...(vehicleId === 'poseidon' ? [{
      title: 'Poseidon · USV Power & Payloads',
      description: 'Poseidon uses Power System Architecture A, with independent battery paths for CESS and AESS to extend compute runtime and isolate high-current propulsion noise. A dedicated 6S 12,500 mAh solid-state battery powers CESS, providing approximately twice the compute endurance of a standard 4S LiPo alternative. Power and electronics are distributed across two modular side hulls and a central aluminum enclosure; each side hull carries a 6S LiPo battery and custom BMS for propulsion.',
      bullets: [
        'High-current switching and drive logic support the 2-DOF water-shooter pump and planetary-gear actuation.',
        'Conditioned and filtered sensor rails serve the dual-antenna RTK-GPS, Ouster LiDAR, and camera gimbal systems.'
      ]
    }] : []),
    ...(vehicleId === 'kraken' ? [{
      title: 'Kraken · UUV Power & Subsea Integration',
      description: 'Kraken uses Power System Architecture B, with an ideal-diode OR-ing stage between its battery sources. Identical battery cylinders sit beneath the port and starboard sides to balance the center of gravity and hydro-trim. The OR-ing arrangement allows a battery to be exchanged while compute remains powered. Electrical components are packaged in a custom rectangular aluminum enclosure; the aluminum hull transfers heat from high-power boards to the surrounding water.',
      bullets: [
        'Dedicated power rails help isolate the DVL, pressure-depth sensors, and IMU from thruster transient spikes.',
        'Symmetric battery placement supports vehicle balance while enabling rapid turnaround between runs.'
      ]
    }] : []),
    ...(vehicleId === 'phoenix' ? [{
      title: 'Phoenix · UAV Power & Flight Safety',
      description: 'Phoenix prioritizes low mass and uninterrupted flight actuation. Its compact PDU uses small SMD components and integrated solid-copper busbars to carry peak current while reducing board mass and footprint. Because cutting motor power during flight could cause a fall, Phoenix AESS bypasses the Load Switch, OCP, OVP, and UVLO paths so motors can remain powered through voltage sag; CESS retains OCP protection.',
      bullets: [
        'Dedicated regulated rails and servo drivers power the linear lead-screw Fin-Ray gripper.',
        'Filtered power supports dual-antenna RTK navigation for precise heading during airborne surveillance and payload deployment.'
      ]
    }] : []),
    {
      title: 'Shore Infrastructure · Ground Support',
      description: 'The shore-side UPS uses an 8S battery topology to power the Operator Control Station (OCS), PoE switch, Power Line Communication (PLC), and telemetry. Its higher input rail lets efficient buck regulators step down power for ground equipment, reducing heat and helping keep switching noise away from communications channels.',
      bullets: []
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
    sections = getSharedElectricalSections(vehicleId);
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
              to={vehicleId === 'kraken' ? `/robotx/kraken/${item}` : `/${vehicleId}/${item}`}
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
                  <h2 className="text-center text-2xl sm:text-3xl font-bold text-orange-500 mb-4">
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
