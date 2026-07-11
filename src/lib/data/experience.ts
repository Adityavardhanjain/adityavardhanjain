export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  startDate: string;
  description: string;
  highlights: string[];
  type: "work" | "education" | "leadership";
}

export const experiences: Experience[] = [
  {
    id: "google",
    title: "Data Analytics Apprentice",
    organization: "Google",
    location: "Hyderabad, India",
    period: "2026 - Present",
    startDate: "2026-01",
    description: "Supporting Large Customer Sales with agentic automation and AI-driven solutions.",
    highlights: [
      "Evaluating campaign metrics for ROAS optimization",
      "Built AI-driven SQL generation and validation tools",
      "Developing automated workflows for large-scale data processing",
    ],
    type: "work",
  },
  {
    id: "tatvic",
    title: "Digital Analyst",
    organization: "Tatvic Analytics",
    location: "Ahmedabad, India",
    period: "2024 - 2026",
    startDate: "2024-01",
    description: "Uncovered conversion gaps in GA4/BigQuery datasets and automated workflows.",
    highlights: [
      "Analyzed GA4/BigQuery datasets for conversion optimization",
      "Automated workflows with n8n/Agentspace, reducing manual work by 60%",
      "Improved CVR by 4-5% for global publishers",
      "Received Spot Award for exceptional performance",
    ],
    type: "work",
  },
  {
    id: "codenscious",
    title: "Computer Vision Engineer",
    organization: "Codenscious Technologies",
    location: "Remote",
    period: "2024 (Jul - Dec)",
    startDate: "2024-07",
    description: "Developed computer vision solutions for real-world applications.",
    highlights: [
      "Developed YOLO-powered pothole detection system (Legolas)",
      "Integrated IoT and CV pipelines for real-time monitoring",
      "Built edge computing solutions for field deployment",
    ],
    type: "work",
  },
];

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  type: "award" | "certification" | "leadership" | "milestone";
}

export const achievements: Achievement[] = [
  {
    id: "sih-2023",
    title: "Winner - Smart India Hackathon",
    organization: "Software Edition",
    year: "2023",
    description: "National level hackathon winner for innovative software solution",
    type: "award",
  },
  {
    id: "gdsc-lead",
    title: "Google Developer Student Clubs Lead",
    organization: "GDSC",
    year: "2023-24",
    description: "Led technical community building, organized workshops and events",
    type: "leadership",
  },
  {
    id: "harvard-python",
    title: "Certified: Python for Data Science",
    organization: "Harvard University (edX)",
    year: "2023",
    description: "Verified certification in Python programming for data science applications",
    type: "certification",
  },
  {
    id: "harvard-inference",
    title: "Certified: Data Science: Inference and Modelling",
    organization: "Harvard University (edX)",
    year: "2023",
    description: "Verified certification in statistical inference and data modeling",
    type: "certification",
  },
  {
    id: "google-data",
    title: "Google Certified Data Analytics Professional",
    organization: "Google",
    year: "2024",
    description: "Professional certification in data analytics practices",
    type: "certification",
  },
  {
    id: "cisco-ccna",
    title: "CCNA Certified",
    organization: "Cisco Networking Academy",
    year: "2023",
    description: "Completed certifications in Introduction to Networks, Switching, Routing, and Wireless Essentials, and Enterprise Networking Security and Automation",
    type: "certification",
  },
  {
    id: "best-paper",
    title: "Best Paper Award",
    organization: "CARE IIST",
    year: "2024",
    description: "Awarded for research on Neural Signatures in EEG Analysis",
    type: "award",
  },
  {
    id: "munsoc",
    title: "High Commendation",
    organization: "IIT Indore Model United Nations",
    year: "2022",
    description: "Recognized for diplomatic skills and research preparation",
    type: "milestone",
  },
  {
    id: "spot-award",
    title: "Spot Award for Exceptional Performance",
    organization: "Tatvic Analytics",
    year: "2025",
    description: "Recognized for outstanding contributions as Consultant and Data Analyst",
    type: "award",
  },
];

export const certifications = achievements.filter(a => a.type === "certification");
export const awards = achievements.filter(a => a.type === "award");
export const leadership = achievements.filter(a => a.type === "leadership");
