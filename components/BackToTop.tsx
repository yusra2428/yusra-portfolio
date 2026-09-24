import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#073B2A] text-[#F5B51B] hover:bg-[#0B4A35] hover:scale-110 active:scale-95 shadow-lg border-2 border-[#F5B51B]/40 flex items-center justify-center transition-all duration-300 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#F5B51B] animate-in fade-in slide-in-from-bottom-4"
      aria-label="Scroll back to top of page"
      title="Back to Top"
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
};
