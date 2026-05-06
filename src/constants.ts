import { Club } from './types';

export const CLUBS: Club[] = [
  {
    id: 'robotics',
    name: 'Robotics Club',
    description: 'Build and program robots for local competitions.',
    category: 'STEM',
    meetingTime: 'Tuesdays at 3:30 PM',
    roomNumber: 'B102',
    tags: ['logic', 'building', 'coding', 'teamwork']
  },
  {
    id: 'art',
    name: 'Guild of Artists',
    description: 'A space for traditional and digital art creation.',
    category: 'Arts',
    meetingTime: 'Wednesdays at 4:00 PM',
    roomNumber: 'A204',
    tags: ['creative', 'quiet', 'visual', 'solo']
  },
  {
    id: 'debate',
    name: 'Debate Society',
    description: 'Engage in lively discussions on current global events.',
    category: 'Social',
    meetingTime: 'Thursdays at 3:30 PM',
    roomNumber: 'C301',
    tags: ['speaking', 'logic', 'teamwork', 'competitive']
  },
  {
    id: 'hiking',
    name: 'Outdoor Adventure Club',
    description: 'Explore local trails and learn survival skills.',
    category: 'Sports',
    meetingTime: 'Fridays at 3:45 PM',
    roomNumber: 'Lobby',
    tags: ['outdoors', 'active', 'social', 'nature']
  },
  {
    id: 'coding',
    name: 'Algorithm Avengers',
    description: 'Competitive programming and software development.',
    category: 'STEM',
    meetingTime: 'Mondays at 4:00 PM',
    roomNumber: 'B105',
    tags: ['logic', 'screens', 'coding', 'solo']
  },
  {
    id: 'theater',
    name: 'Drama Guild',
    description: 'Acting, stage design, and annual play production.',
    category: 'Arts',
    meetingTime: 'Tuesdays at 4:00 PM',
    roomNumber: 'Auditorium',
    tags: ['creative', 'active', 'teamwork', 'expressive']
  },
  {
    id: 'chess',
    name: 'Grandmasters Chess Club',
    description: 'Strategic gameplay for all skill levels.',
    category: 'Social',
    meetingTime: 'Wednesdays at 3:30 PM',
    roomNumber: 'Library Annex',
    tags: ['logic', 'quiet', 'competitive', 'solo']
  },
  {
    id: 'esports',
    name: 'E-Sports League',
    description: 'Competitive gaming and tournament practice.',
    category: 'Sports',
    meetingTime: 'Fridays at 4:00 PM',
    roomNumber: 'Computer Lab 2',
    tags: ['screens', 'competitive', 'teamwork', 'social']
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 'q1',
    question: 'Where do you feel most "in the zone"?',
    options: [
      { id: 'screens', label: 'Behind a screen or solving a digital puzzle', icon: 'monitor' },
      { id: 'active', label: 'On my feet, moving and being physically active', icon: 'zap' },
      { id: 'nature', label: 'Immersed in nature or explores outdoors', icon: 'tree-pine' },
      { id: 'studio', label: 'In a creative studio with tools and canvas', icon: 'palette' }
    ]
  },
  {
    id: 'q2',
    question: 'How do you prefer to tackle challenges?',
    options: [
      { id: 'alone', label: 'I thrive when working independently', icon: 'user' },
      { id: 'team', label: 'I love collaborating and brainstorming in a group', icon: 'users' },
      { id: 'lead', label: 'I like organizing people and leading the way', icon: 'shield' }
    ]
  },
  {
    id: 'q3',
    question: 'What drives your curiosity most?',
    options: [
      { id: 'logic', label: 'Logic, efficiency, and how things work', icon: 'cpu' },
      { id: 'expression', label: 'Emotions, storytelling, and self-expression', icon: 'mic' },
      { id: 'competition', label: 'Winning, strategy, and being the best', icon: 'trophy' }
    ]
  }
];
