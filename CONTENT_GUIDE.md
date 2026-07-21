# Content Management Guide

This file (`content.json`) contains all editable content for your portfolio website. You can update any text, add/remove items, and modify sections without touching the code.

## Quick Start

1. Open `content.json` in your preferred text editor
2. Make your changes
3. Save the file
4. The site will automatically reflect your changes

## File Structure

The content is organized into sections that match the website structure:

```json
{
  "hero": { ... },      // Home page hero section
  "about": { ... },     // About/Profile section
  "projects": { ... },  // Projects section
  "research": { ... },  // Research Lab section
  "skills": { ... },    // Skills section
  "experience": { ... }, // Experience & Achievements
  "contact": { ... }    // Contact section
}
```

## Common Tasks

### 1. Edit Text Content

Find the section you want to edit and change the text values:

```json
"hero": {
  "biography": "Your new biography text here..."
}
```

### 2. Add a New Project

Add a new object to the `projects.items` array:

```json
{
  "projects": {
    "items": [
      {
        "id": "my-new-project",
        "missionId": "MISSION-06",
        "title": "My New Project Title",
        "objective": "Brief objective statement",
        "description": "Full project description...",
        "technologies": ["Tech1", "Tech2"],
        "researchThemes": ["Theme1", "Theme2"],
        "github": "https://github.com/...",
        "featured": true,
        "status": "completed",
        "visualType": "default"
      }
    ]
  }
}
```

### 3. Remove a Project

Set `featured: false` to archive it, or remove the item from the array entirely.

### 4. Add/Remove Skills

Edit the `skills.categories` array:

```json
"skills": {
  "categories": [
    {
      "id": "new-category",
      "title": "New Category Title",
      "icon": "code",
      "skills": ["Skill1", "Skill2", "Skill3"]
    }
  ]
}
```

### 5. Add a New Experience

Add to `experience.items`:

```json
{
  "experience": {
    "items": [
      {
        "id": "new-job",
        "title": "Job Title",
        "organization": "Company Name",
        "location": "City, Country",
        "period": "Jan 2024 — Present",
        "startDate": "2024-01",
        "description": "Role description...",
        "highlights": [
          "Achievement 1",
          "Achievement 2"
        ],
        "impactMetrics": [
          { "value": "50%", "label": "Improvement" }
        ],
        "type": "work"
      }
    ]
  }
}
```

### 6. Add an Achievement

Add to `experience.achievements.items`:

```json
{
  "experience": {
    "achievements": {
      "items": [
        {
          "id": "new-achievement",
          "title": "Award or Certification Title",
          "organization": "Issuing Organization",
          "year": "2024",
          "description": "Brief description",
          "type": "award"
        }
      ]
    }
  }
}
```

### 7. Add Research Direction

Add to `research.directions`:

```json
{
  "research": {
    "directions": [
      {
        "id": "new-research",
        "title": "Research Topic Title",
        "description": "Description of the research area...",
        "status": "active"
      }
    ]
  }
}
```

### 8. Add Publication

Add to `research.publications`:

```json
{
  "research": {
    "publications": [
      {
        "id": "new-paper",
        "title": "Paper Title",
        "venue": "Conference or Journal",
        "year": "2024",
        "description": "Paper description...",
        "status": "published",
        "link": "https://..."
      }
    ]
  }
}
```

## Status Values

### Project Status
- `"completed"` - Finished projects
- `"in-progress"` - Ongoing projects
- `"archived"` - Old/retired projects

### Research Status
- `"active"` - Currently working on
- `"exploring"` - Investigating/pilot projects
- `"planned"` - Future intentions

### Publication Status
- `"published"` - Completed publication
- `"under-review"` - In review process
- `"draft"` - Work in progress

### Achievement Type
- `"award"` - Awards and prizes
- `"certification"` - Professional certifications
- `"leadership"` - Leadership positions
- `"milestone"` - Notable achievements

### Experience Type
- `"work"` - Work experience
- `"education"` - Academic background
- `"leadership"` - Leadership roles

## Tips

1. **Valid JSON**: Ensure all JSON syntax is valid (commas between items, quotes around keys)
2. **Unique IDs**: Each item needs a unique `id` field
3. **Featured vs Archived**: Set `featured: true` for projects to display prominently; `featured: false` archives them
4. **Visual Types**: Projects can have different visual types: `"eeg"`, `"document"`, `"road"`, `"protein"`, `"emotion"`, `"default"`

## Still Have Questions?

If you need to make structural changes (like adding a new section to the page), you'll need to modify the code in `src/components/` or `src/app/page.tsx`. The content.json handles all the text and data within existing sections.
