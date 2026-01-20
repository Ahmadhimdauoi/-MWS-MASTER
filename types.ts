
export enum CategoryType {
  WEB = 'Web Programming & Design',
  ALGO = 'Programming & Algorithms',
  NETWORK = 'Networks',
  COMPILER = 'Languages & Compilers'
}

export interface Question {
  id: string;
  category: CategoryType;
  question: string;
  answer: string;
  explanation?: string;
}

export interface QuizResult {
  score: number;
  total: number;
  date: string;
}
