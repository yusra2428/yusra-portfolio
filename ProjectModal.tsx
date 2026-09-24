import React, { useEffect } from 'react';
import { X, ExternalLink, GitBranch, CheckCircle, Lightbulb, Target, UserCheck } from 'lucide-react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#073B2A]/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-[#073B2A]/10 relative my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar & Close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#073B2A]/10 bg-[#F5F0DE]/50">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#DCE9D8] text-[#073B2A]">
              {project.category}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-[#073B2A] hover:bg-white transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#073B2A]"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mockup Preview at Top */}
        <ProjectMockup type={project.mockupType} title={project.title} inModal={true} />

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[68vh] overflow-y-auto">
          
          <div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold font-heading text-[#073B2A] mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[#17201B]/80 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#F5F0DE]/60 border border-[#073B2A]/10">
              <div className="flex items-center space-x-2 text-[#073B2A] font-bold text-sm mb-2">
                <Target className="w-4 h-4 text-[#073B2A]" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-[#66736B] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#DCE9D8]/50 border border-[#073B2A]/10">
              <div className="flex items-center space-x-2 text-[#073B2A] font-bold text-sm mb-2">
                <Lightbulb className="w-4 h-4 text-[#073B2A]" />
                <span>The Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-[#073B2A]/90 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Role */}
          <div className="p-4 rounded-2xl bg-white border border-[#073B2A]/10 shadow-2xs">
            <div className="flex items-center space-x-2 text-[#073B2A] font-bold text-sm mb-1.5">
              <UserCheck className="w-4 h-4 text-[#073B2A]" />
              <span>My Role &amp; Contribution</span>
            </div>
            <p className="text-xs sm:text-sm text-[#66736B]">
              {project.myRole}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-bold font-heading text-[#073B2A] mb-3 uppercase tracking-wider">
              Key Features &amp; Technical Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, index) => (
                <div key={index} className="flex items-start space-x-2 text-xs sm:text-sm text-[#17201B]/80">
                  <CheckCircle className="w-4 h-4 text-[#073B2A] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack */}
          <div>
            <h4 className="text-sm font-bold font-heading text-[#073B2A] mb-2.5 uppercase tracking-wider">
              Technologies &amp; Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl text-xs font-semibold bg-[#F5F0DE] text-[#073B2A] border border-[#073B2A]/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Links */}
        <div className="px-6 py-4 border-t border-[#073B2A]/10 bg-[#F5F0DE]/40 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#66736B]">
            {!project.githubUrl && !project.liveUrl
              ? 'Academic capstone project — hardware simulation & research architecture.'
              : '* Links reflect repository and deployment states.'}
          </div>

          <div className="flex items-center space-x-3">
            {project.githubUrl && (
              project.githubUrl.startsWith('http') ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full border border-[#073B2A]/20 bg-white hover:bg-[#DCE9D8] text-xs font-semibold text-[#073B2A] transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>GitHub Repo</span>
                </a>
              ) : (
                <span className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full border border-[#073B2A]/20 bg-white text-xs font-semibold text-[#073B2A]">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>{project.githubUrl}</span>
                </span>
              )
            )}

            {project.liveUrl && (
              project.liveUrl.startsWith('http') ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#F5B51B] hover:bg-[#F5B51B]/90 text-xs font-bold text-[#073B2A] transition-colors shadow-2xs"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#073B2A]" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#073B2A] text-xs font-semibold text-[#F5F0DE]">
                  <ExternalLink className="w-3.5 h-3.5 text-[#F5B51B]" />
                  <span>{project.liveUrl}</span>
                </span>
              )
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#073B2A] text-white hover:bg-[#0B4A35] text-xs font-semibold transition-colors"
            >
              Done
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
