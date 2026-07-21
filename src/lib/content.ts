/**
 * Content Management System
 * 
 * This module provides typed access to all editable content from content.json.
 * Edit the content.json file to update any text, add/remove items, or modify sections.
 * Changes will be reflected throughout the site.
 */

import contentData from '../../content.json';

// Type definitions for content
export interface HeroHighlight {
  id: string;
  text: string;
  color: 'blue' | 'indigo' | 'purple';
}

export interface HeroCTA {
  id: string;
  label: string;
  href: string;
  type: 'primary' | 'secondary' | 'link';
}

export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  missionId: string;
  title: string;
  objective: string;
  description: string;
  technologies: string[];
  researchThemes: string[];
  github?: string;
  demo?: string;
  documentation?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'archived';
  visualType: 'eeg' | 'document' | 'road' | 'protein' | 'emotion' | 'default';
}

export interface ArchivedProject {
  id: string;
  title: string;
  tech: string;
}

export interface ResearchDirection {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'exploring' | 'planned';
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: string;
  description: string;
  status: 'published' | 'under-review' | 'draft';
  link?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface InterestNode {
  id: string;
  label: string;
  x: number;
  y: number;
  connections: string[];
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  startDate: string;
  description: string;
  highlights: string[];
  impactMetrics?: { value: string; label: string }[] | null;
  type: 'work' | 'education' | 'leadership';
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  type: 'award' | 'certification' | 'leadership' | 'milestone';
}

export interface HeroContent {
  statusText: string;
  highlights: HeroHighlight[];
  biography: string;
  ctas: HeroCTA[];
}

export interface AboutContent {
  sectionLabel: string;
  headline: string;
  paragraphs: string[];
  metrics: Metric[];
}

export interface ProjectsContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
  viewAll: string;
  items: Project[];
  archived: ArchivedProject[];
}

export interface ResearchContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
  directions: ResearchDirection[];
  publications: Publication[];
  currentFocus: {
    title: string;
    status: string;
    summary: string;
    keywords: string[];
  };
}

export interface SkillsContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
  categories: SkillCategory[];
  interestNodes: InterestNode[];
}

export interface AchievementsContent {
  sectionLabel: string;
  items: Achievement[];
}

export interface ExperienceContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
  items: Experience[];
  achievements: AchievementsContent;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
}

export interface ContactContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
  email: string;
  availability: string;
  social: SocialLinks;
  footer: {
    copyright: string;
    credits: string;
  };
}

export interface Content {
  hero: HeroContent;
  about: AboutContent;
  projects: ProjectsContent;
  research: ResearchContent;
  skills: SkillsContent;
  experience: ExperienceContent;
  contact: ContactContent;
}

// Create content object with proper typing
const content: Content = {
  hero: contentData.hero as HeroContent,
  about: contentData.about as AboutContent,
  projects: contentData.projects as ProjectsContent,
  research: contentData.research as ResearchContent,
  skills: contentData.skills as SkillsContent,
  experience: contentData.experience as ExperienceContent,
  contact: contentData.contact as ContactContent,
};

// Helper functions for common operations

/**
 * Get featured projects (those marked as featured: true)
 */
export function getFeaturedProjects(): Project[] {
  return content.projects.items.filter(p => p.featured);
}

/**
 * Get archived projects (those marked as featured: false)
 */
export function getArchivedProjects(): ArchivedProject[] {
  return content.projects.archived;
}

/**
 * Get active research directions
 */
export function getActiveResearch(): ResearchDirection[] {
  return content.research.directions.filter(d => d.status === 'active');
}

/**
 * Get experience items filtered by type
 */
export function getExperienceByType(type: 'work' | 'education' | 'leadership'): Experience[] {
  return content.experience.items.filter(e => e.type === type);
}

/**
 * Get achievements filtered by type
 */
export function getAchievementsByType(type: 'award' | 'certification' | 'leadership' | 'milestone'): Achievement[] {
  return content.experience.achievements.items.filter(a => a.type === type);
}

/**
 * Get certifications only
 */
export function getCertifications(): Achievement[] {
  return getAchievementsByType('certification');
}

/**
 * Get awards only
 */
export function getAwards(): Achievement[] {
  return getAchievementsByType('award');
}

/**
 * Get leadership roles only
 */
export function getLeadership(): Achievement[] {
  return getAchievementsByType('leadership');
}

export default content;
