import { StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'

// Lazy-load heavy 3D and secondary pages to prevent mobile OOM crashes on initial load
const KevinPage = lazy(() => import('./KevinPage.jsx'));
const HydraPage = lazy(() => import('./HydraPage.jsx'));
const KrakenPage = lazy(() => import('./KrakenPage.jsx'));
const LucyPage = lazy(() => import('./LucyPage.jsx'));
const VehiclesPage = lazy(() => import('./VehiclesPage.jsx'));
const GamePage = lazy(() => import('./GamePage.jsx'));

const TeamPage = lazy(() => import('./TeamPage.jsx'));
const CompetitionsPage = lazy(() => import('./CompetitionsPage.jsx'));
const ResearchPage = lazy(() => import('./ResearchPage.jsx'));
const OutreachPage = lazy(() => import('./OutreachPage.jsx'));
const SponsorsPage = lazy(() => import('./SponsorsPage.jsx'));
const ContactPage = lazy(() => import('./ContactPage.jsx'));
const Robosub2025Page = lazy(() => import('./Robosub2025Page.jsx'));
const Robosub2026Page = lazy(() => import('./Robosub2026Page.jsx'));
const RoboSub2026SubsystemPage = lazy(() => import('./RoboSub2026SubsystemPage.jsx'));
const RobotX2026Page = lazy(() => import('./RobotX2026Page.jsx'));
const RobotX2026SubsystemPage = lazy(() => import('./RobotX2026SubsystemPage.jsx'));
const Sauvc2025Page = lazy(() => import('./Sauvc2025Page.jsx'));
const Sauvc2026Page = lazy(() => import('./Sauvc2026Page.jsx'));
const Materov2024Page = lazy(() => import('./Materov2024Page.jsx'));
const Sauvc2024Page = lazy(() => import('./Sauvc2024Page.jsx'));
const Pen3DPage = lazy(() => import('./Pen3DPage.jsx'));
const YYSSPage = lazy(() => import('./YYSSPage.jsx'));
const MarineVehiclePage = lazy(() => import('./MarineVehiclePage.jsx'));
const ComputerVisionPage = lazy(() => import('./ComputerVisionPage.jsx'));
const Blender3DPage = lazy(() => import('./Blender3DPage.jsx'));
const JoinUsPage = lazy(() => import('./JoinUsPage.jsx'));
const TeamBlogPage = lazy(() => import('./TeamBlogPage.jsx'));
const TeamBlogPostPage = lazy(() => import('./TeamBlogPostPage.jsx'));

import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="kevin" element={<KevinPage />} />
          <Route path="hydra" element={<HydraPage />} />
          <Route path="kraken" element={<KrakenPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="vehicles" element={<VehiclesPage />} />
          <Route path="competitions" element={<CompetitionsPage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="outreach" element={<OutreachPage />} />
          <Route path="sponsors" element={<SponsorsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="lucy" element={<LucyPage />} />
          {/* <Route path="focus" element={<FocusPage />} /> */}
          <Route path="robosub2025" element={<Robosub2025Page />} />
          <Route path="robosub2026" element={<Robosub2026Page />} />
          <Route path="robotx2026" element={<RobotX2026Page />} />
          <Route path="robosub2026hydramechanical" element={<RoboSub2026SubsystemPage vehicleId="hydra" subsystemId="mechanical" />} />
          <Route path="hydra/mechanical" element={<RoboSub2026SubsystemPage vehicleId="hydra" subsystemId="mechanical" />} />
          <Route path="hydra/electrical" element={<RoboSub2026SubsystemPage vehicleId="hydra" subsystemId="electrical" />} />
          <Route path="hydra/software" element={<RoboSub2026SubsystemPage vehicleId="hydra" subsystemId="software" />} />
          <Route path="kraken/mechanical" element={<RoboSub2026SubsystemPage vehicleId="kraken" subsystemId="mechanical" />} />
          <Route path="kraken/electrical" element={<RoboSub2026SubsystemPage vehicleId="kraken" subsystemId="electrical" />} />
          <Route path="kraken/software" element={<RoboSub2026SubsystemPage vehicleId="kraken" subsystemId="software" />} />
          <Route path="poseidon/mechanical" element={<RobotX2026SubsystemPage vehicleId="poseidon" subsystemId="mechanical" />} />
          <Route path="poseidon/electrical" element={<RobotX2026SubsystemPage vehicleId="poseidon" subsystemId="electrical" />} />
          <Route path="poseidon/software" element={<RobotX2026SubsystemPage vehicleId="poseidon" subsystemId="software" />} />
          <Route path="phoenix/mechanical" element={<RobotX2026SubsystemPage vehicleId="phoenix" subsystemId="mechanical" />} />
          <Route path="phoenix/electrical" element={<RobotX2026SubsystemPage vehicleId="phoenix" subsystemId="electrical" />} />
          <Route path="phoenix/software" element={<RobotX2026SubsystemPage vehicleId="phoenix" subsystemId="software" />} />
          <Route path="sauvc2025" element={<Sauvc2025Page />} />
          <Route path="sauvc2026" element={<Sauvc2026Page />} />
          <Route path="materov2024" element={<Materov2024Page />} />
          <Route path="sauvc2024" element={<Sauvc2024Page />} />
          <Route path="3dpen" element={<Pen3DPage />} />
          <Route path="yyss" element={<YYSSPage />} />
          <Route path="marinevehicle" element={<MarineVehiclePage />} />
          <Route path="computervision" element={<ComputerVisionPage />} />
          <Route path="blender3d" element={<Blender3DPage />} />
          <Route path="joinus" element={<JoinUsPage />} />
          <Route path="game" element={<GamePage />} />
          <Route path="blog" element={<TeamBlogPage />} />
          <Route path="blog/:slug" element={<TeamBlogPostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
