import React from 'react';
import { GraduationCap, Award, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24" aria-label="Academic Education">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#DCE9D8] text-[#073B2A] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#073B2A]" />
            <span>Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#073B2A] tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-[#F5B51B] mx-auto mt-3 rounded-full" />
          <p className="text-sm sm:text-base text-[#66736B] mt-4">
            Formal foundations in Computer Science and analytical thinking.
          </p>
        </div>

        {/* Timeline Structure (Vertical line on desktop, stacked cards on mobile) */}
        <div className="relative">
          {/* Vertical central/left line for desktop */}
          <div className="hidden sm:block absolute left-8 top-4 bottom-4 w-0.5 bg-[#073B2A]/15 -z-0" />

          <div className="space-y-8">
            {EDUCATION_DATA.map((item, index) => (
              <div
                key={item.degree}
                className="relative flex flex-col sm:flex-row items-start sm:space-x-6 group"
              >
                {/* Timeline Icon Node */}
                <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-white border-2 border-[#073B2A]/20 shadow-xs items-center justify-center shrink-0 z-10 group-hover:border-[#F5B51B] group-hover:scale-105 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#DCE9D8] flex items-center justify-center text-[#073B2A]">
                    {index === 0 ? (
                      <GraduationCap className="w-5 h-5 text-[#073B2A]" />
                    ) : (
                      <Award className="w-5 h-5 text-[#073B2A]" />
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="w-full bg-white rounded-3xl p-6 sm:p-7 border border-[#073B2A]/10 shadow-2xs hover:shadow-md transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="sm:hidden inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#DCE9D8] text-[#073B2A] mb-2">
                        {item.period}
                      </span>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[#073B2A]">
                        {item.degree}
                      </h3>
                      <div className="text-sm font-semibold text-[#0B4A35]">
                        {item.institution}
                      </div>
                    </div>

                    <div className="hidden sm:flex flex-col items-end">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#DCE9D8] text-[#073B2A]">
                        {item.period}
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-[#66736B] mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#66736B]" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile location */}
                  <div className="sm:hidden flex items-center space-x-1 text-xs text-[#66736B] mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#66736B]" />
                    <span>{item.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#17201B]/80 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-2 border-t border-[#073B2A]/5">
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-[#073B2A]/90">
                        <CheckCircle2 className="w-4 h-4 text-[#073B2A] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
