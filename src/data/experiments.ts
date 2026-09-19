export interface Experiment {
  id: string;
  title: string;
  category: string;
  status: 'completed' | 'in-progress' | 'failed' | 'test' | 'unfinished';
  description: string;
  tags: string[];
  color: string;
}

export const experiments: Experiment[] = [
  { id: 'exp-001', title: 'Prompt Test: Lighting Variations', category: 'PROMPT', status: 'completed', description: 'Testing how different lighting descriptions affect AI image generation consistency.', tags: ['lighting', 'prompt', 'consistency'], color: '#4039A8' },
  { id: 'exp-002', title: 'Image Restoration Pipeline', category: 'IMAGE', status: 'in-progress', description: 'Building a multi-step pipeline for restoring and enhancing degraded images.', tags: ['restoration', 'pipeline', 'enhancement'], color: '#FF6A2A' },
  { id: 'exp-003', title: 'Character Consistency Study', category: 'IMAGE', status: 'unfinished', description: 'Exploring methods to maintain character identity across multiple generated scenes.', tags: ['character', 'consistency', 'identity'], color: '#5148C8' },
  { id: 'exp-004', title: 'AI Video: Motion Transfer', category: 'VIDEO', status: 'test', description: 'Testing motion transfer techniques between AI-generated video sequences.', tags: ['video', 'motion', 'transfer'], color: '#E84B30' },
  { id: 'exp-005', title: 'Style Reference Exploration', category: 'VISUAL', status: 'completed', description: 'Building a reference library of visual styles for consistent AI generation.', tags: ['style', 'reference', 'visual'], color: '#302A86' },
  { id: 'exp-006', title: 'Color Palette Generation', category: 'VISUAL', status: 'failed', description: 'Attempted automated color palette extraction and application across scenes.', tags: ['color', 'palette', 'harmony'], color: '#FF781C' },
  { id: 'exp-007', title: 'Composition Rules Engine', category: 'AI SYSTEMS', status: 'in-progress', description: 'Encoding photographic composition rules into an AI-guided framing system.', tags: ['composition', 'rules', 'framing'], color: '#4039A8' },
  { id: 'exp-008', title: 'Multi-Modal Prompt Chains', category: 'PROMPT', status: 'test', description: 'Chaining text-to-image and image-to-image prompts for complex visual narratives.', tags: ['prompt', 'chain', 'multi-modal'], color: '#5148C8' },
  { id: 'exp-009', title: 'Depth Map Visualization', category: 'IMAGE', status: 'completed', description: 'Extracting and visualizing depth information from AI-generated scenes.', tags: ['depth', 'visualization', '3d'], color: '#FF6A2A' },
  { id: 'exp-010', title: 'AI Workflow Automation', category: 'AI SYSTEMS', status: 'in-progress', description: 'Automating repetitive AI generation workflows with custom orchestration.', tags: ['workflow', 'automation', 'pipeline'], color: '#302A86' },
  { id: 'exp-011', title: 'Texture Synthesis Study', category: 'VISUAL', status: 'unfinished', description: 'Exploring AI-based texture generation for surface and material design.', tags: ['texture', 'synthesis', 'material'], color: '#E84B30' },
  { id: 'exp-012', title: 'Negative Prompt Library', category: 'PROMPT', status: 'completed', description: 'Building a systematic library of negative prompts for quality control.', tags: ['negative', 'quality', 'control'], color: '#4039A8' },
];

export const categories = ['ALL', 'IMAGE', 'VIDEO', 'PROMPT', 'AI SYSTEMS', 'VISUAL'];
