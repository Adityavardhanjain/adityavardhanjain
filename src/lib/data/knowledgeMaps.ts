export interface KnowledgeNode {
  id: string;
  label: string;
  x: number;
  y: number;
  description: string;
}

export interface KnowledgeMap {
  title: string;
  caption: string;
  nodes: KnowledgeNode[];
  links: [string, string][];
}

export const interestsMap: KnowledgeMap = {
  title: 'A map of what I follow',
  caption: 'AREAS OF INQUIRY · SELECT A NODE',
  nodes: [
    { id: 'intelligence', label: 'Intelligence', x: 49, y: 49, description: 'How systems represent, reason about, and act on the world.' },
    { id: 'vision', label: 'Vision', x: 23, y: 23, description: 'Perception systems that turn images and video into useful signals.' },
    { id: 'agents', label: 'Agents', x: 74, y: 19, description: 'Systems that combine a model with tools, memory, and action.' },
    { id: 'data', label: 'Data', x: 83, y: 54, description: 'Finding reliable structure and decisions inside messy data.' },
    { id: 'bci', label: 'BCI', x: 68, y: 81, description: 'Interpreting neural signals for human-computer interaction.' },
    { id: 'robotics', label: 'Robotics', x: 29, y: 80, description: 'Connecting perception and decision-making to physical systems.' },
    { id: 'space', label: 'Space', x: 13, y: 53, description: 'Autonomy and perception for systems operating beyond Earth.' },
  ],
  links: [
    ['intelligence', 'vision'], ['intelligence', 'agents'], ['intelligence', 'data'],
    ['intelligence', 'bci'], ['intelligence', 'robotics'], ['intelligence', 'space'],
    ['vision', 'robotics'], ['agents', 'space'], ['data', 'bci'],
  ],
};
