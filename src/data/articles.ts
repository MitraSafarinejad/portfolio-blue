export interface Article {
  slug: string;
  number: string;
  title: string;
  category: string;
  date: string;
  description: string;
  readingTime: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    slug: 'computer-vision-to-creative-ai',
    number: '001',
    title: 'From Computer Vision to Creative AI: A Journey',
    category: 'AI',
    date: '2025',
    description: 'Reflections on transitioning from traditional computer vision research to the creative possibilities of generative AI.',
    readingTime: '8 min read',
    tags: ['AI', 'Computer Vision', 'Creative Technology']
  },
  {
    slug: 'prompt-engineering-as-craft',
    number: '002',
    title: 'Prompt Engineering as a Visual Craft',
    category: 'EXPERIMENTS',
    date: '2025',
    description: 'Exploring how prompt engineering shares more with visual arts than with traditional programming.',
    readingTime: '6 min read',
    tags: ['Prompt Engineering', 'Visual AI', 'Experiments']
  },
  {
    slug: 'building-ai-systems',
    number: '003',
    title: 'Building AI Systems That Think With You',
    category: 'AI',
    date: '2024',
    description: 'Notes on designing AI workflows that augment human creativity rather than replace it.',
    readingTime: '10 min read',
    tags: ['AI Systems', 'Learning', 'Creative Technology']
  },
  {
    slug: 'image-segmentation-art',
    number: '004',
    title: 'Image Segmentation as an Art Form',
    category: 'VISUAL AI',
    date: '2024',
    description: 'How understanding pixel-level image analysis changed the way I see visual composition.',
    readingTime: '7 min read',
    tags: ['Visual AI', 'Image Processing', 'Experiments']
  },
  {
    slug: 'character-consistency-challenge',
    number: '005',
    title: 'The Character Consistency Challenge',
    category: 'EXPERIMENTS',
    date: '2025',
    description: 'Notes from attempting to maintain visual consistency across AI-generated characters and scenes.',
    readingTime: '5 min read',
    tags: ['Generative AI', 'Experiments', 'Visual AI']
  },
  {
    slug: 'learning-to-see-differently',
    number: '006',
    title: 'Learning to See Differently',
    category: 'LEARNING',
    date: '2024',
    description: 'How studying machine learning fundamentally changed my relationship with visual perception.',
    readingTime: '9 min read',
    tags: ['Learning', 'AI', 'Creative Technology']
  }
];
