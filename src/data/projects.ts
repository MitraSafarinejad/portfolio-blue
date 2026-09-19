export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tools: string[];
  status: 'completed' | 'in-progress' | 'concept';
  image: string;
  color: string;
  sections: {
    idea: string;
    problem: string;
    approach: string;
    process: string;
    result: string;
    learned: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'vision-system',
    number: '01',
    title: '[PROJECT TITLE]',
    category: 'COMPUTER VISION',
    year: '[YEAR]',
    description: '[PROJECT DESCRIPTION — A computer vision system that demonstrates the intersection of deep learning and real-world application.]',
    tools: ['Python', 'PyTorch', 'OpenCV', '[TOOL]'],
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    color: '#4039A8',
    sections: {
      idea: '[THE IDEA — Describe the initial concept and inspiration behind this project.]',
      problem: '[THE PROBLEM — What challenge or gap did this project address?]',
      approach: '[THE APPROACH — How did you approach solving this problem?]',
      process: '[THE PROCESS — Walk through the technical implementation and key decisions.]',
      result: '[THE RESULT — What was the outcome? Include metrics if applicable.]',
      learned: '[WHAT I LEARNED — Key takeaways and reflections.]'
    }
  },
  {
    slug: 'ai-workflow-engine',
    number: '02',
    title: '[PROJECT TITLE]',
    category: 'AI SYSTEMS',
    year: '[YEAR]',
    description: '[PROJECT DESCRIPTION — An AI workflow system built to automate and orchestrate complex prompt engineering pipelines.]',
    tools: ['Python', 'LangChain', 'OpenAI API', '[TOOL]'],
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    color: '#FF6A2A',
    sections: {
      idea: '[THE IDEA — Describe the initial concept and inspiration behind this project.]',
      problem: '[THE PROBLEM — What challenge or gap did this project address?]',
      approach: '[THE APPROACH — How did you approach solving this problem?]',
      process: '[THE PROCESS — Walk through the technical implementation and key decisions.]',
      result: '[THE RESULT — What was the outcome? Include metrics if applicable.]',
      learned: '[WHAT I LEARNED — Key takeaways and reflections.]'
    }
  },
  {
    slug: 'generative-exploration',
    number: '03',
    title: '[PROJECT TITLE]',
    category: 'GENERATIVE AI',
    year: '[YEAR]',
    description: '[PROJECT DESCRIPTION — An exploration of generative AI for visual storytelling and creative expression.]',
    tools: ['Stable Diffusion', 'ComfyUI', 'Python', '[TOOL]'],
    status: 'in-progress',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    color: '#5148C8',
    sections: {
      idea: '[THE IDEA — Describe the initial concept and inspiration behind this project.]',
      problem: '[THE PROBLEM — What challenge or gap did this project address?]',
      approach: '[THE APPROACH — How did you approach solving this problem?]',
      process: '[THE PROCESS — Walk through the technical implementation and key decisions.]',
      result: '[THE RESULT — What was the outcome? Include metrics if applicable.]',
      learned: '[WHAT I LEARNED — Key takeaways and reflections.]'
    }
  },
  {
    slug: 'segmentation-pipeline',
    number: '04',
    title: '[PROJECT TITLE]',
    category: 'IMAGE PROCESSING',
    year: '[YEAR]',
    description: '[PROJECT DESCRIPTION — A segmentation pipeline for precise image analysis and feature extraction.]',
    tools: ['PyTorch', 'Segment Anything', 'OpenCV', '[TOOL]'],
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    color: '#E84B30',
    sections: {
      idea: '[THE IDEA — Describe the initial concept and inspiration behind this project.]',
      problem: '[THE PROBLEM — What challenge or gap did this project address?]',
      approach: '[THE APPROACH — How did you approach solving this problem?]',
      process: '[THE PROCESS — Walk through the technical implementation and key decisions.]',
      result: '[THE RESULT — What was the outcome? Include metrics if applicable.]',
      learned: '[WHAT I LEARNED — Key takeaways and reflections.]'
    }
  },
  {
    slug: 'prompt-lab',
    number: '05',
    title: '[PROJECT TITLE]',
    category: 'PROMPT ENGINEERING',
    year: '[YEAR]',
    description: '[PROJECT DESCRIPTION — A systematic exploration of prompt engineering techniques for consistent AI outputs.]',
    tools: ['GPT-4', 'Claude', 'Midjourney', '[TOOL]'],
    status: 'in-progress',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    color: '#302A86',
    sections: {
      idea: '[THE IDEA — Describe the initial concept and inspiration behind this project.]',
      problem: '[THE PROBLEM — What challenge or gap did this project address?]',
      approach: '[THE APPROACH — How did you approach solving this problem?]',
      process: '[THE PROCESS — Walk through the technical implementation and key decisions.]',
      result: '[THE RESULT — What was the outcome? Include metrics if applicable.]',
      learned: '[WHAT I LEARNED — Key takeaways and reflections.]'
    }
  },
  {
    slug: 'visual-narrative',
    number: '06',
    title: '[PROJECT TITLE]',
    category: 'AI × CREATIVITY',
    year: '[YEAR]',
    description: '[PROJECT DESCRIPTION — An AI-powered visual narrative project exploring the boundaries of machine creativity.]',
    tools: ['Stable Diffusion', 'After Effects', 'Python', '[TOOL]'],
    status: 'concept',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80',
    color: '#FF781C',
    sections: {
      idea: '[THE IDEA — Describe the initial concept and inspiration behind this project.]',
      problem: '[THE PROBLEM — What challenge or gap did this project address?]',
      approach: '[THE APPROACH — How did you approach solving this problem?]',
      process: '[THE PROCESS — Walk through the technical implementation and key decisions.]',
      result: '[THE RESULT — What was the outcome? Include metrics if applicable.]',
      learned: '[WHAT I LEARNED — Key takeaways and reflections.]'
    }
  }
];
