import React from 'react';

interface ProjectMockupProps {
  type: 'web' | 'drone' | 'ml' | 'mobile' | 'ecommerce';
  title: string;
  inModal?: boolean;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type, title, inModal = false }) => {
  if (type === 'ecommerce') {
    return (
      <div className="w-full bg-white relative overflow-hidden flex items-center justify-center border-b border-[#073B2A]/10 select-none">
        <img
          src="/vertexstore-exact.svg"
          alt="VertexStore - Everything You Need, In One Place"
          className="w-full h-auto object-cover block"
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  if (type === 'web') {
    return (
      <div className="w-full bg-white relative overflow-hidden flex items-center justify-center border-b border-[#073B2A]/10 select-none">
        <img
          src="/nexatech-solutions-exact.svg"
          alt="NexaTech Solutions - Transforming Ideas Into Powerful Digital Solutions"
          className="w-full h-auto object-cover block"
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  if (type === 'drone') {
    return (
      <div className="w-full h-52 bg-[#073B2A] relative overflow-hidden flex flex-col border-b border-[#073B2A]/20 select-none text-white p-4">
        {/* Radar / HUD overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F5B51B_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="flex items-center justify-between border-b border-white/10 pb-2 relative z-10">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#F5B51B] animate-ping" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#F5B51B]">MAVLink • MISSION ACTIVE</span>
          </div>
          <span className="text-[10px] font-mono text-white/70 bg-white/10 px-2 py-0.5 rounded">
            ALT: 42m | GPS: LOCK
          </span>
        </div>

        {/* Center Drone Diagram */}
        <div className="flex-1 flex items-center justify-center relative z-10 py-1">
          <div className="relative w-28 h-20 flex items-center justify-center">
            {/* Drone Cross Arms */}
            <div className="absolute w-24 h-0.5 bg-[#F5B51B]/60 rotate-45" />
            <div className="absolute w-24 h-0.5 bg-[#F5B51B]/60 -rotate-45" />
            {/* Propellers */}
            <div className="absolute top-0 left-0 w-5 h-5 rounded-full border border-[#F5B51B] border-dashed animate-spin" />
            <div className="absolute top-0 right-0 w-5 h-5 rounded-full border border-[#F5B51B] border-dashed animate-spin" />
            <div className="absolute bottom-0 left-0 w-5 h-5 rounded-full border border-[#F5B51B] border-dashed animate-spin" />
            <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full border border-[#F5B51B] border-dashed animate-spin" />
            {/* Core Box */}
            <div className="relative w-8 h-8 rounded bg-[#F5B51B] text-[#073B2A] flex flex-col items-center justify-center shadow-lg font-bold text-[9px]">
              <span>PIX</span>
              <span className="text-[7px] leading-none">HAWK</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-[9px] font-mono relative z-10 bg-white/5 p-2 rounded border border-white/10">
          <div>
            <span className="text-white/50 block text-[8px]">WAYPOINT</span>
            <span className="text-[#F5B51B] font-bold">WP-04 / 07</span>
          </div>
          <div>
            <span className="text-white/50 block text-[8px]">BATTERY</span>
            <span className="text-[#DCE9D8] font-bold">88% (4S LiPo)</span>
          </div>
          <div>
            <span className="text-white/50 block text-[8px]">PAYLOAD</span>
            <span className="text-white font-bold">SECURED</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ml') {
    return (
      <div className="w-full h-52 bg-[#0B4A35] relative overflow-hidden flex flex-col border-b border-[#073B2A]/20 select-none text-white p-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-[#DCE9D8]" />
            <span className="text-[11px] font-mono text-[#DCE9D8] tracking-wider uppercase font-semibold">
              SCIKIT-LEARN PIPELINE
            </span>
          </div>
          <span className="text-[10px] font-mono bg-[#F5B51B] text-[#073B2A] font-bold px-2 py-0.5 rounded">
            ROC-AUC: 0.942
          </span>
        </div>

        {/* Matrix Visualization */}
        <div className="flex-1 grid grid-cols-2 gap-2 my-2.5">
          <div className="bg-white/10 rounded p-2 flex flex-col justify-between border border-white/5">
            <span className="text-[8px] font-mono text-white/60">CONFUSION MATRIX</span>
            <div className="grid grid-cols-2 gap-1 text-center font-mono text-[9px]">
              <div className="bg-[#DCE9D8]/30 text-white p-1 rounded font-bold">TP: 842</div>
              <div className="bg-white/5 text-white/70 p-1 rounded">FP: 28</div>
              <div className="bg-white/5 text-white/70 p-1 rounded">FN: 36</div>
              <div className="bg-[#DCE9D8]/30 text-white p-1 rounded font-bold">TN: 794</div>
            </div>
            <span className="text-[8px] text-right text-[#DCE9D8]">F1-Score: 0.96</span>
          </div>

          <div className="bg-white/10 rounded p-2 flex flex-col justify-between border border-white/5">
            <span className="text-[8px] font-mono text-white/60">FEATURE IMPORTANCE</span>
            <div className="space-y-1 my-1">
              <div>
                <div className="flex justify-between text-[7px] font-mono text-white/80">
                  <span>var_feature_01</span>
                  <span>42%</span>
                </div>
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#F5B51B] w-[84%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[7px] font-mono text-white/80">
                  <span>var_feature_04</span>
                  <span>26%</span>
                </div>
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#DCE9D8] w-[52%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[7px] font-mono text-white/80">
                  <span>var_feature_09</span>
                  <span>18%</span>
                </div>
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white/60 w-[36%]" />
                </div>
              </div>
            </div>
            <span className="text-[8px] text-white/60">Cross-Validation k=5</span>
          </div>
        </div>

        <div className="text-[9px] font-mono text-white/70 flex justify-between">
          <span>Target: Binary Classification</span>
          <span className="text-[#F5B51B]">Model: Random Forest / GridSearch</span>
        </div>
      </div>
    );
  }

  // Mobile App Mockup
  return (
    <div className="w-full h-52 bg-[#F5F0DE] relative overflow-hidden flex items-center justify-center p-3 border-b border-[#073B2A]/10 select-none">
      {/* Mini phone frame */}
      <div className="w-44 h-48 bg-[#073B2A] rounded-2xl p-1.5 shadow-md flex flex-col border border-[#073B2A]/20">
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col">
          {/* Status bar */}
          <div className="h-3.5 bg-[#073B2A] text-white flex items-center justify-between px-2 text-[7px]">
            <span>9:41</span>
            <div className="w-2.5 h-1 bg-white/80 rounded-xs" />
          </div>
          {/* App header */}
          <div className="p-2 bg-[#DCE9D8]/50 border-b border-[#073B2A]/10 flex items-center justify-between">
            <span className="font-heading font-bold text-[10px] text-[#073B2A]">Workspace App</span>
            <span className="w-3 h-3 rounded-full bg-[#F5B51B] text-[7px] text-[#073B2A] font-bold flex items-center justify-center">YK</span>
          </div>
          {/* App Body */}
          <div className="p-2 space-y-1.5 flex-1 bg-gradient-to-b from-white to-[#F5F0DE]/40">
            <div className="p-1.5 rounded bg-white border border-[#073B2A]/10 shadow-xs flex items-center justify-between">
              <div>
                <div className="text-[8px] font-bold text-[#073B2A]">Syncing with Firebase</div>
                <div className="text-[6.5px] text-[#66736B]">Live cloud listener</div>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="p-1.5 rounded bg-white border border-[#073B2A]/10 shadow-xs">
              <div className="text-[7.5px] font-semibold text-[#073B2A]">Course Management</div>
              <div className="text-[6.5px] text-[#66736B]">Tasks, records & schedules</div>
            </div>

            <div className="h-6 rounded bg-[#073B2A] text-white flex items-center justify-center text-[7.5px] font-medium tracking-wide">
              Submit Record
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
