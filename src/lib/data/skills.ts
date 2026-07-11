export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: "code",
    skills: ["Python", "SQL", "C", "C++", "Bash", "R"],
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence",
    icon: "brain",
    skills: ["Machine Learning", "Deep Learning", "Generative AI", "Computer Vision", "Natural Language Processing", "Time-Series Analysis"],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    icon: "layers",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "BERT", "MediaPipe", "Ultralytics YOLO", "Transformers", "LangChain"],
  },
  {
    id: "data",
    title: "Data & Analytics",
    icon: "database",
    skills: ["Data Analysis", "Data Visualization", "Probability & Statistics", "Microsoft Excel", "Power BI", "Tableau", "Database Management", "BigQuery", "Pandas", "NumPy"],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & DevOps",
    icon: "server",
    skills: ["Git", "Docker", "Kubernetes", "Google Cloud Platform", "Linux", "Flask", "React", "AWS", "GCP", "CI/CD"],
  },
  {
    id: "robotics",
    title: "Robotics & Embedded",
    icon: "cpu",
    skills: ["ROS", "Gazebo", "Raspberry Pi", "Arduino", "Edge Computing", "Computer Networking"],
  },
  {
    id: "research",
    title: "Research & Signal Processing",
    icon: "activity",
    skills: ["EEG Analysis", "Brain-Computer Interfaces", "Signal Processing", "Feature Extraction", "Experimental Analysis", "Research Methodology", "Technical Writing"],
  },
];

export const interestNodes = [
  { id: "ai", label: "Artificial Intelligence", x: 50, y: 50, connections: ["ml", "nlp", "genai", "agents"] },
  { id: "ml", label: "Machine Learning", x: 30, y: 30, connections: ["ai", "cv", "datascience", "agents"] },
  { id: "cv", label: "Computer Vision", x: 70, y: 30, connections: ["ml", "robotics", "bci"] },
  { id: "nlp", label: "Natural Language Processing", x: 20, y: 60, connections: ["ai", "genai", "agents"] },
  { id: "genai", label: "Generative AI", x: 40, y: 20, connections: ["ai", "nlp", "agents"] },
  { id: "datascience", label: "Data Science", x: 60, y: 70, connections: ["ml", "stats", "visualization"] },
  { id: "bci", label: "Brain-Computer Interfaces", x: 80, y: 50, connections: ["cv", "neuroscience", "hci"] },
  { id: "neuroscience", label: "Computational Neuroscience", x: 90, y: 30, connections: ["bci", "ai"] },
  { id: "agents", label: "Intelligent Agents", x: 50, y: 40, connections: ["ai", "ml", "nlp", "genai"] },
  { id: "robotics", label: "Robotics", x: 85, y: 70, connections: ["cv", "embedded"] },
  { id: "spacetech", label: "Space Technology", x: 10, y: 85, connections: ["ai", "robotics"] },
];
