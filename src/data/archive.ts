export interface ArchiveItem {
  id: string;
  title: string;
  type: 'test' | 'failed' | 'iteration' | 'reference' | 'idea' | 'abandoned' | 'revisit';
  label: string;
  description: string;
  date: string;
  color: string;
  image?: string;
}

export const archiveItems: ArchiveItem[] = [
  { id: 'arc-001', title: 'Bounding Box Experiments', type: 'test', label: 'TEST 001', description: 'Early experiments with object detection visualization overlays.', date: '2021', color: '#4039A8', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80' },
  { id: 'arc-002', title: 'Failed Segmentation Attempt', type: 'failed', label: 'FAILED', description: 'First attempt at semantic segmentation on custom dataset.', date: '2021', color: '#E84B30' },
  { id: 'arc-003', title: 'GAN Training Logs', type: 'iteration', label: 'ITERATION 04', description: 'Training logs from early GAN experiments.', date: '2022', color: '#5148C8' },
  { id: 'arc-004', title: 'Visual Reference: Color Theory', type: 'reference', label: 'REFERENCE', description: 'Collection of color theory references for AI generation.', date: '2024', color: '#FF6A2A', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&q=80' },
  { id: 'arc-005', title: 'Idea: AI Director', type: 'idea', label: 'IDEA', description: 'Concept for an AI system that directs visual composition.', date: '2025', color: '#302A86' },
  { id: 'arc-006', title: 'Abandoned: Style Transfer v2', type: 'abandoned', label: 'ABANDONED', description: 'Second iteration of neural style transfer experiments.', date: '2023', color: '#FF781C' },
  { id: 'arc-007', title: 'Revisit: Prompt Compression', type: 'revisit', label: 'REVISIT', description: 'Earlier prompt compression experiments worth revisiting.', date: '2024', color: '#4039A8' },
  { id: 'arc-008', title: 'Feature Map Visualization', type: 'test', label: 'TEST 002', description: 'Visualizing CNN feature maps at different layers.', date: '2021', color: '#5148C8', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80' },
  { id: 'arc-009', title: 'Prompt: Emotional Lighting', type: 'test', label: 'TEST 003', description: 'Testing emotional tone through lighting descriptions.', date: '2025', color: '#FF6A2A' },
  { id: 'arc-010', title: 'Failed: Video Consistency', type: 'failed', label: 'FAILED', description: 'Attempted frame-to-frame consistency in AI video.', date: '2024', color: '#E84B30' },
  { id: 'arc-011', title: 'Reference: Film Composition', type: 'reference', label: 'REFERENCE', description: 'Film stills used as composition references.', date: '2025', color: '#302A86', image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&q=80' },
  { id: 'arc-012', title: 'Idea: Generative Characters', type: 'idea', label: 'IDEA', description: 'Concept for consistent character generation across narratives.', date: '2025', color: '#4039A8' },
  { id: 'arc-013', title: 'Iteration: Upscaling Pipeline', type: 'iteration', label: 'ITERATION 07', description: 'Multiple upscaling approaches compared.', date: '2024', color: '#5148C8' },
  { id: 'arc-014', title: 'Abandoned: 3D from 2D', type: 'abandoned', label: 'ABANDONED', description: 'Attempted 3D reconstruction from single AI images.', date: '2023', color: '#FF781C' },
  { id: 'arc-015', title: 'Revisit: Attention Maps', type: 'revisit', label: 'REVISIT', description: 'Attention visualization from transformer models.', date: '2024', color: '#FF6A2A' },
  { id: 'arc-016', title: 'Test: Color Grading AI', type: 'test', label: 'TEST 004', description: 'AI-assisted color grading for generated images.', date: '2025', color: '#E84B30' },
];
