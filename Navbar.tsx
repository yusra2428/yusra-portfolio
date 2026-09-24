import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#F5F0DE]/90 backdrop-blur-md shadow-xs border-b border-[#073B2A]/10'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="group flex items-center space-x-2 text-[#073B2A] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#073B2A] rounded-lg p-1"
          aria-label="Yusra Khan - Return to Home"
        >
          <div className="w-8 h-8 rounded-full bg-[#073B2A] text-[#F5F0DE] flex items-center justify-center font-heading font-bold text-sm shadow-xs group-hover:scale-105 transition-transform">
            YK
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg tracking-tight text-[#073B2A] leading-tight group-hover:text-[#0B4A35] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] font-medium text-[#66736B] tracking-wide">
              CS Graduate &amp; Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/70 backdrop-blur-xs px-3 py-1.5 rounded-full border border-[#073B2A]/10 shadow-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#073B2A] font-semibold bg-[#DCE9D8]'
                    : 'text-[#17201B]/80 hover:text-[#073B2A] hover:bg-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#073B2A] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-[#073B2A] text-[#F5F0DE] hover:bg-[#0B4A35] text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#F5B51B]"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4 text-[#F5B51B]" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          id="mobile-menu-button"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/80 border border-[#073B2A]/10 text-[#073B2A] hover:bg-white focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#073B2A]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#F5F0DE]/98 backdrop-blur-md border-b border-[#073B2A]/15 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-[#073B2A] text-[#F5F0DE]'
                      : 'text-[#073B2A] hover:bg-white/80'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#F5B51B]" />}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-[#073B2A] text-[#F5F0DE] font-semibold text-center shadow-xs"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-[#F5B51B]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
