export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  tags: string[];
}

export const timeline: TimelineItem[] = [
  {
    year: '2016',
    title: 'Software Engineering',
    description: 'Began the journey with code. Learning the fundamentals of programming, algorithms, and system design.',
    tags: ['Programming', 'Algorithms', 'Systems']
  },
  {
    year: '2019',
    title: 'AI & Robotics',
    description: 'Transitioned into artificial intelligence and robotics. First encounters with machine learning and intelligent systems.',
    tags: ['AI', 'Robotics', 'Machine Learning']
  },
  {
    year: '2021',
    title: 'AI / Computer Vision',
    description: 'Deep dove into computer vision. Object detection, segmentation, image processing — teaching machines to see.',
    tags: ['Computer Vision', 'Deep Learning', 'Image Processing']
  },
  {
    year: '2023',
    title: 'AI Systems / Prompt Engineering',
    description: 'Expanded into AI systems design and prompt engineering. Building workflows around large language models.',
    tags: ['LLMs', 'Prompt Engineering', 'AI Systems']
  },
  {
    year: 'NOW',
    title: 'AI × Visual Creation',
    description: 'Exploring the creative possibilities of artificial intelligence. Where technical knowledge meets visual storytelling.',
    tags: ['Generative AI', 'Visual Storytelling', 'Creative Technology']
  }
];
