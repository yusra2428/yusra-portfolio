import React from 'react';
import { ArrowUp, Mail, Linkedin, Github, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-[#073B2A] text-[#F5F0DE] pt-16 pb-12 relative overflow-hidden border-t border-[#F5B51B]/20">
      
      {/* Subtle organic background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F5B51B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#DCE9D8]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#F5B51B] text-[#073B2A] flex items-center justify-center font-heading font-bold text-sm shadow-xs">
                YK
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-[#F5F0DE]">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-sm text-[#DCE9D8] max-w-md leading-relaxed">
              BS Computer Science Graduate specializing in clean, responsive web design and modern front-end development. Dedicated to building engaging digital experiences.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#F5B51B] hover:text-[#073B2A] text-[#F5F0DE] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Email Yusra Khan"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#F5B51B] hover:text-[#073B2A] text-[#F5F0DE] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#F5B51B] hover:text-[#073B2A] text-[#F5F0DE] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#F5B51B] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#DCE9D8]">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#F5B51B] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Links & Status */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#F5B51B] uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#DCE9D8]">
              {navLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#F5B51B] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <span className="inline-flex items-center space-x-1.5 text-xs text-[#F5B51B] font-semibold mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5B51B] animate-pulse" />
                  <span>Available for Hire (2026)</span>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DCE9D8]/80">
          
          <div className="flex items-center space-x-1">
            <span>Designed &amp; built with curiosity, creativity and code.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span>&copy; 2026 {PERSONAL_INFO.name}. All Rights Reserved.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/10 hover:bg-[#F5B51B] hover:text-[#073B2A] text-white transition-colors"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
