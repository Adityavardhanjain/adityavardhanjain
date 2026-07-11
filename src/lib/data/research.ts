export interface ResearchDirection {
  id: string;
  title: string;
  description: string;
  status: "active" | "exploring" | "planned";
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: string;
  description: string;
  status: "published" | "under-review" | "draft";
  link?: string;
}

export const researchDirections: ResearchDirection[] = [
  {
    id: "world-models",
    title: "World Models",
    description: "Investigating how AI systems can build internal representations of environments for improved decision-making and prediction.",
    status: "exploring",
  },
  {
    id: "llm-verification",
    title: "LLM-Assisted Rule Verification in World Models",
    description: "Exploring whether external language models can function as high-level reasoning and verification systems within simulated environments.",
    status: "active",
  },
  {
    id: "intelligent-agents",
    title: "Intelligent Agents",
    description: "Developing autonomous agents that can perceive, reason, and act in complex environments with minimal human intervention.",
    status: "exploring",
  },
  {
    id: "ai-reasoning",
    title: "AI Reasoning",
    description: "Advancing symbolic and neural approaches to mathematical reasoning, logical inference, and problem-solving.",
    status: "exploring",
  },
  {
    id: "deterministic-consistency",
    title: "Deterministic Consistency in Simulated Environments",
    description: "Ensuring reproducible and consistent behavior in physics simulations for reliable agent training.",
    status: "exploring",
  },
  {
    id: "multimodal-intelligence",
    title: "Multimodal Intelligence",
    description: "Integrating vision, language, audio, and other modalities for comprehensive AI understanding.",
    status: "exploring",
  },
  {
    id: "comp-neuroscience",
    title: "Computational Neuroscience",
    description: "Using computational methods to understand brain function, neural coding, and cognitive processes.",
    status: "active",
  },
  {
    id: "bci",
    title: "Brain-Computer Interfaces",
    description: "Developing non-invasive BCI systems for neural signal interpretation and real-time feedback applications.",
    status: "active",
  },
  {
    id: "ai-space",
    title: "AI for Space Exploration",
    description: "Applying machine learning to autonomous navigation, planetary analysis, and spacecraft decision systems.",
    status: "planned",
  },
];

export const publications: Publication[] = [
  {
    id: "eeg-doctors",
    title: "A Method for Doctor's Handwritten Text Recognition",
    venue: "ACM Digital Library",
    year: "2026",
    description: "Utilizing Deep Learning and Ambiguity Handling for handwritten medical record extraction.",
    status: "published",
  },
  {
    id: "neural-signatures",
    title: "Neural Signatures of Eye Blinking",
    venue: "CARE IIST Conference",
    year: "2024",
    description: "EEG analysis for inferencing complex cognitive processes during voluntary actions. Awarded Best Paper.",
    status: "published",
    link: "#",
  },
];

export const currentResearchTransmission = {
  title: "LLM-Assisted Rule Verification in World Models",
  status: "Research Concept",
  summary: "Investigating whether an external language model can function as a high-level reasoning and verification system within a simulated world model—evaluating events, checking consistency with environmental rules, and supporting more coherent long-term simulations.",
  keywords: ["World Models", "LLM Verification", "Simulation", "AI Safety", "Consistency Checking"],
};
