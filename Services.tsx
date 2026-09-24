import React from 'react';
import { Smartphone, CodeXml, Sparkles, LayoutGrid, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#073B2A]" />;
      case 'CodeXml':
        return <CodeXml className="w-5 h-5 text-[#073B2A]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#073B2A]" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5 text-[#073B2A]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#073B2A]" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24" aria-label="Services and Capabilities">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#DCE9D8] text-[#073B2A] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#073B2A]" />
            <span>Value &amp; Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#073B2A] tracking-tight">
            What I Can Do
          </h2>
          <div className="w-12 h-1 bg-[#F5B51B] mx-auto mt-3 rounded-full" />
          <p className="text-sm sm:text-base text-[#66736B] mt-4">
            Clean, functional, and user-centric services tailored for web presence and front-end execution.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl p-7 border border-[#073B2A]/10 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#DCE9D8] flex items-center justify-center mb-5 group-hover:bg-[#F5B51B]/30 transition-colors">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="font-heading font-bold text-xl text-[#073B2A] mb-2.5">
                  {service.title}
                </h3>

                <p className="text-sm text-[#17201B]/80 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-4 border-t border-[#073B2A]/10">
                <div className="text-xs font-bold uppercase tracking-wider text-[#66736B] mb-2.5">
                  Core Deliverables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-[#073B2A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#073B2A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
