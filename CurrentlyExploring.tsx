import React from 'react';
import { Briefcase, Compass, Users, Sparkles, Laptop, Palette } from 'lucide-react';
import { CURRENTLY_EXPLORING } from '../data/portfolioData';

export const CurrentlyExploring: React.FC = () => {
  const getIcon = (title: string, index: number) => {
    switch (title) {
      case 'AI & Creative Design':
        return <Palette className="w-5 h-5 text-[#073B2A]" />;
      case 'Internships':
        return <Briefcase className="w-5 h-5 text-[#073B2A]" />;
      case 'Entry-Level Roles':
        return <Laptop className="w-5 h-5 text-[#073B2A]" />;
      case 'Freelance Projects':
        return <Sparkles className="w-5 h-5 text-[#073B2A]" />;
      case 'Collaborations':
        return <Users className="w-5 h-5 text-[#073B2A]" />;
      default:
        return <Compass className="w-5 h-5 text-[#073B2A]" />;
    }
  };

  return (
    <section id="exploring" className="py-16 md:py-20 bg-white/40 border-y border-[#073B2A]/10" aria-label="Career Status">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#DCE9D8] text-[#073B2A] text-xs font-semibold tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-[#073B2A]" />
            <span>Growth & Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#073B2A] tracking-tight">
            Currently Exploring
          </h2>
          <div className="w-12 h-1 bg-[#F5B51B] mx-auto mt-3 rounded-full" />
          <p className="text-sm sm:text-base text-[#17201B]/80 mt-4 leading-relaxed">
            Actively diving into AI & creative design, open to internships, entry-level engineering roles, freelance opportunities, and collaborative ventures.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRENTLY_EXPLORING.map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-6 border border-[#073B2A]/10 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#DCE9D8] flex items-center justify-center">
                    {getIcon(item.title, index)}
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                    item.title === 'AI & Creative Design'
                      ? 'bg-[#F5B51B]/20 text-[#073B2A] border-[#F5B51B]/50'
                      : 'bg-[#F5F0DE] text-[#073B2A] border-[#073B2A]/10'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#073B2A] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#66736B] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#073B2A]/10 text-[11px] text-[#0B4A35]">
                <span className="font-semibold block text-[#073B2A]">Target Environment:</span>
                <span className="text-[#66736B]">{item.idealFor}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="mt-12 bg-[#073B2A] rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-heading font-bold text-lg sm:text-xl text-[#F5F0DE]">
              Have an opening or project in mind?
            </h4>
            <p className="text-xs sm:text-sm text-[#DCE9D8] max-w-xl">
              I am available for immediate interviews and technical evaluations. Let's discuss how I can add value to your team.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-[#F5B51B] text-[#073B2A] hover:bg-white font-bold text-xs sm:text-sm transition-colors shadow-xs shrink-0"
          >
            Start Conversation
          </a>
        </div>

      </div>
    </section>
  );
};
