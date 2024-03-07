export interface Question {
  id: string;
  text: string;
  options: Option[];
  correctAnswer: string;
  description?: string;
}

export interface Option {
  id: string;
  text: string;
}
