export type ProjectCategory = 'All' | 'Web' | 'Academic';

export interface Project {
  id: string;
  title: string;
  category: 'Web Design / Frontend' | 'Final Year Project' | 'E-Commerce / Full-Stack';
  filterCategory: 'Web' | 'Academic';
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  myRole: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl?: string; // Placeholder or real URL
  liveUrl?: string;   // Placeholder or real URL
  mockupType: 'web' | 'drone' | 'ml' | 'mobile' | 'ecommerce';
  mockupImage?: string;
}

export interface SkillItem {
  name: string;
  level?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface TechTool {
  name: string;
  category: string;
  iconSvg?: string;
  iconName: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface ExploringItem {
  title: string;
  badge: string;
  description: string;
  idealFor: string;
}

export interface ServiceItem {
  title: string;
  iconName: string;
  description: string;
  deliverables: string[];
}
