export interface Club {
  id: string;
  name: string;
  description: string;
  category: string;
  meetingTime: string;
  roomNumber: string;
  tags: string[];
}

export interface QuizAnswer {
  questionId: string;
  answer: string;
}

export interface MatchResult {
  clubId: string;
  explanation: string;
}
