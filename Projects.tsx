import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, GitBranch, ExternalLink } from 'lucide-react';
import { ProjectCategory, Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterCategories: ProjectCategory[] = ['All', 'Web', 'Academic'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.filterCategory === activeFilter;
  });

  return (
    <section id="projects" className="py-16 md:py-24 bg-white/40 border-y border-[#073B2A]/10" aria-label="Featured Projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#DCE9D8] text-[#073B2A] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#073B2A]" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#073B2A] tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-[#F5B51B] mx-auto mt-3 rounded-full" />
          <p className="text-sm sm:text-base text-[#66736B] mt-4">
            Some of the things I've built across modern web design, e-commerce, and academic systems.
          </p>
        </div>

        {/* Category Filter Pills (Requirement #13) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterCategories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#073B2A] ${
                  isActive
                    ? 'bg-[#073B2A] text-[#F5F0DE] shadow-sm scale-105'
                    : 'bg-white text-[#17201B]/80 hover:bg-[#DCE9D8] border border-[#073B2A]/10'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Responsive Grid (Requirement #11) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#073B2A]/10 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Mockup Preview at Top with subtle zoom on hover */}
                <div className="relative overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <div className="transition-transform duration-500 group-hover:scale-[1.02]">
                    <ProjectMockup type={project.mockupType} title={project.title} />
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#DCE9D8] text-[#073B2A]">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#66736B]">
                      {project.filterCategory}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="font-heading font-bold text-xl text-[#073B2A] group-hover:text-[#0B4A35] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#17201B]/80 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#F5F0DE] text-[#073B2A] border border-[#073B2A]/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-lg text-xs font-medium text-[#66736B]">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 sm:px-7 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-[#073B2A]/5">
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-[#073B2A] text-[#F5F0DE] hover:bg-[#0B4A35] text-xs font-semibold transition-all duration-200"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F5B51B]" />
                  </button>

                  {project.liveUrl?.startsWith('http') && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-[#F5B51B] text-[#073B2A] hover:bg-[#F5B51B]/90 text-xs font-bold transition-all shadow-2xs"
                      title="Open live website"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Site</span>
                    </a>
                  )}
                </div>

                {project.githubUrl ? (
                  <div className="flex items-center space-x-2 text-xs text-[#66736B]">
                    <GitBranch className="w-3.5 h-3.5 text-[#073B2A]" />
                    {project.githubUrl.startsWith('http') ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[11px] truncate max-w-[140px] hover:text-[#073B2A] hover:underline"
                        title="View GitHub Repository"
                      >
                        {project.githubUrl.replace('https://github.com/', '')}
                      </a>
                    ) : (
                      <span className="font-mono text-[11px] truncate max-w-[120px]">
                        {project.githubUrl}
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-[11px] font-medium text-[#66736B] bg-[#073B2A]/5 px-2.5 py-1 rounded-full">
                    Final Year Capstone
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#66736B]">
            All projects are maintained in a centralized configuration file for seamless updating and link linking.
          </p>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
