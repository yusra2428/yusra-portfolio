import React from 'react';
import { 
  Globe, 
  Palette, 
  Box, 
  Terminal, 
  Coffee, 
  Cpu, 
  GitBranch, 
  FolderGit2, 
  Flame, 
  Sparkles 
} from 'lucide-react';
import { TECH_TOOLS } from '../data/portfolioData';

export const TechStrip: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#073B2A]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#073B2A]" />;
      case 'Box':
        return <Box className="w-5 h-5 text-[#073B2A]" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#073B2A]" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#073B2A]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#073B2A]" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-[#073B2A]" />;
      case 'FolderGit2':
        return <FolderGit2 className="w-5 h-5 text-[#073B2A]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#F5B51B]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#F5B51B]" />;
      default:
        return <Globe className="w-5 h-5 text-[#073B2A]" />;
    }
  };

  return (
    <div className="py-8 bg-white/60 border-y border-[#073B2A]/10 my-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#F5B51B]" />
            <h3 className="font-heading font-bold text-sm sm:text-base text-[#073B2A] tracking-wide uppercase">
              Tools &amp; Technologies
            </h3>
          </div>
          <span className="text-xs text-[#66736B]">
            Core languages, libraries, and developer environments
          </span>
        </div>

        {/* Scrollable / Responsive Grid */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none sm:grid sm:grid-cols-5 md:grid-cols-10">
          {TECH_TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="group relative flex flex-col items-center justify-center p-3 bg-white rounded-2xl border border-[#073B2A]/10 shadow-2xs hover:shadow-sm hover:-translate-y-1 hover:border-[#F5B51B] transition-all duration-200 min-w-[76px] cursor-default"
              title={`${tool.name} - ${tool.category}`}
            >
              <div className="w-9 h-9 rounded-xl bg-[#F5F0DE] flex items-center justify-center mb-1.5 group-hover:bg-[#DCE9D8] transition-colors">
                {getIcon(tool.iconName)}
              </div>
              <span className="text-xs font-semibold text-[#073B2A] text-center leading-tight truncate w-full">
                {tool.name}
              </span>
              <span className="text-[9px] text-[#66736B] text-center truncate w-full">
                {tool.category}
              </span>

              {/* Tooltip on hover */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#073B2A] text-white text-[10px] rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 shadow-xs">
                {tool.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
