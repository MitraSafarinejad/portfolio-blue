export interface PlaygroundItem {
  id: string;
  number: string;
  title: string;
  description: string;
  type: 'interactive' | 'visual' | 'experimental';
  status: 'active' | 'prototype' | 'concept';
}

export const playgroundItems: PlaygroundItem[] = [
  {
    id: 'play-001',
    number: '01',
    title: 'MOVE THE LIGHT',
    description: 'A visual object changes lighting according to cursor position. Explore how light transforms perception.',
    type: 'interactive',
    status: 'active'
  },
  {
    id: 'play-002',
    number: '02',
    title: 'BREAK THE IMAGE',
    description: 'Moving the cursor creates subtle image distortion. Watch pixels respond to your presence.',
    type: 'interactive',
    status: 'active'
  },
  {
    id: 'play-003',
    number: '03',
    title: 'PROMPT → IMAGE',
    description: 'A simulated AI generation interface. Type a prompt and watch the visual response unfold.',
    type: 'experimental',
    status: 'prototype'
  },
  {
    id: 'play-004',
    number: '04',
    title: 'COLOR MACHINE',
    description: 'Move sliders and change the entire visual environment. Feel how color shapes mood.',
    type: 'interactive',
    status: 'active'
  },
  {
    id: 'play-005',
    number: '05',
    title: 'CHARACTER LAB',
    description: 'An interface for exploring character consistency. Adjust parameters and observe transformations.',
    type: 'experimental',
    status: 'concept'
  },
  {
    id: 'play-006',
    number: '06',
    title: 'AI OR NOT?',
    description: 'An interactive visual guessing game. Can you tell what was made by AI and what was not?',
    type: 'visual',
    status: 'prototype'
  }
];
