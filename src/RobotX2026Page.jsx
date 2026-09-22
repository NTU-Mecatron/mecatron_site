import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { Optimized3DViewer } from './components/Optimized3DViewer';

const sharedSoftwareFeature = {
  title: 'Software',
  tag: 'Software',
  description: 'RobotX 2026 extends Mecatron\'s multi-vehicle strategy from two Unmanned Underwater Vehicles to a heterogeneous team of three. To manage this, all three vehicles run the same containerized ROS2 autonomy stack.',
  details: [
    'UnitySim',
    'Spatial Perception',
    'Navigation and Mission Planning',
    'Fleet Communication Architecture'
  ],
  image: '/images/robotx2026/software-subsystems/software-header.jpg',
};

const krakenSoftwareFeature = {
  ...sharedSoftwareFeature,
  details: [
    ...sharedSoftwareFeature.details,
    'UUV Localization'
  ]
};

const sharedElectricalFeature = {
  title: 'Electrical',
  tag: 'Electrical',
  description: 'A shared electrical architecture connects CESS and AESS across the RobotX fleet, with vehicle-specific power systems, modular electronics, and layered safety.',
  details: [
    'Fleet-wide CESS and AESS architecture',
    'Battery and actuator safety systems',
    'Poseidon, Kraken, and Phoenix power designs',
    'Shore-side UPS and ground support',
  ],
  image: '/competition/images/robotx-all-vehicles.jpg',
};

const vehicleTabs = {
  poseidon: {
    label: 'Poseidon (USV)',
    title: 'Poseidon 2026',
    modelType: 'poseidon',
    linkTo: '/poseidon',
    image: '/competition/images/robosub2026-bots.jpg',
    features: [
      {
        title: 'Mechanical',
        tag: 'Mechanical',
        description: 'Poseidon 2026 is an upgraded version of Lucy 2025, with an updated thruster configuration, improved frame through topology optimization, and greater design modularity.',
        details: [
          '8-Thruster Configuration',
          'Mass Optimization',
          'Modular Frame Design',
          'Dropper',
          'Gripper'
        ], 
        subpage: '/poseidon/mechanical',
        image: '/robosub_2026/mechanical-hydra-header.png',
      },
      {
        ...sharedElectricalFeature,
        subpage: '/poseidon/electrical'
      },
      {
        ...sharedSoftwareFeature,
        subpage: '/poseidon/software',
      },
    ]
  },
  kraken: {
    label: 'Kraken (UUV)',
    title: 'Kraken 2026',
    modelType: 'kraken',
    linkTo: '/kraken',
    image: '/images/robosub2026/mechanical-subsystems/blog2-11.jpg',
    features: [
      {
        title: 'Mechanical',
        tag: 'Mechanical',
        description: 'Kraken is an experimental platform for Mecatron to develop more mature manufacturing processes. I WANT TO EDIT THIS DESCRIPTION. I WANT TO EDIT THIS DESCRIPTION. I WANT TO EDIT THIS DESCRIPTION. I WANT TO EDIT THIS DESCRIPTION. I WANT TO EDIT THIS DESCRIPTION. I WANT TO EDIT THIS DESCRIPTION. I WANT TO EDIT THIS DESCRIPTION. I WANT TO EDIT THIS DESCRIPTION. I WANT TO EDIT THIS DESCRIPTION. I WANT TO EDIT THIS DESCRIPTION. I WANT TO EDIT THIS DESCRIPTION. I WANT TO EDIT THIS DESCRIPTION. I WANT TO EDIT THIS DESCRIPTION. I WANT TO EDIT THIS DESCRIPTION. I WANT TO EDIT THIS DESCRIPTION.',
        details: [
          '8-Thruster Configuration',
          'Acrylic Skeletal Frame',
          'Hydrodynamics Optimization',
          'CNC Aluminum Electronics Enclosure Box',
          'Torpedo'
        ],
        subpage: '/robotx/kraken/mechanical',
        image: '/images/robosub2026/mechanical-subsystems/blog2-11.jpg'
      },
      {
        ...sharedElectricalFeature,
        subpage: '/robotx/kraken/electrical',
      },
      {
        ...krakenSoftwareFeature,
        subpage: '/robotx/kraken/software'
      },
    ]
  },
  phoenix: {
    label: 'Phoenix (UAV)',
    title: 'Phoenix 2026',
    modelType: 'phoenix',
    linkTo: '/phoenix',
    image: '/competition/images/robosub2026-bots.jpg',
    features: [
      {
        title: 'Mechanical',
        tag: 'Mechanical',
        description: 'Phoenix 2026 features a lightweight airframe engineered for agile flight, stable hovering, and reliable aerial payload deployment.',
        details: [
          'Carbon-Fibre Frame',
          'Unity Simulation',
          'BT-Based Mission Planning',
          'TPU Gripper',
          'Double Capacity with Longer Distance'
        ], 
        subpage: '/phoenix/mechanical',
        image: '/robosub_2026/staging_test.jpg',
      },
      {
        ...sharedElectricalFeature,
        subpage: '/phoenix/electrical'
      },
      {
        ...sharedSoftwareFeature,
        subpage: '/phoenix/software',
      },
    ]
  },
};

const tagStyles = {
  Electrical: 'border-sky-300/40 bg-sky-400/15 text-sky-100',
  Software: 'border-emerald-300/40 bg-emerald-400/15 text-emerald-100',
  Mechanical: 'border-orange-300/40 bg-orange-400/15 text-orange-100',
  'Vehicle Test': 'border-purple-300/40 bg-purple-400/15 text-purple-100'
};

const journeyTimeline = [
  {
    phase: 'Phase 1',
    title: 'Digital Twin Architecture, Autonomy Simulation & Structural Sizing',
    period: 'Jul 2026 - Aug 2026',
    details: [
      'Multi-Domain Virtual Modeling:',
      'Pre-Assembly Autonomy & State Estimation:',
      'Mechanical Framing & Actuator CAD:',
      'Cross-Domain Data Infrastructure:'
    ],
    subpoints: [
      'Expanded UnityMDS to simulate full tri-domain dynamics, generating synthetic camera, LiDAR, DVL, GNSS, and IMU data alongside drag and added-mass hydrodynamic models. Integrated independent ArduPilot SITL instances for each platform.',
      'Prototyped the shared Nav3 stack, Behavior Tree mission delegation, and the UUV\'s Square-Root Unscented Kalman Filter (SR-UKF) localization in simulation under simulated bright-light and murky-water conditions.',
      'Designed the USV and UUV 30° square thruster geometries. CAD-modeled the USV 2-DOF planetary-gear water shooter, the modular UUV frame with universal mounting points, and the lightweight carbon-fiber UAV frame with low-infill mounts and compliant TPU gripper.',
      'Configured Zenoh routing topologies and ROS 2 domain separations to isolate high-bandwidth intra-vehicle traffic while bridging mission actions and elevated UAV bird\'s-eye-view target data.'
    ]
  },
  {
    phase: 'Phase 2',
    title: 'Parallel Hardware Fabrication, Subsystem Assembly & Reality Transfer',
    period: 'Aug 2026 - Sep 2026',
    details: [
      'Mechanical Actuation & Hull Assembly: CNC-machined the USV 2-DOF planetary-gear pan-tilt water-shooter and assembled the nozzle pump system. Fabricated the UUV rectangular aluminum electronics enclosure (with transparent service lid) for passive convective heat transfer, assembled its PWM servo-driven magnetic probe, and 3D-printed the UAV TPU gripper and protective environmental cowl.',
      'Board-Level Electrical Staging: Independently fabricated and verified custom PCBs across power-distribution, ideal-diode, load-switch, battery-management, and UPS circuits before mounting them into vehicle chassis.',
      'Sim-to-Real Code Deployment: Transferred the containerized ROS 2 autonomy stack directly onto physical hardware via shared TF frames and identical topic schemas using the deployment configuration flag.'
    ]
  },
  {
    phase: 'Phase 3',
    title: 'Sensor-Actuator Tuning, Subsea Calibration & Multi-Domain Field Trials',
    period: 'Sep 2026 - Oct 2026',
    details: [
      'Perception & Gimbal Extrinsic Calibration: Calibrated TensorRT YOLO11 instance segmentation pipelines across all vehicles. Fused USV Ouster LiDAR and camera point clouds via dynamic gimbal extrinsics, calibrated monocular Depth Anything networks for the UUV and UAV, and tuned per-object SR-UKF global frame tracking.',
      'Subsea & Aerial Subsystem Validation: Validated UUV thermal performance and enclosure seals in water. Calibrated the 40/12/10 Hz time-ordered SR-UKF external odometry (IMU, DVL, pressure sensor) for subsea dead reckoning, and verified UAV AprilTag payload drop alignment.',
      'Collaborative In-Water System-of-Systems Trials: Executed full multi-agent field trials for Task 1 (UAV elevated BEV guidance to USV Nav3 costmap), Task 2 (UUV subsea tracking and magnetic probe engagement with UAV drop), and Task 3 (USV visual-servoing water shooter on docking berths with coordinated aerial delivery). Verified battery health gating and mission timeouts ahead of the November competition.'
    ]
  }
];

function TimelineDetail({ detail }) {
  const colonIndex = detail.indexOf(':');

  if (colonIndex === -1) {
    return <>{detail}</>;
  }

  return (
    <>
      <strong>{detail.slice(0, colonIndex + 1)}</strong>
      {detail.slice(colonIndex + 1)}
    </>
  );
}

export default function RobotX2026Page() {
  const [activeVehicle, setActiveVehicle] = useState('poseidon');
  const [openTimelinePhase, setOpenTimelinePhase] = useState(null);
  const vehicle = vehicleTabs[activeVehicle];
  const tabs = useMemo(() => Object.entries(vehicleTabs), []);

  const handleVehicleChange = (id) => {
    setActiveVehicle(id);
  };

  return (
    <div className="min-h-screen bg-[#181818] text-white font-sans">
      <div className="flex flex-col pt-32 items-center text-center px-4">
        <div className="text-lg text-gray-300">November 2026</div>
        <h1 className="text-5xl sm:text-6xl font-bold text-orange-500 mb-8">RobotX 2026</h1>

        <div className="inline-flex rounded-lg border border-white/15 bg-white/10 p-1 backdrop-blur-md">
          {tabs.map(([id, tab]) => (
            <button
              key={id}
              type="button"
              onClick={() => handleVehicleChange(id)}
              className={`px-6 py-2 rounded-md text-sm sm:text-base font-semibold transition-all duration-200 ${
                activeVehicle === id
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-between gap-4 pb-0 px-8 md:px-20 bg-[#181818]">
        <div className="flex-1 flex items-center justify-center mt-6 md:mt-0 w-full">
          <div className="w-[20rem] h-[20rem] sm:w-[23rem] sm:h-[23rem] md:w-[30rem] md:h-[30rem] lg:w-[36rem] lg:h-[22rem] rounded-full flex items-center justify-center overflow-hidden relative bg-transparent">
            <Optimized3DViewer
              showModel={true}
              scale={[5.5, 5.5, 5.5]}
              enableTouchControls={true}
              modelType={vehicle.modelType}
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-4">
            {vehicle.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-5 max-w-xl mx-auto md:mx-0">
            Interact with the 3D model on the left to explore a 360° view of the vehicle!
          </p>
        </div>

      </section>

      <div className="flex flex-col gap-3 px-5 md:flex-row md:gap-5 justify-center -mt-2 md:-mt-8 pb-10">
        <Link
            to={vehicle.linkTo}
            className="inline-block bg-orange-600 hover:bg-[#d73a1a] text-white font-semibold px-8 py-2 rounded-lg shadow"
          >
            View {vehicle.label}
          </Link>
        <a
          href="/robosub_2026/Mecatron-Technical-Design-Report-2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-600 hover:bg-[#d73a1a] text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
        >
          Technical Paper 2026
        </a>

        <Link
          to="/blog?tab=robotx2026"
          className="inline-block bg-orange-600 hover:bg-[#d73a1a] text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
        >
          Team Blog
        </Link>
      </div>
        

      <section className="bg-[#202020] px-4 sm:px-8 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-4">
              Improved Features
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {vehicle.features.map((feature) => (
              <article
                key={feature.title}
                className="flex h-full flex-col rounded-lg border border-white/15 bg-white/10 backdrop-blur-md shadow-xl shadow-black/20 overflow-hidden"
              >
                <div className="aspect-video bg-zinc-900">
                  <img
                    src={feature.image}
                    alt={`${feature.title} placeholder`}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {feature.title}
                    </h3>

                    <span
                      className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${tagStyles[feature.tag]}`}
                    >
                      {feature.tag}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  <ul className="space-y-2 text-sm sm:text-base text-gray-200 list-disc pl-5">
                    {feature.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center pt-6">
                    <Link
                      to={feature.subpage}
                      className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
                    >
                      View More
                    </Link>
                  </div>
                </div>

              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 md:px-20 py-16 bg-[#1a1a1a]">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-orange-500 mb-10">RobotX 2026 Team Video</h2>
          <div className="w-full aspect-video max-w-4xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/mK8vjsBc7f4"
              title="Team Mecatron RobotX Introduction Video | RobotX 2026"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 sm:px-8 md:px-20 py-20">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center blur-sm"
          style={{ backgroundImage: "url('/images/robosub2026-team-photo.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/80" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-orange-500 mb-8">RobotX 2026 Developmental Timeline</h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              Here’s how Mecatron pushed through a demanding development sprint to build and deploy our tri-domain fleet.
            </p>
            <div className="mt-6">
              <Link
                to="/blog?tab=robotx2026"
                className="inline-block bg-orange-600 hover:bg-[#d73a1a] text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
              >
                View RobotX 2026 Blog
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {journeyTimeline.map((item, index) => (
                <article
                  key={item.phase}
                  className="rounded-lg border border-white/15 bg-white/10 shadow-xl shadow-black/20 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenTimelinePhase(openTimelinePhase === index ? null : index)}
                    className="w-full p-6 text-left"
                    aria-expanded={openTimelinePhase === index}
                  >
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-400 bg-orange-500 text-sm font-bold text-white">
                          {index + 1}
                        </div>
                        <p className="text-sm font-bold uppercase tracking-normal text-orange-200">
                          {item.phase}
                        </p>
                      </div>
                      <FaChevronDown
                        className={`text-sm text-orange-200 transition-transform duration-200 ${openTimelinePhase === index ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-sm sm:text-base text-gray-300">
                      {item.period}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                  </button>

                  <div className={`grid transition-all duration-300 ease-out ${openTimelinePhase === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <div className="border-t border-white/10 bg-black/20 px-6 py-5">
                        <ul className="space-y-2 text-sm sm:text-base text-gray-200 list-disc pl-5">
                          {item.details.map((detail, detailIndex) => {
                            const detailText = item.subpoints?.[detailIndex]
                              ? `${detail} ${item.subpoints[detailIndex]}`
                              : detail;

                            return (
                              <li key={detail}>
                                <TimelineDetail detail={detailText} />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
