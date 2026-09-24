import React from 'react';
import { GraduationCap, Code2, Compass, CheckCircle, Sparkles, BookOpen } from 'lucide-react';
import { ABOUT_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePhoto } from '../hooks/useProfilePhoto';

export const About: React.FC = () => {
  const { photo } = useProfilePhoto();
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white/40 border-y border-[#073B2A]/10 relative"
      aria-label="About Yusra Khan"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#DCE9D8] text-[#073B2A] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#073B2A]" />
            <span>Background &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#073B2A] tracking-tight">
            {ABOUT_DATA.heading}
          </h2>
          <div className="w-12 h-1 bg-[#F5B51B] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-5 text-[#17201B]/85 text-base sm:text-lg leading-relaxed">
            {ABOUT_DATA.paragraphs.map((para, index) => (
              <p key={index} className="text-justify sm:text-left">
                {para}
              </p>
            ))}

            {/* Core Values / Strengths */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3.5 rounded-xl bg-white border border-[#073B2A]/10 flex items-start space-x-3">
                <div className="w-7 h-7 rounded-lg bg-[#DCE9D8] text-[#073B2A] flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#073B2A]">Clean Architecture</div>
                  <div className="text-xs text-[#66736B]">Semantic, modular, and maintainable code.</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#073B2A]/10 flex items-start space-x-3">
                <div className="w-7 h-7 rounded-lg bg-[#F5B51B]/25 text-[#073B2A] flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#073B2A]">Fast Learner</div>
                  <div className="text-xs text-[#66736B]">Eager to adapt to new stacks and workflows.</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Summary Card (from requirement #8) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-[#073B2A]/10 relative overflow-hidden">
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F5B51B]/15 rounded-bl-[80px] pointer-events-none" />

              <div className="flex items-center space-x-3.5 mb-6 pb-4 border-b border-[#073B2A]/10">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-[#073B2A]/15 shadow-2xs shrink-0">
                  <img
                    src={photo}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#073B2A]">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs text-[#66736B]">Snapshot Profile</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Education */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#DCE9D8] text-[#073B2A] flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#66736B] uppercase tracking-wider">
                      Education
                    </div>
                    <div className="text-sm font-bold text-[#073B2A]">
                      {ABOUT_DATA.quickStats.education}
                    </div>
                    <div className="text-xs text-[#66736B]">
                      University of Wah
                    </div>
                  </div>
                </div>

                {/* Focus */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#F5B51B]/25 text-[#073B2A] flex items-center justify-center shrink-0 mt-0.5">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#66736B] uppercase tracking-wider">
                      Focus
                    </div>
                    <div className="text-sm font-bold text-[#073B2A]">
                      {ABOUT_DATA.quickStats.focus}
                    </div>
                    <div className="text-xs text-[#66736B]">
                      Modern responsive web interfaces
                    </div>
                  </div>
                </div>

                {/* Interests */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#DCE9D8] text-[#073B2A] flex items-center justify-center shrink-0 mt-0.5">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#66736B] uppercase tracking-wider">
                      Interests
                    </div>
                    <div className="text-sm font-bold text-[#073B2A]">
                      {ABOUT_DATA.quickStats.interests}
                    </div>
                    <div className="text-xs text-[#66736B]">
                      Creative coding &amp; algorithmic logic
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#66736B] uppercase tracking-wider">
                      Availability
                    </div>
                    <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{ABOUT_DATA.quickStats.availability}</span>
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-[#073B2A]/10 text-center">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-[#073B2A] text-[#F5F0DE] hover:bg-[#0B4A35] font-semibold text-xs transition-colors"
                >
                  Get in Touch
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
