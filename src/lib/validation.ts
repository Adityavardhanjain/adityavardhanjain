/**
 * Content validation and normalization utilities for resilient component rendering.
 * All dynamic data should pass through these validators before rendering.
 */

// Type definitions for validated content
export interface ValidatedProject {
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
  status: "completed" | "in-progress" | "archived";
  visualType: "eeg" | "document" | "road" | "protein" | "emotion" | "default";
}

export interface ValidatedExperience {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  startDate: string;
  description: string;
  highlights: string[];
  impactMetrics?: { value: string; label: string }[];
  type: "work" | "education" | "leadership";
}

export interface ValidatedPublication {
  id: string;
  title: string;
  venue: string;
  year: string;
  description: string;
  status: "published" | "under-review" | "draft";
  link?: string;
}

export interface ValidatedResearchDirection {
  id: string;
  title: string;
  description: string;
  status: "active" | "exploring" | "planned";
}

export interface ValidatedAchievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  type: "award" | "certification" | "leadership" | "milestone";
}

export interface ValidatedSkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

// Safe string validator - returns empty string fallback if invalid
export function safeString(value: unknown, fallback: string = ""): string {
  if (typeof value === "string" && value.trim().length > 0) {
    return value.trim();
  }
  return fallback;
}

// Safe array validator - returns empty array fallback if invalid
export function safeArray<T>(value: unknown, fallback: T[] = []): T[] {
  if (Array.isArray(value)) {
    return value as T[];
  }
  return fallback;
}

// Safe URL validator - returns undefined if invalid
export function safeUrl(value: unknown): string | undefined {
  if (typeof value === "string" && value.trim().length > 0) {
    try {
      new URL(value);
      return value.trim();
    } catch {
      // Not a valid URL, but may be a relative path
      if (value.startsWith("/") || value.startsWith("#")) {
        return value.trim();
      }
      return undefined;
    }
  }
  return undefined;
}

// Safe number validator - returns fallback if invalid
export function safeNumber(value: unknown, fallback: number): number {
  if (typeof value === "number" && !isNaN(value) && isFinite(value)) {
    return value;
  }
  return fallback;
}

// Safe boolean validator
export function safeBoolean(value: unknown, fallback: boolean = false): boolean {
  if (typeof value === "boolean") {
    return value;
  }
  return fallback;
}

// Validate and normalize a project object
export function validateProject(project: unknown): ValidatedProject | null {
  if (!project || typeof project !== "object") {
    return null;
  }

  const p = project as Record<string, unknown>;

  const id = safeString(p.id);
  if (!id) return null;

  return {
    id,
    missionId: safeString(p.missionId, "MISSION-XX"),
    title: safeString(p.title, "Untitled Project"),
    objective: safeString(p.objective),
    description: safeString(p.description, "No description available."),
    technologies: safeArray(p.technologies, []),
    researchThemes: safeArray(p.researchThemes, []),
    github: safeUrl(p.github),
    demo: safeUrl(p.demo),
    documentation: safeUrl(p.documentation),
    featured: safeBoolean(p.featured, false),
    status: validateStatus(p.status),
    visualType: validateVisualType(p.visualType),
  };
}

function validateStatus(status: unknown): "completed" | "in-progress" | "archived" {
  if (status === "completed" || status === "in-progress" || status === "archived") {
    return status;
  }
  return "completed";
}

function validateVisualType(type: unknown): "eeg" | "document" | "road" | "protein" | "emotion" | "default" {
  if (type === "eeg" || type === "document" || type === "road" || type === "protein" || type === "emotion") {
    return type;
  }
  return "default";
}

// Validate and normalize an experience object
export function validateExperience(exp: unknown): ValidatedExperience | null {
  if (!exp || typeof exp !== "object") {
    return null;
  }

  const e = exp as Record<string, unknown>;

  const id = safeString(e.id);
  if (!id) return null;

  return {
    id,
    title: safeString(e.title, "Unknown Position"),
    organization: safeString(e.organization, "Unknown Organization"),
    location: safeString(e.location, "Location not specified"),
    period: safeString(e.period, "Period not specified"),
    startDate: safeString(e.startDate),
    description: safeString(e.description, "No description available."),
    highlights: safeArray(e.highlights, []),
    impactMetrics: safeArray(e.impactMetrics).filter(
      (m): m is { value: string; label: string } =>
        typeof m === "object" && m !== null && 
        typeof (m as Record<string, unknown>).value === "string" &&
        typeof (m as Record<string, unknown>).label === "string"
    ),
    type: validateExperienceType(e.type),
  };
}

function validateExperienceType(type: unknown): "work" | "education" | "leadership" {
  if (type === "work" || type === "education" || type === "leadership") {
    return type;
  }
  return "work";
}

// Validate and normalize a publication object
export function validatePublication(pub: unknown): ValidatedPublication | null {
  if (!pub || typeof pub !== "object") {
    return null;
  }

  const p = pub as Record<string, unknown>;

  const id = safeString(p.id);
  if (!id) return null;

  return {
    id,
    title: safeString(p.title, "Untitled Publication"),
    venue: safeString(p.venue, "Unknown Venue"),
    year: safeString(p.year, ""),
    description: safeString(p.description),
    status: validatePublicationStatus(p.status),
    link: safeUrl(p.link),
  };
}

function validatePublicationStatus(status: unknown): "published" | "under-review" | "draft" {
  if (status === "published" || status === "under-review" || status === "draft") {
    return status;
  }
  return "published";
}

// Validate and normalize a research direction object
export function validateResearchDirection(dir: unknown): ValidatedResearchDirection | null {
  if (!dir || typeof dir !== "object") {
    return null;
  }

  const d = dir as Record<string, unknown>;

  const id = safeString(d.id);
  if (!id) return null;

  return {
    id,
    title: safeString(d.title, "Untitled Research"),
    description: safeString(d.description),
    status: validateResearchStatus(d.status),
  };
}

function validateResearchStatus(status: unknown): "active" | "exploring" | "planned" {
  if (status === "active" || status === "exploring" || status === "planned") {
    return status;
  }
  return "exploring";
}

// Validate and normalize an achievement object
export function validateAchievement(achievement: unknown): ValidatedAchievement | null {
  if (!achievement || typeof achievement !== "object") {
    return null;
  }

  const a = achievement as Record<string, unknown>;

  const id = safeString(a.id);
  if (!id) return null;

  return {
    id,
    title: safeString(a.title, "Untitled Achievement"),
    organization: safeString(a.organization, "Unknown Organization"),
    year: safeString(a.year, ""),
    description: safeString(a.description),
    type: validateAchievementType(a.type),
  };
}

function validateAchievementType(type: unknown): "award" | "certification" | "leadership" | "milestone" {
  if (type === "award" || type === "certification" || type === "leadership" || type === "milestone") {
    return type;
  }
  return "award";
}

// Validate and normalize a skill category object
export function validateSkillCategory(category: unknown): ValidatedSkillCategory | null {
  if (!category || typeof category !== "object") {
    return null;
  }

  const c = category as Record<string, unknown>;

  const id = safeString(c.id);
  if (!id) return null;

  return {
    id,
    title: safeString(c.title, "Untitled Category"),
    icon: safeString(c.icon, "code"),
    skills: safeArray(c.skills, []),
  };
}

// Batch validation helpers
export function validateProjectArray(data: unknown): ValidatedProject[] {
  return safeArray(data)
    .map(validateProject)
    .filter((p): p is ValidatedProject => p !== null);
}

export function validateExperienceArray(data: unknown): ValidatedExperience[] {
  return safeArray(data)
    .map(validateExperience)
    .filter((e): e is ValidatedExperience => e !== null);
}

export function validatePublicationArray(data: unknown): ValidatedPublication[] {
  return safeArray(data)
    .map(validatePublication)
    .filter((p): p is ValidatedPublication => p !== null);
}

export function validateResearchDirectionArray(data: unknown): ValidatedResearchDirection[] {
  return safeArray(data)
    .map(validateResearchDirection)
    .filter((d): d is ValidatedResearchDirection => d !== null);
}

export function validateAchievementArray(data: unknown): ValidatedAchievement[] {
  return safeArray(data)
    .map(validateAchievement)
    .filter((a): a is ValidatedAchievement => a !== null);
}

export function validateSkillCategoryArray(data: unknown): ValidatedSkillCategory[] {
  return safeArray(data)
    .map(validateSkillCategory)
    .filter((c): c is ValidatedSkillCategory => c !== null);
}
