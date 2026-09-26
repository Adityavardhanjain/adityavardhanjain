export interface Experience {
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

export const experiences: Experience[] = [
  {
    id: "google",
    title: "Data Analytics Apprentice",
    organization: "Google",
    location: "Hyderabad, India",
    period: "March 2026 — Present",
    startDate: "2026-03",
    description: "Working in Google's gTech Ads Customer Experience team in an engineering-analyst capacity, investigating product and advertising performance issues and building deterministic agentic SQL workflows.",
    impactMetrics: [
      { value: "0.95", label: "Determinism score" },
    ],
    highlights: [
      "Analyze campaign metrics and user behavior to improve targeting, bidding strategies, account structure, and ROAS.",
      "Build dashboards and automated reporting systems for KPI monitoring and faster client decision-making.",
      "Develop internal SQL-generation and deterministic-validation workflows with agentic AI, SQLGlot, cloud computing, and statistical methods; achieved a 0.95 determinism score through metamorphic fuzzing.",
      "Investigate and resolve engineering issues in the Apps Advertisement product area through data-led root-cause and product-level analysis.",
    ],
    type: "work",
  },
  {
    id: "tatvic",
    title: "Digital Analyst",
    organization: "Tatvic Analytics",
    location: "Ahmedabad, India",
    period: "December 2024 — March 2026",
    startDate: "2024-12",
    description: "Delivered advanced analytics and automation solutions across lead-generation and publisher clients using GA4, BigQuery, SQL, statistics, and agentic workflows.",
    impactMetrics: [
      { value: "4–5%", label: "CVR Improvement" },
      { value: "60%", label: "Less Manual Reporting" },
      { value: "80–90%", label: "Fewer Reporting Discrepancies" },
      { value: "10+", label: "Advanced Analyses" },
      { value: "12%", label: "Lower Pipeline Latency" },
    ],
    highlights: [
      "Identified conversion gaps and developed data-backed marketing strategies.",
      "Automated reporting workflows using n8n and Google Agentspace.",
      "Performed root-cause analysis across complex client reporting systems.",
      "Delivered attribution, cohort, funnel, and customer-journey analyses.",
      "Improved data pipelines and analytical processes, reducing latency by 12%.",
    ],
    type: "work",
  },
  {
    id: "codenscious",
    title: "Computer Vision & Data Engineer",
    organization: "Codenscious Technologies",
    location: "Indore, India",
    period: "July 2024 — December 2024",
    startDate: "2024-07",
    description: "Built computer-vision, IoT, and analytical systems for road-condition monitoring, combining a high-volume image pipeline with geospatial context and edge deployment.",
    impactMetrics: [
      { value: "95%", label: "YOLOv11 mAP" },
      { value: "50k+", label: "Images in pipeline" },
    ],
    highlights: [
      "Built Legolas, a YOLOv11 pothole-detection system achieving 95% mAP.",
      "Designed an optimized vision pipeline for 50,000+ images, integrating IoT, geospatial tagging, edge computing, and dashboards.",
      "Researched SLAM and ROS 2 simulations to evaluate model accuracy and deployment feasibility.",
    ],
    type: "work",
  },
  {
    id: "care",
    title: "Data Science Research Intern",
    organization: "Center of Advanced Research and Engineering",
    location: "IIST, Indore, India",
    period: "July 2023 — July 2024",
    startDate: "2023-07",
    description: "Conducted brain–computer interface research examining the cognitive effects of voluntary actions through EEG signals.",
    highlights: [
      "Applied deep learning, statistical analysis, signal processing, and data visualization to neural data.",
      "Contributed to research on neural signatures and cognitive inference.",
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
