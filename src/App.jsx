import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Toast from './Toast';
import { SpeedInsights } from '@vercel/speed-insights/react'


function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Toast />
      <SpeedInsights />
    </>
  );
}

export default App;
