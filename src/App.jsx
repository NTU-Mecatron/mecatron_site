import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { SpeedInsights } from '@vercel/speed-insights/react'


function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <SpeedInsights />
    </>
  );
}

export default App;
