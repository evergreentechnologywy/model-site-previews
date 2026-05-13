import React, { useState, useEffect } from 'react';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Phone, Mail, ExternalLink, Instagram, 
  Twitter, Globe, ChevronRight, Heart, Sparkles,
  Star, MapPin, Clock, Shield, MessageCircle
} from 'lucide-react';
import { cn } from './lib/utils';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/tssweetcatvip', label: 'Twitter' },
    { icon: ExternalLink, href: 'https://linktr.ee/tssweetcat', label: 'Linktree' },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{backgroundColor: '#0a0a0a', color: '#f5f5f5' }}>
      {/* Navigation */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-opacity-95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        )}
        style={{backgroundColor: isScrolled ? '#0a0a0add' : 'transparent' }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                   style={{background: 'linear-gradient(135deg, #ec4899, #a855f7)' }}>
                SC
              </div>
              <span className="text-xl font-bold tracking-wide" 
                    style={{fontFamily: 'Playfair Display', serif }}>
                Sweet Cat
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-medium tracking-wide transition-all duration-200 hover:text-opacity-100 relative py-1',
                      isActive ? 'text-opacity-100' : 'text-opacity-70'
                    )
                  }
                  style={({ isActive }) => ({
                    color: isActive ? '#ec4899' : '#f5f5f5',
                  })}
                  end={link.path === '/'}
                >
                  {link.label}
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                          style={{backgroundColor: '#ec4899' }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{opacity: 0, height: 0 }}
              animate={{opacity: 1, height: 'auto' }}
              exit={{opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
              style={{backgroundColor: '#0a0a0a' }}
            >
              <div className="px-4 py-4 space-y-2 border-t" style={{borderColor: '#f5f5f511' }}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{opacity: 0, x: -20 }}
                    animate={{opacity: 1, x: 0 }}
                    transition={{delay: i * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        cn(
                          'block px-4 py-3 rounded-lg text-base font-medium transition-all',
                          isActive ? 'bg-opacity-20' : 'hover:bg-white/5'
                        )
                      }
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? '#ec489922' : 'transparent',
                        color: isActive ? '#ec4899' : '#f5f5f5',
                      })}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}

                {/* Mobile Booking CTA */}
                <motion.div
                  initial={{opacity: 0, y: 20 }}
                  animate={{opacity: 1, y: 0 }}
                  transition={{delay: 0.3 }}
                  className="pt-4 space-y-3"
                >
                  <a
                    href="https://booking-manageme.formaloo.me/tssweetcat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full px-6 py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90"
                    style={{background: 'linear-gradient(135deg, #ec4899, #a855f7)' }}
                  >
                    <Calendar size={18} />
                    <span>Book Now</span>
                  </a>
                  <a
                    href="sms:+17202514659"
                    className="flex items-center justify-center space-x-2 w-full px-6 py-3 rounded-lg font-medium transition-all border"
                    style={{borderColor: '#ec489944', color: '#ec4899' }}
                  >
                    <MessageCircle size={18} />
                    <span>Text Me</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16 md:pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t" style={{backgroundColor: 'color-mix(in srgb, #0a0a0a 80%, black)', borderColor: '#f5f5f511' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                     style={{background: 'linear-gradient(135deg, #ec4899, #a855f7)' }}>
                  SC
                </div>
                <span className="text-lg font-bold" style={{fontFamily: 'Playfair Display', serif }}>
                  Sweet Cat
                </span>
              </div>
              <p className="text-sm opacity-60">
                Elegance and allure, redefined.
              </p>
              {/* Social Links */}
              <div className="flex space-x-3 pt-2">
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-50">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm opacity-70 hover:opacity-100 transition-opacity flex items-center space-x-2 group"
                    >
                      <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" 
                                    style={{color: '#ec4899' }} />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Booking */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-50">
                Get In Touch
              </h3>
              <a
                href="sms:+17202514659"
                className="flex items-center space-x-3 text-sm opacity-70 hover:opacity-100 transition-opacity group"
              >
                <MessageCircle size={16} style={{color: '#ec4899' }} />
                <span>+17202514659</span>
              </a>
              <a
                href="mailto:tssweetcat@gmail.com"
                className="flex items-center space-x-3 text-sm opacity-70 hover:opacity-100 transition-opacity group"
              >
                <Mail size={16} style={{color: '#ec4899' }} />
                <span>tssweetcat@gmail.com</span>
              </a>
              <a
                href="https://booking-manageme.formaloo.me/tssweetcat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm opacity-70 hover:opacity-100 transition-opacity group"
              >
                <ExternalLink size={16} style={{color: '#ec4899' }} />
                <span>Book an Appointment</span>
              </a>
            </div>
          </div>

          {/* Reviewer Badges */}
          <div className="mt-8 pt-8 border-t flex flex-wrap items-center justify-center gap-4"
               style={{borderColor: '#f5f5f511' }}>
            <a
              href="https://tryst.link/escort/tssweetcat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:opacity-80 border"
              style={{borderColor: '#ec489933', color: '#ec4899' }}
            >
              Tryst Link
            </a>
            <a
              href="https://www.theeroticreview.com/reviews/ts-sweet-love-4804171167-379496"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:opacity-80 border"
              style={{borderColor: '#a855f733', color: '#a855f7' }}
            >
              TER Reviews
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center">
            <p className="text-xs opacity-40">
              &copy; {new Date().getFullYear()} Sweet Cat. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;