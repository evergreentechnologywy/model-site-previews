import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const LogoDownload = lazy(() => import('./pages/LogoDownload'));
const PageNotFound = lazy(() => import('./components/PageNotFound'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#0a0a0a' }}>
    <div className="animate-pulse space-y-4">
      <div className="w-16 h-16 rounded-full mx-auto" style={{backgroundColor: '#ec489933' }}></div>
      <div className="h-4 w-32 rounded mx-auto" style={{backgroundColor: '#ec489922' }}></div>
    </div>
  </div>
);

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/logo-download" element={<LogoDownload />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default App;