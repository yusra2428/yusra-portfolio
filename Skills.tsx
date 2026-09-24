import React from 'react';
import { 
  Layout, 
  Code, 
  Cpu, 
  Binary, 
  Wrench, 
  Sparkles, 
  Check 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TechStrip } from './TechStrip';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#073B2A]" />;
      case 'Code':
        return <Code className="w-5 h-5 text-[#073B2A]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#073B2A]" />;
      case 'Binary':
        return <Binary className="w-5 h-5 text-[#073B2A]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#073B2A]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#073B2A]" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24" aria-label="Technical Skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#DCE9D8] text-[#073B2A] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#073B2A]" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#073B2A] tracking-tight">
            My Skills
          </h2>
          <div className="w-12 h-1 bg-[#F5B51B] mx-auto mt-3 rounded-full" />
          <p className="text-sm sm:text-base text-[#66736B] mt-4">
            Hands-on practical programming capabilities grounded in rigorous academic Computer Science foundations.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-3xl p-6 border border-[#073B2A]/10 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#DCE9D8] flex items-center justify-center shrink-0">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#073B2A]">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#66736B] mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                        skill.highlight
                          ? 'bg-[#F5F0DE] text-[#073B2A] border border-[#073B2A]/15 font-semibold hover:border-[#F5B51B]'
                          : 'bg-[#DCE9D8]/50 text-[#073B2A] border border-transparent'
                      }`}
                    >
                      {skill.highlight && (
                        <Check className="w-3 h-3 text-[#073B2A] stroke-[2.5]" />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#073B2A]/5 flex items-center justify-between text-[11px] text-[#66736B]">
                <span>Category Verified</span>
                <span className="font-semibold text-[#073B2A]">{cat.skills.length} Skills</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Embedded Horizontal Technology Strip (Requirement #10) */}
      <TechStrip />
    </section>
  );
};
