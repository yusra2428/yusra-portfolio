import React, { useRef } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, CheckCircle2, Camera, RotateCcw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePhoto } from '../hooks/useProfilePhoto';

export const Hero: React.FC = () => {
  const { photo, isCustom, savePhoto, resetPhoto, persistAsDefault, saveStatus } = useProfilePhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          savePhoto(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      aria-label="Introduction & Overview"
    >
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-[#073B2A]/20 pointer-events-none" />
      <div className="absolute top-44 left-1/4 w-3 h-3 rounded-full bg-[#F5B51B]/40 pointer-events-none" />
      <div className="absolute top-1/2 right-12 w-2 h-2 rounded-full bg-[#073B2A]/20 pointer-events-none" />
      
      {/* Decorative SVG star in the upper canvas */}
      <svg
        className="absolute top-24 right-1/3 w-6 h-6 text-[#F5B51B] opacity-60 pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#DCE9D8] text-[#073B2A] text-xs font-semibold tracking-wide border border-[#073B2A]/10 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#073B2A] animate-pulse" />
              <span>{PERSONAL_INFO.tagline}</span>
            </div>

            {/* Main Editorial Heading */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-heading text-[#073B2A] leading-[1.08] tracking-tight">
                <div>Creative</div>
                <div>Web Designer</div>
                <div className="relative inline-block">
                  <span>&amp; </span>
                  <span className="relative z-10 text-[#073B2A]">
                    Developer
                    <span className="text-[#F5B51B]">.</span>
                  </span>
                  {/* Organic golden curved underline highlight */}
                  <svg
                    className="absolute -bottom-2 left-8 w-full max-w-[240px] h-3 text-[#F5B51B] -z-0"
                    viewBox="0 0 240 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 9.5C65 2.5 175 1.5 238 8"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </h1>
            </div>

            {/* Handwritten-style editorial note with delicate curved arrow */}
            <div className="flex items-center space-x-3 pt-1 text-[#0B4A35]">
              <span className="font-handwriting text-xl sm:text-2xl text-[#0B4A35] font-semibold -rotate-1">
                "{PERSONAL_INFO.heroHandwrittenNote}"
              </span>
              <svg
                className="w-10 h-6 text-[#F5B51B] stroke-current"
                viewBox="0 0 40 24"
                fill="none"
              >
                <path
                  d="M2 18 C 15 22, 28 14, 38 4 M32 3 L38 4 L37 10"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Supporting Bio Paragraph */}
            <p className="text-base sm:text-lg text-[#17201B]/80 max-w-xl leading-relaxed">
              {PERSONAL_INFO.heroSubtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-[#073B2A] text-[#F5F0DE] hover:bg-[#0B4A35] font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#F5B51B]"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 text-[#F5B51B]" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-white text-[#073B2A] hover:bg-[#DCE9D8] border border-[#073B2A]/20 font-semibold text-sm sm:text-base transition-all duration-200 shadow-2xs hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#073B2A]"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-[#073B2A]" />
              </a>
            </div>

            {/* Trust / Focus Pill indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#66736B] font-medium border-t border-[#073B2A]/10">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#073B2A]" />
                <span>Responsive &amp; Accessible</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#073B2A]" />
                <span>Modern Web Technologies</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#073B2A]" />
                <span>Clean Code &amp; Strong CS Core</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Profile Image Composition */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square flex items-center justify-center">
              
              {/* Organic golden-yellow backdrop blob (reference image inspired) */}
              <div
                className="absolute inset-2 sm:inset-0 bg-[#F5B51B] rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%] transition-all duration-700 ease-in-out shadow-lg"
                style={{
                  transform: 'rotate(-4deg)',
                }}
              />

              {/* Hand-drawn editorial lines and dots behind image */}
              <div className="absolute -top-3 -right-3 w-16 h-16 pointer-events-none opacity-80">
                <svg viewBox="0 0 60 60" fill="none" className="w-full h-full text-[#073B2A]">
                  <circle cx="10" cy="10" r="2.5" fill="currentColor" />
                  <circle cx="28" cy="10" r="2.5" fill="currentColor" />
                  <circle cx="46" cy="10" r="2.5" fill="currentColor" />
                  <circle cx="10" cy="28" r="2.5" fill="currentColor" />
                  <circle cx="28" cy="28" r="2.5" fill="currentColor" />
                  <circle cx="46" cy="28" r="2.5" fill="currentColor" />
                </svg>
              </div>

              {/* Little curved line accent */}
              <svg
                className="absolute -bottom-4 -left-4 w-16 h-16 text-[#073B2A]/40 pointer-events-none"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M10 40 C 20 15, 35 15, 45 35"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* Main Circular Profile Frame */}
              <div
                className="relative w-[280px] sm:w-[320px] aspect-square rounded-full bg-white p-2.5 shadow-xl border-2 border-white overflow-hidden cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
                title="Click to choose a photo from your device"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#DCE9D8] to-[#F5F0DE] relative flex items-center justify-center">
                  <img
                    src={photo}
                    alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating Camera Button on Corner (unobtrusive, never covers face) */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="absolute top-2 right-2 sm:right-4 w-9 h-9 rounded-full bg-[#073B2A] text-white hover:bg-[#F5B51B] hover:text-[#073B2A] shadow-md border-2 border-white flex items-center justify-center transition-all z-20 cursor-pointer"
                title="Upload photo from browser"
                aria-label="Upload photo from browser"
              >
                <Camera className="w-4 h-4" />
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                aria-label="Upload profile photo"
              />

              {/* Floating Badge on Profile */}
              <div className="absolute -bottom-4 right-0 sm:right-2 bg-white px-4 py-2.5 rounded-2xl shadow-md border border-[#073B2A]/10 flex items-center space-x-2.5 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <div className="text-left">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#66736B]">
                    Current Status
                  </div>
                  <div className="text-xs font-bold text-[#073B2A]">
                    Open to Opportunities
                  </div>
                </div>
              </div>

            </div>

            {/* Browser Upload & Default Controls */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#073B2A]/20 text-[#073B2A] hover:bg-[#DCE9D8] transition-colors shadow-2xs cursor-pointer"
                title="Select your photo file directly from your computer or phone"
              >
                <Camera className="w-3.5 h-3.5 text-[#073B2A]" />
                <span>Upload photo from browser</span>
              </button>

              {isCustom && (
                <>
                  {saveStatus === 'saved' ? (
                    <span className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Set as Default</span>
                    </span>
                  ) : saveStatus === 'saving' ? (
                    <span className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#F5F0DE] text-[#073B2A] border border-[#073B2A]/10 animate-pulse">
                      <span>Saving to site...</span>
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => persistAsDefault(photo)}
                      className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-bold bg-[#F5B51B] text-[#073B2A] hover:bg-[#F5B51B]/90 transition-colors shadow-2xs cursor-pointer"
                      title="Make this photo the permanent default for all visitors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#073B2A]" />
                      <span>Make Default for Site</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={resetPhoto}
                    className="inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-full text-xs text-[#66736B] hover:text-[#073B2A] hover:bg-black/5 transition-colors cursor-pointer"
                    title="Reset to original default photo"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                </>
              )}
            </div>

            {/* Quick helper note for recruiter/evaluator */}
            <p className="text-[11px] text-[#66736B] text-center mt-3">
              BS in Computer Science • University of Wah
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};
