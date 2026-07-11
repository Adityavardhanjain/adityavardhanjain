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
  status: "completed" | "in-progress" | "archived";
  visualType: "eeg" | "document" | "road" | "protein" | "emotion" | "default";
}

export const projects: Project[] = [
  {
    id: "neuro-tetris",
    missionId: "MISSION-01",
    title: "Brain-Computer Interface: Tetris Outcome Prediction",
    objective: "Real-time BCI system using EEG signals to predict Tetris gameplay outcomes",
    description: "Developed a real-time brain-computer interface system that processes EEG signals collected using an OpenBCI UltraCortex headset during Tetris gameplay. Applied signal processing, feature extraction, data analysis, and machine-learning techniques to investigate neural activity and predict gameplay outcomes.",
    technologies: ["Python", "OpenBCI", "BrainFlow", "EEG Signal Processing", "FFT", "Machine Learning", "Feature Engineering", "Data Analysis"],
    researchThemes: ["Brain-computer interfaces", "Neural-signal analysis", "Human-computer interaction", "Real-time prediction"],
    github: "https://github.com/adityavardhanjain/EEG-Tetris-Prediction",
    featured: true,
    status: "completed",
    visualType: "eeg",
  },
  {
    id: "legal-tesseract",
    missionId: "MISSION-02",
    title: "AI-Powered Legal Document Summarization and Translation",
    objective: "End-to-end platform for legal document OCR, summarization, and multilingual translation",
    description: "Built an intelligent legal-document platform that extracts text using OCR, summarizes complex legal content using language models, and translates information into Indian languages to improve accessibility.",
    technologies: ["Python", "Flask", "Tesseract OCR", "Legal-BERT", "Gemini", "Natural Language Processing", "Translation", "Generative AI"],
    researchThemes: ["Legal AI", "Document understanding", "Multilingual NLP", "Accessibility"],
    github: "https://github.com/adityavardhanjain/Legal-Tesseract",
    demo: "https://legal-tesseract.onrender.com",
    featured: true,
    status: "completed",
    visualType: "document",
  },
  {
    id: "pothole-detection",
    missionId: "MISSION-03",
    title: "AI Pothole Detection and Road-Maintenance System",
    objective: "Computer-vision system for real-time road damage detection with geospatial tracking",
    description: "Developed a computer-vision system for detecting road damage using YOLO, edge-computing hardware, cameras, and GPS. Designed the system to identify potholes, capture geospatial information, and support infrastructure monitoring through analytical dashboards.",
    technologies: ["YOLOv9", "Python", "OpenCV", "Raspberry Pi", "Computer Vision", "GPS", "Power BI", "Data Visualization"],
    researchThemes: ["Real-time object detection", "Edge AI", "Geospatial mapping", "Smart infrastructure"],
    github: "https://github.com/adityavardhanjain/Pothole-Detection",
    featured: true,
    status: "completed",
    visualType: "road",
  },
  {
    id: "protein-structure",
    missionId: "MISSION-04",
    title: "Interactive 3D Protein Structure Prediction",
    objective: "Web application for protein structure prediction from amino acid sequences",
    description: "Created an interactive application that predicts protein structures from amino-acid sequences and visualizes the generated structures in three dimensions using ESMFold.",
    technologies: ["ESMFold", "Python", "Streamlit", "Deep Learning", "Bioinformatics", "3D Molecular Visualization"],
    researchThemes: ["Protein structure prediction", "Structural biology", "Deep learning applications", "Molecular visualization"],
    github: "https://github.com/adityavardhanjain/Protein-Structure-Prediction",
    demo: "https://protein-structure-predictor.streamlit.app",
    featured: true,
    status: "completed",
    visualType: "protein",
  },
  {
    id: "emotion-recognition",
    missionId: "MISSION-05",
    title: "Emotion Recognition Through Brain-Computer Interface",
    objective: "EEG-based emotion classification using signal processing and machine learning",
    description: "Explored emotion recognition using EEG signals, signal-processing methods, feature extraction, and machine-learning models to classify emotional states from neural activity patterns.",
    technologies: ["Python", "EEG", "Signal Processing", "Machine Learning", "Feature Extraction"],
    researchThemes: ["Affective computing", "Neural pattern recognition", "Emotion classification", "BCI applications"],
    featured: false,
    status: "completed",
    visualType: "emotion",
  },
];

export const archivedProjects = [
  { id: "house-price", title: "House Price Prediction", tech: "Python, Scikit-learn, Pandas" },
  { id: "sales-forecasting", title: "Store-Sales Time-Series Forecasting", tech: "Python, Prophet, Pandas" },
  { id: "weapon-detection", title: "Weapon Detection Through CCTV", tech: "YOLO, OpenCV, Python" },
  { id: "data-analytics", title: "Data-Analytics Projects", tech: "SQL, Python, Tableau" },
];

export const featuredProjects = projects.filter(p => p.featured);
