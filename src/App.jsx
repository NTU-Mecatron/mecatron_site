import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
// import Toast from './Toast';
import { SpeedInsights } from '@vercel/speed-insights/react'

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, search]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense
        fallback={
          <div className="min-h-screen bg-[#181818] flex items-center justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <Footer />
      {/* <Toast /> */}
      <SpeedInsights />
    </>
  );
}

export default App;
